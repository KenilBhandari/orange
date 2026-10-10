import { Reveal } from "@/components/reveal";
import { TIMELINE } from "@/lib/content";

export function Philosophy() {
  return (
    <section aria-label="Philosophy" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="label-row">03 · Why it works</p>
        <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
          Powerful software, without unnecessary complexity<span className="text-primary">.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-text-muted">
          The best software does not make people adapt to complicated systems. It
          helps them do their jobs with confidence, whether managing inventory,
          processing payroll, supervising a team, or overseeing an entire operation.
          Clear, dependable, straightforward.
        </p>
      </Reveal>
    </section>
  );
}

export function Journey() {
  return (
    <section id="story" aria-label="Our journey" className="border-y hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-24">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="label-row">04 · Our journey · 2022 to 2026</p>
            <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
              Solving real problems since 2022<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-6 text-text-muted">
            From a single storefront to enterprise operations. Each step shaped the next system.
          </p>
        </Reveal>
        <ol className="mt-6 grid gap-3 sm:mt-10 sm:gap-px sm:overflow-hidden sm:rounded-lg sm:border sm:bg-[var(--border)] md:grid-cols-3 lg:grid-cols-5 hairline">
          {TIMELINE.map((m) => (
            <Reveal key={m.year} delay={0}>
              <li className="h-full rounded-lg border bg-surface p-5 hairline sm:rounded-none sm:border-0">
                <p className="tnum text-[13px] font-semibold text-text-muted">{m.year}</p>
                <h3 className="mt-2 text-[15px] font-semibold text-text">{m.title}</h3>
                <p className="mt-1.5 text-[13px] leading-6 text-text-muted">{m.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const POINTS = [
  { t: "Built around real operations", d: "Solutions designed around how work actually happens, not demo flows." },
  { t: "Usable by nontechnical teams", d: "Interfaces workers, supervisors, and owners can use with confidence." },
  { t: "Trusted with complex workflows", d: "From muster to salary to stock. Experience with money, people, and materials." },
  { t: "Relationships, not tickets", d: "Reliable delivery and long term client relationships since 2022." },
  { t: "Support online and onsite", d: "Technical support online and onsite, where agreed with each client." },
  { t: "Operating support, in writing", d: "Ongoing software operating support covered by the relevant service agreement." },
];

export function Why() {
  return (
    <section aria-label="Why OrangeDev" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="label-row">05 · Why OrangeDev</p>
        <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
          Built to work. Supported for the long run<span className="text-primary">.</span>
        </h2>
      </Reveal>
      <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-px sm:overflow-hidden sm:rounded-lg sm:border sm:bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3 hairline">
        {POINTS.map((p, i) => (
          <Reveal key={p.t} delay={0}>
            <div className="h-full rounded-lg border bg-surface p-5 hairline sm:rounded-none sm:border-0 sm:p-6">
              <p className="tnum text-[13px] font-semibold text-text-muted">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-[15px] font-semibold text-text">{p.t}</p>
              <p className="mt-1.5 text-sm leading-6 text-text-muted">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
