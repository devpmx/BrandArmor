import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {
  getProducts,
  recalculateThreatLevel,
  ddbDocClient,
  TABLE_NAME,
  Alert,
  Product
} from "@/lib/dynamodb";

export async function GET() {
  try {
    const products = await getProducts();
    if (products.length === 0) {
      return NextResponse.json(
        { success: false, error: "No products found to simulate drift. Seed the DB first." },
        { status: 400 }
      );
    }

    // Find a clean product, or fallback to the first product if all are already in Alert status
    let targetProduct = products.find((p) => p.status === "Clean");
    if (!targetProduct) {
      targetProduct = products[0]; // Fallback to allow re-triggering simulation
    }

    const now = Date.now();
    let alert: Alert;
    let updatedProduct: Product;

    // Simulate different drift types based on the product ASIN
    if (targetProduct.asin === "B0892XSPLT") {
      updatedProduct = {
        ...targetProduct,
        status: "Alert"
      };

      alert = {
        PK: `PRODUCT#${targetProduct.asin}`,
        SK: `ALERT#${now}`,
        asin: targetProduct.asin,
        timestamp: now,
        alertType: "TITLE_DRIFT",
        severity: "Critical",
        status: "Active",
        description: "Critical Drift: Title changed to generic name and price cut by 58% by unauthorized reseller.",
        deviationDetails: {
          authorized: {
            title: "ShieldPro Antimicrobial Laptop Sleeve - 14 Inch Premium Protective Case",
            price: 29.99
          },
          hijacked: {
            title: "ShieldPro Antimicrobial Laptop Sleeve - 14 Inch Cheap Nylon Case (Flimsy Zipper)",
            price: 12.50,
            sellerName: "BargainBinDistributors",
            buybox: true
          }
        }
      };
    } else if (targetProduct.asin === "B0C7D5K2SS") {
      updatedProduct = {
        ...targetProduct,
        status: "Alert"
      };

      alert = {
        PK: `PRODUCT#${targetProduct.asin}`,
        SK: `ALERT#${now}`,
        asin: targetProduct.asin,
        timestamp: now,
        alertType: "BULLET_POINTS_DRIFT",
        severity: "Critical",
        status: "Active",
        description: "Bullet Point Removed: Security features replaced with cheap generic warranty text. Buybox lost.",
        deviationDetails: {
          authorized: {
            price: 39.99,
            bulletPoints: [
              "FINGERPRINT RECOGNITION: Unlock in 0.5 seconds with state-of-the-art scanner.",
              "CAPACITY FOR 20 FINGERPRINTS: Register multiple users or angles for quick access.",
              "USB RECHARGEABLE: Up to 6 months of standby time on a single 1-hour charge."
            ]
          },
          hijacked: {
            price: 15.99,
            bulletPoints: [
              "FINGERPRINT RECOGNITION: Unlock in 0.5 seconds with state-of-the-art scanner.",
              "NO WARRANTY: Sold as-is, cheap plastic material that might break easily.",
              "USB RECHARGEABLE: Up to 6 months of standby time on a single 1-hour charge."
            ],
            sellerName: "SuperSaverStore",
            buybox: true
          }
        }
      };
    } else {
      // General fallback simulator for other products
      updatedProduct = {
        ...targetProduct,
        status: "Alert"
      };

      alert = {
        PK: `PRODUCT#${targetProduct.asin}`,
        SK: `ALERT#${now}`,
        asin: targetProduct.asin,
        timestamp: now,
        alertType: "PRICE_DROP",
        severity: "Warning",
        status: "Active",
        description: "Price Hijacked: Buybox price dropped significantly from authorized minimum advertised price.",
        deviationDetails: {
          authorized: {
            price: targetProduct.price
          },
          hijacked: {
            price: Number((targetProduct.price * 0.6).toFixed(2)),
            sellerName: "HijackerMerchant",
            buybox: true
          }
        }
      };
    }

    // 1. Save updated product status
    await ddbDocClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: updatedProduct
      })
    );

    // 2. Insert new Alert item
    await ddbDocClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: alert
      })
    );

    // 3. Recalculate Threat Level and update metadata
    const updatedMetadata = await recalculateThreatLevel();

    return NextResponse.json({
      success: true,
      message: "Drift event simulated successfully",
      details: {
        affectedAsin: targetProduct.asin,
        alertType: alert.alertType,
        globalThreatLevel: updatedMetadata.threatLevel
      }
    });
  } catch (err: any) {
    console.error("Listing check simulation error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to run listing check simulator" },
      { status: 500 }
    );
  }
}
export const dynamic = 'force-dynamic';
