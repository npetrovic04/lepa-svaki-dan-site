import { Service } from "@/lib/cenovnik";
import { LocationLogoBadge } from "./LocationLogoBadge";

const BAR_COLOR: Record<string, string> = {
  nb: "#3F6E5E",
  bw: "#5B6F94",
  both: "linear-gradient(180deg, #3F6E5E 50%, #5B6F94 50%)",
};

export function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="group grid grid-cols-[4px_1fr_auto] items-start gap-x-5 px-6 py-6 transition-colors hover:bg-black/[0.02]">
      {/* Left color bar — fixed 4px column */}
      <span
        className="mt-1 block w-1 self-stretch rounded-full min-h-[28px]"
        style={{ background: BAR_COLOR[service.location] }}
      />

      {/* Content — fills remaining space, never pushes price */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-display text-[1.15rem] font-normal text-ink leading-snug">
            {service.name}
          </span>
          <LocationLogoBadge location={service.location} />
          {service.highlight && (
            <span className="text-[10px] text-lila font-semibold">
              💜 akcija
            </span>
          )}
        </div>
        {service.description && (
          <p className="mt-1.5 text-[13px] text-mist leading-relaxed">
            {service.description}
          </p>
        )}
        {service.note && (
          <p className="mt-0.5 text-[11px] text-mist italic">{service.note}</p>
        )}
      </div>

      {/* Price — auto-width, never wraps, always right-aligned */}
      <div className="pl-2 text-right">
        <span className="text-[15px] font-semibold text-ink whitespace-nowrap">
          {service.price}
        </span>
      </div>
    </div>
  );
}
