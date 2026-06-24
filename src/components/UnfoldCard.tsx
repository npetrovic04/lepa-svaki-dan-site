"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

/**
 * 3D unfold reveal — card flips open like a book / unfolding ribbon
 * when scrolled into view. Y-axis rotation around the left edge,
 * with a touch of perspective and depth shadow.
 */
export function UnfoldCard({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: 1400 }} className={className}>
      <motion.div
        style={{
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        initial={{ rotateY: -82, opacity: 0, x: -40 }}
        whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 1.05,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
