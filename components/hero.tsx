"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrangeMark, brandText } from "@/components/logo";
import { WordmarkLockup } from "@/components/wordmark";
import { Reveal } from "@/components/reveal";
import { PayrollArt } from "@/components/illustrations";

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

const RING_R = 190;
const RING_C = 2 * Math.PI * RING_R;

function Ticks() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 200 + Math.cos(a) * 176;
        const y1 = 200 + Math.sin(a) * 176;
        const x2 = 200 + Math.cos(a) * (i % 3 === 0 ? 164 : 170);
        const y2 = 200 + Math.sin(a) * (i % 3 === 0 ? 164 : 170);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--text)"
            strokeOpacity={i % 3 === 0 ? 0.28 : 0.12}
            strokeWidth={i % 3 === 0 ? 1.5 : 1}
          />
        );
      })}
    </>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [raw, setRaw] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRaw(1);
      document.documentElement.setAttribute("data-brand", "on");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight * 0.8);
      const scrolled = clamp01(-rect.top / total);
      setRaw(scrolled);
      document.documentElement.setAttribute("data-brand", scrolled >= 0.78 ? "on" : "off");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.setAttribute("data-brand", "on");
    };
  }, []);

  // Motion follows the finger; color restores in the second half,
  // so the arc visibly settles before the brand arrives.
  const motion = 1 - Math.pow(1 - raw, 3);
  const pct = String(Math.round(raw * 100));
  const act2 = raw >= 0.78;
  const reveal = clamp01((raw - 0.35) / 0.45);

  return (
    <>
      <section ref={sectionRef} aria-label="Introduction" className="relative border-b hairline">
        <div className="sticky top-16">
          <div className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
            <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />

            <div className="relative mx-auto w-full max-w-3xl px-5 py-10 text-center sm:px-6 sm:py-16">
              <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-md border hairline bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase leading-5 tracking-[0.08em] text-text-muted sm:text-[12px] sm:tracking-[0.1em]">
                Software development, built around real work
                <span className="brand-dot" aria-hidden="true" />
              </p>

              {/* The assembly — kept, but quieter */}
              <div className="relative mx-auto mt-6 w-fit">
                <svg
                  viewBox="0 0 400 400"
                  className="hidden w-[200px] sm:block lg:w-[220px]"
                  aria-hidden="true"
                >
                  <circle cx="200" cy="200" r="190" fill="none" stroke="var(--text)" strokeOpacity="0.1" strokeWidth="1" />
                  <Ticks />
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray={RING_C}
                    strokeDashoffset={RING_C * (1 - motion)}
                    opacity={0.25 + motion * 0.75}
                    transform="rotate(-90 200 200)"
                  />
                  <circle
                    cx={200 + RING_R * Math.cos(-Math.PI / 2 + motion * Math.PI * 2)}
                    cy={200 + RING_R * Math.sin(-Math.PI / 2 + motion * Math.PI * 2)}
                    r="4"
                    fill="var(--primary)"
                    opacity={motion > 0.02 ? 1 : 0}
                  />
                </svg>
                <div className="mx-auto w-[112px] py-2 sm:absolute sm:inset-0 sm:m-auto sm:w-[136px] sm:py-0 lg:w-[148px]">
                  <OrangeMark progress={motion} fluid label="OrangeDev logo assembling" />
                </div>
              </div>

              <div className="mt-4 flex justify-center text-[1.15rem] sm:text-[1.7rem] lg:text-[1.8rem]" aria-label="OrangeDev">
                <WordmarkLockup
                  orangeFill={brandText(motion, "orange")}
                  devFill={brandText(motion, "green")}
                />
              </div>
              <p className="mt-3 text-[12px] font-medium tracking-[-0.01em] text-text-muted" aria-live="polite">
                {act2 ? "Complete — OrangeDev in full color." : `Assembling — ${pct}% · Keep scrolling.`}
              </p>

              {/* Clean headline block */}
              <div
                style={{
                  opacity: reveal,
                  transform: `translateY(${(1 - reveal) * 24}px)`,
                }}
              >
                <h1 className="display-tight mx-auto mt-7 max-w-3xl text-[2.4rem] font-bold leading-[1.02] text-text sm:mt-8 sm:text-6xl sm:leading-none lg:text-[4.75rem]">
                  Software that makes work simpler.
                </h1>
                <p className="body-clean mx-auto mt-4 max-w-[34rem] text-base font-normal text-text-muted sm:mt-5 sm:text-[18px]">
                  From everyday business tools to complete operational systems, we build
                  practical software that helps people stay organized and get more done.
                </p>
                <div className="mx-auto mt-7 flex max-w-sm flex-col items-center gap-4 sm:mt-8 sm:max-w-md sm:flex-row sm:justify-center sm:gap-2.5">
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
                <p className="mt-7 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-[-0.01em] text-text-muted sm:mt-8 sm:text-[13px]">
                  <span>Est. 2022</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-30" />
                  <span>E-commerce to ERP</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-30" />
                  <span>Payroll for 500+ workers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30vh] sm:h-[46vh] lg:h-[85vh]" aria-hidden="true" />
      </section>

      {/* Product visual */}
      <div className="relative mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6 sm:pt-14">
        <Reveal>
          <div className="overflow-hidden rounded-[14px] border hairline bg-surface">
            <PayrollArt />
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="py-4 text-center text-[13px] font-medium text-text-muted">
            <span className="font-bold text-text">Payroll Software · 2025</span>
            {" — "}
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
