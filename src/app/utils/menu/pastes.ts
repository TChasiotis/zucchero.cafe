import { MenuItem } from "../menuData";

export const pastes: MenuItem[] = [
  {
    id: "profiterol",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    isPopular: true,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Προφιτερόλ", description: "Σου γεμισμένα με κρέμα πατισερί και επικάλυψη σοκολάτας" },
      en: { name: "Profiterole", description: "Choux puffs filled with patisserie cream and topped with chocolate glaze" },
      de: { name: "Profiterole", description: "Profiterol: Brandteigkrapfen gefüllt mit Konditorcreme und überzogen mit Schokoladenglasur" },
      fr: { name: "Profiterole", description: "Profiteroles: Choux farcis de crème pâtissière et recouverts de glaçage au chocolat" },
      es: { name: "Profiterole", description: "Profiteroles: Lionesas rellenas de crema pastelera y cubiertas con glaseado de chocolate" },
      sr: { name: "Profiterole", description: "Profiterole: Princes krofne punjene poslastičarskim kremom i prelivene čokoladnom glazurom" },
      bg: { name: "Profiterole", description: "Профитероли: Еклери, пълнени с сладкарски крем и залети с шоколадова глазура" },
      ro: { name: "Profiterole", description: "Profiterol: Choux-uri umplute cu cremă de patiserie și acoperite cu glazură de ciocolată" }
    }
  },
  {
    id: "vegan_profiterol",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    isVegan: true,
    hasSoy: true,
    translations: {
      el: { name: "Νηστίσιμο/Vegan Προφιτερόλ", description: "Σου γεμισμένα με φυτική σαντιγί και επικάλυψη σοκολάτας" },
      en: { name: "Vegan Profiterole", description: "Choux puffs filled with vegetable whipped cream and topped with non-milk chocolate glaze" },
      de: { name: "Vegan Profiterole", description: "Veganes Profiterol: Brandteigkrapfen gefüllt mit pflanzlicher Schlagsahne und milchfreier Schokoladenglasur" },
      fr: { name: "Vegan Profiterole", description: "Profiteroles Végétaliennes: Choux farcis de crème chantilly végétale et glaçage au chocolat sans lait" },
      es: { name: "Vegan Profiterole", description: "Profiteroles Veganos: Lionesas rellenas de crema batida vegetal y glaseado de chocolate sin lácteos" },
      sr: { name: "Vegan Profiterole", description: "Veganske Profiterole: Princes krofne punjene biljnim šlagom i prelivene posnom čokoladom" },
      bg: { name: "Vegan Profiterole", description: "Веган Профитероли: Еклери с растителна сметана и веган шоколадова глазура" },
      ro: { name: "Vegan Profiterole", description: "Profiterol Vegan: Choux-uri umplute cu frișcă vegetală și glazură de ciocolată fără lapte" }
    }
  },
  {
    id: "millefeuille",
    categoryId: "pastes",
    price: 4.0,
    isSoldOut: false,
    isPopular: true,
    hasNuts: true,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Μιλφέιγ", description: "Τραγανές στρώσεις σφολιάτας με κρέμα πατισερί" },
      en: { name: "Mille-feuille", description: "Flaky layers of puff pastry with patisserie cream" },
      de: { name: "Mille-feuille", description: "Mille-feuille: Knusprige Blätterteigschichten mit Konditorcreme" },
      fr: { name: "Mille-feuille", description: "Mille-feuille: Couches croustillantes de pâte feuilletée avec crème pâtissière" },
      es: { name: "Mille-feuille", description: "Milhojas: Capas crujientes de hojaldre con crema pastelera" },
      sr: { name: "Mille-feuille", description: "Milfej (Mille-feuille): Hrskavi slojevi lisnatog testa sa poslastičarskim kremom" },
      bg: { name: "Mille-feuille", description: "Милфьой: Хрупкави слоеве бутер тесто със сладкарски крем" },
      ro: { name: "Mille-feuille", description: "Mille-feuille: Straturi crocante de foietaj cu cremă de patiserie" }
    }
  },
  {
    id: "serrano",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Πάστα Σοκολατίνα (Σεράνο)", description: "Πάστα σοκολατίνα με πλούσια γεύση σοκολάτας" },
      en: { name: "Chocolate Serrano Pastry", description: "Rich chocolate pastry" },
      de: { name: "Chocolate Serrano Pastry", description: "Serrano Schokoladentorte: Reichhaltiges Schokoladengebäck" },
      fr: { name: "Chocolate Serrano Pastry", description: "Pâtisserie Serrano au Chocolat: Gâteau riche au chocolat" },
      es: { name: "Chocolate Serrano Pastry", description: "Pastel Serrano de Chocolate: Pastel rico en chocolate" },
      sr: { name: "Chocolate Serrano Pastry", description: "Čokoladna torta Serrano: Bogati čokoladni kolač" },
      bg: { name: "Chocolate Serrano Pastry", description: "Шоколадова паста Серано: Богат шоколадов сладкиш" },
      ro: { name: "Chocolate Serrano Pastry", description: "Prăjitură Serrano cu Ciocolată: Prăjitură bogată în ciocolată" }
    }
  },
  {
    id: "nutella_pastry",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasNuts: true,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Πάστα Nutella", description: "Αφράτη πάστα γεμιστή με κρέμα νουτέλας" },
      en: { name: "Nutella Cream Pastry", description: "Soft pastry filled with Nutella-flavored cream" },
      de: { name: "Nutella Cream Pastry", description: "Nutella-Törtchen: Weiches Gebäck gefüllt mit Nutella-Creme" },
      fr: { name: "Nutella Cream Pastry", description: "Pâtisserie au Nutella: Pâtisserie moelleuse fourrée à la crème Nutella" },
      es: { name: "Nutella Cream Pastry", description: "Pastel de Nutella: Pastel suave relleno de crema con sabor a Nutella" },
      sr: { name: "Nutella Cream Pastry", description: "Nutela kolač: Mekani kolač punjen kremom sa ukusom Nutele" },
      bg: { name: "Nutella Cream Pastry", description: "Паста Нутела: Мек сладкиш с крем Нутела" },
      ro: { name: "Nutella Cream Pastry", description: "Prăjitură Nutella: Prăjitură pufoasă umplută cu cremă Nutella" }
    }
  },
  {
    id: "vanilla_chocolate",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Πάστα Κρέμα-Σοκολάτα", description: "Αφράτη πάστα με βανίλια και σοκολατένια κρέμα" },
      en: { name: "Vanilla-Chocolate Cream Pastry", description: "Fluffy pastry with vanilla and chocolate custard layers" },
      de: { name: "Vanilla-Chocolate Cream Pastry", description: "Vanille-Schoko-Törtchen: Fluffiges Gebäck mit Vanille- und Schokoladencremeschichten" },
      fr: { name: "Vanilla-Chocolate Cream Pastry", description: "Pâtisserie Vanille-Chocolat: Pâtisserie moelleuse aux couches de crème vanille et chocolat" },
      es: { name: "Vanilla-Chocolate Cream Pastry", description: "Pastel de Vainilla y Chocolate: Pastel esponjoso con capas de crema de vainilla y chocolate" },
      sr: { name: "Vanilla-Chocolate Cream Pastry", description: "Kolač Vanila-Čokolada: Vazdušasti kolač sa slojevima vanila i čokoladnog krema" },
      bg: { name: "Vanilla-Chocolate Cream Pastry", description: "Паста Ванилия-Шоколад: Пухкав сладкиш със слоеве ванилов и шоколадов крем" },
      ro: { name: "Vanilla-Chocolate Cream Pastry", description: "Prăjitură Vanilie-Ciocolată: Prăjitură pufoasă cu straturi de cremă de vanilie și ciocolată" }
    }
  },
  {
    id: "biscuit_pastry",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Πάστα Μπισκότο", description: "Ελαφριά πάστα με κρέμα μπισκότου και σοκολάτα" },
      en: { name: "Biscuit Cream Pastry", description: "Light pastry with a biscuit based cream and chocolate filling" },
      de: { name: "Biscuit Cream Pastry", description: "Keks-Törtchen: Leichtes Gebäck mit Kekscreme und Schokoladenfüllung" },
      fr: { name: "Biscuit Cream Pastry", description: "Pâtisserie au Biscuit: Pâtisserie légère avec crème au biscuit et garniture au chocolat" },
      es: { name: "Biscuit Cream Pastry", description: "Pastel de Galleta: Pastel ligero con crema de galleta y relleno de chocolate" },
      sr: { name: "Biscuit Cream Pastry", description: "Keks kolač: Lagani kolač sa keks kremom i čokoladnim punjenjem" },
      bg: { name: "Biscuit Cream Pastry", description: "Бисквитена паста: Лек сладкиш с бисквитен крем и шоколадов пълнеж" },
      ro: { name: "Biscuit Cream Pastry", description: "Prăjitură cu Biscuiți: Prăjitură ușoară cu cremă de biscuiți și umplutură de ciocolată" }
    }
  },
  {
    id: "black_forest",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Πάστα Black Forest", description: "Πάστα σοκολάτας με στρώσεις από βύσσινα" },
      en: { name: "Black Forest Pastry", description: "Chocolate cake layered with sour cherries and chocolate" },
      de: { name: "Black Forest Pastry", description: "Schwarzwälder Kirschtorte: Schokoladenkuchen geschichtet mit Sauerkirschen und Schokolade" },
      fr: { name: "Black Forest Pastry", description: "Forêt-Noire: Gâteau au chocolat avec couches de griottes et chocolat" },
      es: { name: "Black Forest Pastry", description: "Selva Negra: Pastel de chocolate en capas con cerezas ácidas y chocolate" },
      sr: { name: "Black Forest Pastry", description: "Švarcvald kolač: Čokoladni kolač sa slojevima višanja i čokolade" },
      bg: { name: "Black Forest Pastry", description: "Шварцвалд паста: Шоколадова торта със слоеве от вишни и шоколад" },
      ro: { name: "Black Forest Pastry", description: "Prăjitură Pădurea Neagră: Prăjitură de ciocolată cu straturi de vișine și ciocolată" }
    }
  },
  {
    id: "lotus_biscoff",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Πάστα Lotus Biscoff", description: "Γλυκό με βάση και επικάλυψη από μπισκότο Lotus και κρέμα Lotus σε κυπελάκι" },
      en: { name: "Lotus Biscoff Pastry", description: "Pastry with Lotus Biscoff biscuit base and creamy Lotus topping" },
      de: { name: "Lotus Biscoff Pastry", description: "Lotus Biscoff Dessert: Dessert im Becher mit Lotus-Keksboden und cremiger Lotus-Füllung" },
      fr: { name: "Lotus Biscoff Pastry", description: "Pâtisserie Lotus Biscoff: Dessert en coupe avec base de biscuits Lotus et crème Lotus" },
      es: { name: "Lotus Biscoff Pastry", description: "Pastel Lotus Biscoff: Postre en copa con base de galleta Lotus y crema Lotus" },
      sr: { name: "Lotus Biscoff Pastry", description: "Lotus Biscoff kolač: Desert u čaši sa bazom od Lotus keksa i Lotus kremom" },
      bg: { name: "Lotus Biscoff Pastry", description: "Паста Lotus Biscoff: Десерт в чашка с основа от бисквити Лотус и крем Лотус" },
      ro: { name: "Lotus Biscoff Pastry", description: "Prăjitură Lotus Biscoff: Desert la pahar cu bază de biscuiți Lotus și cremă Lotus" }
    }
  },
  {
    id: "banoffee",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Μπανόφι", description: "Τριμένο μπισκότο με μπανάνα και καραμέλα" },
      en: { name: "Banoffee", description: "Crushed biscuits with banana and caramel" },
      de: { name: "Banoffee", description: "Banoffee: Zerbröselte Kekse mit Banane und Karamell" },
      fr: { name: "Banoffee", description: "Banoffee: Biscuits écrasés avec banane et caramel" },
      es: { name: "Banoffee", description: "Banoffee: Galletas trituradas con plátano y caramelo" },
      sr: { name: "Banoffee", description: "Banofi (Banoffee): Mleveni keks sa bananom i karamelom" },
      bg: { name: "Banoffee", description: "Банофи: Натрошени бисквити с банан и карамел" },
      ro: { name: "Banoffee", description: "Banoffee: Biscuiți zdrobiți cu banane și caramel" }
    }
  },
  {
    id: "truffle",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Τρούφα", description: "Κωκ με γέμιση σοκολάτας και επικάλυψη τρούφας" },
      en: { name: "Chocolate Truffle", description: "Sponge cake filled with chocolate, covered in chocolate sprinkles" },
      de: { name: "Chocolate Truffle", description: "Schokotrüffel: Biskuitkuchen gefüllt mit Schokolade, bedeckt mit Schokostreuseln" },
      fr: { name: "Chocolate Truffle", description: "Truffe au Chocolat: Génoise fourrée au chocolat, recouverte de vermicelles en chocolat" },
      es: { name: "Chocolate Truffle", description: "Trufa de Chocolate: Bizcocho relleno de chocolate, cubierto con chispas de chocolate" },
      sr: { name: "Chocolate Truffle", description: "Čokoladni Tartuf: Patišpanj punjen čokoladom, preliven čokoladnim mrvicama" },
      bg: { name: "Chocolate Truffle", description: "Шоколадов Трюфел: Пандишпан с шоколадов пълнеж, покрит с шоколадови пръчици" },
      ro: { name: "Chocolate Truffle", description: "Trufă de Ciocolată: Pandișpan umplut cu ciocolată, acoperit cu fulgi de ciocolată" }
    }
  },
  {
    id: "souffle",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Σουφλέ Σοκολάτας", description: "Ζεστό επιδόρπιο με μαλακό σοκολατένιο εσωτερικό" },
      en: { name: "Chocolate Soufflé", description: "Warm, soft-centered chocolate dessert" },
      de: { name: "Chocolate Soufflé", description: "Schokoladensoufflé: Warmes Schokoladendessert mit weichem Kern" },
      fr: { name: "Chocolate Soufflé", description: "Soufflé au Chocolat: Dessert chaud au chocolat au cœur coulant" },
      es: { name: "Chocolate Soufflé", description: "Soufflé de Chocolate: Postre caliente de chocolate con centro líquido" },
      sr: { name: "Chocolate Soufflé", description: "Čokoladni Sufle: Topli čokoladni desert sa tečnim središtem" },
      bg: { name: "Chocolate Soufflé", description: "Шоколадово Суфле: Топъл шоколадов десерт с мека сърцевина" },
      ro: { name: "Chocolate Soufflé", description: "Sufleu de Ciocolată: Desert cald de ciocolată cu mijloc moale" }
    }
  },
  {
    id: "mosaic",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Κορμός/Μωσαϊκό", description: "Σπασμένα μπισκότα μαζί με σοκολάτα, μέσα σε φόρμα σχήματος κορμού" },
      en: { name: "Chocolate Log/Mosaic", description: "Crushed biscuits mixed with chocolate cream freezed in a log-like form" },
      de: { name: "Chocolate Log/Mosaic", description: "Schokoladen-Mosaik (Kormos): Zerbröselte Kekse gemischt mit Schokoladencreme in Rollenform" },
      fr: { name: "Chocolate Log/Mosaic", description: "Saucisson au Chocolat (Mosaïque): Biscuits cassés mélangés à de la crème au chocolat en forme de bûche" },
      es: { name: "Chocolate Log/Mosaic", description: "Tronco de Chocolate (Mosaico): Galletas trituradas mezcladas con crema de chocolate en forma de tronco" },
      sr: { name: "Chocolate Log/Mosaic", description: "Čokoladna Salama (Mozaik): Izlomljeni keks pomešan sa čokoladom u obliku rolata" },
      bg: { name: "Chocolate Log/Mosaic", description: "Сладък Салам (Мозайка): Натрошени бисквити, смесени с шоколад във формата на руло" },
      ro: { name: "Chocolate Log/Mosaic", description: "Salam de Biscuiți (Mozaic): Biscuiți zdrobiți amestecați cu cremă de ciocolată sub formă de rulou" }
    }
  },
  {
    id: "chocolate_pie",
    categoryId: "pastes",
    price: 4.0,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Σοκολατόπιτα", description: "Ζουμερό κέικ σοκολάτας με έντονη γεύση κακάο" },
      en: { name: "Chocolate Pie", description: "Moist chocolate cake with intense cocoa flavor" },
      de: { name: "Chocolate Pie", description: "Schokoladenkuchen (Sokolatopita): Saftiger Schokoladenkuchen mit intensivem Kakaogeschmack" },
      fr: { name: "Chocolate Pie", description: "Gâteau au Chocolat: Gâteau au chocolat moelleux au goût intense de cacao" },
      es: { name: "Chocolate Pie", description: "Pastel de Chocolate: Pastel de chocolate jugoso con intenso sabor a cacao" },
      sr: { name: "Chocolate Pie", description: "Čokoladni Kolač (Sokolatopita): Sočni čokoladni kolač sa intenzivnim ukusom kakaa" },
      bg: { name: "Chocolate Pie", description: "Шоколадов Сладкиш (Соколатопита): Сочен шоколадов кекс с интензивен какаов вкус" },
      ro: { name: "Chocolate Pie", description: "Prăjitură de Ciocolată: Prăjitură însiropată de ciocolată cu gust intens de cacao" }
    }
  },
  {
    id: "karioka",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasNuts: true,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Καριόκα", description: "Παραδοσιακό γλυκό με κακάο και καρύδια" },
      en: { name: "Large Karioka", description: "Greek-style chocolate and walnut bar" },
      de: { name: "Large Karioka", description: "Karioka: Traditionelles griechisches Schokoladen-Walnuss-Gebäck" },
      fr: { name: "Large Karioka", description: "Karioka: Pâtisserie grecque traditionnelle au chocolat et aux noix" },
      es: { name: "Large Karioka", description: "Karioka: Dulce tradicional griego de chocolate y nueces" },
      sr: { name: "Large Karioka", description: "Karioka: Tradicionalni grčki slatkiš sa čokoladom i orasima" },
      bg: { name: "Large Karioka", description: "Кариока: Традиционен гръцки десерт с шоколад и орехи" },
      ro: { name: "Large Karioka", description: "Karioka: Dulce tradițional grecesc cu ciocolată și nuci" }
    }
  },
  {
    id: "baba",
    categoryId: "pastes",
    price: 4.0,
    isSoldOut: false,
    hasNuts: true,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Μπαμπάς", description: "Ζυμάρι τύπου μπριός ποτισμένο με σιρόπι και ρούμι, με σαντιγί" },
      en: { name: "Rum Baba", description: "Syrup-soaked brioche-style pastry with whipped cream" },
      de: { name: "Rum Baba", description: "Rum Baba: In Sirup und Rum getränktes Brioche-Gebäck mit Schlagsahne" },
      fr: { name: "Rum Baba", description: "Baba au Rhum: Pâte briochée imbibée de sirop au rhum, avec crème chantilly" },
      es: { name: "Rum Baba", description: "Baba al Ron: Masa tipo brioche empapada en almíbar y ron, con crema batida" },
      sr: { name: "Rum Baba", description: "Baba sa Rumom: Brioš testo natopljeno sirupom i rumom, sa šlagom" },
      bg: { name: "Rum Baba", description: "Саварина (Баба): Бриош тесто, напоено със сироп и ром, със сметана" },
      ro: { name: "Rum Baba", description: "Baba cu Rom: Aluat tip brioșă însiropat cu rom, servit cu frișcă" }
    }
  },
  {
    id: "tiramisu_pastry",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Πάστα Τιραμισού", description: "Αυθεντική γεύση τιραμισού ποτισμένη με καφέ εσπρέσο και πλούσια κρέμα μασκαρπόνε" },
      en: { name: "Tiramisu Pastry", description: "Authentic tiramisu flavor infused with espresso coffee and rich mascarpone cream" },
      de: { name: "Tiramisu Pastry", description: "Tiramisu-Törtchen: Authentischer Tiramisu-Geschmack mit Espresso und reichhaltiger Mascarpone-Creme" },
      fr: { name: "Tiramisu Pastry", description: "Pâtisserie Tiramisu: Saveur authentique de tiramisu avec café expresso et riche crème mascarpone" },
      es: { name: "Tiramisu Pastry", description: "Pastel Tiramisú: Auténtico sabor a tiramisú con café expresso y rica crema mascarpone" },
      sr: { name: "Tiramisu Pastry", description: "Tiramisu kolač: Autentični ukus tiramisua sa espreso kafom i bogatim maskarpone kremom" },
      bg: { name: "Tiramisu Pastry", description: "Паста Тирамису: Автентичен вкус на тирамису с еспресо и богат маскарпоне крем" },
      ro: { name: "Tiramisu Pastry", description: "Prăjitură Tiramisu: Gust autentic de tiramisu cu cafea espresso și cremă bogată de mascarpone" }
    }
  },
  {
    id: "lemon_pie_pastry",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Πάστα Lemon Pie", description: "Αφράτη πάστα με δροσερή κρέμα λεμονιού και επικάλυψη μαρέγκας" },
      en: { name: "Lemon Pie Pastry", description: "Fluffy pastry with refreshing lemon cream and meringue topping" },
      de: { name: "Lemon Pie Pastry", description: "Zitronenkuchen-Törtchen: Fluffiges Gebäck mit erfrischender Zitronencreme und Baiser-Topping" },
      fr: { name: "Lemon Pie Pastry", description: "Pâtisserie Tarte au Citron: Pâtisserie moelleuse avec crème au citron rafraîchissante et garniture meringuée" },
      es: { name: "Lemon Pie Pastry", description: "Pastel de Limón: Pastel esponjoso con refrescante crema de limón y cobertura de merengue" },
      sr: { name: "Lemon Pie Pastry", description: "Kolač od limuna: Vazdušasti kolač sa osvežavajućim kremom od limuna i puslicom" },
      bg: { name: "Lemon Pie Pastry", description: "Паста Лимонов пай: Пухкав сладкиш с освежаващ лимонов крем и целувчена глазура" },
      ro: { name: "Lemon Pie Pastry", description: "Prăjitură Lemon Pie: Prăjitură pufoasă cu cremă răcoritoare de lămâie și bezea" }
    }
  },
  {
    id: "lemon_pie_cup",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Lemon Pie με τριμμένο μπισκότο", description: "Δροσερή λεμονάτη πάστα σε κυπελάκι με κρέμα, μαρέγκα σε βάση τριμμένου μπισκότου" },
      en: { name: "Lemon Pie with Crushed Biscuit", description: "Refreshing lemon-flavored served in a cup with smooth cream, meringue on a crushed biscuits base" },
      de: { name: "Lemon Pie with Crushed Biscuit", description: "Lemon Pie im Becher: Erfrischendes Zitronendessert im Becher mit Creme und Baiser auf Keksboden" },
      fr: { name: "Lemon Pie with Crushed Biscuit", description: "Tarte au Citron en Coupe: Dessert rafraîchissant au citron servi en coupe avec crème et meringue sur base de biscuits" },
      es: { name: "Lemon Pie with Crushed Biscuit", description: "Pastel de Limón en Copa: Postre refrescante de limón en copa con crema y merengue sobre base de galleta" },
      sr: { name: "Lemon Pie with Crushed Biscuit", description: "Lemon Pie u čaši: Osvežavajući desert od limuna u čaši sa kremom i puslicom na bazi od keksa" },
      bg: { name: "Lemon Pie with Crushed Biscuit", description: "Лимонов пай в чаша: Освежаващ лимонов десерт в чашка с крем и целувка върху бисквитена основа" },
      ro: { name: "Lemon Pie with Crushed Biscuit", description: "Lemon Pie la pahar: Desert răcoritor de lămâie la pahar cu cremă și bezea pe bază de biscuiți" }
    }
  },
  {
    id: "cheesecake_cup",
    categoryId: "pastes",
    price: 3.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Cheesecake με τριμμένο μπισκότο", description: "Αφράτο cheesecake σε κυπελάκι σε βάση τριμμένου μπισκότου" },
      en: { name: "Cheesecake with Crushed Biscuit", description: "Creamy cheesecake served in a cup on a crushed biscuits base" },
      de: { name: "Cheesecake with Crushed Biscuit", description: "Cheesecake im Becher: Cremiger Käsekuchen im Becher auf einem Keksboden" },
      fr: { name: "Cheesecake with Crushed Biscuit", description: "Cheesecake en Coupe: Cheesecake crémeux servi en coupe sur une base de biscuits écrasés" },
      es: { name: "Cheesecake with Crushed Biscuit", description: "Cheesecake en Copa: Cheesecake cremoso servido en copa sobre una base de galletas trituradas" },
      sr: { name: "Cheesecake with Crushed Biscuit", description: "Čizkejk u čaši: Kremasti čizkejk serviran u čaši na bazi od mlevenog keksa" },
      bg: { name: "Cheesecake with Crushed Biscuit", description: "Чийзкейк в чаша: Кремообразен чийзкейк, сервиран в чашка върху бисквитена основа" },
      ro: { name: "Cheesecake with Crushed Biscuit", description: "Cheesecake la pahar: Cheesecake cremos servit la pahar pe o bază de biscuiți zdrobiți" }
    }
  },
  {
    id: "baked_cheesecake",
    categoryId: "pastes",
    price: 4.0,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Τάρτα Cheesecake Φούρνου", description: "Ψημένο cheesecake σε τραγανή βάση τάρτας" },
      en: { name: "Baked Cheesecake Tart", description: "Oven-baked cheesecake in a buttery tart crust" },
      de: { name: "Baked Cheesecake Tart", description: "Gebackene Cheesecake-Tarte: Im Ofen gebackener Käsekuchen auf knusprigem Tarteboden" },
      fr: { name: "Baked Cheesecake Tart", description: "Tarte Cheesecake au Four: Cheesecake cuit au four sur une base de tarte croustillante" },
      es: { name: "Baked Cheesecake Tart", description: "Tarta de Cheesecake Horneada: Cheesecake horneado en una base de tarta crujiente" },
      sr: { name: "Baked Cheesecake Tart", description: "Pečeni Čizkejk Tart: Čizkejk pečen u rerni na hrskavoj kori od tarta" },
      bg: { name: "Baked Cheesecake Tart", description: "Печен Чийзкейк Тарт: Изпечен на фурна чийзкейк върху хрупкава основа" },
      ro: { name: "Baked Cheesecake Tart", description: "Tartă Cheesecake la Cuptor: Cheesecake copt la cuptor pe o bază crocantă de tartă" }
    }
  },
  {
    id: "baked_lemon_pie",
    categoryId: "pastes",
    price: 4.0,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Τάρτα Lemon Pie Φούρνου", description: "Κλασική γεύση λεμονιού σε βάση τάρτας" },
      en: { name: "Baked Lemon Pie Tart", description: "Classic lemon pie flavor baked in tart form" },
      de: { name: "Baked Lemon Pie Tart", description: "Gebackene Lemon Pie Tarte: Klassischer Zitronenkuchengeschmack in Tarteform gebacken" },
      fr: { name: "Baked Lemon Pie Tart", description: "Tarte au Citron au Four: Saveur classique de tarte au citron cuite sous forme de tarte" },
      es: { name: "Baked Lemon Pie Tart", description: "Tarta de Limón Horneada: Clásico sabor a pastel de limón horneado en forma de tarta" },
      sr: { name: "Baked Lemon Pie Tart", description: "Pečeni Tart od Limuna: Klasični ukus pite od limuna pečen u obliku tarta" },
      bg: { name: "Baked Lemon Pie Tart", description: "Печен Лимонов Пай Тарт: Класически вкус на лимонов пай, изпечен под формата на тарт" },
      ro: { name: "Baked Lemon Pie Tart", description: "Tartă Lemon Pie la Cuptor: Aromă clasică de plăcintă cu lămâie coaptă sub formă de tartă" }
    }
  },
  {
    id: "baked_lemon_pie_no_meringue",
    categoryId: "pastes",
    price: 4.0,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Τάρτα Lemon Pie Φούρνου (χωρίς μαρέγκα)", description: "Κλασική γεύση λεμονιού σε βάση τάρτας χωρίς την κλασσική μαρέγκα" },
      en: { name: "Baked Lemon Pie Tart (without meringue)", description: "Classic lemon pie flavor baked in tart form without the classic meringue topping" },
      de: { name: "Baked Lemon Pie Tart (without meringue)", description: "Gebackene Lemon Pie Tarte (ohne Baiser): Klassischer Zitronenkuchengeschmack in Tarteform gebacken, ohne Baiser-Topping" },
      fr: { name: "Baked Lemon Pie Tart (without meringue)", description: "Tarte au Citron au Four (sans meringue): Saveur classique de tarte au citron cuite sous forme de tarte sans glaçage meringué" },
      es: { name: "Baked Lemon Pie Tart (without meringue)", description: "Tarta de Limón Horneada (sin merengue): Clásico sabor a pastel de limón horneado en forma de tarta sin cobertura de merengue" },
      sr: { name: "Baked Lemon Pie Tart (without meringue)", description: "Pečeni Tart od Limuna (bez puslice): Klasični ukus pite od limuna pečen u obliku tarta bez preliva od puslice" },
      bg: { name: "Baked Lemon Pie Tart (without meringue)", description: "Печен Лимонов Пай Тарт (без целувка): Класически вкус на лимонов пай, изпечен под формата на тарт без целувчена глазура" },
      ro: { name: "Baked Lemon Pie Tart (without meringue)", description: "Tartă Lemon Pie la Cuptor (fără bezea): Aromă clasică de plăcintă cu lămâie coaptă sub formă de tartă, fără bezea deasupra" }
    }
  },
  {
    id: "fruit_tart",
    categoryId: "pastes",
    price: 4.0,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Τάρτα με Φρούτα και Κρέμα", description: "Τάρτα με κρέμα πατισερί και φρέσκα φρούτα" },
      en: { name: "Fruit Tart with Cream", description: "Tart filled with patisserie cream and fresh fruits" },
      de: { name: "Fruit Tart with Cream", description: "Fruchttarte mit Creme: Tarte gefüllt mit Konditorcreme und frischen Früchten" },
      fr: { name: "Fruit Tart with Cream", description: "Tarte aux Fruits et à la Crème: Tarte garnie de crème pâtissière et de fruits frais" },
      es: { name: "Fruit Tart with Cream", description: "Tarta de Frutas y Crema: Tarta rellena de crema pastelera y frutas frescas" },
      sr: { name: "Fruit Tart with Cream", description: "Tart sa Voćem i Kremom: Tart punjen poslastičarskim kremom i svežim voćem" },
      bg: { name: "Fruit Tart with Cream", description: "Плодов Тарт с Крем: Тарт, пълен със сладкарски крем и пресни плодове" },
      ro: { name: "Fruit Tart with Cream", description: "Tartă cu Fructe și Cremă: Tartă umplută cu cremă de patiserie și fructe proaspete" }
    }
  },
  {
    id: "lemon_tart",
    categoryId: "pastes",
    price: 5.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasNuts: true,
    translations: {
      el: { name: "Τάρτα με Λεμόνι", description: "Τάρτα με δροσερή λεμονόκρεμα" },
      en: { name: "Lemon Tart", description: "Tangy lemon cream in a buttery tart base" },
      de: { name: "Lemon Tart", description: "Zitronentarte: Frische Zitronencreme in einem butterigen Tarteboden" },
      fr: { name: "Lemon Tart", description: "Tarte au Citron: Crème au citron acidulée sur une base de tarte beurrée" },
      es: { name: "Lemon Tart", description: "Tarta de Limón: Crema de limón refrescante en una base de tarta de mantequilla" },
      sr: { name: "Lemon Tart", description: "Tart od Limuna: Osvežavajući krem od limuna na puterastoj kori od tarta" },
      bg: { name: "Lemon Tart", description: "Лимонов Тарт: Освежаващ лимонов крем върху маслена основа за тарт" },
      ro: { name: "Lemon Tart", description: "Tartă cu Lămâie: Cremă răcoritoare de lămâie pe o bază de tartă cu unt" }
    }
  },
  {
    id: "chocolate_chestnut_tart",
    categoryId: "pastes",
    price: 5.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Τάρτα με Σοκολάτα και Κάστανο", description: "Πλούσια σοκολατένια γέμιση με γλυκό κάστανο" },
      en: { name: "Chocolate-Chestnut Tart", description: "Rich chocolate filling with sweet chestnut notes" },
      de: { name: "Chocolate-Chestnut Tart", description: "Schokoladen-Kastanien-Tarte: Reichhaltige Schokoladenfüllung mit süßen Kastaniennoten" },
      fr: { name: "Chocolate-Chestnut Tart", description: "Tarte Chocolat-Marron: Riche garniture au chocolat aux douces notes de marron" },
      es: { name: "Chocolate-Chestnut Tart", description: "Tarta de Chocolate y Castañas: Rico relleno de chocolate con notas dulces de castaña" },
      sr: { name: "Chocolate-Chestnut Tart", description: "Tart od Čokolade i Kestena: Bogato čokoladno punjenje sa slatkim notama kestena" },
      bg: { name: "Chocolate-Chestnut Tart", description: "Шоколадов Тарт с Кестен: Богат шоколадов пълнеж със сладки нотки на кестен" },
      ro: { name: "Chocolate-Chestnut Tart", description: "Tartă cu Ciocolată și Castane: Umplutură bogată de ciocolată cu note dulci de castane" }
    }
  },
  {
    id: "chocolate_caramel_tart",
    categoryId: "pastes",
    price: 5.5,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    hasSoy: true,
    translations: {
      el: { name: "Τάρτα με Σοκολάτα και Καραμέλα", description: "Απολαυστική τάρτα με καραμέλα και σοκολάτα" },
      en: { name: "Chocolate-Caramel Tart", description: "Decadent tart with smooth caramel and chocolate praline" },
      de: { name: "Chocolate-Caramel Tart", description: "Schokoladen-Karamell-Tarte: Dekadente Tarte mit cremigem Karamell und Schokoladenpraline" },
      fr: { name: "Chocolate-Caramel Tart", description: "Tarte Chocolat-Caramel: Tarte décadente avec caramel onctueux et praliné au chocolat" },
      es: { name: "Chocolate-Caramel Tart", description: "Tarta de Chocolate y Caramelo: Tarta decadente con suave caramelo y praliné de chocolate" },
      sr: { name: "Chocolate-Caramel Tart", description: "Tart od Čokolade i Karamele: Dekadentni tart sa mekom karamelom i čokoladnom pralinom" },
      bg: { name: "Chocolate-Caramel Tart", description: "Шоколадово-Карамелен Тарт: Декадентски тарт с гладък карамел и шоколадов пралин" },
      ro: { name: "Chocolate-Caramel Tart", description: "Tartă cu Ciocolată și Caramel: Tartă decadentă cu caramel fin și pralină de ciocolată" }
    }
  },
  {
    id: "apple_pie",
    categoryId: "pastes",
    price: 3.50,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Μηλόπιτα Παραδοσιακή", description: "Μαλακή, αφράτη ζύμη με πλούσια γέμιση από αρωματικά μήλα και κανέλα" },
      en: { name: "Traditional Apple Pie", description: "Soft, fluffy pastry crust filled with a rich filling of aromatic apples and cinnamon" },
      de: { name: "Traditional Apple Pie", description: "Traditionelle Apfelpastete: Weiche, fluffige Teigkruste, gefüllt mit einer reichhaltigen Füllung aus aromatischen Äpfeln und Zimt" },
      fr: { name: "Traditional Apple Pie", description: "Tarte aux Pommes Traditionnelle: Pâte douce et moelleuse garnie d'une riche garniture de pommes aromatiques et de cannelle" },
      es: { name: "Traditional Apple Pie", description: "Pastel de Manzana Tradicional: Masa suave y esponjosa rellena con un rico relleno de manzanas aromáticas y canela" },
      sr: { name: "Traditional Apple Pie", description: "Tradicionalna Pita od Jabuka: Mekana, vazdušasta kora punjena bogatim nadevom od aromatičnih jabuka i cimeta" },
      bg: { name: "Traditional Apple Pie", description: "Традиционен Ябълков Пай: Меко, пухкаво тесто, пълно с богат пълнеж от ароматни ябълки и канела" },
      ro: { name: "Traditional Apple Pie", description: "Plăcintă Tradițională cu Mere: Aluat moale și pufos, cu o umplutură bogată de mere aromate și scorțișoară" }
    }
  },
  {
    id: "cherry_cream_pie",
    categoryId: "pastes",
    price: 3.50,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Βυσσινόπιτα με Κρέμα Παραδοσιακή", description: "Μαλακή ζύμη με πλούσια γέμιση βελούδινης κρέμας και ζουμερά βύσσινα" },
      en: { name: "Traditional Sour Cherry & Cream Pie", description: "Soft pastry crust filled with rich, velvety custard cream and juicy sour cherries" },
      de: { name: "Traditional Sour Cherry & Cream Pie", description: "Traditionelle Sauerkirsch-Creme-Pastete: Weiche Teigkruste, gefüllt mit reichhaltiger, samtiger Vanillecreme und saftigen Sauerkirschen" },
      fr: { name: "Traditional Sour Cherry & Cream Pie", description: "Tarte Traditionnelle aux Griottes et à la Crème: Pâte douce garnie d'une riche crème veloutée et de griottes juteuses" },
      es: { name: "Traditional Sour Cherry & Cream Pie", description: "Pastel Tradicional de Cerezas Ácidas y Crema: Masa suave rellena de rica y aterciopelada crema pastelera y jugosas cerezas ácidas" },
      sr: { name: "Traditional Sour Cherry & Cream Pie", description: "Tradicionalna Pita sa Višnjama i Kremom: Mekana kora punjena bogatim, baršunastim kremom i sočnim višnjama" },
      bg: { name: "Traditional Sour Cherry & Cream Pie", description: "Традиционен Пай с Вишни и Крем: Меко тесто, пълно с богат, кадифен сладкарски крем и сочни вишни" },
      ro: { name: "Traditional Sour Cherry & Cream Pie", description: "Plăcintă Tradițională cu Vișine și Cremă: Aluat moale umplut cu o cremă catifelată și vișine suculente" }
    }
  },
  {
    id: "lemon_pie_traditional",
    categoryId: "pastes",
    price: 3.50,
    isSoldOut: false,
    hasDairy: true,
    hasEgg: true,
    translations: {
      el: { name: "Λεμονόπιτα Παραδοσιακή", description: "Μαλακή ζύμη με πλούσια, δροσερή και γεμάτη γέμιση από κρέμα λεμονιού" },
      en: { name: "Traditional Lemon Pie", description: "Soft pastry crust with a rich, refreshing and tangy lemon cream filling" },
      de: { name: "Traditional Lemon Pie", description: "Traditionelle Zitronenpastete: Weiche Teigkruste mit einer reichhaltigen, erfrischenden und spritzigen Zitronencremefüllung" },
      fr: { name: "Traditional Lemon Pie", description: "Tarte au Citron Traditionnelle: Pâte douce avec une garniture à la crème au citron riche, rafraîchissante et acidulée" },
      es: { name: "Traditional Lemon Pie", description: "Pastel de Limón Tradicional: Masa suave con un rico, refrescante y ácido relleno de crema de limón" },
      sr: { name: "Traditional Lemon Pie", description: "Tradicionalna Pita od Limuna: Mekana kora sa bogatim, osvežavajućim i kiselkastim punjenjem od limunovog krema" },
      bg: { name: "Traditional Lemon Pie", description: "Традиционен Лимонов Пай: Меко тесто с богат, освежаващ и тръпчив пълнеж от лимонов крем" },
      ro: { name: "Traditional Lemon Pie", description: "Plăcintă Tradițională cu Lămâie: Aluat moale cu o umplutură bogată, revigorantă și acrișoară de cremă de lămâie" }
    }
  }
];