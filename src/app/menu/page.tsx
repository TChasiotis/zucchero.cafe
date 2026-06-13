import { db } from "../../db/index";
import { categories, menuItems } from "../../db/schema";
import { asc } from "drizzle-orm";
import MenuClient from "./MenuClient";

// Η γραμμή που λατρεύει το Cloudflare:
export const runtime = "edge";

// Η γραμμή που ΑΠΑΓΟΡΕΥΕΙ στο Cloudflare να κρατάει cache (Αντικατάσταση του revalidate):
export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const dbCategories = await db
    .select()
    .from(categories)
    .orderBy(asc(categories.sortOrder));

  const dbMenuItems = await db
    .select()
    .from(menuItems)
    .orderBy(asc(menuItems.sortOrder));

  console.log(
    `📡 ΑΠΟΛΥΤΗ ΕΠΙΒΕΒΑΙΩΣΗ: Τραβήχτηκαν ${dbMenuItems.length} προϊόντα live από την Turso!`,
  );

  return <MenuClient categories={dbCategories} menuItems={dbMenuItems} />;
}
