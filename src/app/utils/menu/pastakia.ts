import { MenuItem } from "../menuData";

export const pastakia: MenuItem[] = [
  // --- ΠΟΤΗΡΑΚΙΑ (ΠΡΑΛΙΝΕΣ - GLUTEN FREE) ---
  // --- ΠΟΤΗΡΑΚΙΑ (ΠΡΑΛΙΝΕΣ - GLUTEN FREE) ---
  {
    id: "pastaki_caramel",
    categoryId: "pastakia",
    price: 1.50,
    isGlutenFree: true,
    translations: {
      el: { name: "Ποτηράκι Καραμέλα", description: "Ατομικό γλυκό σε ποτηράκι με κρέμα καραμέλας και επικάλυψη καραμέλας" },
      en: { name: "Caramel Praline Cup", description: "Mini dessert cup with caramel cream and caramel topping" },
      de: { name: "Caramel Praline Cup", description: "Karamell-Pralinenbecher: Kleines Dessert im Becher mit Karamellcreme und Karamell-Topping" },
      fr: { name: "Caramel Praline Cup", description: "Coupe Praliné Caramel: Petit dessert en coupe avec crème au caramel et glaçage au caramel" },
      es: { name: "Caramel Praline Cup", description: "Copa Praliné de Caramelo: Postre en vasito con crema de caramelo y cobertura de caramelo" },
      sr: { name: "Caramel Praline Cup", description: "Karamel Pralina u čaši: Desert u čašici sa karamel kremom i karamel prelivom" },
      bg: { name: "Caramel Praline Cup", description: "Карамелена Пралина в чаша: Десерт в чашка с карамелен крем и карамелена глазура" },
      ro: { name: "Caramel Praline Cup", description: "Pralină de Caramel la pahar: Desert la pahar cu cremă de caramel și topping de caramel" }
    }
  },
  {
    id: "pastaki_chocolate",
    categoryId: "pastakia",
    price: 1.50,
    isGlutenFree: true,
    translations: {
      el: { name: "Ποτηράκι Σοκολάτα", description: "Πραλίνα σοκολάτας με σοκολατένια γκανάς σε ποτηράκι" },
      en: { name: "Chocolate Praline Cup", description: "Moist chocolate praline with chocolate ganache in a cup" },
      de: { name: "Chocolate Praline Cup", description: "Schoko-Pralinenbecher: Schokoladenpraline mit Schokoladen-Ganache im Becher" },
      fr: { name: "Chocolate Praline Cup", description: "Coupe Praliné Chocolat: Praliné au chocolat avec ganache au chocolat en coupe" },
      es: { name: "Chocolate Praline Cup", description: "Copa Praliné de Chocolate: Praliné de chocolate con ganache de chocolate en vasito" },
      sr: { name: "Chocolate Praline Cup", description: "Čokoladna Pralina u čaši: Čokoladna pralina sa čokoladnim ganašom u čašici" },
      bg: { name: "Chocolate Praline Cup", description: "Шоколадова Пралина в чаша: Шоколадова пралина с шоколадов ганаш в чашка" },
      ro: { name: "Chocolate Praline Cup", description: "Pralină de Ciocolată la pahar: Pralină de ciocolată cu ganache de ciocolată la pahar" }
    }
  },
  {
    id: "pastaki_chocolate_trilogy",
    categoryId: "pastakia",
    price: 1.50,
    isGlutenFree: true,
    translations: {
      el: { name: "Ποτηράκι Τριλογία Σοκολάτας", description: "Γλυκό σε ποτηράκι με τρεις στρώσεις διαφορετικής πραλίνας σοκολάτας" },
      en: { name: "Chocolate Trilogy Cup", description: "Dessert cup with three layers of different chocolate pralines" },
      de: { name: "Chocolate Trilogy Cup", description: "Schokoladen-Trilogie-Becher: Dessert im Becher mit drei Schichten verschiedener Schokoladenpralinen" },
      fr: { name: "Chocolate Trilogy Cup", description: "Coupe Trilogie de Chocolats: Dessert en coupe avec trois couches de pralinés au chocolat différents" },
      es: { name: "Chocolate Trilogy Cup", description: "Copa Trilogía de Chocolate: Postre en vasito con tres capas de diferentes pralinés de chocolate" },
      sr: { name: "Chocolate Trilogy Cup", description: "Trilogija Čokolade u čaši: Desert u čašici sa tri sloja različitih čokoladnih pralina" },
      bg: { name: "Chocolate Trilogy Cup", description: "Шоколадова Трилогия в чаша: Десерт в чашка с три слоя различни шоколадови пралини" },
      ro: { name: "Chocolate Trilogy Cup", description: "Trilogie de Ciocolată la pahar: Desert la pahar cu trei straturi de praline de ciocolată diferite" }
    }
  },
  {
    id: "pastaki_strawberry_chocolate",
    categoryId: "pastakia",
    price: 1.50,
    isGlutenFree: true,
    hasStrawberry: true,
    translations: {
      el: { name: "Ποτηράκι Φράουλα - Σοκολάτα", description: "Συνδυασμός πραλίνας φράουλας και σοκολάτας σε ποτηράκι" },
      en: { name: "Strawberry-Chocolate Cup", description: "Strawberry and chocolate praline combined in a cup" },
      de: { name: "Strawberry-Chocolate Cup", description: "Erdbeer-Schoko-Becher: Kombination aus Erdbeer- und Schokoladenpraline im Becher" },
      fr: { name: "Strawberry-Chocolate Cup", description: "Coupe Fraise-Chocolat: Association de praliné fraise et chocolat en coupe" },
      es: { name: "Strawberry-Chocolate Cup", description: "Copa de Fresa y Chocolate: Combinación de praliné de fresa y chocolate en vasito" },
      sr: { name: "Strawberry-Chocolate Cup", description: "Jagoda-Čokolada u čaši: Kombinacija praline od jagode i čokolade u čašici" },
      bg: { name: "Strawberry-Chocolate Cup", description: "Ягода и Шоколад в чаша: Комбинация от ягодова и шоколадова пралина в чашка" },
      ro: { name: "Strawberry-Chocolate Cup", description: "Căpșuni-Ciocolată la pahar: Combinație de pralină de căpșuni și ciocolată la pahar" }
    }
  },
  {
    id: "pastaki_cream_strawberry",
    categoryId: "pastakia",
    price: 1.50,
    isGlutenFree: true,
    hasStrawberry: true,
    translations: {
      el: { name: "Ποτηράκι Κρέμα - Φράουλα", description: "Γλυκό σε ποτηράκι με συνδυασμό λευκής κρέμας και πραλίνας φράουλας" },
      en: { name: "Cream-Strawberry Cup", description: "Dessert cup combining white cream and strawberry praline" },
      de: { name: "Cream-Strawberry Cup", description: "Creme-Erdbeer-Becher: Dessert im Becher mit weißer Creme und Erdbeerpraline" },
      fr: { name: "Cream-Strawberry Cup", description: "Coupe Crème-Fraise: Dessert en coupe associant crème blanche et praliné fraise" },
      es: { name: "Cream-Strawberry Cup", description: "Copa Crema-Fresa: Postre en vasito que combina crema blanca y praliné de fresa" },
      sr: { name: "Cream-Strawberry Cup", description: "Krem-Jagoda u čaši: Desert u čašici sa belim kremom i pralinom od jagode" },
      bg: { name: "Cream-Strawberry Cup", description: "Крем-Ягода в чаша: Десерт в чашка с бял крем и ягодова пралина" },
      ro: { name: "Cream-Strawberry Cup", description: "Cremă-Căpșuni la pahar: Desert la pahar cu cremă albă și pralină de căpșuni" }
    }
  },
  {
    id: "pastaki_choco_straw_pistachio",
    categoryId: "pastakia",
    price: 1.50,
    isGlutenFree: true,
    hasStrawberry: true,
    hasNuts: true,
    translations: {
      el: { name: "Ποτηράκι Σοκολάτα - Φράουλα - Φυστίκι", description: "Πραλίνες σε ποτηράκι με συνδυασμό σοκολάτας, φράουλας και φυστικιού" },
      en: { name: "Choco-Strawberry-Pistachio Cup", description: "Pralines in a cup combining chocolate, strawberry, and pistachio" },
      de: { name: "Choco-Strawberry-Pistachio Cup", description: "Schoko-Erdbeer-Pistazien-Becher: Pralinen im Becher mit Schokolade, Erdbeere und Pistazie" },
      fr: { name: "Choco-Strawberry-Pistachio Cup", description: "Coupe Choco-Fraise-Pistache: Pralinés en coupe associant chocolat, fraise et pistache" },
      es: { name: "Choco-Strawberry-Pistachio Cup", description: "Copa Choco-Fresa-Pistacho: Pralinés en vasito que combinan chocolate, fresa y pistacho" },
      sr: { name: "Choco-Strawberry-Pistachio Cup", description: "Čoko-Jagoda-Pistaći u čaši: Praline u čašici sa čokoladom, jagodom i pistaćima" },
      bg: { name: "Choco-Strawberry-Pistachio Cup", description: "Шоко-Ягода-Шамфъстък в чаша: Пралини в чашка с шоколад, ягода и шамфъстък" },
      ro: { name: "Choco-Strawberry-Pistachio Cup", description: "Cioco-Căpșuni-Fistic la pahar: Praline la pahar cu ciocolată, căpșuni și fistic" }
    }
  },

  // --- ΠΟΤΗΡΑΚΙΑ (ΜΕ ΒΑΣΗ ΜΠΙΣΚΟΤΟΥ - ΟΧΙ GLUTEN FREE) ---
  {
    id: "pastaki_lotus",
    categoryId: "pastakia",
    price: 1.50,
    translations: {
      el: { name: "Ποτηράκι Lotus Biscoff", description: "Γλυκό σε ποτηράκι με πραλίνα Lotus και τριμμένο μπισκότο" },
      en: { name: "Lotus Biscoff Cup", description: "Dessert cup with Lotus cream and crumbled Lotus biscuit" },
      de: { name: "Lotus Biscoff Cup", description: "Lotus Biscoff Becher: Dessert im Becher mit Lotus-Creme und zerbröseltem Keks" },
      fr: { name: "Lotus Biscoff Cup", description: "Coupe Lotus Biscoff: Dessert en coupe avec crème Lotus et biscuit émietté" },
      es: { name: "Lotus Biscoff Cup", description: "Copa Lotus Biscoff: Postre en vasito con crema Lotus y galleta triturada" },
      sr: { name: "Lotus Biscoff Cup", description: "Lotus Biscoff u čaši: Desert u čašici sa Lotus kremom i mlevenim keksom" },
      bg: { name: "Lotus Biscoff Cup", description: "Лотус в чаша: Десерт в чашка с крем Лотус и натрошени бисквити" },
      ro: { name: "Lotus Biscoff Cup", description: "Lotus Biscoff la pahar: Desert la pahar cu cremă Lotus și biscuiți zdrobiți" }
    }
  },
  {
    id: "pastaki_biscuit",
    categoryId: "pastakia",
    price: 1.50,
    translations: {
      el: { name: "Ποτηράκι Μπισκότο", description: "Γλυκό σε ποτηράκι με πραλίνα μπισκότου και τριμμένο μπισκότο" },
      en: { name: "Biscuit Cream Cup", description: "Dessert cup with biscuit praline and crumbled biscuit" },
      de: { name: "Biscuit Cream Cup", description: "Keks-Creme-Becher: Dessert im Becher mit Keks-Praline und zerbröseltem Keks" },
      fr: { name: "Biscuit Cream Cup", description: "Coupe Crème Biscuit: Dessert en coupe avec praliné biscuit et biscuit émietté" },
      es: { name: "Biscuit Cream Cup", description: "Copa Crema de Galleta: Postre en vasito con praliné de galleta y galleta triturada" },
      sr: { name: "Biscuit Cream Cup", description: "Krem od Keksa u čaši: Desert u čašici sa pralinom od keksa i mlevenim keksom" },
      bg: { name: "Biscuit Cream Cup", description: "Бисквитен Крем в чаша: Десерт в чашка с бисквитена пралина и натрошени бисквити" },
      ro: { name: "Biscuit Cream Cup", description: "Cremă de Biscuiți la pahar: Desert la pahar cu pralină de biscuiți și biscuiți zdrobiți" }
    }
  },
  {
    id: "pastaki_cheesecake",
    categoryId: "pastakia",
    price: 1.50,
    hasCherry: true,
    translations: {
      el: { name: "Ποτηράκι Cheesecake", description: "Cheesecake σε ποτηράκι με απαλή κρέμα, βύσσινο και βάση μπισκότου" },
      en: { name: "Cheesecake Cup", description: "Cheesecake in a cup with soft cream, sour cherry and biscuit base" },
      de: { name: "Cheesecake Cup", description: "Cheesecake Becher: Käsekuchen im Becher mit sanfter Creme, Sauerkirschen und Keksboden" },
      fr: { name: "Cheesecake Cup", description: "Coupe Cheesecake: Cheesecake en coupe avec crème onctueuse, griottes et base de biscuit" },
      es: { name: "Cheesecake Cup", description: "Copa Cheesecake: Cheesecake en vasito con crema suave, cerezas ácidas y base de galleta" },
      sr: { name: "Cheesecake Cup", description: "Čizkejk u čaši: Čizkejk u čašici sa nežnim kremom, višnjom i podlogom od keksa" },
      bg: { name: "Cheesecake Cup", description: "Чийзкейк в чаша: Чийзкейк в чашка с мек крем, вишни и бисквитена основа" },
      ro: { name: "Cheesecake Cup", description: "Cheesecake la pahar: Cheesecake la pahar cu cremă fină, vișine și bază de biscuiți" }
    }
  },
  {
    id: "pastaki_lemon_pie",
    categoryId: "pastakia",
    price: 1.50,
    hasCitrus: true,
    translations: {
      el: { name: "Ποτηράκι Lemon Pie", description: "Lemon Pie σε ποτηράκι με λεμονάτη γέμιση, κρέμα και βάση μπισκότου" },
      en: { name: "Lemon Pie Cup", description: "Lemon pie in a cup with tangy filling, cream and biscuit base" },
      de: { name: "Lemon Pie Cup", description: "Lemon Pie Becher: Lemon Pie im Becher mit Zitronenfüllung, Creme und Keksboden" },
      fr: { name: "Lemon Pie Cup", description: "Coupe Tarte au Citron: Tarte au citron en coupe avec garniture acidulée, crème et base de biscuit" },
      es: { name: "Lemon Pie Cup", description: "Copa Pastel de Limón: Pastel de limón en vasito con relleno ácido, crema y base de galleta" },
      sr: { name: "Lemon Pie Cup", description: "Lemon paj u čaši: Limunasti nadev u čašici sa kremom i podlogom od keksa" },
      bg: { name: "Lemon Pie Cup", description: "Лимонов пай в чаша: Лимонов пай в чашка с тръпчив пълнеж, крем и бисквитена основа" },
      ro: { name: "Lemon Pie Cup", description: "Plăcintă cu Lămâie la pahar: Plăcintă cu lămâie la pahar cu umplutură acrișoară, cremă și bază de biscuiți" }
    }
  },
  {
    id: "tartaki_lemon_pie",
    categoryId: "pastakia",
    price: 1.30,
    hasCitrus: true,
    translations: {
      el: { name: "Ταρτάκι Lemon Pie", description: "Μικρή τάρτα με λεμονόκρεμα" },
      en: { name: "Mini Lemon Tart", description: "Small tart with tangy lemon cream" },
      de: { name: "Mini Lemon Tart", description: "Kleine Zitronentarte: Kleine Tarte mit Zitronencreme" },
      fr: { name: "Mini Lemon Tart", description: "Mini Tarte au Citron: Petite tarte à la crème de citron" },
      es: { name: "Mini Lemon Tart", description: "Mini Tarta de Limón: Pequeña tarta con crema de limón" },
      sr: { name: "Mini Lemon Tart", description: "Mini Tart od Limuna: Mala korpica sa kremom od limuna" },
      bg: { name: "Mini Lemon Tart", description: "Мини Лимонов Тарт: Малък тарт с лимонов крем" },
      ro: { name: "Mini Lemon Tart", description: "Mini Tartă cu Lămâie: Tartă mică cu cremă de lămâie" }
    }
  },
  {
    id: "tartaki_fruit",
    categoryId: "pastakia",
    price: 1.30,
    translations: {
      el: { name: "Ταρτάκι Φρούτα & Κρέμα", description: "Μικρή τάρτα με φρέσκα φρούτα και κρέμα πατισερί" },
      en: { name: "Mini Fruit Tart with Cream", description: "Small tart filled with pastry cream and fresh fruits" },
      de: { name: "Mini Fruit Tart with Cream", description: "Kleine Fruchttarte: Kleine Tarte gefüllt mit Konditorcreme und frischen Früchten" },
      fr: { name: "Mini Fruit Tart with Cream", description: "Mini tarte aux fruits: Petite tarte garnie de crème pâtissière et de fruits frais" },
      es: { name: "Mini Fruit Tart with Cream", description: "Mini tarta de frutas: Pequeña tarta rellena de crema pastelera y frutas frescas" },
      sr: { name: "Mini Fruit Tart with Cream", description: "Mini voćni tart sa kremom: Mala korpica punjena poslastičarskim kremom i svežim voćem" },
      bg: { name: "Mini Fruit Tart with Cream", description: "Мини плодов тарт с крем: Малък тарт, пълен със сладкарски крем и пресни плодове" },
      ro: { name: "Mini Fruit Tart with Cream", description: "Mini tartă cu fructe și cremă: Tartă mică umplută cu cremă de patiserie și fructe proaspete" }
    }
  },

  // --- ΚΩΚΑΚΙΑ ---
  {
    id: "kokaki",
    categoryId: "pastakia",
    price: 1.30,
    translations: {
      el: { name: "Κωκάκι", description: "Μαλακό παντεσπάνι με γέμιση βανίλιας και σοκολατένια επικάλυψη" },
      en: { name: "Kokaki", description: "Soft sponge cake with vanilla filling and chocolate glaze" },
      de: { name: "Kokaki", description: "Kokaki: Weicher Biskuitkuchen mit Vanillefüllung und Schokoladenglasur" },
      fr: { name: "Kokaki", description: "Kokaki: Génoise moelleuse fourrée à la vanille et glaçage au chocolat" },
      es: { name: "Kokaki", description: "Kokaki: Bizcocho suave con relleno de vainilla y cobertura de chocolate" },
      sr: { name: "Kokaki", description: "Kokaki: Mekani patišpanj sa vanila punjenjem i čokoladnom glazurom" },
      bg: { name: "Kokaki", description: "Кокаки: Мек пандишпан с ванилов пълнеж и шоколадова глазура" },
      ro: { name: "Kokaki", description: "Kokaki: Pandișpan moale cu umplutură de vanilie și glazură de ciocolată" }
    }
  },
  {
    id: "kokaki_white",
    categoryId: "pastakia",
    price: 1.30,
    hasNuts: true,
    translations: {
      el: { name: "Κωκάκι με Λευκή Σοκολάτα", description: "Κλασικό κωκάκι με επικάλυψη λευκής σοκολάτας και αμύγδαλο" },
      en: { name: "Kokaki with White Chocolate", description: "Classic kokaki topped with white chocolate" },
      de: { name: "Kokaki with White Chocolate", description: "Weißes Kokaki: Klassisches Kokaki überzogen mit weißer Schokolade" },
      fr: { name: "Kokaki with White Chocolate", description: "Kokaki au chocolat blanc: Kokaki classique nappé de chocolat blanc" },
      es: { name: "Kokaki with White Chocolate", description: "Kokaki con chocolate blanco: Kokaki clásico cubierto con chocolate blanco" },
      sr: { name: "Kokaki with White Chocolate", description: "Kokaki sa belom čokoladom: Klasični kokaki sa prelivom od bele čokolade" },
      bg: { name: "Kokaki with White Chocolate", description: "Кокаки с бял шоколад: Класическо кокаки с глазура от бял шоколад" },
      ro: { name: "Kokaki with White Chocolate", description: "Kokaki cu ciocolată albă: Kokaki clasic acoperit cu ciocolată albă" }
    }
  },
  {
    id: "kokaki_ferrero",
    categoryId: "pastakia",
    price: 1.30,
    hasNuts: true,
    translations: {
      el: { name: "Κωκάκι με Ferrero", description: "Κλασσικό κωκάκι με επικάλυψη Ferrero" },
      en: { name: "Kokaki with Ferrero", description: "Classic kokaki topped with Ferrero praline" },
      de: { name: "Kokaki with Ferrero", description: "Ferrero-Kokaki: Klassisches Kokaki überzogen mit Ferrero-Pralinencreme" },
      fr: { name: "Kokaki with Ferrero", description: "Kokaki au Ferrero: Kokaki classique nappé de praliné Ferrero" },
      es: { name: "Kokaki with Ferrero", description: "Kokaki con Ferrero: Kokaki clásico cubierto con praliné Ferrero" },
      sr: { name: "Kokaki with Ferrero", description: "Kokaki sa Ferero prelivom: Klasični kokaki sa Ferero prelivom" },
      bg: { name: "Kokaki with Ferrero", description: "Кокаки с Фереро: Класическо кокаки с Фереро глазура" },
      ro: { name: "Kokaki with Ferrero", description: "Kokaki cu Ferrero: Kokaki clasic acoperit cu pralină Ferrero" }
    }
  },
  {
    id: "chionoula",
    categoryId: "pastakia",
    price: 1.30,
    translations: {
      el: { name: "Χιονούλα", description: "Κλασσικό κωκάκι με επικάλυψη Ινδοκάρυδου" },
      en: { name: "Kokaki with Desiccated Coconut (Chionoula)", description: "Classic kokaki topped with desiccated coconut" },
      de: { name: "Kokaki with Desiccated Coconut (Chionoula)", description: "Chionoula: Klassisches Kokaki überzogen mit Kokosraspeln" },
      fr: { name: "Kokaki with Desiccated Coconut (Chionoula)", description: "Chionoula: Kokaki classique saupoudré de noix de coco râpée" },
      es: { name: "Kokaki with Desiccated Coconut (Chionoula)", description: "Chionoula: Kokaki clásico cubierto con coco rallado" },
      sr: { name: "Kokaki with Desiccated Coconut (Chionoula)", description: "Hionula: Klasični kokaki sa kokosovim brašnom" },
      bg: { name: "Kokaki with Desiccated Coconut (Chionoula)", description: "Хионула: Класическо кокаки, покрито с кокосови стърготини" },
      ro: { name: "Kokaki with Desiccated Coconut (Chionoula)", description: "Chionoula: Kokaki clasic acoperit cu fulgi de nucă de cocos" }
    }
  },
  {
    id: "kokaki_troufa",
    categoryId: "pastakia",
    price: 1.30,
    translations: {
      el: { name: "Κωκάκι με επικάλυψη Τρούφας", description: "Κωκάκι με γέμιση σοκολάτας και επικάλυψη τρούφας" },
      en: { name: "Kokaki with Chocolate Sprinkles", description: "Kokaki filled with chocolate topped with chocolate sprinkles" },
      de: { name: "Kokaki with Chocolate Sprinkles", description: "Schokostreusel-Kokaki: Kokaki gefüllt mit Schokolade, bedeckt mit Schokostreuseln" },
      fr: { name: "Kokaki with Chocolate Sprinkles", description: "Kokaki aux vermicelles en chocolat: Kokaki fourré au chocolat et recouvert de vermicelles" },
      es: { name: "Kokaki with Chocolate Sprinkles", description: "Kokaki con trufa de chocolate: Kokaki relleno de chocolate y cubierto con chispas de chocolate" },
      sr: { name: "Kokaki with Chocolate Sprinkles", description: "Čokoladno trufaki: Kokaki punjen čokoladom i preliven čokoladnim mrvicama" },
      bg: { name: "Kokaki with Chocolate Sprinkles", description: "Труфаки: Кокаки с шоколадов пълнеж и шоколадови пръчици" },
      ro: { name: "Kokaki with Chocolate Sprinkles", description: "Kokaki cu trufe de ciocolată: Kokaki umplut cu ciocolată și acoperit cu fulgi de ciocolată" }
    }
  },

  // --- ΚΟΡΜΟΙ / ΤΡΟΥΦΑΚΙΑ / ΔΙΑΦΟΡΑ ---
  {
    id: "troufaki_original",
    categoryId: "pastakia",
    price: 1.30,
    translations: {
      el: { name: "Τρουφάκι", description: "Ζύμη τύπου κορμού με σοκολάτα, σε σχήμα μικρής μπουκιάς με τρούφα" },
      en: { name: "Classic Chocolate Truffle", description: "Bite-sized mosaic dough mixed with chocolate, coated in chocolate sprinkles" },
      de: { name: "Classic Chocolate Truffle", description: "Klassischer Schokotrüffel: Mundgerechter Schokoladenteig, umhüllt von Schokostreuseln" },
      fr: { name: "Classic Chocolate Truffle", description: "Truffe au Chocolat Classique: Pâte mosaïque au chocolat de la taille d'une bouchée, enrobée de vermicelles" },
      es: { name: "Classic Chocolate Truffle", description: "Trufa de Chocolate Clásica: Masa tipo mosaico con chocolate tamaño bocado, cubierta con chispas" },
      sr: { name: "Classic Chocolate Truffle", description: "Klasični Čokoladni Tartuf: Zalogaj mozaik testa sa čokoladom, preliven mrvicama" },
      bg: { name: "Classic Chocolate Truffle", description: "Класически Шоколадов Трюфел: Хапка от мозаечно тесто с шоколад, покрита с пръчици" },
      ro: { name: "Classic Chocolate Truffle", description: "Trufă de Ciocolată Clasică: Bucată de aluat mozaic cu ciocolată, acoperită cu fulgi" }
    }
  },
  {
    id: "pastaki_mosaic",
    categoryId: "pastakia",
    price: 1.30,
    translations: {
      el: { name: "Κορμός", description: "Μπισκότα με σοκολάτα, σε σχήμα μικρού κορμού" },
      en: { name: "Chocolate Log/Mosaic", description: "Biscuits blended with chocolate, freezed in a log-like form" },
      de: { name: "Chocolate Log/Mosaic", description: "Schokoladen-Mosaik: Kekse gemischt mit Schokolade, in Rollenform gefroren" },
      fr: { name: "Chocolate Log/Mosaic", description: "Saucisson au chocolat: Biscuits mélangés avec du chocolat, en forme de bûche" },
      es: { name: "Chocolate Log/Mosaic", description: "Tronco de chocolate: Galletas mezcladas con chocolate, en forma de tronco" },
      sr: { name: "Chocolate Log/Mosaic", description: "Čokoladni rolat / Mozaik: Keks pomešan sa čokoladom, u obliku rolata" },
      bg: { name: "Chocolate Log/Mosaic", description: "Сладък салам / Мозайка: Бисквити, смесени с шоколад, във формата на руло" },
      ro: { name: "Chocolate Log/Mosaic", description: "Salam de biscuiți / Mozaic: Biscuiți amestecați cu ciocolată, sub formă de rulou" }
    }
  },
  {
    id: "mpampadaki",
    categoryId: "pastakia",
    price: 1.30,
    hasNuts: true,
    translations: {
      el: { name: "Μπαμπαδάκι", description: "Ατομικό γλυκό μπριός με σιρόπι, σαντιγύ και αμύγδαλο" },
      en: { name: "Mini Rum Baba", description: "Small syrup-soaked brioche topped with whipped cream" },
      de: { name: "Mini Rum Baba", description: "Kleiner Rum Baba: Kleines, in Sirup getränktes Brioche-Gebäck mit Sahne-Topping" },
      fr: { name: "Mini Rum Baba", description: "Mini baba au rhum: Petit gâteau brioché imbibé de sirop, avec crème" },
      es: { name: "Mini Rum Baba", description: "Mini baba al ron: Dulce individual de brioche empapado en almíbar, con crema" },
      sr: { name: "Mini Rum Baba", description: "Mini baba sa rumom: Mali brioš kolač natopljen sirupom i prelivena kremom" },
      bg: { name: "Mini Rum Baba", description: "Мини баба с ром: Малък бриош сладкиш, напоен със сироп, със сметана" },
      ro: { name: "Mini Rum Baba", description: "Mini baba cu rom: Aluat mic tip brioșă însiropat, servit cu cremă" }
    }
  },
  {
    id: "cake_pop",
    categoryId: "pastakia",
    price: 1.30,
    translations: {
      el: { name: "Cake Pop", description: "Μικρό στρογγυλό κέικ σε ξυλάκι, βουτηγμένο σε χρωματιστή σοκολάτα και τρούφα" },
      en: { name: "Cake Pop", description: "Round bite-sized cake on a stick, dipped in chocolate and colorful truffle" },
      de: { name: "Cake Pop", description: "Cake Pop: Kleiner runder Kuchen am Stiel, in bunte Schokolade getaucht mit bunten Streuseln" },
      fr: { name: "Cake Pop", description: "Cake pop: Petit gâteau rond sur un bâtonnet, enrobé de chocolat coloré et de vermicelles" },
      es: { name: "Cake Pop", description: "Cake Pop: Pequeño bizcocho redondo en piruleta, bañado en chocolate y chispas de colores" },
      sr: { name: "Cake Pop", description: "Kejk pop: Mali okrugli kolač na štapiću, umočen u čokoladu i šarene mrvice" },
      bg: { name: "Cake Pop", description: "Кейк поп: Малък кръгъл кейк на клечка, потопен в цветен шоколад и пръчици" },
      ro: { name: "Cake Pop", description: "Cake pop: Prăjitură mică rotundă pe bețișor, înmuiată în ciocolată și decorată cu fulgi" }
    }
  }
];