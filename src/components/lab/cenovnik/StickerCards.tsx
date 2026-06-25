"use client";

import { DEMO_GROUPS } from "./sampleData";
import { LOCATIONS } from "@/lib/locations";

const [nb, bw] = LOCATIONS;

function Sticker({ location }: { location: "nb" | "bw" | "both" }) {
  if (location === "both") {
    return (
      <div className="flex">
        <span
          className="rounded-l-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
          style={{ background: nb.accent }}
        >
          NB
        </span>
        <span
          className="rounded-r-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
          style={{ background: bw.accent }}
        >
          BW
        </span>
      </div>
    );
  }
  const c = location === "nb" ? nb : bw;
  return (
    <span
      className="rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
      style={{
        background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accent}aa 100%)`,
        boxShadow: `0 2px 8px ${c.accent}55`,
      }}
    >
      {c.key === "nb" ? "NB" : "BW"}
    </span>
  );
}

export function StickerCards() {
  const all = DEMO_GROUPS.flatMap((g) => g.services.map((s) => ({ ...s, group: g.title })));

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {all.map((s) => (
        <article
          key={s.name}
          className="relative rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(148,113,211,0.15)] hover:-translate-y-0.5 transition-all"
        >
          {/* Sticker — primary location signal */}
          <div className="absolute top-5 right-5">
            <Sticker location={s.location} />
          </div>

          <div className="text-[9px] uppercase tracking-[0.3em] text-mist-light mb-2">
            {s.group}
          </div>
          <h4 className="font-display text-[1.2rem] text-ink leading-tight pr-16 min-h-[3em]">
            {s.name}
          </h4>
          {s.description && (
            <p className="text-[12px] text-mist leading-relaxed mt-2 min-h-[3em]">{s.description}</p>
          )}
          <div className="mt-5 pt-5 border-t border-black/[0.06] flex items-center justify-between">
            <span className="price-shimmer text-[1.3rem] font-bold">{s.price}</span>
            <button className="text-[11px] uppercase tracking-[0.2em] text-lila hover:underline">
              Zakaži ›
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
