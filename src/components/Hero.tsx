import Image from "next/image";
import { images } from "@/lib/data";

export function Hero() {
  return (
    <section className="px-3 pt-24 pb-3 lg:px-4 lg:pt-28">
      {/* Rounded hero card */}
      <div className="relative isolate overflow-hidden rounded-[28px] min-h-[88vh] flex flex-col justify-end bg-onyx">
        <Image
          src={images.hero}
          alt="Tretman lica u Lepa Svaki Dan beauty centru"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-80"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_60%_at_15%_50%,rgba(198,167,114,0.12),transparent_60%)]" />

        {/* Content */}
        <div className="relative px-8 pb-12 lg:px-14 lg:pb-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-pearl/80">
              <span className="size-1.5 rounded-full bg-champagne" />
              Beauty & Wellbeing Concept · Beograd
            </div>

            <h1 className="font-display text-[clamp(3.8rem,9.5vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-white">
              Lepa{" "}
              <span className="font-display-italic text-champagne">svaki</span>
              <br />dan.
            </h1>

            <p className="mt-7 max-w-md text-[16px] leading-[1.7] text-pearl/70 font-light">
              Estetska medicina i ritual nege — pod jednim krovom.
              Plan koji se gradi za vašu kožu. Bez improvizacije.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#tretmani"
                className="inline-flex items-center gap-2.5 rounded-full bg-champagne px-7 py-3.5 text-[13px] font-semibold text-onyx transition-all hover:bg-champagne-glow hover:shadow-[0_6px_24px_rgba(198,167,114,0.4)]"
              >
                Pogledaj tretmane
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#put"
                className="rounded-full border border-pearl/20 px-7 py-3.5 text-[13px] font-medium text-pearl/70 transition-colors hover:border-pearl/50 hover:text-pearl"
              >
                Kako radimo
              </a>
            </div>
          </div>

          {/* Bottom location bar */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-pearl/40 mb-1">Lokacija 1</div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-pearl/65">Novi Beograd · Beauty Concept</div>
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-pearl/40 mb-1">Lokacija 2</div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-pearl/65">Belgrade Waterfront · Wellbeing</div>
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-pearl/40">Pon — Sub · 9—21h</div>
          </div>
        </div>
      </div>
    </section>
  );
}
