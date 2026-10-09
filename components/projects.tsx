import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PROJECTS } from "@/lib/content";
import { CommerceArt, PresenceArt, TrippyArt, PayrollArt, ErpArt } from "@/components/illustrations";

const ART = {
  commerce: CommerceArt,
  presence: PresenceArt,
  trippy: TrippyArt,
  payroll: PayrollArt,
  erp: ErpArt,
};

export function Projects() {
  return (
    <section id="work" aria-label="Selected work" className="border-y hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-24">
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-primary">02 · Selected work · 2022 → 2026</p>
            <h2 className="mt-3 text-3xl font-bold text-text sm:text-[2.6rem] sm:leading-[1.05]">
              The work is
              <br />
              the proof.
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-6 text-text-muted">
            From a single storefront to enterprise operations. Each visual is an
            original conceptual illustration — never a stock mockup.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-14 sm:mt-14 sm:gap-20">
          {PROJECTS.map((p, i) => {
            const Art = ART[p.art];
            const flip = i % 2 === 1;
            return (
              <article key={p.slug} aria-label={`${p.name} project`} className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <Art />
                </Reveal>
                <Reveal delay={100} className={flip ? "lg:order-1" : ""}>
                  <p className="tnum text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                    {p.index} · {p.category} · {p.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-text sm:text-4xl">
                    {p.name}
                    <span className="text-primary">.</span>
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-7 text-text">
                    {p.problem}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-text-muted">
                    OrangeDev contribution — {p.contribution}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/work/${p.slug}`}
                      className="btn-nudge press inline-flex items-center gap-1.5 rounded-lg bg-text px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
                    >
                      Read the story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <span className="inline-flex rounded-full border hairline px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                      {p.note}
                    </span>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
