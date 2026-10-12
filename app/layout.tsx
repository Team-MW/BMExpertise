import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import "./sections.css";
import "./sections2.css";
import "./sections3.css";
import "./faq.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B&M Expertise – Audit | Expert-comptable & Commissaire aux comptes Paris 16",
  description:
    "Cabinet d’expertise comptable et de commissariat aux comptes à Paris 16ᵉ depuis 2008. Création d’entreprise, pilotage, paie, juridique, audit et outils 100 % digitaux.",
  openGraph: {
    title: "B&M Expertise – Audit",
    description: "Expertise comptable & commissariat aux comptes à Paris 16ᵉ.",
    images: ["/images/hero-office.jpg"],
    locale: "fr_FR",
    type: "website",
  },
};

import Header from "@/components/Header";
import { Footer } from "@/components/Contact";
import { Faq } from "@/components/Faq";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll />
        <Header />
        {children}
        <Faq />
        <Footer />
      </body>
    </html>
  );
}
