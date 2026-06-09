type LocationBadgeProps = {
  location: "beauty" | "wellbeing" | "both";
  variant?: "light" | "dark"; // "dark" = on dark/image bg
};

export function LocationBadge({ location, variant = "light" }: LocationBadgeProps) {
  if (location === "beauty") {
    return variant === "dark" ? (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne/20 border border-champagne/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">
        <span className="size-1.5 rounded-full bg-champagne" />
        Novi Beograd
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne/10 border border-champagne/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">
        <span className="size-1.5 rounded-full bg-champagne" />
        Novi Beograd
      </span>
    );
  }

  if (location === "wellbeing") {
    return variant === "dark" ? (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/20 border border-sage/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sage-dim">
        <span className="size-1.5 rounded-full bg-sage-dim" />
        Belgrade Waterfront
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft border border-sage/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sage">
        <span className="size-1.5 rounded-full bg-sage" />
        Belgrade Waterfront
      </span>
    );
  }

  // both
  return variant === "dark" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-pearl/80">
      <span className="size-1 rounded-full bg-champagne inline-block" />
      <span className="size-1 rounded-full bg-sage-dim inline-block -ml-0.5" />
      Obe lokacije
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
      <span className="size-1 rounded-full bg-champagne inline-block" />
      <span className="size-1 rounded-full bg-sage inline-block -ml-0.5" />
      Obe lokacije
    </span>
  );
}
