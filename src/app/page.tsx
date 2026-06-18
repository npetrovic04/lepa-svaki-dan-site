import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { LocationsReveal } from "@/components/LocationsReveal";
import { ServicesSection } from "@/components/ServicesSection";
import { Verticals } from "@/components/Verticals";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <LocationsReveal />
        <ServicesSection />
        <Verticals />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
