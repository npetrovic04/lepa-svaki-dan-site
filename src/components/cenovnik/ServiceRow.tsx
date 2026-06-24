import { Service } from "@/lib/cenovnik";
import { LocationLogoBadge } from "./LocationLogoBadge";

export function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 px-6 py-5 transition-colors hover:bg-lila/[0.04]">
      {/* Location badge — primary visual anchor */}
      <LocationLogoBadge location={service.location} />

      {/* Content */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="font-display text-[1.15rem] font-normal text-ink leading-snug transition-colors duration-300 group-hover:text-lila">
            {service.name}
          </span>
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
