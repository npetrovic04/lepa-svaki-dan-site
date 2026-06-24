import Image from "next/image";
import { signatureTreatments } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { UnfoldCard } from "@/components/UnfoldCard";

export function SignatureTreatments() {
  return (
    <section id="tretmani" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-5 px-4 lg:flex-row lg:items-end lg:justify-between lg:px-0">
          <div className="max-w-xl">
            <Reveal>
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
                Signature tretmani
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="font-display text-balance text-[clamp(2.6rem,5vw,4.5rem)] font-normal text-ink leading-[1.23]">
                Tretmani{" "}
                <span className="font-display-italic text-lila">koji rade</span>{" "}
                najviše posla.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="flex items-center gap-5">
              <p className="max-w-xs text-[14px] leading-[1.75] text-mist font-light">
                Ono što klijenti rezervišu prvo i na šta se najčešće vraćaju.
              </p>
              <a href="#" className="flex-shrink-0 inline-flex items-center gap-1.5 text-[13px] font-medium text-lila hover:underline">
                Ceo meni ›
              </a>
            </div>
          </Reveal>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-white to-transparent lg:w-0" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide lg:overflow-x-visible lg:grid lg:grid-cols-4 lg:gap-5 lg:px-0">
            {signatureTreatments.map((t, i) => (
              <UnfoldCard key={t.title} delay={0.12 * (i % 4)} className="w-[280px] flex-shrink-0 lg:w-auto">
                <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">

                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(min-width: 1024px) 24vw, 280px"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

                    {/* Price badge */}
                    <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-lila">
                      {t.price}
                    </div>

                    {/* Bottom name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.3em] text-pearl/60 mb-1">{t.eyebrow}</div>
                        <h3 className="font-display text-[1.5rem] font-normal text-white leading-tight">
                          {t.title}
                        </h3>
                      </div>
                      <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/25 transition-all group-hover:bg-lila group-hover:border-lila">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-white -rotate-45 transition-transform group-hover:rotate-0">
                          <path d="M7 17L17 7m0 0H7m10 0v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center justify-between px-5 py-4 text-[12px]">
                    <span className="text-mist font-light">{t.duration}</span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-mist-light">{t.sessions}</span>
                  </div>
                </article>
              </UnfoldCard>
            ))}
          </div>
        </div>

        {/* Carousel arrows + footer */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-4 lg:px-0">
            <div className="flex gap-3">
              <button className="flex size-11 items-center justify-center rounded-full border border-black/12 text-ink-soft transition-all hover:border-lila hover:text-lila" aria-label="Prethodni">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5m0 0l6-6m-6 6l6 6"/>
                </svg>
              </button>
              <button className="flex size-11 items-center justify-center rounded-full border border-black/12 text-ink-soft transition-all hover:border-lila hover:text-lila" aria-label="Sledeći">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6"/>
                </svg>
              </button>
            </div>
            <p className="text-[13px] text-mist font-light">
              Još 36 tretmana i protokola u ponudi.{" "}
              <a href="#" className="text-lila hover:underline">Ceo cenovnik ›</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
