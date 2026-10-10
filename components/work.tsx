import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PROJECTS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32"
    >
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-primary mb-2">02 · Selected Work</p>
        <h2 className="text-4xl font-bold leading-[1.06] text-text sm:text-5xl">
          Proof of execution.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:gap-16">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <article>
              <div className="group relative aspect-[4/3] w-full overflow-hidden border border-border">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-text-muted">
                    {p.name}: {p.category}
                  </span>
                </div>
                <div className="absolute inset-0 ring-primary ring-offset-2 ring-offset-background transition-all duration-500 ease-out group-hover:ring-0" />
              </div>

              <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex flex-col">
                  <span className="tnum text-xs font-medium tracking-wider text-text-muted">
                    {p.index}
                  </span>
                  <p className="mt-1 text-sm text-text-muted">{p.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-text sm:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <Link
                  href={`/work/${p.slug}`}
                  className="group/link inline-flex items-center gap-1 text-sm font-medium text-text-muted transition-all duration-500 ease-out hover:text-primary"
                >
                  Read case study
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-500 ease-out group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
