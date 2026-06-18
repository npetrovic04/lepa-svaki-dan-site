"use client";

import { motion } from "motion/react";

export function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-[10%] -top-[15%] size-[520px] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(148,113,211,0.38) 0%, transparent 70%)" }}
        animate={{ x: [0, 50, -15, 0], y: [0, 35, 65, 0], scale: [1, 1.1, 0.94, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[5%] size-[460px] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(232,196,184,0.45) 0%, transparent 70%)" }}
        animate={{ x: [0, -35, 25, 0], y: [0, 45, -25, 0], scale: [1, 0.92, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[25%] size-[560px] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(197,180,227,0.4) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, -30, 0], y: [0, -35, 20, 0], scale: [1, 1.06, 0.95, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
