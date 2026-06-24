"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LOCATIONS } from "@/lib/locations";

function Window({ loc, idx }: { loc: typeof LOCATIONS[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Inner photo translates at a different rate than the frame — parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
    >
      {/* Window frame */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-[-10%]">
          <Image src={loc.image} alt={loc.name} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 90vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* Color tag */}
        <span
          className="absolute top-5 left-5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm"
          style={{ background: `${loc.accent}E0`, color: "#fff" }}
        >
          Lokacija {idx + 1}
        </span>

        {/* Inside content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <div className="font-display text-[2.1rem] leading-tight">{loc.name}</div>
          <div className="font-display-italic text-[1.2rem] text-white/85 mb-3">{loc.subtitle}</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] opacity-90">
            <span>{loc.address}</span>
            <span className="opacity-50">·</span>
            <span>{loc.hours}</span>
          </div>
        </div>
      </div>

      {/* Bottom hover-CTA */}
      <a
        href="#"
        className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-canvas"
      >
        <span className="text-[13px] text-mist">{loc.phone}</span>
        <span
          className="inline-flex items-center gap-2 text-[13px] font-semibold transition-transform group-hover:translate-x-1"
          style={{ color: loc.accent }}
        >
          Uđi u prostor ›
        </span>
      </a>
    </article>
  );
}

export function TwoWindows() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {LOCATIONS.map((loc, i) => (
        <Window key={loc.key} loc={loc} idx={i} />
      ))}
    </div>
  );
}
