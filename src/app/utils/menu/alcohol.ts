import { MenuItem } from "../menuData";

export const alcohol: MenuItem[] = [
  {
    id: "nymphi_beer",
    categoryId: "alcohol",
    price: 3.5,
    isVegan: true,
    translations: {
      el: { name: "Μπύρα Νύμφη 5%", description: "Δροσιστική lager, η αυθεντική τοπική μπύρα της Θεσσαλονίκης." },
      en: { name: "Nymphi Beer 5%", description: "Refreshing lager, the authentic local beer of Thessaloniki." },
      de: { name: "Nymphi Beer 5%", description: "Nymphi Bier - Erfrischendes Lagerbier, das authentische lokale Bier aus Thessaloniki." },
      fr: { name: "Nymphi Beer 5%", description: "Bière Nymphi - Bière blonde rafraîchissante, la bière locale authentique de Thessalonique." },
      es: { name: "Nymphi Beer 5%", description: "Cerveza Nymphi - Lager refrescante, la auténtica cerveza local de Tesalónica." },
      sr: { name: "Nymphi Beer 5%", description: "Nymphi Pivo - Osvežavajući lager, autentično lokalno pivo iz Soluna." },
      bg: { name: "Nymphi Beer 5%", description: "Бира Nymphi - Освежаващ лагер, автентичната местна бира на Солун." },
      ro: { name: "Nymphi Beer 5%", description: "Bere Nymphi - Lager răcoritor, berea locală autentică din Salonic." }
    }
  },
  {
    id: "aperol_spritz",
    categoryId: "alcohol",
    price: 7.0,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Aperol Spritz 8-10%", description: "Το κλασικό, δροσιστικό ιταλικό κοκτέιλ με Aperol, prosecco και σόδα." },
      en: { name: "Aperol Spritz 8-10%", description: "The classic, refreshing Italian cocktail with Aperol, prosecco, and soda." },
      de: { name: "Aperol Spritz 8-10%", description: "Der klassische, erfrischende italienische Cocktail mit Aperol, Prosecco und Soda." },
      fr: { name: "Aperol Spritz 8-10%", description: "Le cocktail italien classique et rafraîchissant avec Aperol, prosecco et soda." },
      es: { name: "Aperol Spritz 8-10%", description: "El clásico y refrescante cóctel italiano con Aperol, prosecco y soda." },
      sr: { name: "Aperol Spritz 8-10%", description: "Klasični, osvežavajući italijanski koktel sa Aperolom, prosekom i kiselom vodom." },
      bg: { name: "Aperol Spritz 8-10%", description: "Класическият освежаващ италиански коктейл с Aperol, просеко и сода." },
      ro: { name: "Aperol Spritz 8-10%", description: "Cocktailul italian clasic și răcoritor cu Aperol, prosecco și sifon." }
    }
  },
  {
    id: "separator_alcohol_wines",
    categoryId: "alcohol",
    price: 0,
    hidePrice: true,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "wine_paranga_rose",
    categoryId: "alcohol",
    price: 12.0,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Κρασί Παράγκα Ροζέ", description: "Ροζέ ημίξηρος οίνος (2024). Ποικιλίες: Ξινόμαυρο - Syrah. Φιάλη 750ml, Αλκοόλ 12%." },
      en: { name: "Paranga Rosé Wine", description: "Semi-dry rosé wine (2024). Varieties: Xinomavro - Syrah. 750ml bottle, 12% alc." },
      de: { name: "Paranga Rosé Wine", description: "Paranga Roséwein - Halbtrockener Roséwein (2024). Rebsorten: Xinomavro - Syrah. 750ml Flasche, 12% Vol." },
      fr: { name: "Paranga Rosé Wine", description: "Vin Rosé Paranga - Vin rosé demi-sec (2024). Cépages : Xinomavro - Syrah. Bouteille de 750ml, 12% d'alcool." },
      es: { name: "Paranga Rosé Wine", description: "Vino Rosado Paranga - Vino rosado semiseco (2024). Variedades: Xinomavro - Syrah. Botella de 750ml, 12% alc." },
      sr: { name: "Paranga Rosé Wine", description: "Paranga Roze Vino - Polusuvo roze vino (2024). Sorte: Ksinomavro - Syrah. Flaša od 750ml, 12% alkohola." },
      bg: { name: "Paranga Rosé Wine", description: "Розе Paranga - Полусухо розе (2024). Сортове: Ксиномавро - Сира. Бутилка 750мл, 12% алкохол." },
      ro: { name: "Paranga Rosé Wine", description: "Vin Rose Paranga - Vin rose demisec (2024). Soiuri: Xinomavro - Syrah. Sticlă de 750ml, 12% alcool." }
    }
  },
  {
    id: "wine_paranga_white",
    categoryId: "alcohol",
    price: 12.0,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Κρασί Παράγκα Λευκό", description: "Λευκός ξηρός οίνος (2025). Φιάλη 750ml, Αλκοόλ 12.5%." },
      en: { name: "Paranga White Wine", description: "Dry white wine (2025). 750ml bottle, 12.5% alc." },
      de: { name: "Paranga White Wine", description: "Paranga Weißwein - Trockener Weißwein (2025). 750ml Flasche, 12,5% Vol." },
      fr: { name: "Paranga White Wine", description: "Vin Blanc Paranga - Vin blanc sec (2025). Bouteille de 750ml, 12,5% d'alcool." },
      es: { name: "Paranga White Wine", description: "Vino Blanco Paranga - Vino blanco seco (2025). Botella de 750ml, 12,5% alc." },
      sr: { name: "Paranga White Wine", description: "Paranga Belo Vino - Suvo belo vino (2025). Flaša od 750ml, 12,5% alkohola." },
      bg: { name: "Paranga White Wine", description: "Бяло вино Paranga - Сухо бяло вино (2025). Бутилка 750мл, 12.5% алкохол." },
      ro: { name: "Paranga White Wine", description: "Vin Alb Paranga - Vin alb sec (2025). Sticlă de 750ml, 12,5% alcool." }
    }
  },
  {
    id: "wine_thesis_malagousia",
    categoryId: "alcohol",
    price: 12.0,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Κρασί Thesis Μαλαγουζιά", description: "Λευκός ξηρός οίνος από την ποικιλία Μαλαγουζιά (2025). Φιάλη 750ml, Αλκοόλ 12.5%." },
      en: { name: "Thesis Malagousia White Wine", description: "Dry white wine from the Malagousia variety (2025). 750ml bottle, 12.5% alc." },
      de: { name: "Thesis Malagousia White Wine", description: "Thesis Malagousia Weißwein - Trockener Weißwein aus der Rebsorte Malagousia (2025). 750ml Flasche, 12,5% Vol." },
      fr: { name: "Thesis Malagousia White Wine", description: "Vin Blanc Thesis Malagousia - Vin blanc sec de la variété Malagousia (2025). Bouteille de 750ml, 12,5% d'alcool." },
      es: { name: "Thesis Malagousia White Wine", description: "Vino Blanco Thesis Malagousia - Vino blanco seco de la variedad Malagousia (2025). Botella de 750ml, 12,5% alc." },
      sr: { name: "Thesis Malagousia White Wine", description: "Thesis Malagousia Belo Vino - Suvo belo vino od sorte Malagousia (2025). Flaša od 750ml, 12,5% alkohola." },
      bg: { name: "Thesis Malagousia White Wine", description: "Бяло вино Thesis Malagousia - Сухо бяло вино от сорт Малагузия (2025). Бутилка 750мл, 12.5% алкохол." },
      ro: { name: "Thesis Malagousia White Wine", description: "Vin Alb Thesis Malagousia - Vin alb sec din soiul Malagousia (2025). Sticlă de 750ml, 12,5% alcool." }
    }
  }
];