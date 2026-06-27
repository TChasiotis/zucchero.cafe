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
    
    // Φτιάχνουμε το δυναμικό κείμενο (π.χ. "+0.50€" ή "+0.70€")
    const feeText = `+${currentServiceFee.toFixed(2)}€`;

    // 2. Τραβάμε όλες τις κατηγορίες
    const allCategories = await db.select().from(categories).orderBy(asc(categories.sortOrder));
    
    // 3. Τραβάμε όλα τα προϊόντα (items)
    const allItems = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder));

    // 4. ΜΑΓΕΙΑ: Δυναμική αντικατάσταση του fee μέσα στα info blocks πριν φύγουν από το API!
    const processedItems = allItems.map((item) => {
      // Αν το id περιέχει τη λέξη "info", σημαίνει ότι είναι info block
      if (item.id.includes("info") && item.translations) {
        try {
          // Επειδή το Drizzle με mode: "json" φέρνει έτοιμο object
          const trans = item.translations as any;

          // Regex που βρίσκει οποιοδήποτε μοτίβο της μορφής +X.XX€ ή +X,XX€
          const feeRegex = /\+\s?[0-9.,]+\s?€/g;

          // Αντικατάσταση στα Ελληνικά (el)
          if (trans.el?.description) {
            trans.el.description = trans.el.description.replace(feeRegex, feeText);
          }
          // Αντικατάσταση στα Αγγλικά (en)
          if (trans.en?.description) {
            trans.en.description = trans.en.description.replace(feeRegex, `+${currentServiceFee.toFixed(2)}€`);
          }
          // Αντικατάσταση στα Γερμανικά (de)
          if (trans.de?.description) {
            trans.de.description = trans.de.description.replace(feeRegex, `+${currentServiceFee.toFixed(2)}€`);
          }

          // Επιστρέφουμε το item με τις διορθωμένες μεταφράσεις
          return { ...item, translations: trans };
        } catch (e) {
          console.error("Error processing json translations for item:", item.id, e);
        }
      }
      return item;
    });

    // 5. Στέλνουμε το έτοιμο, πεντακάθαρο πακέτο
    return NextResponse.json(
      { 
        success: true,
        serviceFee: currentServiceFee, 
        categories: allCategories, 
        items: processedItems // Στέλνουμε τα επεξεργασμένα items!
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