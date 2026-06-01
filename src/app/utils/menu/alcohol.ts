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
  }
];