"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  ShieldAlert,
  FileText,
  CreditCard,
  AlertTriangle,
  ChevronRight,
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
    backHome: "Επιστροφή",
    title: "Νομικές Πληροφορίες",
    allergensTitle: "Αλλεργιογόνα & Δυσανεξίες",
    allergensText:
      "Για πληροφορίες σχετικά με την ύπαρξη ΑΛΛΕΡΓΙΟΓΟΝΩΝ ΣΥΣΤΑΤΙΚΩΝ ή ΟΥΣΙΩΝ που προκαλούν ΔΥΣΑΝΕΞΙΕΣ στα προσφερόμενα είδη, παρακαλούμε απευθυνθείτε στο προσωπικό.",
    allergenListTitle: "Κατάλογος Αλλεργιογόνων (Καν. ΕΕ 1169/2011)",
    allergenListText:
      "Ενημερώνουμε τους πελάτες μας ότι τα προϊόντα μας ενδέχεται να περιέχουν ή να έχουν έρθει σε επαφή με: 1. Δημητριακά (γλουτένη), 2. Καρκινοειδή, 3. Αυγά, 4. Ψάρια, 5. Αραχίδες (φιστίκια), και τα παράγωγά τους.",
    receiptTitle: "Νόμιμο Παραστατικό",
    receiptText:
      "Ο καταναλωτής δεν έχει υποχρέωση να πληρώσει εάν δεν λάβει το νόμιμο παραστατικό στοιχείο (απόδειξη - τιμολόγιο).",
    posTitle: "Τερματικό POS",
    posText:
      "Η επιχείρηση διαθέτει εγκεκριμένο τερματικό αποδοχής καρτών (POS) βάσει Ν.3862/10 & Ν.4440/16.",
    dev: "Κατασκευή Ιστοσελίδας:",
    legal: "Νομικά",
    menu: "Το Μενού",
  },
  en: {
    backHome: "Back",
    title: "Legal Information",
    allergensTitle: "Allergens & Intolerances",
    allergensText:
      "For questions regarding FOOD INTOLERANCE or FOOD ALLERGIES, don't hesitate to ask our personnel.",
    allergenListTitle: "Allergen List (EU Reg. 1169/2011)",
    allergenListText:
      "Please be advised that our products may contain or have come in contact with: 1. Cereals (gluten), 2. Crustaceans, 3. Eggs, 4. Fish, 5. Peanuts, and products thereof.",
    receiptTitle: "Legal Receipt",
    receiptText:
      "Consumer is not obliged to pay if the receipt has not been given.",
    posTitle: "POS Terminal",
    posText:
      "The establishment is equipped with an approved POS card terminal.",
    dev: "Web Development:",
    legal: "Legal",
    menu: "Menu",
  },
  de: {
    backHome: "Zurück",
    title: "Rechtliche Informationen",
    allergensTitle: "Allergene & Unverträglichkeiten",
    allergensText:
      "Bei Fragen zu LEBENSMITTELUNVERTRÄGLICHKEITEN oder ALLERGIEN wenden Sie sich bitte an unser Personal.",
    allergenListTitle: "Allergenliste (EU-Verordnung 1169/2011)",
    allergenListText:
      "Unsere Produkte können enthalten: 1. Getreide (Gluten), 2. Krebstiere, 3. Eier, 4. Fisch, 5. Erdnüsse und daraus gewonnene Erzeugnisse.",
    receiptTitle: "Quittung",
    receiptText:
      "Der Verbraucher ist nicht verpflichtet zu zahlen, wenn keine Quittung ausgestellt wurde.",
    posTitle: "POS-Terminal",
    posText: "Der Betrieb verfügt über ein zugelassenes POS-Kartenterminal.",
    dev: "Webentwicklung:",
    legal: "Rechtliches",
    menu: "Menü",
  },
  fr: {
    backHome: "Retour",
    title: "Informations Légales",
    allergensTitle: "Allergènes et Intolérances",
    allergensText:
      "Pour toute question concernant les INTOLÉRANCES ou ALLERGIES, n'hésitez pas à vous adresser à notre personnel.",
    allergenListTitle: "Liste des Allergènes (Règ. UE 1169/2011)",
    allergenListText:
      "Nos produits peuvent contenir : 1. Céréales (gluten), 2. Crustacés, 3. Œufs, 4. Poissons, 5. Arachides, et produits à base de ces allergènes.",
    receiptTitle: "Reçu Légal",
    receiptText:
      "Le consommateur n'est pas tenu de payer si le reçu ne lui a pas été remis.",
    posTitle: "Terminal de Paiement",
    posText:
      "L'établissement est équipé d'un terminal de paiement par carte (POS) agréé.",
    dev: "Développement Web:",
    legal: "Légal",
    menu: "Menu",
  },
  es: {
    backHome: "Volver",
    title: "Información Legal",
    allergensTitle: "Alérgenos e Intolerancias",
    allergensText:
      "Para preguntas sobre INTOLERANCIAS o ALERGIAS, consulte a nuestro personal.",
    allergenListTitle: "Lista de Alérgenos (Reg. UE 1169/2011)",
    allergenListText:
      "Nuestros productos pueden contener: 1. Cereales (gluten), 2. Crustáceos, 3. Huevos, 4. Pescado, 5. Cacahuetes, y productos derivados.",
    receiptTitle: "Recibo Legal",
    receiptText:
      "El consumidor no está obligado a pagar si no se ha entregado el recibo.",
    posTitle: "Terminal POS",
    posText: "El establecimiento cuenta con un terminal POS aprobado.",
    dev: "Desarrollo Web:",
    legal: "Legal",
    menu: "Menú",
  },
  sr: {
    backHome: "Nazad",
    title: "Pravne informacije",
    allergensTitle: "Alergeni i Intolerancije",
    allergensText:
      "Za pitanja u vezi sa INTOLERANCIJOM ili ALERGIJAMA, pitajte naše osoblje.",
    allergenListTitle: "Lista Alergena (EU 1169/2011)",
    allergenListText:
      "Naši proizvodi mogu sadržati: 1. Žitarice (gluten), 2. Rakovi, 3. Jaja, 4. Riba, 5. Kikiriki, i njihove proizvode.",
    receiptTitle: "Pravni Račun",
    receiptText: "Potrošač nije dužan da plati ako mu nije izdat račun.",
    posTitle: "POS Terminal",
    posText: "Objekat je opremljen odobrenim POS terminalom.",
    dev: "Izrada sajta:",
    legal: "Pravno",
    menu: "Meni",
  },
  bg: {
    backHome: "Обратно",
    title: "Правна информация",
    allergensTitle: "Алергени и Непоносимости",
    allergensText:
      "За въпроси относно ХРАНИТЕЛНИ НЕПОНОСИМОСТИ или АЛЕРГИИ, попитайте нашия персонал.",
    allergenListTitle: "Списък на Алергените (ЕС 1169/2011)",
    allergenListText:
      "Нашите продукти могат да съдържат: 1. Зърнени (глутен), 2. Ракообразни, 3. Яйца, 4. Риба, 5. Фъстъци.",
    receiptTitle: "Касова бележка",
    receiptText: "Потребителят не е длъжен да плати без касова бележка.",
    posTitle: "ПОС терминал",
    posText: "Обектът разполага с одобрен ПОС терминал.",
    dev: "Изработка на сайт:",
    legal: "Правни",
    menu: "Меню",
  },
  ro: {
    backHome: "Înapoi",
    title: "Informații Legale",
    allergensTitle: "Alergeni & Intoleranțe",
    allergensText:
      "Pentru întrebări referitoare la INTOLERANȚE sau ALERGII, vă rugăm să întrebați personalul nostru.",
    allergenListTitle: "Lista de Alergeni (UE 1169/2011)",
    allergenListText:
      "Produsele noastre pot conține: 1. Cereale (gluten), 2. Crustacee, 3. Ouă, 4. Pește, 5. Arahide.",
    receiptTitle: "Bon Fiscal",
    receiptText:
      "Consumatorul nu este obligat să plătească dacă nu i-a fost eliberat bonul.",
    posTitle: "Terminal POS",
    posText: "Unitatea este echipată cu un terminal POS aprobat.",
    dev: "Dezvoltare Web:",
    legal: "Legal",
    menu: "Meniu",
  },
};

export default function LegalPage() {
  const [lang, setLang] = useState<LangCode>("el");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const ui = translations[lang];
  const currentLangObj =
    availableLanguages.find((l) => l.code === lang) || availableLanguages[0];

  const fadeUpVariant: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#97dcf5] selection:text-slate-900 flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-[#97dcf5] font-bold transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">{ui.backHome}</span>
          </Link>
          <Link href="/" className="relative w-24 h-7 md:w-32 md:h-10">
            <Image
              src="/images/logo/zucchero_logo.png"
              alt="Zucchero Logo"
              fill
              className="object-contain"
              priority
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
      </header>

      <main className="flex-grow py-12 md:py-20 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
              {ui.title}
            </h1>
            <div className="w-16 h-1.5 bg-[#97dcf5] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  {ui.allergensTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-14">
                {ui.allergensText}
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  {ui.allergenListTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-14">
                {ui.allergenListText}
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  {ui.receiptTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-14 font-medium italic">
                {ui.receiptText}
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center shrink-0">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  {ui.posTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-14">
                {ui.posText}
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-10 px-4 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8 mb-6">
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              {ui.backHome}
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href={`/menu?lang=${lang}`}
              className="hover:text-white transition-colors"
            >
              {ui.menu}
            </Link>
          </div>
          <div className="text-sm text-center md:text-right">
            <p className="mb-1 text-slate-500 text-[10px] uppercase tracking-wider">
              {ui.dev}
            </p>
            <p className="font-bold text-white text-sm mb-1">Θωμάς Χασιώτης</p>
            <a
              href="https://github.com/TChasiotis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#97dcf5] hover:text-white transition-colors flex items-center justify-center md:justify-end gap-1 text-xs"
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
  );
}
