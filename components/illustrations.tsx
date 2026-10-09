const INK = "#171717";
const MUTED = "#737373";
const LINE = "#E7E5E4";
const ORANGE = "#EA580C";
const GREEN = "#00BE63";
const PAPER = "#FFFFFF";
const WARM = "#FAF7F1";

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border hairline bg-surface">
      <div className="flex items-center gap-1.5 border-b hairline bg-background px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="ml-2 truncate text-xs text-text-muted">{label}</span>
      </div>
      <div className="bg-surface">{children}</div>
      <p className="border-t hairline px-4 py-2 text-[11px] uppercase tracking-widest text-text-muted">
        Conceptual illustration — not a client screenshot
      </p>
    </div>
  );
}

export function CommerceArt() {
  return (
    <Frame label="store — checkout">
      <svg viewBox="0 0 560 360" className="block h-auto w-full" role="img" aria-label="Conceptual e-commerce storefront and checkout illustration">
        <rect width="560" height="360" fill={PAPER} />
        <rect x="28" y="24" width="220" height="18" rx="4" fill={INK} opacity="0.9" />
        <rect x="28" y="50" width="140" height="10" rx="5" fill={MUTED} opacity="0.5" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${28 + i * 112} 84)`}>
            <rect width="100" height="86" rx="10" fill={WARM} stroke={LINE} />
            <rect x="14" y="14" width="72" height="34" rx="6" fill={i === 1 ? ORANGE : INK} opacity={i === 1 ? 0.9 : 0.12} />
            <rect x="14" y="56" width="60" height="8" rx="4" fill={INK} opacity="0.7" />
            <rect x="14" y="68" width="36" height="8" rx="4" fill={MUTED} opacity="0.6" />
          </g>
        ))}
        <g transform="translate(384 84)">
          <rect width="148" height="190" rx="12" fill={WARM} stroke={LINE} />
          <text x="16" y="28" fontSize="12" fontWeight="700" fill={INK} fontFamily="inherit">Summary</text>
          {[["Items (3)", "₹ 4,280"], ["Delivery", "Free"], ["Total", "₹ 4,280"]].map(([k, v], i) => (
            <g key={k} transform={`translate(16 ${56 + i * 30})`}>
              <text fontSize="11" fill={i === 2 ? INK : MUTED} fontWeight={i === 2 ? 700 : 400}>{k}</text>
              <text x="116" textAnchor="end" fontSize="11" fontWeight="700" fill={i === 2 ? ORANGE : INK}>{v}</text>
            </g>
          ))}
          <rect x="16" y="150" width="116" height="26" rx="7" fill={ORANGE} />
          <text x="74" y="167" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Checkout</text>
        </g>
        <text x="28" y="330" fontSize="11" fill={MUTED}>Simple catalogue → cart → pay. Nothing to learn.</text>
      </svg>
    </Frame>
  );
}

export function PresenceArt() {
  return (
    <Frame label="publication — homepage">
      <svg viewBox="0 0 560 360" className="block h-auto w-full" role="img" aria-label="Conceptual website layout illustration">
        <rect width="560" height="360" fill={PAPER} />
        <rect x="28" y="24" width="504" height="10" rx="5" fill={LINE} />
        <text x="28" y="80" fontSize="30" fontWeight="700" fill={INK} fontFamily="Georgia, serif">A presence with a purpose.</text>
        <text x="28" y="104" fontSize="12" fill={MUTED}>Considered type, clear hierarchy, no noise.</text>
        <rect x="28" y="124" width="120" height="28" rx="7" fill={INK} />
        <rect x="156" y="124" width="120" height="28" rx="7" fill="none" stroke={INK} strokeOpacity="0.25" />
        <g transform="translate(28 176)">
          <rect width="250" height="140" rx="12" fill={WARM} stroke={LINE} />
          <rect x="18" y="18" width="150" height="12" rx="6" fill={INK} opacity="0.8" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="18" y={44 + i * 20} width={200 - i * 28} height="8" rx="4" fill={MUTED} opacity="0.45" />
          ))}
        </g>
        <g transform="translate(292 176)">
          <rect width="240" height="140" rx="12" fill={INK} />
          <text x="20" y="44" fontSize="22" fill="#fff" fontFamily="Georgia, serif">Aa</text>
          <text x="20" y="70" fontSize="11" fill="#fff" opacity="0.7">Display / Text / Caption</text>
          <rect x="20" y="88" width="120" height="10" rx="5" fill={ORANGE} />
          <rect x="20" y="106" width="80" height="10" rx="5" fill="#fff" opacity="0.35" />
        </g>
      </svg>
    </Frame>
  );
}

export function TrippyArt() {
  return (
    <Frame label="trippy — dispatch board">
      <svg viewBox="0 0 560 360" className="block h-auto w-full" role="img" aria-label="Conceptual transport dispatch illustration">
        <rect width="560" height="360" fill={PAPER} />
        <g transform="translate(28 28)">
          <rect width="300" height="200" rx="12" fill={WARM} stroke={LINE} />
          <path d="M30 160 C 90 160, 90 60, 150 60 S 210 120, 270 60" fill="none" stroke={INK} strokeOpacity="0.3" strokeWidth="2" strokeDasharray="6 6" />
          {[["A", 30, 160], ["B", 150, 60], ["C", 270, 60]].map(([label, x, y]) => (
            <g key={label as string} transform={`translate(${x} ${y})`}>
              <circle r="11" fill={label === "B" ? ORANGE : PAPER} stroke={label === "B" ? ORANGE : INK} strokeOpacity={label === "B" ? 1 : 0.3} />
              <text y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill={label === "B" ? "#fff" : INK}>{label}</text>
            </g>
          ))}
          <rect x="20" y="20" width="110" height="22" rx="11" fill={INK} />
          <text x="75" y="35" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">ROUTE 04 · LIVE</text>
        </g>
        <g transform="translate(344 28)">
          {[["MH-04 · On route", GREEN], ["MH-11 · Loading", ORANGE], ["MH-07 · Scheduled", MUTED]].map(([t, c], i) => (
            <g key={t as string} transform={`translate(0 ${i * 68})`}>
              <rect width="188" height="56" rx="10" fill={PAPER} stroke={LINE} />
              <circle cx="20" cy="28" r="6" fill={c as string} />
              <text x="34" y="32" fontSize="11" fontWeight="600" fill={INK}>{t}</text>
            </g>
          ))}
        </g>
        <text x="28" y="330" fontSize="11" fill={MUTED}>Movement, coordination, control — without the phone chaos.</text>
      </svg>
    </Frame>
  );
}

export function PayrollArt() {
  return (
    <Frame label="payroll — run & approve">
      <svg viewBox="0 0 560 360" className="block h-auto w-full" role="img" aria-label="Conceptual payroll processing illustration">
        <rect width="560" height="360" fill={PAPER} />
        <g transform="translate(28 28)">
          <rect width="320" height="230" rx="12" fill={PAPER} stroke={LINE} />
          <text x="18" y="30" fontSize="12" fontWeight="700" fill={INK}>March cycle · 500+ workers</text>
          {[["A. Mason", "Present 26/26", "Paid", GREEN], ["S. Helper", "Advance due", "Review", ORANGE], ["R. Fitter", "OT 12h", "Ready", GREEN], ["K. Mazdoor", "Half-days 3", "Review", ORANGE]].map(([n, m, s, c], i) => (
            <g key={n as string} transform={`translate(18 ${52 + i * 44})`}>
              <rect width="284" height="36" rx="8" fill={WARM} />
              <text x="12" y="16" fontSize="11" fontWeight="700" fill={INK}>{n}</text>
              <text x="12" y="29" fontSize="10" fill={MUTED}>{m}</text>
              <rect x="206" y="8" width="66" height="20" rx="10" fill={c as string} />
              <text x="239" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">{s}</text>
            </g>
          ))}
        </g>
        <g transform="translate(364 28)">
          <rect width="168" height="230" rx="12" fill={INK} />
          <text x="18" y="32" fontSize="11" fontWeight="700" fill="#fff">Net payable</text>
          <text x="18" y="66" fontSize="24" fontWeight="700" fill="#fff">₹ 86.4L</text>
          <text x="18" y="86" fontSize="10" fill="#fff" opacity="0.6">Verified · ready to pay</text>
          {[70, 45, 82].map((w, i) => (
            <rect key={i} x="18" y={108 + i * 22} width={w * 1.3} height="10" rx="5" fill={i === 1 ? ORANGE : "#fff"} opacity={i === 1 ? 1 : 0.3} />
          ))}
          <rect x="18" y="184" width="132" height="26" rx="7" fill={ORANGE} />
          <text x="84" y="201" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Approve run</text>
        </g>
      </svg>
    </Frame>
  );
}

export function ErpArt() {
  return (
    <Frame label="contractor erp — connected operations">
      <svg viewBox="0 0 560 400" className="block h-auto w-full" role="img" aria-label="Conceptual contractor ERP modules illustration">
        <rect width="560" height="400" fill={PAPER} />
        <g transform="translate(196 150)">
          <rect x="-90" y="-52" width="180" height="104" rx="14" fill={INK} />
          <text y="-8" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Operations</text>
          <text y="12" textAnchor="middle" fontSize="10" fill="#fff" opacity="0.65">One coherent system</text>
          <rect x="-34" y="22" width="68" height="8" rx="4" fill={ORANGE} />
        </g>
        {[
          { t: "Projects", x: 28, y: 28, p: 65 },
          { t: "Sites · 7", x: 364, y: 28, p: 82 },
          { t: "Labour · muster", x: 28, y: 262, p: 48 },
          { t: "Materials · stock", x: 364, y: 262, p: 74 },
        ].map(({ t, x, y, p }) => (
          <g key={t} transform={`translate(${x} ${y})`}>
            <rect width="168" height="96" rx="12" fill={WARM} stroke={LINE} />
            <text x="14" y="26" fontSize="11" fontWeight="700" fill={INK}>{t}</text>
            <rect x="14" y="44" width="140" height="8" rx="4" fill={INK} opacity="0.12" />
            <rect x="14" y="44" width={(140 * p) / 100} height="8" rx="4" fill={ORANGE} />
            <text x="14" y="70" fontSize="10" fill={MUTED}>{p}% in sync</text>
          </g>
        ))}
        <g stroke={INK} strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="5 5">
          <line x1="150" y1="90" x2="210" y2="160" />
          <line x1="410" y1="90" x2="350" y2="160" />
          <line x1="150" y1="300" x2="210" y2="230" />
          <line x1="410" y1="300" x2="350" y2="230" />
        </g>
      </svg>
    </Frame>
  );
}
