import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, MessagesSquare, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrangeMark } from "@/components/logo";
import { WordmarkLockup } from "@/components/wordmark";

const ASSURANCES = [
  { icon: Clock, t: "One working day reply" },
  { icon: MessagesSquare, t: "Plain language, no jargon" },
  { icon: ShieldCheck, t: "Support agreed in writing" },
];

export function Closing() {
  return (
    <section id="contact" aria-label="Contact" className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-24">
      <div
        className="relative overflow-hidden rounded-lg text-white"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(234,88,12,0.22), transparent 60%), #1C1917",
        }}
      >
      <div className="relative mx-auto grid w-full max-w-5xl scroll-mt-20 gap-8 px-5 py-10 sm:px-10 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/55 sm:text-[12px] sm:tracking-[0.1em]">06 · Start a conversation</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.08] sm:text-5xl sm:leading-[1.05]">
            Tell us what needs to work better<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/70">
            A simple business tool, a dependable payroll system, or a complete
            ERP. Tell us the problem you are trying to solve.
          </p>
          <ul className="mt-5 flex flex-col gap-2.5 text-[14px] text-white/75">
            {ASSURANCES.map((a) => (
              <li key={a.t} className="flex items-center gap-2">
                <a.icon className="h-4 w-4 shrink-0 text-white/55" aria-hidden="true" /> {a.t}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/contact"
              className="btn-nudge press inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-6 text-[15px] font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white/40"
            >
              Explore our work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={100} className="hidden lg:block">
          <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.04] px-10 py-9">
            <OrangeMark progress={1} size={120} label="OrangeDev logo complete" />
            <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.12em] text-white/50">
              OrangeDev · Est. 2022
            </p>
          </div>
        </Reveal>
      </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="max-w-sm text-[22px]" aria-label="OrangeDev">
              <WordmarkLockup orangeFill="#EA580C" devFill="#1c1c1c" />
            </div>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Software that makes work simpler, from everyday tools to complete
              operational systems.
            </p>
            <p className="mt-2 text-sm font-medium text-text-muted">
              One working day reply ·{" "}
              <Link href="/contact" className="font-semibold text-text transition-colors hover:text-primary">
                hello@orangedev.in
              </Link>
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] font-medium text-text-muted sm:text-sm">
              <li><Link href="/#work" className="inline-block py-1.5 transition-colors hover:text-text">Work</Link></li>
              <li><Link href="/#solutions" className="inline-block py-1.5 transition-colors hover:text-text">Solutions</Link></li>
              <li><Link href="/#story" className="inline-block py-1.5 transition-colors hover:text-text">Our story</Link></li>
              <li><Link href="/contact" className="inline-block py-1.5 transition-colors hover:text-text">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-1 border-t hairline pt-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OrangeDev. All rights reserved.</p>
          <p>
            <Link href="/contact" className="font-semibold text-text transition-colors hover:text-primary">
              hello@orangedev.in
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
