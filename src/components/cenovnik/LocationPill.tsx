import { Location } from "@/lib/cenovnik";

export function LocationPill({ location }: { location: Location }) {
  if (location === "nb") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold leading-none flex-shrink-0"
        style={{ background: "#E1ECE6", color: "#264A3D" }}
      >
        <span
          className="block size-1.5 rounded-full flex-shrink-0"
          style={{ background: "#3F6E5E" }}
        />
        Novi Beograd
      </span>
    );
  }
  if (location === "bw") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold leading-none flex-shrink-0"
        style={{ background: "#E2E8F1", color: "#37466A" }}
      >
        <span
          className="block size-1.5 rounded-full flex-shrink-0"
          style={{ background: "#5B6F94" }}
        />
        Waterfront
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold leading-none flex-shrink-0 border border-dashed"
      style={{
        background: "#F2EEE6",
        color: "#5A4928",
        borderColor: "#C9B68B",
      }}
    >
      <span
        className="block size-1.5 rounded-full flex-shrink-0"
        style={{
          background: "linear-gradient(180deg, #3F6E5E 50%, #5B6F94 50%)",
        }}
      />
      Obe lokacije
    </span>
  );
}
