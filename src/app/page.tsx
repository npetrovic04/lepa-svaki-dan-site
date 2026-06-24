import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { LocationsReveal } from "@/components/LocationsReveal";
import { ServicesSection } from "@/components/ServicesSection";
import { Verticals } from "@/components/Verticals";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { RitualFinder } from "@/components/RitualFinder";
import { ClientVoice } from "@/components/ClientVoice";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <BeforeAfterShowcase />
        <LocationsReveal />
        <ServicesSection />
        <RitualFinder />
        <Verticals />
        <ClientVoice />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
