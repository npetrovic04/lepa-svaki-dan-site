import Image from "next/image";
import { verticals } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { LocationBadge } from "@/components/LocationBadge";

export function Verticals() {
  return (
    <section className="px-3 py-3 lg:px-4">
      <div className="section-card bg-card mx-auto max-w-[1400px]">
        <div className="px-8 py-16 lg:px-16 lg:py-24">
          <div className="mb-14">
            <Reveal>
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
                Usluge
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-semibold leading-[1.05] text-ink max-w-2xl">
                Od prvog tretmana do{" "}
                <span className="font-display-italic text-champagne">ozbiljne estetske medicine</span>.
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={0.06 * (i % 3)}>
                <a
                  href="#"
                  className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl p-6 lg:p-7 ${
                    i === 0 ? "lg:col-span-2 lg:aspect-[8/5]" : ""
                  }`}
                >
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />

                  <div className="relative">
                    <div className="mb-2.5 flex items-center gap-2">
                      <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-pearl/80">
                        {v.count}
                      </div>
                      <LocationBadge location={v.location} variant="dark" />
                    </div>
                    <h3 className="font-display text-[2rem] font-semibold text-white leading-[1.1]">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.65] text-pearl/65 font-light max-w-xs">
                      {v.summary}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-[11px] font-medium text-white transition-all group-hover:bg-champagne group-hover:text-onyx group-hover:border-champagne">
                      Pogledaj
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
