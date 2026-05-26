import { MenuItem } from "../menuData";

export const cold_bev: MenuItem[] = [
  // --- ΚΡΥΑ ΣΟΚΟΛΑΤΑ & ΚΑΚΑΟ ---
  {
    id: "cold_bev_chocolate",
    categoryId: "cold_bev",
    price: 4.00,
    translations: {
      el: { name: "Κρύα Σοκολάτα", description: "Φτιάχνεται με γάλα. Υπάρχει σε ποικιλία γεύσεων (ρωτήστε μας). Η σκόνη περιέχει ζάχαρη." },
      en: { name: "Ice Chocolate", description: "Made with milk. Comes in a variety of flavors (ask us). Chocolate powder contains sugar." },
      de: { name: "Ice Chocolate", description: "Kaltes Schokoladengetränk. Mit Milch zubereitet. In verschiedenen Geschmacksrichtungen erhältlich. Das Kakaopulver enthält Zucker." },
      fr: { name: "Ice Chocolate", description: "Chocolat froid. Préparé avec du lait. Disponible en plusieurs saveurs. La poudre de chocolat contient du sucre." },
      es: { name: "Ice Chocolate", description: "Chocolate frío. Hecho con leche. Disponible en varios sabores. El polvo de chocolate contiene azúcar." },
      sr: { name: "Ice Chocolate", description: "Hladna čokolada. Pravi se sa mlekom. Dostupna u više ukusa. Čokoladni prah sadrži šećer." },
      bg: { name: "Ice Chocolate", description: "Студен шоколад. Приготвя се с мляко. Предлага се в различни вкусове. Шоколадовият прах съдържа захар." },
      ro: { name: "Ice Chocolate", description: "Ciocolată rece. Preparată cu lapte. Disponibilă în diverse arome. Pudra de ciocolată conține zahăr." }
    }
  },
  {
    id: "cold_bev_cocoa",
    categoryId: "cold_bev",
    price: 3.00,
    isVegan: true,
    translations: {
      el: { name: "Κρύο Κακάο", description: "Φτιάχνεται με νερό. Η σκόνη δεν έχει ζάχαρη, προσθέστε το γλυκαντικό της επιλογής σας." },
      en: { name: "Ice Cocoa", description: "Made with water. Cocoa powder has no sugar, add a sweetener of your choice." },
      de: { name: "Ice Cocoa", description: "Kalter Kakao. Mit Wasser zubereitet. Das Kakaopulver enthält keinen Zucker, süßen Sie nach Belieben." },
      fr: { name: "Ice Cocoa", description: "Cacao froid. Préparé avec de l'eau. La poudre de cacao est sans sucre, ajoutez l'édulcorant de votre choix." },
      es: { name: "Ice Cocoa", description: "Cacao frío. Hecho con agua. El polvo de cacao no tiene azúcar, añada el edulcorante de su elección." },
      sr: { name: "Ice Cocoa", description: "Hladni kakao. Pravi se sa vodom. Kakao prah ne sadrži šećer, dodajte zaslađivač po izboru." },
      bg: { name: "Ice Cocoa", description: "Студено какао. Приготвя се с вода. Какаото на прах не съдържа захар, добавете подсладител по ваш избор." },
      ro: { name: "Ice Cocoa", description: "Cacao rece. Preparată cu apă. Pudra de cacao nu conține zahăr, adăugați îndulcitorul dorit." }
    }
  },

  // --- SEPARATOR: MILKSHAKE ---
  {
    id: "separator_milkshake",
    categoryId: "cold_bev",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    translations: {
      el: { name: "", description: "" },
      en: { name: "", description: "" },
      de: { name: "", description: "" },
      fr: { name: "", description: "" },
      es: { name: "", description: "" },
      sr: { name: "", description: "" },
      bg: { name: "", description: "" },
      ro: { name: "", description: "" }
    }
  },
  {
    id: "cold_bev_milkshake",
    categoryId: "cold_bev",
    price: 4.00,
    translations: {
      el: { name: "Milkshake", description: "Φτιάχνεται με γάλα και παγωτό. Διαλέξτε την γεύση που θέλετε από το ψυγείο του παγωτού." },
      en: { name: "Milkshake", description: "Made with milk and ice cream. Pick the flavor you want from the ice cream fridge." },
      de: { name: "Milkshake", description: "Milchshake. Mit Milch und Eiscreme zubereitet. Wählen Sie die gewünschte Eissorte aus der Eistruhe." },
      fr: { name: "Milkshake", description: "Milk-shake. Préparé avec du lait et de la glace. Choisissez le parfum de glace que vous souhaitez." },
      es: { name: "Milkshake", description: "Batido. Hecho con leche y helado. Elija el sabor que desee de la nevera de helados." },
      sr: { name: "Milkshake", description: "Milkshejk. Pravi se sa mlekom i sladoledom. Izaberite ukus iz frižidera sa sladoledom." },
      bg: { name: "Milkshake", description: "Млечен шейк. Приготвя се с мляко и сладолед. Изберете желания вкус от хладилника за сладолед." },
      ro: { name: "Milkshake", description: "Milkshake. Preparat cu lapte și înghețată. Alegeți aroma dorită din vitrina de înghețată." }
    }
  },

  // --- SEPARATOR: ΓΡΑΝΙΤΑ ---
  {
    id: "separator_slush",
    categoryId: "cold_bev",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    translations: {
      el: { name: "", description: "" },
      en: { name: "", description: "" },
      de: { name: "", description: "" },
      fr: { name: "", description: "" },
      es: { name: "", description: "" },
      sr: { name: "", description: "" },
      bg: { name: "", description: "" },
      ro: { name: "", description: "" }
    }
  },
  {
    id: "cold_bev_slush",
    categoryId: "cold_bev",
    price: 4.00,
    isVegan: true,
    translations: {
      el: { name: "Γρανίτα", description: "Φτιάχνεται με νερό και σορμπέ παγωτό φρούτου. Διαλέξτε την γεύση που θέλετε από το ψυγείο του παγωτού." },
      en: { name: "Ice Slush", description: "Made with water and sorbet fruit ice cream. Pick the flavor you want from the ice cream fridge." },
      de: { name: "Ice Slush", description: "Slush-Eis. Mit Wasser und Fruchtsorbet zubereitet. Wählen Sie die gewünschte Sorte aus der Eistruhe." },
      fr: { name: "Ice Slush", description: "Granité. Préparé avec de l'eau et un sorbet aux fruits. Choisissez le parfum de glace que vous souhaitez." },
      es: { name: "Ice Slush", description: "Granizado. Hecho con agua y helado sorbete de frutas. Elija el sabor de la nevera de helados." },
      sr: { name: "Ice Slush", description: "Granita. Pravi se sa vodom i voćnim sorbe sladoledom. Izaberite ukus iz frižidera." },
      bg: { name: "Ice Slush", description: "Скрежина. Приготвя се с вода и плодово сорбе. Изберете желания вкус от хладилника за сладолед." },
      ro: { name: "Ice Slush", description: "Granita. Preparată cu apă și sorbet de fructe. Alegeți aroma dorită din vitrina de înghețată." }
    }
  },

  // --- SEPARATOR: ΓΑΛΑΚΤΟΚΟΜΙΚΑ ---
  {
    id: "separator_dairy",
    categoryId: "cold_bev",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    translations: {
      el: { name: "Γαλακτοκομικά", description: "" },
      en: { name: "Dairy Products", description: "" },
      de: { name: "Dairy Products", description: "" },
      fr: { name: "Dairy Products", description: "" },
      es: { name: "Dairy Products", description: "" },
      sr: { name: "Dairy Products", description: "" },
      bg: { name: "Dairy Products", description: "" },
      ro: { name: "Dairy Products", description: "" }
    }
  },
  // --- SEPARATOR: ΓΑΛΑΚΤΟΚΟΜΙΚΑ ---
  {
    id: "separator_dairy",
    categoryId: "cold_bev",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    translations: {
      el: { name: "Γαλακτοκομικά", description: "" },
      en: { name: "Dairy Products", description: "" },
      de: { name: "Dairy Products", description: "" },
      fr: { name: "Dairy Products", description: "" },
      es: { name: "Dairy Products", description: "" },
      sr: { name: "Dairy Products", description: "" },
      bg: { name: "Dairy Products", description: "" },
      ro: { name: "Dairy Products", description: "" }
    }
  },
  {
    id: "cold_bev_chocomilk_330",
    categoryId: "cold_bev",
    price: 2.00,
    translations: {
      el: { name: "Σοκολατούχο Γάλα 330ml", description: "Απολαυστικό, δροσερό σοκολατούχο γάλα υψηλής ποιότητας" },
      en: { name: "Chocolate Milk 330ml", description: "Delicious, refreshing premium chocolate milk" },
      de: { name: "Chocolate Milk 330ml", description: "Schokoladenmilch 330ml" },
      fr: { name: "Chocolate Milk 330ml", description: "Lait au chocolat 330ml" },
      es: { name: "Chocolate Milk 330ml", description: "Leche con chocolate 330ml" },
      sr: { name: "Chocolate Milk 330ml", description: "Čokoladno mleko 330ml" },
      bg: { name: "Chocolate Milk 330ml", description: "Шоколадово мляко 330ml" },
      ro: { name: "Chocolate Milk 330ml", description: "Lapte cu ciocolată 330ml" }
    }
  },
  {
    id: "cold_bev_chocomilk_500",
    categoryId: "cold_bev",
    price: 2.20,
    translations: {
      el: { name: "Σοκολατούχο Γάλα 500ml", description: "Απολαυστικό, δροσερό σοκολατούχο γάλα σε μεγάλη συσκευασία" },
      en: { name: "Chocolate Milk 500ml", description: "Delicious, refreshing chocolate milk in a large bottle" },
      de: { name: "Chocolate Milk 500ml", description: "Schokoladenmilch 500ml" },
      fr: { name: "Chocolate Milk 500ml", description: "Lait au chocolat 500ml" },
      es: { name: "Chocolate Milk 500ml", description: "Leche con chocolate 500ml" },
      sr: { name: "Chocolate Milk 500ml", description: "Čokoladno mleko 500ml" },
      bg: { name: "Chocolate Milk 500ml", description: "Шоколадово мляко 500ml" },
      ro: { name: "Chocolate Milk 500ml", description: "Lapte cu ciocolată 500ml" }
    }
  },
  {
    id: "cold_bev_chocomilk_light_330",
    categoryId: "cold_bev",
    price: 2.00,
    translations: {
      el: { name: "Σοκολατούχο Γάλα Ελαφρύ 330ml", description: "Η κλασική γεύση της σοκολάτας, με χαμηλά λιπαρά" },
      en: { name: "Chocolate Milk Light 330ml", description: "The classic chocolate taste, with low fat" },
      de: { name: "Chocolate Milk Light 330ml", description: "Fettarme Schokoladenmilch 330ml" },
      fr: { name: "Chocolate Milk Light 330ml", description: "Lait au chocolat allégé 330ml" },
      es: { name: "Chocolate Milk Light 330ml", description: "Leche con chocolate desnatada 330ml" },
      sr: { name: "Chocolate Milk Light 330ml", description: "Nemasno čokoladno mleko 330ml" },
      bg: { name: "Chocolate Milk Light 330ml", description: "Обезмаслено шоколадово мляко 330ml" },
      ro: { name: "Chocolate Milk Light 330ml", description: "Lapte degresat cu ciocolată 330ml" }
    }
  },
  {
    id: "cold_bev_chocomilk_light_500",
    categoryId: "cold_bev",
    price: 2.20,
    translations: {
      el: { name: "Σοκολατούχο Γάλα Ελαφρύ 500ml", description: "Η κλασική γεύση της σοκολάτας σε μεγάλη συσκευασία, με χαμηλά λιπαρά" },
      en: { name: "Chocolate Milk Light 500ml", description: "The classic chocolate taste in a large bottle, with low fat" },
      de: { name: "Chocolate Milk Light 500ml", description: "Fettarme Schokoladenmilch 500ml" },
      fr: { name: "Chocolate Milk Light 500ml", description: "Lait au chocolat allégé 500ml" },
      es: { name: "Chocolate Milk Light 500ml", description: "Leche con chocolate desnatada 500ml" },
      sr: { name: "Chocolate Milk Light 500ml", description: "Nemasno čokoladno mleko 500ml" },
      bg: { name: "Chocolate Milk Light 500ml", description: "Обезмаслено шоколадово мляко 500ml" },
      ro: { name: "Chocolate Milk Light 500ml", description: "Lapte degresat cu ciocolată 500ml" }
    }
  },
  {
    id: "cold_bev_kefir",
    categoryId: "cold_bev",
    price: 2.50,
    translations: {
      el: { name: "Κεφίρ", description: "Δροσιστικό ρόφημα κεφίρ, πλούσιο σε ωφέλιμα προβιοτικά" },
      en: { name: "Kefir", description: "Refreshing kefir drink, rich in beneficial probiotics" },
      de: { name: "Kefir", description: "Kefir" },
      fr: { name: "Kefir", description: "Kéfir" },
      es: { name: "Kefir", description: "Kéfir" },
      sr: { name: "Kefir", description: "Kefir" },
      bg: { name: "Kefir", description: "Кефир" },
      ro: { name: "Kefir", description: "Chefir" }
    }
  },
  {
    id: "cold_bev_kefir_banana",
    categoryId: "cold_bev",
    price: 2.50,
    translations: {
      el: { name: "Κεφίρ με Μπανάνα, Βρώμη & Μέλι", description: "Θρεπτικό ρόφημα κεφίρ με φρέσκια μπανάνα, νιφάδες βρώμης και φυσικό μέλι" },
      en: { name: "Kefir with Banana, Oat & Honey", description: "Nutritious kefir drink with fresh banana, oats, and natural honey" },
      de: { name: "Kefir with Banana, Oat & Honey", description: "Kefir mit Banane, Hafer & Honig" },
      fr: { name: "Kefir with Banana, Oat & Honey", description: "Kéfir à la banane, avoine et miel" },
      es: { name: "Kefir with Banana, Oat & Honey", description: "Kéfir con plátano, avena y miel" },
      sr: { name: "Kefir with Banana, Oat & Honey", description: "Kefir sa bananom, ovsom i medom" },
      bg: { name: "Kefir with Banana, Oat & Honey", description: "Кефир с банан, овесени ядки и мед" },
      ro: { name: "Kefir with Banana, Oat & Honey", description: "Chefir cu banane, ovăz și miere" }
    }
  },
  {
    id: "cold_bev_kefir_strawberry_cherry",
    categoryId: "cold_bev",
    price: 2.50,
    hasStrawberry: true,
    hasCherry: true,
    translations: {
      el: { name: "Κεφίρ με Φράουλα, Βύσσινο & Σμέουρο", description: "Φρουτένιο ρόφημα κεφίρ με μοναδικό συνδυασμό από φράουλα, βύσσινο και σμέουρο" },
      en: { name: "Kefir with Strawberry, Dark Cherry & Raspberry", description: "Fruity kefir drink with a unique blend of strawberry, dark cherry, and raspberry" },
      de: { name: "Kefir with Strawberry, Dark Cherry & Raspberry", description: "Kefir mit Erdbeere, Schwarzkirsche & Himbeere" },
      fr: { name: "Kefir with Strawberry, Dark Cherry & Raspberry", description: "Kéfir à la fraise, griotte et framboise" },
      es: { name: "Kefir with Strawberry, Dark Cherry & Raspberry", description: "Kéfir con fresa, cereza negra y frambuesa" },
      sr: { name: "Kefir with Strawberry, Dark Cherry & Raspberry", description: "Kefir sa jagodom, crnom višnjom i malinom" },
      bg: { name: "Kefir with Strawberry, Dark Cherry & Raspberry", description: "Кефир с ягода, черна череша и малина" },
      ro: { name: "Kefir with Strawberry, Dark Cherry & Raspberry", description: "Chefir cu căpșuni, cireșe negre și zmeură" }
    }
  },
  {
    id: "cold_bev_kefir_mango",
    categoryId: "cold_bev",
    price: 2.50,
    translations: {
      el: { name: "Κεφίρ με Μάνγκο, Φρούτο του Πάθους & Τζίντζερ", description: "Εξωτικό ρόφημα κεφίρ με μάνγκο, φρούτο του πάθους και μια ελαφρώς πικάντικη νότα τζίντζερ" },
      en: { name: "Kefir with Mango, Passion Fruit & Ginger", description: "Exotic kefir drink with mango, passion fruit, and a mildly spicy hint of ginger" },
      de: { name: "Kefir with Mango, Passion Fruit & Ginger", description: "Kefir mit Mango, Passionsfrucht & Ingwer" },
      fr: { name: "Kefir with Mango, Passion Fruit & Ginger", description: "Kéfir à la mangue, fruit de la passion et gingembre" },
      es: { name: "Kefir with Mango, Passion Fruit & Ginger", description: "Kéfir con mango, maracuyá y jengibre" },
      sr: { name: "Kefir with Mango, Passion Fruit & Ginger", description: "Kefir sa mangom, marakujom i đumbirom" },
      bg: { name: "Kefir with Mango, Passion Fruit & Ginger", description: "Кефир с манго, маракуя и джинджифил" },
      ro: { name: "Kefir with Mango, Passion Fruit & Ginger", description: "Chefir cu mango, fructul pasiunii și ghimbir" }
    }
  },
  {
    id: "cold_bev_ayran",
    categoryId: "cold_bev",
    price: 2.50,
    translations: {
      el: { name: "Αριάνι", description: "Παραδοσιακό, ελαφρώς αλατισμένο και άκρως δροσιστικό ρόφημα γιαουρτιού" },
      en: { name: "Ayran", description: "Traditional, slightly salted and highly refreshing yogurt drink" },
      de: { name: "Ayran", description: "Ayran" },
      fr: { name: "Ayran", description: "Ayran" },
      es: { name: "Ayran", description: "Ayran" },
      sr: { name: "Ayran", description: "Ajran" },
      bg: { name: "Ayran", description: "Айрян" },
      ro: { name: "Ayran", description: "Ayran" }
    }
  }
];