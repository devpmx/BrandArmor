import { NextResponse } from "next/server";
import { getProducts, getAlertsForProduct } from "@/lib/dynamodb";

export async function GET() {
  try {
    const products = await getProducts();
    
    // Concurrently fetch alerts for all products to keep load times short
    const alertsPromises = products.map((product) => getAlertsForProduct(product.asin));
    const allAlertsLists = await Promise.all(alertsPromises);
    const alerts = allAlertsLists.flat();

    // Sort alerts by timestamp descending (newest first)
    alerts.sort((a, b) => b.timestamp - a.timestamp);

    return NextResponse.json({
      success: true,
      products,
      alerts
    });
  } catch (err: any) {
    console.error("Error in /api/dashboard/products:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "Failed to fetch products and alerts"
      },
      { status: 500 }
    );
  }
}
export const dynamic = 'force-dynamic';
