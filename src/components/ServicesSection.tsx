import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CenovnikClient } from "@/components/cenovnik/CenovnikClient";
import { FloatingDust } from "@/components/FloatingDust";

export function ServicesSection() {
  return (
    <section id="usluge" className="relative isolate overflow-hidden bg-canvas py-20 lg:py-28">
      {/* Decorative orchid bouquets — anchored to corners, clearly visible */}
      <div className="pointer-events-none absolute -top-20 -left-32 w-[55vw] max-w-[680px] aspect-[16/9] opacity-70">
        <Image src="/hero-orhideja.png" alt="" fill className="object-cover" sizes="60vw" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-canvas/50 to-canvas" />
      </div>
      <div className="pointer-events-none absolute -bottom-24 -right-32 w-[50vw] max-w-[620px] aspect-[16/9] opacity-60 scale-x-[-1]">
        <Image src="/hero-orhideja.png" alt="" fill className="object-cover" sizes="55vw" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-canvas/50 to-canvas" />
      </div>

      {/* Soft radial wash to keep center reading area clean */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(250,247,246,0.85)_30%,transparent_100%)]" />

      {/* Floating gold/lila dust particles */}
      <FloatingDust count={50} />

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
