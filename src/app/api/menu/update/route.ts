import { NextResponse } from "next/server";
import { db } from "../../../../db/index";
import { menuItems, categories } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const changes = await request.json(); 
    
    for (const change of changes) {
      // 1. Κατηγορία (Σειρά / Ορατότητα)
      if (change.isCategoryUpdate) {
        await db.update(categories)
          .set({ 
            sortOrder: change.sortOrder,
            isNotAvailable: change.isNotAvailable 
          })
          .where(eq(categories.id, change.id));
      } 
      // 2. ΝΕΟ: ΔΙΑΓΡΑΦΗ Custom Προϊόντος!
      else if (change.isDeleted) {
        await db.delete(menuItems)
          .where(eq(menuItems.id, change.id));
      }
      // 3. ΕΙΣΑΓΩΓΗ Νέου Custom Προϊόντος
      else if (change.isNewProduct) {
        await db.insert(menuItems).values({
          id: change.id, 
          categoryId: change.categoryId,
          price: change.price,
          isSoldOut: false, 
          isPopular: false,
          translations: change.translations
        });
      }
      // 4. ΕΝΗΜΕΡΩΣΗ Υπάρχοντος (Τιμή, Sold Out, Δημοφιλές ΚΑΙ Μεταφράσεις αν είναι Custom)
      else {
        const updatePayload: any = { 
          price: change.price,
          isSoldOut: change.isSoldOut,
          isPopular: change.isPopular 
        };
        
        // Αν έχουν πειράξει το όνομα/περιγραφή στο Custom, το ενημερώνουμε κι αυτό!
        if (change.translations) {
          updatePayload.translations = change.translations;
        }

        await db.update(menuItems)
          .set(updatePayload)
          .where(eq(menuItems.id, change.id));
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database update error:", error);
    return NextResponse.json({ success: false, error: "Αποτυχία ενημέρωσης" }, { status: 500 });
  }
}