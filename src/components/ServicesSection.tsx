import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CenovnikClient } from "@/components/cenovnik/CenovnikClient";
import { FloatingDust } from "@/components/FloatingDust";

export function ServicesSection() {
  return (
    <section id="usluge" className="relative isolate overflow-hidden bg-canvas py-20 lg:py-28">
      {/* Large orchid bouquet — visible left edge */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[10%] top-0 h-full w-[55vw] max-w-[760px]">
        <div className="relative h-full w-full">
          <Image src="/hero-orhideja.jpg" alt="" fill className="object-cover object-left" sizes="55vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-canvas/35 to-canvas" />
          <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas/40" />
        </div>
      </div>

      {/* Mirror orchid — visible right edge */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[10%] bottom-0 h-full w-[45vw] max-w-[640px] scale-x-[-1]">
        <div className="relative h-full w-full">
          <Image src="/hero-orhideja.jpg" alt="" fill className="object-cover object-left" sizes="45vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-canvas/35 to-canvas" />
          <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas/40" />
        </div>
      </div>

      {/* Soft center wash so the reading column stays calm */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_50%,rgba(250,247,246,0.92)_25%,transparent_100%)]" />

      {/* Large floating dust particles */}
      <FloatingDust count={45} />

      <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
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
