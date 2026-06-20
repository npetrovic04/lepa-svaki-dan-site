"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { LocationLegend } from "./LocationLegend";
import { PricingPanel } from "./PricingPanel";

type FilterType = "all" | "nb" | "bw";

const TABS = [
  { id: "lice", label: "Tretmani lica" },
  { id: "telo", label: "Tretmani tela" },
  { id: "estetske", label: "Estetske procedure" },
  { id: "protokoli", label: "Naši protokoli" },
  { id: "laserska", label: "Laserska epilacija" },
];

const FILTERS: { id: FilterType; label: string }[] = [
  { id: "all", label: "Sve" },
  { id: "nb", label: "Novi Beograd" },
  { id: "bw", label: "Belgrade Waterfront" },
];

export function CenovnikClient() {
  const [activeTab, setActiveTab] = useState("lice");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  return (
    <div>
      {/* ── Legend ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.1, duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <LocationLegend />
      </motion.div>

      {/* ── Sticky header: tabs + filter ────── */}
      <div className="sticky top-[72px] z-30 bg-canvas/95 backdrop-blur-md pb-4 pt-2">
        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.1, duration: 0.6, delay: 0.4 }}
          className="flex overflow-x-auto gap-1 rounded-2xl bg-white/70 p-1 shadow-[0_1px_8px_rgba(0,0,0,0.06)] border border-black/[0.06] no-scrollbar"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-shrink-0 rounded-xl px-4 py-2.5 text-[12.5px] font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-onyx shadow-sm"
                  : "text-mist hover:text-ink-soft"
              }`}
            >
              {activeTab === tab.id && (
                <>
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl bg-white shadow-[0_2px_12px_rgba(148,113,211,0.18)] ring-1 ring-lila/30"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                  <motion.span
                    layoutId="tab-glow"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "radial-gradient(60% 100% at 50% 100%, rgba(148,113,211,0.18) 0%, transparent 70%)" }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                </>
              )}
              <span className="relative flex items-center gap-1.5">
                {activeTab === tab.id && (
                  <motion.span
                    className="size-1.5 rounded-full bg-lila"
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {tab.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Location filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-3 flex items-center gap-2"
        >
          <span className="text-[11px] font-medium text-mist uppercase tracking-[0.2em] mr-1">
            Lokacija:
          </span>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11.5px] font-medium transition-all duration-200 border ${
                activeFilter === f.id
                  ? f.id === "nb"
                    ? "border-transparent text-[#264A3D] shadow-sm"
                    : f.id === "bw"
                    ? "border-transparent text-[#37466A] shadow-sm"
                    : "bg-ink text-canvas border-transparent shadow-sm"
                  : "border-black/[0.08] text-mist bg-white hover:border-black/20 hover:text-ink-soft"
              }`}
              style={
                activeFilter === f.id
                  ? f.id === "nb"
                    ? { background: "#E1ECE6" }
                    : f.id === "bw"
                    ? { background: "#E2E8F1" }
                    : {}
                  : {}
              }
            >
              {f.id === "nb" && (
                <span
                  className="block size-1.5 rounded-full"
                  style={{ background: "#3F6E5E" }}
                />
              )}
              {f.id === "bw" && (
                <span
                  className="block size-1.5 rounded-full"
                  style={{ background: "#5B6F94" }}
                />
              )}
              {f.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Content panel ───────────────────── */}
      <div className="mt-6">
        <PricingPanel activeTab={activeTab} activeFilter={activeFilter} />
      </div>

      {/* ── Footer note ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 space-y-3 border-t border-black/[0.07] pt-8 text-[12px] text-mist leading-relaxed"
      >
        <p>
          Cene su iskazane u evrima isključivo informativnog karaktera —{" "}
          <strong className="text-ink-soft">sva plaćanja su u dinarima</strong>. Pakete
          je moguće platiti na do 12 rata Banka Intesa karticama ili dvokratno.
        </p>
        <p>
          Cenovnik je važeći od <strong className="text-ink-soft">15.03.2026.</strong>{" "}
          · Izmene cena zadržavamo pravo bez prethodne najave.
        </p>
      </motion.div>
    </div>
  );
}
