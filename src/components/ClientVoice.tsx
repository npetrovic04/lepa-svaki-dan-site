import { BreathingTestimonial } from "@/components/lab/BreathingTestimonial";
import { Reveal } from "@/components/Reveal";
import { KineticText } from "@/components/KineticText";
import { images } from "@/lib/data";

export function ClientVoice() {
  return (
    <section id="utisci" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <Reveal>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
              Utisci
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-balance text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.2]">
              <KineticText text="Reč" by="word" />{" "}
              <span className="font-display-italic text-lila">
                <KineticText text="klijenta." by="word" delay={0.2} />
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <BreathingTestimonial portraitSrc={images.testimonial} />
        </Reveal>
      </div>
    </section>
  );
}
