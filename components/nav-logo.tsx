'use client';

import Link from 'next/link';
import { OrangeMark } from '@/components/logo';
import { WordmarkLockup } from '@/components/wordmark';

/**
 * Clean lockup — 30px mark + 19px wordmark, optically centered.
 * Single flex row, no shadows, no nudges. The mark's viewBox has
 * built-in padding so 30px renders like 26px of ink.
 */
export function NavLogo() {
  return (
    <Link
      href="/"
      aria-label="OrangeDev home"
      title="OrangeDev"
      className="group flex h-10 shrink-0 select-none items-center gap-[10px] rounded-full pr-2 transition-opacity duration-200 hover:opacity-75"
    >
      <span aria-hidden="true" className="flex h-[30px] w-[30px] items-center justify-center">
        <OrangeMark progress={1} size={30} label="" />
      </span>
      <span aria-hidden="true" className="flex items-center text-[19px] leading-none">
        <WordmarkLockup orangeFill="#EA580C" devFill="#1c1c1c" />
      </span>
    </Link>
  );
}
