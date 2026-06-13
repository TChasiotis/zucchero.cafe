import { NextResponse } from "next/server";
import { db } from "../../../db/index"; 
import { categories, menuItems } from "../../../db/schema";
import { eq, asc } from "drizzle-orm"; 

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Τραβάμε όλες τις κατηγορίες ταξινομημένες
    const allCategories = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    
    // 2. ΤΡΑΒΑΜΕ ΟΛΑ ΤΑ ΠΡΟΪΟΝΤΑ ΤΑΞΙΝΟΜΗΜΕΝΑ ΒΑΣΕΙ ΤΟΥ SORT ORDER (ΤΟ ΝΕΟ)
    const allItems = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder));

    // 3. Τα πακετάρουμε και τα στέλνουμε πίσω
    return NextResponse.json(
      { 
        success: true,
        categories: allCategories, 
        items: allItems 
      }, 
      { status: 200 }
    );
    
  } catch (error) {
    console.error("API Error fetching menu:", error);
    return NextResponse.json(
      { success: false, error: "Αποτυχία φόρτωσης δεδομένων" }, 
      { status: 500 }
    );
  }
}