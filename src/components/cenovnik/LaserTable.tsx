"use client";

import { laserGroups } from "@/lib/cenovnik";
import { motion } from "motion/react";

export function LaserTable({ activeFilter }: { activeFilter: "all" | "nb" | "bw" }) {
  return (
    <div className="space-y-8">
      {/* Info note */}
      <div className="rounded-2xl border border-dashed border-lila/40 bg-[#FBF8F4] px-5 py-4 text-[13px] text-ink-soft leading-relaxed">
        <strong className="text-ink">Laserska epilacija</strong> dostupna je na{" "}
        <strong className="text-[#264A3D]">obe lokacije</strong>, ali se cene razlikuju.
        Tretmani se rade u paketu od 6 (NB) ili 3–6 (BWF). Pre tretmana, nekoliko nedelja
        je potrebno samo brijati — ne čupati!
      </div>

      {laserGroups.map((group) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
        >
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mist">
            {group.title}
          </h3>

          <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 border-b border-black/[0.07] bg-canvas px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
              <span>Usluga</span>
              {(activeFilter === "all" || activeFilter === "nb") && (
                <span
                  className="text-right whitespace-nowrap"
                  style={{ color: "#264A3D" }}
                >
                  ● Novi Beograd
                </span>
              )}
              {(activeFilter === "all" || activeFilter === "bw") && (
                <span
                  className="text-right whitespace-nowrap"
                  style={{ color: "#37466A" }}
                >
                  ● Waterfront
                </span>
              )}
            </div>

            {/* Rows */}
            {group.services.map((svc, i) => {
              // Filter rows where both prices are "—" for selected location
              const showNB = activeFilter === "all" || activeFilter === "nb";
              const showBW = activeFilter === "all" || activeFilter === "bw";

              // Hide row if filtered location has "—"
              if (
                activeFilter === "nb" && svc.priceNB === "—"
              ) return null;
              if (
                activeFilter === "bw" && svc.priceBW === "—"
              ) return null;

              return (
                <div
                  key={i}
                  className={`grid gap-x-4 px-5 py-3 text-[13px] transition-colors hover:bg-black/[0.025] ${
                    i < group.services.length - 1
                      ? "border-b border-black/[0.05]"
                      : ""
                  } ${activeFilter === "all" ? "grid-cols-[1fr_auto_auto]" : "grid-cols-[1fr_auto]"}`}
                >
                  <span className={`text-ink ${svc.highlight ? "font-medium" : ""}`}>
                    {svc.name}
                  </span>
                  {showNB && (
                    <span
                      className={`text-right whitespace-nowrap font-medium ${
                        svc.priceNB === "—" ? "text-mist-light" : "text-ink"
                      }`}
                    >
                      {svc.priceNB}
                    </span>
                  )}
                  {showBW && (
                    <span
                      className={`text-right whitespace-nowrap font-medium ${
                        svc.priceBW === "—" ? "text-mist-light" : "text-ink"
                      }`}
                    >
                      {svc.priceBW}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
