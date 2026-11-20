import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-3 font-serif text-3xl leading-tight sm:text-4xl ${light ? "text-navy-900" : "text-white"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-slate-600" : "text-slate-400"}`}>{lead}</p>}
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
  variant?: "gold" | "outline";
}) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition";
  const styles =
    variant === "gold"
      ? "bg-gold text-navy-950 hover:bg-gold-light"
      : "border border-white/25 text-white hover:border-gold hover:text-gold-light";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
