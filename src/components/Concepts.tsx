import Image from "next/image";
import { concepts, sharedServices } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

export function Concepts() {
  return (
    <section id="koncepti" className="bg-[#F5F1EC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div>

          {/* Header */}
          <div className="mb-14">
            <Reveal>
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-lila">
                Dva koncepta · Jedna filozofija
              </div>
            </Reveal>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <Reveal delay={0.07}>
                <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal leading-[1.23] text-ink max-w-xl">
                  Šta je dostupno{" "}
                  <span className="font-display-italic text-lila">gde</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="max-w-sm text-[14px] leading-[1.8] text-mist font-light">
                  Neke usluge su dostupne isključivo na jednoj lokaciji.
                  Ispod vidite tačno šta dobijate na kojoj adresi.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Two concept cards */}
          <div className="grid gap-4 lg:grid-cols-2">
            {concepts.map((c, i) => {
              const isWellbeing = c.slug === "wellbeing";
              return (
                <Reveal key={c.slug} delay={0.08 * i}>
                  <TiltCard className="group flex flex-col overflow-hidden rounded-2xl bg-white">

                    {/* Image with concept label overlaid */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        sizes="(min-width: 1024px) 48vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] mb-3 ${
                            isWellbeing
                              ? "bg-lavanda text-white"
                              : "bg-lila text-onyx"
                          }`}
                        >
                          <span className={`size-1.5 rounded-full ${isWellbeing ? "bg-white/50" : "bg-onyx/30"}`} />
                          {c.concept}
                        </span>
                        <div className="font-display text-[2.2rem] font-normal text-white leading-[1.3]">
                          {c.name}
                        </div>
                        <div className="mt-1 text-[12px] text-pearl/65 font-light tracking-wide">
                          {c.location}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-7 lg:p-8">
                      <p className="text-[14px] leading-[1.8] text-mist font-light">
                        {c.description}
                      </p>

                      {/* Services exclusive to this location */}
                      <div className="mt-7">
                        <div className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] ${isWellbeing ? "text-lavanda" : "text-lila"}`}>
                          Dostupno isključivo ovde
                        </div>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                          {c.services.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-[13px] font-light text-ink-soft leading-snug">
                              <span className={`mt-[5px] size-1.5 rounded-full flex-shrink-0 ${isWellbeing ? "bg-lavanda" : "bg-lila"}`} />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-black/6 pt-6">
                        <a
                          href={`tel:${c.phone.replace(/\s/g, "")}`}
                          className={`flex-1 text-center rounded-full px-5 py-3 text-[12px] font-medium text-white transition-all ${
                            isWellbeing ? "bg-lavanda hover:bg-lila" : "bg-ink hover:bg-ink-soft"
                          }`}
                        >
                          {c.phone}
                        </a>
                        <a
                          href={c.map}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-black/12 px-5 py-3 text-[12px] font-medium text-ink-soft transition-colors hover:text-lila hover:border-lila/50"
                        >
                          Mapa →
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          {/* Shared services strip */}
          <Reveal delay={0.14}>
            <div className="mt-4 overflow-hidden rounded-2xl bg-white px-7 py-5 lg:px-10 lg:py-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mist mb-2">
                    Na obe lokacije
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="size-2 rounded-full bg-lila" />
                    <span className="size-2 rounded-full bg-lavanda" />
                  </div>
                </div>
                <div className="h-px w-full bg-black/6 sm:h-8 sm:w-px sm:flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {sharedServices.map((s) => (
                    <span key={s} className="rounded-full border border-black/10 bg-card px-4 py-1.5 text-[12px] font-medium text-ink-soft">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-[12px] text-mist font-light sm:ml-auto sm:flex-shrink-0">
                  Za potvrdu — pozovite željenu lokaciju.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

