import { testimonial } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Testimonial() {
  return (
    <section className="px-3 py-3 lg:px-4">
      <div className="section-card bg-card mx-auto max-w-[1400px]">
        <div className="px-8 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mx-auto mb-8 size-10 flex items-center justify-center">
                <svg width="32" height="26" viewBox="0 0 48 40" fill="none" className="text-champagne/50">
                  <path d="M0 40V24C0 16.5 1.5 10.5 4.5 6S12 .5 18 0v8c-3 .5-5.2 1.8-6.7 4S9 17 9 20h9v20H0zm30 0V24c0-7.5 1.5-13.5 4.5-18S42 .5 48 0v8c-3 .5-5.2 1.8-6.7 4S39 17 39 20h9v20H30z" fill="currentColor"/>
                </svg>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <blockquote className="font-display text-balance text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.25] text-ink">
                {testimonial.quote}
              </blockquote>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col items-center gap-2">
                <div className="h-px w-8 bg-champagne/40" />
                <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-ink-soft">
                  {testimonial.attribution}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-mist">
                  {testimonial.context}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
