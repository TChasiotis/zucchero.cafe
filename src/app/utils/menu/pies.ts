import { MenuItem } from "../menuData";

export const pies: MenuItem[] = [
  {
    id: "pies_info_general",
    categoryId: "pies",
    price: 0,
    hidePrice: true,
    translations: {
      el: { name: "ℹ️ Χρήσιμες Πληροφορίες", description: "Στις χωριάτικες πίτες (με το κομμάτι) υπάρχει επιπλέον πάγια χρέωση service fee +{fee}€ ανά παραγγελία." },
      en: { name: "ℹ️ Useful Information", description: "An additional flat +{fee}€ service fee applies per order for rustic pies." },
      de: { name: "ℹ️ Nützliche Informationen", description: "Für rustikale Pitas fällt eine zusätzliche pauschale Servicegebühr von +{fee} € pro Bestellung an." },
      fr: { name: "ℹ️ Informations utiles", description: "Des frais de service forfaitaires supplémentaires de +{fee} € s'appliquent par commande pour les tourtes rustiques." },
      es: { name: "ℹ️ Información útil", description: "Se aplica un cargo de servicio fijo adicional de +{fee} € por pedido para los pasteles rústicos." },
      sr: { name: "ℹ️ Korisne informacije", description: "Primenjuje se dodatna fiksna doplata za uslugu od +{fee}€ po porudžbini za rustične pite." },
      bg: { name: "ℹ️ Полезна информация", description: "Удържа се допълнителна фиксирана такса за обслужване от +{fee}€ на поръчка за селски баници." },
      ro: { name: "ℹ️ Informații utile", description: "Se aplică o taxă de servire fixă suplimentară de +{fee}€ pe comandă pentru plăcintele rustice." }
    }
  },
  {
    id: "separator_pies_info",
    categoryId: "pies",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "pie_cheese",
    categoryId: "pies",
    price: 0.70,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Τυρόπιτα", description: "Παραδοσιακή χωριάτικη τυρόπιτα με τραγανό φύλλο και γέμιση φέτας" },
      en: { name: "Cheese Pie", description: "Traditional rustic cheese pie with crispy phyllo and feta cheese filling" },
      de: { name: "Cheese Pie", description: "Käsekuchen (Pita): Traditionelle rustikale Käsepita mit knusprigem Phyllo und Feta-Füllung" },
      fr: { name: "Cheese Pie", description: "Tourte au Fromage: Tourte rustique traditionnelle avec pâte phyllo croustillante et garniture à la feta" },
      es: { name: "Cheese Pie", description: "Pastel de Queso: Pastel rústico tradicional con masa filo crujiente y relleno de queso feta" },
      sr: { name: "Cheese Pie", description: "Pita sa Sirom: Tradicionalna rustična pita sa sirom, hrskavim korama i punjenjem od fete" },
      bg: { name: "Cheese Pie", description: "Баница със Сирене: Традиционна селска баница с хрупкави кори и пълнеж от сирене фета" },
      ro: { name: "Cheese Pie", description: "Plăcintă cu Brânză: Plăcintă rustică tradițională cu aluat crocant și umplutură de brânză feta" }
    }
  },
  {
    id: "pie_spinach_cheese",
    categoryId: "pies",
    price: 0.70,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Σπανακοτυρόπιτα", description: "Χωριάτικη σπανακοτυρόπιτα με φρέσκο σπανάκι, φέτα και μυρωδικά" },
      en: { name: "Spinach & Cheese Pie", description: "Rustic pie with fresh spinach, feta cheese, and herbs" },
      de: { name: "Spinach & Cheese Pie", description: "Spinat-Käse-Pita: Rustikale Pita mit frischem Spinat, Feta-Käse und Kräutern" },
      fr: { name: "Spinach & Cheese Pie", description: "Tourte Épinards & Fromage: Tourte rustique aux épinards frais, feta et herbes" },
      es: { name: "Spinach & Cheese Pie", description: "Pastel de Espinacas y Queso: Pastel rústico con espinacas frescas, queso feta y hierbas" },
      sr: { name: "Spinach & Cheese Pie", description: "Pita sa Spanaćem i Sirom: Rustična pita sa svežim spanaćem, feta sirom i začinskim biljem" },
      bg: { name: "Spinach & Cheese Pie", description: "Баница със Спанак и Сирене: Селска баница с пресен спанак, сирене фета и билки" },
      ro: { name: "Spinach & Cheese Pie", description: "Plăcintă cu Spanac și Brânză: Plăcintă rustică cu spanac proaspăt, brânză feta și ierburi aromate" }
    }
  },
  {
    id: "pie_leek_cheese",
    categoryId: "pies",
    price: 0.70,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Πρασοτυρόπιτα", description: "Χωριάτικη πρασοτυρόπιτα με γλυκά πράσα και φέτα" },
      en: { name: "Leek & Cheese Pie", description: "Rustic pie with sweet leeks and feta cheese" },
      de: { name: "Leek & Cheese Pie", description: "Lauch-Käse-Pita: Rustikale Pita mit süßem Lauch und Feta-Käse" },
      fr: { name: "Leek & Cheese Pie", description: "Tourte Poireaux & Fromage: Tourte rustique aux poireaux doux et feta" },
      es: { name: "Leek & Cheese Pie", description: "Pastel de Puerro y Queso: Pastel rústico con puerros dulces y queso feta" },
      sr: { name: "Leek & Cheese Pie", description: "Pita sa Prazilukom i Sirom: Rustična pita sa slatkim prazilukom i feta sirom" },
      bg: { name: "Leek & Cheese Pie", description: "Баница с Праз и Сирене: Селска баница със сладък праз и сирене фета" },
      ro: { name: "Leek & Cheese Pie", description: "Plăcintă cu Praz și Brânză: Plăcintă rustică cu praz dulce și brânză feta" }
    }
  },
  {
    id: "pie_ham_cheese",
    categoryId: "pies",
    price: 0.70,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Πίτα Ζαμπόν & Κασέρι", description: "Χωριάτικη πίτα με λαχταριστό ζαμπόν και λιωμένο κασέρι" },
      en: { name: "Ham & Cheese Pie", description: "Rustic pie with delicious ham and melted yellow cheese" },
      de: { name: "Ham & Cheese Pie", description: "Schinken-Käse-Pita: Rustikale Pita mit köstlichem Schinken und geschmolzenem Käse" },
      fr: { name: "Ham & Cheese Pie", description: "Tourte Jambon & Fromage: Tourte rustique avec du jambon délicieux et du fromage fondu" },
      es: { name: "Ham & Cheese Pie", description: "Pastel de Jamón y Queso: Pastel rústico con delicioso jamón y queso derretido" },
      sr: { name: "Ham & Cheese Pie", description: "Pita sa Šunkom i Kačkavaljem: Rustična pita sa ukusnom šunkom i topljenim sirom" },
      bg: { name: "Ham & Cheese Pie", description: "Баница с Шунка и Кашкавал: Селска баница с вкусна шунка и разтопен кашкавал" },
      ro: { name: "Ham & Cheese Pie", description: "Plăcintă cu Șuncă și Cașcaval: Plăcintă rustică cu șuncă delicioasă și cașcaval topit" }
    }
  },
  {
    id: "pie_minced_meat",
    categoryId: "pies",
    price: 0.70,
    isSoldOut: false,
    hasEgg: true,
    translations: {
      el: { name: "Κιμαδόπιτα", description: "Χωριάτικη κιμαδόπιτα με πλούσια γέμιση μοσχαρίσιου κιμά" },
      en: { name: "Minced Meat Pie", description: "Rustic pie with a rich minced beef filling" },
      de: { name: "Minced Meat Pie", description: "Hackfleisch-Pita: Rustikale Pita mit reichhaltiger Rinderhackfleischfüllung" },
      fr: { name: "Minced Meat Pie", description: "Tourte à la Viande Hachée: Tourte rustique avec une riche garniture de bœuf haché" },
      es: { name: "Minced Meat Pie", description: "Pastel de Carne Picada: Pastel rústico con un rico relleno de carne picada de ternera" },
      sr: { name: "Minced Meat Pie", description: "Pita sa Mesom: Rustična pita sa bogatim punjenjem od mlevenog goveđeg mesa" },
      bg: { name: "Minced Meat Pie", description: "Баница с Кайма: Селска баница с богат пълнеж от телешка кайма" },
      ro: { name: "Minced Meat Pie", description: "Plăcintă cu Carne Tocată: Plăcintă rustică cu o umplutură bogată de carne tocată de vită" }
    }
  },
  {
    id: "pie_chicken",
    categoryId: "pies",
    price: 0.70,
    isSoldOut: false,
    hasEgg: true,
    translations: {
      el: { name: "Κοτόπιτα", description: "Χωριάτικη κοτόπιτα με ζουμερό κοτόπουλο και κόκκινες πιπεριές" },
      en: { name: "Chicken Pie", description: "Rustic pie with juicy chicken and red peppers filling" },
      de: { name: "Chicken Pie", description: "Hähnchen-Pita: Rustikale Pita mit saftiger Hähnchenfüllung und roten Paprikaschoten" },
      fr: { name: "Chicken Pie", description: "Tourte au Poulet: Tourte rustique avec garniture de poulet juteux et poivrons rouges" },
      es: { name: "Chicken Pie", description: "Pastel de Pollo: Pastel rústico con jugoso relleno de pollo y pimientos rojos" },
      sr: { name: "Chicken Pie", description: "Pita sa Piletinom: Rustična pita sa sočnim punjenjem od piletine i crvenom paprikom" },
      bg: { name: "Chicken Pie", description: "Баница с Пиле: Селска баница със сочен пилешки пълнеж и червени чушки" },
      ro: { name: "Chicken Pie", description: "Plăcintă cu Pui: Plăcintă rustică cu umplutură suculentă de pui și ardei gras roșu" }
    }
  },
  {
    id: "pie_bougatsa_cream",
    categoryId: "pies",
    price: 0.70,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Χωριάτικη Μπουγάτσα με Κρέμα", description: "Χωριάτικη μπουγάτσα με τραγανό παραδοσιακό φύλλο και γλυκιά κρέμα σιμιγδαλιού" },
      en: { name: "Rustic Cream Bougatsa", description: "Rustic bougatsa with crispy traditional phyllo and sweet semolina cream" },
      de: { name: "Rustic Cream Bougatsa", description: "Rustikale Bougatsa mit knusprigem traditionellem Phyllo und süßer Grießcreme" },
      fr: { name: "Rustic Cream Bougatsa", description: "Bougatsa rustique avec pâte phyllo traditionnelle croustillante et crème de semoule douce" },
      es: { name: "Rustic Cream Bougatsa", description: "Bougatsa rústica con masa filo tradicional crujiente y crema dulce de sémola" },
      sr: { name: "Rustic Cream Bougatsa", description: "Rustična bugaca sa hrskavim tradicionalnim korama i slatkim kremom od griza" },
      bg: { name: "Rustic Cream Bougatsa", description: "Селска бугаца с хрупкави традиционни кори и сладък крем от грис" },
      ro: { name: "Rustic Cream Bougatsa", description: "Bougatsa rustică cu aluat tradițional crocant și cremă dulce de griș" }
    }
  },
  {
    id: "bougatsa_cream",
    categoryId: "pies",
    price: 2.50,
    unit: "portion",
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Μπουγάτσα με Κρέμα", description: "Παραδοσιακή μπουγάτσα με γλυκιά κρέμα σιμιγδαλιού, πασπαλισμένη με άχνη ζάχαρη και κανέλα" },
      en: { name: "Bougatsa with Cream", description: "Traditional bougatsa with sweet semolina cream, dusted with powdered sugar and cinnamon" },
      de: { name: "Bougatsa with Cream", description: "Traditionelle Bougatsa mit süßer Grießcreme, bestäubt mit Puderzucker und Zimt" },
      fr: { name: "Bougatsa with Cream", description: "Bougatsa à la crème traditionnelle avec crème de semoule douce, saupoudrée de sucre glace et de cannelle" },
      es: { name: "Bougatsa with Cream", description: "Bougatsa tradicional con crema dulce de sémola, espolvoreada con azúcar glas y canela" },
      sr: { name: "Bougatsa with Cream", description: "Tradicionalna bugaca sa slatkim kremom od griza, posuta šećerom u prahu i cimetom" },
      bg: { name: "Bougatsa with Cream", description: "Традиционна бугаца със сладък крем от грис, поръсена с пудра захар и канела" },
      ro: { name: "Bougatsa with Cream", description: "Bougatsa tradițională cu cremă dulce de griș, presărată cu zahăr pudră și scorțișoară" }
    }
  },
  // --- ΝΗΣΤΙΣΙΜΕΣ (VEGAN) ΠΙΤΕΣ ---
  {
    id: "pie_potato",
    categoryId: "pies",
    price: 0.70,
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Πατατόπιτα", description: "Νηστίσιμη χωριάτικη πατατόπιτα" },
      en: { name: "Potato Pie", description: "Vegan rustic potato pie" },
      de: { name: "Potato Pie", description: "Kartoffel-Pita: Vegane rustikale Kartoffel-Pita" },
      fr: { name: "Potato Pie", description: "Tourte aux Pommes de Terre: Tourte rustique végétalienne aux pommes de terre" },
      es: { name: "Potato Pie", description: "Pastel de Patata: Pastel rústico vegano de patata" },
      sr: { name: "Potato Pie", description: "Pita sa Krompirom: Posna rustična pita sa krompirom" },
      bg: { name: "Potato Pie", description: "Баница с Картофи: Постна селска баница с картофи" },
      ro: { name: "Potato Pie", description: "Plăcintă cu Cartofi: Plăcintă rustică vegană cu cartofi" }
    }
  },
  {
    id: "pie_vegetable",
    categoryId: "pies",
    price: 0.70,
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Πίτα Λαχανικών", description: "Νηστίσιμη χωριάτικη πίτα με ανάμεικτα λαχανικά" },
      en: { name: "Vegetable Mix Pie", description: "Vegan rustic pie with mixed vegetables" },
      de: { name: "Vegetable Mix Pie", description: "Gemüse-Pita: Vegane rustikale Pita mit gemischtem Gemüse" },
      fr: { name: "Vegetable Mix Pie", description: "Tourte aux Légumes: Tourte rustique végétalienne aux légumes mélangés" },
      es: { name: "Vegetable Mix Pie", description: "Pastel de Verduras: Pastel rústico vegano con mezcla de verduras" },
      sr: { name: "Vegetable Mix Pie", description: "Pita sa Povrćem: Posna rustična pita sa mešanim povrćem" },
      bg: { name: "Vegetable Mix Pie", description: "Баница със Зеленчуци: Постна селска баница със смесени зеленчуци" },
      ro: { name: "Vegetable Mix Pie", description: "Plăcintă cu Legume: Plăcintă rustică vegană cu amestec de legume" }
    }
  },
  {
    id: "pie_leek",
    categoryId: "pies",
    price: 0.70,
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Πρασόπιτα", description: "Νηστίσιμη χωριάτικη πρασόπιτα με γλυκά πράσα και μυρωδικά, χωρίς τυρί" },
      en: { name: "Leek Pie", description: "Vegan rustic pie with sweet leeks and herbs, cheese-free" },
      de: { name: "Leek Pie", description: "Lauch-Pita: Vegane rustikale Pita mit süßem Lauch und Kräutern, ohne Käse" },
      fr: { name: "Leek Pie", description: "Tourte aux Poireaux: Tourte rustique végétalienne aux poireaux doux et herbes, sans fromage" },
      es: { name: "Leek Pie", description: "Pastel de Puerro: Pastel rústico vegano con puerros dulces y hierbas, sin queso" },
      sr: { name: "Leek Pie", description: "Pita sa Prazilukom: Posna rustična pita sa slatkim prazilukom i začinskim biljem, bez sira" },
      bg: { name: "Leek Pie", description: "Баница с Праз: Постна селска баница със сладък праз и билки, без сирене" },
      ro: { name: "Leek Pie", description: "Plăcintă cu Praz: Plăcintă rustică vegană cu praz dulce și ierburi aromate, fără brânză" }
    }
  },
  {
    id: "pie_mushroom",
    categoryId: "pies",
    price: 0.70,
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Μανιταρόπιτα", description: "Νηστίσιμη χωριάτικη μανιταρόπιτα" },
      en: { name: "Mushroom Pie", description: "Vegan rustic mushroom pie" },
      de: { name: "Mushroom Pie", description: "Pilz-Pita: Vegane rustikale Pilz-Pita" },
      fr: { name: "Mushroom Pie", description: "Tourte aux Champignons: Tourte rustique végétalienne aux champignons" },
      es: { name: "Mushroom Pie", description: "Pastel de Champiñones: Pastel rústico vegano de champiñones" },
      sr: { name: "Mushroom Pie", description: "Pita sa Pečurkama: Posna rustična pita sa pečurkama" },
      bg: { name: "Mushroom Pie", description: "Баница с Гъби: Постна селска баница с гъби" },
      ro: { name: "Mushroom Pie", description: "Plăcintă cu Ciuperci: Plăcintă rustică vegană cu ciuperci" }
    }
  },
  {
    id: "pie_olive",
    categoryId: "pies",
    price: 0.70,
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Πίτα με Ελιά", description: "Νηστίσιμη χωριάτικη πίτα με ελιές" },
      en: { name: "Olive Pie", description: "Vegan rustic olive pie" },
      de: { name: "Olive Pie", description: "Oliven-Pita: Vegane rustikale Oliven-Pita" },
      fr: { name: "Olive Pie", description: "Tourte aux Olives: Tourte rustique végétalienne aux olives" },
      es: { name: "Olive Pie", description: "Pastel de Aceitunas: Pastel rústico vegano de aceitunas" },
      sr: { name: "Olive Pie", description: "Pita sa Maslinama: Posna rustična pita sa maslinama" },
      bg: { name: "Olive Pie", description: "Баница с Маслини: Постна селска баница с маслини" },
      ro: { name: "Olive Pie", description: "Plăcintă cu Măsline: Plăcintă rustică vegană cu măsline" }
    }
  },
  {
    id: "pie_bougatsa_cream_vegan",
    categoryId: "pies",
    price: 0.70,
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Νηστίσιμη Χωριάτικη Μπουγάτσα με Κρέμα", description: "Νηστίσιμη χωριάτικη μπουγάτσα με φυτικά υλικά, τραγανό φύλλο και γλυκιά κρέμα" },
      en: { name: "Vegan Rustic Cream Bougatsa", description: "Vegan rustic bougatsa made with plant-based ingredients, crispy phyllo, and sweet cream" },
      de: { name: "Vegan Rustic Cream Bougatsa", description: "Vegane rustikale Bougatsa aus rein pflanzlichen Zutaten, knusprigem Phyllo und süßer Creme" },
      fr: { name: "Vegan Rustic Cream Bougatsa", description: "Bougatsa rustique végétalienne préparée avec des ingrédients d'origine végétale, pâte phyllo croustillante et crème douce" },
      es: { name: "Vegan Rustic Cream Bougatsa", description: "Bougatsa rústica vegana hecha con ingredientes de origen vegetal, masa filo crujiente y crema dulce" },
      sr: { name: "Vegan Rustic Cream Bougatsa", description: "Posna rustična bugaca napravljena od sastojaka biljnog porekla, sa hrskavim korama i slatkim kremom" },
      bg: { name: "Vegan Rustic Cream Bougatsa", description: "Постна селска бугаца, приготвена от растителни съставки, с хрупкави кори и сладък крем" },
      ro: { name: "Vegan Rustic Cream Bougatsa", description: "Bougatsa rustică vegană preparată din ingrediente pe bază de plante, cu aluat crocant și cremă dulce" }
    }
  }
];