import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary mb-2">03 · Start a conversation</p>
          <h2 className="text-4xl font-bold leading-[1.06] text-text sm:text-5xl">
            Let's talk about the problem you're trying to solve.
          </h2>
          <p className="mt-5 text-lg text-text-muted">
            One honest line is enough. We'll reply within one working day.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 max-w-xl">
          <Link
            href="/contact"
            className="group btn-nudge press inline-flex items-center justify-center gap-2 rounded-md bg-text px-6 py-3 text-[15px] font-medium text-background transition-all duration-500 ease-out hover:scale-[1.02]"
          >
            Discuss your project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="tnum text-xs font-medium tracking-wider text-text-muted">
              OrangeDev · Est. 2022
            </p>
            <p className="mt-2 max-w-sm text-sm text-text-muted">
              Software that makes work simpler.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-text-muted">
            <Link href="/#work" className="hover:text-primary transition-colors">Work</Link>
            <Link href="/#solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <Link href="/#story" className="hover:text-primary transition-colors">Our story</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OrangeDev. All rights reserved.</p>
          <p>
            <Link href="/contact" className="font-medium text-text hover:text-primary transition-colors">
              hello@orangedev.in
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
