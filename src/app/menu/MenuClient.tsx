"use client";

import "../globals.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Search, X } from "lucide-react";

// --- ΤΟ ΕΞΥΠΝΟ ΛΕΞΙΚΟ ΓΙΑ ΤΟ UI ---
const uiTranslations = {
  el: {
    search: "Αναζήτηση προϊόντος...",
    noResults: "Δεν βρέθηκε κάτι για",
    perKg: "/ κιλό",
    perPortion: "/ μερίδα",
    rights: "Όλα τα δικαιώματα διατηρούνται",
    vegan: "Vegan / Νηστίσιμο",
    nuts: "Ξηροί Καρποί",
    glutenFree: "Χωρίς Γλουτένη",
    citrus: "Εσπεριδοειδή",
    strawberry: "Φράουλα",
    cherry: "Κεράσι",
  },
  en: {
    search: "Search for items...",
    noResults: "No results found for",
    perKg: "/ kg",
    perPortion: "/ portion",
    rights: "All rights reserved",
    vegan: "Vegan",
    nuts: "Nuts",
    glutenFree: "Gluten Free",
    citrus: "Citrus Fruits",
    strawberry: "Strawberry",
    cherry: "Cherry",
  },
  de: {
    search: "Artikel suchen...",
    noResults: "Keine Ergebnisse für",
    perKg: "/ kg",
    perPortion: "/ Portion",
    rights: "Alle Rechte vorbehalten",
    vegan: "Vegan",
    nuts: "Nüsse",
    glutenFree: "Glutenfrei",
    citrus: "Zitrusfrüchte",
    strawberry: "Erdbeere",
    cherry: "Kirsche",
  },
  fr: {
    search: "Rechercher des articles...",
    noResults: "Aucun résultat pour",
    perKg: "/ kg",
    perPortion: "/ Portion",
    rights: "Tous droits réservés",
    vegan: "Végan",
    nuts: "Fruits à coque",
    glutenFree: "Sans Gluten",
    citrus: "Agrumes",
    strawberry: "Fraise",
    cherry: "Cerise",
  },
  es: {
    search: "Buscar artículos...",
    noResults: "No hay resultados para",
    perKg: "/ kg",
    perPortion: "/ porción",
    rights: "Todos los derechos reservados",
    vegan: "Vegano",
    nuts: "Frutos Secos",
    glutenFree: "Sin Gluten",
    citrus: "Cítricos",
    strawberry: "Fresa",
    cherry: "Cereza",
  },
  sr: {
    search: "Pretraži proizvode...",
    noResults: "Nema rezultata za",
    perKg: "/ kg",
    perPortion: "/ porcija",
    rights: "Sva prava zadržana",
    vegan: "Vegansko / Posno",
    nuts: "Orašasti Plodovi",
    glutenFree: "Bez Glutena",
    citrus: "Citrusi",
    strawberry: "Jagoda",
    cherry: "Višnja",
  },
  bg: {
    search: "Търсене на продукти...",
    noResults: "Няма резултати за",
    perKg: "/ кг",
    perPortion: "/ порция",
    rights: "Всички права запазени",
    vegan: "Веган / Постно",
    nuts: "Ядки",
    glutenFree: "Без Глутен",
    citrus: "Цитруси",
    strawberry: "Ягода",
    cherry: "Череша",
  },
  ro: {
    search: "Căutați produse...",
    noResults: "Niciun rezultat pentru",
    perKg: "/ kg",
    perPortion: "/ porție",
    rights: "Toate drepturile rezervate",
    vegan: "Vegan / De Post",
    nuts: "Nuci",
    glutenFree: "Fără Gluten",
    citrus: "Citrice",
    strawberry: "Căpșună",
    cherry: "Cireașă",
  },
};

type LangCode = keyof typeof uiTranslations;
const stripAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// ΕΔΩ ΕΙΝΑΙ Η ΑΛΛΑΓΗ: Δέχεται τα δεδομένα σαν props (παράμετροι)
export default function MenuClient({
  categories,
  menuItems,
}: {
  categories: any[];
  menuItems: any[];
}) {
  const [activeCategory, setActiveCategory] = useState(
    categories.length > 0 ? categories[0].id : "",
  );
  const [lang, setLang] = useState<LangCode>("el");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang && urlLang in uiTranslations) {
      setLang(urlLang as LangCode);
    } else {
      const savedLang = localStorage.getItem("zucchero_lang");
      if (savedLang && savedLang in uiTranslations) {
        setLang(savedLang as LangCode);
      }
    }
  }, []);

  const activeItems =
    searchQuery.trim() !== ""
      ? menuItems.filter((item) => {
          const query = stripAccents(searchQuery.toLowerCase());
          const nameMatch = stripAccents(
            item.translations[lang].name.toLowerCase(),
          ).includes(query);
          const descMatch = stripAccents(
            item.translations[lang].description.toLowerCase(),
          ).includes(query);
          return nameMatch || descMatch;
        })
      : activeCategory === "popular"
        ? menuItems.filter((item) => item.isPopular)
        : menuItems.filter((item) => item.categoryId === activeCategory);

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

  const currentLangObj =
    availableLanguages.find((l) => l.code === lang) || availableLanguages[0];
  const ui = uiTranslations[lang];

  return (
    <div className="min-h-screen bg-[url('/images/background/GridArt_20250522_195346089_white.jpg')] bg-fixed bg-cover bg-center flex flex-col">
      {/* --- HEADER --- */}
      <header
        style={{ backgroundColor: "rgb(151, 220, 245)" }}
        className="p-4 shadow-sm relative flex justify-center items-center min-h-[72px] z-50"
      >
        <div className="relative w-36 h-12">
          <Image
            src="/images/logo/zucchero_logo.png"
            alt="Zucchero"
            fill
            sizes="150px"
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute right-4 z-50">
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 border border-white hover:bg-white transition-colors"
          >
            <div className="relative w-6 h-4 shadow-sm border border-slate-200 rounded-sm overflow-hidden">
              <Image
                src={currentLangObj.flag}
                alt={currentLangObj.label}
                fill
                sizes="30px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-black uppercase text-slate-700 w-4 text-center">
              {currentLangObj.code}
            </span>
            <ChevronDown
              size={14}
              className={`text-slate-600 transition-transform duration-300 ${isLangMenuOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isLangMenuOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsLangMenuOpen(false)}
            />
          )}
          <AnimatePresence>
            {isLangMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
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
                        sizes="30px"
                        className="object-cover"
                      />
                    </div>
                    {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* --- SEARCH BAR --- */}
      <div className="bg-white/95 backdrop-blur-md w-full pt-4 pb-2 px-4 relative z-30 border-b border-slate-200/50">
        <div className="max-w-3xl mx-auto relative flex items-center w-full h-12 rounded-2xl bg-slate-100/80 border border-slate-200 focus-within:border-[#97dcf5] focus-within:ring-2 focus-within:ring-[#97dcf5]/30 transition-all overflow-hidden">
          <Search size={20} className="text-slate-400 ml-4 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ui.search}
            className="w-full h-full bg-transparent border-none outline-none px-3 text-sm text-slate-700 placeholder-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="mr-4 text-slate-400 hover:text-slate-600 transition-colors shrink-0 p-1"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* --- HORIZONTAL CATEGORY SCROLL --- */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div
          className={`flex overflow-x-auto hide-scrollbar p-3 gap-2 max-w-3xl mx-auto w-full transition-opacity duration-300 ${searchQuery ? "opacity-40 pointer-events-none" : "opacity-100"}`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id ? "bg-slate-800 text-white shadow-md scale-105" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`}
            >
              {cat.translations[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* --- MENU ITEMS LIST --- */}
      <div className="p-4 max-w-3xl mx-auto flex-grow w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={searchQuery ? "search" : activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-4"
          >
            {activeItems.length > 0 ? (
              activeItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <div className="pr-4">
                      <h3 className="text-lg font-bold text-slate-800">
                        {item.translations[lang].name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">
                        {item.translations[lang].description}
                      </p>
                    </div>
                    {!item.hidePrice && (
                      <div className="bg-[#97dcf5]/20 px-3 py-2 rounded-xl whitespace-nowrap shadow-sm flex items-baseline gap-1">
                        <span className="font-bold text-slate-800 text-lg">
                          {item.price.toFixed(2)}€
                        </span>

                        {item.unit === "kg" && (
                          <span className="text-xs font-bold text-slate-600">
                            {ui.perKg}
                          </span>
                        )}

                        {item.unit === "portion" && (
                          <span className="text-xs font-bold text-slate-600">
                            {ui.perPortion}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {(item.isVegan ||
                    item.hasNuts ||
                    item.hasStrawberry ||
                    item.hasCherry ||
                    item.isGlutenFree ||
                    item.hasCitrus) && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-100/50">
                      {item.isVegan && (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-md shadow-sm">
                          🌱 {ui.vegan}
                        </span>
                      )}
                      {item.hasNuts && (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-md shadow-sm">
                          🥜 {ui.nuts}
                        </span>
                      )}
                      {item.isGlutenFree && (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-md shadow-sm">
                          🌾 {ui.glutenFree}
                        </span>
                      )}
                      {item.hasCitrus && (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md shadow-sm">
                          🍋 {ui.citrus}
                        </span>
                      )}
                      {item.hasStrawberry && (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-red-100 text-red-700 px-2 py-1 rounded-md shadow-sm">
                          🍓 {ui.strawberry}
                        </span>
                      )}
                      {item.hasCherry && (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-1 rounded-md shadow-sm">
                          🍒 {ui.cherry}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center bg-white/80 rounded-2xl p-8 border border-white/50 shadow-sm mt-4">
                <Search size={40} className="mx-auto text-slate-300 mb-3" />
                <p className="text-slate-600 font-medium">
                  {ui.noResults} "{searchQuery}"...
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-auto py-6 text-center text-slate-600 text-sm font-medium bg-white/70 backdrop-blur-md border-t border-slate-200">
        <p>
          © 2007 - {new Date().getFullYear()} Zucchero · {ui.rights}
        </p>
      </footer>
    </div>
  );
}
