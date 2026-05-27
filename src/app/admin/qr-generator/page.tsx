"use client";

import QRCard from "../components/QRCard";
import Link from "next/link";

export default function QRGeneratorPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-10 text-slate-900 gap-12 font-inter">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter text-slate-950">
          Zucchero QR Generator
        </h1>
        <p className="text-base text-slate-600 mt-2 max-w-md">
          Εκτυπώστε τις premium κάρτες Α6 για τα T-Stands.
        </p>

        {/* Κουμπί που σε πάει κατευθείαν στην εκτύπωση! */}
        <Link href="/admin/print-layout">
          <button className="mt-4 bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md">
            🖨️ Μετάβαση σε Εκτύπωση Διπλής Όψης
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Τραβάει το κοινό component για το Μενού */}
        <QRCard type="menu" />

        {/* Τραβάει το κοινό component για το WiFi */}
        <QRCard type="wifi" />
      </div>
    </div>
  );
}
