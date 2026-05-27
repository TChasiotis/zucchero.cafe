"use client";

import QRCode from "react-qr-code";

// Δέχεται το type (αν είναι menu ή wifi) και το isPrint (για να βάλει το διακεκομμένο περίγραμμα στην εκτύπωση)
export default function QRCard({
  type,
  isPrint = false,
}: {
  type: "menu" | "wifi";
  isPrint?: boolean;
}) {
  const menuLink = "https://zucchero-cafe.pages.dev/menu/welcome";
  const wifiString = "WIFI:S:ZUCCHERO_GUEST;T:WPA;P:2310215575;;";

  const value = type === "menu" ? menuLink : wifiString;
  const title = type === "menu" ? "ΨΗΦΙΑΚΟΣ ΚΑΤΑΛΟΓΟΣ" : "ΔΩΡΕΑΝ WIFI";
  const subtitle = type === "menu" ? "DIGITAL MENU" : "FREE WIFI";

  return (
    <div
      className={`bg-white flex flex-col items-center justify-between rounded-sm ${
        isPrint
          ? "box-border border border-dashed border-slate-300"
          : "shadow-2xl border border-slate-200"
      }`}
      style={{ width: "10.5cm", height: "14.8cm", padding: "1.2cm 1cm" }}
    >
      <img
        src="/images/logo/zucchero_logo.png"
        alt="Zucchero Pastry Shop"
        className="h-16 object-contain"
      />

      <div className="bg-white p-3 rounded-xl border-[6px] border-black shadow-inner flex items-center justify-center">
        <QRCode value={value} size={220} level="H" fgColor="#000000" />
      </div>

      <div className="text-center w-full flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-2">
          <div className="h-px bg-slate-300 w-10"></div>
          <div className="text-slate-400 text-xs">◆</div>
          <div className="h-px bg-slate-300 w-10"></div>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-2xl font-extrabold uppercase tracking-tight text-black">
            {title}
          </h3>

          <p className="text-sm font-light text-slate-600 leading-relaxed max-w-[8cm]">
            {subtitle}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
