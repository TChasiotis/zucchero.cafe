"use client";

import QRCode from "react-qr-code";

export default function PrintLayoutPage() {
  const menuLink = "https://zucchero-cafe.pages.dev/menu/welcome";
  const wifiString = "WIFI:S:ZUCCHERO_GUEST;T:WPA;P:2310215575;;";

  // Αυτό είναι το "Καλούπι" που ζήτησες για μία κάρτα Α6
  const Card = ({ type }: { type: "menu" | "wifi" }) => (
    <div
      className="bg-white flex flex-col items-center justify-between border border-dashed border-slate-300"
      // Το μέγεθος είναι ακριβώς Α6. Το padding βοηθάει στο layout
      style={{ width: "10.5cm", height: "14.85cm", padding: "1.2cm 1cm" }}
    >
      {/* Logo */}
      <img
        src="/images/logo/zucchero_logo.png"
        alt="Zucchero Pastry Shop"
        className="h-16 object-contain"
      />

      {/* QR Code */}
      <div className="bg-white p-3 rounded-xl border-[6px] border-black flex items-center justify-center">
        <QRCode
          value={type === "menu" ? menuLink : wifiString}
          size={180}
          level="H"
          fgColor="#000000"
        />
      </div>

      {/* Text Block - Ακριβώς όπως το έστειλες */}
      <div className="text-center w-full flex flex-col items-center gap-3">
        {/* Διαχωριστικό */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-px bg-slate-300 w-10"></div>
          <div className="text-slate-400 text-xs">◆</div>
          <div className="h-px bg-slate-300 w-10"></div>
        </div>

        {/* Κείμενα */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-extrabold uppercase tracking-tight text-black">
            {type === "menu" ? "ΨΗΦΙΑΚΟΣ ΚΑΤΑΛΟΓΟΣ" : "ΔΩΡΕΑΝ WIFI"}
          </h3>

          <p className="text-sm font-light text-slate-600 leading-relaxed max-w-[8cm]">
            {type === "menu" ? "DIGITAL MENU" : "FREE WIFI"}
          </p>
        </div>
      </div>
    </div>
  );

  // Αυτό δημιουργεί μία ολόκληρη σελίδα Α4 (έχει μέσα 4 κάρτες)
  const A4Page = ({ type }: { type: "menu" | "wifi" }) => (
    <div
      className="flex flex-wrap bg-white"
      style={{ width: "210mm", height: "297mm", pageBreakAfter: "always" }}
    >
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-200 print:bg-white">
      {/* Το μενού ελέγχου (Κρύβεται στην εκτύπωση) */}
      <div className="print:hidden p-6 bg-slate-800 text-white text-center flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">Εργαστήριο Εκτύπωσης Zucchero</h1>
        <p className="text-sm text-slate-300">
          Στις ρυθμίσεις του εκτυπωτή επέλεξε:
          <br />
          <b>Μέγεθος: A4</b> | <b>Περιθώρια: Κανένα (None)</b> |{" "}
          <b>Διπλής Όψης: Ναι (Long Edge)</b>
        </p>
        <button
          type="button"
          onClick={() => setTimeout(() => window.print(), 100)}
          className="mt-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all"
        >
          🖨️ Εκτύπωση Διπλής Όψης (8 Κάρτες)
        </button>
      </div>

      {/* Οι 4 Σελίδες (2 Μπροστά / 2 Πίσω) */}
      <div className="flex flex-col items-center print:block shadow-2xl">
        <A4Page type="menu" /> {/* Σελίδα 1: Μπροστά (Μενού) */}
        <A4Page type="wifi" /> {/* Σελίδα 2: Πίσω (WiFi) */}
        <A4Page type="menu" /> {/* Σελίδα 3: Μπροστά (Μενού) */}
        <A4Page type="wifi" /> {/* Σελίδα 4: Πίσω (WiFi) */}
      </div>
    </div>
  );
}
