import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/content";

const TAGS: string[][] = [
  ["Stock", "Attendance", "Daily tools"],
  ["Salary runs", "Muster", "500+ workers"],
  ["Projects", "Materials", "Reports"],
  ["Websites", "Interfaces", "Content-first"],
];

export function Services() {
  return (
    <section id="solutions" aria-label="What we build" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="label-row">01 — What we build</p>
        <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
          Everyday tools to complete systems.
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-text-muted">
          Four areas, one standard: software people can use with confidence — from
          the site to the back office.
        </p>
      </Reveal>
      <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-px sm:overflow-hidden sm:rounded-[14px] sm:border sm:bg-[var(--border)] md:grid-cols-2 hairline">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={i * 50}>
            <div className="group h-full rounded-[14px] border bg-surface p-5 hairline sm:rounded-none sm:border-0 sm:p-7">
              <div className="flex items-baseline justify-between">
                <span className="tnum text-[13px] font-semibold text-text-muted">{s.n}</span>
                <span className="text-[13px] font-medium text-text-muted/60">0{i + 1} / 04</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-text sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-text-muted">{s.text}</p>
              <p className="mt-4 border-t hairline pt-4 text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">
                {TAGS[i % TAGS.length].join("  ·  ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
