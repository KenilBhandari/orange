"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavLogo } from "@/components/nav-logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Our story", href: "/#story" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header className="glass-topbar sticky top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center">
          <NavLogo />
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className="nav-link rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="btn-nudge press inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Discuss a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="press relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-text md:hidden"
        >
          <Menu aria-hidden="true" className={cn("absolute h-5 w-5 transition-all duration-300", open ? "rotate-90 scale-50 opacity-0" : "opacity-100")} />
          <X aria-hidden="true" className={cn("absolute h-5 w-5 transition-all duration-300", open ? "opacity-100" : "-rotate-90 scale-50 opacity-0")} />
        </button>
      </div>
      <div className={cn("grid transition-[grid-template-rows,opacity] duration-300 md:hidden", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className={cn("flex flex-col border-border bg-surface px-4", open && "border-t pb-5 pt-3")}>
            {LINKS.map((l) => (
              <Link key={l.href + l.label} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-md px-2 py-2.5 text-[15px] font-medium text-text hover:bg-background">
                {l.label}
                <ArrowRight className="h-4 w-4 text-text-muted" aria-hidden="true" />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white">
              Discuss a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
