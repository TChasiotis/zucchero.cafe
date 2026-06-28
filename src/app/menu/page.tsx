import { db } from "../../db/index";
import { categories, menuItems, storeSettings } from "../../db/schema";
import { asc } from "drizzle-orm";
import MenuClient from "./MenuClient";

// Η γραμμή που λατρεύει το Cloudflare:
export const runtime = "edge";

// Η γραμμή που ΑΠΑΓΟΡΕΥΕΙ στο Cloudflare να κρατάει cache:
export const dynamic = "force-dynamic";

export default async function MenuPage() {
  // 1. Τραβάμε Κατηγορίες & Προϊόντα
  const dbCategories = await db
    .select()
    .from(categories)
    .orderBy(asc(categories.sortOrder));

  const dbMenuItems = await db
    .select()
    .from(menuItems)
    .orderBy(asc(menuItems.sortOrder));

  // 2. Τραβάμε το Service Fee από τη βάση
  const settings = await db.select().from(storeSettings).limit(1);
  const currentServiceFee = settings.length > 0 ? settings[0].serviceFee : 0.5;
  const feeText = currentServiceFee.toFixed(2); // π.χ. "0.70"

  // 3. Η ΑΠΟΛΥΤΗ ΑΝΤΙΚΑΤΑΣΤΑΣΗ (Server-Side)
  // Πριν τα δώσουμε στο Client, καθαρίζουμε το {fee} από όλα τα προϊόντα
  const processedMenuItems = dbMenuItems.map((item) => {
    if (!item.translations) return item;

    try {
      let jsonString =
        typeof item.translations === "string"
          ? item.translations
          : JSON.stringify(item.translations);

      // Το απόλυτο find & replace: Σπάει το κείμενο στο {fee} και το ενώνει με το 0.70
      jsonString = jsonString.split("{fee}").join(feeText);

      return {
        ...item,
        translations: JSON.parse(jsonString),
      };
    } catch (e) {
      return item;
    }
  });

  console.log(
    `📡 ΑΠΟΛΥΤΗ ΕΠΙΒΕΒΑΙΩΣΗ: Τραβήχτηκαν ${processedMenuItems.length} προϊόντα live από την Turso με Service Fee ${feeText}€!`,
  );

  // 4. Περνάμε τα "καθαρισμένα" δεδομένα στο Client!
  return (
    <MenuClient categories={dbCategories} menuItems={processedMenuItems} />
  );
}
