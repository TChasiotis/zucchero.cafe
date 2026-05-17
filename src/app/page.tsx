"use client";

import Image from "next/image";
import myLogo from "../../public/images/logo/zucchero_logo.png";
// ^ Βάλε τα σωστά '../' ανάλογα με το πού είναι το αρχείο σου.
// Αν είσαι στο src/app/page.tsx θέλεις: import myLogo from "../../public/images/logo/zucchero_logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, ShoppingBag, Languages } from "lucide-react";

export default function LandingPage() {
  const menuOptions = [
    {
      name: "Τραπέζι",
      sub: "Dine-in",
      icon: <Coffee />,
      href: "/menu/welcome",
      color: "bg-[#97dcf5]",
    },
    {
      name: "Table Menu",
      sub: "English",
      icon: <Coffee />,
      href: "/en/table",
      color: "bg-white",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* Logo Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-black p-6 rounded-b-[2rem] shadow-md flex justify-center mb-8"
      >
        <div className="flex justify-center mb-8 w-full">
          <Image
            src={myLogo}
            alt="Zucchero Logo"
            width={200} /* Τεράστιο πλάτος */
            height={100} /* Τεράστιο ύψος */
            className="object-contain"
            priority
          />
        </div>
      </motion.header>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-[#e7e7e7] p-8 rounded-[2rem] shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold mb-2 text-slate-800">
          Καλώς ήρθατε στο Zucchero!
        </h1>
        <p className="text-slate-600 mb-8 italic">
          Παρακαλώ επιλέξτε την γλώσσα και τον τύπο του μενού
        </p>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {menuOptions.map((opt, i) => (
            <Link key={i} href={opt.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${opt.color} p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center justify-center cursor-pointer transition-colors hover:shadow-md h-full`}
              >
                <div className="text-slate-800 mb-2">{opt.icon}</div>
                <span className="text-xl font-bold text-slate-900">
                  {opt.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  {opt.sub}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <footer className="mt-10 text-slate-500 text-sm font-medium border-t border-slate-300 pt-4">
          <p>© Zucchero | 2007-2026 | All Rights Reserved</p>
        </footer>
      </motion.div>
    </div>
  );
}
