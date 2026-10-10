'use client';

import Link from 'next/link';
import { OrangeMark } from '@/components/logo';
import { WordmarkLockup } from '@/components/wordmark';

/**
 * Compact lockup. 28px mark on phones, 30px on desktop.
 */
export function NavLogo() {
  return (
    <Link
      href="/"
      aria-label="OrangeDev home"
      title="OrangeDev"
      className="group flex h-10 shrink-0 select-none items-center gap-2 rounded-full pr-2 transition-opacity duration-150 hover:opacity-75 active:opacity-60"
    >
      <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center sm:h-[30px] sm:w-[30px]">
        <OrangeMark progress={1} size={30} label="" />
      </span>
      <span aria-hidden="true" className="flex items-center text-[18px] leading-none sm:text-[19px]">
        <WordmarkLockup orangeFill="#EA580C" devFill="#1c1c1c" />
      </span>
    </Link>
  );
}
