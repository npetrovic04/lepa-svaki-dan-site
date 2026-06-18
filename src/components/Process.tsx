import { journey } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="put" className="bg-[#F5F1EC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div>
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Reveal>
                <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-lila">
                  Vaš put kod nas
                </div>
              </Reveal>
              <Reveal delay={0.07}>
                <h2 className="font-display text-balance text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal leading-[1.23] text-ink max-w-xl">
                  Četiri koraka.{" "}
                  <span className="font-display-italic text-lila">Bez improvizacije.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-xs text-[14px] leading-[1.75] text-mist font-light">
                Svaki tretman počinje konsultacijom. Nikad ne radimo nešto pre
                nego što objasnimo zašto i koliki je očekivani rezultat.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal key={j.step} delay={0.09 * i}>
                <div className="group rounded-2xl bg-white p-7 lg:p-8 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  <div className="font-display text-[4.5rem] font-normal leading-none text-black/6 transition-colors group-hover:text-lila/20 select-none">
                    {j.step}
                  </div>
                  <h3 className="mt-4 font-display text-[1.5rem] font-normal text-ink">
                    {j.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.75] text-mist font-light">
                    {j.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
