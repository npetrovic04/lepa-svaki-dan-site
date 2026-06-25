"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEMO_GROUPS } from "./sampleData";
import { LOCATIONS } from "@/lib/locations";

export function SalonToggle() {
  const [idx, setIdx] = useState(0);
  const loc = LOCATIONS[idx];

  const filtered = DEMO_GROUPS.map((g) => ({
    ...g,
    services: g.services.filter((s) => s.location === loc.key || s.location === "both"),
  })).filter((g) => g.services.length > 0);

  return (
    <div>
      {/* Toggle */}
      <div className="relative mx-auto mb-10 inline-flex w-fit items-center rounded-full bg-canvas p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)]">
        {LOCATIONS.map((l, i) => (
          <button
            key={l.key}
            onClick={() => setIdx(i)}
            className="relative z-10 px-7 py-3 text-[13px] font-semibold transition-colors"
            style={{ color: idx === i ? "#fff" : "var(--color-ink-soft)" }}
          >
            {l.subtitle}
          </button>
        ))}
        <motion.span
          layout
          className="absolute inset-y-1 z-0 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
          style={{
            left: idx === 0 ? "4px" : "50%",
            right: idx === 0 ? "50%" : "4px",
            background: loc.accent,
          }}
          transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={loc.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Atmospheric backdrop with salon image */}
          <div className="relative">
            <Image src={loc.image} alt={loc.name} width={1600} height={500} className="h-[280px] w-full object-cover" priority />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(180deg, ${loc.accent}55 0%, ${loc.accent}d0 100%)` }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
              <div className="text-[10px] uppercase tracking-[0.35em] opacity-90">Cenovnik</div>
              <div className="font-display text-[2.6rem] leading-tight mt-1">{loc.name}</div>
              <div className="font-display-italic text-[1.5rem] opacity-90">{loc.subtitle}</div>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 text-[12px] opacity-85">
                <span>{loc.address}</span>
                <span className="opacity-50">·</span>
                <span>{loc.phone}</span>
                <span className="opacity-50">·</span>
                <span>{loc.hours}</span>
              </div>
            </div>
          </div>

          {/* Cenovnik body, themed in the active location's color */}
          <div className="bg-white p-6 lg:p-10 space-y-6">
            {filtered.map((g) => (
              <div key={g.title}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="block h-4 w-1 rounded-full" style={{ background: loc.accent }} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: loc.accentText }}>
                    {g.title}
                  </span>
                </div>
                <div className="rounded-xl border border-black/8 overflow-hidden">
                  {g.services.map((s, i) => (
                    <div
                      key={s.name}
                      className={`flex items-baseline justify-between gap-4 px-5 py-4 ${
                        i < g.services.length - 1 ? "border-b border-black/[0.05]" : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-[1.05rem] text-ink">{s.name}</span>
                          {s.location === "both" && (
                            <span className="rounded-full bg-champagne/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-bronze">
                              U oba
                            </span>
                          )}
                        </div>
                        {s.description && <div className="text-[12px] text-mist mt-0.5">{s.description}</div>}
                      </div>
                      <span className="text-[14px] font-semibold whitespace-nowrap" style={{ color: loc.accent }}>
                        {s.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
