import { Fragment } from "react";
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
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24"
    >
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-primary">The difference</p>
        <h2 className="mt-3 text-3xl font-bold text-text sm:text-[2.6rem] sm:leading-[1.05]">
          Software is sold on promises.
          <br className="hidden sm:block" /> We made it simple to compare.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-text-muted">
          Anyone can demo well. What matters is the week after go-live — when real
          people use the system on a real working day.
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-10 sm:mt-12">
        <div className="overflow-hidden rounded-2xl border hairline bg-surface">
          <div className="grid grid-cols-2">
            <div className="border-r hairline bg-background px-4 py-3.5 sm:px-6">
              <p className="eyebrow text-text-muted">Typical vendors</p>
            </div>
            <div className="bg-primary-soft px-4 py-3.5 sm:px-6">
              <p className="eyebrow text-primary">OrangeDev</p>
            </div>
            {ROWS.map((r) => (
              <Fragment key={r.us}>
                <div className="flex items-start gap-2.5 border-t border-r hairline bg-background px-4 py-4 sm:px-6 sm:py-5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
                  <p className="text-[13px] leading-6 text-text-muted sm:text-sm">{r.them}</p>
                </div>
                <div className="flex items-start gap-2.5 border-t hairline bg-primary-soft px-4 py-4 sm:px-6 sm:py-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-[13px] font-semibold leading-6 text-text sm:text-sm">{r.us}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
