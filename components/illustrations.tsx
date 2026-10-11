const INK = "#1f1e1c";
const MUTED = "#78716c";
const FAINT = "#a8a29a";
const LINE = "#e6e1d6";
const PAPER = "#ffffff";
const CANVAS = "#f5f3ee";
const ROW = "#faf8f4";
const ORANGE = "#ea580c";
const BLUE = "#2563eb";
const BLUE_BG = "#e8eefc";
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
        <span className="min-w-0 flex-1 truncate rounded-lg bg-background px-3 py-1 text-center text-[11px] font-medium text-text-muted">
          {url}
        </span>
        <span className="hidden w-10 shrink-0 sm:block" aria-hidden="true" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export function CommerceArt() {
  const products: Array<[string, string, string]> = [
    ["Essence Mascara", "★ 2.56 · Essence", "₹ 9.99"],
    ["Eyeshadow Palette", "★ 2.86 · Glamour", "₹ 19.99"],
    ["Powder Canister", "★ 4.64 · Velvet", "₹ 14.99"],
  ];
  const tabs = ["DASHBOARD", "PRODUCTS", "CART", "PROFILE"];
  return (
    <Frame url="store.orangedev.in/products">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Commerce storefront with tabs, overview and product grid">
        <rect width="560" height="340" fill={CANVAS} />
        {/* tab bar */}
        <g transform="translate(20 12)">
          <rect width="360" height="36" rx="8" fill={PAPER} stroke={LINE} />
          {tabs.map((t, i) => (
            <g key={t} transform={`translate(${14 + i * 88} 0)`}>
              <text y="16" fontSize="8" fontWeight="700" fill={i === 1 ? BLUE : FAINT}>{t}</text>
              {i === 1 && <rect y="24" width="52" height="3" rx="1.5" fill={BLUE} />}
            </g>
          ))}
          <rect x="296" y="8" width="52" height="20" rx="10" fill={BLUE_BG} />
          <text x="322" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill={BLUE}>Hi, kenil</text>
        </g>
        <g transform="translate(20 60)">
          <rect width="360" height="86" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="22" fontSize="8" fontWeight="700" fill={BLUE}>OVERVIEW</text>
          <text x="14" y="42" fontSize="14" fontWeight="700" fill={INK}>Welcome, kenil.</text>
          <text x="14" y="58" fontSize="9" fill={MUTED}>Track inventory, carts, storefront.</text>
          <rect x="230" y="20" width="116" height="46" rx="6" fill={ROW} stroke={LINE} />
          <text x="242" y="38" fontSize="8" fill={MUTED}>CART ITEMS · 5</text>
          <text x="242" y="54" fontSize="10" fontWeight="700" fill={INK}>₹ 4205.32</text>
        </g>
        {/* KPI cards */}
        <g transform="translate(392 12)">
          <rect width="148" height="62" rx="8" fill={PAPER} stroke={LINE} />
          <text x="12" y="20" fontSize="8" fill={MUTED}>CART ITEMS</text>
          <text x="12" y="44" fontSize="20" fontWeight="700" fill={INK}>5</text>
          <rect y="70" width="148" height="62" rx="8" fill={PAPER} stroke={LINE} />
          <text x="12" y="90" fontSize="8" fill={MUTED}>CART VALUE</text>
          <text x="12" y="112" fontSize="16" fontWeight="700" fill={INK}>₹ 4205.32</text>
          <rect y="140" width="148" height="86" rx="8" fill={PAPER} stroke={LINE} />
          <text x="12" y="160" fontSize="8" fontWeight="700" fill={BLUE}>QUICK ACTIONS</text>
          {["Browse products", "Review cart"].map((a, i) => (
            <g key={a} transform={`translate(12 ${170 + i * 26})`}>
              <rect width="124" height="20" rx="5" fill={ROW} stroke={LINE} />
              <text x="10" y="14" fontSize="9" fontWeight="600" fill={INK}>{a}</text>
            </g>
          ))}
        </g>
        {/* products */}
        {products.map(([name, sub, price], i) => (
          <g key={name} transform={`translate(${20 + i * 122} 178)`}>
            <rect width="114" height="146" rx="8" fill={PAPER} stroke={LINE} />
            <rect x="10" y="10" width="94" height="52" rx="6" fill={ROW} stroke={LINE} />
            <rect x="38" y="28" width="38" height="16" rx="4" fill={INK} opacity="0.12" />
            <text x="10" y="78" fontSize="7" fontWeight="600" fill={FAINT}>BEAUTY</text>
            <text x="10" y="90" fontSize="9" fontWeight="600" fill={INK}>{name.split(" ")[0]}</text>
            <text x="10" y="101" fontSize="9" fontWeight="600" fill={INK}>{name.split(" ").slice(1).join(" ") || " "}</text>
            <text x="10" y="113" fontSize="9" fontWeight="700" fill={INK}>{price}</text>
            <rect x="10" y="120" width="46" height="16" rx="4" fill={PAPER} stroke={LINE} />
            <text x="33" y="131" textAnchor="middle" fontSize="7" fontWeight="600" fill={MUTED}>DETAILS</text>
            <rect x="58" y="120" width="46" height="16" rx="4" fill={INK} />
            <text x="81" y="131" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">ADD</text>
            <text x="10" y="143" fontSize="7" fill={FAINT}>{sub}</text>
          </g>
        ))}
      </svg>
      {/* Mobile: true to shipped app — tabs, welcome, KPIs, 2-col grid */}
      <svg viewBox="0 0 360 520" className="block h-auto w-full sm:hidden" role="img" aria-label="Commerce storefront mobile layout">
        <rect width="360" height="520" fill={CANVAS} />
        <rect x="0" y="0" width="360" height="52" fill={PAPER} stroke={LINE} />
        {tabs.map((t, i) => (
          <g key={t} transform={`translate(${52 + i * 85} 0)`}>
            <text y="22" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={i === 1 ? BLUE : FAINT}>{t}</text>
            {i === 1 && <rect x="-24" y="34" width="48" height="3" rx="1.5" fill={BLUE} />}
          </g>
        ))}
        <g transform="translate(16 68)">
          <rect width="328" height="108" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="24" fontSize="10" fontWeight="700" fill={BLUE}>OVERVIEW</text>
          <text x="16" y="50" fontSize="18" fontWeight="700" fill={INK}>Welcome, kenil.</text>
          <text x="16" y="68" fontSize="11" fill={MUTED}>Track inventory, manage carts.</text>
          <rect x="16" y="78" width="148" height="20" rx="5" fill={ROW} stroke={LINE} />
          <text x="26" y="92" fontSize="10" fontWeight="600" fill={MUTED}>CART ITEMS · 5</text>
          <rect x="172" y="78" width="140" height="20" rx="5" fill={BLUE_BG} />
          <text x="242" y="92" textAnchor="middle" fontSize="10" fontWeight="700" fill={BLUE}>₹ 4205.32</text>
        </g>
        {[["Essence Mascara", "₹ 9.99", "★ 2.56", 16], ["Eyeshadow Palette", "₹ 19.99", "★ 2.86", 186]].map(([n, p, r, x]) => (
          <g key={n as string} transform={`translate(${x} 188)`}>
            <rect width="158" height="162" rx="10" fill={PAPER} stroke={LINE} />
            <rect x="12" y="12" width="134" height="58" rx="6" fill={ROW} stroke={LINE} />
            <text x="12" y="86" fontSize="9" fontWeight="600" fill={FAINT}>BEAUTY</text>
            <text x="12" y="102" fontSize="11.5" fontWeight="600" fill={INK}>{(n as string).split(" ").slice(0, 2).join(" ")}</text>
            <text x="12" y="118" fontSize="13" fontWeight="700" fill={INK}>{p}</text>
            <text x="12" y="132" fontSize="10" fill={MUTED}>{r}</text>
            <rect x="12" y="138" width="64" height="16" rx="4" fill={PAPER} stroke={LINE} />
            <text x="44" y="150" textAnchor="middle" fontSize="9" fontWeight="600" fill={MUTED}>DETAILS</text>
            <rect x="82" y="138" width="64" height="16" rx="4" fill={INK} />
            <text x="114" y="150" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">ADD</text>
          </g>
        ))}
        <g transform="translate(16 362)">
          <rect width="328" height="142" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="26" fontSize="10" fontWeight="700" fill={BLUE}>QUICK ACTIONS</text>
          {["Browse products", "Review cart", "Edit profile"].map((a, i) => (
            <g key={a} transform={`translate(16 ${38 + i * 36})`}>
              <rect width="296" height="28" rx="6" fill={ROW} stroke={LINE} />
              <text x="12" y="18" fontSize="12" fontWeight="600" fill={INK}>{a}</text>
            </g>
          ))}
        </g>
      </svg>
    </Frame>
  );
}

export function PresenceArt() {
  const bars = [52, 34, 78, 56, 38, 46, 36];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <Frame url="sample-studio.co.uk/">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Collectedge landing with health score and collection chart">
        <rect width="560" height="340" fill="#eef2ff" />
        <rect x="60" y="12" width="440" height="44" rx="22" fill={PAPER} stroke={LINE} />
        <rect x="76" y="24" width="18" height="18" rx="5" fill={BLUE} />
        <text x="100" y="38" fontSize="12" fontWeight="700" fill={INK}>Collectedge</text>
        <text x="220" y="38" fontSize="9" fontWeight="700" fill={INK}>Home</text>
        <text x="260" y="38" fontSize="9" fill={MUTED}>For Lenders</text>
        <text x="326" y="38" fontSize="9" fill={MUTED}>For Agencies</text>
        <rect x="418" y="20" width="66" height="26" rx="13" fill={BLUE} />
        <text x="451" y="37" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Get in touch</text>
        <text x="280" y="102" textAnchor="middle" fontSize="22" fontWeight="700" fill={INK}>Unified Platform for</text>
        <text x="280" y="128" textAnchor="middle" fontSize="22" fontWeight="700" fill={BLUE}>Late-Stage DPD Resolution.</text>
        <text x="280" y="148" textAnchor="middle" fontSize="9" fill={MUTED}>Built with agencies &amp; collection managers in mind.</text>
        <rect x="248" y="160" width="64" height="24" rx="12" fill={BLUE} />
        <text x="280" y="175" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Free Trial</text>
        {/* health ring */}
        <g transform="translate(20 168)">
          <rect width="150" height="156" rx="10" fill={PAPER} stroke={LINE} />
          <text x="14" y="24" fontSize="10" fontWeight="700" fill={INK}>Operational Health</text>
          <text x="14" y="36" fontSize="9" fill={MUTED}>April 2025</text>
          <circle cx="75" cy="88" r="34" fill="none" stroke={BLUE} strokeOpacity="0.15" strokeWidth="12" />
          <circle cx="75" cy="88" r="34" fill="none" stroke={BLUE} strokeWidth="12" strokeLinecap="round" strokeDasharray="170 214" transform="rotate(-90 75 88)" />
          <text x="75" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>80%</text>
          <text x="75" y="140" textAnchor="middle" fontSize="8" fill={MUTED}>Actionable cases first</text>
        </g>
        {/* bar chart */}
        <g transform="translate(180 168)">
          <rect width="200" height="156" rx="10" fill={PAPER} stroke={LINE} />
          <text x="14" y="24" fontSize="10" fontWeight="700" fill={INK}>Interactions &amp; amount</text>
          <text x="14" y="36" fontSize="8" fill={MUTED}>Totals · 31 Feb · Wed 34% peak</text>
          {bars.map((h, i) => (
            <rect key={i} x={16 + i * 26} y={124 - h} width="16" height={h} rx="4" fill={i === 2 ? BLUE : BLUE} opacity={i === 2 ? 1 : 0.28} />
          ))}
          {days.map((d, i) => (
            <text key={d} x={24 + i * 26} y="138" textAnchor="middle" fontSize="7" fill={MUTED}>{d}</text>
          ))}
        </g>
        {/* agency card */}
        <g transform="translate(390 168)">
          <rect width="150" height="156" rx="10" fill={PAPER} stroke={LINE} />
          <text x="14" y="24" fontSize="10" fontWeight="700" fill={INK}>AFL Services</text>
          <text x="14" y="36" fontSize="8" fill={MUTED}>Bangalore · Chennai</text>
          {[["100+ Calling", 52], ["150+ Field", 78], ["4.1/5 Rating", 104]].map(([t, y]) => (
            <g key={t as string} transform={`translate(14 ${y})`}>
              <rect width="122" height="22" rx="5" fill={ROW} stroke={LINE} />
              <text x="8" y="15" fontSize="8" fontWeight="600" fill={INK}>{t}</text>
            </g>
          ))}
        </g>
      </svg>
      <svg viewBox="0 0 360 500" className="block h-auto w-full sm:hidden" role="img" aria-label="Collectedge landing mobile">
        <rect width="360" height="500" fill="#eef2ff" />
        <rect x="16" y="12" width="328" height="48" rx="24" fill={PAPER} stroke={LINE} />
        <rect x="32" y="24" width="20" height="20" rx="5" fill={BLUE} />
        <text x="58" y="39" fontSize="13" fontWeight="700" fill={INK}>Collectedge</text>
        <rect x="248" y="22" width="80" height="28" rx="14" fill={BLUE} />
        <text x="288" y="40" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Get in touch</text>
        <text x="180" y="110" textAnchor="middle" fontSize="24" fontWeight="700" fill={INK}>Unified Platform</text>
        <text x="180" y="138" textAnchor="middle" fontSize="24" fontWeight="700" fill={BLUE}>for DPD.</text>
        <rect x="34" y="156" width="292" height="32" rx="16" fill={BLUE} />
        <text x="180" y="177" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Get free Trial</text>
        <g transform="translate(16 200)">
          <rect width="158" height="150" rx="10" fill={PAPER} stroke={LINE} />
          <text x="14" y="24" fontSize="11" fontWeight="700" fill={INK}>Health 80%</text>
          <circle cx="79" cy="88" r="30" fill="none" stroke={BLUE} strokeOpacity="0.15" strokeWidth="11" />
          <circle cx="79" cy="88" r="30" fill="none" stroke={BLUE} strokeWidth="11" strokeLinecap="round" strokeDasharray="150 189" transform="rotate(-90 79 88)" />
          <text x="79" y="92" textAnchor="middle" fontSize="12" fontWeight="700" fill={INK}>80%</text>
        </g>
        <g transform="translate(186 200)">
          <rect width="158" height="150" rx="10" fill={PAPER} stroke={LINE} />
          <text x="14" y="24" fontSize="11" fontWeight="700" fill={INK}>Collected</text>
          {[44, 28, 62, 44, 32].map((h, i) => (
            <rect key={i} x={16 + i * 26} y={120 - h} width="16" height={h} rx="4" fill={BLUE} opacity={i === 2 ? 1 : 0.3} />
          ))}
        </g>
        <g transform="translate(16 362)">
          <rect width="328" height="122" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="28" fontSize="12" fontWeight="700" fill={INK}>AFL Services · 100+ calling · 150+ field</text>
          <text x="16" y="46" fontSize="11" fill={MUTED}>Bangalore, Chennai · Since 2016</text>
          <rect x="16" y="58" width="296" height="46" rx="6" fill={ROW} stroke={LINE} />
          <text x="28" y="77" fontSize="11" fontWeight="600" fill={INK}>Cheyenne G.</text>
          <text x="28" y="92" fontSize="10" fill={MUTED}>+91 98XXXXXXXX</text>
        </g>
      </svg>
    </Frame>
  );
}

export function TrippyArt() {
  return (
    <Frame url="trippy.orangedev.in/dispatch">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Trippy new trip form and revenue dashboard">
        <rect width="560" height="340" fill={CANVAS} />
        <g transform="translate(20 14)">
          <rect width="250" height="260" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="24" fontSize="8" fontWeight="700" fill={BLUE}>TRIPPY · NEW TRIP</text>
          <text x="16" y="40" fontSize="9" fill={MUTED}>STARTING POINT</text>
          <rect x="16" y="46" width="218" height="30" rx="6" fill={ROW} stroke={LINE} />
          <text x="28" y="65" fontSize="10" fontWeight="700" fill={INK}>Green Tech</text>
          <text x="16" y="94" fontSize="9" fill={MUTED}>DESTINATION</text>
          <rect x="16" y="100" width="218" height="30" rx="6" fill={ROW} stroke={LINE} />
          <text x="28" y="119" fontSize="10" fontWeight="700" fill={INK}>Welspun Corp</text>
          <text x="16" y="148" fontSize="9" fill={MUTED}>FARE · ₹ 1400</text>
          <rect x="16" y="154" width="218" height="26" rx="6" fill={ROW} stroke={LINE} />
          <text x="28" y="171" fontSize="10" fontWeight="700" fill={INK}>₹ 1400</text>
          <rect x="16" y="188" width="106" height="26" rx="6" fill={ROW} stroke={LINE} />
          <text x="26" y="205" fontSize="9" fontWeight="600" fill={INK}>11 Oct 26</text>
          <rect x="128" y="188" width="106" height="26" rx="6" fill={ROW} stroke={LINE} />
          <text x="138" y="205" fontSize="9" fontWeight="600" fill={INK}>Veh. 9999</text>
          <rect x="16" y="222" width="218" height="28" rx="6" fill={BLUE} />
          <text x="125" y="240" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">ADD TRIP</text>
        </g>
        <g transform="translate(280 14)">
          {[["THIS MONTH ₹1,10,000", "TOTAL TRIPS 5"], ["AVG FARE ₹22,000", "THIS WEEK ₹1,10,000"]].map((row, r) => (
            <g key={r} transform={`translate(0 ${r * 56})`}>
              {row.map((t, c) => (
                <g key={t} transform={`translate(${c * 132} 0)`}>
                  <rect width="124" height="48" rx="8" fill={PAPER} stroke={LINE} />
                  <text x="10" y="18" fontSize="7" fill={MUTED}>{t.split(" ").slice(0, 2).join(" ")}</text>
                  <text x="10" y="36" fontSize="12" fontWeight="700" fill={INK}>{t.split(" ").slice(2).join(" ")}</text>
                </g>
              ))}
            </g>
          ))}
          <g transform="translate(0 120)">
            <rect width="260" height="154" rx="10" fill={PAPER} stroke={LINE} />
            <text x="14" y="22" fontSize="10" fontWeight="700" fill={INK}>Weekly Revenue</text>
            {[34, 14, 16, 26, 58, 44, 84].map((h, i) => (
              <rect key={i} x={16 + i * 34} y={130 - h} width="20" height={h} rx="4" fill={BLUE} opacity={i === 6 ? 1 : 0.25 + h / 300} />
            ))}
            <text x="14" y="146" fontSize="8" fill={MUTED}>06 MAY → 11 OCT · peak ₹84,200</text>
          </g>
        </g>
        <text x="20" y="312" fontSize="10" fill={MUTED}>Trip creation up front, revenue truth on the dashboard.</text>
      </svg>
      <svg viewBox="0 0 360 620" className="block h-auto w-full sm:hidden" role="img" aria-label="Trippy mobile form and dashboard">
        <rect width="360" height="620" fill={CANVAS} />
        <rect x="0" y="0" width="360" height="52" fill={PAPER} stroke={LINE} />
        <text x="18" y="32" fontSize="14" fontWeight="800" fill={BLUE}>TRIPPY</text>
        <text x="342" y="32" textAnchor="end" fontSize="10" fill={MUTED}>Hi, Honey!</text>
        <g transform="translate(16 64)">
          <rect width="328" height="252" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="26" fontSize="11" fontWeight="700" fill={INK}>NEW TRIP</text>
          <text x="16" y="48" fontSize="9" fill={MUTED}>STARTING POINT</text>
          <rect x="16" y="54" width="296" height="32" rx="6" fill={ROW} stroke={LINE} />
          <text x="28" y="75" fontSize="12" fontWeight="700" fill={INK}>Green Tech</text>
          <text x="16" y="104" fontSize="9" fill={MUTED}>DESTINATION</text>
          <rect x="16" y="110" width="296" height="32" rx="6" fill={ROW} stroke={LINE} />
          <text x="28" y="131" fontSize="12" fontWeight="700" fill={INK}>Welspun Corp</text>
          <rect x="16" y="150" width="296" height="30" rx="6" fill={ROW} stroke={LINE} />
          <text x="28" y="170" fontSize="12" fontWeight="700" fill={INK}>₹ 1400 · 11 Oct 26 · 9999</text>
          <rect x="16" y="192" width="296" height="40" rx="7" fill={BLUE} />
          <text x="164" y="217" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">ADD TRIP</text>
        </g>
        <g transform="translate(16 328)">
          {[["THIS MONTH", "₹1,10,000", 0], ["TOTAL TRIPS", "5", 1], ["AVG FARE", "₹22,000", 2], ["THIS WEEK", "₹1,10,000", 3]].map(([k, v, i]) => (
            <g key={k as string} transform={`translate(${(Number(i) % 2) * 168} ${Math.floor(Number(i) / 2) * 64})`}>
              <rect width="160" height="56" rx="8" fill={PAPER} stroke={LINE} />
              <text x="12" y="22" fontSize="9" fill={MUTED}>{k}</text>
              <text x="12" y="42" fontSize="14" fontWeight="700" fill={INK}>{v}</text>
            </g>
          ))}
        </g>
        <g transform="translate(16 464)">
          <rect width="328" height="140" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="26" fontSize="12" fontWeight="700" fill={INK}>Weekly Revenue</text>
          {[30, 12, 14, 24, 52, 38, 74].map((h, i) => (
            <rect key={i} x={16 + i * 44} y={118 - h} width="26" height={h} rx="4" fill={BLUE} opacity={i === 6 ? 1 : 0.3} />
          ))}
        </g>
      </svg>
    </Frame>
  );
}

export function PayrollArt() {
  const rows: Array<[string, string, string, string, "green" | "amber"]> = [
    ["AM", "A. Mehta · #EMP-014", "26/26 days", "Paid", "green"],
    ["SS", "S. Shah · #EMP-089", "Advance due", "Review", "amber"],
    ["RR", "R. Rao · #EMP-132", "OT 12h", "Ready", "green"],
    ["KM", "K. Menon · #EMP-207", "3 half-days", "Review", "amber"],
  ];
  return (
    <Frame url="payroll.orangedev.in/runs/march-2025">
      <svg viewBox="0 0 560 340" className="hidden h-auto w-full sm:block" role="img" aria-label="Payroll run interface">
        <rect width="560" height="340" fill={CANVAS} />
        <g transform="translate(20 14)">
          <rect width="330" height="250" rx="8" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="11" fontWeight="700" fill={INK}>March 2025</text>
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
        <text x="20" y="300" fontSize="10" fill={MUTED}>Attendance-linked pay, verified before approval.</text>
      </svg>
      <svg viewBox="0 0 360 560" className="block h-auto w-full sm:hidden" role="img" aria-label="Payroll run interface">
        <rect width="360" height="560" fill={CANVAS} />
        <g transform="translate(16 12)">
          <rect width="328" height="150" rx="8" fill={PAPER} stroke={LINE} />
          <text x="16" y="28" fontSize="11" fontWeight="600" fill={MUTED}>NET PAYABLE · MARCH 2025</text>
          <text x="16" y="62" fontSize="28" fontWeight="700" fill={INK}>₹ 86.4L</text>
          <text x="16" y="82" fontSize="11" fill={MUTED}>● Verified · ready to pay</text>
          <rect x="16" y="94" width="296" height="40" rx="7" fill={ORANGE} />
          <text x="164" y="119" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">Approve run</text>
        </g>
        <g transform="translate(16 174)">
          <rect width="328" height="352" rx="8" fill={PAPER} stroke={LINE} />
          <text x="16" y="30" fontSize="13" fontWeight="700" fill={INK}>March 2025</text>
          <text x="312" y="30" textAnchor="end" fontSize="10" fill={MUTED}>500+ workers</text>
          <line x1="0" y1="44" x2="328" y2="44" stroke={LINE} />
          {[["A. Mehta · #EMP-014", "26/26 days", "Paid", true], ["S. Shah · #EMP-089", "Advance due", "Review", false], ["R. Rao · #EMP-132", "OT 12h", "Ready", true]].map(([name, att, st, ok], i) => (
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
        <text x="16" y="544" fontSize="11" fill={MUTED}>Attendance-linked pay, verified before approval.</text>
      </svg>
    </Frame>
  );
}

export function ErpArt() {
  return (
    <Frame url="erp.orangedev.in/overview">
      <svg viewBox="0 0 560 360" className="hidden h-auto w-full sm:block" role="img" aria-label="Contractor ERP with projects, muster and stock">
        <rect width="560" height="360" fill={CANVAS} />
        {[["Active Projects", "4", 20], ["Today's Labour", "42 / 51", 150], ["Client Payments", "₹2.10L", 280], ["Est. Margin", "₹3.45L", 410]].map(([k, v, x]) => (
          <g key={k as string} transform={`translate(${x} 14)`}>
            <rect width="122" height="60" rx="8" fill={PAPER} stroke={LINE} />
            <text x="12" y="22" fontSize="8" fontWeight="600" fill={MUTED}>{(k as string).toUpperCase()}</text>
            <text x="12" y="46" fontSize="16" fontWeight="700" fill={INK}>{v}</text>
          </g>
        ))}
        <g transform="translate(20 84)">
          <rect width="310" height="240" rx="10" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="11" fontWeight="700" fill={INK}>Project Overview</text>
          <text x="296" y="26" textAnchor="end" fontSize="8" fill={MUTED}>Budget vs actual</text>
          {[["Patel Residence · Ahmedabad", "₹16.80L / ₹25L", 78, "Active"], ["Sharma Commercial · Gandhinagar", "₹9.20L / ₹32L", 52, "Active"], ["Boundary Wall — Plot 7 · Sanand", "₹4.10L / ₹6.5L", 63, "On Hold"]].map(([t, amt, p, s], i) => (
            <g key={t as string} transform={`translate(14 ${48 + i * 62})`}>
              <text fontSize="10" fontWeight="700" fill={INK}>{(t as string).split("·")[0].trim()}</text>
              <rect x="196" y="-12" width="52" height="16" rx="8" fill={s === "Active" ? GREEN_BG : AMBER_BG} />
              <text x="222" y="0" textAnchor="middle" fontSize="8" fontWeight="700" fill={s === "Active" ? GREEN_TX : AMBER_TX}>{s}</text>
              <rect y="12" width="200" height="6" rx="3" fill={CANVAS} />
              <rect y="12" width={(200 * (p as number)) / 100} height="6" rx="3" fill={ORANGE} />
              <text x="0" y="28" fontSize="8" fill={MUTED}>{amt} · 86% received</text>
            </g>
          ))}
        </g>
        <g transform="translate(340 84)">
          <rect width="200" height="148" rx="10" fill={PAPER} stroke={LINE} />
          <text x="14" y="26" fontSize="10" fontWeight="700" fill={INK}>Main Building — Today</text>
          <text x="14" y="40" fontSize="8" fill={MUTED}>Site-wise muster · 12 assigned</text>
          {[["Ramesh · Mason", "Present", true], ["Suresh · Helper", "Present", true], ["Mahesh · Carpenter", "Half", false]].map(([n, s, on], i) => (
            <g key={n as string} transform={`translate(14 ${54 + i * 30})`}>
              <text fontSize="9" fontWeight="600" fill={INK}>{n}</text>
              <rect x="118" y="-12" width="56" height="18" rx="9" fill={on ? ORANGE : AMBER_BG} />
              <text x="146" y="0" textAnchor="middle" fontSize="8" fontWeight="700" fill={on ? "#fff" : AMBER_TX}>{s}</text>
            </g>
          ))}
          <g transform="translate(14 158)">
            <rect width="200" height="82" rx="10" fill={PAPER} stroke={LINE} />
            <text x="14" y="24" fontSize="10" fontWeight="700" fill={INK}>Low Stock · 3 items</text>
            {[["Cement", "18 / min 50"], ["Steel", "120 / min 500"], ["Paint", "12 / min 20"]].map(([m, q], i) => (
              <g key={m as string} transform={`translate(14 ${36 + i * 14})`}>
                <text fontSize="8" fontWeight="600" fill={INK}>{m}</text>
                <text x="172" textAnchor="end" fontSize="8" fill={MUTED}>{q}</text>
              </g>
            ))}
          </g>
        </g>
        <text x="20" y="344" fontSize="10" fill={MUTED}>Projects, muster, stock and money — one coherent site truth.</text>
      </svg>
      <svg viewBox="0 0 360 640" className="block h-auto w-full sm:hidden" role="img" aria-label="Contractor ERP mobile overview">
        <rect width="360" height="640" fill={CANVAS} />
        {[["Active Projects", "4", 16, 12], ["Today's Labour", "42 / 51", 186, 12], ["Client Payments", "₹2.10L", 16, 84], ["Est. Margin", "₹3.45L", 186, 84]].map(([k, v, x, y]) => (
          <g key={k as string} transform={`translate(${x} ${y})`}>
            <rect width="158" height="64" rx="8" fill={PAPER} stroke={LINE} />
            <text x="14" y="24" fontSize="9" fontWeight="600" fill={MUTED}>{(k as string).toUpperCase()}</text>
            <text x="14" y="48" fontSize="17" fontWeight="700" fill={INK}>{v}</text>
          </g>
        ))}
        <g transform="translate(16 160)">
          <rect width="328" height="210" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="28" fontSize="13" fontWeight="700" fill={INK}>Project Overview</text>
          {[["Patel Residence", "₹16.80L / ₹25L", 78], ["Sharma Commercial", "₹9.20L / ₹32L", 52], ["Boundary Wall — Plot 7", "₹4.10L / ₹6.5L", 63]].map(([t, a, p], i) => (
            <g key={t as string} transform={`translate(16 ${46 + i * 54})`}>
              <text fontSize="12" fontWeight="700" fill={INK}>{t}</text>
              <text x="296" textAnchor="end" fontSize="10" fill={MUTED}>{a}</text>
              <rect y="10" width="296" height="6" rx="3" fill={CANVAS} />
              <rect y="10" width={(296 * (p as number)) / 100} height="6" rx="3" fill={ORANGE} />
            </g>
          ))}
        </g>
        <g transform="translate(16 382)">
          <rect width="328" height="150" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="28" fontSize="13" fontWeight="700" fill={INK}>Main Building — Today · 12 assigned</text>
          {[["Ramesh · Mason ₹900/d", "Present", true], ["Suresh · Helper ₹600/d", "Present", true], ["Raj · Helper ₹600/d", "Absent", false]].map(([n, s, on], i) => (
            <g key={n as string} transform={`translate(16 ${44 + i * 34})`}>
              <text fontSize="12" fontWeight="600" fill={INK}>{n}</text>
              <rect x="226" y="-14" width="70" height="22" rx="11" fill={on ? ORANGE : "#f0ede6"} />
              <text x="261" y="0" textAnchor="middle" fontSize="10" fontWeight="700" fill={on ? "#fff" : MUTED}>{s}</text>
            </g>
          ))}
        </g>
        <g transform="translate(16 544)">
          <rect width="328" height="80" rx="10" fill={PAPER} stroke={LINE} />
          <text x="16" y="28" fontSize="12" fontWeight="700" fill={INK}>Low Stock · 3 items</text>
          <text x="16" y="48" fontSize="11" fill={MUTED}>Cement 18/50 · Steel 120/500 · Paint 12/20</text>
          <text x="16" y="64" fontSize="10" fill={MUTED}>Guarded stock — never negative.</text>
        </g>
      </svg>
    </Frame>
  );
}
