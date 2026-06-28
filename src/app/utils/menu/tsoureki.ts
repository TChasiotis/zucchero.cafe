import { MenuItem } from "../menuData";

export const tsoureki: MenuItem[] = [
  // --- ΚΑΡΤΑ ΠΛΗΡΟΦΟΡΙΩΝ ---
  {
    id: "tsoureki_info_general",
    categoryId: "tsoureki",
    price: 0,
    hidePrice: true,
    translations: {
      el: { name: "ℹ️ Χρήσιμες Πληροφορίες", description: "Στα προϊόντα που χρεώνονται με το κιλό υπάρχει επιπλέον service fee +{fee}€." },
      en: { name: "ℹ️ Useful Information", description: "An additional +{fee}€ service fee applies to products sold per kilogram." },
      de: { name: "ℹ️ Nützliche Informationen", description: "Für Produkte, die pro Kilogramm verkauft werden, fällt eine zusätzliche Servicegebühr von +{fee} € an." },
      fr: { name: "ℹ️ Informations utiles", description: "Des frais de service supplémentaires de +{fee} € s'appliquent aux produits vendus au kilogramme." },
      es: { name: "ℹ️ Información útil", description: "Se aplica un cargo de servicio adicional de +{fee} € a los productos vendidos por kilógramo." },
      sr: { name: "ℹ️ Korisne informacije", description: "Primenjuje se dodatna doplata za uslugu od +{fee}€ za proizvode koji se prodaju po kilogramu." },
      bg: { name: "ℹ️ Полезна информация", description: "Удържа се допълнителна такса за обслужване от +{fee}€ за продукти, продавани на килограм." },
      ro: { name: "ℹ️ Informații utile", description: "Se aplică o taxă suplimentară de servire de +{fee}€ pentru produsele vândute la kilogram." }
    }
  },
  {
    id: "separator_tsrk_info",
    categoryId: "tsoureki",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "tsoureki_classic",
    categoryId: "tsoureki",
    price: 12.00,
    unit: "kg",
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Κλασσικό Τσουρέκι", description: "Παραδοσιακό ελληνικό γλυκό ψωμί, μαλακό και εξαιρετικά αρωματικό" },
      en: { name: "Classic Tsoureki", description: "Traditional Greek sweet bread, soft and fragrant" },
      de: { name: "Classic Tsoureki", description: "Tsoureki: Traditionelles griechisches süßes Brot, weich und duftend" },
      fr: { name: "Classic Tsoureki", description: "Tsoureki: Pain brioché grec traditionnel, moelleux et parfumé" },
      es: { name: "Classic Tsoureki", description: "Tsoureki: Pan dulce griego tradicional, suave y aromático" },
      sr: { name: "Classic Tsoureki", description: "Cureki: Tradicionalni grčki slatki hleb, mekan i mirisan" },
      bg: { name: "Classic Tsoureki", description: "Цуреки: Традиционен гръцки сладък хляб, мек и ароматен" },
      ro: { name: "Classic Tsoureki", description: "Cozonac Grec: Pâine dulce grecească tradițională, moale și aromată" }
    }
  },
  {
    id: "tsoureki_mini",
    categoryId: "tsoureki",
    price: 12.00,
    unit: "kg",
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Μίνι Τσουρεκάκια", description: "Αφράτα, μικρά ατομικά τσουρεκάκια, ιδανικά για να συνοδεύσουν τον καφέ σας" },
      en: { name: "Mini Tsoureki", description: "Soft, small individual tsoureki, perfect for pairing with your coffee" },
      de: { name: "Mini Tsoureki", description: "Mini Tsoureki: Weiche, kleine individuelle Tsoureki, perfekt zu Ihrem Kaffee" },
      fr: { name: "Mini Tsoureki", description: "Mini Tsoureki: Petites brioches moelleuses individuelles, parfaites avec votre café" },
      es: { name: "Mini Tsoureki", description: "Mini Tsoureki: Pequeños y suaves panes dulces individuales, perfectos para acompañar su café" },
      sr: { name: "Mini Tsoureki", description: "Mini Cureki: Mekana, mala individualna peciva, savršena uz vašu kafu" },
      bg: { name: "Mini Tsoureki", description: "Мини Цуреки: Меки, малки индивидуални цуреки, идеални за вашето кафе" },
      ro: { name: "Mini Tsoureki", description: "Mini Cozonac Grec: Cozonăcei mici, moi și individuali, perfecți alături de cafea" }
    }
  },
  {
    id: "tsoureki_vegan",
    categoryId: "tsoureki",
    price: 12.00,
    unit: "kg",
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Νηστίσιμο Τσουρέκι", description: "Αφράτο και αρωματικό τσουρέκι φτιαγμένο αποκλειστικά με φυτικά υλικά" },
      en: { name: "Vegan Tsoureki", description: "Soft and fragrant tsoureki made entirely with plant-based ingredients" },
      de: { name: "Vegan Tsoureki", description: "Vegan Tsoureki: Weiches und duftendes Tsoureki aus rein pflanzlichen Zutaten" },
      fr: { name: "Vegan Tsoureki", description: "Tsoureki Végétalien: Tsoureki moelleux et parfumé entièrement préparé avec des ingrédients d'origine végétale" },
      es: { name: "Vegan Tsoureki", description: "Tsoureki Vegano: Tsoureki suave y aromático hecho completamente con ingredientes de origen vegetal" },
      sr: { name: "Vegan Tsoureki", description: "Posni Cureki: Mekan i mirisan cureki napravljen u potpunosti od sastojaka biljnog porekla" },
      bg: { name: "Vegan Tsoureki", description: "Постно Цуреки: Мек и ароматен цуреки, приготвен изцяло от растителни съставки" },
      ro: { name: "Vegan Tsoureki", description: "Cozonac Grec de Post: Cozonac moale și aromat preparat în întregime din ingrediente pe bază de plante" }
    }
  }
];