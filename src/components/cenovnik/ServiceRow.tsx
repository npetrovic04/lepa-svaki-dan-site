import { Service, Location } from "@/lib/cenovnik";
import { resolveLocation } from "@/lib/locationMix";

function LocationPill({ kind }: { kind: "nb" | "bw" }) {
  if (kind === "nb") {
    return (
      <span
        className="inline-flex items-center rounded-full px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_1px_4px_rgba(203,157,57,0.35)] whitespace-nowrap"
        style={{ background: "linear-gradient(135deg, #DDB045 0%, #CB9D39 60%, #B58724 100%)" }}
        title="Beauty Concept · Novi Beograd"
      >
        Novi Beograd
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center rounded-full px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_1px_4px_rgba(148,113,211,0.35)] whitespace-nowrap"
      style={{ background: "linear-gradient(135deg, #C5B4E3 0%, #9471D3 60%, #7757B8 100%)" }}
      title="Wellbeing Concept · Beograd na vodi"
    >
      Beograd na vodi
    </span>
  );
}

function pillsFor(loc: Location) {
  if (loc === "both") {
    return (
      <>
        <LocationPill kind="nb" />
        <LocationPill kind="bw" />
      </>
    );
  }
  return <LocationPill kind={loc} />;
}

export function ServiceRow({ service }: { service: Service }) {
  const effectiveLocation = resolveLocation(service);

  return (
    <div className="group relative grid grid-cols-[1fr_auto] items-baseline gap-x-6 px-6 py-5 transition-colors hover:bg-lila/[0.04]">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
          <span className="font-display text-[1.15rem] font-normal text-ink leading-snug transition-colors duration-300 group-hover:text-lila">
            {service.name}
          </span>
          {pillsFor(effectiveLocation)}
          {service.highlight && (
            <span className="text-[10px] text-lila font-semibold">💜 akcija</span>
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

      <div className="pl-2 text-right">
        <span className="price-shimmer inline-block text-[15px] font-semibold whitespace-nowrap">
          {service.price}
        </span>
      </div>
    </div>
  );
}
