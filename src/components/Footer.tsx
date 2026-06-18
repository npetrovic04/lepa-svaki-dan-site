"use client";

import { brand } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-onyx">
      <div className="mx-auto max-w-7xl px-8 py-14 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div>
              <div className="font-display text-[2.4rem] font-normal text-white leading-[1.3]">
                <span className="font-display-italic text-lila">lepa</span> svaki dan
              </div>
              <p className="mt-4 max-w-sm text-[14px] leading-[1.75] text-pearl/45 font-light">
                Beauty & Wellbeing concept koji spaja modernu estetsku medicinu sa
                ritualom nege. Dve lokacije u Beogradu.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pearl/40 mb-5">Kontakt</div>
              <ul className="space-y-3 text-[14px] text-pearl/55 font-light">
                <li><a href={`tel:${brand.phonePrimary.replace(/\s/g,"")}`} className="hover:text-lila transition-colors">{brand.phonePrimary}</a></li>
                <li><a href={`tel:${brand.phoneWaterfront.replace(/\s/g,"")}`} className="hover:text-lila transition-colors">{brand.phoneWaterfront}</a></li>
                <li><a href={`mailto:${brand.email}`} className="hover:text-lila transition-colors">{brand.email}</a></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pearl/40 mb-5">Pratite nas</div>
              <ul className="space-y-3 text-[14px] text-pearl/55 font-light">
                <li><a href="https://instagram.com/bclepasvakidan" target="_blank" rel="noreferrer" className="hover:text-lila transition-colors">Instagram</a></li>
                <li><a href="https://facebook.com/lepasvakidan" target="_blank" rel="noreferrer" className="hover:text-lila transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-lila transition-colors">YouTube</a></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-2">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pearl/40 mb-5">Lokacije</div>
              <ul className="space-y-4 text-[13px] text-pearl/55 font-light">
                <li>
                  <div className="text-[10px] font-semibold text-lila/60 uppercase tracking-[0.2em] mb-0.5">Beauty Concept</div>
                  Trešnjinog cveta 1ž
                </li>
                <li>
                  <div className="text-[10px] font-semibold text-lila/60 uppercase tracking-[0.2em] mb-0.5">Wellbeing Concept</div>
                  Hercegovačka 17
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-col gap-3 border-t border-pearl/8 pt-8 text-[11px] text-pearl/25 md:flex-row md:items-center md:justify-between">
            <div>© {year} {brand.name}. Sva prava zadržana.</div>
            <div className="uppercase tracking-[0.2em]">
              Pripremio <span className="text-lila/55">ECHOSYSTEM-MOTHER AGENCY</span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
