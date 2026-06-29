import { NextResponse } from "next/server";
import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import {
  ddbDocClient,
  TABLE_NAME,
  recalculateThreatLevel,
  Alert,
  Product
} from "@/lib/dynamodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { asin, timestamp, dmcaDetails } = body;

    if (!asin || !timestamp) {
      return NextResponse.json(
        { success: false, error: "Missing ASIN or alert timestamp in request" },
        { status: 400 }
      );
    }

    // 1. Fetch the alert
    const alertKey = {
      PK: `PRODUCT#${asin}`,
      SK: `ALERT#${timestamp}`
    };

    const alertRes = await ddbDocClient.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: alertKey
      })
    );

    const alert = alertRes.Item as Alert | undefined;
    if (!alert) {
      return NextResponse.json(
        { success: false, error: "Alert not found" },
        { status: 404 }
      );
    }

    // Update alert status to Resolved (meaning the threat has been dealt with / takedown filed)
    const updatedAlert: Alert = {
      ...alert,
      status: "Resolved",
      takedownSubmittedAt: new Date().toISOString(),
      dmcaDetails
    };

    await ddbDocClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: updatedAlert
      })
    );

    // 2. Fetch and update the product status back to "Clean"
    const productKey = {
      PK: "USER#100",
      SK: `PRODUCT#${asin}`
    };

    const productRes = await ddbDocClient.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: productKey
      })
    );

    const product = productRes.Item as Product | undefined;
    if (product) {
      const updatedProduct: Product = {
        ...product,
        status: "Clean"
      };

      await ddbDocClient.send(
        new PutCommand({
          TableName: TABLE_NAME,
          Item: updatedProduct
        })
      );
    }

    // 3. Recalculate Threat Level and update metadata
    const updatedMetadata = await recalculateThreatLevel();

    // Increment monthly resolved count
    updatedMetadata.resolvedThisMonth = (updatedMetadata.resolvedThisMonth || 0) + 1;
    
    await ddbDocClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: updatedMetadata
      })
    );

    return NextResponse.json({
      success: true,
      message: "Takedown report filed and listing threat resolved",
      data: {
        alert: updatedAlert,
        metadata: updatedMetadata
      }
    });
  } catch (err: any) {
    console.error("Takedown API error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process takedown request" },
      { status: 500 }
    );
  }
}
