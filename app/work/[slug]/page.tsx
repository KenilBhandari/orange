import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PROJECTS, getProject } from "@/lib/content";
import { CommerceArt, PresenceArt, TrippyArt, PayrollArt, ErpArt } from "@/components/illustrations";

const ART = {
  commerce: CommerceArt,
  presence: PresenceArt,
  trippy: TrippyArt,
  payroll: PayrollArt,
  erp: ErpArt,
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.name} — ${p.category}`,
    description: p.problem,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const Art = ART[project.art];

  return (
    <>
      <section className="border-b hairline">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-16">
          <Reveal>
            <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All work
            </Link>
            <p className="tnum mt-6 text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
              {project.index} · {project.category} · {project.year}
            </p>
            <h1 className="mt-2 max-w-2xl text-3xl font-bold text-text sm:text-5xl sm:leading-[1.06]">
              {project.name}<span className="text-primary">.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-text">{project.problem}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Reveal>
          <Art />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <Reveal>
            <h2 className="eyebrow text-primary">The story</h2>
            <div className="mt-4 flex flex-col gap-5">
              {project.story.map((para, i) => (
                <p key={i} className={i === 0 ? "text-lg font-medium leading-8 text-text" : "text-[15px] leading-7 text-text-muted"}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border hairline bg-surface p-5 sm:p-6 lg:sticky lg:top-24">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-text-muted">What we built</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {project.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm leading-6 text-text">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-nudge press mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Start a similar project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>

        <nav aria-label="More projects" className="mt-14 grid gap-3 border-t hairline pt-6 sm:grid-cols-2">
          <Link href={`/work/${prev.slug}`} className="group rounded-2xl border hairline bg-surface p-5 transition-colors hover:border-primary">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" /> Previous
            </span>
            <span className="mt-1 block text-lg font-bold text-text group-hover:text-primary">{prev.name}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="group rounded-2xl border hairline bg-surface p-5 text-right transition-colors hover:border-primary">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
              Next <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
            <span className="mt-1 block text-lg font-bold text-text group-hover:text-primary">{next.name}</span>
          </Link>
        </nav>
      </section>
    </>
  );
}
