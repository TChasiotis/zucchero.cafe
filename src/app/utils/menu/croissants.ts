import { MenuItem } from "../menuData";

export const croissants: MenuItem[] = [
  {
    id: "plain_croissant",
    categoryId: "croissants", // Ή όπως αλλιώς λέγεται το id της κατηγορίας σου στα data
    price: 2.0,
    translations: {
      el: { name: "Σκέτο Κρουασάν", description: "Κλασικό, αφράτο κρουασάν βουτύρου" },
      en: { name: "Plain Croissant", description: "Classic, fluffy butter croissant" },
      de: { name: "Plain Croissant", description: "Buttercroissant: Klassisches, luftiges Buttercroissant" },
      fr: { name: "Plain Croissant", description: "Croissant au Beurre: Croissant classique et moelleux au beurre" },
      es: { name: "Plain Croissant", description: "Croissant de Mantequilla: Croissant clásico y esponjoso de mantequilla" },
      sr: { name: "Plain Croissant", description: "Prazan Kroasan: Klasični, mekani kroasan sa puterom" },
      bg: { name: "Plain Croissant", description: "Обикновен Кроасан: Класически, пухкав маслен кроасан" },
      ro: { name: "Plain Croissant", description: "Croissant Simplu: Croissant clasic și pufos cu unt" }
    }
  },
  {
    id: "chocolate_croissant",
    categoryId: "croissants",
    price: 2.5,
    translations: {
      el: { name: "Κρουασάν με Σοκολάτα", description: "Κρουασάν βουτύρου με πλούσια γέμιση σοκολάτας" },
      en: { name: "Chocolate Croissant", description: "Butter croissant with rich chocolate filling" },
      de: { name: "Chocolate Croissant", description: "Schokoladencroissant: Buttercroissant mit reichhaltiger Schokoladenfüllung" },
      fr: { name: "Chocolate Croissant", description: "Croissant au Chocolat: Croissant au beurre avec un fourrage riche en chocolat" },
      es: { name: "Chocolate Croissant", description: "Croissant de Chocolate: Croissant de mantequilla con rico relleno de chocolate" },
      sr: { name: "Chocolate Croissant", description: "Kroasan sa Čokoladom: Kroasan sa puterom i bogatim čokoladnim punjenjem" },
      bg: { name: "Chocolate Croissant", description: "Шоколадов Кроасан: Маслен кроасан с богат шоколадов пълнеж" },
      ro: { name: "Chocolate Croissant", description: "Croissant cu Ciocolată: Croissant cu unt și umplutură bogată de ciocolată" }
    }
  },
  {
    id: "cream_croissant",
    categoryId: "croissants",
    price: 3.0,
    translations: {
      el: { name: "Κρουασάν με Κρέμα Πατισερί", description: "Κρουασάν βουτύρου με βελούδινη γέμιση κρέμα πατισερί" },
      en: { name: "Patisserie Cream Croissant", description: "Butter croissant with velvety patisserie cream filling" },
      de: { name: "Patisserie Cream Croissant", description: "Croissant mit Konditorcreme: Buttercroissant mit samtiger Konditorcremefüllung" },
      fr: { name: "Patisserie Cream Croissant", description: "Croissant à la Crème Pâtissière: Croissant au beurre fourré de crème pâtissière veloutée" },
      es: { name: "Patisserie Cream Croissant", description: "Croissant con Crema Pastelera: Croissant de mantequilla relleno de suave crema pastelera" },
      sr: { name: "Patisserie Cream Croissant", description: "Kroasan sa Poslastičarskim Kremom: Kroasan sa puterom i baršunastim punjenjem od poslastičarskog krema" },
      bg: { name: "Patisserie Cream Croissant", description: "Кроасан със Сладкарски Крем: Маслен кроасан с кадифен пълнеж от сладкарски крем" },
      ro: { name: "Patisserie Cream Croissant", description: "Croissant cu Cremă de Patiserie: Croissant cu unt și umplutură catifelată de cremă de patiserie" }
    }
  },
  {
    id: "marble_croissant",
    categoryId: "croissants",
    price: 3.0,
    translations: {
      el: { name: "Ανάμεικτο Κρουασάν", description: "Κρουασάν με γέμιση ανάμεικτη από σοκολάτα και κρέμα πατισερί" },
      en: { name: "Marble Croissant", description: "Filled with Chocolate and Patisserie Cream Mix" },
      de: { name: "Marble Croissant", description: "Marmor Croissant: Gefüllt mit einer Mischung aus Schokolade und Konditorcreme" },
      fr: { name: "Marble Croissant", description: "Croissant Marbré: Fourré d'un mélange de chocolat et de crème pâtissière" },
      es: { name: "Marble Croissant", description: "Croissant Jaspeado: Relleno de una mezcla de chocolate y crema pastelera" },
      sr: { name: "Marble Croissant", description: "Mermerni Kroasan: Punjen mešavinom čokolade i poslastičarskog krema" },
      bg: { name: "Marble Croissant", description: "Мраморен Кроасан: Пълнен със смес от шоколад и сладкарски крем" },
      ro: { name: "Marble Croissant", description: "Croissant Marmorat: Umplut cu un amestec de ciocolată și cremă de patiserie" }
    }
  },
  {
    id: "croissant_extras",
    categoryId: "croissants", // Ή "croissants", ανάλογα τι έβαλες τελικά!
    price: 0,
    hidePrice: true,
    translations: {
      el: { 
        name: "Πρόσθετα: Ζάχαρη Άχνη, Κανέλα, Σκόνη Σοκολάτας", 
        description: "" 
      },
      en: { 
        name: "Extras: Powdered Sugar, Cinnamon, Chocolate Powder", 
        description: "" 
      },
      de: { 
        name: "Extras: Powdered Sugar, Cinnamon, Chocolate Powder", 
        description: "Extras: Puderzucker, Zimt, Schokoladenpulver" 
      },
      fr: { 
        name: "Extras: Powdered Sugar, Cinnamon, Chocolate Powder", 
        description: "Suppléments: Sucre Glace, Cannelle, Poudre de Chocolat" 
      },
      es: { 
        name: "Extras: Powdered Sugar, Cinnamon, Chocolate Powder", 
        description: "Extras: Azúcar Glas, Canela, Cacao en Polvo" 
      },
      sr: { 
        name: "Extras: Powdered Sugar, Cinnamon, Chocolate Powder", 
        description: "Dodaci: Šećer u prahu, Cimet, Čokolada u prahu" 
      },
      bg: { 
        name: "Extras: Powdered Sugar, Cinnamon, Chocolate Powder", 
        description: "Добавки: Пудра захар, Канела, Шоколад на прах" 
      },
      ro: { 
        name: "Extras: Powdered Sugar, Cinnamon, Chocolate Powder", 
        description: "Extra: Zahăr Pudră, Scorțișoară, Pudră de Ciocolată" 
      }
    }
  }
];