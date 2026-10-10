const FACTS = [
  "Established 2022",
  "E-commerce storefronts",
  "UK web development",
  "Transport management",
  "Payroll for 500+ workers",
  "ERP for contractors",
];

/** Quiet strip under the hero — capabilities at a glance. */
export function ProofBand() {
  return (
    <section
      aria-label="Capabilities at a glance"
      className="relative overflow-hidden border-b hairline bg-surface"
    >
      <div className="marquee-mask">
        <div className="marquee py-3.5">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex shrink-0 items-center"
            >
              {FACTS.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-6 whitespace-nowrap px-6 text-[12px] font-medium uppercase tracking-[0.1em] text-text-muted"
                >
                  {f}
                  <span className="h-1 w-1 shrink-0 rounded-full bg-text-muted/40" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
