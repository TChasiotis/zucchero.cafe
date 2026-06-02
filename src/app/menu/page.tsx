import { db } from "../../db/index";
import { categories, menuItems } from "../../db/schema";
import { asc } from "drizzle-orm";
import MenuClient from "./MenuClient";

// Η γραμμή που έλειπε για να χαρεί το Cloudflare:
export const runtime = "edge";

// Η γραμμή που βάλαμε πριν για να σπάσουμε το Cache:
export const revalidate = 0;

export default async function MenuPage() {
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
