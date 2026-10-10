import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

/**
 * Two honest ways to start: a focused first build (Zero to One),
 * or a phased operational system (One to Scale).
 * Light Kraftbase split, no full black blocks.
 */
const PLANS = [
  {
    tag: "Zero to One",
    title: "Start small",
    text: "One clear problem, one working tool. For teams setting up their first dependable system.",
    points: [
      "Single workflow or website",
      "Working software shared early",
      "Plain language UI",
      "Support agreed in writing",
    ],
    cta: "Describe the problem",
    featured: false,
  },
  {
    tag: "One to Scale",
    title: "Systems at scale",
    text: "Connected operations for payroll, stock, sites and money, phased so you get value early.",
    points: [
      "Multi module systems, payroll to ERP",
      "Phased delivery on real data",
      "Tested with non technical users",
      "Online and onsite support where agreed",
    ],
    cta: "Discuss your system",
    featured: true,
  },
];

export function Engage() {
  return (
    <section id="start" aria-label="Ways to work together" className="border-y hairline bg-surface scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="label-row">Engagement · Two ways to start</p>
            <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
              Start small, or scale with confidence<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-6 text-text-muted">
            Scope is agreed in writing and can evolve week to week. First working
            output early, not slides.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:mt-10 lg:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 80}>
              <div
                className={
                  plan.featured
                    ? "relative h-full overflow-hidden rounded-lg bg-[#FF6321]"
                    : "relative h-full overflow-hidden rounded-lg border hairline bg-background"
                }
              >
                <div
                  className={
                    plan.featured
                      ? "flex items-center justify-between border-b border-white/25 px-5 py-3.5 sm:px-6 sm:py-4"
                      : "flex items-center justify-between border-b hairline px-5 py-3.5 sm:px-6 sm:py-4"
                  }
                >
                  <p
                    className={
                      plan.featured
                        ? "text-[12px] font-semibold uppercase tracking-[0.1em] text-white"
                        : "text-[12px] font-semibold uppercase tracking-[0.1em] text-text-muted"
                    }
                  >
                    {plan.tag}
                  </p>
                 
                </div>
                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <h3
                    className={
                      plan.featured
                        ? "text-xl font-bold tracking-[-0.02em] text-white"
                        : "text-xl font-bold tracking-[-0.02em] text-text"
                    }
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={
                      plan.featured
                        ? "mt-2 text-[14px] leading-6 text-white/90"
                        : "mt-2 text-[14px] leading-6 text-text-muted"
                    }
                  >
                    {plan.text}
                  </p>
                  <ul className="mt-4 flex flex-col">
                    {plan.points.map((pt) => (
                      <li
                        key={pt}
                        className={
                          plan.featured
                            ? "flex items-start gap-3 border-t border-white/25 py-3 text-[14px] font-medium leading-6 text-white first:border-t-0 first:pt-0"
                            : "flex items-start gap-3 border-t hairline py-3 text-[14px] leading-6 text-text first:border-t-0 first:pt-0"
                        }
                      >
                        <span
                          className={
                            plan.featured
                              ? "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white"
                              : "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface"
                          }
                        >
                          <Check
                            className={plan.featured ? "h-3 w-3 text-[#FF6321]" : "h-3 w-3 text-text"}
                            strokeWidth={plan.featured ? 3 : 2}
                            aria-hidden="true"
                          />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={
                      plan.featured
                        ? "btn-nudge press mt-5 inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-lg bg-white px-6 text-[15px] font-semibold text-[#FF6321] transition-colors hover:bg-white/90 sm:w-auto sm:h-11"
                        : "btn-nudge press mt-5 inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-lg border hairline bg-surface px-6 text-[15px] font-semibold text-text transition-colors hover:border-text/30 sm:w-auto sm:h-11"
                    }
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
