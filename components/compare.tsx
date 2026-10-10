import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

const ROWS = [
  {
    them: "Designed for the sales demo",
    us: "Designed for the busiest hour of the working day",
  },
  {
    them: "You adapt to the software",
    us: "The software adapts to how your team already works",
  },
  {
    them: "Interfaces full of jargon",
    us: "Clear enough for a first-time, non-technical user",
  },
  {
    them: "A product you must fit into",
    us: "Shaped around your actual operation, then delivered",
  },
  {
    them: "Delivery ends at handover",
    us: "Online and onsite support where agreed — for the long run",
  },
  {
    them: "Reports you must interpret",
    us: "Information you can act on, right where you work",
  },
];

/** Honest positioning table — approach versus approach, no invented numbers. */
export function Compare() {
  return (
    <section
      aria-label="How we compare"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal className="max-w-2xl">
        <p className="label-row">The difference</p>
        <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
          Software is sold on promises. We made it simple to compare.
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-text-muted">
          Anyone can demo well. What matters is the week after go-live — when real
          people use the system on a real working day.
        </p>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full overflow-hidden rounded-[16px] border hairline bg-surface">
            <div className="border-b hairline px-5 py-3.5 sm:px-6 sm:py-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-muted">Typical vendors</p>
            </div>
            <ul>
              {ROWS.map((r) => (
                <li
                  key={r.them}
                  className="flex items-start gap-3 border-b hairline px-5 py-4 last:border-b-0 sm:px-6 sm:py-3.5"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-text/[0.06]">
                    <X className="h-3 w-3 text-text-muted" aria-hidden="true" />
                  </span>
                  <p className="text-[15px] leading-6 text-text-muted sm:text-[14px]">{r.them}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="h-full overflow-hidden rounded-[16px] text-white" style={{ background: "var(--ink)" }}>
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 sm:px-6 sm:py-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white">OrangeDev</p>
              <span className="text-[12px] font-semibold text-primary">Our standard</span>
            </div>
            <ul>
              {ROWS.map((r) => (
                <li
                  key={r.us}
                  className="flex items-start gap-3 border-b border-white/10 px-5 py-4 last:border-b-0 sm:px-6 sm:py-3.5"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25">
                    <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                  </span>
                  <p className="text-[15px] font-medium leading-6 text-white/90 sm:text-[14px]">{r.us}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <p className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center text-[13px] font-medium text-text-muted sm:mt-8">
          <span>Working software early — not slides</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-30" />
          <span>Scope agreed in writing</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-30" />
          <span>Support for the long run</span>
        </p>
      </Reveal>
    </section>
  );
}
