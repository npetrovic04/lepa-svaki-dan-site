"use client";

import { DEMO_GROUPS } from "./sampleData";
import { LOCATIONS } from "@/lib/locations";

const [nb, bw] = LOCATIONS;

function StripBar({ location }: { location: "nb" | "bw" | "both" }) {
  if (location === "both") {
    return (
      <div className="flex h-1.5 w-full overflow-hidden rounded-full">
        <span className="flex-1" style={{ background: nb.accent }} />
        <span className="flex-1" style={{ background: bw.accent }} />
      </div>
    );
  }
  const c = location === "nb" ? nb : bw;
  return <span className="block h-1.5 w-full rounded-full" style={{ background: c.accent }} />;
}

function LocationLine({ location }: { location: "nb" | "bw" | "both" }) {
  if (location === "both") {
    return (
      <span className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">
        <span style={{ color: nb.accent }}>{nb.subtitle}</span>
        {" · "}
        <span style={{ color: bw.accent }}>{bw.subtitle}</span>
      </span>
    );
  }
  const c = location === "nb" ? nb : bw;
  return (
    <span className="text-[10px] uppercase tracking-[0.22em]" style={{ color: c.accent }}>
      {c.subtitle}
    </span>
  );
}

export function ColorStripCards() {
  const all = DEMO_GROUPS.flatMap((g) => g.services.map((s) => ({ ...s, group: g.title })));

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {all.map((s) => (
        <article
          key={s.name}
          className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(148,113,211,0.18)] transition-shadow"
        >
          <div className="text-[9px] uppercase tracking-[0.3em] text-mist-light mb-1">
            {s.group}
          </div>
          <div className="font-display text-[1.2rem] text-ink leading-tight min-h-[2.6em]">
            {s.name}
          </div>
          {s.description && (
            <p className="text-[12px] text-mist leading-relaxed mt-2 min-h-[3em]">{s.description}</p>
          )}
          <div className="mt-4 flex items-baseline justify-between">
            <span className="price-shimmer text-[1.2rem] font-bold">{s.price}</span>
            <LocationLine location={s.location} />
          </div>

          {/* Color strip — primary location signal */}
          <div className="mt-4">
            <StripBar location={s.location} />
          </div>
        </article>
      ))}
    </div>
  );
}
