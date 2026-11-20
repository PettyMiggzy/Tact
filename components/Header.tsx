"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="" width={44} height={44} className="h-11 w-11" priority />
          <span className="leading-none">
            <span className="display block text-[22px] text-white">Superior</span>
            <span className="display mt-0.5 block border-y border-signal/70 py-px text-[12px] tracking-[0.08em] text-slate-200">Tactical Response</span>
            <span className="display mt-0.5 block text-[12px] tracking-[0.3em] text-gold">Agency</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="display text-lg font-bold tracking-wide text-slate-300 not-italic transition hover:text-gold-light">
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phones.office.tel}`}
            className="display flex items-center gap-2 bg-gold px-5 py-2.5 text-lg text-ink transition [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] hover:bg-gold-light"
          >
            <span aria-hidden="true" className="blink h-2 w-2 rounded-full bg-alert" />
            {SITE.phones.office.display}
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center border border-white/20 text-white md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-ink px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="display block border-b border-white/5 px-1 py-3 text-2xl text-slate-100 hover:text-gold-light"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`tel:${SITE.phones.office.tel}`}
                className="display block bg-gold px-5 py-3.5 text-center text-xl text-ink"
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
