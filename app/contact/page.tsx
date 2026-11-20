import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui";
import { SITE } from "@/lib/site";
import { PageBanner } from "@/components/art";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Superior Tactical Response in Indianapolis. Office, contract office and 24-hour courtesy officer dispatch lines.",
};

export default function ContactPage() {
  const lines = [SITE.phones.office, SITE.phones.contract, SITE.phones.dispatch];
  return (
    <>
      <PageBanner motif="radio" variant={3} code="Dispatch">
        <SectionHeading
          eyebrow="Get in touch"
          title={<>Talk to us about your <span className="text-gold-light">security needs</span></>}
          lead="Call any time, or send a message and our team will get back to you."
        />
      </PageBanner>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <h2 className="hud text-[11px] text-gold">Call us · lines open</h2>
            <ul className="mt-5 space-y-4">
              {lines.map((l) => (
                <li key={l.tel}>
                  <a href={`tel:${l.tel}`} className="group flex items-center justify-between gap-4 border border-white/10 bg-navy-950 p-5 transition hover:border-gold">
                    <span>
                      <span className="hud flex items-center gap-2 text-[10px] text-slate-400"><span aria-hidden="true" className="blink h-1.5 w-1.5 rounded-full bg-alert" />{l.label}</span>
                      <span className="display mt-2 block text-4xl text-white group-hover:text-gold-light">{l.display}</span>
                    </span>
                    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f1cb62" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="hud text-[11px] text-gold">Visit</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {SITE.name}<br />{SITE.address[0]}<br />{SITE.address[1]}
            </p>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-gold-light underline underline-offset-4">
              Get directions
            </a>
            <p className="mt-6 text-slate-300">
              Email: <a href={`mailto:${SITE.email}`} className="text-white underline decoration-gold underline-offset-4">{SITE.email}</a>
            </p>
          </div>

          <div className="cut-corner bg-gold p-7 text-ink">
            <h2 className="display text-3xl">Security officers &amp; contractors</h2>
            <p className="mt-2">
              Text <strong>CONTRACTOR</strong> to{" "}
              <a href={`sms:${SITE.phones.contractorText.tel}`} className="font-bold underline underline-offset-4">{SITE.phones.contractorText.display}</a>{" "}
              or email your current resume to our Operations Manager.
            </p>
          </div>
        </div>

        <div className="relative border border-white/10 bg-navy-950 p-7 sm:p-10">
          <span aria-hidden="true" className="absolute left-0 top-0 h-1 w-24 bg-gold" />
          <p className="hud text-[10px] text-slate-500">Form STR-01</p>
          <h2 className="display mt-2 text-4xl text-white">Request a consultation</h2>
          <div className="mt-6"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
