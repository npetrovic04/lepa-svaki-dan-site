import { Service } from "@/lib/cenovnik";
import { LocationLogoBadge } from "./LocationLogoBadge";
import { resolveLocation } from "@/lib/locationMix";

export function ServiceRow({ service }: { service: Service }) {
  const effectiveLocation = resolveLocation(service);

  return (
    <div className="group relative grid grid-cols-[1fr_auto] items-start gap-x-6 px-6 py-5 transition-colors hover:bg-lila/[0.04]">
      {/* Content — name first, badge & description below */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
          <span className="font-display text-[1.15rem] font-normal text-ink leading-snug transition-colors duration-300 group-hover:text-lila">
            {service.name}
          </span>
          {service.highlight && (
            <span className="text-[10px] text-lila font-semibold">
              💜 akcija
            </span>
          )}
        </div>

        {/* Location badge ROW — sits under the name as requested */}
        <div className="mt-2">
          <LocationLogoBadge location={effectiveLocation} size={32} showTag />
        </div>

        {service.description && (
          <p className="mt-2.5 text-[13px] text-mist leading-relaxed">
            {service.description}
          </p>
        )}
        {service.note && (
          <p className="mt-0.5 text-[11px] text-mist italic">{service.note}</p>
        )}
      </div>

      {/* Price — gold shimmer sweep on row hover */}
      <div className="pl-2 text-right pt-0.5">
        <span className="price-shimmer inline-block text-[15px] font-semibold whitespace-nowrap">
          {service.price}
        </span>
      </div>
    </div>
  );
}
