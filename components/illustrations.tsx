const INK = "#1f1e1c";
const MUTED = "#78716c";
const FAINT = "#a8a29a";
const LINE = "#e6e1d6";
const PAPER = "#ffffff";
const CANVAS = "#f5f3ee";
const ROW = "#faf8f4";
const ORANGE = "#ea580c";
const GREEN_BG = "#e8f5ec";
const GREEN_TX = "#15803d";
const AMBER_BG = "#fdf0e2";
const AMBER_TX = "#b45309";

function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden bg-surface">
      <div className="flex items-center gap-2.5 border-b hairline px-3 py-2.5 sm:gap-3 sm:px-4">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ddd6c8] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#ddd6c8] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#ddd6c8] sm:h-2.5 sm:w-2.5" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-background px-3 py-1 text-center text-[11px] font-medium text-text-muted">
          {url}
        </span>
        <span className="hidden w-10 shrink-0 sm:block" aria-hidden="true" />
      </div>
      <div>{children}</div>
    </div>
  );
}

function Badge({ tone, children }: { tone: "green" | "amber" | "gray"; children: React.ReactNode }) {
  const bg = tone === "green" ? GREEN_BG : tone === "amber" ? AMBER_BG : "#f0ede6";
  const tx = tone === "green" ? GREEN_TX : tone === "amber" ? AMBER_TX : MUTED;
  return (
    <span
      style={{ background: bg, color: tx }}
      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] font-semibold"
    >
      <span style={{ background: tx }} className="h-1 w-1 rounded-full" aria-hidden="true" />
      {children}
    </span>
  );
}

export function CommerceArt() {
  return (
    <Frame url="store.orangedev.in/checkout">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Storefront and checkout interface">
        <rect width="560" height="340" fill={CANVAS} />
        {/* store nav */}
        <rect x="20" y="14" width="360" height="40" rx="8" fill={PAPER} stroke={LINE} />
        <rect x="34" y="27" width="14" height="14" rx="4" fill={ORANGE} />
        <text x="54" y="38" fontSize="11" fontWeight="700" fill={INK}>Store</text>
        <text x="104" y="38" fontSize="10" fill={MUTED}>Shop</text>
        <text x="140" y="38" fontSize="10" fill={MUTED}>Orders</text>
        <rect x="250" y="26" width="70" height="16" rx="8" fill={CANVAS} />
        <text x="260" y="37" fontSize="9" fill={FAINT}>Search…</text>
        <rect x="328" y="26" width="38" height="16" rx="4" fill={INK} />
        <text x="347" y="37" textAnchor="middle" fontSize="9" fontWeight="600" fill="#fff">Cart 3</text>
        {/* products */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${20 + i * 122} 64)`}>
            <rect width="114" height="150" rx="8" fill={PAPER} stroke={LINE} />
            <rect x="10" y="10" width="94" height="64" rx="6" fill={i === 1 ? "#fdeede" : ROW} stroke={LINE} />
            {i === 1 && <rect x="42" y="32" width="30" height="20" rx="4" fill={ORANGE} opacity="0.85" />}
            <text x="10" y="92" fontSize="10" fontWeight="600" fill={INK}>Product {i + 1}</text>
            <text x="10" y="105" fontSize="9" fill={MUTED}>In stock · SKU-0{i + 1}</text>
            <text x="10" y="122" fontSize="11" fontWeight="700" fill={INK}>₹ {(1420 + i * 380).toLocaleString("en-IN")}</text>
            <rect x="10" y="128" width="94" height="14" rx="4" fill={i === 1 ? INK : PAPER} stroke={LINE} />
            <text x="57" y="138" textAnchor="middle" fontSize="8" fontWeight="600" fill={i === 1 ? "#fff" : MUTED}>Add to cart</text>
          </g>
        ))}
        {/* summary */}
        <g transform="translate(398 14)">
          <rect width="142" height="236" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="24" fontSize="11" fontWeight="700" fill={INK}>Order summary</text>
          <text x="14" y="38" fontSize="9" fill={MUTED}>3 items · #ORD-2481</text>
          <line x1="14" y1="48" x2="128" y2="48" stroke={LINE} />
          {[["Subtotal", "₹ 4,280"], ["Delivery", "Free"], ["GST (5%)", "₹ 214"]].map(([k, v], i) => (
            <g key={k} transform={`translate(14 ${70 + i * 22})`}>
              <text fontSize="10" fill={MUTED}>{k}</text>
              <text x="114" textAnchor="end" fontSize="10" fontWeight="600" fill={INK}>{v}</text>
            </g>
          ))}
          <line x1="14" y1="140" x2="128" y2="140" stroke={LINE} />
          <text x="14" y="158" fontSize="10" fontWeight="600" fill={INK}>Total</text>
          <text x="128" y="158" textAnchor="end" fontSize="12" fontWeight="700" fill={INK}>₹ 4,494</text>
          <rect x="14" y="170" width="114" height="24" rx="6" fill={ORANGE} />
          <text x="71" y="185" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Checkout</text>
          <rect x="14" y="200" width="114" height="22" rx="6" fill={PAPER} stroke={LINE} />
          <text x="71" y="214" textAnchor="middle" fontSize="9" fontWeight="600" fill={MUTED}>Continue shopping</text>
        </g>
        <text x="20" y="300" fontSize="10" fill={MUTED}>Catalogue, cart and totals stay in sync — no dead ends.</text>
      </svg>
      {/* Mobile: stacked, large type — same story, readable at 360px. */}
      <svg viewBox="0 0 360 500" className="block h-auto w-full sm:hidden" role="img" aria-label="Storefront and checkout interface">
        <rect width="360" height="500" fill={CANVAS} />
        <rect x="16" y="12" width="328" height="44" rx="8" fill={PAPER} stroke={LINE} />
        <rect x="28" y="26" width="16" height="16" rx="4" fill={ORANGE} />
        <text x="50" y="39" fontSize="13" fontWeight="700" fill={INK}>Store</text>
        <text x="104" y="39" fontSize="11" fill={MUTED}>Shop</text>
        <text x="148" y="39" fontSize="11" fill={MUTED}>Orders</text>
        <rect x="256" y="24" width="76" height="20" rx="5" fill={INK} />
        <text x="294" y="38" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Cart 3</text>
        {[["Handloom scarf", "In stock · SKU-01", "₹ 1,420", 16], ["Brass lamp", "In stock · SKU-02", "₹ 1,800", 186]].map(([name, sub, price, x], i) => (
          <g key={name as string} transform={`translate(${x} 66)`}>
            <rect width="158" height="186" rx="8" fill={PAPER} stroke={LINE} />
            <rect x="12" y="12" width="134" height="84" rx="6" fill={i === 0 ? "#fdeede" : ROW} stroke={LINE} />
            {i === 0 && <rect x="64" y="44" width="30" height="20" rx="4" fill={ORANGE} opacity="0.85" />}
            <text x="12" y="114" fontSize="12" fontWeight="600" fill={INK}>{name}</text>
            <text x="12" y="129" fontSize="10" fill={MUTED}>{sub}</text>
            <text x="12" y="150" fontSize="14" fontWeight="700" fill={INK}>{price}</text>
            <rect x="12" y="156" width="134" height="20" rx="5" fill={i === 0 ? INK : PAPER} stroke={LINE} />
            <text x="79" y="170" textAnchor="middle" fontSize="10" fontWeight="600" fill={i === 0 ? "#fff" : MUTED}>Add to cart</text>
          </g>
        ))}
        <g transform="translate(16 262)">
          <rect width="328" height="196" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="13" fontWeight="700" fill={INK}>Order summary</text>
          <text x="314" y="26" textAnchor="end" fontSize="10" fill={MUTED}>#ORD-2481</text>
          <line x1="14" y1="52" x2="314" y2="52" stroke={LINE} />
          {[["Subtotal · 3 items", "₹ 4,280"], ["Delivery", "Free"], ["GST (5%)", "₹ 214"]].map(([k, v], i) => (
            <g key={k} transform={`translate(14 ${72 + i * 20})`}>
              <text fontSize="11" fill={MUTED}>{k}</text>
              <text x="300" textAnchor="end" fontSize="11" fontWeight="600" fill={INK}>{v}</text>
            </g>
          ))}
          <line x1="14" y1="124" x2="314" y2="124" stroke={LINE} />
          <text x="14" y="144" fontSize="12" fontWeight="600" fill={INK}>Total</text>
          <text x="314" y="144" textAnchor="end" fontSize="15" fontWeight="700" fill={INK}>₹ 4,494</text>
          <rect x="14" y="154" width="300" height="28" rx="6" fill={ORANGE} />
          <text x="164" y="172" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Checkout</text>
        </g>
        <text x="16" y="484" fontSize="11" fill={MUTED}>Catalogue, cart and totals stay in sync.</text>
      </svg>
    </Frame>
  );
}

export function PresenceArt() {
  return (
    <Frame url="client.co.uk/">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Website homepage interface">
        <rect width="560" height="340" fill={CANVAS} />
        <rect x="20" y="14" width="520" height="250" rx="8" fill={PAPER} stroke={LINE} />
        {/* nav */}
        <text x="40" y="44" fontSize="11" fontWeight="700" fill={INK}>Client</text>
        <text x="380" y="44" fontSize="9" fill={MUTED}>Work</text>
        <text x="414" y="44" fontSize="9" fill={MUTED}>About</text>
        <text x="452" y="44" fontSize="9" fill={MUTED}>Contact</text>
        <rect x="492" y="34" width="28" height="14" rx="4" fill={INK} />
        <line x1="40" y1="58" x2="520" y2="58" stroke={LINE} />
        {/* hero */}
        <text x="40" y="100" fontSize="24" fontWeight="700" fill={INK}>A presence with a purpose.</text>
        <text x="40" y="120" fontSize="11" fill={MUTED}>Considered type, clear hierarchy, nothing to decode.</text>
        <rect x="40" y="134" width="86" height="24" rx="6" fill={INK} />
        <text x="83" y="149" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Get started</text>
        <rect x="134" y="134" width="86" height="24" rx="6" fill={PAPER} stroke={LINE} />
        <text x="177" y="149" textAnchor="middle" fontSize="10" fontWeight="600" fill={MUTED}>See work</text>
        {/* columns */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${40 + i * 160} 176)`}>
            <rect width="146" height="68" rx="6" fill={ROW} stroke={LINE} />
            <rect x="12" y="12" width="60" height="8" rx="4" fill={INK} opacity="0.75" />
            <rect x="12" y="26" width="122" height="6" rx="3" fill={MUTED} opacity="0.4" />
            <rect x="12" y="36" width="100" height="6" rx="3" fill={MUTED} opacity="0.3" />
            <text x="12" y="58" fontSize="9" fontWeight="600" fill={MUTED}>Learn more →</text>
          </g>
        ))}
        <text x="20" y="300" fontSize="10" fill={MUTED}>Content-first pages with a structure readers can follow.</text>
      </svg>
      <svg viewBox="0 0 360 500" className="block h-auto w-full sm:hidden" role="img" aria-label="Website homepage interface">
        <rect width="360" height="500" fill={CANVAS} />
        <rect x="16" y="12" width="328" height="220" rx="8" fill={PAPER} stroke={LINE} />
        <text x="34" y="42" fontSize="13" fontWeight="700" fill={INK}>Client</text>
        <text x="296" y="42" fontSize="10" fill={MUTED}>Menu</text>
        <line x1="34" y1="56" x2="326" y2="56" stroke={LINE} />
        <text x="34" y="100" fontSize="25" fontWeight="700" fill={INK}>A presence</text>
        <text x="34" y="128" fontSize="25" fontWeight="700" fill={INK}>with a purpose.</text>
        <text x="34" y="150" fontSize="12" fill={MUTED}>Clear hierarchy, nothing to decode.</text>
        <rect x="34" y="162" width="292" height="28" rx="6" fill={INK} />
        <text x="180" y="180" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Get started</text>
        <rect x="34" y="196" width="292" height="28" rx="6" fill={PAPER} stroke={LINE} />
        <text x="180" y="214" textAnchor="middle" fontSize="11" fontWeight="600" fill={MUTED}>See work</text>
        {[["About the practice", 244], ["How we can help", 348]].map(([t, y]) => (
          <g key={t as string} transform={`translate(16 ${y})`}>
            <rect width="328" height="96" rx="8" fill={PAPER} stroke={LINE} />
            <rect x="16" y="16" width="72" height="10" rx="5" fill={INK} opacity="0.75" />
            <rect x="16" y="34" width="296" height="8" rx="4" fill={MUTED} opacity="0.4" />
            <rect x="16" y="48" width="240" height="8" rx="4" fill={MUTED} opacity="0.3" />
            <text x="16" y="78" fontSize="11" fontWeight="600" fill={MUTED}>Learn more →</text>
          </g>
        ))}
        <text x="16" y="484" fontSize="11" fill={MUTED}>Content-first pages readers can follow.</text>
      </svg>
    </Frame>
  );
}

export function TrippyArt() {
  return (
    <Frame url="trippy.orangedev.in/dispatch">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Transport dispatch board interface">
        <rect width="560" height="340" fill={CANVAS} />
        {/* map */}
        <g transform="translate(20 14)">
          <rect width="300" height="230" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="11" fontWeight="700" fill={INK}>Today · Route 04</text>
          <rect x="228" y="14" width="58" height="16" rx="8" fill={INK} />
          <text x="257" y="25" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">● LIVE</text>
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="14" y1={y} x2="286" y2={y} stroke={LINE} strokeDasharray="2 4" />
          ))}
          <path d="M30 190 C 90 190, 90 80, 150 80 S 210 140, 270 70" fill="none" stroke={INK} strokeOpacity="0.35" strokeWidth="2" />
          {[["A", 30, 190], ["B", 150, 80], ["C", 270, 70]].map(([label, x, y]) => (
            <g key={label as string} transform={`translate(${x} ${y})`}>
              <circle r="10" fill={label === "B" ? ORANGE : PAPER} stroke={label === "B" ? ORANGE : MUTED} strokeWidth="1.5" />
              <text y="3.5" textAnchor="middle" fontSize="9" fontWeight="700" fill={label === "B" ? "#fff" : INK}>{label}</text>
            </g>
          ))}
          <text x="14" y="222" fontSize="9" fill={MUTED}>14 stops · 3 vehicles · updated 2 min ago</text>
        </g>
        {/* fleet list */}
        <g transform="translate(330 14)">
          {[["MH-04 · On route", "A → C · 42 min left", "green", 72], ["MH-11 · Loading", "Depot 2 · 10 min", "amber", 38], ["MH-07 · Scheduled", "Depot 1 · 08:30", "gray", 12]].map(([t, s, tone, w], i) => (
            <g key={t as string} transform={`translate(0 ${i * 80})`}>
              <rect width="210" height="70" rx="8" fill={PAPER} stroke={LINE} />
              <text x="12" y="24" fontSize="10" fontWeight="700" fill={INK}>{t}</text>
              <text x="12" y="38" fontSize="9" fill={MUTED}>{s}</text>
              <rect x="12" y="46" width="120" height="5" rx="2.5" fill={CANVAS} />
              <rect x="12" y="46" width={(120 * (w as number)) / 100} height="5" rx="2.5" fill={tone === "green" ? "#16a34a" : tone === "amber" ? ORANGE : FAINT} />
              <text x="198" y="50" textAnchor="end" fontSize="9" fontWeight="600" fill={MUTED}>{w}%</text>
            </g>
          ))}
        </g>
        <text x="20" y="300" fontSize="10" fill={MUTED}>Live dispatch with honest status — no phone chaos.</text>
      </svg>
      <svg viewBox="0 0 360 560" className="block h-auto w-full sm:hidden" role="img" aria-label="Transport dispatch board interface">
        <rect width="360" height="560" fill={CANVAS} />
        <g transform="translate(16 12)">
          <rect width="328" height="196" rx="8" fill={PAPER} stroke={LINE} />
          <text x="16" y="30" fontSize="13" fontWeight="700" fill={INK}>Today · Route 04</text>
          <rect x="252" y="16" width="60" height="18" rx="9" fill={INK} />
          <text x="282" y="29" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">● LIVE</text>
          {[56, 88, 120, 152].map((y) => (
            <line key={y} x1="16" y1={y} x2="312" y2={y} stroke={LINE} strokeDasharray="2 4" />
          ))}
          <path d="M36 168 C 100 168, 100 60, 164 60 S 230 120, 292 56" fill="none" stroke={INK} strokeOpacity="0.35" strokeWidth="2" />
          {[["A", 36, 168], ["B", 164, 60], ["C", 292, 56]].map(([label, x, y]) => (
            <g key={label as string} transform={`translate(${x} ${y})`}>
              <circle r="11" fill={label === "B" ? ORANGE : PAPER} stroke={label === "B" ? ORANGE : MUTED} strokeWidth="1.5" />
              <text y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill={label === "B" ? "#fff" : INK}>{label}</text>
            </g>
          ))}
        </g>
        {[["MH-04 · On route", "A → C · 42 min left", 72, "#16a34a"], ["MH-11 · Loading", "Depot 2 · 10 min", 38, ORANGE], ["MH-07 · Scheduled", "Depot 1 · 08:30", 12, FAINT]].map(([t, s, w, c], i) => (
          <g key={t as string} transform={`translate(16 ${220 + i * 100})`}>
            <rect width="328" height="90" rx="8" fill={PAPER} stroke={LINE} />
            <text x="16" y="30" fontSize="13" fontWeight="700" fill={INK}>{t}</text>
            <text x="16" y="48" fontSize="11" fill={MUTED}>{s}</text>
            <rect x="16" y="58" width="220" height="6" rx="3" fill={CANVAS} />
            <rect x="16" y="58" width={(220 * (w as number)) / 100} height="6" rx="3" fill={c as string} />
            <text x="312" y="64" textAnchor="end" fontSize="11" fontWeight="600" fill={MUTED}>{w}%</text>
          </g>
        ))}
        <text x="16" y="540" fontSize="11" fill={MUTED}>Live dispatch with honest status.</text>
      </svg>
    </Frame>
  );
}

export function PayrollArt() {
  const rows: Array<[string, string, string, string, "green" | "amber"]> = [
    ["AM", "A. Mason · #EMP-014", "26/26 days", "Paid", "green"],
    ["SH", "S. Helper · #EMP-089", "Advance due", "Review", "amber"],
    ["RF", "R. Fitter · #EMP-132", "OT 12h", "Ready", "green"],
    ["KM", "K. Mazdoor · #EMP-207", "3 half-days", "Review", "amber"],
  ];
  return (
    <Frame url="payroll.orangedev.in/runs/march">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Payroll run interface">
        <rect width="560" height="340" fill={CANVAS} />
        <g transform="translate(20 14)">
          <rect width="330" height="250" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="11" fontWeight="700" fill={INK}>March cycle</text>
          <text x="316" y="26" textAnchor="end" fontSize="9" fill={MUTED}>500+ workers</text>
          <line x1="0" y1="38" x2="330" y2="38" stroke={LINE} />
          <text x="48" y="54" fontSize="8" fontWeight="600" fill={FAINT}>EMPLOYEE</text>
          <text x="200" y="54" fontSize="8" fontWeight="600" fill={FAINT}>ATTENDANCE</text>
          <text x="272" y="54" fontSize="8" fontWeight="600" fill={FAINT}>STATUS</text>
          {rows.map(([init, name, att, st, tone], i) => (
            <g key={name} transform={`translate(0 ${64 + i * 48})`}>
              {i > 0 && <line x1="14" y1="0" x2="316" y2="0" stroke={LINE} opacity="0.6" />}
              <circle cx="28" cy="22" r="12" fill={ROW} stroke={LINE} />
              <text x="28" y="26" textAnchor="middle" fontSize="8" fontWeight="700" fill={MUTED}>{init}</text>
              <text x="48" y="20" fontSize="10" fontWeight="600" fill={INK}>{name}</text>
              <text x="48" y="32" fontSize="9" fill={MUTED}>{att}</text>
              <rect x="200" y="14" width="56" height="5" rx="2.5" fill={CANVAS} />
              <rect x="200" y="14" width={i === 0 ? 56 : 34} height="5" rx="2.5" fill={i % 2 ? ORANGE : "#16a34a"} opacity="0.85" />
              <g transform="translate(272 12)">
                <rect width="44" height="18" rx="9" fill={tone === "green" ? GREEN_BG : AMBER_BG} />
                <circle cx="10" cy="9" r="3" fill={tone === "green" ? GREEN_TX : AMBER_TX} />
                <text x="26" y="12.5" textAnchor="middle" fontSize="8" fontWeight="700" fill={tone === "green" ? GREEN_TX : AMBER_TX}>{st}</text>
              </g>
            </g>
          ))}
        </g>
        <g transform="translate(360 14)">
          <rect width="180" height="250" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="9" fontWeight="600" fill={MUTED}>NET PAYABLE</text>
          <text x="14" y="52" fontSize="22" fontWeight="700" fill={INK}>₹ 86.4L</text>
          <text x="14" y="68" fontSize="9" fill={MUTED}>● Verified · ready to pay</text>
          {[["Basic", 82], ["Overtime", 45], ["Deductions", 30]].map(([k, w], i) => (
            <g key={k as string} transform={`translate(14 ${88 + i * 28})`}>
              <text fontSize="9" fill={MUTED}>{k}</text>
              <text x="152" textAnchor="end" fontSize="9" fontWeight="600" fill={INK}>{w}%</text>
              <rect y="8" width="152" height="5" rx="2.5" fill={CANVAS} />
              <rect y="8" width={(152 * (w as number)) / 100} height="5" rx="2.5" fill={i === 1 ? ORANGE : INK} opacity={i === 1 ? 1 : 0.8} />
            </g>
          ))}
          <rect x="14" y="188" width="152" height="26" rx="6" fill={ORANGE} />
          <text x="90" y="205" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Approve run</text>
          <rect x="14" y="220" width="152" height="22" rx="6" fill={PAPER} stroke={LINE} />
          <text x="90" y="234" textAnchor="middle" fontSize="9" fontWeight="600" fill={MUTED}>Export statement</text>
        </g>
      </svg>
      <svg viewBox="0 0 360 560" className="block h-auto w-full sm:hidden" role="img" aria-label="Payroll run interface">
        <rect width="360" height="560" fill={CANVAS} />
        <g transform="translate(16 12)">
          <rect width="328" height="150" rx="8" fill={PAPER} stroke={LINE} />
          <text x="16" y="28" fontSize="11" fontWeight="600" fill={MUTED}>NET PAYABLE · MARCH</text>
          <text x="16" y="62" fontSize="28" fontWeight="700" fill={INK}>₹ 86.4L</text>
          <text x="16" y="82" fontSize="11" fill={MUTED}>● Verified · ready to pay</text>
          <rect x="16" y="94" width="296" height="40" rx="7" fill={ORANGE} />
          <text x="164" y="119" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">Approve run</text>
        </g>
        <g transform="translate(16 174)">
          <rect width="328" height="352" rx="8" fill={PAPER} stroke={LINE} />
          <text x="16" y="30" fontSize="13" fontWeight="700" fill={INK}>March cycle</text>
          <text x="312" y="30" textAnchor="end" fontSize="10" fill={MUTED}>500+ workers</text>
          <line x1="0" y1="44" x2="328" y2="44" stroke={LINE} />
          {[["A. Mason · #EMP-014", "26/26 days", "Paid", true], ["S. Helper · #EMP-089", "Advance due", "Review", false], ["R. Fitter · #EMP-132", "OT 12h", "Ready", true]].map(([name, att, st, ok], i) => (
            <g key={name as string} transform={`translate(0 ${58 + i * 98})`}>
              {i > 0 && <line x1="16" y1="0" x2="312" y2="0" stroke={LINE} opacity="0.6" />}
              <circle cx="34" cy="34" r="15" fill={ROW} stroke={LINE} />
              <text x="58" y="30" fontSize="13" fontWeight="600" fill={INK}>{name}</text>
              <text x="58" y="47" fontSize="11" fill={MUTED}>{att}</text>
              <rect x="58" y="56" width="150" height="6" rx="3" fill={CANVAS} />
              <rect x="58" y="56" width={ok ? 150 : 92} height="6" rx="3" fill={ok ? "#16a34a" : ORANGE} opacity="0.85" />
              <g transform="translate(238 20)">
                <rect width="62" height="24" rx="12" fill={ok ? GREEN_BG : AMBER_BG} />
                <circle cx="13" cy="12" r="4" fill={ok ? GREEN_TX : AMBER_TX} />
                <text x="38" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill={ok ? GREEN_TX : AMBER_TX}>{st}</text>
              </g>
            </g>
          ))}
        </g>
      </svg>
    </Frame>
  );
}

export function ErpArt() {
  return (
    <Frame url="erp.orangedev.in/overview">
      <svg viewBox="0 0 560 360" className="hidden h-auto w-full sm:block" role="img" aria-label="Contractor ERP overview interface">
        <rect width="560" height="360" fill={CANVAS} />
        {/* KPI row */}
        {[["Active projects", "18", "+2"], ["Open sites", "7", "±0"], ["Workers today", "412", "+18"], ["Stock alerts", "3", "-1"]].map(([k, v, d], i) => (
          <g key={k} transform={`translate(${20 + i * 130} 14)`}>
            <rect width="122" height="64" rx="8" fill={PAPER} stroke={LINE} />
            <text x="12" y="22" fontSize="8" fontWeight="600" fill={MUTED}>{k.toUpperCase()}</text>
            <text x="12" y="44" fontSize="17" fontWeight="700" fill={INK}>{v}</text>
            <text x="96" y="44" textAnchor="end" fontSize="9" fontWeight="600" fill={d.startsWith("+") ? GREEN_TX : MUTED}>{d}</text>
          </g>
        ))}
        {/* chart */}
        <g transform="translate(20 88)">
          <rect width="330" height="180" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="11" fontWeight="700" fill={INK}>Site progress</text>
          <text x="316" y="26" textAnchor="end" fontSize="9" fill={MUTED}>Last 7 days</text>
          {[42, 68, 52, 88, 64, 96, 74].map((h, i) => (
            <rect key={i} x={20 + i * 42} y={150 - h} width="26" height={h} rx="4" fill={i === 3 ? ORANGE : "#1f1e1c"} opacity={i === 3 ? 1 : 0.12 + (h / 220)} />
          ))}
          <line x1="14" y1="150" x2="316" y2="150" stroke={LINE} />
        </g>
        {/* modules */}
        <g transform="translate(360 88)">
          <rect width="180" height="180" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="11" fontWeight="700" fill={INK}>Modules</text>
          {[["Labour · muster", 48], ["Materials · stock", 74], ["Expenses", 61], ["Client billing", 83]].map(([t, p], i) => (
            <g key={t as string} transform={`translate(14 ${44 + i * 32})`}>
              <text fontSize="9" fontWeight="600" fill={INK}>{t}</text>
              <text x="152" textAnchor="end" fontSize="9" fill={MUTED}>{p}%</text>
              <rect y="8" width="152" height="4" rx="2" fill={CANVAS} />
              <rect y="8" width={(152 * (p as number)) / 100} height="4" rx="2" fill={INK} opacity="0.7" />
            </g>
          ))}
        </g>
        <text x="20" y="316" fontSize="10" fill={MUTED}>Projects, labour, materials and money — one coherent system.</text>
      </svg>
      <svg viewBox="0 0 360 620" className="block h-auto w-full sm:hidden" role="img" aria-label="Contractor ERP overview interface">
        <rect width="360" height="620" fill={CANVAS} />
        {[["Active projects", "18", "+2", 16, 12], ["Open sites", "7", "±0", 186, 12], ["Workers today", "412", "+18", 16, 88], ["Stock alerts", "3", "-1", 186, 88]].map(([k, v, d, x, y]) => (
          <g key={k as string} transform={`translate(${x} ${y})`}>
            <rect width="158" height="68" rx="8" fill={PAPER} stroke={LINE} />
            <text x="14" y="24" fontSize="9" fontWeight="600" fill={MUTED}>{(k as string).toUpperCase()}</text>
            <text x="14" y="50" fontSize="20" fontWeight="700" fill={INK}>{v}</text>
            <text x="144" y="50" textAnchor="end" fontSize="10" fontWeight="600" fill={(d as string).startsWith("+") ? GREEN_TX : MUTED}>{d}</text>
          </g>
        ))}
        <g transform="translate(16 168)">
          <rect width="328" height="196" rx="8" fill={PAPER} stroke={LINE} />
          <text x="16" y="30" fontSize="13" fontWeight="700" fill={INK}>Site progress</text>
          <text x="312" y="30" textAnchor="end" fontSize="10" fill={MUTED}>Last 7 days</text>
          {[46, 72, 56, 92, 66, 100, 78].map((h, i) => (
            <rect key={i} x={22 + i * 42} y={166 - h} width="28" height={h} rx="4" fill={i === 3 ? ORANGE : "#1f1e1c"} opacity={i === 3 ? 1 : 0.12 + (h / 220)} />
          ))}
          <line x1="16" y1="166" x2="312" y2="166" stroke={LINE} />
        </g>
        <g transform="translate(16 376)">
          <rect width="328" height="196" rx="8" fill={PAPER} stroke={LINE} />
          <text x="16" y="30" fontSize="13" fontWeight="700" fill={INK}>Modules</text>
          {[["Labour · muster", 48], ["Materials · stock", 74], ["Expenses", 61], ["Client billing", 83]].map(([t, p], i) => (
            <g key={t as string} transform={`translate(16 ${48 + i * 34})`}>
              <text fontSize="11" fontWeight="600" fill={INK}>{t}</text>
              <text x="280" textAnchor="end" fontSize="11" fill={MUTED}>{p}%</text>
              <rect y="8" width="280" height="5" rx="2.5" fill={CANVAS} />
              <rect y="8" width={(280 * (p as number)) / 100} height="5" rx="2.5" fill={INK} opacity="0.7" />
            </g>
          ))}
        </g>
        <text x="16" y="600" fontSize="11" fill={MUTED}>Projects, labour, materials, money.</text>
      </svg>
    </Frame>
  );
}

export { Badge };
