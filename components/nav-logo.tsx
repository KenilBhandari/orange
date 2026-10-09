'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { OrangeMark } from '@/components/logo';
import { WordmarkLockup } from '@/components/wordmark';
import styles from './nav-logo.module.css';

/* Kodees-style reveal: expand shortly after landing on home, hold, retract.
   Hover or keyboard focus expands it anywhere. */
const INTRO_DELAY = 600;
const HOLD_MS = 1400;

export function NavLogo() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const timers = useRef<number[]>([]);
  const hovering = useRef(false);

  useEffect(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    hovering.current = false;
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOpen(true);
      return;
    }
    timers.current = [
      window.setTimeout(() => setOpen(true), INTRO_DELAY),
      window.setTimeout(() => {
        if (!hovering.current) setOpen(false);
      }, INTRO_DELAY + 500 + HOLD_MS),
    ];
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [pathname]);

  return (
    <Link
      href="/"
      className={styles.logo}
      data-open={open}
      aria-label="OrangeDev home"
      title="OrangeDev"
      onMouseEnter={() => {
        hovering.current = true;
        setOpen(true);
      }}
      onMouseLeave={() => {
        hovering.current = false;
        setOpen(false);
      }}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span className={styles.mark} aria-hidden="true">
        <OrangeMark progress={1} size={30} label="" />
      </span>
      <span className={styles.slider} aria-hidden="true">
        <span className={styles.clip}>
          <span className={styles.word}>
            <WordmarkLockup orangeFill="#EA580C" devFill="#1c1c1c" />
          </span>
        </span>
      </span>
    </Link>
  );
}
