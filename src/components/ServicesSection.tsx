import { Reveal } from "@/components/Reveal";
import { CenovnikClient } from "@/components/cenovnik/CenovnikClient";

export function ServicesSection() {
  return (
    <section id="usluge" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-14">
          <Reveal>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-lila">
              Cenovnik
            </div>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal leading-[1.23] text-ink max-w-xl">
              Usluge i{" "}
              <span className="font-display-italic text-lila">cene</span>.
            </h2>
          </Reveal>
        </div>
        <CenovnikClient />
      </div>
    </section>
  );
}
