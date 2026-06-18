import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CenovnikClient } from "@/components/cenovnik/CenovnikClient";

export function ServicesSection() {
  return (
    <section id="usluge" className="relative isolate overflow-hidden bg-canvas py-20 lg:py-28">
      {/* Soft beauty background photo — orchid, faded into canvas color */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-orhideja.png"
          alt=""
          fill
          className="object-cover opacity-[0.16]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/85 to-canvas" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-transparent to-canvas" />
      </div>

      {/* Delicate botanical line-art accents */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-16 top-16 h-[320px] w-[320px] text-lila/[0.14] lg:h-[420px] lg:w-[420px]"
        fill="none"
      >
        <path
          d="M100 20c10 20 30 25 40 45s-5 45-40 55c-35-10-50-35-40-55s30-25 40-45Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M100 70v90M70 100h60M80 130h40" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="70" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -left-20 bottom-0 h-[280px] w-[280px] text-nude-text/[0.12] lg:h-[360px] lg:w-[360px]"
        fill="none"
      >
        <path
          d="M100 20c10 20 30 25 40 45s-5 45-40 55c-35-10-50-35-40-55s30-25 40-45Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M100 70v90M70 100h60M80 130h40" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="70" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>

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
