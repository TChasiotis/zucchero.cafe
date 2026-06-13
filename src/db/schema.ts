import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";

// Πίνακας για τις Κατηγορίες (Categories)
export const categories = sqliteTable("categories", {
  id: text("id").primaryKey(),
  isNotAvailable: integer("is_not_available", { mode: "boolean" }).default(false), 
  translations: text("translations", { mode: "json" }).notNull(),
  sortOrder: integer("sort_order").default(0),
});

// Πίνακας για τα Προϊόντα (MenuItems)
export const menuItems = sqliteTable("menu_items", {
  id: text("id").primaryKey(),
  categoryId: text("category_id").notNull(), 
  price: real("price").notNull(),
  hidePrice: integer("hide_price", { mode: "boolean" }).default(false),
  unit: text("unit"), // Προαιρετικό (π.χ. "kg" ή "piece")
  
  // Το JSON που θα κρατάει όλες τις γλώσσες (name & description)
  translations: text("translations", { mode: "json" }).notNull(),
  
  // Tags & Αλλεργιογόνα (Booleans - Στην SQLite αποθηκεύονται ως 0 ή 1)
  isPopular: integer("is_popular", { mode: "boolean" }).default(false),
  isVegan: integer("is_vegan", { mode: "boolean" }).default(false),
  isGlutenFree: integer("is_gluten_free", { mode: "boolean" }).default(false),
  hasEgg: integer("has_egg", { mode: "boolean" }).default(false),
  hasDairy: integer("has_dairy", { mode: "boolean" }).default(false),
  hasNuts: integer("has_nuts", { mode: "boolean" }).default(false),
  hasSoy: integer("has_soy", { mode: "boolean" }).default(false),
  isSoldOut: integer("is_sold_out", { mode: "boolean" }).default(false),
  sortOrder: integer("sort_order").default(0),
});