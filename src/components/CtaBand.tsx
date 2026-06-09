import Image from "next/image";
import { brand, images } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section className="px-3 py-3 lg:px-4">
      <div className="section-card relative isolate overflow-hidden bg-onyx mx-auto max-w-[1400px]">
        <Image
          src={images.ctaBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/85 via-onyx/70 to-onyx" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_50%_40%,rgba(198,167,114,0.1),transparent_70%)]" />

        <div className="relative px-8 py-20 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
                <span className="h-px w-6 bg-champagne/50" />
                Zakažite konsultaciju
                <span className="h-px w-6 bg-champagne/50" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-balance text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[1.05] text-white">
                Vaša koža zaslužuje{" "}
                <span className="font-display-italic text-champagne">plan</span>,
                ne improvizaciju.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mx-auto mt-7 max-w-md text-[15px] leading-[1.75] text-pearl/55 font-light">
                30 minuta razgovora sa dr Tamarom ili glavnim terapeutom — bez
                obaveze. Izlazite sa jasnim planom i procenom investicije.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${brand.phonePrimary.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-champagne px-8 py-4 text-[13px] font-semibold text-onyx transition-all hover:bg-champagne-glow hover:shadow-[0_8px_30px_rgba(198,167,114,0.3)]"
                >
                  {brand.phonePrimary}
                </a>
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-pearl/20 px-8 py-4 text-[13px] font-medium text-pearl transition-colors hover:border-champagne/60 hover:text-champagne"
                >
                  Piši na WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
