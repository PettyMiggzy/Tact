"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="" width={40} height={40} className="h-10 w-10" priority />
          <span className="font-serif text-lg leading-tight text-white">
            Superior Tactical
            <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-gold">
              Response Agency
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-slate-300 transition hover:text-gold-light">
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phones.office.tel}`}
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy-950 transition hover:bg-gold-light"
          >
            {SITE.phones.office.display}
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-navy-900 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`tel:${SITE.phones.office.tel}`}
                className="block rounded-full bg-gold px-5 py-3 text-center font-semibold text-navy-950"
              >
                Call {SITE.phones.office.display}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
