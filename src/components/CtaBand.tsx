import Image from "next/image";
import { brand, images } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-onyx py-32 lg:py-40">
      <Image
        src={images.ctaBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/50 to-onyx/80" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
            <span className="h-px w-8 bg-lila/50" />
            Zakažite konsultaciju
            <span className="h-px w-8 bg-lila/50" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-balance text-[clamp(2.8rem,6.5vw,6rem)] font-normal text-white leading-[1.3]">
            Ostatak vašeg dana<br />
            počinje{" "}
            <span className="font-display-italic text-lila">ovde</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-md text-[15px] leading-[1.75] text-pearl/55 font-light">
            Vaš terapeut je spreman. Vaša soba čeka.
            Jedino što nedostaje — ste vi.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-lila px-9 py-4 text-[13px] font-semibold text-onyx transition-all hover:bg-lila-glow hover:shadow-[0_8px_30px_rgba(148,113,211,0.4)]"
            >
              {brand.phonePrimary}
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-pearl/20 px-9 py-4 text-[13px] font-medium text-pearl/80 transition-all hover:border-lila/60 hover:text-lila"
            >
              Piši na WhatsApp ›
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
