type LocationBadgeProps = {
  location: "beauty" | "wellbeing" | "both";
  variant?: "light" | "dark"; // "dark" = on dark/image bg
};

export function LocationBadge({ location, variant = "light" }: LocationBadgeProps) {
  if (location === "beauty") {
    return variant === "dark" ? (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-lila/20 border border-lila/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-lila">
        <span className="size-1.5 rounded-full bg-lila" />
        Novi Beograd
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-lila/10 border border-lila/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-lila">
        <span className="size-1.5 rounded-full bg-lila" />
        Novi Beograd
      </span>
    );
  }

  if (location === "wellbeing") {
    return variant === "dark" ? (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-lila/20 border border-lavanda/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-lavanda-dim">
        <span className="size-1.5 rounded-full bg-lavanda-dim" />
        Belgrade Waterfront
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-lila-soft border border-lavanda/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-lavanda">
        <span className="size-1.5 rounded-full bg-lila-soft" />
        Belgrade Waterfront
      </span>
    );
  }

  // both
  return variant === "dark" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-pearl/80">
      <span className="size-1 rounded-full bg-lila inline-block" />
      <span className="size-1 rounded-full bg-lavanda-dim inline-block -ml-0.5" />
      Obe lokacije
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
      <span className="size-1 rounded-full bg-lila inline-block" />
      <span className="size-1 rounded-full bg-lila-soft inline-block -ml-0.5" />
      Obe lokacije
    </span>
  );
}
