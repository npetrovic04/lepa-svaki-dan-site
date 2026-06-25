"use client";

import { DEMO_GROUPS } from "./sampleData";
import { LOCATIONS } from "@/lib/locations";

const [nb, bw] = LOCATIONS;

function Cell({ available, price, accent }: { available: boolean; price: string; accent: string }) {
  if (!available) {
    return <span className="text-mist-light/70">—</span>;
  }
  return (
    <span className="inline-flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M5 12l5 5L20 7" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-semibold" style={{ color: accent }}>{price}</span>
    </span>
  );
}

export function DualColumnTable() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="grid grid-cols-[1fr_180px_180px] items-center gap-4 px-6 py-5 bg-canvas border-b border-black/8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mist">Usluga</div>
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="block size-3 rounded-full" style={{ background: nb.accent }} />
          <span className="text-[11px] font-semibold" style={{ color: nb.accentText }}>{nb.subtitle}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="block size-3 rounded-full" style={{ background: bw.accent }} />
          <span className="text-[11px] font-semibold" style={{ color: bw.accentText }}>{bw.subtitle}</span>
        </div>
      </div>

      {DEMO_GROUPS.map((g) => (
        <div key={g.title}>
          <div className="px-6 py-3 bg-canvas/60 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
            {g.title}
          </div>
          {g.services.map((s, i) => (
            <div
              key={s.name}
              className={`grid grid-cols-[1fr_180px_180px] items-center gap-4 px-6 py-4 hover:bg-lila/[0.04] transition-colors ${
                i < g.services.length - 1 ? "border-b border-black/[0.05]" : "border-b border-black/8"
              }`}
            >
              <div>
                <div className="font-display text-[1.05rem] text-ink">{s.name}</div>
                {s.description && <div className="text-[12px] text-mist mt-0.5">{s.description}</div>}
              </div>
              <div className="text-center">
                <Cell
                  available={s.location === "nb" || s.location === "both"}
                  price={s.price}
                  accent={nb.accent}
                />
              </div>
              <div className="text-center">
                <Cell
                  available={s.location === "bw" || s.location === "both"}
                  price={s.price}
                  accent={bw.accent}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
