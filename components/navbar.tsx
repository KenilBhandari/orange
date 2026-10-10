"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { NavLogo } from "@/components/nav-logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Work", href: "/#work", section: "work" },
  { label: "Solutions", href: "/#solutions", section: "solutions" },
  { label: "Start", href: "/#start", section: "start" },
  { label: "Our story", href: "/#story", section: "story" },
  { label: "Contact", href: "/contact", section: null },
];

const SECTIONS = ["solutions", "work", "start", "story"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  // Gentle elevation once scrolled.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll spy for section links.
  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  // Lock smooth scroll while the mobile menu is open.
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (l: (typeof LINKS)[number]) =>
    l.section ? active === l.section : pathname === "/contact";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open ? "hairline bg-background/90 backdrop-blur-md" : "border-transparent bg-background/80 backdrop-blur-sm"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-8 px-4 sm:px-6">
        <NavLogo />
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              aria-current={isActive(l) ? "true" : undefined}
              className={cn(
                "px-3 py-2 text-[14px] tracking-[-0.01em] transition-colors",
                isActive(l)
                  ? "font-semibold text-text"
                  : "font-medium text-text-muted hover:text-text"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden md:block">
          <Link
            href="/contact"
            className="press cta-brand inline-flex h-10 items-center gap-1.5 rounded-lg px-4 text-[14px] font-semibold tracking-[-0.01em] text-white"
          >
            Discuss a project <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="press ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg text-text transition-colors hover:bg-text/[0.05] md:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="border-t hairline bg-surface px-4 py-3"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-3.5 text-base tracking-[-0.01em] transition-colors hover:bg-background",
                  isActive(l) ? "font-semibold text-text" : "font-medium text-text-muted"
                )}
              >
                {l.label}
                <ArrowRight className="h-4 w-4 opacity-40" aria-hidden="true" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="cta-brand mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-4 py-3.5 text-base font-semibold text-white"
            >
              Discuss a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
