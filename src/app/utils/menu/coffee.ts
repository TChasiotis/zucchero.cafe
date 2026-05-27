import { MenuItem } from "../menuData";

export const coffee: MenuItem[] = [
  // ==========================================
  // ΚΡΥΟΙ ΚΑΦΕΔΕΣ
  // ==========================================
  {
    id: "coffee_freddo_espresso",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Freddo Espresso", description: "Διπλή δόση espresso χτυπημένη με πάγο για πλούσιο αφρό" },
      en: { name: "Freddo Espresso", description: "Double espresso shot shaken with ice for a rich foam" },
      de: { name: "Freddo Espresso", description: "Doppelter Espresso, mit Eis geschüttelt" },
      fr: { name: "Freddo Espresso", description: "Double espresso frappé avec des glaçons" },
      es: { name: "Freddo Espresso", description: "Doble espresso batido con hielo" },
      sr: { name: "Freddo Espresso", description: "Dupli espreso mućen sa ledom" },
      bg: { name: "Freddo Espresso", description: "Фредо Еспресо: Двойно еспресо, разбито с лед" },
      ro: { name: "Freddo Espresso", description: "Espresso dublu amestecat cu gheață" }
    }
  },
  {
    id: "coffee_freddo_cappuccino",
    categoryId: "coffee",
    price: 4.00,
    isSoldOut: false,
    translations: {
      el: { name: "Freddo Cappuccino", description: "Freddo Espresso με επικάλυψη από πλούσιο, βελούδινο αφρόγαλα" },
      en: { name: "Freddo Cappuccino", description: "Freddo Espresso topped with rich, velvety cold milk foam" },
      de: { name: "Freddo Cappuccino", description: "Freddo Espresso mit samtigem kaltem Milchschaum" },
      fr: { name: "Freddo Cappuccino", description: "Freddo Espresso surmonté d'une mousse de lait froide" },
      es: { name: "Freddo Cappuccino", description: "Freddo Espresso coronado con espuma de leche fría" },
      sr: { name: "Freddo Cappuccino", description: "Freddo Espresso sa bogatom hladnom mlečnom penom" },
      bg: { name: "Freddo Cappuccino", description: "Фредо Еспресо с богата студена млечна пяна" },
      ro: { name: "Freddo Cappuccino", description: "Freddo Espresso acoperit cu spumă de lapte rece" }
    }
  },
  {
    id: "coffee_frappe",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Nescafé Φραπέ", description: "Ο κλασικός, αγαπημένος παγωμένος στιγμιαίος καφές" },
      en: { name: "Nescafé Frappé", description: "The classic, beloved iced instant coffee" },
      de: { name: "Nescafé Frappé", description: "Der classic griechische Eis-Instantkaffee" },
      fr: { name: "Nescafé Frappé", description: "Le classique café instantané glacé grec" },
      es: { name: "Nescafé Frappé", description: "El clásico café instantáneo helado griego" },
      sr: { name: "Nescafé Frappé", description: "Nescafé Frape: Klasična grčka ledena instant kafa" },
      bg: { name: "Nescafé Frappé", description: "Nescafé Фрапе: Класическото гръцко студено инстантно кафе" },
      ro: { name: "Nescafé Frappé", description: "Clasica cafea instant rece cu gheață" }
    }
  },
  {
    id: "coffee_iced_latte",
    categoryId: "coffee",
    price: 4.20,
    isSoldOut: false,
    translations: {
      el: { name: "Iced Latte", description: "Δόση espresso με άφθονο παγωμένο γάλα" },
      en: { name: "Iced Latte", description: "Espresso shot with plenty of cold milk" },
      de: { name: "Iced Latte", description: "Espresso mit viel kalter Milch" },
      fr: { name: "Iced Latte", description: "Espresso avec beaucoup de lait froid" },
      es: { name: "Iced Latte", description: "Espresso con abundante leche fría" },
      sr: { name: "Iced Latte", description: "Espreso sa puno hladnog mleka" },
      bg: { name: "Iced Latte", description: "Студено Лате: Еспресо с много студено мляко" },
      ro: { name: "Iced Latte", description: "Espresso cu mult lapte rece" }
    }
  },
  {
    id: "coffee_iced_macchiato",
    categoryId: "coffee",
    price: 3.70,
    isSoldOut: false,
    translations: {
      el: { name: "Iced Macchiato", description: "Παγωμένος espresso 'λερωμένος' με λίγο αφρόγαλα" },
      en: { name: "Iced Macchiato", description: "Iced espresso 'stained' with a touch of milk foam" },
      de: { name: "Iced Macchiato", description: "Eis-Espresso, verfeinert mit etwas Milchschaum" },
      fr: { name: "Iced Macchiato", description: "Espresso glacé 'tacheté' de mousse de lait" },
      es: { name: "Iced Macchiato", description: "Espresso helado 'manchado' con espuma de leche" },
      sr: { name: "Iced Macchiato", description: "Ledeni espreso 'umrljan' mlečnom penom" },
      bg: { name: "Iced Macchiato", description: "Студено Макиато: Студено еспресо с малко млечна пяна" },
      ro: { name: "Iced Macchiato", description: "Espresso cu gheață cu un strop de spumă de lapte" }
    }
  },
  {
    id: "coffee_iced_americano",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Iced Americano", description: "Διπλή δόση espresso αραιωμένη με παγωμένο νερό" },
      en: { name: "Iced Americano", description: "Double espresso shot diluted with iced water" },
      de: { name: "Iced Americano", description: "Doppelter Espresso, verlängert mit Eiswasser" },
      fr: { name: "Iced Americano", description: "Double espresso allongé avec de l'eau glacée" },
      es: { name: "Iced Americano", description: "Doble espresso diluido con agua helada" },
      sr: { name: "Iced Americano", description: "Dupli espreso razblažen ledenom vodom" },
      bg: { name: "Iced Americano", description: "Студено Америкаνο: Двойно еспресо, разредено с ледена вода" },
      ro: { name: "Iced Americano", description: "Espresso dublu diluat cu apă rece" }
    }
  },

  // ==========================================
  // ΜΙΑ ΚΟΜΨΗ ΓΡΑΜΜΗ ΔΙΑΧΩΡΙΣΜΟΥ (ΚΡΥΟΙ -> ΖΕΣΤΟΙ)
  // ==========================================
  {
    id: "separator_cold_to_hot",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },

  // ==========================================
  // ΖΕΣΤΟΙ ΚΑΦΕΔΕΣ (ΜΑΖΙ ΚΑΙ ΟΙ ΦΙΛΤΡΟΥ)
  // ==========================================
  {
    id: "coffee_espresso_single",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso (Μονός)", description: "Αυθεντικός ιταλικός espresso με πλούσια κρέμα" },
      en: { name: "Espresso (Single)", description: "Authentic Italian espresso with rich crema" },
      de: { name: "Espresso (Single)", description: "Espresso (Einfach). Authentischer italienischer Espresso mit reicher Crema" },
      fr: { name: "Espresso (Single)", description: "Espresso (Simple). Espresso italien authentique avec une crème riche" },
      es: { name: "Espresso (Single)", description: "Espresso (Sencillo). Auténtico espresso italiano con rica crema" },
      sr: { name: "Espresso (Single)", description: "Espreso (Jedan). Autentični italijanski espreso sa bogatom kremom" },
      bg: { name: "Espresso (Single)", description: "Еспресо (Единично). Автентично италианско еспресо с богат каймак" },
      ro: { name: "Espresso (Single)", description: "Espresso (Simplu). Espresso italian autentic cu cremă bogată" }
    }
  },
  {
    id: "coffee_espresso_double",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso (Διπλός)", description: "Διπλή δόση αυθεντικού ιταλικού espresso" },
      en: { name: "Espresso (Double)", description: "Double shot of authentic Italian espresso" },
      de: { name: "Espresso (Double)", description: "Espresso (Doppelt). Doppelter Schuss authentischer italienischer Espresso" },
      fr: { name: "Espresso (Double)", description: "Espresso (Double). Double dose d'espresso italien authentique" },
      es: { name: "Espresso (Double)", description: "Espresso (Doble). Doble dosis de auténtico espresso italiano" },
      sr: { name: "Espresso (Double)", description: "Espreso (Dupli). Dupla doza autentičnog italijanskog espresa" },
      bg: { name: "Espresso (Double)", description: "Еспресо (Двойно). Двойна доза автентично италианско еспресо" },
      ro: { name: "Espresso (Double)", description: "Espresso (Dublu). Doză dublă de espresso italian autentic" }
    }
  },
  {
    id: "coffee_cappuccino_single",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Cappuccino (Μονός)", description: "Espresso με ζεστό αφρόγαλα και κρεμώδη υφή" },
      en: { name: "Cappuccino (Single)", description: "Espresso with hot steamed milk and a creamy texture" },
      de: { name: "Cappuccino (Single)", description: "Cappuccino (Einfach). Espresso mit heißer aufgeschäumter Milch und cremiger Textur" },
      fr: { name: "Cappuccino (Single)", description: "Cappuccino (Simple). Espresso avec du lait chaud moussé et une texture crémeuse" },
      es: { name: "Cappuccino (Single)", description: "Cappuccino (Sencillo). Espresso con leche caliente espumada y textura cremosa" },
      sr: { name: "Cappuccino (Single)", description: "Kapućino (Jedan). Espreso sa toplim zapenjenim mlekom i kremastom teksturom" },
      bg: { name: "Cappuccino (Single)", description: "Капучино (Единично). Еспресо с топло разпенено мляко и кремообразна текстура" },
      ro: { name: "Cappuccino (Single)", description: "Cappuccino (Simplu). Espresso cu lapte cald spumat și textură cremoasă" }
    }
  },
  {
    id: "coffee_cappuccino_double",
    categoryId: "coffee",
    price: 4.00,
    isSoldOut: false,
    translations: {
      el: { name: "Cappuccino (Διπλός)", description: "Διπλός espresso με πλούσιο ζεστό αφρόγαλα" },
      en: { name: "Cappuccino (Double)", description: "Double espresso with rich hot steamed milk" },
      de: { name: "Cappuccino (Double)", description: "Cappuccino (Doppelt). Doppelter Espresso mit reichhaltig aufgeschäumter heißer Milch" },
      fr: { name: "Cappuccino (Double)", description: "Cappuccino (Double). Double espresso avec une riche mousse de lait chaud" },
      es: { name: "Cappuccino (Double)", description: "Cappuccino (Doble). Doble espresso con abundante leche caliente espumada" },
      sr: { name: "Cappuccino (Double)", description: "Kapućino (Dupli). Dupli espreso sa bogatim toplim zapenjenim mlekom" },
      bg: { name: "Cappuccino (Double)", description: "Капучино (Двойно). Двойно еспресо с богато топло разпенено мляко" },
      ro: { name: "Cappuccino (Double)", description: "Cappuccino (Dublu). Espresso dublu cu spumă bogată de lapte cald" }
    }
  },
  {
    id: "coffee_nescafe_hot",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Nescafé (Ζεστός)", description: "Ο κλασικός, τονωτικός ζεστός στιγμιαίος καφές" },
      en: { name: "Nescafé (Hot)", description: "The classic, invigorating hot instant coffee" },
      de: { name: "Nescafé (Hot)", description: "Nescafé (Heiß). Der klassische, belebende heiße Instantkaffee" },
      fr: { name: "Nescafé (Hot)", description: "Nescafé (Chaud). Le café instantané chaud classique et revigorant" },
      es: { name: "Nescafé (Hot)", description: "Nescafé (Caliente). El clásico y estimulante café instantáneo caliente" },
      sr: { name: "Nescafé (Hot)", description: "Neskafa (Topla). Klasična, osnažujuća topla instant kafa" },
      bg: { name: "Nescafé (Hot)", description: "Нескафе (Топло). Класическо, ободряващо топло разтворимо кафе" },
      ro: { name: "Nescafé (Hot)", description: "Nescafé (Cald). Cafea instant caldă, clasică și revigorantă" }
    }
  },
  {
    id: "coffee_greek_single",
    categoryId: "coffee",
    price: 2.50,
    isSoldOut: false,
    translations: {
      el: { name: "Ελληνικός (Μονός)", description: "Παραδοσιακός ελληνικός καφές ψημένος στο μπρίκι" },
      en: { name: "Greek Coffee (Single)", description: "Traditional Greek coffee brewed in a briki" },
      de: { name: "Greek Coffee (Single)", description: "Griechischer Kaffee (Einfach). Traditioneller griechischer Kaffee, im Briki gebrüht" },
      fr: { name: "Greek Coffee (Single)", description: "Café Grec (Simple). Café grec traditionnel préparé dans un briki" },
      es: { name: "Greek Coffee (Single)", description: "Café Griego (Sencillo). Café griego tradicional preparado en un briki" },
      sr: { name: "Greek Coffee (Single)", description: "Grčka Kafa (Jedna). Tradicionalna grčka kafa kuvana u džezvi" },
      bg: { name: "Greek Coffee (Single)", description: "Гръцко Кафе (Единично). Традиционно гръцко кафе, приготвено в джезве" },
      ro: { name: "Greek Coffee (Single)", description: "Cafea Grecească (Simplă). Cafea tradițională grecească preparată la ibric" }
    }
  },
  {
    id: "coffee_greek_double",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Ελληνικός (Διπλός)", description: "Διπλή δόση παραδοσιακού ελληνικού καφέ" },
      en: { name: "Greek Coffee (Double)", description: "Double serving of traditional Greek coffee" },
      de: { name: "Greek Coffee (Double)", description: "Griechischer Kaffee (Doppelt). Doppelte Portion traditioneller griechischer Kaffee" },
      fr: { name: "Greek Coffee (Double)", description: "Café Grec (Double). Double portion de café grec traditionnel" },
      es: { name: "Greek Coffee (Double)", description: "Café Griego (Doble). Doble ración de café griego tradicional" },
      sr: { name: "Greek Coffee (Double)", description: "Grčka Kafa (Dupla). Dupla porcija tradicionalne grčke kafe" },
      bg: { name: "Greek Coffee (Double)", description: "Гръцко Кафе (Двойно). Двойна порция традиционно гръцко кафе" },
      ro: { name: "Greek Coffee (Double)", description: "Cafea Grecească (Dublă). Porție dublă de cafea tradițională grecească" }
    }
  },
  {
    id: "coffee_latte_single",
    categoryId: "coffee",
    price: 4.20,
    isSoldOut: false,
    translations: {
      el: { name: "Caffè Latte (Μονός)", description: "Espresso με άφθονο ζεστό γάλα και ελαφρύ αφρόγαλα" },
      en: { name: "Caffè Latte (Single)", description: "Espresso with plenty of hot milk and light foam" },
      de: { name: "Caffè Latte (Single)", description: "Caffè Latte (Einfach). Espresso mit viel heißer Milch und leichtem Milchschaum" },
      fr: { name: "Caffè Latte (Single)", description: "Caffè Latte (Simple). Espresso avec beaucoup de lait chaud et une mousse légère" },
      es: { name: "Caffè Latte (Single)", description: "Caffè Latte (Sencillo). Espresso con abundante leche caliente y espuma ligera" },
      sr: { name: "Caffè Latte (Single)", description: "Kafe Late (Jedan). Espreso sa puno toplog mleka i laganom penom" },
      bg: { name: "Caffè Latte (Single)", description: "Кафе Лате (Единично). Еспресо с много топло мляко и лека пяна" },
      ro: { name: "Caffè Latte (Single)", description: "Caffè Latte (Simplu). Espresso cu mult lapte cald și spumă ușoară" }
    }
  },
  {
    id: "coffee_latte_double",
    categoryId: "coffee",
    price: 4.70,
    isSoldOut: false,
    translations: {
      el: { name: "Caffè Latte (Διπλός)", description: "Διπλή δόση espresso με άφθονο ζεστό γάλα" },
      en: { name: "Caffè Latte (Double)", description: "Double espresso shot with plenty of hot milk" },
      de: { name: "Caffè Latte (Double)", description: "Caffè Latte (Doppelt). Doppelter Espresso mit viel heißer Milch" },
      fr: { name: "Caffè Latte (Double)", description: "Caffè Latte (Double). Double dose d'espresso avec beaucoup de lait chaud" },
      es: { name: "Caffè Latte (Double)", description: "Caffè Latte (Doble). Doble dosis de espresso con abundante leche caliente" },
      sr: { name: "Caffè Latte (Double)", description: "Kafe Late (Dupli). Dupli espreso sa puno toplog mleka" },
      bg: { name: "Caffè Latte (Double)", description: "Кафе Лате (Двойно). Двойно еспресо с много топло мляко" },
      ro: { name: "Caffè Latte (Double)", description: "Caffè Latte (Dublu). Shot dublu de espresso cu mult lapte cald" }
    }
  },
  {
    id: "coffee_macchiato_single",
    categoryId: "coffee",
    price: 3.20,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Macchiato (Μονός)", description: "Espresso 'λερωμένος' με μια κουταλιά ζεστό αφρόγαλα" },
      en: { name: "Espresso Macchiato (Single)", description: "Espresso 'stained' with a spoonful of hot milk foam" },
      de: { name: "Espresso Macchiato (Single)", description: "Espresso Macchiato (Einfach). Espresso 'gefleckt' mit einem Löffel heißem Milchschaum" },
      fr: { name: "Espresso Macchiato (Single)", description: "Espresso Macchiato (Simple). Espresso 'tacheté' avec une cuillerée de mousse de lait chaud" },
      es: { name: "Espresso Macchiato (Single)", description: "Espresso Macchiato (Sencillo). Espresso 'manchado' con una cucharada de espuma de leche caliente" },
      sr: { name: "Espresso Macchiato (Single)", description: "Espreso Makijato (Jedan). Espreso 'umrljan' kašikom tople mlečne pene" },
      bg: { name: "Espresso Macchiato (Single)", description: "Еспресо Макиато (Единично). Еспресо, 'оцветено' с лъжица топла млечна пяна" },
      ro: { name: "Espresso Macchiato (Single)", description: "Espresso Macchiato (Simplu). Espresso 'pătat' cu o lingură de spumă de lapte cald" }
    }
  },
  {
    id: "coffee_macchiato_double",
    categoryId: "coffee",
    price: 3.70,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Macchiato (Διπλός)", description: "Διπλός espresso με μια κουταλιά ζεστό αφρόγαλα" },
      en: { name: "Espresso Macchiato (Double)", description: "Double espresso with a spoonful of hot milk foam" },
      de: { name: "Espresso Macchiato (Double)", description: "Espresso Macchiato (Doppelt). Doppelter Espresso mit einem Löffel heißem Milchschaum" },
      fr: { name: "Espresso Macchiato (Double)", description: "Espresso Macchiato (Double). Double espresso avec une cuillerée de mousse de lait chaud" },
      es: { name: "Espresso Macchiato (Double)", description: "Espresso Macchiato (Doble). Doble espresso con una cucharada de espuma de leche caliente" },
      sr: { name: "Espresso Macchiato (Double)", description: "Espreso Makijato (Dupli). Dupli espreso sa kašikom tople mlečne pene" },
      bg: { name: "Espresso Macchiato (Double)", description: "Еспресо Макиато (Двойно). Двойно еспресо с лъжица топла млечна пяна" },
      ro: { name: "Espresso Macchiato (Double)", description: "Espresso Macchiato (Dublu). Espresso dublu cu o lingură de spumă de lapte cald" }
    }
  },
  {
    id: "coffee_americano_single",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Americano (Μονός)", description: "Espresso αραιωμένος με ζεστό νερό" },
      en: { name: "Espresso Americano (Single)", description: "Espresso shot diluted with hot water" },
      de: { name: "Espresso Americano (Single)", description: "Espresso Americano (Einfach). Mit heißem Wasser verdünnter Espresso" },
      fr: { name: "Espresso Americano (Single)", description: "Espresso Americano (Simple). Dose d'espresso diluée avec de l'eau chaude" },
      es: { name: "Espresso Americano (Single)", description: "Espresso Americano (Sencillo). Dosis de espresso diluida con agua caliente" },
      sr: { name: "Espresso Americano (Single)", description: "Espreso Amerikano (Jedan). Espreso razblažen toplom vodom" },
      bg: { name: "Espresso Americano (Single)", description: "Еспресо Американо (Единично). Еспресо, разредено с топла вода" },
      ro: { name: "Espresso Americano (Single)", description: "Espresso Americano (Simplu). Shot de espresso diluat cu apă fierbinte" }
    }
  },
  {
    id: "coffee_americano_double",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Americano (Διπλός)", description: "Διπλή δόση espresso αραιωμένη με ζεστό νερό" },
      en: { name: "Espresso Americano (Double)", description: "Double espresso shot diluted with hot water" },
      de: { name: "Espresso Americano (Double)", description: "Espresso Americano (Doppelt). Doppelter Espresso, mit heißem Wasser verdünnt" },
      fr: { name: "Espresso Americano (Double)", description: "Espresso Americano (Double). Double dose d'espresso diluée avec de l'eau chaude" },
      es: { name: "Espresso Americano (Double)", description: "Espresso Americano (Doble). Doble dosis de espresso diluida con agua caliente" },
      sr: { name: "Espresso Americano (Double)", description: "Espreso Amerikano (Dupli). Dupli espreso razblažen toplom vodom" },
      bg: { name: "Espresso Americano (Double)", description: "Еспресо Американо (Двойно). Двойно еспресо, разредено с топла вода" },
      ro: { name: "Espresso Americano (Double)", description: "Espresso Americano (Dublu). Shot dublu de espresso diluat cu apă fierbinte" }
    }
  },
  {
    id: "coffee_lungo_single",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Lungo (Μονός)", description: "Espresso με μεγαλύτερη εκχύλιση νερού" },
      en: { name: "Espresso Lungo (Single)", description: "Espresso with a longer water extraction" },
      de: { name: "Espresso Lungo (Single)", description: "Espresso Lungo (Einfach). Espresso mit längerer Wasserextraktion" },
      fr: { name: "Espresso Lungo (Single)", description: "Espresso Lungo (Simple). Espresso avec une extraction d'eau plus longue" },
      es: { name: "Espresso Lungo (Single)", description: "Espresso Lungo (Sencillo). Espresso con una mayor extracción de agua" },
      sr: { name: "Espresso Lungo (Single)", description: "Espreso Lungo (Jedan). Espreso sa dužom ekstrakcijom vode" },
      bg: { name: "Espresso Lungo (Single)", description: "Еспресо Лунго (Единично). Еспресо с по-дълга екстракция на вода" },
      ro: { name: "Espresso Lungo (Single)", description: "Espresso Lungo (Simplu). Espresso cu o extracție mai lungă a apei" }
    }
  },
  {
    id: "coffee_lungo_double",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Lungo (Διπλός)", description: "Διπλή δόση espresso με μεγαλύτερη εκχύλιση νερού" },
      en: { name: "Espresso Lungo (Double)", description: "Double espresso with a longer water extraction" },
      de: { name: "Espresso Lungo (Double)", description: "Espresso Lungo (Doppelt). Doppelter Espresso mit längerer Wasserextraktion" },
      fr: { name: "Espresso Lungo (Double)", description: "Espresso Lungo (Double). Double espresso avec une extraction d'eau plus longue" },
      es: { name: "Espresso Lungo (Double)", description: "Espresso Lungo (Doble). Doble espresso con una mayor extracción de agua" },
      sr: { name: "Espresso Lungo (Double)", description: "Espreso Lungo (Dupli). Dupli espreso sa dužom ekstrakcijom vode" },
      bg: { name: "Espresso Lungo (Double)", description: "Еспресо Лунго (Двойно). Двойно еспресо с по-дълга екстракция на вода" },
      ro: { name: "Espresso Lungo (Double)", description: "Espresso Lungo (Dublu). Espresso dublu cu o extracție mai lungă a apei" }
    }
  },
  {
    id: "coffee_filter_regular",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Κλασικός)", description: "Αρωματικός καφές φίλτρου με γεμάτο σώμα" },
      en: { name: "Filter Coffee (Regular)", description: "Aromatic filter coffee with a full body" },
      de: { name: "Filter Coffee (Regular)", description: "Filterkaffee (Klassisch). Aromatischer Filterkaffee mit vollem Körper" },
      fr: { name: "Filter Coffee (Regular)", description: "Café Filtre (Classique). Café filtre aromatique et corsé" },
      es: { name: "Filter Coffee (Regular)", description: "Café de Filtro (Clásico). Café de filtro aromático con mucho cuerpo" },
      sr: { name: "Filter Coffee (Regular)", description: "Filter Kafa (Klasična). Aromatična filter kafa punog ukusa" },
      bg: { name: "Filter Coffee (Regular)", description: "Филтър Кафе (Класическо). Ароматно филтър кафе с плътно тяло" },
      ro: { name: "Filter Coffee (Regular)", description: "Cafea la Filtru (Clasică). Cafea la filtru aromată, cu un corp plin" }
    }
  },
  {
    id: "coffee_filter_decaf",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Ντεκαφεϊνέ)", description: "Ολοκληρωμένη γεύση καφέ φίλτρου, χωρίς καφεΐνη" },
      en: { name: "Filter Coffee (Decaf)", description: "Full filter coffee taste, without the caffeine" },
      de: { name: "Filter Coffee (Decaf)", description: "Filterkaffee (Koffeinfrei). Voller Filterkaffeegeschmack, ohne Koffein" },
      fr: { name: "Filter Coffee (Decaf)", description: "Café Filtre (Décaféiné). Toute la saveur du café filtre, sans la caféine" },
      es: { name: "Filter Coffee (Decaf)", description: "Café de Filtro (Descafeinado). Todo el sabor del café de filtro, sin cafeína" },
      sr: { name: "Filter Coffee (Decaf)", description: "Filter Kafa (Bez kofeina). Pun ukus filter kafe, bez kofeina" },
      bg: { name: "Filter Coffee (Decaf)", description: "Филтър Кафе (Без кофеин). Пълен вкус на филтър кафе, без кофеин" },
      ro: { name: "Filter Coffee (Decaf)", description: "Cafea la Filtru (Decofeinizată). Gustul plin al cafelei la filtru, fără cofeină" }
    }
  },
  {
    id: "coffee_filter_salted_caramel",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Salted Caramel)", description: "Αρωματικός καφές φίλτρου με νότες από αλμυρή καραμέλα" },
      en: { name: "Filter Coffee (Salted Caramel)", description: "Aromatic filter coffee with notes of salted caramel" },
      de: { name: "Filter Coffee (Salted Caramel)", description: "Filterkaffee (Gesalzenes Karamell). Aromatischer Filterkaffee mit Noten von gesalzenem Karamell" },
      fr: { name: "Filter Coffee (Salted Caramel)", description: "Café Filtre (Caramel Beurre Salé). Café filtre aromatique aux notes de caramel au beurre salé" },
      es: { name: "Filter Coffee (Salted Caramel)", description: "Café de Filtro (Caramelo Salado). Café de filtro aromático con notas de caramelo salado" },
      sr: { name: "Filter Coffee (Salted Caramel)", description: "Filter Kafa (Slana Karamela). Aromatična filter kafa sa notama slane karamele" },
      bg: { name: "Filter Coffee (Salted Caramel)", description: "Филтър Кафе (Солен Карамел). Ароматно филтър кафе с нотки на солен карамел" },
      ro: { name: "Filter Coffee (Salted Caramel)", description: "Cafea la Filtru (Caramel Sărat). Cafea la filtru aromată cu note de caramel sărat" }
    }
  },
  {
    id: "coffee_filter_vanilla_hazelnut",
    categoryId: "coffee",
    price: 3.00,
    hasNuts: true,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Vanilla & Hazelnut)", description: "Αρωματικός καφές φίλτρου με γλυκιά βανίλια και φουντούκι" },
      en: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Aromatic filter coffee with sweet vanilla and hazelnut" },
      de: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Filterkaffee (Vanille & Haselnuss). Aromatischer Filterkaffee mit süßer Vanille und Haselnuss" },
      fr: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Café Filtre (Vanille & Noisette). Café filtre aromatique avec de la douce vanille et de la noisette" },
      es: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Café de Filtro (Vainilla y Avellana). Café de filtro aromático con dulce vainilla y avellana" },
      sr: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Filter Kafa (Vanila i Lešnik). Aromatična filter kafa sa slatkom vanilom i lešnikom" },
      bg: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Филтър Кафе (Ванилия и Лешник). Ароматно филтър кафе със сладка ванилия и лешник" },
      ro: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Cafea la Filtru (Vanilie și Alune). Cafea la filtru aromată, cu vanilie dulce și alune de pădure" }
    }
  },

  // ==========================================
  // ΜΙΑ ΚΟΜΨΗ ΓΡΑΜΜΗ ΔΙΑΧΩΡΙΣΜΟΥ ΠΡΙΝ ΤΑ EXTRAS
  // ==========================================
  {
    id: "separator_cff_extras",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },

  // ==========================================
  // CUSTOMIZATION / EXTRAS
  // ==========================================
  {
    id: "coffee_blend_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Ποικιλία Espresso: Saquella Κανονικός & Decaf", description: "Επιλέξτε ανάμεσα στον κλασικό μας καφέ ή χωρίς καφεΐνη" },
      en: { name: "Espresso Blend: Saquella Regular & Decaf", description: "Choose between our classic blend & caffeine-free" },
      de: { name: "Espresso Blend: Saquella Regular & Decaf", description: "Espresso-Mischung: Saquella Normal & Saquella Decaf. Wählen Sie zwischen unserer klassischen Mischung & koffeinfrei" },
      fr: { name: "Espresso Blend: Saquella Regular & Decaf", description: "Mélange Espresso: Saquella Classique & Saquella Décaféiné. Choisissez entre notre mélange classique & sans caféine" },
      es: { name: "Espresso Blend: Saquella Regular & Decaf", description: "Mezcla de Espresso: Saquella Regular & Saquella Descafeinado. Elija entre nuestra mezcla clásica & sin cafeína" },
      sr: { name: "Espresso Blend: Saquella Regular & Decaf", description: "Espreso Mešavina: Saquella Običan & Saquella Bez kofeina. Izaberite između naše klasične mešavine & bez kofeina" },
      bg: { name: "Espresso Blend: Saquella Regular & Decaf", description: "Еспресо Бленд: Saquella Нормално & Saquella Без кофеин. Изберете между нашия класически бленд & без кофеин" },
      ro: { name: "Espresso Blend: Saquella Regular & Decaf", description: "Amestec Espresso: Saquella Regular & Saquella Decaf. Alegeți între amestecul nostru clasic & fără cofeină" }
    }
  },
  {
    id: "coffee_sugar_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Γλυκαντικά: Λευκή, Καστανή, Ζαχαρίνη, Στέβια, Μέλι", description: "" },
      en: { name: "Sweeteners: White, Brown, Artificial Sweetener, Stevia, Honey", description: "" },
      de: { name: "Sweeteners: White, Brown, Artificial Sweetener, Stevia, Honey", description: "Zucker: Weiß, Braun, Süßstoff, Stevia, Honig" },
      fr: { name: "Sweeteners: White, Brown, Artificial Sweetener, Stevia, Honey", description: "Sucre: Blanc, Roux, Édulcorant, Stevia, Miel" },
      es: { name: "Sweeteners: White, Brown, Artificial Sweetener, Stevia, Honey", description: "Azúcar: Blanco, Moreno, Edulcorante, Stevia, Miel" },
      sr: { name: "Sweeteners: White, Brown, Artificial Sweetener, Stevia, Honey", description: "Šećer: Beli, Smeđi, Zaslađivač, Stevia, Med" },
      bg: { name: "Sweeteners: White, Brown, Artificial Sweetener, Stevia, Honey", description: "Захар: Бяла, Кафява, Подсладител, Стевия, Мед" },
      ro: { name: "Sweeteners: White, Brown, Artificial Sweetener, Stevia, Honey", description: "Zahăr: Alb, Brun, Îndulcitor, Stevia, Miere" }
    }
  },
  {
    id: "coffee_milk_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Γάλα: Φρέσκο, Εβαπορέ, Φυτικό", description: "" },
      en: { name: "Milk: Fresh, Evaporated, Plant-based", description: "" },
      de: { name: "Milk: Fresh, Evaporated, Plant-based", description: "Milch: Frisch, Kondensmilch, Pflanzlich" },
      fr: { name: "Milk: Fresh, Evaporated, Plant-based", description: "Lait: Frais, Concentré, Végétal" },
      es: { name: "Milk: Fresh, Evaporated, Plant-based", description: "Leche: Fresca, Evaporada, Vegetal" },
      sr: { name: "Milk: Fresh, Evaporated, Plant-based", description: "Mleko: Sveže, Uparavano, Biljno" },
      bg: { name: "Milk: Fresh, Evaporated, Plant-based", description: "Мляко: Прясно, Кондензирано, Растително" },
      ro: { name: "Milk: Fresh, Evaporated, Plant-based", description: "Lapte: Proaspăt, Evaporat, Vegetal" }
    }
  },
  {
    id: "coffee_topping_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Επικάλυψη: Κανέλα, Σοκολάτα", description: "" },
      en: { name: "Topping: Cinnamon, Chocolate", description: "" },
      de: { name: "Topping: Cinnamon, Chocolate", description: "Topping: Zimt, Schokolade" },
      fr: { name: "Topping: Cinnamon, Chocolate", description: "Garniture: Cannelle, Chocolat" },
      es: { name: "Topping: Cinnamon, Chocolate", description: "Cobertura: Canela, Chocolate" },
      sr: { name: "Topping: Cinnamon, Chocolate", description: "Dodaci: Cimet, Čokolada" },
      bg: { name: "Topping: Cinnamon, Chocolate", description: "Топинг: Канела, Шоколад" },
      ro: { name: "Topping: Cinnamon, Chocolate", description: "Topping: Scorțișoară, Ciocolată" }
    }
  },
  {
    id: "coffee_extra_shot",
    categoryId: "coffee",
    price: 0.40,
    isSoldOut: false,
    translations: {
      el: { name: "Έξτρα Δόση Espresso", description: "Μπορεί να προστεθεί μόνο σε καφέδες με βάση το Espresso" },
      en: { name: "Extra Espresso Shot", description: "Can only be added to Espresso-based coffees" },
      de: { name: "Extra Espresso Shot", description: "Extra Espresso Shot. Kann nur zu Espresso-basierten Kaffees hinzugefügt werden" },
      fr: { name: "Extra Espresso Shot", description: "Dose d'Espresso Supplémentaire. Uniquement pour les cafés à base d'Espresso" },
      es: { name: "Extra Espresso Shot", description: "Dosis Extra de Espresso. Solo para cafés a base de Espresso" },
      sr: { name: "Extra Espresso Shot", description: "Dodatni Espreso Šot. Samo za kafe na bazi espresa" },
      bg: { name: "Extra Espresso Shot", description: "Допълнителен Еспресо Шот. Само за кафета на базата на еспресо" },
      ro: { name: "Extra Espresso Shot", description: "Shot Extra de Espresso. Poate fi adăugat doar la cafelele pe bază de Espresso" }
    }
  },
  {
    id: "coffee_extra_ice_cream",
    categoryId: "coffee",
    price: 2.00,
    hasDairy: true,
    hasEgg: true,
    isSoldOut: false,
    translations: {
      el: { name: "Μπάλα Παγωτό (Στον καφέ)", description: "" },
      en: { name: "Ice Cream Scoop (In coffee)", description: "" },
      de: { name: "Ice Cream Scoop (In coffee)", description: "Eiskugel (Im Kaffee)" },
      fr: { name: "Ice Cream Scoop (In coffee)", description: "Boule de Glace (Dans le café)" },
      es: { name: "Ice Cream Scoop (In coffee)", description: "Bola de Helado (En el café)" },
      sr: { name: "Ice Cream Scoop (In coffee)", description: "Kugla Sladoleda (U kafi)" },
      bg: { name: "Ice Cream Scoop (In coffee)", description: "Топка Сладолед (В кафето)" },
      ro: { name: "Ice Cream Scoop (In coffee)", description: "Cupă de Înghețată (În cafea)" }
    }
  }
];