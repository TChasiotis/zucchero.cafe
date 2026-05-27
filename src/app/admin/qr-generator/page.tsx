"use client";

import QRCode from "react-qr-code";
// Σημείωση: Σιγουρέψου ότι η Inter είναι εισαγμένη στο layout.tsx σου

export default function QRGeneratorPage() {
  /* 1. Το μόνιμο link του μενού */
  const menuLink = "https://zucchero-cafe.pages.dev/menu/welcome";

  /* 2. SOS: Άλλαξε το "ΟΝΟΜΑ_ΔΙΚΤΥΟΥ" και το "ΚΩΔΙΚΟΣ" με τα δικά σου! 
        Κράτα τα ερωτηματικά (;) ακριβώς όπως είναι. */
  // Παράδειγμα: "WIFI:S:Zucchero Cafe;T:WPA;P:zucchero2026;;"
  const wifiString = "WIFI:S:ZUCCHERO_GUEST;T:WPA;P:2310215575;;";

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-10 text-slate-900 gap-12 font-inter">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter text-slate-950">
          Zucchero QR Generator
        </h1>
        <p className="text-base text-slate-600 mt-2 max-w-md">
          Εκτυπώστε τις premium κάρτες Α6 για τα T-Stands. Διορθωμένο Layout για
          τέλειες αποστάσεις.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {/* ---------------- ΚΑΡΤΑ 1: ΨΗΦΙΑΚΟΣ ΚΑΤΑΛΟΓΟΣ ---------------- */}
        <div
          // Επαναφορά στο justify-between για αυτόματο άπλωμα
          className="bg-white flex flex-col items-center justify-between shadow-2xl rounded-sm border border-slate-200"
          // Σταθερό, ασφαλές padding σε όλο το χαρτί Α6
          style={{ width: "10.5cm", height: "14.8cm", padding: "1.2cm 1cm" }}
        >
          {/* Logo - object-contain - Χωρίς padding-top */}
          <img
            src="/images/logo/zucchero_logo.png"
            alt="Zucchero Pastry Shop"
            className="h-16 object-contain"
          />

          {/* QR Code container - Χωρίς padding-top */}
          <div className="bg-white p-3 rounded-xl border-[6px] border-black shadow-inner flex items-center justify-center">
            <QRCode
              value={menuLink}
              size={220} // Μεγάλο μέγεθος
              level="H"
              fgColor="#000000"
            />
          </div>

          {/* New Text Block - Grouping Separator + Texts */}
          {/* Χρησιμοποιούμε gap-3 για να ισαπέχει το separator από το QR και τα κείμενα */}
          <div className="text-center w-full flex flex-col items-center gap-3">
            {/* Διαχωριστικό σχεδιάκι ◆ - Χωρίς padding-bottom */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-px bg-slate-300 w-10"></div>
              <div className="text-slate-400 text-xs">◆</div>
              <div className="h-px bg-slate-300 w-10"></div>
            </div>

            {/* Κείμενα - Grouping Title + Desc */}
            <div className="flex flex-col gap-1.5">
              {/* Τίτλος - Inter Extrabold */}
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-black">
                ΨΗΦΙΑΚΟΣ ΚΑΤΑΛΟΓΟΣ
              </h3>

              {/* Περιγραφή - Inter Light */}
              <p className="text-sm font-light text-slate-600 leading-relaxed max-w-[8cm]">
                DIGITAL MENU
                <br />
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- ΚΑΡΤΑ 2: ΔΩΡΕΑΝ WIFI ---------------- */}
        <div
          className="bg-white flex flex-col items-center justify-between shadow-2xl rounded-sm border border-slate-200"
          style={{ width: "10.5cm", height: "14.8cm", padding: "1.2cm 1cm" }}
        >
          <img
            src="/images/logo/zucchero_logo.png"
            alt="Zucchero Pastry Shop"
            className="h-16 object-contain"
          />

          <div className="bg-white p-3 rounded-xl border-[6px] border-black shadow-inner flex items-center justify-center">
            <QRCode value={wifiString} size={220} level="H" fgColor="#000000" />
          </div>

          {/* New Text Block - Grouping Separator + Texts */}
          <div className="text-center w-full flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-2">
              <div className="h-px bg-slate-300 w-10"></div>
              <div className="text-slate-400 text-xs">◆</div>
              <div className="h-px bg-slate-300 w-10"></div>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-black">
                ΔΩΡΕΑΝ WIFI
              </h3>

              <p className="text-sm font-light text-slate-600 leading-relaxed max-w-[8cm]">
                FREE WIFI
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
