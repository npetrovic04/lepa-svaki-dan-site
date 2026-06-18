"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { brand } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.8, delay: 0.05 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 lg:px-8"
    >
      <div
        className={`relative flex w-full max-w-7xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
            : "bg-white/90 backdrop-blur-md shadow-[0_1px_10px_rgba(0,0,0,0.05)]"
        }`}
      >
        {/* Left: nav links */}
        <nav className="hidden items-center gap-7 text-[13px] font-medium text-ink-soft lg:flex">
          <a href="/#tretmani" className="group relative py-1 hover:text-lila transition-colors duration-200">
            Tretmani
            <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-lila transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="/#filozofija" className="group relative py-1 hover:text-lila transition-colors duration-200">
            O nama
            <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-lila transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="/#koncepti" className="group relative py-1 hover:text-lila transition-colors duration-200">
            Lokacije
            <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-lila transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="/cenovnik" className="group relative py-1 hover:text-lila transition-colors duration-200">
            Cenovnik
            <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-lila transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </nav>

        {/* Center: logo — absolute so it's perfectly centered */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Lepa Svaki Dan — Beauty & Wellbeing Concept"
            width={350}
            height={225}
            className="h-[44px] w-auto object-contain"
            priority
          />
        </a>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-3 ml-auto lg:ml-0">
          <a
            href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-[12px] font-medium text-ink-soft hover:text-lila transition-colors lg:flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-mist">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {brand.phonePrimary}
          </a>
          <a
            href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
            className="rounded-full bg-lila px-5 py-2.5 text-[12px] font-semibold text-onyx transition-all hover:bg-lila-glow hover:shadow-[0_4px_16px_rgba(148,113,211,0.35)]"
          >
            Zakaži <span className="hidden sm:inline">termin</span> ›
          </a>
        </div>

        {/* Mobile hamburger placeholder */}
        <button className="ml-3 flex flex-col gap-1.5 p-1 lg:hidden" aria-label="Menu">
          <span className="block h-0.5 w-5 bg-ink rounded" />
          <span className="block h-0.5 w-5 bg-ink rounded" />
          <span className="block h-0.5 w-3.5 bg-ink rounded" />
        </button>
      </div>
    </motion.header>
  );
}
