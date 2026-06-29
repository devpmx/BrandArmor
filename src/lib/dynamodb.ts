import { DynamoDBClient, CreateTableCommand, DescribeTableCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand, UpdateCommand, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";

const region = process.env.AWS_REGION || "us-east-1";

const clientConfig: any = {
  region,
};

// Check if a local endpoint is specified (useful for development)
if (process.env.AWS_ENDPOINT) {
  clientConfig.endpoint = process.env.AWS_ENDPOINT;
}

export const ddbClient = new DynamoDBClient(clientConfig);

export const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
  unmarshallOptions: {
    wrapNumbers: false,
  },
});

export const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || "BrandArmor";

export interface Metadata {
  PK: string; // USER#100
  SK: string; // METADATA
  threatLevel: "Clean" | "Warning" | "Critical";
  lastChecked: string;
  totalProducts: number;
  activeAlertsCount: number;
  resolvedAlertsCount: number;
  resolvedThisMonth: number;
}

export interface Product {
  PK: string; // USER#100
  SK: string; // PRODUCT#<ASIN>
  asin: string;
  title: string;
  price: number;
  imageUrl: string;
  bulletPoints: string[];
  status: "Clean" | "Warning" | "Alert";
}

export interface Alert {
  PK: string; // PRODUCT#<ASIN>
  SK: string; // ALERT#<Timestamp>
  asin: string;
  timestamp: number;
  alertType: "PRICE_DROP" | "TITLE_DRIFT" | "BULLET_POINTS_DRIFT";
  severity: "Warning" | "Critical";
  status: "Active" | "Takedown Initiated" | "Resolved";
  description: string;
  deviationDetails: {
    authorized: Record<string, any>;
    hijacked: Record<string, any>;
  };
  takedownSubmittedAt?: string;
  dmcaDetails?: any;
}

/**
 * Creates the DynamoDB table if it does not exist.
 * Uses PAY_PER_REQUEST (On-Demand) billing mode to minimize costs.
 */
export async function createTableIfNotExists(): Promise<string> {
  try {
    await ddbClient.send(new DescribeTableCommand({ TableName: TABLE_NAME }));
    return "Table already exists.";
  } catch (error: any) {
    if (error.name === "ResourceNotFoundException" || error.name === "ResourceNotFound") {
      const createCommand = new CreateTableCommand({
        TableName: TABLE_NAME,
        KeySchema: [
          { AttributeName: "PK", KeyType: "HASH" },
          { AttributeName: "SK", KeyType: "RANGE" }
        ],
        AttributeDefinitions: [
          { AttributeName: "PK", AttributeType: "S" },
          { AttributeName: "SK", AttributeType: "S" }
        ],
        BillingMode: "PAY_PER_REQUEST"
      });

      await ddbClient.send(createCommand);

      // Wait for table to become ACTIVE
      let status = "CREATING";
      let retries = 0;
      while (status !== "ACTIVE" && retries < 15) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const desc = await ddbClient.send(new DescribeTableCommand({ TableName: TABLE_NAME }));
        status = desc.Table?.TableStatus || "CREATING";
        retries++;
      }
      return `Table created successfully. Status: ${status}`;
    }
    throw error;
  }
}

/**
 * Gets global metadata and analytics.
 */
export async function getMetadata(): Promise<Metadata | null> {
  try {
    const result = await ddbDocClient.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: {
          PK: "USER#100",
          SK: "METADATA"
        }
      })
    );
    return (result.Item as Metadata) || null;
  } catch (err) {
    console.error("Error fetching metadata:", err);
    return null;
  }
}

/**
 * Gets all products monitored by the user.
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const result = await ddbDocClient.send(
      new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": "USER#100",
          ":sk": "PRODUCT#"
        }
      })
    );
    return (result.Items as Product[]) || [];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}

/**
 * Gets all alerts (active or history) for a specific product ASIN.
 */
export async function getAlertsForProduct(asin: string): Promise<Alert[]> {
  try {
    const result = await ddbDocClient.send(
      new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
          ":pk": `PRODUCT#${asin}`,
          ":sk": "ALERT#"
        }
      })
    );
    return (result.Items as Alert[]) || [];
  } catch (err) {
    console.error(`Error fetching alerts for product ${asin}:`, err);
    return [];
  }
}

/**
 * Recalculate Threat Level and active count from the DB, and update the METADATA item.
 */
export async function recalculateThreatLevel(): Promise<Metadata> {
  const products = await getProducts();
  
  // Fetch alerts for all products
  const alertsPromises = products.map(p => getAlertsForProduct(p.asin));
  const allAlertsLists = await Promise.all(alertsPromises);
  const allAlerts = allAlertsLists.flat();

  const activeAlerts = allAlerts.filter(a => a.status === "Active");
  const activeAlertsCount = activeAlerts.length;
  
  const resolvedAlerts = allAlerts.filter(a => a.status === "Resolved" || a.status === "Takedown Initiated");
  const resolvedAlertsCount = resolvedAlerts.length;

  let newThreatLevel: "Clean" | "Warning" | "Critical" = "Clean";
  if (activeAlertsCount > 0) {
    const hasCritical = activeAlerts.some(a => a.severity === "Critical");
    newThreatLevel = hasCritical ? "Critical" : "Warning";
  }

  // Get existing metadata to preserve history/month stats
  const existingMetadata = await getMetadata();
  const resolvedThisMonth = existingMetadata?.resolvedThisMonth ?? 0;

  const updatedMetadata: Metadata = {
    PK: "USER#100",
    SK: "METADATA",
    threatLevel: newThreatLevel,
    lastChecked: new Date().toISOString(),
    totalProducts: products.length,
    activeAlertsCount,
    resolvedAlertsCount,
    resolvedThisMonth
  };

  await ddbDocClient.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: updatedMetadata
    })
  );

  return updatedMetadata;
}
