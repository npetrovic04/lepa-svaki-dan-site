import { brand } from "@/lib/data";

export function Footer() {
  const year = 2026;
  return (
    <footer className="px-3 pb-3 lg:px-4">
      <div className="section-card bg-onyx px-8 py-14 lg:px-16 lg:py-16 mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-[2.4rem] font-semibold text-white leading-[1.1]">
              <span className="font-display-italic text-champagne">lepa</span> svaki dan
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.75] text-pearl/45 font-light">
              Beauty & Wellbeing concept koji spaja modernu estetsku medicinu sa
              ritualom nege. Dve lokacije u Beogradu.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pearl/40 mb-5">Kontakt</div>
            <ul className="space-y-3 text-[14px] text-pearl/55 font-light">
              <li><a href={`tel:${brand.phonePrimary.replace(/\s/g,"")}`} className="hover:text-champagne transition-colors">{brand.phonePrimary}</a></li>
              <li><a href={`tel:${brand.phoneWaterfront.replace(/\s/g,"")}`} className="hover:text-champagne transition-colors">{brand.phoneWaterfront}</a></li>
              <li><a href={`mailto:${brand.email}`} className="hover:text-champagne transition-colors">{brand.email}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pearl/40 mb-5">Pratite nas</div>
            <ul className="space-y-3 text-[14px] text-pearl/55 font-light">
              <li><a href="https://instagram.com/bclepasvakidan" target="_blank" rel="noreferrer" className="hover:text-champagne transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com/lepasvakidan" target="_blank" rel="noreferrer" className="hover:text-champagne transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">YouTube</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pearl/40 mb-5">Lokacije</div>
            <ul className="space-y-4 text-[13px] text-pearl/55 font-light">
              <li>
                <div className="text-[10px] font-semibold text-champagne/60 uppercase tracking-[0.2em] mb-0.5">Beauty Concept</div>
                Trešnjinog cveta 1ž
              </li>
              <li>
                <div className="text-[10px] font-semibold text-champagne/60 uppercase tracking-[0.2em] mb-0.5">Wellbeing Concept</div>
                Hercegovačka 17
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-pearl/8 pt-8 text-[11px] text-pearl/25 md:flex-row md:items-center md:justify-between">
          <div>© {year} {brand.name}. Sva prava zadržana.</div>
          <div className="uppercase tracking-[0.2em]">
            Pripremio <span className="text-champagne/55">ECHOSYSTEM-MOTHER AGENCY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
