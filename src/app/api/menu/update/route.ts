import { NextResponse } from "next/server";
import { db } from "../../../../db/index";
// ΠΡΟΣΟΧΗ: Κάναμε import και το storeSettings από το schema σου!
import { menuItems, categories, storeSettings } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const changes = await request.json(); 
    
    for (const change of changes) {
      
      // 0. ΑΛΛΑΓΗ ΣΤΟ SERVICE FEE (ΤΟ ΝΕΟ ΜΑΣ ΟΠΛΟ!)
      // Αν το front-end στείλει { isServiceFeeUpdate: true, serviceFee: 0.70 }
      if (change.isServiceFeeUpdate) {
        await db.update(storeSettings)
          .set({ 
            serviceFee: change.serviceFee 
          })
          .where(eq(storeSettings.id, "default")); // Ενημερώνει τη default σταθερή γραμμή
      }
      
      // 1. Κατηγορία (Σειρά / Ορατότητα)
      else if (change.isCategoryUpdate) {
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
      
      // 3. ΕΙΣΑΓΩΓΗ Νέου Custom Προϊόντος
      else if (change.isNewProduct) {
        await db.insert(menuItems).values({
          id: change.id, 
          categoryId: change.categoryId,
          price: change.price,
          unit: change.unit || null, 
          isSoldOut: false, 
          isPopular: false,
          translations: change.translations,
          sortOrder: change.sortOrder, 
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
          unit: change.unit, 
          isSoldOut: change.isSoldOut,
          isPopular: change.isPopular,
          sortOrder: change.sortOrder, 
          isVegan: change.isVegan,
          isGlutenFree: change.isGlutenFree,
          hasEgg: change.hasEgg,
          hasDairy: change.hasDairy,
          hasNuts: change.hasNuts,
          hasSoy: change.hasSoy,
        };
        
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