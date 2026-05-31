"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- 1. Πρόσθεσα το Variants εδώ
import { MapPin, Phone, ChevronRight, Star } from "lucide-react";

export default function HomePage() {
  // Εφέ εμφάνισης για το scroll
  const fadeUpVariant: Variants = {
    // <-- 2. Πρόσθεσα το : Variants εδώ
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-900 font-sans selection:bg-[#97dcf5] selection:text-slate-900">
      {/* --- STICKY HEADER --- */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="relative w-32 h-10">
            <Image
              src="/images/logo/zucchero_logo.png"
              alt="Zucchero Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <Link
            href="/menu/welcome"
            className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-all"
          >
            Μενού{" "}
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </header>
      {/* --- 1. FIXED PARALLAX HERO SECTION --- */}
      {/* Η εικόνα μένει κολλημένη στο background (fixed). Το περιεχόμενο θα περάσει από πάνω της! */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/information/front.jpg"
          alt="Zucchero Bakery Exterior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />{" "}
        {/* Σκούρο Overlay */}
      </div>
      {/* Hero Text (Αυτό σκρολάρει κανονικά) */}
      <section className="relative z-10 h-[100vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-[#97dcf5] font-bold tracking-[0.3em] uppercase text-sm mb-6 drop-shadow-md">
            Απο το 1972
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            Η αγάπη για το <br /> καλό γλυκό παραμένει.
          </h1>
          <Link
            href="/menu/welcome"
            className="mt-8 bg-[#97dcf5] text-slate-900 font-black text-lg px-10 py-4 rounded-full shadow-[0_0_40px_rgba(151,220,245,0.3)] hover:scale-105 transition-transform duration-300"
          >
            Εξερευνήστε τις Γεύσεις Μας
          </Link>
        </motion.div>
      </section>
      {/* --- SLIDING CONTENT WRAPPER --- */}
      {/* Αυτό το div κάνει slide ΠΑΝΩ από την fixed εικόνα του Hero! Δίνει τρελό premium feel. */}
      <div className="relative z-20 bg-white rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* --- 2. THE STICKY SCROLL STORY SECTION --- */}
        <section className="py-24 md:py-32 px-4 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              Η Ιστορία Μας
            </h2>
            <div className="w-24 h-1.5 bg-[#97dcf5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* STICKY IMAGE CONTAINER (Μένει ακίνητο όσο σκρολάρεις το κείμενο δίπλα!) */}
            <div className="hidden md:block sticky top-32 h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/information/pagwto.jpg"
                alt="Zucchero History"
                fill
                className="object-cover"
              />
            </div>

            {/* SCROLLING TEXT BLOCKS */}
            <div className="space-y-24 md:space-y-40 py-10 md:py-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Η Αρχή του Ονείρου
                </h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  Όλα ξεκίνησαν το{" "}
                  <strong className="text-slate-800">1972</strong>, όταν ο
                  Αριστόδημος και η Ανάστω Παράσχου άνοιξαν το πρώτο τους
                  ζαχαροπλαστείο, εμπνευσμένοι από την αγάπη τους για τα
                  αυθεντικά γλυκά και τις παραδοσιακές συνταγές. Αν και εκείνη η
                  διαδρομή ολοκληρώθηκε το 1978, το όνειρο δεν έσβησε ποτέ.
                </p>
              </motion.div>

              {/* Εικόνα μόνο για κινητά, αφού το desktop έχει τη sticky εικόνα */}
              <div className="md:hidden relative h-72 rounded-3xl overflow-hidden shadow-lg my-8">
                <Image
                  src="/images/information/pagwto.jpg"
                  alt="Zucchero History"
                  fill
                  className="object-cover"
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Η Δεύτερη Γενιά
                </h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  Το <strong className="text-slate-800">2007</strong>, ο γιος
                  τους Χριστόδουλος Παράσχου, μαζί με τη σύζυγό του Κωνσταντίνα
                  Μεσοχωρίτου, αποφάσισαν να αναβιώσουν τη γλυκιά ιστορία. Με τη
                  στήριξη της δικής τους οικογένειας, δημιουργούν καθημερινά
                  γλυκά υψηλής ποιότητας, προσθέτοντας μοντέρνες πινελιές στην
                  παράδοση.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Το Σήμερα
                </h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  Οι γεύσεις, οι αναμνήσεις και το πάθος για δημιουργία
                  παραμένουν ζωντανά. Χρησιμοποιούμε τα πιο αγνά υλικά για να
                  σας προσφέρουμε την απόλυτη εμπειρία απόλαυσης.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 3. ΕΠΙΚΟΙΝΩΝΙΑ & ΤΟΠΟΘΕΣΙΑ (BENTO GRID) --- */}
        <section className="py-24 px-4 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Contact Card */}
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-3xl font-black text-slate-800 mb-10">
                  Ελάτε να γνωριστούμε
                </h3>

                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">
                        Διεύθυνση
                      </h4>
                      <p className="text-slate-600">
                        Πλατεία Αγίων Αναργύρων 2<br />
                        Θεσσαλονίκη, 54634
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">
                        Τηλέφωνο
                      </h4>
                      <a
                        href="tel:+302310215575"
                        className="text-slate-600 text-lg hover:text-blue-600 transition-colors"
                      >
                        +30 2310 215 575
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center gap-4">
                  <span className="font-bold text-slate-800">
                    Ακολουθήστε μας:
                  </span>
                  <a
                    href="https://www.instagram.com/zucchero_pastry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-pink-100 text-slate-600 hover:text-pink-600 p-3 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/p/Zucchero-%CE%96%CE%B1%CF%87%CE%B1%CF%81%CE%BF%CF%80%CE%BB%CE%B1%CF%83%CF%84%CE%B5%CE%AF%CE%BF-100063474823792/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 p-3 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Map & Reviews */}
              <div className="flex flex-col gap-8">
                <a
                  href="https://maps.app.goo.gl/tBhZXRAKE2jFfYfs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-grow min-h-[300px] bg-slate-300 rounded-[2rem] overflow-hidden shadow-sm group block"
                >
                  <Image
                    src="/images/information/map.jpg"
                    alt="Χάρτης Zucchero"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl text-center font-bold text-slate-800 shadow-lg group-hover:bg-[#97dcf5] transition-colors">
                    Άνοιγμα Χάρτη στο Google Maps
                  </div>
                </a>

                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJxdIG4004qBQRBNUrPRSfydQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-center justify-between hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div>
                    <h4 className="font-black text-slate-800 text-lg mb-1">
                      Αξιολογήστε μας!
                    </h4>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} fill="currentColor" size={20} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-full text-slate-600">
                    <ChevronRight size={24} />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 4. FOOTER --- */}
        <footer className="bg-slate-900 text-slate-400 py-16 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-8">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm font-medium">
              <Link
                href="/legal"
                className="hover:text-white transition-colors"
              >
                Νομικά & Αλλεργιογόνα
              </Link>
              <span className="hidden md:inline text-slate-700">|</span>
              <Link
                href="/menu/welcome"
                className="hover:text-white transition-colors"
              >
                Ψηφιακό Μενού
              </Link>
            </div>

            <div className="text-sm text-center md:text-right bg-slate-800/50 px-6 py-4 rounded-2xl border border-slate-700/50">
              <p className="mb-1 text-slate-500 text-xs uppercase tracking-wider">
                ΣΧΕΔΙΑΣΜΟΣ & ΑΝΑΠΤΥΞΗ
              </p>
              <p className="font-black text-white text-lg mb-1">
                Θωμάς Χασιώτης
              </p>
              <a
                href="https://github.com/TChasiotis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#97dcf5] hover:text-white transition-colors flex items-center justify-center md:justify-end gap-1"
              >
                GitHub: @TChasiotis <ChevronRight size={14} />
              </a>
            </div>
          </div>

          <div className="text-center text-sm font-medium text-slate-600">
            <p>
              © {new Date().getFullYear()} Zucchero Ζαχαροπλαστείο. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </div>{" "}
      {/* /SLIDING WRAPPER END */}
    </div>
  );
}
