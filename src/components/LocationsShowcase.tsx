import { SplitScreen } from "@/components/lab/locations/SplitScreen";
import { CoinFlip } from "@/components/lab/locations/CoinFlip";
import { Reveal } from "@/components/Reveal";
import { KineticText } from "@/components/KineticText";

export function LocationsShowcase() {
  return (
    <section id="lokacije" className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 lg:mb-12 text-center">
          <Reveal>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
              Naše lokacije
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-balance text-[clamp(2rem,5vw,4rem)] font-normal text-ink leading-[1.2]">
              <KineticText text="Dva koncepta," by="word" />{" "}
              <span className="font-display-italic text-lila">
                <KineticText text="dve adrese." by="word" delay={0.25} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-lg text-[14px] text-mist font-light leading-relaxed px-4">
              <span className="hidden lg:inline">
                Pomeri miš preko split-screen-a — uđi u svaki prostor pre nego što dođeš.
              </span>
              <span className="lg:hidden">
                Tapni novčić da okreneš stranu — vidi obe lokacije.
              </span>
            </p>
          </Reveal>
        </div>

        {/* Desktop only — split-screen needs a mouse */}
        <div className="hidden lg:block">
          <Reveal delay={0.15}>
            <SplitScreen />
          </Reveal>
        </div>

        {/* Mobile only — tap-friendly coin */}
        <div className="block lg:hidden">
          <Reveal delay={0.15}>
            <CoinFlip />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
