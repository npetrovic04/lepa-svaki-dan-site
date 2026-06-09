import Image from "next/image";
import { signatureTreatments } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { LocationBadge } from "@/components/LocationBadge";

export function SignatureTreatments() {
  return (
    <section id="tretmani" className="px-3 py-3 lg:px-4">
      <div className="section-card bg-card mx-auto max-w-[1400px]">
        <div className="px-8 py-16 lg:px-16 lg:py-24">

          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-14">
            <div className="max-w-xl">
              <Reveal>
                <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
                  Signature tretmani
                </div>
              </Reveal>
              <Reveal delay={0.07}>
                <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal leading-[1.05] text-ink">
                  Tretmani koji rade{" "}
                  <span className="italic text-champagne">najviše posla</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-xs text-[14px] leading-[1.75] text-mist font-light">
                Birano iz 40+ tretmana — ono što klijenti rezervišu prvo i na
                što se najčešće vraćaju.
              </p>
            </Reveal>
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {signatureTreatments.map((t, i) => (
              <Reveal key={t.title} delay={0.06 * (i % 2)}>
                <article className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                  {/* Image */}
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent" />
                    <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-champagne">
                      {t.price}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mist-light">
                        {t.eyebrow}
                      </div>
                      <LocationBadge location={t.location} />
                    </div>
                    <h3 className="mt-2 font-display text-[2rem] font-normal text-ink leading-[1.1]">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.75] text-mist font-light flex-1">
                      {t.description}
                    </p>
                    <div className="mt-4 rounded-xl bg-card-warm px-4 py-3 text-[13px] italic leading-[1.65] text-ink-soft">
                      {t.result}
                    </div>

                    {/* Meta */}
                    <div className="mt-5 grid grid-cols-3 gap-3 border-t border-black/6 pt-5 text-[11px]">
                      <div>
                        <div className="text-mist-light font-medium uppercase tracking-[0.16em] mb-1">Plan</div>
                        <div className="font-semibold text-ink-soft">{t.sessions}</div>
                      </div>
                      <div>
                        <div className="text-mist-light font-medium uppercase tracking-[0.16em] mb-1">Trajanje</div>
                        <div className="font-semibold text-ink-soft">{t.duration}</div>
                      </div>
                      <div>
                        <div className="text-mist-light font-medium uppercase tracking-[0.16em] mb-1">Cena</div>
                        <div className="font-display text-[1.2rem] font-normal text-champagne">{t.price}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Footer */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-black/6 pt-8">
              <p className="text-[14px] text-mist font-light max-w-md">
                Tražite nešto drugo? Imamo 18 tretmana lica, 12 tretmana tela, 22 estetske procedure.
              </p>
              <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-champagne/50 px-5 py-2.5 text-[12px] font-medium text-champagne transition-all hover:bg-champagne hover:text-onyx">
                Ceo cenovnik
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
