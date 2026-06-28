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
    
    // Φτιάχνουμε την καθαρή μεταβλητή (π.χ. "0.70") που θα αντικαταστήσει το {fee}
    const feeText = currentServiceFee.toFixed(2);

    // 2. Τραβάμε όλες τις κατηγορίες
    const allCategories = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    
    // 3. Τραβάμε όλα τα προϊόντα (items)
    const allItems = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder));

    // 4. Δυναμική αντικατάσταση του {fee} σε όλες τις γλώσσες αυτόματα
    // 4. Δυναμική αντικατάσταση του {fee} σε όλες τις γλώσσες αυτόματα
    const processedItems = allItems.map((item) => {
      if (item.id.includes("info") && item.translations) {
        try {
          // ΠΡΟΣΟΧΗ: Έλεγχος αν το ORM το έφερε σαν String ή έτοιμο Object
          let trans: any;
          if (typeof item.translations === "string") {
            trans = JSON.parse(item.translations);
          } else {
            trans = JSON.parse(JSON.stringify(item.translations));
          }

          // Έξυπνο Regex που πιάνει το {fee} ανεξάρτητα από κενά ή κεφαλαία/μικρά
          const feePattern = /\{\s*fee\s*\}/gi;

          // Loop που περνάει αυτόματα από όλες τις γλώσσες
          for (const lang in trans) {
            if (trans[lang]?.description) {
              trans[lang].description = trans[lang].description.replace(feePattern, feeText);
            }
          }

          return { ...item, translations: trans };
        } catch (e) {
          console.error("Error processing json translations for item:", item.id, e);
        }
      }
      return item;
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