import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

// Bodoni Moda — font Vogue, Chanel, Charlotte Tilbury. World-class luxury serif.
const bodoniModa = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Inter — clean medical precision, same as top-tier clinical brands
const inter = Inter({
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
      className={`${bodoniModa.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
