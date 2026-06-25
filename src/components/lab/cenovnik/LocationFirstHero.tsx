"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEMO_GROUPS } from "./sampleData";
import { LOCATIONS } from "@/lib/locations";

type Filter = "all" | "nb" | "bw";

export function LocationFirstHero() {
  const [filter, setFilter] = useState<Filter>("all");
  const activeLoc = filter === "nb" ? LOCATIONS[0] : filter === "bw" ? LOCATIONS[1] : null;

  return (
    <div>
      {/* Two big location cards — primary navigation */}
      <div className="grid gap-5 lg:grid-cols-3 mb-10">
        {/* "Sve" card */}
        <button
          onClick={() => setFilter("all")}
          className={`relative overflow-hidden rounded-2xl h-[160px] text-left p-6 transition-all ${
            filter === "all" ? "ring-4 ring-lila scale-[1.02]" : "ring-1 ring-black/8 hover:ring-lila/40"
          }`}
          style={{ background: "linear-gradient(135deg, #9471D3 0%, #DDB045 100%)" }}
        >
          <div className="relative z-10 text-white">
            <div className="text-[10px] uppercase tracking-[0.32em] opacity-90 mb-2">Filter</div>
            <div className="font-display text-[1.8rem] leading-tight">Sve lokacije</div>
            <div className="text-[12px] opacity-85 mt-1">Pogledaj kompletan cenovnik</div>
          </div>
        </button>

        {LOCATIONS.map((loc) => (
          <button
            key={loc.key}
            onClick={() => setFilter(loc.key)}
            className={`group relative overflow-hidden rounded-2xl h-[160px] text-left p-6 transition-all ${
              filter === loc.key ? "ring-4 scale-[1.02]" : "ring-1 ring-black/8 hover:ring-2"
            }`}
            style={
              filter === loc.key
                ? { ringColor: loc.accent } as React.CSSProperties
                : undefined
            }
          >
            <Image src={loc.image} alt={loc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="40vw" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${loc.accent}d0 0%, ${loc.accent}99 100%)` }} />
            <div className="relative z-10 text-white">
              <div className="text-[10px] uppercase tracking-[0.32em] opacity-90 mb-2">Lokacija</div>
              <div className="font-display text-[1.8rem] leading-tight">{loc.name}</div>
              <div className="font-display-italic text-[1.1rem] opacity-90">{loc.subtitle}</div>
              <div className="text-[11px] opacity-80 mt-2">{loc.address}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Filtered cenovnik */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {DEMO_GROUPS.map((g) => {
            const services = g.services.filter((s) => {
              if (filter === "all") return true;
              if (filter === "nb") return s.location === "nb" || s.location === "both";
              return s.location === "bw" || s.location === "both";
            });
            if (!services.length) return null;
            return (
              <div
                key={g.title}
                className="rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] overflow-hidden"
                style={
                  activeLoc
                    ? { boxShadow: `0 4px 24px ${activeLoc.accent}28, 0 0 0 1px ${activeLoc.accent}55` }
                    : undefined
                }
              >
                <div
                  className="px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={
                    activeLoc
                      ? { background: activeLoc.accentSoft, color: activeLoc.accentText }
                      : { background: "var(--color-canvas)", color: "var(--color-ink-soft)" }
                  }
                >
                  {g.title}
                </div>
                {services.map((s, i) => (
                  <div
                    key={s.name}
                    className={`flex items-baseline justify-between gap-4 px-6 py-4 ${
                      i < services.length - 1 ? "border-b border-black/[0.05]" : ""
                    }`}
                  >
                    <div>
                      <div className="font-display text-[1.05rem] text-ink">{s.name}</div>
                      {s.description && <div className="text-[12px] text-mist mt-0.5">{s.description}</div>}
                    </div>
                    <div className="text-[14px] font-semibold whitespace-nowrap" style={{ color: activeLoc?.accent ?? "var(--color-champagne)" }}>
                      {s.price}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
