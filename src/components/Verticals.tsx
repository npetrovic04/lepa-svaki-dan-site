import Image from "next/image";
import { verticals } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { LocationBadge } from "@/components/LocationBadge";
import { TiltCard } from "@/components/TiltCard";

// Bento spans — index0 is the big featured card, auto-placement fills the
// rest without gaps (verified: 2x2 + 1x1 + 1x1 + 1x1 + 2x1 = perfect grid).
const SPANS = [
  "lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto",
  "aspect-[4/5] lg:aspect-auto",
  "aspect-[4/5] lg:aspect-auto",
  "aspect-[4/5] lg:aspect-auto",
  "lg:col-span-2 aspect-[4/5] lg:aspect-auto",
];

export function Verticals() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div>
          <div className="mb-14">
            <Reveal>
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-lila">
                Usluge
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal leading-[1.23] text-ink max-w-2xl">
                Od prvog tretmana do{" "}
                <span className="font-display-italic text-lila">ozbiljne estetske medicine</span>.
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[220px]">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={0.06 * i}>
                <TiltCard
                  className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl ${SPANS[i]}`}
                >
                  <a href="#" className="relative flex h-full w-full flex-col justify-end p-6 lg:p-7">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

                    {/* Shine sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                    <div className="relative">
                      <div className="mb-2.5 flex items-center gap-2">
                        <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-pearl/80 transition-colors duration-300 group-hover:bg-lila group-hover:text-onyx">
                          {v.count}
                        </div>
                        <LocationBadge location={v.location} variant="dark" />
                      </div>
                      <h3 className={`font-display font-normal text-white leading-[1.3] ${i === 0 ? "text-[2.4rem]" : "text-[1.6rem]"}`}>
                        {v.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.65] text-pearl/65 font-light max-w-xs">
                        {v.summary}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-[11px] font-medium text-white transition-all duration-300 group-hover:gap-3 group-hover:bg-lila group-hover:text-onyx group-hover:border-lila">
                        Pogledaj
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                          <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
