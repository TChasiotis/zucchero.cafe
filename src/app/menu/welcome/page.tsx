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
    <div className="min-h-screen bg-[url('/images/background/GridArt_20250522_195346089_white.jpg')] bg-fixed bg-cover bg-center flex flex-col">
      {/* --- HEADER (Με το δικό σου animation) --- */}
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

      {/* --- ΚΕΝΤΡΙΚΟ CONTAINER (Με το δικό σου animation) --- */}
      <div className="p-4 max-w-3xl mx-auto flex-grow w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50 w-full max-w-md text-center"
        >
          <h1 className="text-xl font-bold text-slate-800 mb-1">Welcome</h1>
          <p className="text-sm text-slate-500 mb-6 italic leading-snug">
            Please select your language / Παρακαλώ επιλέξτε γλώσσα
          </p>

          {/* Grid Γλωσσών με hover/tap effects από το LandingPage σου */}
          <div className="grid grid-cols-2 gap-4">
            {availableLanguages.map((l) => (
              <motion.button
                key={l.code}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLanguageSelect(l.code)}
                className="bg-white/95 hover:bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex flex-col items-center justify-center transition-all shadow-sm hover:shadow-md group"
              >
                <div className="relative w-8 h-5 shadow-sm border border-slate-200 rounded-sm overflow-hidden mb-2 shrink-0">
                  <Image
                    src={l.flag}
                    alt={l.label}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {l.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-auto py-6 text-center text-slate-600 text-sm font-medium bg-white/70 backdrop-blur-md border-t border-slate-200">
        <p>
          © 2007 - {new Date().getFullYear()} Zucchero · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
