import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// =========================================================
// 1. ΟΙ ΔΙΚΟΙ ΣΟΥ ΥΠΑΡΧΟΝΤΕΣ ΠΙΝΑΚΕΣ (ΑΘΙΚΤΟΙ ΚΑΙ ΠΑΝΕΤΟΙΜΟΙ)
// =========================================================

export const categories = sqliteTable("categories", {
  id: text("id").primaryKey(),
  isNotAvailable: integer("is_not_available", { mode: "boolean" }).default(false), 
  translations: text("translations", { mode: "json" }).notNull(),
  sortOrder: integer("sort_order").default(0),
});

export const menuItems = sqliteTable("menu_items", {
  id: text("id").primaryKey(),
  categoryId: text("category_id").notNull(), 
  price: real("price").notNull(),
  hidePrice: integer("hide_price", { mode: "boolean" }).default(false),
  unit: text("unit"), 
  translations: text("translations", { mode: "json" }).notNull(),
  isPopular: integer("is_popular", { mode: "boolean" }).default(false),
  isVegan: integer("is_vegan", { mode: "boolean" }).default(false),
  isGlutenFree: integer("is_gluten_free", { mode: "boolean" }).default(false),
  hasEgg: integer("has_egg", { mode: "boolean" }).default(false),
  hasDairy: integer("has_dairy", { mode: "boolean" }).default(false),
  hasNuts: integer("has_nuts", { mode: "boolean" }).default(false),
  hasSoy: integer("has_soy", { mode: "boolean" }).default(false),
  isSoldOut: integer("is_sold_out", { mode: "boolean" }).default(false),
  isSeparator: integer("is_separator", { mode: "boolean" }).default(false),
  sortOrder: integer("sort_order").default(0),
});

export const storeSettings = sqliteTable("store_settings", {
  id: text("id").primaryKey(), 
  serviceFee: real("service_fee").default(0.50).notNull(),
});

// =========================================================
// 2. ΟΙ ΝΕΟΙ ΠΙΝΑΚΕΣ ΓΙΑ ΤΟ PDA ΚΑΙ ΤΗ ΔΙΑΧΕΙΡΙΣΗ ΠΑΡΑΓΓΕΛΙΩΝ
// =========================================================

export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(), 
  tableId: text("table_id").notNull(), 
  status: text("status").notNull().default("ΣΕ ΕΠΕΞΕΡΓΑΣΙΑ"), 
  paymentMode: text("payment_mode").notNull().default("ΜΑΖΙ"), 
  globalPaymentMethod: text("global_payment_method").default(""), 
  globalReceipt: integer("global_receipt", { mode: "boolean" }).default(false), 
  globalPaid: integer("global_paid", { mode: "boolean" }).default(false), // ΝΕΟ: Πληρώθηκε όλο το τραπέζι;
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`), 
  updatedAt: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`), 
});

export const orderItems = sqliteTable("order_items", {
  id: text("id").primaryKey(), 
  orderId: text("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }), 
  productId: text("product_id").notNull().references(() => menuItems.id), 
  quantity: integer("quantity").notNull().default(1), 
  finalPrice: real("final_price").notNull(), 
  isServed: integer("is_served", { mode: "boolean" }).default(false), 
  paymentMethod: text("payment_method").default(""), 
  hasReceipt: integer("has_receipt", { mode: "boolean" }).default(false), 
  isPaid: integer("is_paid", { mode: "boolean" }).default(false), // ΝΕΟ: Πληρώθηκε ο συγκεκριμένος καφές;
  customizations: text("customizations", { mode: "json" }).default("{}"),
});

export const ingredients = sqliteTable("ingredients", {
  id: text("id").primaryKey(), 
  name: text("name").notNull(), 
  category: text("category").notNull(), 
  isAvailable: integer("is_available", { mode: "boolean" }).default(true), 
});