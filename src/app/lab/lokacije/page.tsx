import { SplitScreen } from "@/components/lab/locations/SplitScreen";
import { TwoWindows } from "@/components/lab/locations/TwoWindows";
import { BelgradeMap } from "@/components/lab/locations/BelgradeMap";
import { Storyboard } from "@/components/lab/locations/Storyboard";
import { ArmsReveal } from "@/components/lab/locations/ArmsReveal";
import { CoinFlip } from "@/components/lab/locations/CoinFlip";

const DEMOS = [
  { id: "split", num: "01", title: "Split-screen sa kursorom", subtitle: "Dijagonala prati miš — leva strana NB, desna BW" },
  { id: "windows", num: "02", title: "Dva prozora — parallax", subtitle: "Kartice sa parallax fotografijom unutar 'okvira'" },
  { id: "map", num: "03", title: "Mapa Beograda + pulsing pinovi", subtitle: "Stilizovana mapa sa rekama, hover pin za info" },
  { id: "story", num: "04", title: "Scroll storyboard", subtitle: "4 scene koje klize horizontalno dok skroluješ" },
  { id: "arms", num: "05", title: "Žena rukama otkriva lokacije", subtitle: "Centralni lik + dva kruga koji se 'otvaraju' levo/desno" },
  { id: "coin", num: "06", title: "3D flip novčić", subtitle: "Jedan veliki krug — klik okreće, sa svake strane jedna lokacija" },
];

export default function LokacijePage() {
  return (
    <main className="bg-canvas">
      <section className="relative px-6 pt-24 pb-12 lg:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] uppercase tracking-[0.32em] text-lila mb-4">
            Lab · Lokacije
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.1] mb-5">
            Šest načina da prikažemo{" "}
            <span className="font-display-italic text-lila">dve lokacije.</span>
          </h1>
          <p className="max-w-2xl text-[15px] text-mist font-light leading-relaxed">
            Svaki demo je samostalan koncept. Reci koji ti se sviđa — implementiramo
            ga u glavni sajt umesto trenutnog Locations dela.
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

            {d.id === "split" && <SplitScreen />}
            {d.id === "windows" && <TwoWindows />}
            {d.id === "map" && <BelgradeMap />}
            {d.id === "story" && <Storyboard />}
            {d.id === "arms" && <ArmsReveal />}
            {d.id === "coin" && <CoinFlip />}
          </div>
        </section>
      ))}

      <section className="px-6 py-20 text-center">
        <p className="font-display text-[1.5rem] text-ink-soft">
          Koji da <span className="font-display-italic text-lila">postane</span> sekcija "Lokacije" →
        </p>
      </section>
    </main>
  );
}
