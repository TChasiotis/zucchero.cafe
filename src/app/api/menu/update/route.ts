import { NextResponse } from "next/server";
import { db } from "../../../../db/index";
import { menuItems, categories } from "../../../../db/schema"; // Βάλαμε ΚΑΙ τις categories
import { eq } from "drizzle-orm";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const changes = await request.json(); 
    
    for (const change of changes) {
      // Αν η αλλαγή είναι για Κατηγορία (Σειρά ή Ορατότητα)
      if (change.isCategoryUpdate) {
        await db.update(categories)
          .set({ 
            sortOrder: change.sortOrder,
            isNotAvailable: change.isNotAvailable 
          })
          .where(eq(categories.id, change.id));
      } 
      // Αν η αλλαγή είναι για Προϊόν (Τιμή, Sold Out, Δημοφιλές)
      else {
        await db.update(menuItems)
          .set({ 
            price: change.price,
            isSoldOut: change.isSoldOut,
            isPopular: change.isPopular 
          })
          .where(eq(menuItems.id, change.id));
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database update error:", error);
    return NextResponse.json({ success: false, error: "Αποτυχία ενημέρωσης" }, { status: 500 });
  }
}