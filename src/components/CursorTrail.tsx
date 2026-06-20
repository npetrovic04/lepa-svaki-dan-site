"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// Lila stardust cursor trail — canvas-based for 60fps with many particles.
// Skipped on touch devices and when prefers-reduced-motion is set.
export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    function resize() {
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; hue: number };
    const particles: Particle[] = [];
    let lastX = 0;
    let lastY = 0;
    let lastSpawn = 0;

    function spawn(x: number, y: number, count: number) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.6;
        const max = 700 + Math.random() * 500;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2,
          life: 0,
          max,
          size: 1.5 + Math.random() * 2.5,
          hue: 270 + Math.random() * 25, // lila/violet
        });
      }
    }

    function onMove(e: PointerEvent) {
      const x = e.clientX;
      const y = e.clientY;
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);
      const now = performance.now();
      if (dist > 4 && now - lastSpawn > 12) {
        spawn(x, y, Math.min(3, Math.ceil(dist / 25)));
        lastSpawn = now;
      }
      lastX = x;
      lastY = y;
    }
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let lastFrame = performance.now();
    function tick(now: number) {
      const dt = now - lastFrame;
      lastFrame = now;
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life >= p.max) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        const t = p.life / p.max;
        const alpha = (1 - t) * 0.7;
        const size = p.size * (1 - t * 0.4);
        ctx!.fillStyle = `hsla(${p.hue}, 65%, 70%, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[55]"
    />
  );
}
