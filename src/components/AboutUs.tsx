import Image from "next/image";
import { images } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { KineticText } from "@/components/KineticText";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SignatureReveal } from "@/components/lab/SignatureReveal";

export function AboutUs() {
  return (
    <section id="o-nama" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={images.about}
                alt="Lepa Svaki Dan — naš prostor"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-lila">
                O nama
              </div>
            </Reveal>
            <h2 className="font-display text-balance text-[clamp(2.6rem,5vw,4.4rem)] font-normal leading-[1.25] text-ink">
              <KineticText text="Lepota nije" by="word" />{" "}
              <KineticText text="trenutak," by="word" delay={0.25} className="font-display-italic text-lila" />{" "}
              <KineticText text="već navika." by="word" delay={0.45} />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-mist font-light">
                Lepa Svaki Dan je nastala iz uverenja da prava nega kože i tela
                ne traži kompromis — samo posvećenost. Spojili smo aparaturnu
                medicinu i klasičnu estetiku pod jedan krov, sa timom koji vas
                prati od prve konsultacije do vidljivog rezultata.
              </p>
            </Reveal>
            <Reveal delay={0.17}>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.9] text-mist font-light">
                Dve lokacije u Beogradu, jedna filozofija: svaki tretman je
                planiran, ne improvizovan. Jer lepota koju gradite zaslužuje
                pažnju — svaki dan.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-black/6 pt-8">
                <div>
                  <AnimatedCounter value={15} suffix="+" className="font-display text-[2rem] text-lila leading-none" />
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mist-light">godina prakse</div>
                </div>
                <div>
                  <AnimatedCounter value={2} className="font-display text-[2rem] text-lila leading-none" />
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mist-light">koncepta u Beogradu</div>
                </div>
                <div>
                  <AnimatedCounter value={1000} suffix="+" className="font-display text-[2rem] text-lila leading-none" />
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mist-light">klijenata godišnje</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Founder row — mirrors layout above: copy LEFT, image RIGHT ─────── */}
        <div className="mt-20 lg:mt-28 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy + signature on the LEFT */}
          <div>
            <Reveal>
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
                Reč osnivača
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="font-display text-balance text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.2] text-ink">
                "Lepota{" "}
                <span className="font-display-italic text-lila">nije usluga</span>.
                <br />
                To je odnos koji se{" "}
                <span className="font-display-italic text-lila">gradi godinama</span>."
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-mist font-light">
                Posvećenost svakom licu, plan za svaku kožu. Bez improvizacije —
                jer ono što vidite svaki dan u ogledalu zaslužuje pažnju koja
                se ne meri minutima, već godinama prakse.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 border-t border-black/6 pt-8">
                <SignatureReveal inline />
              </div>
            </Reveal>
          </div>

          {/* Portrait on the RIGHT */}
          <Reveal delay={0.1}>
            <div className="relative">
              {/* Soft champagne halo behind portrait */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] -z-10"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(221,176,69,0.18), transparent 75%)",
                }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={images.portraitDr}
                  alt="Dr Tamara Vujačić — osnivač"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
