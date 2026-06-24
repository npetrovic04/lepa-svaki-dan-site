import Image from "next/image";
import { Location } from "@/lib/cenovnik";

type LogoMeta = {
  src: string;
  alt: string;
  /** Outer ring color */
  ring: string;
  /** Soft glow halo color */
  glow: string;
  /** Small bottom tag */
  tag: string;
};

const LOGOS: Record<"nb" | "bw", LogoMeta> = {
  nb: {
    src: "/logo-beauty.jpg",
    alt: "Beauty Concept — Novi Beograd",
    ring: "#3F6E5E",
    glow: "rgba(63,110,94,0.35)",
    tag: "NB",
  },
  bw: {
    src: "/logo-wellbeing-concept.png",
    alt: "Wellbeing Concept — Belgrade Waterfront",
    ring: "#5B6F94",
    glow: "rgba(91,111,148,0.35)",
    tag: "BW",
  },
};

export function LocationLogoBadge({
  location,
  size = 44,
  showTag = false,
}: {
  location: Location;
  /** Outer diameter of the badge in px */
  size?: number;
  /** Show a small NB/BW tag pill beside the logo */
  showTag?: boolean;
}) {
  const items =
    location === "both"
      ? [LOGOS.nb, LOGOS.bw]
      : location === "nb"
      ? [LOGOS.nb]
      : [LOGOS.bw];

  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      {items.map((logo) => (
        <span
          key={logo.src}
          title={logo.alt}
          className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white transition-transform duration-300 hover:scale-105"
          style={{
            width: size,
            height: size,
            boxShadow: `0 0 0 2.5px ${logo.ring}, 0 4px 14px ${logo.glow}`,
          }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={size}
            height={size}
            className="object-contain"
            style={{ padding: size * 0.12 }}
          />
        </span>
      ))}
      {showTag && location !== "both" && (
        <span
          className="text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{ color: items[0].ring }}
        >
          {items[0].tag}
        </span>
      )}
    </div>
  );
}
