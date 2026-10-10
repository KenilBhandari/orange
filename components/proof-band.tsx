const FACTS = [
  "Established 2022",
  "E-commerce storefronts",
  "UK web development",
  "Transport management",
  "Payroll for 500+ workers",
  "ERP for contractors",
];

/** Brand band directly under the hero — the first full-colour Act II moment. */
export function ProofBand() {
  return (
    <section
      aria-label="Capabilities at a glance"
      className="proof-band relative overflow-hidden border-b hairline text-white"
    >
      <div className="marquee py-4 sm:py-5">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center"
          >
            {FACTS.map((f) => (
              <li
                key={f}
                className="flex items-center gap-7 whitespace-nowrap px-7 text-[13px] font-bold uppercase tracking-[0.2em] sm:text-sm"
              >
                {f}
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
