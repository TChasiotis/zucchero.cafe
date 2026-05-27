import { db } from "../../db/index";
import { categories, menuItems } from "../../db/schema";
import MenuClient from "./MenuClient";

export const revalidate = 60;

export default async function MenuPage() {
  const dbCategories = await db.select().from(categories);
  const dbMenuItems = await db.select().from(menuItems);

  // ΑΥΤΟ ΕΔΩ ΤΟ ΜΑΓΙΚΟ LOG:
  console.log(
    `📡 ΑΠΟΛΥΤΗ ΕΠΙΒΕΒΑΙΩΣΗ: Τραβήχτηκαν ${dbMenuItems.length} προϊόντα live από την Turso!`,
  );

  return <MenuClient categories={dbCategories} menuItems={dbMenuItems} />;
}
