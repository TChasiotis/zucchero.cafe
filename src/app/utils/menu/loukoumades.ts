import { MenuItem } from "../menuData";

export const loukoumades: MenuItem[] = [
  {
    id: "loukoumades_honey",
    categoryId: "loukoumades",
    price: 4.00,
    unit: "portion",
    isSoldOut: false,
    translations: {
      el: { name: "Λουκουμάδες με Μέλι", description: "Αφράτοι παραδοσιακοί λουκουμάδες, τηγανισμένοι τη στιγμή της παραγγελίας, με μέλι" },
      en: { name: "Loukoumades with Honey", description: "Fluffy traditional Greek doughnuts, freshly deep-fried to order, with honey" },
      de: { name: "Loukoumades with Honey", description: "Loukoumades mit Honig: Frittierte traditionelle griechische Teigbällchen mit Honig" },
      fr: { name: "Loukoumades with Honey", description: "Loukoumades au Miel: Beignets grecs traditionnels fraîchement frits avec du miel" },
      es: { name: "Loukoumades with Honey", description: "Loukoumades con Miel: Buñuelos griegos tradicionales recién fritos con miel" },
      sr: { name: "Loukoumades with Honey", description: "Lukumades sa Medom: Tradicionalne grčke krofne, sveže pržene po narudžbini sa medom" },
      bg: { name: "Loukoumades with Honey", description: "Лукумадес с Мед: Традиционни гръцки понички, прясно изпържени с мед" },
      ro: { name: "Loukoumades with Honey", description: "Loukoumades cu Miere: Gogoși grecești tradiționale, proaspăt prăjite, cu miere" }
    }
  },
  {
    id: "loukoumades_chocolate",
    categoryId: "loukoumades",
    price: 4.50,
    unit: "portion",
    isSoldOut: false,
    translations: {
      el: { name: "Λουκουμάδες με Σοκολάτα", description: "Αφράτοι παραδοσιακοί λουκουμάδες, τηγανισμένοι τη στιγμή της παραγγελίας, με πλούσια σοκολάτα" },
      en: { name: "Loukoumades with Chocolate", description: "Fluffy traditional Greek doughnuts, freshly deep-fried to order, with rich chocolate" },
      de: { name: "Loukoumades with Chocolate", description: "Loukoumades mit Schokolade: Frittierte traditionelle griechische Teigbällchen mit reichhaltiger Schokolade" },
      fr: { name: "Loukoumades with Chocolate", description: "Loukoumades au Chocolat: Beignets grecs traditionnels fraîchement frits avec du chocolat" },
      es: { name: "Loukoumades with Chocolate", description: "Loukoumades con Chocolate: Buñuelos griegos tradicionales recién fritos con chocolate" },
      sr: { name: "Loukoumades with Chocolate", description: "Lukumades sa Čokoladom: Tradicionalne grčke krofne, sveže pržene po narudžbini sa čokoladom" },
      bg: { name: "Loukoumades with Chocolate", description: "Лукумадес с Шоколад: Традиционни гръцки понички, прясно изпържени с богат шоколад" },
      ro: { name: "Loukoumades with Chocolate", description: "Loukoumades cu Ciocolată: Gogoși grecești tradiționale, proaspăt prăjite, cu ciocolată" }
    }
  },
  // --- EXTRAS ---
  {
    id: "loukoumades_extras",
    categoryId: "loukoumades",
    price: 0,
    hidePrice: true,
    translations: {
      el: { 
        name: "Extras: Καρύδι, Κανέλα", 
        description: "" 
      },
      en: { 
        name: "Extras: Walnut, Cinnamon", 
        description: "" 
      },
      de: { 
        name: "Extras: Walnut, Cinnamon", 
        description: "Extras: Walnuss, Zimt" 
      },
      fr: { 
        name: "Extras: Walnut, Cinnamon", 
        description: "Suppléments: Noix, Cannelle" 
      },
      es: { 
        name: "Extras: Walnut, Cinnamon", 
        description: "Extras: Nuez, Canela" 
      },
      sr: { 
        name: "Extras: Walnut, Cinnamon", 
        description: "Dodaci: Orah, Cimet" 
      },
      bg: { 
        name: "Extras: Walnut, Cinnamon", 
        description: "Добавки: Орех, Канела" 
      },
      ro: { 
        name: "Extras: Walnut, Cinnamon", 
        description: "Extras: Nucă, Scorțișoară" 
      }
    }
  },
  // --- ΚΑΡΤΑ ΠΛΗΡΟΦΟΡΙΩΝ ---
  {
    id: "loukoumades_info_general",
    categoryId: "loukoumades",
    price: 0,
    hidePrice: true,
    translations: {
      el: { name: "ℹ️ Χρήσιμες Πληροφορίες", description: "Διατίθενται σε συσκευασίες μονής και διπλής μερίδας. Επιλέξτε αυτή που επιθυμείτε." },
      en: { name: "ℹ️ Useful Information", description: "Available in single and double portion boxes. Select your preferable size." },
      de: { name: "ℹ️ Nützliche Informationen", description: "Erhältlich in Einzel- und Doppelportionsboxen. Wählen Sie Ihre bevorzugte Größe." },
      fr: { name: "ℹ️ Informations utiles", description: "Disponible en boîtes de portion simple ou double. Sélectionnez la taille de votre choix." },
      es: { name: "ℹ️ Información útil", description: "Disponible en cajas de porción simple o doble. Seleccione el tamaño de su preferencia." },
      sr: { name: "ℹ️ Korisne informacije", description: "Dostupno u kutijama za jednu ili duplu porciju. Izaberite željenu veličinu." },
      bg: { name: "ℹ️ Полезна информация", description: "Предлагат се в кутии за единични или двойни порции. Изберете предпочитания от вас размер." },
      ro: { name: "ℹ️ Informații utile", description: "Disponibil în cutii cu porție simplă sau dublă. Selectați dimensiunea preferată." }
    }
  }
];