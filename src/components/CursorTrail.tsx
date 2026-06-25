"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// Premium gold cursor: warm champagne droplet + sparkle trail + click ripple.
// Canvas-based for 60fps. Skipped on touch devices and reduced-motion.
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
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      life: number; max: number; size: number;
      hueShift: number; // small variation around gold
    };
    type Ripple = {
      x: number; y: number; life: number; max: number; maxR: number;
    };

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];

    // Magnetic droplet — follows pointer with spring lag
    const cursor = { x: -100, y: -100, tx: -100, ty: -100, active: false };

    let lastSpawn = 0;
    let lastX = 0;
    let lastY = 0;

    function spawnSparkle(x: number, y: number, count: number) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.7;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.15,
          life: 0,
          max: 600 + Math.random() * 600,
          size: 1.2 + Math.random() * 2.2,
          hueShift: (Math.random() - 0.5) * 12,
        });
      }
    }

    function onMove(e: PointerEvent) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.tx = x;
      cursor.ty = y;
      cursor.active = true;

      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);
      const now = performance.now();
      if (dist > 6 && now - lastSpawn > 32) {
        spawnSparkle(x, y, 1);
        lastSpawn = now;
      }
      lastX = x;
      lastY = y;
    }

    function onLeave() {
      cursor.active = false;
    }

    function onDown(e: PointerEvent) {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        life: 0,
        max: 700,
        maxR: 70,
      });
      spawnSparkle(e.clientX, e.clientY, 10);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);

    let raf = 0;
    let lastFrame = performance.now();

    function tick(now: number) {
      const dt = Math.min(40, now - lastFrame);
      lastFrame = now;
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Spring-lag cursor toward target
      cursor.x += (cursor.tx - cursor.x) * 0.22;
      cursor.y += (cursor.ty - cursor.y) * 0.22;

      // Sparkle particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life >= p.max) { particles.splice(i, 1); continue; }
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        p.vy += 0.005 * (dt / 16); // gentle settling
        const t = p.life / p.max;
        const alpha = (1 - t) * 0.85;
        const size = p.size * (1 - t * 0.5);
        // Champagne gold — hsl(42, 75%, 60%) center
        ctx!.fillStyle = `hsla(${42 + p.hueShift}, 78%, 62%, ${alpha})`;
        ctx!.shadowColor = "rgba(221,176,69,0.55)";
        ctx!.shadowBlur = 8;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;

      // Click ripples — concentric champagne rings
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.life += dt;
        if (r.life >= r.max) { ripples.splice(i, 1); continue; }
        const t = r.life / r.max;
        const radius = r.maxR * t;
        const alpha = (1 - t) * 0.55;
        ctx!.strokeStyle = `rgba(221,176,69,${alpha})`;
        ctx!.lineWidth = 2 * (1 - t * 0.6);
        ctx!.beginPath();
        ctx!.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx!.stroke();
        // Inner softer ring
        ctx!.strokeStyle = `rgba(255,236,180,${alpha * 0.7})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(r.x, r.y, radius * 0.66, 0, Math.PI * 2);
        ctx!.stroke();
      }

      // The droplet itself — soft golden orb
      if (cursor.active) {
        const grad = ctx!.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, 14);
        grad.addColorStop(0, "rgba(255,236,180,0.9)");
        grad.addColorStop(0.4, "rgba(221,176,69,0.45)");
        grad.addColorStop(1, "rgba(221,176,69,0)");
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(cursor.x, cursor.y, 14, 0, Math.PI * 2);
        ctx!.fill();

        // Tiny solid core
        ctx!.fillStyle = "rgba(255,245,210,0.9)";
        ctx!.beginPath();
        ctx!.arc(cursor.x, cursor.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
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
