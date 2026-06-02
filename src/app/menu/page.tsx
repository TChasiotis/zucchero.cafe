import { db } from "../../db/index";
import { categories, menuItems } from "../../db/schema";
import { asc } from "drizzle-orm"; // 👈 1. Βάλαμε το import για την αύξουσα σειρά
import MenuClient from "./MenuClient";

// 👈 2. Το κάνουμε 0 για να βλέπεις τις αλλαγές σου ΑΚΑΡΙΑΙΑ χωρίς να περιμένεις 1 λεπτό!
export const revalidate = 0;

export default async function MenuPage() {
  // 👈 3. Βάλαμε τη μαγική εντολή orderBy στις κατηγορίες!
  const dbCategories = await db
    .select()
    .from(categories)
    .orderBy(asc(categories.sortOrder));

  const dbMenuItems = await db.select().from(menuItems);

  console.log(
    `📡 ΑΠΟΛΥΤΗ ΕΠΙΒΕΒΑΙΩΣΗ: Τραβήχτηκαν ${dbMenuItems.length} προϊόντα και ${dbCategories.length} κατηγορίες live από την Turso!`,
  );

  return <MenuClient categories={dbCategories} menuItems={dbMenuItems} />;
}
