import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// =========================================================
// 1. ΟΙ ΔΙΚΟΙ ΣΟΥ ΥΠΑΡΧΟΝΤΕΣ ΠΙΝΑΚΕΣ (ΑΘΙΚΤΟΙ ΚΑΙ ΠΑΝΕΤΟΙΜΟΙ)
// =========================================================

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
  
  // Tags & Αλλεργιογόνα
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

// Πίνακας για τις Γενικές Ρυθμίσεις του Καταστήματος
export const storeSettings = sqliteTable("store_settings", {
  id: text("id").primaryKey(), // Εδώ θα μπαίνει πάντα η λέξη 'default'
  serviceFee: real("service_fee").default(0.50).notNull(),
});


// =========================================================
// 2. ΟΙ ΝΕΟΙ ΠΙΝΑΚΕΣ ΓΙΑ ΤΟ PDA ΚΑΙ ΤΗ ΔΙΑΧΕΙΡΙΣΗ ΠΑΡΑΓΓΕΛΙΩΝ
// =========================================================

// Πίνακας για τις Κεντρικές Παραγγελίες ανά Τραπέζι
export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(), // UUID που θα δημιουργεί το PDA ή ο Server
  tableId: text("table_id").notNull(), // Κρατάει το ID του τραπεζιού (π.χ. "T1" ή "Merged_1_2")
  status: text("status").notNull().default("ΣΕ ΕΠΕΞΕΡΓΑΣΙΑ"), // "ΣΕ ΕΠΕΞΕΡΓΑΣΙΑ", "ΧΩΡΙΣ ΑΠΟΔΕΙΞΗ", "ΟΛΟΚΛΗΡΩΜΕΝΗ"
  paymentMode: text("payment_mode").notNull().default("ΜΑΖΙ"), // "ΜΑΖΙ" ή "ΞΕΧΩΡΙΣΤΑ"
  globalPaymentMethod: text("global_payment_method").default(""), // "ΚΑΡΤΑ" ή "ΜΕΤΡΗΤΑ" (χρήσιμο αν πληρώσουν ΜΑΖΙ)
  globalReceipt: integer("global_receipt", { mode: "boolean" }).default(false), // Αν κόπηκε γενική απόδειξη για όλο το τραπέζι
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`), // Πότε άνοιξε το τραπέζι
  updatedAt: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`), // Πότε έγινε η τελευταία αλλαγή/σερβίρισμα/πληρωμή
});

// Πίνακας για τα Προϊόντα της κάθε Παραγγελίας
export const orderItems = sqliteTable("order_items", {
  id: text("id").primaryKey(), // Μοναδικό ID για το κάθε item της λίστας
  orderId: text("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }), // Σύνδεση με την παραγγελία. Αν σβήσει η παραγγελία, σβήνονται αυτόματα και τα items!
  productId: text("product_id").notNull().references(() => menuItems.id), // Σύνδεση με το μενού για να ξέρουμε τι πήραν
  quantity: integer("quantity").notNull().default(1), // Ποσότητα (τεμάχια)
  finalPrice: real("final_price").notNull(), // Η τελική τιμή του item (μαζί με έξτρα δόσεις, παγωτά κλπ) για να μένει στο ιστορικό ακόμα κι αν αλλάξεις τιμές στο μενού αργότερα!
  isServed: integer("is_served", { mode: "boolean" }).default(false), // Το checkbox σερβιρίσματος που φτιάξαμε στο PDA!
  paymentMethod: text("payment_method").default(""), // "ΚΑΡΤΑ" ή "ΜΕΤΡΗΤΑ" (χρησιμοποιείται αν πληρώσουν ΞΕΧΩΡΙΣΤΑ)
  hasReceipt: integer("has_receipt", { mode: "boolean" }).default(false), // Αν βγήκε απόδειξη για το συγκεκριμένο αντικείμενο (για το ΞΕΧΩΡΙΣΤΑ)
  
  // ΤΟ ΜΑΓΙΚΟ JSON ΠΕΔΙΟ: Εδώ μέσα αποθηκεύουμε ένα object με όλες τις λεπτομέρειες:
  // { variety: "Ντεκάφ", sugarLevel: "Μέτριος", sugarType: "Καστανή", milkType: "Φυτικό", topping: "Κανέλα", hasExtraShot: true, targetRequest: "250γρ", notes: "Xωρίς παγάκια" }
  customizations: text("customizations", { mode: "json" }).default("{}"),
});