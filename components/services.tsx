import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section id="solutions" aria-label="What we build" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-primary">01 · What we build</p>
        <h2 className="mt-3 text-3xl font-bold text-text sm:text-[2.6rem] sm:leading-[1.05]">
          Everyday tools to
          <br />
          complete systems.
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-text-muted">
          Four areas, one standard: software people can use with confidence — from
          the site to the back office.
        </p>
      </Reveal>
      <div className="mt-8 border-t hairline sm:mt-10">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={i * 60}>
            <div className="group grid gap-1.5 border-b hairline py-5 sm:grid-cols-[64px_1fr_1.2fr] sm:items-baseline sm:gap-6 sm:py-6">
              <span className="tnum text-sm font-bold text-text-muted">{s.n}</span>
              <h3 className="text-lg font-bold text-text transition-colors group-hover:text-primary sm:text-2xl">
                {s.title}
              </h3>
              <p className="max-w-lg text-sm leading-6 text-text-muted sm:text-[15px]">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
