import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrangeMark } from "@/components/logo";
import { WordmarkLockup } from "@/components/wordmark";

export function Closing() {
  return (
    <section id="contact" aria-label="Contact" className="text-white" style={{ background: "var(--ink)" }}>
      <div className="mx-auto grid w-full max-w-6xl scroll-mt-20 gap-10 px-4 py-14 sm:px-6 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-center">
        <Reveal>
          <p className="eyebrow text-white/60">06 · Start a conversation</p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-6xl">
            Tell us what
            <br />
            needs to work <span className="text-primary">better.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/70">
            Whether you need a simple business tool, a dependable payroll system, or a
            complete ERP solution — let&apos;s talk about the problem you&apos;re trying to solve.
          </p>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/contact"
              className="btn-nudge press inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/20 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-primary"
            >
              Explore our work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120} className="hidden lg:block">
          <div className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 px-10 py-8">
            <OrangeMark progress={1} size={140} label="OrangeDev logo complete" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              OrangeDev · Est. 2022
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="max-w-sm text-[24px]" aria-label="OrangeDev">
              <WordmarkLockup orangeFill="#EA580C" devFill="#1c1c1c" />
            </div>
            <p className="mt-2 text-[13px] leading-6 text-text-muted">
              Software that makes work simpler — from everyday business tools to
              complete operational systems.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-text-muted">
              <li><Link href="/#work" className="transition-colors hover:text-text">Work</Link></li>
              <li><Link href="/#solutions" className="transition-colors hover:text-text">Solutions</Link></li>
              <li><Link href="/#story" className="transition-colors hover:text-text">Our story</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-text">Contact</Link></li>
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
