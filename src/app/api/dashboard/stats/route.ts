import { NextResponse } from "next/server";
import { getMetadata, recalculateThreatLevel } from "@/lib/dynamodb";

export async function GET() {
  try {
    let metadata = await getMetadata();
    if (!metadata) {
      metadata = await recalculateThreatLevel();
    }
    return NextResponse.json({
      success: true,
      data: metadata
    });
  } catch (err: any) {
    console.error("Error in /api/dashboard/stats:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "Failed to fetch dashboard stats"
      },
      { status: 500 }
    );
  }
}
export const dynamic = 'force-dynamic';
