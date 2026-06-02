"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  MapPin,
  Phone,
  ChevronRight,
  Star,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Coffee,
  Heart,
} from "lucide-react";

type LangCode = "el" | "en" | "de" | "fr" | "es" | "sr" | "bg" | "ro";

const availableLanguages = [
  { code: "el", label: "Ελληνικά", flag: "/images/flags/greece_flag.png" },
  {
    code: "en",
    label: "English",
    flag: "/images/flags/united_kingdom_flag.png",
  },
  { code: "de", label: "Deutsch", flag: "/images/flags/germany_flag.png" },
  { code: "fr", label: "Français", flag: "/images/flags/france_flag.png" },
  { code: "es", label: "Español", flag: "/images/flags/spain_flag.png" },
  { code: "sr", label: "Srpski", flag: "/images/flags/serbia_flag.png" },
  { code: "bg", label: "Български", flag: "/images/flags/bulgaria_flag.png" },
  { code: "ro", label: "Română", flag: "/images/flags/romania_flag.png" },
];

const translations: Record<LangCode, any> = {
  el: {
    navHome: "Αρχική",
    navSpecialties: "Σπεσιαλιτε",
    navStory: "Η Ιστορια",
    navContact: "Επικοινωνια",
    menu: "Το Μενού",
    viewMenu: "Δείτε το Μενού",
    since: "ΑΠΟ ΤΟ 1972",
    heroTitle: "Η αγάπη για το καλό γλυκό παραμένει.",
    heroDesc:
      "Δημιουργούμε καθημερινά γλυκά υψηλής ποιότητας με τα πιο αγνά υλικά, σεβόμενοι την παράδοση και προσθέτοντας μοντέρνες πινελιές.",
    exploreBtn: "Εξερευνήστε τις Γεύσεις Μας",
    specTitle: "Οι Δημιουργίες Μας",
    spec1: "Πάστες & Τούρτες",
    spec1Desc:
      "Φρέσκα γλυκά ψυγείου, αφράτες πάστες και τούρτες για κάθε ξεχωριστή σας περίσταση.",
    spec2: "Παραδοσιακά Σιροπιαστά",
    spec2Desc:
      "Αυθεντικές συνταγές με πλούσιο σιρόπι, φρέσκο βούτυρο και διαλεχτούς ξηρούς καρπούς.",
    spec3: "Αλμυρές Απολαύσεις",
    spec3Desc:
      "Χωριάτικες πίτες με τραγανό φύλλο και ζεστή, παραδοσιακή μπουγάτσα κάθε πρωί.",
    spec4: "Καφές & Ροφήματα",
    spec4Desc:
      "Απολαύστε τον εκλεκτό καφέ μας και δροσιστικά ροφήματα που συνοδεύουν τέλεια το γλυκό σας.",
    storyTitle: "Η Ιστορία Μας",
    story1Title: "Η Αρχή του Ονείρου",
    story1Desc:
      "Όλα ξεκίνησαν το 1972, όταν ο Αριστόδημος και η Ανάστω Παράσχου άνοιξαν το πρώτο τους ζαχαροπλαστείο, εμπνευσμένοι από την αγάπη τους για τα αυθεντικά γλυκά και τις παραδοσιακές συνταγές. Αν και εκείνη η διαδρομή ολοκληρώθηκε το 1978, το όνειρο δεν έσβησε ποτέ.",
    story2Title: "Η Δεύτερη Γενιά",
    story2Desc:
      "Το 2007, ο γιος τους Χριστόδουλος Παράσχου, μαζί με τη σύζυγό του Κωνσταντίνα Μεσοχωρίτου, αποφάσισαν να αναβιώσουν τη γλυκιά ιστορία. Δημιουργούν καθημερινά γλυκά υψηλής ποιότητας, προσθέτοντας μοντέρνες πινελιές στην παράδοση.",
    story3Title: "Το Σήμερα",
    story3Desc:
      "Οι γεύσεις, οι αναμνήσεις και το πάθος για δημιουργία παραμένουν ζωντανά. Χρησιμοποιούμε τα πιο αγνά υλικά για να σας προσφέρουμε την απόλυτη εμπειρία απόλαυσης.",
    contactTitle: "Επισκεφθείτε Μας",
    addressTitle: "Διεύθυνση",
    addressData: "Πλατεία Αγίων Αναργύρων 2, 54634, Θεσσαλονίκη, Ελλάδα",
    phone: "Τηλέφωνο",
    followUs: "Ακολουθήστε μας:",
    rating: "Αξιολογήστε μας!",
    legal: "Νομικά & Αλλεργιογόνα",
    dev: "Κατασκευή Ιστοσελίδας:",
  },
  en: {
    navHome: "Home",
    navSpecialties: "Specialties",
    navStory: "Our Story",
    navContact: "Contact",
    menu: "Menu",
    viewMenu: "View Menu",
    since: "SINCE 1972",
    heroTitle: "The love for fine dessert remains.",
    heroDesc:
      "We create high-quality desserts daily using the purest ingredients, respecting tradition and adding modern touches.",
    exploreBtn: "Explore Our Flavors",
    specTitle: "Our Creations",
    spec1: "Pastries & Cakes",
    spec1Desc:
      "Fresh refrigerated sweets, fluffy pastries, and cakes for every special occasion.",
    spec2: "Traditional Syrupy Sweets",
    spec2Desc:
      "Authentic recipes with rich syrup, fresh butter, and premium nuts.",
    spec3: "Savory Delights",
    spec3Desc:
      "Rustic pies with crispy phyllo and warm, traditional bougatsa every morning.",
    spec4: "Coffee & Beverages",
    spec4Desc:
      "Enjoy our premium coffee and refreshing beverages that perfectly accompany your dessert.",
    storyTitle: "Our Story",
    story1Title: "The Beginning",
    story1Desc:
      "It all started in 1972, when Aristodimos and Anasto Paraschou opened their first pastry shop, inspired by their love for authentic sweets and traditional recipes. Although that journey ended in 1978, the dream never faded.",
    story2Title: "The Second Generation",
    story2Desc:
      "In 2007, their son Christodoulos Paraschou, along with his wife Konstantina Mesochoritou, decided to revive the sweet story. They create high-quality desserts daily, adding modern touches to tradition.",
    story3Title: "Today",
    story3Desc:
      "The flavors, memories, and passion for creation remain alive. We use the purest ingredients to offer you the ultimate tasting experience.",
    contactTitle: "Visit Us",
    addressTitle: "Address",
    addressData: "Plateía Aghíon Anarghíron 2, 54634, Thessaloníki, Greece",
    phone: "Phone",
    followUs: "Follow us:",
    rating: "Rate us!",
    legal: "Legal & Allergens",
    dev: "Web Development:",
  },
  de: {
    navHome: "Startseite",
    navSpecialties: "Spezialitäten",
    navStory: "Geschichte",
    navContact: "Kontakt",
    menu: "Menü",
    viewMenu: "Menü ansehen",
    since: "SEIT 1972",
    heroTitle: "Die Liebe zu gutem Dessert bleibt.",
    heroDesc:
      "Wir kreieren täglich hochwertige Desserts mit den reinsten Zutaten, respektieren die Tradition und fügen moderne Akzente hinzu.",
    exploreBtn: "Entdecken Sie unsere Aromen",
    specTitle: "Unsere Kreationen",
    spec1: "Feingebäck & Torten",
    spec1Desc:
      "Frische Süßigkeiten, lockeres Gebäck und Torten für jeden besonderen Anlass.",
    spec2: "Traditionelle Sirup-Süßigkeiten",
    spec2Desc:
      "Authentische Rezepte mit reichhaltigem Sirup, frischer Butter und Premium-Nüssen.",
    spec3: "Herzhafte Genüsse",
    spec3Desc:
      "Rustikale Pitas mit knusprigem Phyllo und warme, traditionelle Bougatsa jeden Morgen.",
    spec4: "Kaffee & Getränke",
    spec4Desc:
      "Genießen Sie unseren Premium-Kaffee und erfrischende Getränke, die perfekt zu Ihrem Dessert passen.",
    storyTitle: "Unsere Geschichte",
    story1Title: "Der Anfang",
    story1Desc:
      "Alles begann 1972, als Aristodimos und Anasto Paraschou ihre erste Konditorei eröffneten, inspiriert von ihrer Liebe zu authentischen Süßigkeiten und traditionellen Rezepten.",
    story2Title: "Die zweite Generation",
    story2Desc:
      "Im Jahr 2007 beschloss ihr Sohn Christodoulos Paraschou zusammen mit seiner Frau Konstantina Mesochoritou, die süße Geschichte wieder aufleben zu lassen.",
    story3Title: "Heute",
    story3Desc:
      "Die Aromen, Erinnerungen und die Leidenschaft für das Schaffen bleiben lebendig. Wir verwenden die reinsten Zutaten.",
    contactTitle: "Besuchen Sie uns",
    addressTitle: "Adresse",
    addressData: "Plateía Aghíon Anarghíron 2, 54634, Thessaloníki, Greece",
    phone: "Telefon",
    followUs: "Folgen Sie uns:",
    rating: "Bewerten Sie uns!",
    legal: "Rechtliches & Allergene",
    dev: "Webentwicklung:",
  },
  fr: {
    navHome: "Accueil",
    navSpecialties: "Spécialités",
    navStory: "Histoire",
    navContact: "Contact",
    menu: "Menu",
    viewMenu: "Voir le Menu",
    since: "DEPUIS 1972",
    heroTitle: "L'amour du bon dessert reste.",
    heroDesc:
      "Nous créons quotidiennement des desserts de haute qualité avec les ingrédients les plus purs, en respectant la tradition.",
    exploreBtn: "Explorez nos saveurs",
    specTitle: "Nos Créations",
    spec1: "Pâtisseries & Gâteaux",
    spec1Desc:
      "Douceurs fraîches, pâtisseries moelleuses et gâteaux pour chaque occasion spéciale.",
    spec2: "Douceurs Sirupeuses Traditionnelles",
    spec2Desc:
      "Recettes authentiques avec un sirop riche, du beurre frais et des noix de qualité.",
    spec3: "Délices Salés",
    spec3Desc:
      "Tourtes rustiques avec pâte phyllo croustillante et bougatsa chaude chaque matin.",
    spec4: "Café & Boissons",
    spec4Desc:
      "Savourez notre café de qualité et des boissons rafraîchissantes qui accompagnent parfaitement votre dessert.",
    storyTitle: "Notre Histoire",
    story1Title: "Le Début",
    story1Desc:
      "Tout a commencé en 1972, lorsque Aristodimos et Anasto Paraschou ont ouvert leur première pâtisserie, inspirés par leur amour pour les douceurs authentiques.",
    story2Title: "La Deuxième Génération",
    story2Desc:
      "En 2007, leur fils Christodoulos Paraschou, avec sa femme Konstantina, ont décidé de faire revivre la douce histoire.",
    story3Title: "Aujourd'hui",
    story3Desc:
      "Les saveurs, les souvenirs et la passion de la création restent vivants. Nous utilisons les ingrédients les plus purs.",
    contactTitle: "Visitez-nous",
    addressTitle: "Adresse",
    addressData: "Plateía Aghíon Anarghíron 2, 54634, Thessaloníki, Greece",
    phone: "Téléphone",
    followUs: "Suivez-nous:",
    rating: "Évaluez-nous!",
    legal: "Légal & Allergènes",
    dev: "Développement Web:",
  },
  es: {
    navHome: "Inicio",
    navSpecialties: "Especialidades",
    navStory: "Historia",
    navContact: "Contacto",
    menu: "Menú",
    viewMenu: "Ver Menú",
    since: "DESDE 1972",
    heroTitle: "El amor por el buen postre perdura.",
    heroDesc:
      "Creamos postres de alta calidad a diario con los ingredientes más puros, respetando la tradición.",
    exploreBtn: "Explora nuestros sabores",
    specTitle: "Nuestras Creaciones",
    spec1: "Pasteles y Tartas",
    spec1Desc:
      "Dulces frescos, pasteles esponjosos y tartas para cada ocasión especial.",
    spec2: "Dulces Tradicionales en Almíbar",
    spec2Desc:
      "Recetas auténticas con rico almíbar, mantequilla fresca y nueces premium.",
    spec3: "Delicias Saladas",
    spec3Desc:
      "Pasteles rústicos con crujiente masa filo y bougatsa caliente cada mañana.",
    spec4: "Café y Bebidas",
    spec4Desc:
      "Disfruta de nuestro café premium y refrescantes bebidas que acompañan perfectamente tu postre.",
    storyTitle: "Nuestra Historia",
    story1Title: "El Comienzo",
    story1Desc:
      "Todo comenzó en 1972, cuando Aristodimos y Anasto Paraschou abrieron su primera pastelería.",
    story2Title: "La Segunda Generación",
    story2Desc:
      "En 2007, su hijo Christodoulos Paraschou, junto con su esposa Konstantina, decidieron revivir la dulce historia.",
    story3Title: "Hoy",
    story3Desc:
      "Los sabores, los recuerdos y la pasión por la creación siguen vivos.",
    contactTitle: "Visítanos",
    addressTitle: "Dirección",
    addressData: "Plateía Aghíon Anarghíron 2, 54634, Thessaloníki, Greece",
    phone: "Teléfono",
    followUs: "Síganos:",
    rating: "¡Califícanos!",
    legal: "Legal y Alérgenos",
    dev: "Desarrollo Web:",
  },
  sr: {
    navHome: "Početna",
    navSpecialties: "Specijaliteti",
    navStory: "Priča",
    navContact: "Kontakt",
    menu: "Meni",
    viewMenu: "Pogledaj Meni",
    since: "OD 1972",
    heroTitle: "Ljubav prema dobrom desertu ostaje.",
    heroDesc:
      "Svakodnevno stvaramo visokokvalitetne deserte od najčistijih sastojaka, poštujući tradiciju.",
    exploreBtn: "Istražite naše ukuse",
    specTitle: "Naše Kreacije",
    spec1: "Peciva i Torte",
    spec1Desc:
      "Sveži slatkiši, mekani kolači i torte za svaku posebnu priliku.",
    spec2: "Tradicionalni Sirupasti Slatkiši",
    spec2Desc:
      "Autentični recepti sa bogatim sirupom, svežim puterom i vrhunskim orasima.",
    spec3: "Slani Užitci",
    spec3Desc:
      "Rustične pite sa hrskavim korama i topla bougatsa svakog jutra.",
    spec4: "Kafa i Pića",
    spec4Desc:
      "Uživajte u našoj vrhunskoj kafi i osvežavajućim napicima koji savršeno prate vaš desert.",
    storyTitle: "Naša priča",
    story1Title: "Početak",
    story1Desc:
      "Sve je počelo 1972. godine, kada su Aristodimos i Anasto Parashou otvorili svoju prvu poslastičarnicu.",
    story2Title: "Druga generacija",
    story2Desc:
      "Godine 2007, njihov sin Hristodulos, sa suprugom Konstantinom, odlučili su da ožive slatku priču.",
    story3Title: "Danas",
    story3Desc:
      "Ukusi, sećanja i strast za stvaranjem ostaju živi. Koristimo najčistije sastojke.",
    contactTitle: "Posetite Nas",
    addressTitle: "Adresa",
    addressData: "Plateía Aghíon Anarghíron 2, 54634, Thessaloníki, Greece",
    phone: "Telefon",
    followUs: "Pratite nas:",
    rating: "Ocenite nas!",
    legal: "Pravno i Alergeni",
    dev: "Izrada sajta:",
  },
  bg: {
    navHome: "Начало",
    navSpecialties: "Специалитети",
    navStory: "История",
    navContact: "Контакт",
    menu: "Меню",
    viewMenu: "Вижте менюто",
    since: "ОТ 1972",
    heroTitle: "Любовта към хубавия десерт остава.",
    heroDesc:
      "Ежедневно създаваме висококачествени десерти от най-чистите съставки, уважавайки традицията.",
    exploreBtn: "Разгледайте нашите вкусове",
    specTitle: "Нашите Творения",
    spec1: "Пасти и Торти",
    spec1Desc:
      "Пресни сладкиши, пухкави пасти и торти за всеки специален повод.",
    spec2: "Традиционни Сиропирани Сладкиши",
    spec2Desc:
      "Автентични рецепти с богат сироп, прясно масло и първокласни ядки.",
    spec3: "Солени Изкушения",
    spec3Desc: "Селски баници с хрупкави кори и топла бугаца всяка сутрин.",
    spec4: "Кафе и Напитки",
    spec4Desc: "Насладете се на нашето първокласно кафе и освежаващи напитки.",
    storyTitle: "Нашата история",
    story1Title: "Началото",
    story1Desc:
      "Всичко започна през 1972 г., когато Аристодимос и Анасто Парашу отвориха първата си сладкарница.",
    story2Title: "Второто поколение",
    story2Desc:
      "През 2007 г. техният син Христодулос и съпругата му Константина решиха да възродят сладката история.",
    story3Title: "Днес",
    story3Desc: "Вкусовете, спомените и страстта към творението остават живи.",
    contactTitle: "Посетете Ни",
    addressTitle: "Адрес",
    addressData: "Plateía Aghíon Anarghíron 2, 54634, Thessaloníki, Greece",
    phone: "Телефон",
    followUs: "Последвайте ни:",
    rating: "Оценете ни!",
    legal: "Правни & Алергени",
    dev: "Изработка на сайт:",
  },
  ro: {
    navHome: "Acasă",
    navSpecialties: "Specialități",
    navStory: "Poveste",
    navContact: "Contact",
    menu: "Meniu",
    viewMenu: "Vezi Meniul",
    since: "DIN 1972",
    heroTitle: "Dragostea pentru desertul bun rămâne.",
    heroDesc:
      "Creăm zilnic deserturi de înaltă calitate folosind cele mai pure ingrediente, respectând tradiția.",
    exploreBtn: "Explorați aromele noastre",
    specTitle: "Creațiile Noastre",
    spec1: "Produse de Patiserie & Torturi",
    spec1Desc:
      "Dulciuri proaspete, prăjituri pufoase și torturi pentru fiecare ocazie specială.",
    spec2: "Dulciuri Tradiționale cu Sirop",
    spec2Desc: "Rețete autentice cu sirop bogat, unt proaspăt și nuci premium.",
    spec3: "Delicii Sărate",
    spec3Desc:
      "Plăcinte rustice cu aluat crocant și bougatsa caldă în fiecare dimineață.",
    spec4: "Cafea & Băuturi",
    spec4Desc:
      "Bucurați-vă de cafeaua noastră premium și de băuturile răcoritoare.",
    storyTitle: "Povestea Noastră",
    story1Title: "Începutul",
    story1Desc:
      "Totul a început în 1972, când Aristodimos și Anasto Paraschou și-au deschis prima cofetărie.",
    story2Title: "A Doua Generație",
    story2Desc:
      "În 2007, fiul lor Christodoulos, împreună cu soția sa Konstantina, au decis să reînvie povestea dulce.",
    story3Title: "Astăzi",
    story3Desc:
      "Aromele, amintirile și pasiunea pentru creație rămân vii. Folosim cele mai pure ingrediente.",
    contactTitle: "Vizitați-ne",
    addressTitle: "Adresă",
    addressData: "Plateía Aghíon Anarghíron 2, 54634, Thessaloníki, Greece",
    phone: "Telefon",
    followUs: "Urmărește-ne:",
    rating: "Evaluează-ne!",
    legal: "Legal & Alergeni",
    dev: "Dezvoltare Web:",
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<LangCode>("el");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => setMounted(true), []);

  const ui = translations[lang];
  const currentLangObj =
    availableLanguages.find((l) => l.code === lang) || availableLanguages[0];

  // ΤΕΛΕΙΑ ΣΥΜΜΕΤΡΙΑ: Το Fade In & Fade Out είναι ακριβώς ίδια!
  const fadeUpVariant: any = {
    hidden: {
      opacity: 0,
      y: 60,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const floatVariant: any = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // ΑΥΤΟ ΕΙΝΑΙ ΤΟ ΚΟΛΠΟ! Μια αόρατη ζώνη -15% πάνω/κάτω.
  // Όταν το element ακουμπήσει αυτό το περιθώριο, ενεργοποιεί το hidden (fade out) ΕΝΩ το βλέπεις!
  const symmetricViewport = { once: false, margin: "-15% 0px -15% 0px" };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-slate-900 font-sans selection:bg-[#97dcf5] selection:text-slate-900 overflow-x-hidden scroll-smooth">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#97dcf5] origin-left z-[60]"
      />

      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all mt-1.5">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -ml-2 text-slate-700 hover:text-[#97dcf5] transition-colors md:hidden"
            >
              <Menu size={28} />
            </button>
            <Link
              href="/"
              className="relative w-28 h-8 md:w-32 md:h-10 ml-2 md:ml-0"
            >
              <Image
                src="/images/logo/zucchero_logo.png"
                alt="Zucchero Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#specialties"
              className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              {ui.navSpecialties}
            </a>
            <a
              href="#story"
              className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              {ui.navStory}
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-slate-900 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              {ui.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href={`/menu?lang=${lang}`}
              className="hidden sm:flex group items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all"
            >
              {ui.menu}{" "}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 p-1.5 md:px-3 md:py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg md:rounded-full transition-colors"
              >
                <div className="relative w-5 h-3.5 md:w-6 md:h-4 rounded-sm overflow-hidden shadow-sm">
                  <Image
                    src={currentLangObj.flag}
                    alt={currentLangObj.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-black uppercase text-slate-700 hidden sm:block">
                  {currentLangObj.code}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-slate-600 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                    >
                      {availableLanguages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l.code as LangCode);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${lang === l.code ? "bg-slate-50 font-bold text-slate-800" : "text-slate-600 font-medium"}`}
                        >
                          <div className="relative w-6 h-4 shadow-sm border border-slate-200 rounded-sm overflow-hidden shrink-0">
                            <Image
                              src={l.flag}
                              alt={l.label}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-3/4 max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                <div className="relative w-28 h-8">
                  <Image
                    src="/images/logo/zucchero_logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <a
                  href="#"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-[#97dcf5] transition-colors"
                >
                  {ui.navHome}
                </a>
                <a
                  href="#specialties"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-[#97dcf5] transition-colors"
                >
                  {ui.navSpecialties}
                </a>
                <a
                  href="#story"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-[#97dcf5] transition-colors"
                >
                  {ui.navStory}
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-[#97dcf5] transition-colors"
                >
                  {ui.navContact}
                </a>
              </div>
              <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
                <Link
                  href={`/menu?lang=${lang}`}
                  className="w-full flex justify-center items-center gap-2 bg-[#97dcf5] text-slate-900 py-4 rounded-xl font-black text-lg shadow-md hover:bg-[#7bc8e6] transition-colors"
                >
                  {ui.viewMenu} <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-0">
        <Image
          src="/images/information/front.jpg"
          alt="Zucchero Bakery Exterior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* 👇 2. ΕΔΩ ΑΚΡΙΒΩΣ ΚΑΝΕΙΣ ΕΠΙΚΟΛΛΗΣΗ ΤΟΝ ΚΩΔΙΚΑ ΤΟΥ BANNER ΠΟΥ ΣΟΥ ΕΔΩΣΑ 👇 */}
      {/* <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-30 pt-28 md:pt-32 px-4 max-w-5xl mx-auto w-full"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/40">
          <div className="p-6 md:p-10 flex flex-col justify-center w-full md:w-3/5 order-2 md:order-1">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded-full text-xs mb-3 w-max">
              ΑΓΑΠΗΜΕΝΟ ΤΟΥ ΜΗΝΑ
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">
              Ολόφρεσκοι Λουκουμάδες
            </h3>
            <p className="text-slate-600 mb-6 font-medium">
              Τραγανοί απ' έξω, αφράτοι από μέσα. Τηγανίζονται μπροστά σας και σερβίρονται ζεστοί με πλούσιο μέλι ή σοκολάτα!
            </p>
            <Link href={`/menu?lang=${lang}`} className="bg-orange-500 text-white font-bold py-2.5 px-6 rounded-xl w-max hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              {ui.menu}
            </Link>
          </div>
          <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-slate-900 order-1 md:order-2">
            <video 
              src="/1000033031.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>    */}

      <section className="relative z-10 h-[65vh] flex flex-col items-center justify-center text-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-[#97dcf5] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 drop-shadow-md">
            {ui.since}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            {ui.heroTitle}
          </h1>
          <p className="text-slate-200 text-base md:text-xl mb-8 max-w-2xl font-light px-4 hidden md:block">
            {ui.heroDesc}
          </p>
          <Link
            href={`/menu?lang=${lang}`}
            className="bg-[#97dcf5] text-slate-900 font-black text-base md:text-lg px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(151,220,245,0.3)] hover:scale-105 transition-transform duration-300"
          >
            {ui.exploreBtn}
          </Link>
        </motion.div>
      </section>

      <div className="relative z-20 bg-white rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
        {/* --- 2. SPECIALTIES SECTION --- */}
        <section
          id="specialties"
          className="py-20 md:py-32 px-4 bg-white scroll-mt-10 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={symmetricViewport}
              variants={fadeUpVariant}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">
                {ui.specTitle}
              </h2>
              <div className="w-20 h-1.5 bg-[#97dcf5] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={symmetricViewport}
                variants={fadeUpVariant}
              >
                <motion.div
                  variants={floatVariant}
                  animate="animate"
                  className="h-full bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Heart size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {ui.spec1}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {ui.spec1Desc}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={symmetricViewport}
                variants={fadeUpVariant}
              >
                <motion.div
                  variants={floatVariant}
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                  className="h-full bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {ui.spec2}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {ui.spec2Desc}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={symmetricViewport}
                variants={fadeUpVariant}
              >
                <motion.div
                  variants={floatVariant}
                  animate="animate"
                  style={{ animationDelay: "2s" }}
                  className="h-full bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <Star size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {ui.spec3}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {ui.spec3Desc}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={symmetricViewport}
                variants={fadeUpVariant}
              >
                <motion.div
                  variants={floatVariant}
                  animate="animate"
                  style={{ animationDelay: "3s" }}
                  className="h-full bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-stone-200 text-stone-700 rounded-2xl flex items-center justify-center mb-6">
                    <Coffee size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {ui.spec4}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {ui.spec4Desc}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 3. STORY SECTION --- */}
        <section
          id="story"
          className="py-20 md:py-32 px-4 max-w-6xl mx-auto border-t border-slate-100 scroll-mt-10 overflow-hidden"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={symmetricViewport}
            variants={fadeUpVariant}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">
              {ui.storyTitle}
            </h2>
            <div className="w-20 h-1.5 bg-[#97dcf5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div className="hidden md:block sticky top-28 h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/information/pagwto.jpg"
                alt="Zucchero History"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-16 md:space-y-32 py-4 md:py-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={symmetricViewport}
                variants={fadeUpVariant}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {ui.story1Title}
                </h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  {ui.story1Desc}
                </p>
              </motion.div>

              <div className="md:hidden relative h-64 rounded-3xl overflow-hidden shadow-lg my-8">
                <Image
                  src="/images/information/pagwto.jpg"
                  alt="Zucchero History"
                  fill
                  className="object-cover"
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={symmetricViewport}
                variants={fadeUpVariant}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {ui.story2Title}
                </h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  {ui.story2Desc}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={symmetricViewport}
                variants={fadeUpVariant}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {ui.story3Title}
                </h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  {ui.story3Desc}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 4. CONTACT SECTION --- */}
        <section
          id="contact"
          className="py-20 md:py-24 px-4 bg-slate-50 border-t border-slate-200 scroll-mt-10 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={symmetricViewport}
              variants={fadeUpVariant}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200">
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8">
                  {ui.contactTitle}
                </h3>
                <div className="space-y-8 mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">
                        {ui.addressTitle}
                      </h4>
                      <p className="text-slate-600 text-sm md:text-base">
                        {lang === "el"
                          ? "Πλατεία Αγίων Αναργύρων 2, 54634, Θεσσαλονίκη, Ελλάδα"
                          : ui.addressData}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{ui.phone}</h4>
                      <a
                        href="tel:+302310215575"
                        className="text-slate-600 md:text-lg hover:text-blue-600 transition-colors"
                      >
                        +30 2310 215 575
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center gap-4">
                  <span className="font-bold text-slate-800">
                    {ui.followUs}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/zucchero_pastry/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-100 hover:bg-pink-100 text-slate-600 hover:text-pink-600 p-3 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/p/Zucchero-%CE%96%CE%B1%CF%87%CE%B1%CF%81%CE%BF%CF%80%CE%BB%CE%B1%CF%83%CF%84%CE%B5%CE%AF%CE%BF-100063474823792/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 p-3 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="relative w-full h-[300px] md:h-full min-h-[300px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 bg-slate-200">
                  {/* LIVE GOOGLE MAP - ME ΚΟΚΚΙΝΗ ΠΙΝΕΖΑ ΑΚΡΙΒΩΣ ΣΤΟ ΜΑΓΑΖΙ */}
                  <iframe
                    src="https://maps.google.com/maps?q=Zucchero%20%CE%96%CE%B1%CF%87%CE%B1%CF%81%CE%BF%CF%80%CE%BB%CE%B1%CF%83%CF%84%CE%B5%CE%AF%CE%BF%20Thessaloniki&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJxdIG4004qBQRBNUrPRSfydQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 flex items-center justify-between hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div>
                    <h4 className="font-bold text-slate-800 text-base md:text-lg mb-1">
                      {ui.rating}
                    </h4>

                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} fill="currentColor" size={16} />
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                    <ChevronRight size={20} />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 5. FOOTER --- */}
        <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-10 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium">
              <Link
                href="/legal"
                className="hover:text-white transition-colors"
              >
                {ui.legal}
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href={`/menu?lang=${lang}`}
                className="hover:text-white transition-colors"
              >
                {ui.menu}
              </Link>
            </div>
            <div className="text-sm text-center lg:text-right bg-slate-800/50 px-5 py-3 rounded-2xl border border-slate-700/50">
              <p className="mb-1 text-slate-500 text-[10px] uppercase tracking-wider">
                {ui.dev}
              </p>
              <p className="font-black text-white text-base mb-1">
                Θωμάς Χασιώτης
              </p>
              <a
                href="https://github.com/TChasiotis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#97dcf5] hover:text-white transition-colors flex items-center justify-center lg:justify-end gap-1 text-xs"
              >
                GitHub: @TChasiotis <ChevronRight size={12} />
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-slate-600">
            <p>
              © {new Date().getFullYear()} Zucchero Ζαχαροπλαστείο. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
