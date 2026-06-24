import { BeforeAfterSlider } from "@/components/lab/BeforeAfterSlider";
import { RitualQuiz } from "@/components/lab/RitualQuiz";
import { SignatureReveal } from "@/components/lab/SignatureReveal";
import { BreathingTestimonial } from "@/components/lab/BreathingTestimonial";

const DEMOS = [
  { id: "before-after", num: "01", title: "Before / After slider", subtitle: "Povuci središnju liniju levo-desno" },
  { id: "ritual-quiz", num: "02", title: "Pronađi svoj ritual", subtitle: "3 pitanja → 3 preporuke" },
  { id: "signature", num: "03", title: "Dr Tamara potpis", subtitle: "Ručno-pisan potpis u zlatnoj tinti" },
  { id: "testimonial", num: "04", title: "Breathing testimonial", subtitle: "Portret diše, citat se kuca" },
];

export default function LabPage() {
  return (
    <main className="bg-canvas">
      {/* Top intro + nav */}
      <section className="relative px-6 pt-24 pb-12 lg:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] uppercase tracking-[0.32em] text-lila mb-4">
            Lab · WOW kandidati
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.1] mb-5">
            Pet predloga{" "}
            <span className="font-display-italic text-lila">koji bi mogli</span>
            <br />
            da kupe klijenta na prvu.
          </h1>
          <p className="max-w-2xl text-[15px] text-mist font-light leading-relaxed">
            Svaki demo je samostalna komponenta — dole pogledaj, gore u nav-u skoči
            na onaj koji ti se sviđa. Recimo koji da implementiram u glavni sajt.
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

      {/* Sections */}
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

            {d.id === "before-after" && (
              <BeforeAfterSlider
                beforeSrc="/zena1.png"
                afterSrc="/zena2.png"
                caption="Realne pre / posle fotografije. Povuci sredinu da uporediš."
              />
            )}

            {d.id === "ritual-quiz" && <RitualQuiz />}

            {d.id === "signature" && <SignatureReveal />}

            {d.id === "testimonial" && (
              <BreathingTestimonial portraitSrc="/lumiera-assets/portrait.png" />
            )}
          </div>
        </section>
      ))}

      {/* Footer prompt */}
      <section className="px-6 py-20 text-center">
        <p className="font-display text-[1.5rem] text-ink-soft">
          Reci mi koji <span className="font-display-italic text-lila">žele da ostanu</span> →
        </p>
      </section>
    </main>
  );
}
