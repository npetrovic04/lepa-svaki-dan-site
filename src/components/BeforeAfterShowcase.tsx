import { BeforeAfterSlider } from "@/components/lab/BeforeAfterSlider";
import { Reveal } from "@/components/Reveal";
import { KineticText } from "@/components/KineticText";

export function BeforeAfterShowcase() {
  return (
    <section id="rezultati" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <Reveal>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
              Rezultati
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-balance text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.2]">
              <KineticText text="Pre. " by="word" />
              <span className="font-display-italic text-lila">
                <KineticText text="Posle." by="word" delay={0.2} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-lg text-[14px] text-mist font-light leading-relaxed">
              Povuci sredinu da uporediš — bez filtera, bez Photoshopa.
              Promene koje klijenti vide u ogledalu.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <BeforeAfterSlider
            beforeSrc="/zena1.png"
            afterSrc="/zena2.png"
          />
        </Reveal>
      </div>
    </section>
  );
}
