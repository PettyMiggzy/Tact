import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "dark" }) {
  return (
    <p className={`hud flex items-center gap-3 text-[11px] font-medium ${tone === "gold" ? "text-gold" : "text-navy-700"}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto flex max-w-3xl flex-col items-center text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow tone={light ? "dark" : "gold"}>{eyebrow}</Eyebrow>}
      <h2 className={`display mt-4 text-5xl sm:text-6xl ${light ? "text-navy-950" : "text-white"}`}>{title}</h2>
      {lead && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? "text-slate-600" : "text-slate-400"}`}>{lead}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "dark";
}) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[15px] font-bold uppercase tracking-wider transition [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_100%,0_100%)]";
  const styles = {
    gold: "bg-gold text-ink hover:bg-gold-light",
    outline: "bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/15 hover:text-gold-light",
    dark: "bg-navy-950 text-white hover:bg-navy-800",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles} font-[family-name:var(--font-barlow)] text-lg`}>
      {children}
      <svg aria-hidden="true" width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="2" className="transition group-hover:translate-x-1">
        <path d="M0 6h16M11 1l5 5-5 5" />
      </svg>
    </a>
  );
}

/** Corner-bracket frame, like a targeting reticle around content. */
export function HudFrame({ children, className = "", tone = "gold" }: { children: ReactNode; className?: string; tone?: "gold" | "white" }) {
  const c = tone === "gold" ? "border-gold" : "border-white/60";
  const corner = `pointer-events-none absolute h-5 w-5 ${c}`;
  return (
    <div className={`relative ${className}`}>
      <span aria-hidden="true" className={`${corner} -left-2 -top-2 border-l-2 border-t-2`} />
      <span aria-hidden="true" className={`${corner} -right-2 -top-2 border-r-2 border-t-2`} />
      <span aria-hidden="true" className={`${corner} -bottom-2 -left-2 border-b-2 border-l-2`} />
      <span aria-hidden="true" className={`${corner} -bottom-2 -right-2 border-b-2 border-r-2`} />
      {children}
    </div>
  );
}

/** Infinite scrolling ticker. Items render twice so the loop is seamless. */
export function Ticker({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <li key={`${t}-${i}`} className="flex items-center">
          <span className="display whitespace-nowrap px-6 text-2xl">{t}</span>
          <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l5 5-5 5-5-5z" fill="currentColor" opacity="0.6" /></svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
