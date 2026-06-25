"use client";

import { DEMO_GROUPS } from "./sampleData";

/**
 * Classic luxury spa menu — restaurant-style dot leaders between
 * service name and price, ornament dividers between groups,
 * serif typography, generous breathing room.
 */
export function SpaMenu() {
  return (
    <div className="mx-auto max-w-3xl bg-white px-8 py-14 lg:px-14 lg:py-20 rounded-3xl shadow-[0_8px_50px_rgba(0,0,0,0.08)]">
      {/* Ornament header */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="h-px w-12 bg-champagne" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-champagne">
            <path d="M12 2c2 4 4 6 8 6-4 0-6 2-8 6-2-4-4-6-8-6 4 0 6-2 8-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="h-px w-12 bg-champagne" />
        </div>
        <div className="font-display-italic text-[1.6rem] text-mist">Meni rituala</div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-mist-light mt-2">Lepa svaki dan</div>
      </div>

      {DEMO_GROUPS.map((g, gi) => (
        <div key={g.title} className={gi > 0 ? "mt-12" : ""}>
          {/* Group title with ornament */}
          <div className="text-center mb-7">
            <div className="font-display text-[1.6rem] text-ink leading-tight">
              {g.title}
            </div>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-champagne/60" />
              <span className="size-1 rounded-full bg-champagne" />
              <span className="h-px w-6 bg-champagne/60" />
            </div>
          </div>

          {/* Service rows with dot leaders */}
          <div className="space-y-5">
            {g.services.map((s) => (
              <div key={s.name} className="flex items-baseline gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-display text-[1.15rem] text-ink leading-snug">{s.name}</div>
                  {s.description && (
                    <div className="font-display-italic text-[13px] text-mist mt-0.5">{s.description}</div>
                  )}
                </div>
                <span
                  className="flex-shrink-0 min-w-[40px] flex-grow self-baseline mb-1"
                  style={{
                    borderBottom: "1.5px dotted #C9B68B",
                    minHeight: "2px",
                  }}
                />
                <span className="font-display text-[1.15rem] text-bronze leading-none whitespace-nowrap">
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Ornament footer */}
      <div className="mt-14 flex items-center justify-center gap-4">
        <span className="h-px w-20 bg-champagne/60" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-champagne">finis</span>
        <span className="h-px w-20 bg-champagne/60" />
      </div>
    </div>
  );
}
