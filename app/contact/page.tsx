import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Superior Tactical Response in Indianapolis. Office, contract office and 24-hour courtesy officer dispatch lines.",
};

export default function ContactPage() {
  const lines = [SITE.phones.office, SITE.phones.contract, SITE.phones.dispatch];
  return (
    <>
      <section className="bg-gradient-to-b from-navy-800 to-navy-950 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Get in touch"
            title="Talk to us about your security needs"
            lead="Call any time, or send a message and our team will get back to you."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-white">Call us</h2>
            <ul className="mt-5 space-y-4">
              {lines.map((l) => (
                <li key={l.tel} className="rounded-xl border border-white/10 bg-navy-900 p-5">
                  <p className="text-sm text-slate-400">{l.label}</p>
                  <a href={`tel:${l.tel}`} className="mt-1 block font-serif text-2xl text-gold-light">{l.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-white">Visit</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              {SITE.name}<br />{SITE.address[0]}<br />{SITE.address[1]}
            </p>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-gold-light underline underline-offset-4">
              Get directions
            </a>
            <p className="mt-6 text-slate-300">
              Email: <a href={`mailto:${SITE.email}`} className="text-white underline decoration-gold underline-offset-4">{SITE.email}</a>
            </p>
          </div>

          <div className="rounded-xl border border-gold/40 bg-navy-900 p-6">
            <h2 className="font-serif text-xl text-white">Security officers &amp; contractors</h2>
            <p className="mt-2 text-slate-300">
              Text <strong className="text-white">CONTRACTOR</strong> to{" "}
              <a href={`sms:${SITE.phones.contractorText.tel}`} className="text-gold-light underline underline-offset-4">{SITE.phones.contractorText.display}</a>{" "}
              or email your current resume to our Operations Manager.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-7 sm:p-9">
          <h2 className="font-serif text-2xl text-white">Request a consultation</h2>
          <div className="mt-6"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
