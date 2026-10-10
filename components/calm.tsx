"use client";

import { useState } from "react";
import { Clock, MessagesSquare, ShieldCheck, Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PROCESS, FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section aria-label="How we work" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="label-row">How we work · 01 to 05</p>
          <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
            Calm process, dependable delivery<span className="text-primary">.</span>
          </h2>
        </div>
        <p className="max-w-sm text-[14px] leading-6 text-text-muted">
          No jargon, no big reveals. Small steps, working software, support agreed in writing.
        </p>
      </Reveal>
      <ol className="mt-6 grid gap-3 sm:mt-10 sm:gap-px sm:overflow-hidden sm:rounded-lg sm:border sm:bg-[var(--border)] md:grid-cols-2 lg:grid-cols-5 hairline">
        {PROCESS.map((s) => (
          <Reveal key={s.n} delay={0}>
            <li className="h-full rounded-lg border bg-surface p-5 hairline sm:rounded-none sm:border-0">
              <span className="tnum text-[13px] font-semibold text-text-muted">
                {s.n}
              </span>
              <h3 className="mt-3 text-[15px] font-semibold leading-6 text-text">{s.title}</h3>
              <p className="mt-1.5 text-[13px] leading-6 text-text-muted">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

const ASSURANCES = [
  { icon: Clock, t: "One working day reply", d: "Every enquiry gets an honest, plain language response within one working day." },
  { icon: MessagesSquare, t: "Plain language, no jargon", d: "Built for non technical teams, from muster to salary to stock." },
  { icon: ShieldCheck, t: "Support agreed in writing", d: "Online and onsite support where agreed, since 2022, for the long run." },
];

export function Trust() {
  return (
    <section aria-label="Why teams trust us" className="border-y hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
        <Reveal className="max-w-2xl">
          <p className="label-row">Trust, earned since 2022</p>
          <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.5rem] sm:leading-[1.05]">
            We could pitch you. Or let the work do it<span className="text-primary">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-text-muted">
            E-commerce to ERP, UK websites to payroll for 500+ workers. One
            standard throughout: software people can use with confidence.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-px sm:overflow-hidden sm:rounded-lg sm:border sm:bg-[var(--border)] md:grid-cols-3 hairline">
          {ASSURANCES.map((a) => (
            <Reveal key={a.t} delay={0}>
              <div className="h-full rounded-lg border bg-surface p-5 hairline sm:rounded-none sm:border-0 sm:p-6">
                <a.icon className="h-5 w-5 text-text" aria-hidden="true" />
                <p className="mt-4 text-[15px] font-semibold text-text">{a.t}</p>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-label="Frequently asked questions" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="max-w-sm">
          <p className="label-row">Before you ask</p>
          <h2 className="mt-4 text-3xl font-bold text-text sm:text-[2.2rem] sm:leading-[1.08]">
            Questions, answered plainly<span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-[14px] leading-6 text-text-muted">
            Straight answers before the first call. Anything else gets a one working day reply.
          </p>
        </Reveal>
        <div className="flex flex-col rounded-lg border hairline bg-surface">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={cn(i > 0 && "border-t hairline")}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-semibold text-text sm:text-[15px]">{f.q}</span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border hairline transition-colors",
                      isOpen ? "bg-text text-white" : "bg-surface text-text-muted"
                    )}
                  >
                    <Plus className={cn("h-4 w-4 transition-transform", isOpen && "rotate-45")} aria-hidden="true" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-200",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-[15px] leading-7 text-text-muted sm:px-6 sm:text-sm sm:leading-6">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
