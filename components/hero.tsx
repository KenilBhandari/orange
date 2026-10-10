"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { OrangeMark, brandText } from "@/components/logo";
import { WordmarkLockup } from "@/components/wordmark";

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
            strokeOpacity={i % 3 === 0 ? 0.4 : 0.18}
            strokeWidth={i % 3 === 0 ? 2 : 1}
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

  // Motion follows the finger; colour restores in the second half,
  // so the arc visibly settles before the brand arrives.
  const motion = 1 - Math.pow(1 - raw, 3);
  const pct = String(Math.round(raw * 100)).padStart(3, "0");
  const act2 = raw >= 0.78;
  const reveal = clamp01((raw - 0.35) / 0.45);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative border-b hairline">
      <div className="sticky top-16">
        <div className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
          <div className="blueprint absolute inset-0" aria-hidden="true" />

          {/* Instrument corners */}
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden justify-between px-8 pt-6 lg:flex" aria-hidden="true">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted">
              OrangeDev® — Est. 2022
            </p>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted">
              {act2 ? <span className="text-primary">Act II — Brand</span> : "Act I — Mono"}
            </p>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden justify-between px-8 pb-6 lg:flex" aria-hidden="true">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted">
              {raw < 0.12 && "Restrained · Incomplete · Monochrome"}
              {raw >= 0.12 && raw < 0.78 && "Assembling — arc descending"}
              {raw >= 0.78 && "Complete — #EA580C / green arc"}
            </p>
            <p className="tnum font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted">
              Assembly <span className={act2 ? "text-primary" : "text-text"}>{pct}%</span>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-4xl px-4 py-8 text-center sm:px-6">
            <p className="inline-flex items-center gap-2 rounded-full border hairline bg-surface px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">
              Software development, built around real work
              <span className="brand-dot" aria-hidden="true" />
            </p>

            {/* The assembly */}
            <div className="relative mx-auto mt-5 w-fit">
              <svg
                viewBox="0 0 400 400"
                className="hidden w-[300px] sm:block lg:w-[340px]"
                aria-hidden="true"
              >
                <circle cx="200" cy="200" r="190" fill="none" stroke="var(--text)" strokeOpacity="0.14" strokeWidth="1" />
                <Ticks />
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
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
              <div className="mx-auto w-[168px] py-4 sm:absolute sm:inset-0 sm:m-auto sm:w-[200px] sm:py-0 lg:w-[228px]">
                <OrangeMark progress={motion} fluid label="OrangeDev logo assembling" />
              </div>
            </div>

            <div className="mt-1 flex justify-center text-[1.7rem] sm:text-[2.2rem] lg:text-[2.5rem]" aria-label="OrangeDev">
              <WordmarkLockup
                orangeFill={brandText(motion, "orange")}
                devFill={brandText(motion, "green")}
              />
            </div>
            <p className="mt-3 min-h-5 text-xs text-text-muted lg:hidden" aria-live="polite">
              {raw < 0.78 ? "Scroll — the mark is assembling." : "Complete: OrangeDev orange with its green arc."}
            </p>

            {/* Headline settles in once the mark has taken its colour. */}
            <div
              style={{
                opacity: reveal,
                transform: `translateY(${(1 - reveal) * 18}px)`,
              }}
            >
              <h1 className="mx-auto mt-5 max-w-3xl text-[2rem] font-extrabold leading-[1.04] text-text sm:mt-7 sm:text-[2.9rem] lg:text-[3.7rem]">
                Software that makes
                <br />
                work simpler.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                From everyday business tools to complete operational systems, we build
                practical software that helps people stay organized and get more done.
              </p>
              <div className="mx-auto mt-6 flex max-w-md flex-col gap-2.5 sm:mt-8 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="btn-nudge press cta-brand inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold text-white sm:py-3.5"
                >
                  Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border hairline bg-surface px-6 py-3 text-[15px] font-semibold text-text transition-colors hover:border-primary hover:text-primary sm:py-3.5"
                >
                  Explore our work
                </Link>
              </div>
            </div>

            <p className="mt-7 hidden items-center justify-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted lg:flex">
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              Scroll — the mark assembles as you go
            </p>
          </div>
        </div>
      </div>
      <div className="h-[46vh] lg:h-[85vh]" aria-hidden="true" />
    </section>
  );
}
