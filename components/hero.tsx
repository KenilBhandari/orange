import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrangeMark } from "@/components/logo";
import { WordmarkLockup } from "@/components/wordmark";
import { Reveal } from "@/components/reveal";
import { PayrollArt } from "@/components/illustrations";

export function Hero() {
  const words = ["Software", "that", "makes", "work", "simpler"];
  return (
    <>
      <section aria-label="Introduction" className="relative overflow-hidden border-b hairline">
        <div aria-hidden="true" className="hero-aura" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-10 text-center sm:px-6 sm:pb-16 sm:pt-16">
          <p className="hero-enter hidden sm:inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg border hairline bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase leading-5 tracking-[0.08em] text-text-muted sm:text-[12px] sm:tracking-[0.1em]" style={{ animationDelay: "0ms" }}>
            Software development, built around real work
            <span className="brand-dot" aria-hidden="true" />
          </p>

          <div className="hero-enter mx-auto mt-7 w-[104px] sm:mt-8 sm:w-[132px]" style={{ animationDelay: "90ms" }}>
            <OrangeMark fluid label="OrangeDev logo" />
          </div>

          <div className="hero-enter mt-4 flex justify-center text-[1.25rem] sm:text-[1.7rem]" aria-label="OrangeDev" style={{ animationDelay: "180ms" }}>
            <WordmarkLockup orangeFill="#EA580C" devFill="#16A34A" />
          </div>

          <h1 className="display-tight mx-auto mt-6 max-w-3xl text-[2.55rem] font-bold leading-[1.02] text-text sm:mt-7 sm:text-6xl sm:leading-none lg:text-[4.5rem]">
            {words.map((w, i) => (
              <span key={w} className="hero-word" style={{ animationDelay: `${260 + i * 80}ms` }}>
                {w}
                {i === words.length - 1 && <span className="text-primary">.</span>}
                {i < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>
          <p className="hero-enter body-clean mx-auto mt-4 max-w-[34rem] text-base font-normal text-text-muted sm:mt-5 sm:text-[18px]" style={{ animationDelay: "680ms" }}>
            From everyday tools to complete systems. We build practical software
            your team can use with confidence.
          </p>
          <div className="hero-enter mx-auto mt-7 flex max-w-sm flex-col items-center gap-3 sm:mt-8 sm:max-w-md sm:flex-row sm:justify-center sm:gap-2.5" style={{ animationDelay: "780ms" }}>
            <Link
              href="/contact"
              className="btn-nudge press cta-brand inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 text-base font-semibold tracking-[-0.01em] text-white sm:h-11 sm:w-auto sm:text-[15px]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#work"
              className="hidden h-11 items-center justify-center gap-2 rounded-lg border hairline bg-surface px-6 text-[15px] font-semibold tracking-[-0.01em] text-text transition-colors hover:border-text/30 sm:inline-flex"
            >
              Explore our work
            </Link>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-1.5 py-1 text-[15px] font-semibold text-text-muted sm:hidden"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-enter mt-7 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-[-0.01em] text-text-muted sm:mt-8 sm:text-[13px]" style={{ animationDelay: "880ms" }}>
            <span>Est. 2022</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-30" />
            <span>E-commerce to ERP</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-30" />
            <span>Payroll for 500+ workers</span>
          </p>
        </div>
      </section>

      <div className="hero-enter relative mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6 sm:pt-14" style={{ animationDelay: "960ms" }}>
        <Reveal>
          <div className="hero-visual overflow-hidden rounded-lg border hairline bg-surface">
            <PayrollArt />
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="py-4 text-center text-[13px] font-medium text-text-muted">
            <span className="font-bold text-text">Payroll Software · 2025</span>
            {"  "}
            <Link
              href="/work/payroll-software"
              className="group inline-flex items-center gap-1 font-semibold text-text transition-colors hover:text-primary"
            >
              Read the story
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
      </div>
    </>
  );
}
