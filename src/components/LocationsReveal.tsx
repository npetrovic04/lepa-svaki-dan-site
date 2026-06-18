"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { locations } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { WomanIllustration } from "@/components/WomanIllustration";

// TODO: swap WomanIllustration (SVG placeholder) for a real photo once provided —
// front-facing, arms-down, transparent bg, photographed/lit so each arm can be
// isolated as a separate layer for this scroll animation.

export function LocationsReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Left arm + card 1: 0 → 0.5 of scroll
  const leftArmRotate = useTransform(scrollYProgress, [0, 0.5], [0, 34]);
  const card1Opacity = useTransform(scrollYProgress, [0.12, 0.32], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.12, 0.5], [40, 0]);

  // Right arm + card 2: 0.5 → 1 of scroll
  const rightArmRotate = useTransform(scrollYProgress, [0.5, 1], [0, -34]);
  const card2Opacity = useTransform(scrollYProgress, [0.62, 0.82], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.62, 1], [40, 0]);

  return (
    <section id="lokacije-reveal" className="relative bg-canvas">
      <div ref={containerRef} className="relative h-[260vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">

          <Reveal>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-lila">
                Lokacije
              </div>
              <h2 className="font-display text-balance text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal leading-[1.2] text-ink">
                Dve adrese u{" "}
                <span className="font-display-italic text-lila">Beogradu</span>.
              </h2>
            </div>
          </Reveal>

          {/* Woman — centered, arms-down base illustration */}
          <div className="relative h-[70vh] w-full max-w-[420px]">
            <WomanIllustration leftArmRotate={leftArmRotate} rightArmRotate={rightArmRotate} />

            {/* Card 1 — sits on left palm */}
            <motion.div
              style={{ opacity: card1Opacity, y: card1Y }}
              className="absolute left-[2%] top-[18%] w-[180px] rounded-xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-lila">
                {locations[0].concept}
              </div>
              <div className="mt-1 font-display text-[1.1rem] text-ink leading-tight">
                {locations[0].name}
              </div>
              <div className="mt-1 text-[11px] text-mist font-light">{locations[0].address}</div>
            </motion.div>

            {/* Card 2 — sits on right palm */}
            <motion.div
              style={{ opacity: card2Opacity, y: card2Y }}
              className="absolute right-[2%] top-[18%] w-[180px] rounded-xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-lavanda">
                {locations[1].concept}
              </div>
              <div className="mt-1 font-display text-[1.1rem] text-ink leading-tight">
                {locations[1].name}
              </div>
              <div className="mt-1 text-[11px] text-mist font-light">{locations[1].address}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
