// Εξηγούμε στην TypeScript πώς μοιάζει η ΠΟΛΥΓΛΩΣΣΗ Κατηγορία
export type Category = {
  id: string;
  translations: {
    el: string;
    en: string;
    de: string;
    fr: string;
    es: string;
    sr: string;
    bg: string;
    ro: string;
  };
};

// Εξηγούμε στην TypeScript πώς μοιάζει ένα Προϊόν (με τις 8 γλώσσες πλέον)
export type MenuItem = {
  id: string;
  categoryId: string;
  price: number;
  hidePrice?: boolean;
  unit?: string; // "kg" ή "piece"
  translations: {
    el: { name: string; description: string }; // Ελληνικά
    en: { name: string; description: string }; // Αγγλικά
    de: { name: string; description: string }; // Γερμανικά
    fr: { name: string; description: string }; // Γαλλικά
    es: { name: string; description: string }; // Ισπανικά
    sr: { name: string; description: string }; // Σέρβικα
    bg: { name: string; description: string }; // Βουλγάρικα
    ro: { name: string; description: string }; // Ρουμάνικα
  };
  isPopular?: boolean;
  isVegan?: boolean;
  hasNuts?: boolean;
  hasStrawberry?: boolean;
  hasCherry?: boolean;
  isGlutenFree?: boolean;
  hasCitrus?: boolean;
  isSoldOut?: boolean;
};

export const categories: Category[] = [
  { 
    id: "popular", translations: { el: "⭐ Δημοφιλή", en: "⭐ Popular", de: "⭐ Beliebt", fr: "⭐ Populaire", es: "⭐ Popular", sr: "⭐ Popularno", bg: "⭐ Популярни", ro: "⭐ Popular" } 
  },
  
  // --- ΓΛΥΚΑ ---
  { 
    id: "pastes", translations: { el: "Πάστες", en: "Pastries", de: "Feingebäck", fr: "Pâtisseries", es: "Pasteles", sr: "Kolači", bg: "Пасти", ro: "Prăjituri" } 
  },
  { 
    id: "siropiasta", translations: { el: "Σιροπιαστά", en: "Syrup Sweets", de: "Sirup-Süßigkeiten", fr: "Desserts au Sirop", es: "Dulces en Almíbar", sr: "Zaliveni kolači", bg: "Сиропирани сладкиши", ro: "Dulciuri cu Sirop" } 
  },
  { 
    id: "ice_cream", translations: { el: "Παγωτό", en: "Ice Cream", de: "Eiscreme", fr: "Glace", es: "Helado", sr: "Sladoled", bg: "Сладолед", ro: "Înghețată" } 
  },
  { 
    id: "pastakia", translations: { el: "Παστάκια", en: "Mini Pastries", de: "Mini-Gebäck", fr: "Mini-Pâtisseries", es: "Mini Pasteles", sr: "Mini Kolači", bg: "Мини Пасти", ro: "Mini Prăjituri" } 
  },
  { 
    id: "croissants", translations: { el: "Κρουασάν", en: "Croissants", de: "Croissants", fr: "Croissants", es: "Croissants", sr: "Kroasani", bg: "Кроасани", ro: "Croissante" } 
  },
  { 
    id: "cookies", translations: { el: "Κουλουράκια", en: "Cookies", de: "Plätzchen", fr: "Biscuits", es: "Galletas", sr: "Keksići", bg: "Курабийки", ro: "Biscuiți" } 
  },
  { 
    id: "tsoureki", translations: { el: "Τσουρέκι", en: "Tsoureki", de: "Tsoureki", fr: "Tsoureki", es: "Tsoureki", sr: "Cureki", bg: "Цуреки", ro: "Cozonac Grec" } 
  },
  { 
    id: "loukoumades", translations: { el: "Λουκουμάδες", en: "Greek Doughnuts", de: "Griechische Donuts", fr: "Beignets Grecs", es: "Donas Griegas", sr: "Uštipci (Loukoumades)", bg: "Лукумадес", ro: "Gogoși Grecești" } 
  },
  
  // --- ΑΛΜΥΡΑ ---
  { 
    id: "pies", translations: { el: "Πίτες", en: "Pies", de: "Pitas (Pasteten)", fr: "Tartes / Pitas", es: "Empanadas / Pitas", sr: "Pite", bg: "Пити", ro: "Plăcinte" } 
  },
  { 
    id: "mini_pies", translations: { el: "Πιτάκια", en: "Mini Pies", de: "Mini-Pitas", fr: "Mini-Pitas", es: "Mini Empanadas", sr: "Mini pite", bg: "Мини Питки", ro: "Mini Plăcinte" } 
  },
  { 
    id: "breadsticks", translations: { el: "Κριτσίνια", en: "Breadsticks", de: "Grissini", fr: "Gressins", es: "Palitos de pan", sr: "Grisine", bg: "Гризини", ro: "Grisine" } 
  },

  // --- ΚΑΦΕΔΕΣ & ΑΛΛΑ ---
  { 
    id: "coffee", translations: { el: "Καφέδες", en: "Coffee", de: "Kaffee", fr: "Café", es: "Café", sr: "Kafa", bg: "Кафе", ro: "Cafea" } 
  },
  { 
    id: "soft_drinks", translations: { el: "Αναψυκτικά", en: "Soft Drinks", de: "Erfrischungsgetränke", fr: "Boissons Gazeuses", es: "Refrescos", sr: "Sokovi", bg: "Безалкохолни напитки", ro: "Băuturi Răcoritoare" } 
  },
  { 
    id: "juices", translations: { el: "Χυμοί", en: "Juices", de: "Säfte", fr: "Jus", es: "Zumos", sr: "Voćni sokovi", bg: "Сокове", ro: "Sucuri" } 
  },
  { 
    id: "cold_bev", translations: { el: "Κρύα Ροφήματα", en: "Cold Beverages", de: "Kalte Getränke", fr: "Boissons Froides", es: "Bebidas Frías", sr: "Hladni napici", bg: "Студени напитки", ro: "Băuturi Reci" } 
  },
  { 
    id: "hot_drinks", translations: { el: "Ζεστά Ροφήματα", en: "Hot Drinks", de: "Heiße Getränke", fr: "Boissons Chaudes", es: "Bebidas Calientes", sr: "Topli napici", bg: "Топли напитки", ro: "Băuturi Calde" } 
  },
  { 
    id: "giagiamas", translations: { el: "Giagiamas", en: "Giagiamas", de: "Giagiamas", fr: "Giagiamas", es: "Giagiamas", sr: "Giagiamas", bg: "Giagiamas", ro: "Giagiamas" } 
  },
  { 
    id: "alcohol", translations: { el: "Αλκοολούχα", en: "Alcohol", de: "Alkoholische Getränke", fr: "Alcool", es: "Bebidas Alcohólicas", sr: "Alkoholna pića", bg: "Алкохол", ro: "Băuturi Alcoolice" } 
  },
  { 
    id: "dairy", translations: { el: "Γαλακτοκομικά", en: "Dairy", de: "Milchprodukte", fr: "Produits Laitiers", es: "Lácteos", sr: "Mlečni proizvodi", bg: "Млечни продукти", ro: "Lactate" } 
  },
];

// ΕΙΣΑΓΩΓΗ ΤΩΝ ΜΟΝΤΟΥΛΑΡΙΣΜΕΝΩΝ ΑΡΧΕΙΩΝ
import { pastes } from "./menu/pastes";
import { siropiasta } from "./menu/siropiasta";
import { iceCream } from "./menu/pagwta";
import { pastakia } from "./menu/pastakia";
import { croissants } from "./menu/croissants";
import { cookies } from "./menu/koulourakia";
import { tsoureki } from "./menu/tsoureki";
import { loukoumades } from "./menu/loukoumades";
import { pies } from "./menu/pies";

// Η ΜΕΓΑΛΗ ΕΝΩΣΗ
export const menuItems: MenuItem[] = [
  ...pastes,
  ...siropiasta,
  ...iceCream,
  ...pastakia,
  ...croissants,
  ...cookies,
  ...tsoureki,
  ...loukoumades,
  ...pies,
];