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
      
      // 2. ΔΙΑΓΡΑΦΗ Custom Προϊόντος
      else if (change.isDeleted) {
        await db.delete(menuItems)
          .where(eq(menuItems.id, change.id));
      }
      
      // 3. ΕΙΣΑΓΩΓΗ Νέου Custom Προϊόντος (Εδώ είναι αυτό που ρώτησες!)
      else if (change.isNewProduct) {
        await db.insert(menuItems).values({
          id: change.id, 
          categoryId: change.categoryId,
          price: change.price,
          unit: change.unit || null, // <--- Αποθηκεύει το Κομμάτι/Κιλό/Μερίδα
          isSoldOut: false, 
          isPopular: false,
          translations: change.translations,
          sortOrder: change.sortOrder, // <--- Μπαίνει τέρμα κάτω
          isVegan: change.isVegan || false,
          isGlutenFree: change.isGlutenFree || false,
          hasEgg: change.hasEgg || false,
          hasDairy: change.hasDairy || false,
          hasNuts: change.hasNuts || false,
          hasSoy: change.hasSoy || false,
        });
      }
      
      // 4. ΕΝΗΜΕΡΩΣΗ Υπάρχοντος (Ταξινόμηση, Τιμές, Units, Αλλεργιογόνα)
      else {
        const updatePayload: any = { 
          price: change.price,
          unit: change.unit, // <--- Ενημερώνει το Κομμάτι/Κιλό/Μερίδα
          isSoldOut: change.isSoldOut,
          isPopular: change.isPopular,
          sortOrder: change.sortOrder, // <--- Σώζει την ταξινόμηση (τα βελάκια)
          isVegan: change.isVegan,
          isGlutenFree: change.isGlutenFree,
          hasEgg: change.hasEgg,
          hasDairy: change.hasDairy,
          hasNuts: change.hasNuts,
          hasSoy: change.hasSoy,
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