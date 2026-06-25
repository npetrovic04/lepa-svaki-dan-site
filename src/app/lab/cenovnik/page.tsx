import { DualColumnTable } from "@/components/lab/cenovnik/DualColumnTable";
import { LocationFirstHero } from "@/components/lab/cenovnik/LocationFirstHero";
import { ColorStripCards } from "@/components/lab/cenovnik/ColorStripCards";
import { SalonToggle } from "@/components/lab/cenovnik/SalonToggle";
import { MapAnchored } from "@/components/lab/cenovnik/MapAnchored";
import { StickerCards } from "@/components/lab/cenovnik/StickerCards";

const DEMOS = [
  { id: "table", num: "01", title: "Dual-column tabela", subtitle: "Usluga | NB | BW — check + cena u koloni gde se radi" },
  { id: "hero", num: "02", title: "Location-first navigacija", subtitle: "Velike kartice lokacija gore, filter na klik" },
  { id: "strip", num: "03", title: "Color-strip kartice", subtitle: "Strip ispod cene = lokacija (bez badge-eva)" },
  { id: "toggle", num: "04", title: "Cenovnik-by-lokacija toggle", subtitle: "Salon switch — ulazi u 'taj' salon vizuelno" },
  { id: "map", num: "05", title: "Map-anchored cenovnik", subtitle: "Sticky mapa Beograda + pin pulsira na aktivnoj grupi" },
  { id: "sticker", num: "06", title: "Sticker kartice", subtitle: "Veliki sticker u uglu (NB / BW / oba)" },
];

export default function LabCenovnikPage() {
  return (
    <main className="bg-canvas">
      <section className="relative px-6 pt-24 pb-12 lg:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] uppercase tracking-[0.32em] text-lila mb-4">
            Lab · Cenovnik
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.1] mb-5">
            Šest načina da pokažemo{" "}
            <span className="font-display-italic text-lila">cene i lokacije.</span>
          </h1>
          <p className="max-w-2xl text-[15px] text-mist font-light leading-relaxed">
            Svaki demo koristi iste primerke iz cenovnika — vidi koji najbolje
            kazuje "gde šta ima". Reci koji da implementiramo umesto trenutnog.
          </p>

          <nav className="mt-10 flex flex-wrap gap-2">
            {DEMOS.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[12px] text-ink-soft transition-all hover:border-lila/40 hover:bg-lila/5 hover:text-lila"
              >
                <span className="text-[10px] font-semibold text-champagne tracking-wider">{d.num}</span>
                {d.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {DEMOS.map((d, i) => (
        <section
          key={d.id}
          id={d.id}
          className={`relative px-6 py-16 lg:py-24 ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-baseline gap-5">
              <span className="font-display text-[2.5rem] text-champagne leading-none">{d.num}</span>
              <div>
                <h2 className="font-display text-[1.8rem] lg:text-[2.2rem] text-ink leading-tight">
                  {d.title}
                </h2>
                <p className="text-[13px] text-mist font-light mt-1">{d.subtitle}</p>
              </div>
            </div>

            {d.id === "table" && <DualColumnTable />}
            {d.id === "hero" && <LocationFirstHero />}
            {d.id === "strip" && <ColorStripCards />}
            {d.id === "toggle" && <SalonToggle />}
            {d.id === "map" && <MapAnchored />}
            {d.id === "sticker" && <StickerCards />}
          </div>
        </section>
      ))}

      <section className="px-6 py-20 text-center">
        <p className="font-display text-[1.5rem] text-ink-soft">
          Koji da <span className="font-display-italic text-lila">postane</span> cenovnik →
        </p>
      </section>
    </main>
  );
}
