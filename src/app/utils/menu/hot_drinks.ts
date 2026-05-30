import { MenuItem } from "../menuData";

export const hot_drinks: MenuItem[] = [
  {
    id: "hot_chocolate",
    categoryId: "hot_drinks",
    price: 4.0,
    hasDairy: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Ζεστή Σοκολάτα", description: "Φτιαγμένη με φρέσκο γάλα. Διατίθεται σε ποικιλία γεύσεων (ρωτήστε μας). Περιέχει ζάχαρη." },
      en: { name: "Hot Chocolate", description: "Made with fresh milk. Available in a variety of flavors (ask us). Contains sugar." },
      de: { name: "Hot Chocolate", description: "Heiße Schokolade - Mit frischer Milch zubereitet. In verschiedenen Geschmacksrichtungen erhältlich. Enthält Zucker." },
      fr: { name: "Hot Chocolate", description: "Chocolat Chaud - Préparé avec du lait frais. Disponible en plusieurs saveurs. Contient du sucre." },
      es: { name: "Hot Chocolate", description: "Chocolate Caliente - Preparado con leche fresca. Disponible en varias opciones de sabor. Contiene azúcar." },
      sr: { name: "Hot Chocolate", description: "Topla čokolada - Napravljeno sa svežim mlekom. Dostupno u različitim ukusima. Sadrži šećer." },
      bg: { name: "Hot Chocolate", description: "Горещ шоколад - Приготвено с прясно мляко. Предлага се в различни вкусове. Съдържа захар." },
      ro: { name: "Hot Chocolate", description: "Ciocolată Caldă - Preparat cu lapte proaspăt. Disponibil în diverse arome. Conține zahăr." }
    }
  },
  {
    id: "hot_cocoa_single",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Ζεστό Κακάο (Μονό)", description: "Φτιαγμένο με νερό. Χωρίς προσθήκη ζάχαρης (προσθέστε το γλυκαντικό της επιλογής σας)." },
      en: { name: "Hot Cocoa (Single)", description: "Made with water. No added sugar (add a sweetener of your choice)." },
      de: { name: "Hot Cocoa (Single)", description: "Heißer Kakao (Einfach) - Mit Wasser zubereitet. Ohne Zuckerzusatz." },
      fr: { name: "Hot Cocoa (Single)", description: "Cacao Chaud (Simple) - Préparé avec de l'eau. Sans sucre ajouté." },
      es: { name: "Hot Cocoa (Single)", description: "Cacao Caliente (Simple) - Preparado con agua. Sin azúcar añadido." },
      sr: { name: "Hot Cocoa (Single)", description: "Topli kakao (Jednostavan) - Napravljeno sa vodom. Bez dodatog šećera." },
      bg: { name: "Hot Cocoa (Single)", description: "Горещо какао (Единично) - Приготвено с вода. Без добавена захар." },
      ro: { name: "Hot Cocoa (Single)", description: "Cacao Caldă (Simplu) - Preparat cu apă. Fără zahăr adăugat." }
    }
  },
  {
    id: "hot_cocoa_double",
    categoryId: "hot_drinks",
    price: 3.0,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Ζεστό Κακάο (Διπλό)", description: "Διπλή δόση, φτιαγμένο με νερό. Χωρίς προσθήκη ζάχαρης." },
      en: { name: "Hot Cocoa (Double)", description: "Double shot, made with water. No added sugar." },
      de: { name: "Hot Cocoa (Double)", description: "Heißer Kakao (Doppelt) - Doppelte Portion, mit Wasser zubereitet. Ohne Zuckerzusatz." },
      fr: { name: "Hot Cocoa (Double)", description: "Cacao Chaud (Double) - Double dose, préparé avec de l'eau. Sans sucre ajouté." },
      es: { name: "Hot Cocoa (Double)", description: "Cacao Caliente (Doble) - Doble porción, preparado con agua. Sin azúcar añadido." },
      sr: { name: "Hot Cocoa (Double)", description: "Topli kakao (Dupli) - Dupla doza, napravljeno sa vodom. Bez dodatog šećera." },
      bg: { name: "Hot Cocoa (Double)", description: "Горещо какао (Двойно) - Двойна доза, приготвено с вода. Без добавена захар." },
      ro: { name: "Hot Cocoa (Double)", description: "Cacao Caldă (Dublu) - Doză dublă, preparat cu apă. Fără zahăr adăugat." }
    }
  },
  {
    id: "separator_hot_drinks_tea",
    categoryId: "hot_drinks",
    price: 0,
    hidePrice: true,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "chamomile_tea",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Χαμομήλι", description: "Κλασικό, χαλαρωτικό και καταπραϋντικό ρόφημα από άνθη χαμομηλιού." },
      en: { name: "Chamomile Tea", description: "Classic, relaxing and soothing herbal infusion made from chamomile flowers." },
      de: { name: "Chamomile Tea", description: "Kamillentee - Klassischer, entspannender Kräutertee aus Kamillenblüten." },
      fr: { name: "Chamomile Tea", description: "Infusion Camomille - Boisson classique, relaxante et apaisante à base de fleurs de camomille." },
      es: { name: "Chamomile Tea", description: "Manzanilla - Infusión clásica, relajante y calmante hecha de flores de manzanilla." },
      sr: { name: "Chamomile Tea", description: "Čaj od kamilice - Klasičan, opuštajući i umirujući biljni čaj od cvetova kamilice." },
      bg: { name: "Chamomile Tea", description: "Лайка - Класически, релаксиращ и успокояващ билков чай от цветове на лайка." },
      ro: { name: "Chamomile Tea", description: "Ceai de Mușețel - Infuzie clasică, relaxantă și calmantă din flori de mușețel." }
    }
  },
  {
    id: "green_tea",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Πράσινο Τσάι", description: "Αναζωογονητικό και ελαφρύ πράσινο τσάι, πλούσιο σε αντιοξειδωτικά." },
      en: { name: "Green Tea", description: "Refreshing and light green tea, rich in antioxidants." },
      de: { name: "Green Tea", description: "Grüner Tee - Erfrischender und leichter grüner Tee, reich an Antioxidantien." },
      fr: { name: "Green Tea", description: "Thé Vert - Thé vert rafraîchissant et léger, riche en antioxydants." },
      es: { name: "Green Tea", description: "Té Verde - Té verde refrescante y ligero, rico en antioxidantes." },
      sr: { name: "Green Tea", description: "Zeleni čaj - Osvežavajući i lagani zeleni čaj, bogat antioksidansima." },
      bg: { name: "Green Tea", description: "Зелен чай - Освежаващ и лек зелен чай, богат на антиоксиданти." },
      ro: { name: "Green Tea", description: "Ceai Verde - Ceai verde revigorant și ușor, bogat în antioxidanți." }
    }
  },
  {
    id: "black_tea",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Μαύρο Τσάι", description: "Παραδοσιακό μαύρο τσάι με γεμάτη γεύση και έντονο, πλούσιο άρωμα." },
      en: { name: "Black Tea", description: "Traditional black tea with a full-bodied flavor and rich, intense aroma." },
      de: { name: "Black Tea", description: "Schwarzer Tee - Traditioneller schwarzer Tee mit vollem Geschmack und intensivem Aroma." },
      fr: { name: "Black Tea", description: "Thé Noir - Thé noir traditionnel au goût corsé et à l'arôme riche." },
      es: { name: "Black Tea", description: "Té Negro - Té negro tradicional con sabor robusto y aroma intenso." },
      sr: { name: "Black Tea", description: "Crni čaj - Tradicionalni crni čaj punog ukusa i bogate arome." },
      bg: { name: "Black Tea", description: "Черен чай - Традиционен черен чай с плътен вкус и богат аромат." },
      ro: { name: "Black Tea", description: "Ceai Negru - Ceai negru tradițional cu gust plin și aromă bogată." }
    }
  },
  {
    id: "linden_tea",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Φλαμούρι", description: "Παραδοσιακό, θερμαντικό και καταπραϋντικό ρόφημα από άνθη φλαμουριάς." },
      en: { name: "Linden Tea", description: "Traditional, warming and soothing herbal tea made from linden blossoms." },
      de: { name: "Linden Tea", description: "Lindentee - Traditioneller, wärmender und beruhigender Lindenblütentee." },
      fr: { name: "Linden Tea", description: "Tilleul - Infusion traditionnelle, réchauffante et apaisante de fleurs de tilleul." },
      es: { name: "Linden Tea", description: "Tila - Infusión tradicional, reconfortante y calmante hecha de flores de tila." },
      sr: { name: "Linden Tea", description: "Čaj od lipe - Tradicionalni, grejući i umirujući biljni čaj od lipe." },
      bg: { name: "Linden Tea", description: "Липа - Традиционен, затоплящ и успокояващ билков чай от липов цвят." },
      ro: { name: "Linden Tea", description: "Ceai de Tei - Infuzie tradițională, caldă și calmantă din flori de tei." }
    }
  },
  {
    id: "mountain_tea",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Τσάι του Βουνού", description: "Αυθεντικό ελληνικό τσάι του βουνού (σιδερίτης), τονωτικό και εξαιρετικά αρωματικό." },
      en: { name: "Mountain's Tea", description: "Authentic Greek mountain tea (sideritis), tonic and highly aromatic." },
      de: { name: "Mountain's Tea", description: "Griechischer Bergtee - Authentischer griechischer Bergtee (Sideritis), belebend und aromatisch." },
      fr: { name: "Mountain's Tea", description: "Thé de la Montagne - Thé de montagne grec authentique (sidéritis), tonique et aromatique." },
      es: { name: "Mountain's Tea", description: "Té de la Montaña - Auténtico té de montaña griego (sideritis), tónico y aromático." },
      sr: { name: "Mountain's Tea", description: "Planinski čaj - Autentični grčki planinski čaj (sideritis), tonik i veoma aromatičan." },
      bg: { name: "Mountain's Tea", description: "Мурсалски чай - Автентичен гръцки планински чай (сидеритис), тонизиращ и ароматен." },
      ro: { name: "Mountain's Tea", description: "Ceai de Munte - Ceai de munte grecesc autentic (sideritis), tonic și foarte aromat." }
    }
  },
  {
    id: "separator_tea_tearoute",
    categoryId: "hot_drinks",
    price: 0,
    hidePrice: true,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  {
    id: "tearoute_info_general",
    categoryId: "hot_drinks",
    price: 0,
    hidePrice: true,
    translations: {
      el: { name: "Δρόμος του Τσαγιού", description: "Από το 2001 προσφέρουμε ιδιαίτερες ποικιλίες. Εμπνευσμένοι από τη μεσογειακή φύση, δημιουργούμε συνθέσεις με ολόκληρα φύλλα τσαγιού, φυσικά αιθέρια έλαια, αποξηραμένα φρούτα, πέταλα λουλουδιών, μπαχαρικά ή ξηρούς καρπούς." },
      en: { name: "TeaRoute", description: "Since 2001, we offer unique varieties. Inspired by Mediterranean nature, we create blends containing whole tea leaves, natural essential oils, dried fruits, flower petals, spices, or nuts." },
      de: { name: "TeaRoute", description: "Seit 2001 bieten wir einzigartige Sorten an. Inspiriert von der mediterranen Natur kreieren wir Mischungen mit ganzen Teeblättern, natürlichen ätherischen Ölen, Trockenfrüchten, Blütenblättern, Gewürzen oder Nüssen." },
      fr: { name: "TeaRoute", description: "Depuis 2001, nous proposons des variétés uniques. Inspirés par la nature méditerranéenne, nous créons des mélanges contenant des feuilles de thé entières, des huiles essentielles naturelles, des fruits secs, des pétales de fleurs, des épices ou des noix." },
      es: { name: "TeaRoute", description: "Desde 2001 ofrecemos variedades únicas. Inspirados en la naturaleza mediterránea, creamos mezclas con hojas de té enteras, aceites esenciales naturales, frutas secas, pétalos de flores, especias o nueces." },
      sr: { name: "TeaRoute", description: "Od 2001. godine nudimo jedinstvene sorte. Inspirisani mediteranskom prirodom, stvaramo mešavine sa celim listovima čaja, prirodnim esencijalnim uljima, sušenim voćem, laticama cveća, začinima ili orašastim plodovima." },
      bg: { name: "TeaRoute", description: "От 2001 г. предлагаме уникални сортове. Вдъхновени от средиземноморската природа, създаваме блендове с цели чаени листа, естествени етерични масла, сушени плодове, цветни листенца, подправки или ядки." },
      ro: { name: "TeaRoute", description: "Din 2001 oferim varietăți unice. Inspirați de natura mediteraneană, creăm amestecuri cu frunze întregi de ceai, uleiuri esențiale naturale, fructe uscate, petale de flori, condimente sau nuci." }
    }
  },
  {
    id: "tearoute_ceylon_op",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Ceylon OP", description: "Τσάι με πολύ μεγάλα μαύρα φύλλα σε σχήμα πευκοβελόνας με μια γήινη γεύση που θυμίζει βύνη." },
      en: { name: "Ceylon OP", description: "Black tea with long, pine-needle-shaped leaves and an earthy flavor reminiscent of malt." },
      de: { name: "Ceylon OP", description: "Ceylon OP - Schwarzer Tee mit langen, kiefernnadelartigen Blättern und malzigem Geschmack." },
      fr: { name: "Ceylon OP", description: "Ceylon OP - Thé noir aux longues feuilles en forme d'aiguilles de pin, goût de malt." },
      es: { name: "Ceylon OP", description: "Ceylon OP - Té negro de hojas largas con un sabor terroso que recuerda a la malta." },
      sr: { name: "Ceylon OP", description: "Ceylon OP - Crni čaj sa dugim listovima i zemljanim ukusom koji podseća na slad." },
      bg: { name: "Ceylon OP", description: "Ceylon OP - Черен чай с дълги листа и земен вкус, напомнящ на малц." },
      ro: { name: "Ceylon OP", description: "Ceylon OP - Ceai negru cu frunze lungi și un gust pământiu care amintește de malț." }
    }
  },
  {
    id: "tearoute_chun_mei_bio",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Chun Mei Bio", description: "Κινέζικο πράσινο τσάι βιολογικής καλλιέργειας." },
      en: { name: "Chun Mei Bio", description: "Organic Chinese green tea." },
      de: { name: "Chun Mei Bio", description: "Chun Mei Bio - Biologischer chinesischer grüner Tee." },
      fr: { name: "Chun Mei Bio", description: "Chun Mei Bio - Thé vert chinois biologique." },
      es: { name: "Chun Mei Bio", description: "Chun Mei Bio - Té verde chino orgánico." },
      sr: { name: "Chun Mei Bio", description: "Chun Mei Bio - Organski kineski zeleni čaj." },
      bg: { name: "Chun Mei Bio", description: "Chun Mei Bio - Органичен китайски зелен чай." },
      ro: { name: "Chun Mei Bio", description: "Chun Mei Bio - Ceai verde chinezesc organic." }
    }
  },
  {
    id: "tearoute_masticha_chai_bio",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Μαστίχα Chai Bio", description: "Πράσινο τσάι με μαστίχα Χίου, πιπερόριζα, μάραθο, καρδάμωμο, γαρίφαλο, πιπέρι, μοσχοκάρυδο." },
      en: { name: "Masticha Chai Bio", description: "Green tea with Chios masticha, ginger, fennel, cardamom, clove, pepper, and nutmeg." },
      de: { name: "Masticha Chai Bio", description: "Masticha Chai Bio - Grüner Tee mit Chios-Mastix, Ingwer, Fenchel, Kardamom, Nelken, Pfeffer und Muskatnuss." },
      fr: { name: "Masticha Chai Bio", description: "Masticha Chai Bio - Thé vert au mastic de Chios, gingembre, fenouil, cardamome, girofle, poivre et muscade." },
      es: { name: "Masticha Chai Bio", description: "Masticha Chai Bio - Té verde con mástique de Quíos, jengibre, hinojo, cardamomo, clavo, pimienta y nuez moscada." },
      sr: { name: "Masticha Chai Bio", description: "Masticha Chai Bio - Zeleni čaj sa mastikom sa Hiosa, đumbirom, komoračem, kardamomom, karanfilićem, biberom i oraščićem." },
      bg: { name: "Masticha Chai Bio", description: "Masticha Chai Bio - Зелен чай с мастиха от Хиос, джинджифил, резене, кардамон, карамфил, пипер и индийско орехче." },
      ro: { name: "Masticha Chai Bio", description: "Masticha Chai Bio - Ceai verde cu mastic de Chios, ghimbir, fenicul, cardamom, cuișoare, piper și nucșoară." }
    }
  },
  {
    id: "tearoute_red_square",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Κόκκινη Πλατεία", description: "Γευστικό και αρωματικό μείγμα από ιβίσκο, κράνμπερι και μήλο." },
      en: { name: "Red Square", description: "Flavorful and aromatic blend of hibiscus, cranberry, and apple." },
      de: { name: "Red Square", description: "Roter Platz - Geschmackvolle und aromatische Mischung aus Hibiskus, Cranberry und Apfel." },
      fr: { name: "Red Square", description: "Place Rouge - Mélange savoureux et aromatique d'hibiscus, de canneberge et de pomme." },
      es: { name: "Red Square", description: "Plaza Roja - Sabrosa y aromática mezcla de hibisco, arándano y manzana." },
      sr: { name: "Red Square", description: "Crveni trg - Ukusna i aromatična mešavina hibiskusa, brusnice i jabuke." },
      bg: { name: "Red Square", description: "Червеният площад - Вкусен и ароматен бленд от хибискус, червена боровинка и ябълка." },
      ro: { name: "Red Square", description: "Piața Roșie - Amestec delicios și aromat de hibiscus, merișoare și măr." }
    }
  },
  {
    id: "tearoute_cold_disease",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Τσάι Κρυολογήματος", description: "Ενισχυτικό και καταπραϋντικό μείγμα με πιπερόριζα, γλυκόριζα, πιπέρι, κανέλα, λεμονόχορτο, χαμομήλι και λουίζα." },
      en: { name: "Cold Disease Tea", description: "Soothing and fortifying blend of ginger, licorice, pepper, cinnamon, lemongrass, chamomile, and lemon verbena." },
      de: { name: "Cold Disease Tea", description: "Erkältungstee - Wohltuende und stärkende Mischung aus Ingwer, Süßholz, Pfeffer, Zimt, Zitronengras, Kamille und Zitronenverbene." },
      fr: { name: "Cold Disease Tea", description: "Thé Anti-rhume - Mélange apaisant et fortifiant de gingembre, réglisse, poivre, cannelle, citronnelle, camomille et verveine." },
      es: { name: "Cold Disease Tea", description: "Té para el Resfriado - Mezcla reconfortante y fortificante de jengibre, regaliz, pimienta, canela, limoncillo, manzanilla y verbena de limón." },
      sr: { name: "Cold Disease Tea", description: "Čaj protiv prehlade - Umirujuća i jačajuća mešavina sa đumbirom, sladićem, biberom, cimetom, limunovom travom, kamilicom i limunovom verbenom." },
      bg: { name: "Cold Disease Tea", description: "Чай против настинка - Успокояваща и подсилваща смес от джинджифил, женско биле, пипер, канела, лимонена трева, лайка и лимонова върбинка." },
      ro: { name: "Cold Disease Tea", description: "Ceai pentru Răceală - Amestec calmant și fortifiant de ghimbir, lemn dulce, piper, scorțișoară, lemongrass, mușețel și verbină." }
    }
  },
  {
    id: "tearoute_sencha_lemon",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Sencha Λεμόνι", description: "Εξαιρετικά αρωματισμένο πράσινο τσάι με φλούδες λεμονιού και δροσερό λεμονόχορτο." },
      en: { name: "Sencha Lemon", description: "Exquisitely flavored green tea with lemon peel and refreshing lemongrass." },
      de: { name: "Sencha Lemon", description: "Sencha Zitrone - Hervorragend aromatisierter grüner Tee mit Zitronenschale und erfrischendem Zitronengras." },
      fr: { name: "Sencha Lemon", description: "Sencha Citron - Thé vert excellemment aromatisé aux écorces de citron et à la citronnelle rafraîchissante." },
      es: { name: "Sencha Lemon", description: "Sencha Limón - Té verde exquisitamente aromatizado con corteza de limón y hierba limón refrescante." },
      sr: { name: "Sencha Lemon", description: "Sencha limun - Izvanredno aromatizovan zeleni čaj sa korom limuna i osvežavajućom limunovom travom." },
      bg: { name: "Sencha Lemon", description: "Sencha лимон - Изискано ароматизиран зелен чай с лимонова кора и освежаваща лимонена трева." },
      ro: { name: "Sencha Lemon", description: "Sencha Lămâie - Ceai verde rafinat aromatizat cu coajă de lămâie și lemongrass revigorant." }
    }
  },
  {
    id: "tearoute_mint",
    categoryId: "hot_drinks",
    price: 2.5,
    isVegan: true,
    isGlutenFree: true,
    translations: {
      el: { name: "Μέντα", description: "Δροσιστικό και χωνευτικό βότανο που ανακουφίζει απαλά το πεπτικό σύστημα." },
      en: { name: "Mint", description: "Refreshing and digestive herb that gently soothes the digestive system." },
      de: { name: "Mint", description: "Minze - Erfrischendes und verdauungsförderndes Kraut, das das Verdauungssystem sanft beruhigt." },
      fr: { name: "Mint", description: "Menthe - Herbe rafraîchissante et digestive qui apaise doucement le système digestif." },
      es: { name: "Mint", description: "Menta - Hierba refrescante y digestiva que alivia suavemente el sistema digestivo." },
      sr: { name: "Mint", description: "Nana - Osvežavajuća i probavna biljka koja nežno umiruje digestivni sistem." },
      bg: { name: "Mint", description: "Мента - Освежаваща и дигестивна билка, която нежно успокоява храносмилателната система." },
      ro: { name: "Mint", description: "Mentă - Plantă revigorantă și digestivă care calmează ușor sistemul digestiv." }
    }
  }
];