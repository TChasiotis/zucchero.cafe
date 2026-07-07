import { NextResponse } from "next/server";
import { db } from "../../../db/index";
import { ingredients } from "../../../db/schema";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const allIngredients = await db.select().from(ingredients);
    
    return NextResponse.json(
      { 
        success: true, 
        ingredients: allIngredients 
      }, 
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    );
  } catch (error) {
    console.error("API Error fetching ingredients:", error);
    return NextResponse.json(
      { success: false, error: "Αποτυχία φόρτωσης υλικών" }, 
      { status: 500 }
    );
  }
}