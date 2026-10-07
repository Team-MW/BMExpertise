import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import "./sections.css";
import "./sections2.css";
import "./sections3.css";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
