import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifest } from "@/components/Manifest";
import { SignatureTreatments } from "@/components/SignatureTreatments";
import { Concepts } from "@/components/Concepts";
import { Verticals } from "@/components/Verticals";
import { Process } from "@/components/Process";
import { Testimonial } from "@/components/Testimonial";
import { Locations } from "@/components/Locations";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Manifest />
        <SignatureTreatments />
        <Concepts />
        <Verticals />
        <Process />
        <Testimonial />
        <Locations />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
