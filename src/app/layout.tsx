import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zucchero",
  description: "Zucchero Ζαχαροπλαστείο",
  icons: {
    // Βεβαιώσου ότι η κατάληξη είναι σωστή (.png, .jpg, .ico κλπ)
    icon: "/images/logo/browser_logo-removebg-preview_1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Εδώ βάζεις το πραγματικό σου ID όταν το πάρεις από τη Google */}
        <GoogleAnalytics gaId="G-SFV5CELQTL" />
      </body>
    </html>
  );
}
