import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CenovnikClient } from "@/components/cenovnik/CenovnikClient";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cenovnik usluga — Lepa Svaki Dan",
  description:
    "Kompletni cenovnik tretmana lica i tela, estetskih procedura, laserske epilacije i protokola. Dve lokacije: Novi Beograd i Belgrade Waterfront.",
};

export default function CenovnikPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────── */}
      <section className="bg-canvas pt-36 pb-16 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.42em] text-lila">
            Lepa Svaki Dan · {new Date().getFullYear()}
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-normal text-ink leading-[1.15]">
            Cenovnik{" "}
            <span className="font-display-italic text-lila">usluga</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-[15px] text-mist leading-relaxed">
            Dve lokacije — Novi Beograd i Belgrade Waterfront. Svaka usluga je
            označena bojom i pilom da uvek znate gde je dostupna.
          </p>

          {/* Phone CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 rounded-full bg-lila px-6 py-3 text-[13px] font-semibold text-onyx transition-all hover:bg-lila-glow hover:shadow-[0_6px_20px_rgba(148,113,211,0.3)]"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Zakaži termin
            </a>
            <div className="h-px w-8 bg-black/10" />
            <div className="text-[12px] text-mist leading-snug">
              <span className="block font-medium text-ink-soft">
                Novi Beograd
              </span>
              <a
                href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
                className="hover:text-lila transition-colors"
              >
                {brand.phonePrimary}
              </a>
            </div>
            <div className="text-[12px] text-mist leading-snug">
              <span className="block font-medium text-ink-soft">
                Belgrade Waterfront
              </span>
              <a
                href={`tel:${brand.phoneWaterfront.replace(/\s/g, "")}`}
                className="hover:text-lila transition-colors"
              >
                {brand.phoneWaterfront}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thin champagne divider ─────────── */}
      <div className="champagne-line h-px w-full opacity-40" />

      {/* ── Main cenovnik ──────────────────── */}
      <section className="bg-canvas px-4 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <CenovnikClient />
        </div>
      </section>

      {/* ── Footer strip ───────────────────── */}
      <div className="bg-onyx px-4 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-lila/70">
            Konsultacije besplatne
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-normal text-canvas leading-[1.3]">
            Niste sigurni koji{" "}
            <span className="font-display-italic text-lila">tretman?</span>
          </h2>
          <p className="mt-4 text-[13px] text-canvas/60 leading-relaxed">
            Pozovite nas ili zakažite besplatnu konsultaciju — naš tim će vam
            pomoći da odaberete pravi plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
              className="rounded-full bg-lila px-8 py-3.5 text-[13px] font-semibold text-onyx transition-all hover:bg-lila-glow hover:shadow-[0_6px_20px_rgba(148,113,211,0.35)]"
            >
              Zakaži konsultaciju ›
            </a>
            <a
              href="/"
              className="rounded-full border border-canvas/20 px-8 py-3.5 text-[13px] font-medium text-canvas/70 transition-all hover:border-canvas/40 hover:text-canvas"
            >
              ← Nazad na početnu
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
