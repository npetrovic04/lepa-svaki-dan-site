"use client";

import { motion, MotionValue } from "motion/react";

export function WomanIllustration({
  leftArmRotate,
  rightArmRotate,
}: {
  leftArmRotate: MotionValue<number>;
  rightArmRotate: MotionValue<number>;
}) {
  return (
    <svg viewBox="0 0 400 560" className="h-full w-full" role="img" aria-label="Ilustracija žene">
      <ellipse cx="200" cy="540" rx="120" ry="14" fill="#9471D3" opacity="0.06" />

      {/* Left arm — bbox is x:[92,142] y:[230,435], shoulder (142,230) sits at the
          top-right corner of that box, so originX=1 (right edge) originY=0 (top edge) */}
      <motion.g style={{ rotate: leftArmRotate, originX: 1, originY: 0 }}>
        <path
          d="M142 230 C108 250 92 300 96 360 C98 392 112 412 132 420"
          fill="none"
          stroke="#3A3530"
          strokeWidth="26"
          strokeLinecap="round"
        />
        <circle cx="132" cy="420" r="15" fill="#E8C4B8" />
      </motion.g>

      {/* Right arm — bbox is x:[258,308] y:[230,435], shoulder (258,230) sits at the
          top-left corner of that box, so originX=0 (left edge) originY=0 (top edge) */}
      <motion.g style={{ rotate: rightArmRotate, originX: 0, originY: 0 }}>
        <path
          d="M258 230 C292 250 308 300 304 360 C302 392 288 412 268 420"
          fill="none"
          stroke="#3A3530"
          strokeWidth="26"
          strokeLinecap="round"
        />
        <circle cx="268" cy="420" r="15" fill="#E8C4B8" />
      </motion.g>

      {/* Torso */}
      <path
        d="M150 230 C150 290 145 360 155 460 C160 500 240 500 245 460 C255 360 250 290 250 230 C250 195 215 178 200 178 C185 178 150 195 150 230Z"
        fill="#F3E3DC"
      />

      {/* Neck */}
      <rect x="184" y="140" width="32" height="48" rx="14" fill="#E8C4B8" />

      {/* Head */}
      <ellipse cx="200" cy="105" rx="46" ry="52" fill="#E8C4B8" />

      {/* Hair */}
      <path
        d="M154 100 C150 60 170 30 200 30 C230 30 250 60 246 100 C246 70 230 50 200 50 C170 50 154 70 154 100Z"
        fill="#3A3530"
      />
      <path d="M154 95 C150 130 152 160 160 175 C156 150 156 120 158 98Z" fill="#3A3530" />
      <path d="M246 95 C250 130 248 160 240 175 C244 150 244 120 242 98Z" fill="#3A3530" />
    </svg>
  );
}
