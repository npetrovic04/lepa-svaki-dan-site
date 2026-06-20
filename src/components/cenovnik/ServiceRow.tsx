import { Service } from "@/lib/cenovnik";
import { LocationLogoBadge } from "./LocationLogoBadge";

const BAR_COLOR: Record<string, string> = {
  nb: "#3F6E5E",
  bw: "#5B6F94",
  both: "linear-gradient(180deg, #3F6E5E 50%, #5B6F94 50%)",
};

export function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="group relative grid grid-cols-[4px_1fr_auto] items-start gap-x-5 px-6 py-6 transition-colors hover:bg-lila/[0.04]">
      {/* Left color bar — grows on hover */}
      <span
        className="mt-1 block w-1 self-stretch rounded-full min-h-[28px] transition-all duration-300 group-hover:w-[6px] group-hover:shadow-[0_0_12px_rgba(148,113,211,0.4)]"
        style={{ background: BAR_COLOR[service.location] }}
      />

      {/* Content */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-display text-[1.15rem] font-normal text-ink leading-snug transition-colors duration-300 group-hover:text-lila">
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

      {/* Price — gold shimmer sweep on row hover */}
      <div className="pl-2 text-right">
        <span
          className="price-shimmer inline-block text-[15px] font-semibold whitespace-nowrap"
        >
          {service.price}
        </span>
      </div>
    </div>
  );
}
