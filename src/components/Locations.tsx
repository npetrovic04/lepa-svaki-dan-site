"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { locations, brand } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const LOGOS = [
  { src: "/logo-beauty.jpg",            w: 160, h: 97  },
  { src: "/logo-wellbeing-concept.png", w: 160, h: 107 },
];

export function Locations() {
  return (
    <section id="lokacije" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Heading */}
        <div className="mb-14">
          <Reveal>
            <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-lila">
              Lokacije
            </div>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal leading-[1.23] text-ink">
              Dve adrese u{" "}
              <span className="font-display-italic text-lila">Beogradu</span>.
            </h2>
          </Reveal>
        </div>

        {/* Location cards — left slides in from left, right from right */}
        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((loc, i) => {
            const logo = LOGOS[i];
            return (
              <motion.article
                key={loc.name}
                initial={{ opacity: 0, x: i === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", bounce: 0.08, duration: 0.8, delay: 0.1 }}
                className="group overflow-hidden rounded-2xl border border-black/[0.05] bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-shadow duration-500"
              >
                {/* Photo */}
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

                {/* Content */}
                <div className="p-7 lg:p-8">
                  {/* Logo */}
                  <div className="mb-5">
                    <Image
                      src={logo.src}
                      alt={`${loc.concept} — ${loc.name}`}
                      width={logo.w}
                      height={logo.h}
                      className="object-contain object-left opacity-90"
                    />
                  </div>

                  <h3 className="font-display text-[1.75rem] font-normal text-ink leading-[1.3]">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-mist font-light">{loc.address}</p>

                  <dl className="mt-5 grid gap-3 border-t border-black/6 pt-5 text-[13px]">
                    <div className="flex justify-between gap-4">
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-mist-light">Telefon</dt>
                      <dd>
                        <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-medium text-ink-soft hover:text-lila transition-colors">
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
                      className="rounded-full bg-lila px-5 py-2.5 text-[11px] font-medium text-white transition-all hover:bg-lila-glow"
                    >
                      Pozovi
                    </a>
                    <a
                      href={loc.map}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-black/12 px-5 py-2.5 text-[11px] font-medium text-ink-soft transition-colors hover:border-lila hover:text-lila"
                    >
                      Otvori mapu
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom contacts */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-black/6 pt-8">
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-lila/40 px-6 py-3 text-[12px] font-medium text-lila transition-all hover:bg-lila hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4l-2.1-1c-.3-.2-.7-.1-.9.2l-.6.7c-.2.2-.5.3-.8.1-1-.5-2-1.2-2.8-2.1-.8-.8-1.5-1.7-2.1-2.7-.2-.3-.1-.6.1-.8l.7-.6c.3-.2.4-.6.2-.9l-1-2.1c-.2-.4-.7-.6-1.1-.4l-1.5.6c-.6.3-.9 1-.7 1.7.5 1.6 1.4 4.7 4.6 7.9 3.2 3.2 6.3 4.1 7.9 4.6.7.2 1.4-.1 1.7-.7l.6-1.5c.2-.4 0-.9-.4-1.1zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7 1 3.8 1.6 5.8 1.6 6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
              </svg>
              WhatsApp
            </a>
            <a href={`mailto:${brand.email}`} className="text-[12px] font-medium text-mist transition-colors hover:text-lila">
              {brand.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
