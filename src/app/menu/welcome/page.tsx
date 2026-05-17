"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function WelcomePage() {
  const router = useRouter();

  const handleLanguageSelect = (langCode: string) => {
    localStorage.setItem("zucchero_lang", langCode);
    router.push(`/menu?lang=${langCode}`);
  };

  return (
    <div className="h-[100dvh] w-screen bg-[url('/images/background/GridArt_20250522_195346089_white.jpg')] bg-fixed bg-cover bg-center flex flex-col overflow-hidden font-sans">
      {/* --- HEADER (Κλειδωμένο Context) --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ backgroundColor: "rgb(151, 220, 245)" }}
        className="p-4 shadow-sm relative flex justify-center items-center h-[72px] shrink-0 z-50"
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
      </motion.header>

      {/* --- ΚΕΝΤΡΙΚΟ CONTAINER --- */}
      <div className="flex-grow w-full max-w-3xl mx-auto px-4 py-2 flex flex-col min-h-0">
        {/* Floating Κάρτα Τίτλου (Μαζεύτηκε ελαφρώς το margin και το padding) */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="shrink-0 bg-white/95 backdrop-blur-sm px-6 py-2.5 rounded-2xl shadow-lg border border-white max-w-xs mx-auto mb-3 text-center"
        >
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">
            Welcome
          </h1>
          <p className="text-slate-500 text-xs italic font-medium mt-0.5">
            Please select your language
          </p>
        </motion.div>

        {/* Το Grid των γλωσσών (Τώρα με το τέλειο μέγεθος) */}
        <div className="flex-grow flex items-center justify-center min-h-0 w-full my-auto px-2">
          {/* Μειώσαμε το gap σε 3 για να κερδίσουμε ύψος στο κινητό */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mx-auto">
            {availableLanguages.map((l) => (
              <motion.button
                key={l.code}
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLanguageSelect(l.code)}
                /* py-4 αντί για py-6: Μαζεύει το ύψος αλλά παραμένει μεγάλο και premium */
                className="bg-white/95 hover:bg-slate-50/50 py-4 px-4 rounded-2xl border border-slate-200/80 flex flex-col items-center justify-center transition-all shadow-md hover:shadow-lg group h-full"
              >
                {/* Σημαία 16x10 αντί για 20x12: Τέλεια αναλογία για να μην κρύβεται τίποτα */}
                <div className="relative w-16 h-10 shadow-sm border border-slate-200 rounded-md overflow-hidden mb-2 shrink-0 transition-transform group-hover:scale-105">
                  <Image
                    src={l.flag}
                    alt={l.label}
                    fill
                    sizes="80px"
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate w-full text-center">
                  {l.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* --- FOOTER (Μαζεύτηκε σε py-4 για να μην κλέβει χώρο) --- */}
      <footer className="mt-auto py-4 text-center text-slate-600 text-xs sm:text-sm font-medium bg-white/70 backdrop-blur-md border-t border-slate-200 shrink-0 z-50">
        <p>
          © 2007 - {new Date().getFullYear()} Zucchero · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
