import { EditorialMagazine } from "@/components/lab/cenovnik/EditorialMagazine";
import { SpaMenu } from "@/components/lab/cenovnik/SpaMenu";
import { TreatmentBuilder } from "@/components/lab/cenovnik/TreatmentBuilder";
import { SearchFirst } from "@/components/lab/cenovnik/SearchFirst";

const DEMOS = [
  { id: "editorial", num: "01", title: "Editorial magazin", subtitle: "Vogue-style spread sa velikom fotografijom + brojem + cenom" },
  { id: "menu", num: "02", title: "Spa meni", subtitle: "Klasičan restoranski meni sa dot leader-ima i ornamentima" },
  { id: "builder", num: "03", title: "Treatment builder", subtitle: "Klikni tretmane → pravi svoj plan, paket popust kad >=3" },
  { id: "search", num: "04", title: "Search-first", subtitle: "Veliki search input, popularne chip-tagovi, live filter" },
];

export default function LabCenovnikV2Page() {
  return (
    <main className="bg-canvas">
      <section className="relative px-6 pt-24 pb-12 lg:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] uppercase tracking-[0.32em] text-lila mb-4">
            Lab · Cenovnik · v2
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.1] mb-5">
            Sasvim drugi pristupi{" "}
            <span className="font-display-italic text-lila">cenovniku.</span>
          </h1>
          <p className="max-w-2xl text-[15px] text-mist font-light leading-relaxed">
            Drugačiji od prethodnih 6 — manje "tabela sa cenama", više "atmosfera + interakcija".
            Reci koji ti se sviđa.
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

            {d.id === "editorial" && <EditorialMagazine />}
            {d.id === "menu" && <SpaMenu />}
            {d.id === "builder" && <TreatmentBuilder />}
            {d.id === "search" && <SearchFirst />}
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
