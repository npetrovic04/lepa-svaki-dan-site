import Image from "next/image";
import { locations, brand } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Locations() {
  return (
    <section id="lokacije" className="px-3 py-3 lg:px-4">
      <div className="section-card bg-card-warm mx-auto max-w-[1400px]">
        <div className="px-8 py-16 lg:px-16 lg:py-24">
          <div className="mb-14">
            <Reveal>
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
                Lokacije
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal leading-[1.05] text-ink">
                Dve adrese u{" "}
                <span className="italic text-champagne">Beogradu</span>.
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={0.08 * i}>
                <article className="group overflow-hidden rounded-2xl bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-shadow duration-400">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`${loc.name} — Lepa Svaki Dan`}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                  </div>

                  <div className="p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne mb-1">{loc.concept}</div>
                        <h3 className="font-display text-[2rem] font-normal text-ink leading-[1.1]">{loc.name}</h3>
                        <p className="mt-1 text-[13px] text-mist font-light">{loc.address}</p>
                      </div>
                    </div>

                    <dl className="grid gap-3 border-t border-black/6 pt-5 text-[13px]">
                      <div className="flex justify-between gap-4">
                        <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mist-light">Telefon</dt>
                        <dd>
                          <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-medium text-ink-soft hover:text-champagne transition-colors">
                            {loc.phone}
                          </a>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mist-light">Radno vreme</dt>
                        <dd className="text-right font-medium text-ink-soft">{loc.hours}</dd>
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, "")}`}
                        className="rounded-full bg-ink px-5 py-2.5 text-[11px] font-medium text-white transition-all hover:bg-ink-soft"
                      >
                        Pozovi
                      </a>
                      <a
                        href={loc.map}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-black/12 px-5 py-2.5 text-[11px] font-medium text-ink-soft transition-colors hover:border-champagne hover:text-champagne"
                      >
                        Otvori mapu
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom contacts */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-black/6 pt-8">
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-champagne/40 px-6 py-3 text-[12px] font-medium text-champagne transition-all hover:bg-champagne hover:text-onyx"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4l-2.1-1c-.3-.2-.7-.1-.9.2l-.6.7c-.2.2-.5.3-.8.1-1-.5-2-1.2-2.8-2.1-.8-.8-1.5-1.7-2.1-2.7-.2-.3-.1-.6.1-.8l.7-.6c.3-.2.4-.6.2-.9l-1-2.1c-.2-.4-.7-.6-1.1-.4l-1.5.6c-.6.3-.9 1-.7 1.7.5 1.6 1.4 4.7 4.6 7.9 3.2 3.2 6.3 4.1 7.9 4.6.7.2 1.4-.1 1.7-.7l.6-1.5c.2-.4 0-.9-.4-1.1zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7 1 3.8 1.6 5.8 1.6 6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
                </svg>
                WhatsApp
              </a>
              <a href={`mailto:${brand.email}`} className="text-[12px] font-medium text-mist transition-colors hover:text-champagne">
                {brand.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
