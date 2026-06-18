import Image from "next/image";
import { Location } from "@/lib/cenovnik";

const LOGOS = {
  nb: { src: "/logo-beauty.jpg", alt: "Beauty Concept — Novi Beograd" },
  bw: { src: "/logo-wellbeing-concept.png", alt: "Wellbeing Concept — Belgrade Waterfront" },
};

export function LocationLogoBadge({ location }: { location: Location }) {
  const items = location === "both" ? [LOGOS.nb, LOGOS.bw] : location === "nb" ? [LOGOS.nb] : [LOGOS.bw];

  return (
    <div className="flex items-center gap-1.5 flex-shrink-0">
      {items.map((logo) => (
        <span
          key={logo.src}
          className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-black/8 bg-white"
        >
          <Image src={logo.src} alt={logo.alt} width={28} height={28} className="object-contain" />
        </span>
      ))}
    </div>
  );
}
