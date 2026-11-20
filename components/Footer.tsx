import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="" width={48} height={48} className="h-12 w-12" />
            <p className="font-serif text-xl text-white">{SITE.short}</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Indiana contract security. We focus on risk while allowing our clients to focus on their success.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-gold">Indiana Security License {SITE.license}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-slate-400 hover:text-gold-light">{n.label}</Link>
              </li>
            ))}
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-light">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                {SITE.address[0]}<br />{SITE.address[1]}
              </a>
            </li>
            <li><a href={`tel:${SITE.phones.office.tel}`} className="hover:text-gold-light">Office {SITE.phones.office.display}</a></li>
            <li><a href={`tel:${SITE.phones.contract.tel}`} className="hover:text-gold-light">Contracts {SITE.phones.contract.display}</a></li>
            <li><a href={`tel:${SITE.phones.dispatch.tel}`} className="hover:text-gold-light">24-hr Dispatch {SITE.phones.dispatch.display}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-gold-light">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        &copy; 2026 {SITE.name} All rights reserved.
      </div>
    </footer>
  );
}
