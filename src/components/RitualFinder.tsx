import { RitualQuiz } from "@/components/lab/RitualQuiz";
import { Reveal } from "@/components/Reveal";
import { KineticText } from "@/components/KineticText";

export function RitualFinder() {
  return (
    <section id="pronadji-ritual" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <Reveal>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
              Pronađi svoj ritual
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-balance text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.2]">
              <KineticText text="Tri pitanja —" by="word" />{" "}
              <span className="font-display-italic text-lila">
                <KineticText text="tvoj plan." by="word" delay={0.25} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-md text-[14px] text-mist font-light leading-relaxed">
              Odgovori i predlažemo tri tretmana iz našeg cenovnika —
              odabrane prema tvom cilju, koži i intenzitetu.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <RitualQuiz />
        </Reveal>
      </div>
    </section>
  );
}
