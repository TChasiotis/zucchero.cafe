"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

// Η λίστα με τις γλώσσες και τα paths για τις δικές σου σημαίες
const languages = [
  { code: "el", name: "Ελληνικά", flagSrc: "/images/flags/greece_flag.png" },
  {
    code: "en",
    name: "English",
    flagSrc: "/images/flags/united_kingdom_flag.png",
  },
  { code: "de", name: "Deutsch", flagSrc: "/images/flags/germany_flag.png" },
  { code: "fr", name: "Français", flagSrc: "/images/flags/france_flag.png" },
  { code: "es", name: "Español", flagSrc: "/images/flags/spain_flag.png" },
  { code: "sr", name: "Srpski", flagSrc: "/images/flags/serbia_flag.png" },
  { code: "bg", name: "Български", flagSrc: "/images/flags/bulgaria_flag.png" },
  { code: "ro", name: "Română", flagSrc: "/images/flags/romania_flag.png" },
];

export default function WelcomePage() {
  const router = useRouter();

  const handleLanguageSelect = (langCode: string) => {
    localStorage.setItem("zucchero_lang", langCode);
    router.push(`/menu?lang=${langCode}`);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6">
      {/* Κεντρικό Logo / Τίτλος */}
      <div className="text-center mb-10 animate-fade-in-down">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
          Zucchero <span className="text-orange-500">Cafe</span>
        </h1>
        <p className="text-neutral-500 text-lg">Please select your language</p>
      </div>

      {/* Grid Γλωσσών με Εικόνες */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            className="flex flex-col items-center justify-center bg-white p-5 rounded-2xl shadow-sm border border-neutral-100 hover:border-orange-500 hover:shadow-md transition-all duration-200 active:scale-95 group"
          >
            {/* Χρήση του Next Image για βελτιστοποίηση */}
            <div className="relative w-12 h-8 mb-3 group-hover:scale-110 transition-transform duration-200 overflow-hidden rounded-sm shadow-sm">
              <Image
                src={lang.flagSrc}
                alt={`${lang.name} flag`}
                fill
                className="object-cover"
              />
            </div>

            <span className="text-neutral-700 font-medium text-sm">
              {lang.name}
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-neutral-400 text-xs">
        &copy; {new Date().getFullYear()} Zucchero Cafe. All rights reserved.
      </div>
    </div>
  );
}
