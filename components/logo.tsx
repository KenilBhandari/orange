function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function mix(c1: [number, number, number], c2: [number, number, number], t: number) {
  return `rgb(${lerp(c1[0], c2[0], t)}, ${lerp(c1[1], c2[1], t)}, ${lerp(c1[2], c2[2], t)})`;
}

const CHARCOAL: [number, number, number] = [26, 25, 23];
const ORANGE: [number, number, number] = [234, 88, 12];
const ARC_GREEN: [number, number, number] = [0, 190, 99];

function ramp(x: number) {
  const t = Math.min(1, Math.max(0, (x - 0.42) / 0.56));
  return t * t * (3 - 2 * t);
}

/** Wordmark ink synced to the mark: charcoal until the arc settles, then brand. */
export function brandText(t: number, kind: "orange" | "green"): string {
  const c = ramp(Math.min(1, Math.max(0, t)));
  return kind === "orange" ? mix(CHARCOAL, ORANGE, c) : mix(CHARCOAL, [22, 163, 74], c);
}

/**
 * Exact geometry from orange-arc-round-logo.svg.
 * progress 0 = detached monochrome, 1 = complete brand.
 */
export function OrangeMark({
  progress = 1,
  size = 120,
  label = "OrangeDev logo",
  fluid = false,
}: {
  progress?: number;
  size?: number;
  label?: string;
  fluid?: boolean;
}) {
  const p = Math.min(1, Math.max(0, progress));
  const lift = (1 - p) * 26;
  const c = ramp(p);
  const disc = mix(CHARCOAL, ORANGE, c);
  const arc = mix(CHARCOAL, ARC_GREEN, c);
  return (
    <svg
      width={fluid ? undefined : size}
      height={fluid ? undefined : size}
      viewBox="7 16 377 361.2"
      role="img"
      aria-label={label}
      style={
        fluid
          ? { display: "block", width: "100%", height: "auto", overflow: "visible", flexShrink: 0 }
          : { display: "block", overflow: "visible", flexShrink: 0 }
      }
    >
      <circle cx="195.8" cy="202.1" r="167.2" fill={disc} />
      <g transform={`translate(0 ${(-lift).toFixed(1)})`}>
        <path
          d="M42.8 84.8A368.2 368.2 0 0 1 349.2 84.8"
          fill="none"
          stroke={arc}
          strokeWidth="55.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
