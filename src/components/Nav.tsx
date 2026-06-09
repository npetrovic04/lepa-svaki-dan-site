"use client";

import { useEffect, useState } from "react";
import { navLinks, brand } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-2xl px-6 py-3.5 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "bg-white/80 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-display text-[1.5rem] font-semibold text-ink leading-none">
          <span className="font-display-italic text-champagne">lepa</span>{" "}
          <span className="font-medium">svaki dan</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-[13px] font-medium text-ink-soft md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-champagne transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA pill */}
        <a
          href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[12px] font-medium text-white transition-all hover:bg-ink-soft md:inline-flex"
        >
          <span className="size-1.5 rounded-full bg-champagne" />
          Zakaži termin
        </a>

        {/* Mobile */}
        <a
          href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
          className="rounded-full bg-ink px-4 py-2 text-[11px] font-medium text-white md:hidden"
        >
          Pozovi
        </a>
      </div>
    </header>
  );
}
