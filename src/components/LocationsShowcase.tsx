import { SplitScreen } from "@/components/lab/locations/SplitScreen";
import { CoinFlip } from "@/components/lab/locations/CoinFlip";
import { Reveal } from "@/components/Reveal";
import { KineticText } from "@/components/KineticText";

export function LocationsShowcase() {
  return (
    <section id="lokacije" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <Reveal>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
              Naše lokacije
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-balance text-[clamp(2.4rem,5vw,4rem)] font-normal text-ink leading-[1.2]">
              <KineticText text="Dva koncepta," by="word" />{" "}
              <span className="font-display-italic text-lila">
                <KineticText text="dve adrese." by="word" delay={0.25} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-lg text-[14px] text-mist font-light leading-relaxed">
              Pomeri miš preko split-screen-a, klikni novčić — uđi
              u svaki prostor pre nego što dođeš.
            </p>
          </Reveal>
        </div>

        {/* Split screen — atmospheric intro */}
        <Reveal delay={0.15}>
          <SplitScreen />
        </Reveal>

        {/* Coin flip — interactive deep dive */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <div className="mb-10 text-center">
              <div className="text-[10px] font-semibold uppercase tracking-[0.38em] text-champagne mb-3">
                Okreni i odaberi
              </div>
              <h3 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] text-ink leading-tight">
                Klikni novčić — vidi <span className="font-display-italic text-lila">drugu stranu</span>.
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <CoinFlip />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
