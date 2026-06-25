"use client";

import Image from "next/image";
import { DEMO_GROUPS } from "./sampleData";

const IMAGES = [
  "/lumiera-assets/UERW22sh1kIYLi7iLSLwZnqeI.jpg",
  "/lumiera-assets/FUuEVpCZfxYHuVoaO9hjkXCU.jpg",
  "/lumiera-assets/Ta7t8pysLYXQc3he12H4MyZJTvc.jpg",
  "/lumiera-assets/pe83T6PELURtsEzQGkeaYxCs.jpg",
];

/**
 * Vogue-style editorial — each service is a magazine spread.
 * Big numbered photo on one side, copy + price on the other,
 * alternating sides for a flowing read.
 */
export function EditorialMagazine() {
  const flat = DEMO_GROUPS.flatMap((g) =>
    g.services.map((s) => ({ ...s, group: g.title }))
  ).slice(0, 8);

  return (
    <div className="space-y-24 lg:space-y-32">
      {flat.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <article
            key={s.name}
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${reverse ? "" : ""}`}
          >
            {/* Image — big editorial photo */}
            <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={IMAGES[i % IMAGES.length]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <span
                className="absolute -top-4 -left-4 font-display text-[5rem] lg:text-[7rem] text-champagne leading-none select-none"
                style={{ WebkitTextStroke: "1px var(--color-champagne)", color: "transparent" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Copy */}
            <div className={reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}>
              <div className="text-[10px] uppercase tracking-[0.4em] text-champagne mb-4">
                {s.group}
              </div>
              <h3 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-ink leading-tight mb-5">
                {s.name}
              </h3>
              {s.description && (
                <p className="text-[15px] text-mist leading-relaxed mb-7 max-w-md">
                  {s.description}
                </p>
              )}
              <div className="flex items-baseline gap-5 mb-5">
                <span className="font-display text-[2.6rem] text-lila leading-none">{s.price}</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-mist-light">po tretmanu</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-lila transition-colors">
                  Zakaži
                </a>
                <span className="text-[11px] uppercase tracking-[0.22em] text-mist">
                  {s.location === "both" ? "Obe lokacije" : s.location === "nb" ? "Novi Beograd" : "Belgrade Waterfront"}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
