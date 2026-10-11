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
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="label-row">02 · Selected work · 2026 to 2022</p>
            <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
              The work is the proof<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-6 text-text-muted">
            From a single storefront to enterprise operations. Shown as product
            interfaces with sample data.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
          {PROJECTS.map((p) => {
            const Art = ART[p.art];
            return (
              <article key={p.slug} aria-label={`${p.name} project`} className="group overflow-hidden rounded-lg border hairline bg-surface">
                <div className="border-b hairline bg-[#f5f3ee]">
                  <Art />
                </div>
                <div className="p-3 sm:p-6">
                  {/* Phones show art + title only. Meta, description, and footer stay desktop-only. */}
                  <p className="hidden truncate text-[12px] font-semibold uppercase tracking-[0.1em] text-text-muted sm:block">
                    {p.category} · {p.year}
                  </p>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-text sm:mt-3 sm:text-xl">
                    <Link
                      href={`/work/${p.slug}`}
                      aria-label={`${p.name}, read the story`}
                      className="transition-colors active:text-primary sm:hover:text-primary"
                    >
                      {p.name}
                    </Link>
                  </h3>
                  <p className="mt-1.5 hidden text-[15px] leading-6 text-text-muted sm:mt-2 sm:block">
                    {p.problem}
                  </p>
                  <p className="mt-1.5 hidden text-[14px] leading-6 text-text-muted sm:block">
                    {p.contribution}
                  </p>
                  <div className="mt-3 hidden items-center gap-3 border-t hairline pt-3 sm:mt-4 sm:flex sm:pt-4">
                    <Link
                      href={`/work/${p.slug}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 py-1 text-[15px] font-semibold text-text transition-colors hover:text-primary"
                    >
                      Read the story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <span className="text-[12px] font-medium text-text-muted">{p.note}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-[12px] leading-5 text-text-muted">
          Client systems stay private. All previews use sample data.
        </p>
      </div>
    </section>
  );
}
