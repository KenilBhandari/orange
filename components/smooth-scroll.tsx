"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import "lenis/dist/lenis.css";

function ScrollReset() {
  const lenis = useLenis();
  const pathname = usePathname();
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [lenis, pathname]);
  return null;
}

function useDesktopSmooth() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mq.matches && !motion.matches);
    update();
    mq.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);
  return enabled;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const enabled = useDesktopSmooth();
  const pathname = usePathname();

  // Phones and tablets use native scroll. Instant, no fight with momentum.
  useEffect(() => {
    if (!enabled) window.scrollTo(0, 0);
  }, [pathname, enabled]);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ autoRaf: true, lerp: 0.11, smoothWheel: true, anchors: { offset: -72 } }}
    >
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
