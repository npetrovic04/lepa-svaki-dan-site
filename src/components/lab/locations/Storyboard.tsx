"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const SCENES = [
  { num: "01", title: "Ulaziš", body: "Vrata se otvaraju u tišinu. Ti i tvoj plan." },
  { num: "02", title: "Konsultacija", body: "Lice, koža, ritam, ciljevi — 30 minuta posvećenosti." },
  { num: "03", title: "Tretman", body: "Tehnologija, vešte ruke, ritual koji ne žuriš." },
  { num: "04", title: "Pratimo te", body: "Sledeći termin nije sastanak — nastavak razgovora." },
];

/**
 * Horizontal-scroll storyboard pinned vertically:
 * scrolling the page advances the panels left → right.
 */
export function Storyboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const tone = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FDF1EC", "#FAF7F6", "#E8EFF5"]
  );

  return (
    <motion.section
      ref={ref}
      style={{ background: tone }}
      className="relative h-[280vh] rounded-3xl overflow-hidden"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12 will-change-transform">
          {SCENES.map((s, i) => (
            <article
              key={s.num}
              className="flex h-[60vh] w-[60vw] flex-shrink-0 flex-col justify-end rounded-3xl bg-white p-12 shadow-[0_12px_50px_rgba(0,0,0,0.08)]"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(135deg, #FFFFFF 0%, #FDF1EC 100%)"
                    : "linear-gradient(135deg, #FFFFFF 0%, #E8EFF5 100%)",
              }}
            >
              <div
                className="font-display text-[6rem] leading-none mb-6"
                style={{ color: i % 2 === 0 ? "#C97A99" : "#5B6F94" }}
              >
                {s.num}
              </div>
              <h3 className="font-display text-[2.4rem] text-ink leading-tight mb-3">
                {s.title}
              </h3>
              <p className="text-[15px] text-mist max-w-md leading-relaxed">{s.body}</p>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-black/65 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white">
        Skroluj naniže → kreće horizontalno
      </div>
    </motion.section>
  );
}
