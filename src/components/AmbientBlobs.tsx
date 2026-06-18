"use client";

import { motion } from "motion/react";

export function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="sticky top-0 h-screen w-full">
        <motion.div
          className="absolute -left-[5%] -top-[5%] size-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(148,113,211,0.55) 0%, rgba(148,113,211,0.15) 45%, transparent 72%)", filter: "blur(30px)" }}
          animate={{ x: [0, 60, -20, 0], y: [0, 40, 70, 0], scale: [1, 1.12, 0.92, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-8%] top-[12%] size-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,196,184,0.6) 0%, rgba(232,196,184,0.2) 45%, transparent 72%)", filter: "blur(30px)" }}
          animate={{ x: [0, -40, 30, 0], y: [0, 50, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[-8%] left-[18%] size-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(197,180,227,0.55) 0%, rgba(197,180,227,0.18) 45%, transparent 72%)", filter: "blur(30px)" }}
          animate={{ x: [0, 35, -35, 0], y: [0, -40, 25, 0], scale: [1, 1.08, 0.94, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[8%] right-[10%] size-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(148,113,211,0.45) 0%, rgba(148,113,211,0.12) 45%, transparent 72%)", filter: "blur(30px)" }}
          animate={{ x: [0, -30, 25, 0], y: [0, 30, -25, 0], scale: [1, 1.06, 0.96, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </div>
  );
}
