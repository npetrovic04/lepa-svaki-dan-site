"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { LOCATIONS } from "@/lib/locations";

/**
 * Diagonal split that follows the cursor. Left = NB Beauty Concept,
 * right = BW Wellbeing Concept. Side under cursor grows; other recedes.
 */
export function SplitScreen() {
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);

  function onMove(e: React.PointerEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    setPct(Math.max(20, Math.min(80, x)));
  }

  const [nb, bw] = LOCATIONS;

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => setPct(50)}
      className="relative h-[560px] w-full overflow-hidden rounded-3xl cursor-pointer"
    >
      {/* NB layer */}
      <div className="absolute inset-0">
        <Image src={nb.image} alt={nb.name} fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${nb.accent}cc 0%, ${nb.accent}66 100%)` }} />
      </div>

      {/* BW layer, clipped to right side following cursor */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: `polygon(${pct + 8}% 0, 100% 0, 100% 100%, ${pct - 8}% 100%)` }}
        transition={{ type: "spring", bounce: 0.1, duration: 0.45 }}
      >
        <Image src={bw.image} alt={bw.name} fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${bw.accent}66 0%, ${bw.accent}cc 100%)` }} />
      </motion.div>

      {/* Diagonal seam */}
      <motion.div
        className="absolute inset-y-0 z-10 w-[2px] origin-center"
        style={{
          left: `${pct}%`,
          transform: "translateX(-50%) skewX(-8deg)",
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.85), transparent)",
        }}
      />

      {/* NB caption */}
      <div className="absolute bottom-10 left-10 z-20 text-white">
        <div className="text-[10px] uppercase tracking-[0.35em] opacity-80">Lokacija 1</div>
        <div className="font-display text-[2.2rem] leading-tight mt-1">{nb.name}</div>
        <div className="font-display-italic text-[1.3rem] opacity-90">{nb.subtitle}</div>
        <div className="text-[12px] mt-3 opacity-90">{nb.address}</div>
      </div>

      {/* BW caption */}
      <div className="absolute bottom-10 right-10 z-20 text-right text-white">
        <div className="text-[10px] uppercase tracking-[0.35em] opacity-80">Lokacija 2</div>
        <div className="font-display text-[2.2rem] leading-tight mt-1">{bw.name}</div>
        <div className="font-display-italic text-[1.3rem] opacity-90">{bw.subtitle}</div>
        <div className="text-[12px] mt-3 opacity-90">{bw.address}</div>
      </div>

      {/* Hint */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black/35 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white">
        Pomeri miš levo / desno
      </div>
    </div>
  );
}
