import type { Metadata } from "next";
import Image from "next/image";
import dims from "@/lib/image-dims.json";
import { AFFILIATIONS, CREDENTIALS, LEADER, TESTIMONIALS } from "@/lib/site";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { PageBanner, Stars, VerifiedStamp } from "@/components/art";

export const metadata: Metadata = {
  title: "Credentials & Testimonials",
  description:
    "BBB accreditation, Axon certification, USCCA instructor training, Barrett armorer certification, and client testimonials for Superior Tactical Response.",
};

const d = dims as unknown as Record<string, [number, number]>;

export default function CredentialsPage() {
  return (
    <>
      <PageBanner motif="seal" variant={2} code="Case file">
        <SectionHeading
          eyebrow="Testimonials & ongoing certs"
          title={<>Proof, <span className="text-gold-light">not promises.</span></>}
          lead="Accreditations, certifications and the clients who vouch for us. Every exhibit is a real document. Tap any one to inspect it full size."
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {AFFILIATIONS.map((a) => (
            <li key={a} className="hud border border-gold/40 bg-gold/5 px-3 py-1.5 text-[10px] text-gold-light">{a}</li>
          ))}
        </ul>
      </PageBanner>

      {/* EXHIBITS */}
      <section className="relative bg-ink py-20">
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
            <h2 className="display text-4xl text-white sm:text-5xl">Certifications &amp; awards</h2>
            <p className="hud text-[11px] text-slate-500">{CREDENTIALS.length} exhibits on file</p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c, i) => (
              <figure key={c.file} className="group">
                <a
                  href={`/images/${c.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-white p-2.5 shadow-2xl shadow-black/70 transition duration-300 group-hover:-translate-y-1"
                >
                  <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 bg-gold/70" />
                  <Image
                    src={`/images/${c.file}`}
                    alt={c.title}
                    width={d[c.file][0]}
                    height={d[c.file][1]}
                    className="aspect-[4/3] w-full bg-slate-100 object-contain"
                  />
                  <VerifiedStamp className="absolute -bottom-6 -right-4 h-20 w-20 rotate-12 opacity-90 transition group-hover:rotate-0" />
                </a>
                <figcaption className="mt-8">
                  <p className="hud text-[10px] text-gold">Exhibit {String(i + 1).padStart(2, "0")}</p>
                  <p className="display mt-1 text-3xl text-white">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{c.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL CERTS */}
      <section className="border-y border-white/10 bg-navy-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="display mt-4 text-5xl text-white">{LEADER.name}</h2>
            <p className="mt-4 text-lg text-slate-400">Personal certifications and appointments on record.</p>
          </div>
          <ol className="grid gap-px bg-white/10 sm:grid-cols-2">
            {LEADER.certs.map((c, i) => (
              <li key={c} className="flex items-center gap-4 bg-navy-950 px-5 py-4">
                <span className="hud w-6 text-[11px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium text-slate-200">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-paper py-20 text-navy-950">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading light eyebrow="Client testimonials" title="In our clients' words" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="cut-corner flex flex-col bg-white p-8 shadow-[0_20px_40px_-24px_rgba(5,10,26,0.35)]">
                <Stars label="5 out of 5 stars" />
                <blockquote className="mt-5 flex-1 leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-navy-950/10 pt-4">
                  <p className="display text-2xl text-navy-950">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 grid items-center gap-10 bg-navy-950 p-6 text-white sm:p-10 md:grid-cols-[300px_1fr]">
            <a href="/images/newfields-letter.jpg" target="_blank" rel="noopener noreferrer" className="relative block -rotate-2 bg-white p-2 shadow-2xl transition hover:rotate-0">
              <Image src="/images/newfields-letter.jpg" alt="Letter of recommendation from Newfields, dated February 24, 2022" width={d["newfields-letter.jpg"][0]} height={d["newfields-letter.jpg"][1]} />
              <VerifiedStamp className="absolute -bottom-6 -right-6 h-20 w-20 rotate-12" />
            </a>
            <div>
              <p className="hud text-[11px] text-gold">Letter of recommendation</p>
              <h3 className="display mt-2 text-4xl sm:text-5xl">Newfields: <span className="text-gold-light">5 stars</span></h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Newfields&rsquo; Director of Security gave Superior Tactical Response a 5-star rating after the team stepped in on short notice to staff their control room and bag check during the Winterlights festival.
              </p>
              <p className="hud mt-4 text-[10px] text-slate-500">Tap the letter to read it in full</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-center">
        <h2 className="display text-5xl text-white sm:text-6xl">Ready to see <span className="text-gold-light">the difference?</span></h2>
        <div className="mt-10"><ButtonLink href="/contact">Request a consultation</ButtonLink></div>
      </section>
    </>
  );
}
