import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {
  createTableIfNotExists,
  ddbDocClient,
  TABLE_NAME,
  Metadata,
  Product,
  Alert
} from "@/lib/dynamodb";

export async function GET() {
  try {
    // 1. Create table if it doesn't exist
    const tableCreationMsg = await createTableIfNotExists();
    console.log(tableCreationMsg);

    // 2. Prepare mock data
    const metadata: Metadata = {
      PK: "USER#100",
      SK: "METADATA",
      threatLevel: "Critical",
      lastChecked: new Date().toISOString(),
      totalProducts: 5,
      activeAlertsCount: 3,
      resolvedAlertsCount: 12,
      resolvedThisMonth: 4
    };

    const products: Product[] = [
      {
        PK: "USER#100",
        SK: "PRODUCT#B07ZPKN6SS",
        asin: "B07ZPKN6SS",
        title: "BrandArmor Premium Security Key - FIDO2 & U2F Double Factor Authentication",
        price: 49.99,
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&auto=format&fit=crop",
        bulletPoints: [
          "MAXIMUM SECURITY: Certified FIDO2 and U2F compliance to secure your accounts.",
          "UNIVERSAL COMPATIBILITY: Works with Google, Facebook, GitHub, and major platforms.",
          "DURABLE DESIGN: Waterproof and crushproof aluminum shell for everyday carry."
        ],
        status: "Alert"
      },
      {
        PK: "USER#100",
        SK: "PRODUCT#B0892XSPLT",
        asin: "B0892XSPLT",
        title: "ShieldPro Antimicrobial Laptop Sleeve - 14 Inch Premium Protective Case",
        price: 29.99,
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop",
        bulletPoints: [
          "ANTIMICROBIAL COATING: Specialized exterior fabric repels 99.9% of common bacteria.",
          "SHOCKPROOF LAYERS: Five-layer protection shield guards against drops and bumps.",
          "SLIM & TRAVEL-READY: Slides easily into backpacks or carry-on luggage."
        ],
        status: "Clean"
      },
      {
        PK: "USER#100",
        SK: "PRODUCT#B09B2L4H79",
        asin: "B09B2L4H79",
        title: "ApexGrid Smart Wi-Fi 6 Router - 3000 Mbps High Speed Mesh System",
        price: 129.99,
        imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&auto=format&fit=crop",
        bulletPoints: [
          "ULTRA-FAST WI-FI 6: Delivers up to 3 Gbps speeds for seamless 4K/8K streaming.",
          "EXPANDABLE MESH: Cover up to 3000 sq ft with dead-zone elimination technology.",
          "ADVANCED PARENTAL CONTROL: Manage screen time and filter content easily."
        ],
        status: "Alert"
      },
      {
        PK: "USER#100",
        SK: "PRODUCT#B0C7D5K2SS",
        asin: "B0C7D5K2SS",
        title: "BioLock Biometric Padlock - Smart Fingerprint Scanner for Gym & Locker",
        price: 39.99,
        imageUrl: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=300&auto=format&fit=crop",
        bulletPoints: [
          "FINGERPRINT RECOGNITION: Unlock in 0.5 seconds with state-of-the-art scanner.",
          "CAPACITY FOR 20 FINGERPRINTS: Register multiple users or angles for quick access.",
          "USB RECHARGEABLE: Up to 6 months of standby time on a single 1-hour charge."
        ],
        status: "Clean"
      },
      {
        PK: "USER#100",
        SK: "PRODUCT#B0D98P39ZZ",
        asin: "B0D98P39ZZ",
        title: "VeloSafe Heavy Duty U-Lock - Smart Bluetooth Bike Lock with Alarm",
        price: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=300&auto=format&fit=crop",
        bulletPoints: [
          "KEYLESS BLUETOOTH UNLOCK: Unlock using your smartphone or fallback passcode.",
          "120dB ANTI-THEFT ALARM: Siren triggers immediately if motion is detected.",
          "16mm HARDENED STEEL: Resists cutting, leverage attacks, and weather damage."
        ],
        status: "Alert"
      }
    ];

    const now = Date.now();
    const alerts: Alert[] = [
      {
        PK: "PRODUCT#B07ZPKN6SS",
        SK: `ALERT#${now - 4 * 3600 * 1000}`, // 4 hours ago
        asin: "B07ZPKN6SS",
        timestamp: now - 4 * 3600 * 1000,
        alertType: "PRICE_DROP",
        severity: "Critical",
        status: "Active",
        description: "Buybox Hijacked: Listing price dropped from $49.99 to $19.99 by unauthorized merchant 'CheapGoodsCorp'.",
        deviationDetails: {
          authorized: { price: 49.99 },
          hijacked: { price: 19.99, sellerName: "CheapGoodsCorp", buybox: true }
        }
      },
      {
        PK: "PRODUCT#B09B2L4H79",
        SK: `ALERT#${now - 24 * 3600 * 1000}`, // 24 hours ago
        asin: "B09B2L4H79",
        timestamp: now - 24 * 3600 * 1000,
        alertType: "TITLE_DRIFT",
        severity: "Warning",
        status: "Active",
        description: "Title Drifting: Authorized brand title altered to lower-quality, SEO-stuffed version.",
        deviationDetails: {
          authorized: { title: "ApexGrid Smart Wi-Fi 6 Router - 3000 Mbps High Speed Mesh System" },
          hijacked: { title: "ApexGrid Smart Cheap Router Net System - 3000 Mbps High Speed Mesh System" }
        }
      },
      {
        PK: "PRODUCT#B0D98P39ZZ",
        SK: `ALERT#${now - 12 * 3600 * 1000}`, // 12 hours ago
        asin: "B0D98P39ZZ",
        timestamp: now - 12 * 3600 * 1000,
        alertType: "BULLET_POINTS_DRIFT",
        severity: "Critical",
        status: "Active",
        description: "Bullet Point Removed: Crucial anti-theft siren alarm details deleted from description.",
        deviationDetails: {
          authorized: {
            bulletPoints: [
              "KEYLESS BLUETOOTH UNLOCK: Unlock using your smartphone or fallback passcode.",
              "120dB ANTI-THEFT ALARM: Siren triggers immediately if motion is detected.",
              "16mm HARDENED STEEL: Resists cutting, leverage attacks, and weather damage."
            ]
          },
          hijacked: {
            bulletPoints: [
              "KEYLESS BLUETOOTH UNLOCK: Unlock using your smartphone or fallback passcode.",
              "100% SATISFACTION GUARANTEED: Contact us if you have issues, cheap returns.",
              "16mm HARDENED STEEL: Resists cutting, leverage attacks, and weather damage."
            ]
          }
        }
      }
    ];

    // Write metadata
    await ddbDocClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: metadata
      })
    );

    // Write products
    for (const prod of products) {
      await ddbDocClient.send(
        new PutCommand({
          TableName: TABLE_NAME,
          Item: prod
        })
      );
    }

    // Write alerts
    for (const alert of alerts) {
      await ddbDocClient.send(
        new PutCommand({
          TableName: TABLE_NAME,
          Item: alert
        })
      );
    }

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
      details: {
        table: TABLE_NAME,
        status: tableCreationMsg,
        productsCount: products.length,
        alertsCount: alerts.length
      }
    });
  } catch (err: any) {
    console.error("Seeding error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "Failed to seed database"
      },
      { status: 500 }
    );
  }
}
