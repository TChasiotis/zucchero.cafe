import { NextResponse } from "next/server";
// Ανεβαίνουμε 3 επίπεδα πάνω για να βρούμε τον φάκελο db (από src/app/api/menu -> src/db)
import { db } from "../../../db/index"; 
import { categories, menuItems } from "../../../db/schema";
import { eq, asc } from "drizzle-orm"; // ή ό,τι άλλο έχεις κάνει import από εκεί

export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Τραβάμε όλες τις κατηγορίες από την Turso
    const allCategories = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    
    // 2. Τραβάμε όλα τα προϊόντα (Τα "Ιερά" σου)
    const allItems = await db.select().from(menuItems);

    // 3. Τα πακετάρουμε και τα στέλνουμε πίσω με κωδικό 200 (Επιτυχία)
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
    // Αν κάτι πάει στραβά, στέλνουμε κωδικό 500 (Server Error)
    return NextResponse.json(
      { success: false, error: "Αποτυχία φόρτωσης δεδομένων" }, 
      { status: 500 }
    );
  }
}