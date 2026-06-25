"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { DEMO_GROUPS } from "./sampleData";
import { LOCATIONS } from "@/lib/locations";

/**
 * Mini Belgrade map sits sticky on the right while the pricing list scrolls
 * on the left. Hovering a group pulses the relevant pin on the map.
 */

const PINS = { nb: { x: 28, y: 56 }, bw: { x: 48, y: 64 } } as const;

function locationsForGroup(group: typeof DEMO_GROUPS[number]) {
  const set = new Set<"nb" | "bw">();
  group.services.forEach((s) => {
    if (s.location === "nb" || s.location === "both") set.add("nb");
    if (s.location === "bw" || s.location === "both") set.add("bw");
  });
  return set;
}

export function MapAnchored() {
  const [active, setActive] = useState<string | null>(null);
  const activeGroup = DEMO_GROUPS.find((g) => g.title === active);
  const activePins = activeGroup ? locationsForGroup(activeGroup) : new Set<"nb" | "bw">(["nb", "bw"]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      {/* Pricing list — scrollable */}
      <div className="space-y-5">
        {DEMO_GROUPS.map((g) => {
          const pins = locationsForGroup(g);
          return (
            <div
              key={g.title}
              onMouseEnter={() => setActive(g.title)}
              onMouseLeave={() => setActive(null)}
              className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_40px_rgba(148,113,211,0.15)]"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h4 className="font-display text-[1.4rem] text-ink leading-tight">{g.title}</h4>
                <div className="flex items-center gap-1.5">
                  {pins.has("nb") && (
                    <span className="block size-2.5 rounded-full" style={{ background: LOCATIONS[0].accent }} />
                  )}
                  {pins.has("bw") && (
                    <span className="block size-2.5 rounded-full" style={{ background: LOCATIONS[1].accent }} />
                  )}
                </div>
              </div>
              <div className="space-y-3">
                {g.services.map((s) => (
                  <div key={s.name} className="flex items-baseline justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-display text-[1rem] text-ink">{s.name}</div>
                      {s.description && <div className="text-[12px] text-mist mt-0.5">{s.description}</div>}
                    </div>
                    <span className="text-[13px] font-semibold text-champagne whitespace-nowrap">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky map */}
      <div className="relative">
        <div className="sticky top-24 rounded-2xl bg-canvas p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="text-[10px] uppercase tracking-[0.28em] text-mist mb-3">Gde se radi</div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-white">
            <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full">
              <path d="M5,18 C18,12 40,8 60,14 C82,20 96,36 95,52 C92,68 75,72 55,68 C35,64 12,60 5,46 C-2,32 0,24 5,18 Z" fill="#F0E7DD" />
              <path d="M0,40 Q15,42 25,50 Q35,58 50,56 Q70,54 100,62" stroke="#B8C9DA" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85" />
              <path d="M15,8 Q22,24 28,42 Q34,52 50,56" stroke="#B8C9DA" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.75" />
            </svg>
            {(["nb", "bw"] as const).map((k) => {
              const loc = LOCATIONS.find((l) => l.key === k)!;
              const active = activePins.has(k);
              return (
                <div
                  key={k}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${PINS[k].x}%`, top: `${PINS[k].y}%` }}
                >
                  {active && (
                    <motion.span
                      className="absolute inset-0 -m-2 rounded-full"
                      style={{ border: `2px solid ${loc.accent}` }}
                      animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity }}
                    />
                  )}
                  <span
                    className="relative block size-4 rounded-full ring-2 ring-white transition-all"
                    style={{
                      background: loc.accent,
                      opacity: active ? 1 : 0.3,
                      transform: active ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4 space-y-2 text-[12px]">
            {LOCATIONS.map((loc) => (
              <div key={loc.key} className="flex items-center gap-2">
                <span className="block size-2.5 rounded-full" style={{ background: loc.accent }} />
                <span className="font-semibold" style={{ color: loc.accentText }}>{loc.subtitle}</span>
                <span className="text-mist text-[11px]">· {loc.address}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
