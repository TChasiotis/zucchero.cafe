"use client";

import QRCard from "../components/QRCard";

export default function PrintLayoutPage() {
  // Δημιουργεί μια σελίδα Α4 με 2 κάρτες στο πάνω μέρος και το κάτω μέρος κενό
  const A4Page = ({ type }: { type: "menu" | "wifi" }) => (
    <div
      className="grid grid-cols-2 grid-rows-2 bg-white box-border print:m-0"
      style={{ width: "210mm", height: "297mm", pageBreakAfter: "always" }}
    >
      {/* Πάνω Αριστερά Κάρτα */}
      <QRCard type={type} isPrint={true} />

      {/* Πάνω Δεξιά Κάρτα */}
      <QRCard type={type} isPrint={true} />

      {/* Κάτω Αριστερά - Κενό (Προστασία από το κόψιμο του εκτυπωτή) */}
      <div style={{ width: "105mm", height: "148.5mm" }}></div>

      {/* Κάτω Δεξιά - Κενό */}
      <div style={{ width: "105mm", height: "148.5mm" }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-200 print:bg-white flex flex-col items-center">
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0mm !important;
        }
        @media print {
          html, body {
            margin: 0mm !important;
            padding: 0mm !important;
            background: #ffffff;
          }
          .print-container {
            box-shadow: none !important;
            margin: 0mm !important;
            padding: 0mm !important;
          }
        }
      `}</style>

      {/* Το μενού ελέγχου (Κρύβεται αυτόματα στην εκτύπωση) */}
      <div className="print:hidden w-full p-6 bg-slate-800 text-white text-center flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">
          Εργαστήριο Εκτύπωσης Zucchero (2 Κάρτες / Σελίδα)
        </h1>
        <p className="text-sm text-slate-300">
          Στις ρυθμίσεις του εκτυπωτή επέλεξε:
          <br />
          <b>Μέγεθος: A4</b> | <b>Περιθώρια: Κανένα (None)</b> |{" "}
          <b>Διπλής Όψης: Ναι (Long Edge / Μεγάλη Ακμή)</b>
        </p>
        <button
          type="button"
          onClick={() => setTimeout(() => window.print(), 100)}
          className="mt-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all"
        >
          🖨️ Εκτύπωση Διπλής Όψης (6 Σελίδες - 6 Κάρτες)
        </button>
      </div>

      {/* Οι 6 Σελίδες (3 Φύλλα Μπρος - Πίσω) */}
      <div className="print-container flex flex-col items-center print:block shadow-2xl bg-white">
        {/* ΦΥΛΛΟ 1 */}
        <A4Page type="menu" /> {/* Σελίδα 1: Μπροστά (2x Μενού) */}
        <A4Page type="wifi" /> {/* Σελίδα 2: Πίσω (2x WiFi) */}
        {/* ΦΥΛΛΟ 2 */}
        <A4Page type="menu" /> {/* Σελίδα 3: Μπροστά (2x Μενού) */}
        <A4Page type="wifi" /> {/* Σελίδα 4: Πίσω (2x WiFi) */}
        {/* ΦΥΛΛΟ 3 */}
        <A4Page type="menu" /> {/* Σελίδα 5: Μπροστά (2x Μενού) */}
        <A4Page type="wifi" /> {/* Σελίδα 6: Πίσω (2x WiFi) */}
      </div>
    </div>
  );
}
