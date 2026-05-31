import { MenuItem } from "../menuData";

export const softDrinks: MenuItem[] = [
  {
    id: "soft_coca_cola_zero",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Coca Cola Zero", description: "Απολαυστική, δροσιστική γεύση χωρίς ζάχαρη και θερμίδες" },
      en: { name: "Coca Cola Zero", description: "Refreshing classic taste with zero sugar and zero calories" },
      de: { name: "Coca Cola Zero", description: "Erfrischender klassischer Geschmack ohne Zucker und Kalorien" },
      fr: { name: "Coca Cola Zero", description: "Goût classique rafraîchissant sans sucre ni calories" },
      es: { name: "Coca Cola Zero", description: "Sabor clásico refrescante sin azúcar ni calorías" },
      sr: { name: "Coca Cola Zero", description: "Osvežavajući klasični ukus bez šećera i kalorija" },
      bg: { name: "Coca Cola Zero", description: "Освежаващ класически вкус без захар и калории" },
      ro: { name: "Coca Cola Zero", description: "Gust clasic răcoritor, fără zahăr și calorii" }
    }
  },
  {
    id: "soft_orangeade",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Πορτοκαλάδα", description: "Δροσερή πορτοκαλάδα με πλούσιο άρωμα και φυσαλίδες" },
      en: { name: "Orangeade", description: "Refreshing sparkling orangeade with vibrant citrus flavor" },
      de: { name: "Orangeade", description: "Orangenlimonade. Erfrischend und prickelnd mit vollem Zitrusgeschmack" },
      fr: { name: "Orangeade", description: "Boisson à l'orange gazeuse. Rafraîchissante avec une saveur d'agrumes vibrante" },
      es: { name: "Orangeade", description: "Naranjada. Refrescante y con gas con sabor vibrante a cítricos" },
      sr: { name: "Orangeade", description: "Gazirani sok od pomorandže. Osvežavajući sok sa bogatim ukusom citrusa" },
      bg: { name: "Orangeade", description: "Газирана оранжада. Освежаваща с богат цитрусов вкус" },
      ro: { name: "Orangeade", description: "Oranjadă. Răcoritoare, cu gust bogat de citrice" }
    }
  },
  {
    id: "soft_orangeade_non_carbonated",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Πορτοκαλάδα (χωρίς ανθρακικό)", description: "Δροσερή πορτοκαλάδα με πλούσιο άρωμα, χωρίς ανθρακικό" },
      en: { name: "Orangeade (non-carbonated)", description: "Refreshing orangeade with vibrant citrus flavor, without carbonation" },
      de: { name: "Orangeade (non-carbonated)", description: "Orangenlimonade ohne Kohlensäure. Erfrischend mit vollem Zitrusgeschmack, ohne Kohlensäure" },
      fr: { name: "Orangeade (non-carbonated)", description: "Boisson à l'orange plate. Rafraîchissante avec une saveur d'agrumes vibrante, sans bulles" },
      es: { name: "Orangeade (non-carbonated)", description: "Naranjada sin gas. Refrescante con sabor vibrante a cítricos, sin gas" },
      sr: { name: "Orangeade (non-carbonated)", description: "Negazirani sok od pomorandže. Osvežavajući sok sa bogatim ukusom citrusa, bez gasa" },
      bg: { name: "Orangeade (non-carbonated)", description: "Негазирана оранжада. Освежаваща с богат цитрусов вкус, без газировка" },
      ro: { name: "Orangeade (non-carbonated)", description: "Oranjadă necarbonatată. Răcoritoare, cu gust bogat de citrice, fără acid" }
    }
  },
  {
    id: "soft_lemonade",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Λεμονάδα", description: "Κλασική, δροσιστική λεμονάδα με τέλεια ισορροπία γλυκού και ξινού" },
      en: { name: "Lemonade", description: "Classic, refreshing lemonade with a perfect sweet and sour balance" },
      de: { name: "Lemonade", description: "Zitronenlimonade. Klassisch erfrischend mit perfekter Balance aus süß und sauer" },
      fr: { name: "Lemonade", description: "Limonade. Classique et rafraîchissante, équilibre parfait entre le sucré et l'acidulé" },
      es: { name: "Lemonade", description: "Limonada. Clásica y refrescante con un equilibrio perfecto entre dulce y ácido" },
      sr: { name: "Lemonade", description: "Limunada. Klasična osvežavajuća limunada sa savršenim balansom slatkog i kiselog" },
      bg: { name: "Lemonade", description: "Лимонада. Класическа и освежаваща с перфектен баланс между сладко и кисело" },
      ro: { name: "Lemonade", description: "Limonadă. Clasică și răcoritoare, cu un echilibru perfect între dulce și acru" }
    }
  },
  {
    id: "soft_sparkling_water",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Σόδα", description: "Απλή, κλασική και απόλυτα δροσιστική με πλούσιο ανθρακικό" },
      en: { name: "Sparkling Water", description: "Crisp and highly refreshing with lively carbonation" },
      de: { name: "Sparkling Water", description: "Sprudelwasser. Frisch und sehr erfrischend mit lebendiger Kohlensäure" },
      fr: { name: "Sparkling Water", description: "Eau pétillante. Fraîche et très désaltérante avec une belle effervescence" },
      es: { name: "Sparkling Water", description: "Agua con gas. Fresca y muy refrescante con burbujas vivaces" },
      sr: { name: "Sparkling Water", description: "Kisela voda. Osvežavajuća voda sa bogatim mehurićima" },
      bg: { name: "Sparkling Water", description: "Газирана вода. Освежаваща вода с богати балончета" },
      ro: { name: "Sparkling Water", description: "Apă carbogazoasă. Proaspătă și foarte răcoritoare, cu efervescență bogată" }
    }
  },
  {
    id: "soft_sparkling_lemon_lime",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Σόδα με Λεμόνι & Λάιμ", description: "Δροσερή σόδα με μια αναζωογονητική πινελιά από εσπεριδοειδή" },
      en: { name: "Sparkling Water with Lemon & Lime", description: "Crisp sparkling water with an invigorating citrus twist" },
      de: { name: "Sparkling Water with Lemon & Lime", description: "Sprudelwasser mit Zitrone & Limette. Erfrischendes Sprudelwasser mit Zitrusnote" },
      fr: { name: "Sparkling Water with Lemon & Lime", description: "Eau pétillante citron & citron vert. Eau pétillante avec une touche d'agrumes" },
      es: { name: "Sparkling Water with Lemon & Lime", description: "Agua con gas con limón y lima. Agua con gas con un toque cítrico tonificante" },
      sr: { name: "Sparkling Water with Lemon & Lime", description: "Kisela voda sa limunom i limetom. Osvežavajuća voda sa osnažujućom notom citrusa" },
      bg: { name: "Sparkling Water with Lemon & Lime", description: "Газирана вода с лимон и лайм. Освежаваща вода с цитрусова нотка" },
      ro: { name: "Sparkling Water with Lemon & Lime", description: "Apă carbogazoasă cu lămâie și lime. Apă minerală răcoritoare cu un accent de citrice" }
    }
  },
  {
    id: "soft_mastic_sparkling_water",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Σόδα με Μαστίχα", description: "Παραδοσιακό άρωμα Χιώτικης μαστίχας σε μια δροσιστική σόδα" },
      en: { name: "Sparkling Water with Mastic", description: "Crisp sparkling water infused with the unique aroma of Chios mastic" },
      de: { name: "Sparkling Water with Mastic", description: "Sprudelwasser mit Mastix. Erfrischendes Wasser mit dem einzigartigen Aroma von Chios-Mastix" },
      fr: { name: "Sparkling Water with Mastic", description: "Eau pétillante au mastic. Eau fraîche infusée à l'arôme unique du mastic de Chios" },
      es: { name: "Sparkling Water with Mastic", description: "Agua con gas con lentisco (Mastiha). Agua fresca con el aroma único del lentisco de Quíos" },
      sr: { name: "Sparkling Water with Mastic", description: "Kisela voda sa mastikom. Osvežavajuća voda obogaćena jedinstvenom aromom mastike sa Hiosa" },
      bg: { name: "Sparkling Water with Mastic", description: "Газирана вода с мастика (сакъз). Освежаваща вода с уникален аромат на хиоска мастика" },
      ro: { name: "Sparkling Water with Mastic", description: "Apă carbogazoasă cu mastic. Apă proaspătă cu aroma unică a masticului de Chios" }
    }
  },
  {
    id: "soft_peach_ice_tea",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Ice Tea Ροδάκινο", description: "Παγωμένο τσάι με γλυκιά και φρουτώδη γεύση ροδάκινου" },
      en: { name: "Peach Ice Tea", description: "Iced tea with a sweet and fruity peach flavor" },
      de: { name: "Peach Ice Tea", description: "Pfirsich-Eistee. Eistee mit süßem und fruchtigem Pfirsichgeschmack" },
      fr: { name: "Peach Ice Tea", description: "Thé glacé à la pêche. Thé glacé au goût sucré et fruité de pêche" },
      es: { name: "Peach Ice Tea", description: "Té helado de melocotón. Té helado con sabor dulce y afrutado a melocotón" },
      sr: { name: "Peach Ice Tea", description: "Ledeni čaj breskva. Ledeni čaj sa slatkim voćnim ukusom breskve" },
      bg: { name: "Peach Ice Tea", description: "Студен чай праскова. Студен чай със сладък плодов вкус на праскова" },
      ro: { name: "Peach Ice Tea", description: "Ceai cu gheață cu piersici. Ceai cu gheață cu un gust dulce și fructat de piersici" }
    }
  },
  {
    id: "soft_lemon_ice_tea",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Ice Tea Λεμόνι", description: "Αναζωογονητικό παγωμένο τσάι με έντονη γεύση λεμονιού" },
      en: { name: "Lemon Ice Tea", description: "Invigorating iced tea with a zesty lemon flavor" },
      de: { name: "Lemon Ice Tea", description: "Zitronen-Eistee. Belebender Eistee mit spritzigem Zitronengeschmack" },
      fr: { name: "Lemon Ice Tea", description: "Thé glacé au citron. Thé glacé désaltérant avec une saveur vive de citron" },
      es: { name: "Lemon Ice Tea", description: "Té helado de limón. Té helado revitalizante con intenso sabor a limón" },
      sr: { name: "Lemon Ice Tea", description: "Ledeni čaj limun. Osvežavajući ledeni čaj sa snažnim ukusom limuna" },
      bg: { name: "Lemon Ice Tea", description: "Студен чай лимон. Освежаващ студен чай със силен лимонов вкус" },
      ro: { name: "Lemon Ice Tea", description: "Ceai cu gheață cu lămâie. Ceai cu gheață revigorant, cu aromă intensă de lămâie" }
    }
  },
  {
    id: "soft_xinonero_florinas",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Ξινόνερο Φλώρινας", description: "Φυσικώς ανθρακούχο φυσικό μεταλλικό νερό με μοναδική γεύση" },
      en: { name: "Xinonero Florinas", description: "Naturally sparkling mineral water with a distinct, refreshing taste" },
      de: { name: "Xinonero Florinas", description: "Griechisches natürliches Mineralwasser mit Kohlensäure. Erfrischend mit einzigartigem Geschmack" },
      fr: { name: "Xinonero Florinas", description: "Eau minérale naturelle gazeuse grecque. Rafraîchissante au goût unique" },
      es: { name: "Xinonero Florinas", description: "Agua mineral natural con gas griega. Refrescante con un sabor único" },
      sr: { name: "Xinonero Florinas", description: "Grčka prirodna gazirana mineralna voda. Osvežavajuća voda sa jedinstvenim ukusom" },
      bg: { name: "Xinonero Florinas", description: "Гръцка естествено газирана минерална вода. Освежаваща с уникален вкус" },
      ro: { name: "Xinonero Florinas", description: "Apă minerală naturală carbogazoasă din Grecia. Răcoritoare, cu un gust unic" }
    }
  },
  {
    id: "soft_grapefruit_soda",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Σόδα Γκρέιπφρουτ", description: "Έντονη, δροσιστική γεύση γκρέιπφρουτ με μια ευχάριστη πικράδα" },
      en: { name: "Grapefruit Soda", description: "Zesty and refreshing grapefruit flavor with a pleasant bitter note" },
      de: { name: "Grapefruit Soda", description: "Grapefruit-Limonade. Spritzig und erfrischend mit einer angenehmen Bitternote" },
      fr: { name: "Grapefruit Soda", description: "Soda au pamplemousse. Vif et rafraîchissant avec une agréable note amère" },
      es: { name: "Grapefruit Soda", description: "Refresco de pomelo. Sabor cítrico y refrescante con un agradable toque amargo" },
      sr: { name: "Grapefruit Soda", description: "Sok od grejpfruta. Osvežavajući sok sa prijatnom gorkastom notom" },
      bg: { name: "Grapefruit Soda", description: "Сода грейпфрут. Освежаващ цитрусов вкус с приятна горчива нотка" },
      ro: { name: "Grapefruit Soda", description: "Suc de grapefruit. Aromă proaspătă și răcoritoare, cu o notă plăcută de amărăciune" }
    }
  },
  {
    id: "soft_lime_ginger_soda",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Σόδα Λάιμ & Τζίντζερ", description: "Εκρηκτικός συνδυασμός από δροσερό λάιμ και τζίντζερ" },
      en: { name: "Lime & Ginger Soda", description: "Explosive combination of zesty lime and ginger" },
      de: { name: "Lime & Ginger Soda", description: "Limetten-Ingwer-Limonade. Explosive Kombination aus Limette und Ingwer" },
      fr: { name: "Lime & Ginger Soda", description: "Soda citron vert et gingembre. Combinaison explosive de citron vert et de gingembre" },
      es: { name: "Lime & Ginger Soda", description: "Refresco de lima y jengibre. Combinación explosiva de lima y jengibre" },
      sr: { name: "Lime & Ginger Soda", description: "Sok od limete i đumbira. Eksplozivna kombinacija osvežavajuće limete i đumbira" },
      bg: { name: "Lime & Ginger Soda", description: "Сода лайм и джинджифил. Експлозивна комбинация от свеж лайм и джинджифил" },
      ro: { name: "Lime & Ginger Soda", description: "Suc de lime și ghimbir. Combinație explozivă de lime proaspăt și ghimbir" }
    }
  },
  {
    id: "soft_pomegranate_cranberry_soda",
    categoryId: "soft_drinks",
    price: 2.50,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Σόδα Ρόδι & Κράνμπερι", description: "Φρουτώδης σόδα με ελαφρώς όξινη, αναζωογονητική γεύση" },
      en: { name: "Pomegranate & Cranberry Soda", description: "Fruity soda with a slightly tart, revitalizing taste" },
      de: { name: "Pomegranate & Cranberry Soda", description: "Granatapfel-Cranberry-Limonade. Fruchtige Limonade mit leicht säuerlichem Geschmack" },
      fr: { name: "Pomegranate & Cranberry Soda", description: "Soda grenade et canneberge. Soda fruité au goût légèrement acidulé et revitalisant" },
      es: { name: "Pomegranate & Cranberry Soda", description: "Refresco de granada y arándano. Refresco afrutado con un toque ligeramente ácido y revitalizante" },
      sr: { name: "Pomegranate & Cranberry Soda", description: "Sok od nara i brusnice. Voćni sok sa blago kiselkastim, osvežavajućim ukusom" },
      bg: { name: "Pomegranate & Cranberry Soda", description: "Сода нар и червена боровинка. Плодова сода с леко тръпчив, ревитализиращ вкус" },
      ro: { name: "Pomegranate & Cranberry Soda", description: "Suc de rodie și merișoare. Băutură fructată, cu un gust ușor acrișor și revitalizant" }
    }
  }
];