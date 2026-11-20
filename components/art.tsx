import type { ReactNode } from "react";

/* Original, code-drawn artwork for Superior Tactical Response.
   Everything here is deterministic (no Math.random / Date) so it prerenders
   cleanly under Cache Components, and animation is CSS-only. */

const GOLD = "#d9a92a";
const GOLD_LIGHT = "#f1cb62";

/* ---------- Hero: incident-map radar ---------- */

const STREETS_MAJOR = [
  "M20 300 L140 270 L260 290 L460 230",
  "M60 90 L150 170 L250 250 L330 330 L400 440",
  "M240 20 L230 140 L250 250 L210 380 L220 470",
  "M30 400 L170 360 L310 380 L470 340",
];
const STREETS_MINOR = [
  "M40 200 L180 190 L300 210 L450 150",
  "M100 40 L120 160 L100 280 L80 450",
  "M340 40 L350 150 L330 260 L360 460",
  "M30 140 L120 120 L240 90 L440 60",
  "M150 440 L190 330 L290 200 L420 120",
  "M400 20 L420 200 L440 420",
];

const PINS: { x: number; y: number; delay: number }[] = [
  { x: 94, y: 123, delay: 0 },
  { x: 411, y: 175, delay: 1.1 },
  { x: 357, y: 378, delay: 2.2 },
  { x: 123, y: 364, delay: 3.3 },
];

export function HeroArt() {
  return (
    <svg
      viewBox="0 0 480 480"
      role="img"
      aria-label="Illustrated incident map with patrol routes and live incident markers"
      className="h-full w-full"
    >
      <defs>
        <clipPath id="hero-disc"><circle cx="240" cy="240" r="224" /></clipPath>
        <radialGradient id="hero-fill" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#15245a" />
          <stop offset="1" stopColor="#0a1330" />
        </radialGradient>
        <linearGradient id="hero-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={GOLD} stopOpacity="0" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0.38" />
        </linearGradient>
      </defs>

      <circle cx="240" cy="240" r="232" fill="none" stroke={GOLD} strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 7" />
      <circle cx="240" cy="240" r="224" fill="url(#hero-fill)" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.5" />

      <g clipPath="url(#hero-disc)">
        <g stroke="#ffffff" strokeOpacity="0.05">
          {Array.from({ length: 11 }, (_, i) => (
            <g key={i}>
              <line x1={i * 48} y1="0" x2={i * 48} y2="480" />
              <line x1="0" y1={i * 48} x2="480" y2={i * 48} />
            </g>
          ))}
        </g>
        <g fill="none" strokeLinejoin="round" strokeLinecap="round">
          {STREETS_MINOR.map((d) => (<path key={d} d={d} stroke="#3a4f9c" strokeOpacity="0.55" strokeWidth="1.5" />))}
          {STREETS_MAJOR.map((d) => (<path key={d} d={d} stroke="#5a72c8" strokeOpacity="0.7" strokeWidth="3" />))}
        </g>
        {/* city blocks */}
        <g fill="#26398a" fillOpacity="0.35">
          <rect x="160" y="200" width="34" height="26" rx="2" />
          <rect x="278" y="262" width="40" height="30" rx="2" />
          <rect x="95" y="300" width="30" height="24" rx="2" />
          <rect x="300" y="140" width="36" height="28" rx="2" />
          <rect x="190" y="90" width="28" height="22" rx="2" />
          <rect x="370" y="290" width="32" height="26" rx="2" />
        </g>

        {/* patrol loop */}
        <path
          d="M128 150 C 200 100, 320 120, 372 190 S 370 320, 330 345 S 190 380, 150 335 S 80 200, 128 150 Z"
          transform="translate(240 240) scale(1.3) translate(-240 -240)"
          fill="none"
          stroke={GOLD_LIGHT}
          strokeWidth="2"
          strokeDasharray="10 8"
          strokeLinecap="round"
          className="art-dash"
        />

        {/* radar rings */}
        <g fill="none" stroke={GOLD} strokeOpacity="0.28">
          <circle cx="240" cy="240" r="70" />
          <circle cx="240" cy="240" r="130" />
          <circle cx="240" cy="240" r="190" />
        </g>
        <g stroke={GOLD} strokeOpacity="0.2">
          <line x1="240" y1="16" x2="240" y2="464" />
          <line x1="16" y1="240" x2="464" y2="240" />
        </g>

        {/* sweep */}
        <g className="art-sweep" style={{ transformOrigin: "240px 240px" }}>
          <path d="M240 240 L464 240 A224 224 0 0 0 424 110 Z" fill="url(#hero-sweep)" transform="rotate(30 240 240)" />
          <line x1="240" y1="240" x2="464" y2="240" stroke={GOLD_LIGHT} strokeWidth="2" strokeOpacity="0.8" transform="rotate(30 240 240)" />
        </g>
      </g>

      {/* incident pins */}
      {PINS.map((p) => (
        <g key={p.delay} transform={`translate(${p.x} ${p.y})`}>
          <circle r="8" fill="#c1272d" fillOpacity="0.35" className="art-pulse" style={{ animationDelay: `${p.delay}s` }} />
          <circle r="5" fill="#c1272d" stroke="#fff" strokeWidth="1.5" />
        </g>
      ))}

      {/* compass ticks */}
      <g stroke={GOLD} strokeOpacity="0.6" strokeWidth="1.5">
        {Array.from({ length: 36 }, (_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const long = i % 9 === 0;
          const r1 = 224 - (long ? 14 : 7);
          return (
            <line key={i} x1={240 + Math.sin(a) * r1} y1={240 - Math.cos(a) * r1} x2={240 + Math.sin(a) * 224} y2={240 - Math.cos(a) * 224} />
          );
        })}
      </g>
      <text x="240" y="40" textAnchor="middle" fill={GOLD_LIGHT} fontSize="13" fontWeight="700" letterSpacing="3">N</text>
    </svg>
  );
}

/* ---------- Service icons (48 grid, stroke art) ---------- */

type IconName = "map" | "agent" | "patrol" | "contract" | "property" | "badge";

const ICONS: Record<IconName, ReactNode> = {
  map: (
    <>
      <path d="M6 14l12-5 12 5 12-5v26l-12 5-12-5-12 5z" />
      <path d="M18 9v26M30 14v26" strokeOpacity="0.5" />
      <path d="M36 4c-3.3 0-6 2.5-6 5.7C30 14 36 20 36 20s6-6 6-10.3C42 6.5 39.3 4 36 4z" fill={GOLD} stroke="none" />
      <circle cx="36" cy="9.5" r="2" fill="#0a1330" stroke="none" />
    </>
  ),
  agent: (
    <>
      <path d="M24 4l16 6v12c0 10-7 17-16 21C15 39 8 32 8 22V10z" />
      <path d="M24 14l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L24 28.3l-5.6 3 1.1-6.2-4.5-4.4 6.2-.9z" fill={GOLD} stroke="none" />
    </>
  ),
  patrol: (
    <>
      <circle cx="24" cy="24" r="16" strokeDasharray="5 4" />
      <path d="M36 8l4 6-7 1" />
      <circle cx="24" cy="24" r="5" fill={GOLD} stroke="none" />
      <circle cx="24" cy="24" r="9" strokeOpacity="0.4" />
      <circle cx="10" cy="30" r="2.5" fill="currentColor" stroke="none" />
    </>
  ),
  contract: (
    <>
      <path d="M12 4h18l8 8v32H12z" />
      <path d="M30 4v8h8" />
      <path d="M18 22h14M18 28h14" strokeOpacity="0.5" />
      <path d="M18 37l4 4 9-9" stroke={GOLD} strokeWidth="3" />
    </>
  ),
  property: (
    <>
      <path d="M4 42h40" />
      <path d="M8 42V22l8-6v26M16 42V10h14v32" />
      <path d="M30 42V24h10v18" />
      <path d="M21 16h4M21 22h4M21 28h4M21 34h4" strokeOpacity="0.5" />
      <path d="M35 24v-6" stroke={GOLD} strokeWidth="3" />
    </>
  ),
  badge: (
    <>
      <path d="M24 3l4 5 6-2 1.5 6.5 6.5 1.5-2 6 5 4-5 4 2 6-6.5 1.5L34 42l-6-2-4 5-4-5-6 2-1.5-6.5L6 34.5l2-6-5-4.5 5-4-2-6 6.5-1.5L14 6l6 2z" strokeOpacity="0.9" />
      <path d="M24 15l2.5 5.2 5.7.8-4.1 4 1 5.7L24 28l-5.1 2.7 1-5.7-4.1-4 5.7-.8z" fill={GOLD} stroke="none" />
    </>
  ),
};

export const SERVICE_ICONS: IconName[] = ["map", "agent", "patrol", "contract", "property", "badge"];

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <span className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-navy-900 text-gold-light ring-1 ring-gold/30">
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICONS[name]}
      </svg>
    </span>
  );
}

/* ---------- Stars ---------- */

export function Stars({ count = 5, label }: { count?: number; label: string }) {
  return (
    <div role="img" aria-label={label} className="flex gap-1">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" fill={GOLD} />
        </svg>
      ))}
    </div>
  );
}

/* ---------- Topographic banner background ---------- */

function contour(cx: number, cy: number, r: number, seed: number): string {
  const pts: string[] = [];
  const n = 72;
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const wob =
      1 +
      0.12 * Math.sin(a * 3 + seed) +
      0.07 * Math.sin(a * 5 - seed * 1.7) +
      0.04 * Math.sin(a * 9 + seed * 2.3);
    const x = cx + Math.cos(a) * r * wob * 1.5;
    const y = cy + Math.sin(a) * r * wob * 0.8;
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(" ") + "Z";
}

export function TopoBackground({ variant = 0 }: { variant?: number }) {
  const centers = [
    [980, 150],
    [1020, 120],
    [900, 210],
    [1050, 190],
  ][variant % 4];
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g fill="none" stroke={GOLD} strokeWidth="1">
        {Array.from({ length: 16 }, (_, i) => (
          <path
            key={i}
            d={contour(centers[0], centers[1], 24 + i * 22, variant * 1.3 + i * 0.08)}
            strokeOpacity={Math.max(0.05, 0.3 - i * 0.015)}
          />
        ))}
      </g>
      <g fill="none" stroke="#5a72c8" strokeOpacity="0.18" strokeWidth="1">
        {Array.from({ length: 8 }, (_, i) => (
          <path key={i} d={contour(150, 260, 30 + i * 28, 2 + variant + i * 0.1)} />
        ))}
      </g>
    </svg>
  );
}

/* ---------- Banner motif per page ---------- */

export type MotifName = "target" | "seal" | "radio";

export function BannerMotif({ name }: { name: MotifName }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full" fill="none" stroke={GOLD} strokeWidth="2">
      {name === "target" && (
        <>
          {[88, 66, 44, 22].map((r) => (<circle key={r} cx="100" cy="100" r={r} strokeOpacity={0.25 + (88 - r) / 120} />))}
          <circle cx="100" cy="100" r="7" fill={GOLD} stroke="none" />
          <path d="M100 4v34M100 162v34M4 100h34M162 100h34" strokeLinecap="round" />
        </>
      )}
      {name === "seal" && (
        <>
          <circle cx="100" cy="100" r="88" strokeDasharray="3 8" strokeLinecap="round" />
          <circle cx="100" cy="100" r="72" strokeOpacity="0.5" />
          <path d="M100 38l50 18v36c0 34-22 56-50 70-28-14-50-36-50-70V56z" strokeOpacity="0.9" />
          <path d="M100 70l9 19 21 3-15 14 4 21-19-10-19 10 4-21-15-14 21-3z" fill={GOLD} stroke="none" />
        </>
      )}
      {name === "radio" && (
        <>
          <circle cx="60" cy="140" r="9" fill={GOLD} stroke="none" />
          {[28, 56, 84, 112].map((r, i) => (
            <path key={r} d={`M${60 + r * 0.2} ${140 - r}A${r} ${r} 0 0 1 ${60 + r} ${140 - r * 0.2}`} strokeOpacity={0.9 - i * 0.18} strokeLinecap="round" strokeWidth="3" />
          ))}
        </>
      )}
    </svg>
  );
}

export function PageBanner({
  children,
  motif,
  variant = 0,
}: {
  children: ReactNode;
  motif: MotifName;
  variant?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-800 to-navy-950 py-20">
      <TopoBackground variant={variant} />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-8 px-5">
        <div className="min-w-0">{children}</div>
        <div className="hidden h-44 w-44 shrink-0 opacity-90 md:block lg:h-52 lg:w-52">
          <BannerMotif name={motif} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Silent Witness: incident report illustration ---------- */

export function IncidentReportArt() {
  return (
    <svg viewBox="0 0 440 360" role="img" aria-label="Illustration of an incident report with a map pin, photo, video and audio attachments" className="h-full w-full">
      <rect x="10" y="10" width="420" height="340" rx="22" fill="#0a1330" stroke={GOLD} strokeOpacity="0.4" />
      {/* header */}
      <rect x="10" y="10" width="420" height="52" rx="22" fill="#1a2b66" />
      <rect x="10" y="40" width="420" height="22" fill="#1a2b66" />
      <circle cx="40" cy="36" r="7" fill="#c1272d" className="art-pulse" />
      <circle cx="40" cy="36" r="5" fill="#c1272d" />
      <rect x="58" y="29" width="120" height="14" rx="7" fill="#ffffff" fillOpacity="0.85" />
      <rect x="340" y="29" width="62" height="14" rx="7" fill={GOLD} />

      {/* map tile */}
      <rect x="30" y="80" width="190" height="150" rx="12" fill="#101d46" stroke="#26398a" />
      <g fill="none" stroke="#5a72c8" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round">
        <path d="M30 150 L120 135 L220 160" />
        <path d="M95 80 L110 150 L90 230" />
        <path d="M165 80 L150 160 L175 230" strokeOpacity="0.4" />
      </g>
      <path d="M52 205 C 90 180, 130 190, 150 140" fill="none" stroke={GOLD_LIGHT} strokeWidth="2.5" strokeDasharray="7 6" strokeLinecap="round" className="art-dash" />
      <g transform="translate(150 136)">
        <path d="M0 -26c-9 0-16 6.5-16 15 0 11 16 27 16 27s16-16 16-27c0-8.5-7-15-16-15z" fill="#c1272d" stroke="#fff" strokeWidth="2" />
        <circle cy="-11" r="5" fill="#fff" />
      </g>

      {/* photo tile */}
      <rect x="236" y="80" width="84" height="70" rx="10" fill="#101d46" stroke="#26398a" />
      <path d="M244 140l22-26 16 18 12-12 16 20z" fill="#26398a" />
      <circle cx="300" cy="100" r="6" fill={GOLD} />
      {/* video tile */}
      <rect x="336" y="80" width="74" height="70" rx="10" fill="#101d46" stroke="#26398a" />
      <circle cx="373" cy="115" r="18" fill="none" stroke={GOLD_LIGHT} strokeWidth="2.5" />
      <path d="M367 106l16 9-16 9z" fill={GOLD_LIGHT} />
      {/* audio tile */}
      <rect x="236" y="160" width="174" height="70" rx="10" fill="#101d46" stroke="#26398a" />
      <g stroke={GOLD} strokeWidth="4" strokeLinecap="round">
        {[18, 34, 22, 48, 30, 52, 26, 40, 16, 34, 22, 44, 28, 18, 30, 12].map((h, i) => (
          <line key={i} x1={252 + i * 10} y1={195 - h / 2} x2={252 + i * 10} y2={195 + h / 2} className="art-bar" style={{ animationDelay: `${(i % 6) * 0.15}s` }} />
        ))}
      </g>

      {/* report lines */}
      <g fill="#ffffff" fillOpacity="0.14">
        <rect x="30" y="250" width="380" height="10" rx="5" />
        <rect x="30" y="272" width="320" height="10" rx="5" />
        <rect x="30" y="294" width="250" height="10" rx="5" />
      </g>
      <g transform="translate(366 300)">
        <circle r="26" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="3 5" />
        <path d="M-10 0l7 7 14-15" fill="none" stroke={GOLD_LIGHT} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* ---------- Careers: recruit badge ---------- */

export function CareerBadgeArt() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" className="h-full w-full" fill="none">
      <circle cx="80" cy="80" r="72" stroke={GOLD} strokeOpacity="0.45" strokeDasharray="2 7" strokeLinecap="round" strokeWidth="2" />
      <path d="M80 18l46 17v34c0 31-20 52-46 64-26-12-46-33-46-64V35z" fill="#0a1330" stroke={GOLD} strokeWidth="3" />
      <path d="M80 34l34 12v23c0 22-14 38-34 47-20-9-34-25-34-47V46z" stroke="#5a72c8" strokeOpacity="0.5" strokeWidth="1.5" />
      <path d="M80 56l7.5 15.5 17 2.5-12.3 12 2.9 17L80 95l-15.1 8 2.9-17-12.3-12 17-2.5z" fill={GOLD} />
    </svg>
  );
}
