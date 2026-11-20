import type { Metadata } from "next";
import Image from "next/image";
import dims from "@/lib/image-dims.json";
import { CREDENTIALS, TESTIMONIALS } from "@/lib/site";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { PageBanner, Stars } from "@/components/art";

export const metadata: Metadata = {
  title: "Credentials & Testimonials",
  description:
    "BBB accreditation, Axon certification, USCCA instructor training, Barrett armorer certification, and client testimonials for Superior Tactical Response.",
};

const d = dims as unknown as Record<string, [number, number]>;

export default function CredentialsPage() {
  return (
    <>
      <PageBanner motif="seal" variant={2}>
        <SectionHeading
          eyebrow="Testimonials & ongoing certs"
          title="Proof, not promises"
          lead="Accreditations, certifications and the clients who vouch for us."
        />
      </PageBanner>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-serif text-2xl text-white">Certifications &amp; awards</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map((c) => (
            <figure key={c.file} className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
              <a href={`/images/${c.file}`} target="_blank" rel="noopener noreferrer" className="block bg-black">
                <Image
                  src={`/images/${c.file}`}
                  alt={c.title}
                  width={d[c.file][0]}
                  height={d[c.file][1]}
                  className="aspect-[4/3] w-full object-contain"
                />
              </a>
              <figcaption className="p-5">
                <p className="font-serif text-lg text-white">{c.title}</p>
                <p className="mt-1 text-sm text-slate-400">{c.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading light eyebrow="Client testimonials" title="In our clients' words" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm">
                <Stars label="5 out of 5 stars" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-navy-900/10 pt-4">
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 grid items-center gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-[280px_1fr]">
            <a href="/images/newfields-letter.jpg" target="_blank" rel="noopener noreferrer">
              <Image src="/images/newfields-letter.jpg" alt="Letter of recommendation from Newfields, dated February 24, 2022" width={d["newfields-letter.jpg"][0]} height={d["newfields-letter.jpg"][1]} className="rounded-lg border border-slate-200" />
            </a>
            <div>
              <h3 className="font-serif text-2xl text-navy-900">Letter of recommendation: Newfields</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Newfields&rsquo; Director of Security gave Superior Tactical Response a 5-star rating after the team stepped in on short notice to staff their control room and bag check during the Winterlights festival.
              </p>
              <p className="mt-2 text-sm text-slate-500">Tap the letter to read it in full.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="font-serif text-3xl text-white">Ready to see the difference?</h2>
        <div className="mt-8"><ButtonLink href="/contact">Request a consultation</ButtonLink></div>
      </section>
    </>
  );
}
