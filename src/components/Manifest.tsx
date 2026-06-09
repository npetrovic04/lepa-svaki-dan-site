import Image from "next/image";
import { brand, stats, images } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Manifest() {
  return (
    <section id="filozofija" className="px-3 py-3 lg:px-4">
      <div className="section-card bg-card-warm mx-auto max-w-[1400px]">
        <div className="px-8 py-16 lg:px-16 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* Text col */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
                  Filozofija
                </div>
              </Reveal>
              <Reveal delay={0.07}>
                <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-semibold leading-[1.05] text-ink">
                  Lepota nije{" "}
                  <span className="font-display-italic text-champagne">trenutak</span>.{" "}
                  Lepota je{" "}
                  <span className="font-display-italic text-champagne">ritual</span>{" "}
                  koji se gradi.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-8 max-w-xl text-pretty text-[16px] leading-[1.8] text-ink-soft font-light">
                  {brand.manifest}
                </p>
                <p className="mt-4 max-w-xl text-pretty text-[14px] leading-[1.8] text-mist">
                  Naš pristup spaja proverenu aparatku — Venus Legacy, Candela Nordlys,
                  Dermapen, Myolift — sa rukama terapeuta koji vašu kožu poznaju.
                  Rezultat je koža koja se vidi. Bez filtera. Bez teatra.
                </p>
              </Reveal>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-black/8 pt-10 lg:grid-cols-4">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={0.08 * i}>
                    <div>
                      <div className="font-display text-[3rem] font-semibold text-champagne leading-none">
                        {s.value}
                      </div>
                      <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-mist leading-snug">
                        {s.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Portrait col */}
            <Reveal delay={0.1} className="relative lg:col-span-5 mt-6 lg:mt-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={images.portraitDr}
                  alt="Dr Tamara Vujačić, vodeći lekar Lepa Svaki Dan beauty centra"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              </div>

              {/* Name card */}
              <div className="absolute -bottom-4 left-4 right-4 rounded-xl bg-white px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] lg:-bottom-6 lg:left-6 lg:right-auto lg:w-[80%]">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-champagne">
                  Vodeći lekar
                </div>
                <div className="mt-2 font-display text-[1.6rem] font-semibold text-ink">
                  Dr Tamara Vujačić
                </div>
                <div className="mt-1 text-[13px] text-mist font-light">
                  Specijalista estetske medicine · 15+ godina prakse
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
