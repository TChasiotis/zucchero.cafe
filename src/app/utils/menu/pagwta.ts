import { MenuItem } from "../menuData";

export const iceCream: MenuItem[] = [
  {
    id: "ice_cream_info_general",
    categoryId: "ice_cream",
    price: 0,
    hidePrice: true,
    translations: {
      el: { name: "ℹ️ Χρήσιμες Πληροφορίες", description: "Το παγωτό είναι self-service (παραγγελία και παραλαβή από το ψυγείο του καταστήματος). Τα σορμπέ φρούτων και η μαύρη σοκολάτα είναι vegan (φτιάχνονται με νερό αντί για γάλα). Στα προϊόντα που χρεώνονται με το κιλό υπάρχει επιπλέον service fee +0.50€." },
      en: { name: "ℹ️ Useful Information", description: "Ice cream is self-service (order and pick up from the display fridge). Fruit sorbets and dark chocolate are vegan (made with water instead of milk). An additional +0.50€ service fee applies to products sold per kilogram." },
      de: { name: "ℹ️ Nützliche Informationen", description: "Eiscreme ist Selbstbedienung (Bestellung und Abholung an der Theke). Fruchtsorbets und dunkle Schokolade sind vegan (mit Wasser statt Milch hergestellt). Für Produkte, die pro Kilogramm verkauft werden, fällt eine zusätzliche Servicegebühr von +0,50 € an." },
      fr: { name: "ℹ️ Informations utiles", description: "La glace est en libre-service (commande et retrait au comptoir). Les sorbets aux fruits et le chocolat noir sont végétaliens (faits avec de l'eau au lieu de lait). Des frais de service supplémentaires de +0,50 € s'appliquent aux produits vendus au kilogramme." },
      es: { name: "ℹ️ Información útil", description: "El helado es autoservicio (pedido y recogida en el mostrador). Los sorbetes de frutas y el helado de chocolate negro son veganos (hechos con agua en lugar de leche). Se aplica un cargo de servicio adicional de +0,50 € a los productos vendidos por kilógramo." },
      sr: { name: "ℹ️ Korisne informacije", description: "Sladoled je samousluga (poručivanje i preuzimanje na vitrini). Voćni sorbei i crna čokolada su veganski (napravljeni sa vodom umesto mleka). Primenjuje se dodatna doplata za uslugu od +0.50€ za proizvode koji se prodaju po kilogramu." },
      bg: { name: "ℹ️ Полезна информация", description: "Сладоледът е на самообслужване (поръчка и вземане от витрината). Плодовите сорбета и черният шоколад са веган (направени с вода вместо мляко). Удържа се допълнителна такса за обслужване от +0.50€ за продукти, продавани на килограм." },
      ro: { name: "ℹ️ Informații utile", description: "Înghețata este în sistem autoservire (comandă și ridicare de la vitrină). Sorbetele de fructe și înghețata de ciocolată neagră sunt vegane (făcute cu apă în loc de lapte). Se aplică o taxă suplimentară de servire de +0.50€ pentru produsele vândute la kilogram." }
    }
  },
  {
    id: "separator_ice_crm_info",
    categoryId: "ice_cream",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "ice_cream_1_scoop",
    categoryId: "ice_cream",
    price: 2.00,
    isSoldOut: false,
    translations: {
      el: { name: "Παγωτό - Μία Μπάλα", description: "Επιλέξτε έως 2 γεύσεις. Σε χωνάκι ή κυπελλάκι." },
      en: { name: "Ice Cream - 1 Scoop", description: "Choose up to 2 flavors. In a cone or cup." },
      de: { name: "Ice Cream - 1 Scoop", description: "Eiscreme - 1 Kugel: Wählen Sie bis zu 2 Sorten. In der Waffel oder im Becher." },
      fr: { name: "Ice Cream - 1 Scoop", description: "Glace - 1 Boule: Choisissez jusqu'à 2 parfums. En cornet ou en pot." },
      es: { name: "Ice Cream - 1 Scoop", description: "Helado - 1 Bola: Elige hasta 2 sabores. En cono o tarrina." },
      sr: { name: "Ice Cream - 1 Scoop", description: "Sladoled - 1 Kugla: Izaberite do 2 ukusa. U kornetu ili čaši." },
      bg: { name: "Ice Cream - 1 Scoop", description: "Сладолед - 1 Топка: Изберете до 2 вкуса. Във фунийка или чашка." },
      ro: { name: "Ice Cream - 1 Scoop", description: "Înghețată - 1 Cupă: Alegeți până la 2 arome. La cornet sau pahar." }
    }
  },
  {
    id: "ice_cream_2_scoops",
    categoryId: "ice_cream",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Παγωτό - Δύο Μπάλες", description: "Επιλέξτε έως 4 γεύσεις. Σε χωνάκι ή κυπελλάκι." },
      en: { name: "Ice Cream - 2 Scoops", description: "Choose up to 4 flavors. In a cone or cup." },
      de: { name: "Ice Cream - 2 Scoops", description: "Eiscreme - 2 Kugeln: Wählen Sie bis zu 4 Sorten. In der Waffel oder im Becher." },
      fr: { name: "Ice Cream - 2 Scoops", description: "Glace - 2 Boules: Choisissez jusqu'à 4 parfums. En cornet ou en pot." },
      es: { name: "Ice Cream - 2 Scoops", description: "Helado - 2 Bolas: Elige hasta 4 sabores. En cono o tarrina." },
      sr: { name: "Ice Cream - 2 Scoops", description: "Sladoled - 2 Kugle: Izaberite do 4 ukusa. U kornetu ili čaši." },
      bg: { name: "Ice Cream - 2 Scoops", description: "Сладолед - 2 Топки: Изберете до 4 вкуса. Във фунийка или чашка." },
      ro: { name: "Ice Cream - 2 Scoops", description: "Înghețată - 2 Cupe: Alegeți până la 4 arome. La cornet sau pahar." }
    }
  },
  {
    id: "ice_cream_3_scoops",
    categoryId: "ice_cream",
    price: 5.00,
    isSoldOut: false,
    translations: {
      el: { name: "Παγωτό - Τρεις Μπάλες", description: "Επιλέξτε έως 6 γεύσεις. Σε κυπελλάκι." },
      en: { name: "Ice Cream - 3 Scoops", description: "Choose up to 6 flavors. In a cup." },
      de: { name: "Ice Cream - 3 Scoops", description: "Eiscreme - 3 Kugeln: Wählen Sie bis zu 6 Sorten. Im Becher." },
      fr: { name: "Ice Cream - 3 Scoops", description: "Glace - 3 Boules: Choisissez jusqu'à 6 parfums. En pot." },
      es: { name: "Ice Cream - 3 Scoops", description: "Helado - 3 Bolas: Elige hasta 6 sabores. En tarrina." },
      sr: { name: "Ice Cream - 3 Scoops", description: "Sladoled - 3 Kugle: Izaberite do 6 ukusa. U čaši." },
      bg: { name: "Ice Cream - 3 Scoops", description: "Сладолед - 3 Топки: Изберете до 6 вкуса. В чашка." },
      ro: { name: "Ice Cream - 3 Scoops", description: "Înghețată - 3 Cupe: Alegeți până la 6 arome. La pahar." }
    }
  },
  {
    id: "separator_ice_crm_pagwtini",
    categoryId: "ice_cream",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "ice_cream_stick_cocoa",
    categoryId: "ice_cream",
    price: 1.20,
    hasDairy: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Παγωτίνι Ξυλάκι Κακάο", description: "Δροσερό μίνι παγωτό κακάο σε ξυλάκι" },
      en: { name: "Mini Cocoa Ice Cream Stick", description: "Refreshing mini cocoa ice cream on a stick" },
      de: { name: "Mini Cocoa Ice Cream Stick", description: "Mini-Kakao-Eis am Stiel. Erfrischendes Mini-Kakao-Eis am Stiel" },
      fr: { name: "Mini Cocoa Ice Cream Stick", description: "Bâtonnet de Glace Cacao. Mini glace rafraîchissante au cacao sur bâtonnet" },
      es: { name: "Mini Cocoa Ice Cream Stick", description: "Mini Helado de Cacao. Refrescante mini helado de cacao en palito" },
      sr: { name: "Mini Cocoa Ice Cream Stick", description: "Mini sladoled na štapiću kakao. Osvežavajući mini kakao sladoled na štapiću" },
      bg: { name: "Mini Cocoa Ice Cream Stick", description: "Мини какаов сладолед на клечка. Освежаващ мини какаов сладолед на клечка" },
      ro: { name: "Mini Cocoa Ice Cream Stick", description: "Mini Înghețată de Cacao pe Băț. Mini înghețată răcoritoare de cacao pe băț" }
    }
  },
  {
    id: "ice_cream_stick_vanilla",
    categoryId: "ice_cream",
    price: 1.20,
    hasDairy: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Παγωτίνι Ξυλάκι Βανίλια", description: "Κλασικό μίνι παγωτό βανίλια σε ξυλάκι" },
      en: { name: "Mini Vanilla Ice Cream Stick", description: "Classic mini vanilla ice cream on a stick" },
      de: { name: "Mini Vanilla Ice Cream Stick", description: "Mini-Vanilleeis am Stiel. Klassisches Mini-Vanilleeis am Stiel" },
      fr: { name: "Mini Vanilla Ice Cream Stick", description: "Bâtonnet de Glace Vanille. Mini glace classique à la vanille sur bâtonnet" },
      es: { name: "Mini Vanilla Ice Cream Stick", description: "Mini Helado de Vainilla. Clásico mini helado de vainilla en palito" },
      sr: { name: "Mini Vanilla Ice Cream Stick", description: "Mini sladoled na štapiću vanila. Klasični mini sladoled od vanile na štapiću" },
      bg: { name: "Mini Vanilla Ice Cream Stick", description: "Мини ванилов сладолед на клечка. Класически мини ванилов сладолед на клечка" },
      ro: { name: "Mini Vanilla Ice Cream Stick", description: "Mini Înghețată de Vanilie pe Băț. Mini înghețată clasică de vanilie pe băț" }
    }
  },
  {
    id: "ice_cream_cone_cocoa",
    categoryId: "ice_cream",
    price: 1.30,
    hasDairy: true,
    translations: {
      el: { name: "Παγωτίνι Χωνάκι Κακάο", description: "Τραγανό μίνι χωνάκι με παγωτό κακάο" },
      en: { name: "Mini Cocoa Ice Cream Cone", description: "Crunchy mini cone with cocoa ice cream" },
      de: { name: "Mini Cocoa Ice Cream Cone", description: "Mini-Kakao-Eiswaffel. Knusprige Mini-Waffel mit Kakaoeis" },
      fr: { name: "Mini Cocoa Ice Cream Cone", description: "Mini Cône de Glace Cacao. Mini cône croustillant avec glace au cacao" },
      es: { name: "Mini Cocoa Ice Cream Cone", description: "Mini Cono de Helado de Cacao. Mini cono crujiente con helado de cacao" },
      sr: { name: "Mini Cocoa Ice Cream Cone", description: "Mini kornet kakao. Hrskavi mini kornet sa kakao sladoledom" },
      bg: { name: "Mini Cocoa Ice Cream Cone", description: "Мини какаов сладолед във фунийка. Хрупкава mini фунийка с какаов сладолед" },
      ro: { name: "Mini Cocoa Ice Cream Cone", description: "Mini Cornet cu Înghețată de Cacao. Mini cornet crocant cu înghețată de cacao" }
    }
  },
  {
    id: "ice_cream_cone_vanilla",
    categoryId: "ice_cream",
    price: 1.30,
    hasDairy: true,
    translations: {
      el: { name: "Παγωτίνι Χωνάκι Βανίλια", description: "Τραγανό μίνι χωνάκι με παγωτό βανίλια" },
      en: { name: "Mini Vanilla Ice Cream Cone", description: "Crunchy mini cone with vanilla ice cream" },
      de: { name: "Mini Vanilla Ice Cream Cone", description: "Mini-Vanille-Eiswaffel. Knusprige Mini-Waffel mit Vanilleeis" },
      fr: { name: "Mini Vanilla Ice Cream Cone", description: "Mini Cône de Glace Vanille. Mini cône croustillant avec glace à la vanille" },
      es: { name: "Mini Vanilla Ice Cream Cone", description: "Mini Cono de Helado de Vainilla. Mini cono crujiente con helado de vainilla" },
      sr: { name: "Mini Vanilla Ice Cream Cone", description: "Mini kornet vanila. Hrskavi mini kornet sa sladoledom od vanile" },
      bg: { name: "Mini Vanilla Ice Cream Cone", description: "Мини ванилов сладолед във фунийка. Хрупкава mini фунийка с ванилов сладолед" },
      ro: { name: "Mini Vanilla Ice Cream Cone", description: "Mini Cornet cu Înghețată de Vanilie. Mini cornet crocant cu înghețată de vanilie" }
    }
  },
  {
    id: "ice_cream_cone_lotus",
    categoryId: "ice_cream",
    price: 1.30,
    hasDairy: true,
    translations: {
      el: { name: "Παγωτίνι Χωνάκι Lotus", description: "Τραγανό μίνι χωνάκι με παγωτό γεύσης Lotus Biscoff" },
      en: { name: "Mini Lotus Ice Cream Cone", description: "Crunchy mini cone with Lotus Biscoff flavored ice cream" },
      de: { name: "Mini Lotus Ice Cream Cone", description: "Mini-Lotus-Eiswaffel. Knusprige Mini-Waffel mit Lotus Biscoff-Eis" },
      fr: { name: "Mini Lotus Ice Cream Cone", description: "Mini Cône de Glace Lotus. Mini cône croustillant avec glace saveur Lotus Biscoff" },
      es: { name: "Mini Lotus Ice Cream Cone", description: "Mini Cono de Helado Lotus. Mini cono crujiente con helado sabor Lotus Biscoff" },
      sr: { name: "Mini Lotus Ice Cream Cone", description: "Mini kornet Lotus. Hrskavi mini kornet sa Lotus Biscoff sladoledom" },
      bg: { name: "Mini Lotus Ice Cream Cone", description: "Мини сладолед Лотус във фунийка. Хрупкава mini фунийка със сладолед с вкус на Lotus Biscoff" },
      ro: { name: "Mini Lotus Ice Cream Cone", description: "Mini Cornet cu Înghețată Lotus. Mini cornet crocant cu înghețată cu aromă Lotus Biscoff" }
    }
  },
  {
    id: "ice_cream_stick_strawberry",
    categoryId: "ice_cream",
    price: 1.20,
    hasDairy: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Παγωτίνι Ξυλάκι Φράουλα", description: "Δροσερό μίνι παγωτό φράουλα σε ξυλάκι" },
      en: { name: "Mini Strawberry Ice Cream Stick", description: "Refreshing mini strawberry ice cream on a stick" },
      de: { name: "Mini Strawberry Ice Cream Stick", description: "Mini-Erdbeereis am Stiel. Erfrischendes Mini-Erdbeereis am Stiel" },
      fr: { name: "Mini Strawberry Ice Cream Stick", description: "Bâtonnet de Glace Fraise. Mini glace rafraîchissante à la fraise sur bâtonnet" },
      es: { name: "Mini Strawberry Ice Cream Stick", description: "Mini Helado de Fresa. Refrescante mini helado de fresa en palito" },
      sr: { name: "Mini Strawberry Ice Cream Stick", description: "Mini sladoled na štapiću jagoda. Osvežavajući mini sladoled od jagode na štapiću" },
      bg: { name: "Mini Strawberry Ice Cream Stick", description: "Мини ягодов сладолед на клечка. Освежаващ mini ягодов сладолед на клечка" },
      ro: { name: "Mini Strawberry Ice Cream Stick", description: "Mini Înghețată de Căpșuni pe Băț. Mini înghețată răcoritoare de căpșuni pe băț" }
    }
  },
  {
    id: "ice_cream_cone_strawberry",
    categoryId: "ice_cream",
    price: 1.30,
    hasDairy: true,
    translations: {
      el: { name: "Παγωτίνι Χωνάκι Φράουλα", description: "Τραγανό μίνι χωνάκι με παγωτό φράουλα" },
      en: { name: "Mini Strawberry Ice Cream Cone", description: "Crunchy mini cone with strawberry ice cream" },
      de: { name: "Mini Strawberry Ice Cream Cone", description: "Mini-Erdbeer-Eiswaffel. Knusprige Mini-Waffel mit Erdbeereis" },
      fr: { name: "Mini Strawberry Ice Cream Cone", description: "Mini Cône de Glace Fraise. Mini cône croustillant avec glace à la fraise" },
      es: { name: "Mini Strawberry Ice Cream Cone", description: "Mini Cono de Helado de Fresa. Mini cono crujiente con helado de fresa" },
      sr: { name: "Mini Strawberry Ice Cream Cone", description: "Mini kornet jagoda. Hrskavi mini kornet sa sladoledom od jagode" },
      bg: { name: "Mini Strawberry Ice Cream Cone", description: "Мини ягодов сладолед във фунийка. Хрупкава mini фунийка с ягодов сладолед" },
      ro: { name: "Mini Strawberry Ice Cream Cone", description: "Mini Cornet cu Înghețată de Căpșuni. Mini cornet crocant cu înghețată de căpșuni" }
    }
  },
  {
    id: "ice_cream_stick_banana",
    categoryId: "ice_cream",
    price: 1.20,
    hasDairy: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Παγωτίνι Ξυλάκι Μπανάνα", description: "Γλυκό μίνι παγωτό μπανάνα σε ξυλάκι" },
      en: { name: "Mini Banana Ice Cream Stick", description: "Sweet mini banana ice cream on a stick" },
      de: { name: "Mini Banana Ice Cream Stick", description: "Mini-Bananeneis am Stiel. Süßes Mini-Bananeneis am Stiel" },
      fr: { name: "Mini Banana Ice Cream Stick", description: "Bâtonnet de Glace Banane. Douce mini glace à la banane sur bâtonnet" },
      es: { name: "Mini Banana Ice Cream Stick", description: "Mini Helado de Plátano. Dulce mini helado de plátano en palito" },
      sr: { name: "Mini Banana Ice Cream Stick", description: "Mini sladoled na štapiću banana. Sladak mini sladoled od banane na štapiću" },
      bg: { name: "Mini Banana Ice Cream Stick", description: "Мини бананов сладолед на клечка. Сладък mini бананов сладолед на клечка" },
      ro: { name: "Mini Banana Ice Cream Stick", description: "Mini Înghețată de Banane pe Băț. Mini înghețată dulce de banane pe băț" }
    }
  },
  {
    id: "ice_cream_stick_snickers",
    categoryId: "ice_cream",
    price: 1.20,
    hasDairy: true,
    hasNuts: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Παγωτίνι Ξυλάκι Snickers", description: "Μίνι παγωτό με καραμέλα, φιστίκια και επικάλυψη σοκολάτας" },
      en: { name: "Mini Snickers Ice Cream Stick", description: "Mini ice cream with caramel, peanuts, and chocolate coating" },
      de: { name: "Mini Snickers Ice Cream Stick", description: "Mini-Snickers-Eis am Stiel. Mini-Eis mit Karamell, Erdnüssen und Schokoladenüberzug" },
      fr: { name: "Mini Snickers Ice Cream Stick", description: "Bâtonnet de Glace Snickers. Mini glace avec caramel, cacahuètes et enrobage chocolat" },
      es: { name: "Mini Snickers Ice Cream Stick", description: "Mini Helado Snickers. Mini helado con caramelo, cacahuetes y cobertura de chocolate" },
      sr: { name: "Mini Snickers Ice Cream Stick", description: "Mini sladoled na štapiću Snickers. Mini sladoled sa karamelom, kikirikijem i prelivom od čokolade" },
      bg: { name: "Mini Snickers Ice Cream Stick", description: "Мини сладолед Сникърс на клечка. Mini сладолед с карамел, фъстъци και шоколадово покритие" },
      ro: { name: "Mini Snickers Ice Cream Stick", description: "Mini Înghețată Snickers pe Băț. Mini înghețată cu caramel, arahide și glazură de ciocolată" }
    }
  },
  {
    id: "ice_cream_sandwich_cream",
    categoryId: "ice_cream",
    price: 1.00,
    hasDairy: true,
    translations: {
      el: { name: "Παγωτίνι Σάντουιτς Κρέμα", description: "Μίνι παγωτό κρέμα βανίλια ανάμεσα σε δύο μαλακά μπισκότα" },
      en: { name: "Mini Cream Ice Cream Sandwich", description: "Mini vanilla cream ice cream between two soft biscuits" },
      de: { name: "Mini Cream Ice Cream Sandwich", description: "Mini-Creme-Eissandwich. Mini-Vanilleeis zwischen zwei weichen Keksen" },
      fr: { name: "Mini Cream Ice Cream Sandwich", description: "Mini Sandwich Glacé à la Crème. Mini glace à la vanille entre deux biscuits moelleux" },
      es: { name: "Mini Cream Ice Cream Sandwich", description: "Mini Sándwich de Helado de Crema. Mini helado de vainilla entre dos galletas suaves" },
      sr: { name: "Mini Cream Ice Cream Sandwich", description: "Mini sladoled sendvič od krema. Mini sladoled od vanile između dva mekana keksa" },
      bg: { name: "Mini Cream Ice Cream Sandwich", description: "Мини сладоледен сандвич с крем. Mini ванилов сладолед между две μεки бисквити" },
      ro: { name: "Mini Cream Ice Cream Sandwich", description: "Mini Sandwich cu Înghețată de Cremă. Mini înghețată de vanilie între doi biscuiți moi" }
    }
  },
  {
    id: "ice_cream_sandwich_choco",
    categoryId: "ice_cream",
    price: 1.20,
    hasDairy: true,
    translations: {
      el: { name: "Παγωτίνι Σάντουιτς Κρέμα Σοκολάτα", description: "Μίνι παγωτό κρέμα και σοκολάτα ανάμεσα σε δύο μαλακά μπισκότα" },
      en: { name: "Mini Cream & Chocolate Ice Cream Sandwich", description: "Mini cream and chocolate ice cream between two soft biscuits" },
      de: { name: "Mini Cream & Chocolate Ice Cream Sandwich", description: "Mini-Creme-Schoko-Eissandwich. Mini-Eis mit Creme und Schokolade zwischen zwei weichen Keksen" },
      fr: { name: "Mini Cream & Chocolate Ice Cream Sandwich", description: "Mini Sandwich Glacé Crème et Chocolat. Mini glace crème et chocolat entre deux biscuits moelleux" },
      es: { name: "Mini Cream & Chocolate Ice Cream Sandwich", description: "Mini Sándwich de Helado de Crema y Chocolate. Mini helado de crema y chocolate entre dos galletas suaves" },
      sr: { name: "Mini Cream & Chocolate Ice Cream Sandwich", description: "Mini sladoled sendvič krem i čokolada. Mini sladoled od kreme i čokolade između dva mekana keksa" },
      bg: { name: "Mini Cream & Chocolate Ice Cream Sandwich", description: "Мини сладоледен сандвич крем и шоколад. Mini сладолед с крем και шоколад между две μεки бисквити" },
      ro: { name: "Mini Cream & Chocolate Ice Cream Sandwich", description: "Mini Sandwich cu Înghețată Cremă și Ciocolată. Mini înghețată de cremă și ciocolată între doi biscuiți moi" }
    }
  },
  {
    id: "ice_cream_sandwich_lotus",
    categoryId: "ice_cream",
    price: 1.00,
    hasDairy: true,
    translations: {
      el: { name: "Παγωτίνι Σάντουιτς Lotus", description: "Μίνι παγωτό με γεύση Lotus Biscoff ανάμεσα σε μαλακά μπισκότα" },
      en: { name: "Mini Lotus Ice Cream Sandwich", description: "Mini Lotus Biscoff flavored ice cream between soft biscuits" },
      de: { name: "Mini Lotus Ice Cream Sandwich", description: "Mini-Lotus-Eissandwich. Mini-Eis mit Lotus Biscoff-Geschmack zwischen weichen Keksen" },
      fr: { name: "Mini Lotus Ice Cream Sandwich", description: "Mini Sandwich Glacé Lotus. Mini glace saveur Lotus Biscoff entre des biscuits moelleux" },
      es: { name: "Mini Lotus Ice Cream Sandwich", description: "Mini Sándwich de Helado Lotus. Mini helado con sabor a Lotus Biscoff entre galletas suaves" },
      sr: { name: "Mini Lotus Ice Cream Sandwich", description: "Mini sladoled sendvič Lotus. Mini sladoled sa ukusom Lotus Biscoff između mekanih keksa" },
      bg: { name: "Mini Lotus Ice Cream Sandwich", description: "Мини сладоледен сандвич Лотус. Mini сладолед с вкус на Lotus Biscoff между μεки бисквити" },
      ro: { name: "Mini Lotus Ice Cream Sandwich", description: "Mini Sandwich cu Înghețată Lotus. Mini înghețată cu aromă Lotus Biscoff între biscuiți moi" }
    }
  },
  {
    id: "separator_kg",
    categoryId: "ice_cream",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "ice_cream_kg",
    categoryId: "ice_cream",
    price: 15.00,
    unit: "kg",
    isSoldOut: false,
    translations: {
      el: { name: "Παγωτό Χύμα (Πακέτο Κιλού)", description: "Επιλέξτε τις γεύσεις της αρεσκείας σας σε συσκευασία." },
      en: { name: "Ice Cream Package", description: "Choose your favorite flavors in a package." },
      de: { name: "Ice Cream Package", description: "Ice Cream Package: Wählen Sie Ihre Lieblingssorten in einer Verpackung." },
      fr: { name: "Ice Cream Package", description: "Ice Cream Package: Choisissez vos parfums préférés en emballage." },
      es: { name: "Ice Cream Package", description: "Ice Cream Package: Elige tus sabores favoritos en un envase." },
      sr: { name: "Ice Cream Package", description: "Ice Cream Package: Izaberite svoje omiljene ukuse u pakovanju." },
      bg: { name: "Ice Cream Package", description: "Ice Cream Package: Изберете любимите си вкусове в опаковка." },
      ro: { name: "Ice Cream Package", description: "Ice Cream Package: Alegeți aromele preferate în ambalaj." }
    }
  },
  {
    id: "mini_ice_cream_kg",
    categoryId: "ice_cream",
    price: 16.00,
    unit: "kg",
    isSoldOut: false,
    translations: {
      el: { name: "Παγωτίνια (Πακέτο Κιλού)", description: "Επιλέξτε τα παγωτίνια της αρεσκείας σας σε συσκευασία." },
      en: { name: "Mini Ice Creams Package", description: "Choose your favorite mini ice creams in a package." },
      de: { name: "Mini Ice Creams Package", description: "Mini-Eiscreme Paket: Wählen Sie Ihre Lieblings-Mini-Eiscreme in einer Verpackung." },
      fr: { name: "Mini Ice Creams Package", description: "Mini Glaces Package: Choisissez vos mini glaces préférées en emballage." },
      es: { name: "Mini Ice Creams Package", description: "Mini Helados Package: Elige tus mini helados favoritos en un envase." },
      sr: { name: "Mini Ice Creams Package", description: "Mini Sladoledi Package: Izaberite svoje omiljene mini sladolede u pakovanju." },
      bg: { name: "Mini Ice Creams Package", description: "Мини Сладоледи Package: Изберете любимите си мини сладоледи в опаковка." },
      ro: { name: "Mini Ice Creams Package", description: "Mini Înghețate Package: Alegeți mini înghețatele preferate în ambalaj." }
    }
  },
  {
    id: "separator_ice_crm_extras",
    categoryId: "ice_cream",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "ice_cream_syrups",
    categoryId: "ice_cream", 
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { 
        name: "Extras: Σιρόπι Σοκολάτας, Σιρόπι Καραμέλας, Σιρόπι Φράουλας", 
        description: "" 
      },
      en: { 
        name: "Extras: Chocolate Syrup, Caramel Syrup, Strawberry Syrup", 
        description: "" 
      },
      de: { 
        name: "Extras: Chocolate Syrup, Caramel Syrup, Strawberry Syrup", 
        description: "Extras: Schokoladensirup, Karamellsirup, Erdbeersirup" 
      },
      fr: { 
        name: "Extras: Chocolate Syrup, Caramel Syrup, Strawberry Syrup", 
        description: "Suppléments: Sirop de Chocolat, Sirop de Caramel, Sirop de Fraise" 
      },
      es: { 
        name: "Extras: Chocolate Syrup, Caramel Syrup, Strawberry Syrup", 
        description: "Extras: Sirope de Chocolate, Sirope de Caramelo, Sirope de Fresa" 
      },
      sr: { 
        name: "Extras: Chocolate Syrup, Caramel Syrup, Strawberry Syrup", 
        description: "Dodaci: Čokoladni sirup, Sirup od karamele, Sirup od jagode" 
      },
      bg: { 
        name: "Extras: Chocolate Syrup, Caramel Syrup, Strawberry Syrup", 
        description: "Добавки: Шоколадов сироп, Карамелен сироп, Ягодов сироп" 
      },
      ro: { 
        name: "Extras: Chocolate Syrup, Caramel Syrup, Strawberry Syrup", 
        description: "Extras: Sirop de Ciocolată, Sirop de Caramel, Sirop de Căpșuni" 
      }
    }
  }
];