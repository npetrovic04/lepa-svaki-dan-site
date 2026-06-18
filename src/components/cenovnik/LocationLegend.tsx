"use client";

export function LocationLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px]">
      {/* NB */}
      <span className="flex items-center gap-2">
        <span
          className="block h-3.5 w-1.5 rounded-full flex-shrink-0"
          style={{ background: "#3F6E5E" }}
        />
        <span className="font-medium text-[#264A3D]">Novi Beograd</span>
        <span className="text-mist hidden sm:inline">· Trešnjinog cveta 1ž</span>
      </span>

      {/* divider */}
      <span className="hidden sm:block h-3 w-px bg-black/10" />

      {/* BWF */}
      <span className="flex items-center gap-2">
        <span
          className="block h-3.5 w-1.5 rounded-full flex-shrink-0"
          style={{ background: "#5B6F94" }}
        />
        <span className="font-medium text-[#37466A]">Belgrade Waterfront</span>
        <span className="text-mist hidden sm:inline">· Hercegovačka 17</span>
      </span>

      {/* divider */}
      <span className="hidden sm:block h-3 w-px bg-black/10" />

      {/* Both */}
      <span className="flex items-center gap-2">
        <span
          className="block h-3.5 w-1.5 rounded-full flex-shrink-0"
          style={{
            background: "linear-gradient(180deg, #3F6E5E 50%, #5B6F94 50%)",
          }}
        />
        <span className="font-medium text-[#5A4928]">Obe lokacije</span>
      </span>
    </div>
  );
}
