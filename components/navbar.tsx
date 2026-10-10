"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { NavLogo } from "@/components/nav-logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Work", href: "/#work", section: "work" },
  { label: "Solutions", href: "/#solutions", section: "solutions" },
  { label: "Start", href: "/#start", section: "start" },
  { label: "Our story", href: "/#story", section: "story" },
];

const SECTIONS = ["solutions", "work", "start", "story"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    let last = false;
    const update = () => {
      raf = 0;
      const next = window.scrollY > 8;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
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
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  // No body scroll lock: the mobile menu is a small floating card,
  // locking the page behind it is what felt sticky and heavy.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  const isActive = (l: (typeof LINKS)[number]) => active === l.section;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-transparent",
        // Desktop keeps a slim full width bar. Mobile is transparent so
        // only the floating island paints, never a half screen backdrop.
        "border-0 px-3 pt-3 md:border-b md:px-0 md:pt-0",
        scrolled || open
          ? "md:hairline md:bg-background/85 md:backdrop-blur-sm"
          : "md:border-transparent md:bg-background/80"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      {/* Floating island on phones, plain row on desktop */}
      <div
        className={cn(
          "mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-3",
          "rounded-lg border hairline bg-[rgba(255,255,255,0.94)] shadow-[0_8px_24px_-16px_rgba(22,19,17,0.25)] backdrop-blur-md",
          "md:h-16 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:px-6 md:shadow-none md:backdrop-blur-none"
        )}
      >
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
          className="press ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg text-text transition-transform active:scale-95 md:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile dropdown: only mounted when open, so a closed menu
          never reserves height or paints a phantom backdrop. */}
      {open && (
        <div className="mx-auto mt-2 w-full max-w-6xl md:hidden">
          <nav
            aria-label="Mobile"
            className="nav-drop rounded-lg border hairline bg-surface p-1.5 shadow-[0_16px_40px_-20px_rgba(22,19,17,0.3)]"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 text-[16px] tracking-[-0.01em] transition-colors active:bg-background",
                  isActive(l) ? "font-semibold text-text" : "font-medium text-text-muted"
                )}
              >
                {l.label}
                <ChevronRight className="h-4 w-4 opacity-30" aria-hidden="true" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="cta-brand mt-1 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-lg px-4 text-[15px] font-semibold text-white"
            >
              Discuss a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
