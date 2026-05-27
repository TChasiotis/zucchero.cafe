"use client";

import QRCard from "../components/QRCard";

export default function PrintLayoutPage() {
  // Φτιάχνει τη σελίδα Α4 βάζοντας 4 κοινά QR Cards μαζί!
  const A4Page = ({ type }: { type: "menu" | "wifi" }) => (
    <div
      className="grid grid-cols-2 grid-rows-2 bg-white box-border print:m-0"
      style={{ width: "210mm", height: "297mm", pageBreakAfter: "always" }}
    >
      <QRCard type={type} isPrint={true} />
      <QRCard type={type} isPrint={true} />
      <QRCard type={type} isPrint={true} />
      <QRCard type={type} isPrint={true} />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-200 print:bg-white flex flex-col items-center">
      <style>{`
        @page { size: A4 portrait; margin: 0mm !important; }
        @media print {
          html, body { margin: 0mm !important; padding: 0mm !important; background: #ffffff; }
          .print-container { box-shadow: none !important; margin: 0mm !important; padding: 0mm !important; }
        }
      `}</style>

      <div className="print:hidden w-full p-6 bg-slate-800 text-white text-center flex flex-col items-center justify-center gap-3">
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

      <div className="print-container flex flex-col items-center print:block shadow-2xl bg-white">
        <A4Page type="menu" />
        <A4Page type="wifi" />
        <A4Page type="menu" />
        <A4Page type="wifi" />
      </div>
    </div>
  );
}
