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
    <div className="min-h-screen bg-[url('/images/background/GridArt_20250522_195346089_white.jpg')] bg-fixed bg-cover bg-center flex flex-col font-sans">
      {/* --- HEADER (Κλειδωμένο Context) --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
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
      </motion.header>

      {/* --- ΚΕΝΤΡΙΚΟ CONTAINER (Μεγάλωσε σε max-w-2xl και p-10) --- */}
      <div className="p-4 flex-grow w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/95 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-xl border border-white w-full max-w-2xl text-center"
        >
          <h1 className="text-3xl font-extrabold text-slate-800 mb-2 tracking-tight">
            Welcome
          </h1>
          {/* Διορθώθηκε το κείμενο (μόνο αγγλικά) */}
          <p className="text-slate-500 text-base mb-10 italic font-medium">
            Please select your language
          </p>

          {/* Grid Γλωσσών με μεγαλύτερο gap */}
          <div className="grid grid-cols-2 gap-6">
            {availableLanguages.map((l) => (
              <motion.button
                key={l.code}
                whileHover={{ scale: 1.03, translateY: -5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLanguageSelect(l.code)}
                /* Μεγαλώσαμε το padding (p-8) και το rounded (rounded-3xl) */
                className="bg-white hover:bg-slate-50/50 p-8 rounded-3xl border border-slate-200 flex flex-col items-center justify-center transition-all shadow-sm hover:shadow-lg group"
              >
                {/* Μεγαλώσαμε αισθητά τη σημαία (w-20 h-12) */}
                <div className="relative w-20 h-12 shadow-md border border-slate-200 rounded-lg overflow-hidden mb-4 shrink-0 transition-transform group-hover:scale-105">
                  <Image
                    src={l.flag}
                    alt={l.label}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                {/* Μεγαλώσαμε το κείμενο (text-lg) */}
                <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {l.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- FOOTER (Κλειδωμένο Context) --- */}
      <footer className="mt-auto py-6 text-center text-slate-600 text-sm font-medium bg-white/70 backdrop-blur-md border-t border-slate-200">
        <p>
          © 2007 - {new Date().getFullYear()} Zucchero · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
