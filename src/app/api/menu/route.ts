import { NextResponse } from "next/server";
import { db } from "../../../db/index"; 
import { categories, menuItems, storeSettings } from "../../../db/schema";
import { asc } from "drizzle-orm"; 

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Τραβάμε το Service Fee από τη βάση
    const settings = await db.select().from(storeSettings).limit(1);
    const currentServiceFee = settings.length > 0 ? settings[0].serviceFee : 0.50;
    const feeText = currentServiceFee.toFixed(2); // π.χ. "0.70"

    // 2. Τραβάμε όλες τις κατηγορίες
    const allCategories = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    
    // 3. Τραβάμε όλα τα προϊόντα (items)
    const allItems = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder));

    // 4. Η ΑΠΟΛΥΤΗ ΚΑΙ ΑΠΑΡΑΒΙΑΣΤΗ ΑΝΤΙΚΑΤΑΣΤΑΣΗ
    const processedItems = allItems.map((item) => {
      if (!item.translations) return item;

      try {
        // Μετρέπουμε ΟΛΟ το translations σε ένα ενιαίο String κειμένου
        const jsonString = typeof item.translations === "string"
          ? item.translations
          : JSON.stringify(item.translations);

        // Αντικαθιστούμε το {fee} απευθείας στο κείμενο, σε όποια γλώσσα κι αν βρίσκεται
        const updatedJsonString = jsonString.replace(/\{\s*fee\s*\}/gi, feeText);

        // Το μετατρέπουμε ξανά σε Object για να φύγει σωστά στο τελικό JSON response
        return { 
          ...item, 
          translations: JSON.parse(updatedJsonString) 
        };
      } catch (e) {
        console.error("Error updating fee placeholder for item:", item.id, e);
        return item;
      }
    });

    // 5. Στέλνουμε το έτοιμο πακέτο
    return NextResponse.json(
      { 
        success: true,
        serviceFee: currentServiceFee, 
        categories: allCategories, 
        items: processedItems 
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