import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingPetals } from "@/components/FloatingPetals";
import { CursorTrail } from "@/components/CursorTrail";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lepa Svaki Dan — Beauty & Wellbeing Concept Beograd",
  description:
    "Premium beauty & wellbeing concept u Beogradu. Estetska medicina, tretmani lica i tela, laserska epilacija, dermatologija. Dr Tamara Vujačić i tim. Dve lokacije: Novi Beograd i Belgrade Waterfront.",
  metadataBase: new URL("https://lepasvakidan.rs"),
  openGraph: {
    title: "Lepa Svaki Dan — Beauty & Wellbeing Concept",
    description:
      "Dva koncepta, jedna filozofija — lepota koja se gradi, ne improvizuje.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink overflow-x-hidden">
        <ScrollProgress />
        <FloatingPetals count={8} />
        <CursorTrail />
        {children}
        {/* Bottom scroll blur — fixed viewport edge fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 inset-x-0 z-40 h-16"
          style={{ background: "linear-gradient(to top, rgba(255,255,255,0.72) 0%, transparent 100%)" }}
        />
      </body>
    </html>
  );
}
