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
    const feeText = currentServiceFee.toFixed(2); // "0.70"

    // 2. Τραβάμε όλα τα δεδομένα
    const allCategories = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    const allItems = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder));

    // 3. Η ΑΠΟΛΥΤΗ C-STYLE ΑΝΤΙΚΑΤΑΣΤΑΣΗ
    const processedItems = allItems.map((item) => {
      if (!item.translations) return item;

      try {
        // Το κάνουμε όλο ένα απλό String
        let jsonString = typeof item.translations === "string" 
          ? item.translations 
          : JSON.stringify(item.translations);

        // Το απόλυτο find & replace: Σπάει το κείμενο στο {fee} και το ενώνει με το 0.70
        jsonString = jsonString.split("{fee}").join(feeText);

        return { 
          ...item, 
          translations: JSON.parse(jsonString) 
        };
      } catch (e) {
        return item;
      }
    });

    // 4. ΣΤΕΛΝΟΥΜΕ ΤΗΝ ΑΠΑΝΤΗΣΗ ΜΕ ΑΠΑΓΟΡΕΥΣΗ CACHING (Anti-Cache Headers)
    return NextResponse.json(
      { 
        success: true,
        serviceFee: currentServiceFee, 
        categories: allCategories, 
        items: processedItems 
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
    console.error("API Error fetching menu:", error);
    return NextResponse.json(
      { success: false, error: "Αποτυχία φόρτωσης δεδομένων" }, 
      { status: 500 }
    );
  }
}