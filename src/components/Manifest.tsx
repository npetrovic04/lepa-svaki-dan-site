import Image from "next/image";
import { brand, images } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const checkpoints = [
  "Plan tretmana koji se gradi za vašu kožu",
  "Dr Tamara Vujačić — 15+ godina specijalističke prakse",
  "Aparatura Candela, Venus, Dermapen — svetski standard",
  "Dve specijalizovane lokacije u Beogradu",
];

export function Manifest() {
  return (
    <section id="filozofija" className="bg-[#F5F1EC] px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Left: text col */}
          <div>
            <Reveal>
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
                Naša filozofija
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <h2 className="font-display max-w-xl text-balance text-[clamp(2.6rem,5vw,4.8rem)] font-normal text-ink leading-[1.23]">
                Jedno mesto.<br />
                Izgrađeno{" "}
                <span className="font-display-italic text-lila">
                  za tebe
                </span>
                .
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-7 max-w-lg text-[16px] leading-[1.8] text-ink-soft font-light">
                {brand.manifest}
              </p>
            </Reveal>

            {/* Checkmarks */}
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-3.5">
                {checkpoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-ink-soft leading-snug">
                    <span className="mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-lila/15">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#B8924A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <a
                href="#filozofija"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-lila px-7 py-3.5 text-[13px] font-semibold text-onyx transition-all hover:bg-lila-glow hover:shadow-[0_6px_24px_rgba(148,113,211,0.35)]"
              >
                Upoznaj nas ›
              </a>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-black/8 pt-10">
                {[
                  { value: "15+", label: "Godina prakse" },
                  { value: "40+", label: "Tretmana" },
                  { value: "1.000+", label: "Klijenata god." },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-[2.8rem] font-normal text-lila leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-mist leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: image col */}
          <Reveal delay={0.1} className="relative">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={images.portraitDr}
                alt="Dr Tamara Vujačić, vodeći lekar Lepa Svaki Dan"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />

              {/* Frosted glass text pill on image */}
              <div className="absolute bottom-6 left-5 right-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 px-6 py-4">
                <p className="font-display text-[1.15rem] font-normal text-white leading-snug">
                  &ldquo;Ne radimo brze rezultate.<br />
                  Radimo pravu negu.&rdquo;
                </p>
              </div>
            </div>

            {/* Circular stamp badge */}
            <div className="absolute -right-4 -top-4 size-24 lg:-right-6 lg:-top-6 lg:size-28">
              <svg viewBox="0 0 120 120" className="w-full h-full animate-[spin_20s_linear_infinite]">
                <defs>
                  <path id="circle-text" d="M 60,60 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0"/>
                </defs>
                <text
                  fontSize="13.5"
                  fontWeight="600"
                  fill="#B8924A"
                  letterSpacing="2.5"
                  style={{ fontFamily: "system-ui, sans-serif", textTransform: "uppercase" }}
                >
                  <textPath href="#circle-text">
                    LEPA SVAKI DAN · BEOGRAD · 2009 ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="text-lila">
                  <path d="M20 2C20 2 18 8 20 12C22 16 20 20 20 20C20 20 22 16 26 14C30 12 36 14 36 14C36 14 30 16 28 20C26 24 28 28 28 28C28 28 24 24 20 24C16 24 12 28 12 28C12 28 14 24 12 20C10 16 4 14 4 14C4 14 10 12 14 14C18 16 20 20 20 20C20 20 18 16 20 12C22 8 20 2 20 2Z" fill="currentColor" opacity="0.7"/>
                  <circle cx="20" cy="20" r="3.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Name card overlapping bottom */}
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.09)] lg:-bottom-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-lila">
                Vodeći lekar
              </div>
              <div className="mt-1.5 font-display text-[1.5rem] font-normal text-ink">
                Dr Tamara Vujačić
              </div>
              <div className="mt-1 text-[13px] text-mist font-light">
                Specijalista estetske medicine · 15+ godina
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
