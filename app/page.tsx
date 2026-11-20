import Image from "next/image";
import Link from "next/link";
import dims from "@/lib/image-dims.json";
import { CREDENTIALS, SERVICES, SITE, TESTIMONIALS, TRAINING_MODULES } from "@/lib/site";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { CareerBadgeArt, HeroArt, IncidentReportArt, SERVICE_ICONS, ServiceIcon, Stars, TopoBackground } from "@/components/art";

const d = dims as unknown as Record<string, [number, number]>;

const STATS = [
  { big: "30 yrs", small: "combined management experience" },
  { big: "24/7", small: "patrol coverage and live dispatch" },
  { big: "36", small: "training modules before deployment" },
  { big: "A+", small: "Better Business Bureau rating" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950">
        <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <TopoBackground variant={1} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div>
            <Eyebrow>Indiana contract security &middot; License {SITE.license}</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Who&rsquo;s securing <span className="text-gold-light">your assets?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We are dedicated to providing the most technologically advanced security service in the industry. We focus on risk while allowing our clients to focus on their success.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Request a consultation</ButtonLink>
              <ButtonLink href={`tel:${SITE.phones.office.tel}`} variant="outline">
                Call {SITE.phones.office.display}
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Indiana&rsquo;s best-rated security consultant &middot; BBB &ldquo;A+&rdquo; rated
            </p>
          </div>
          <div className="relative mx-auto w-64 sm:w-72 md:w-full md:max-w-sm">
            <div className="absolute inset-0 -z-0 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative aspect-square w-full">
              <HeroArt />
              <Image src="/images/logo.png" alt="Superior Tactical Response Agency seal" width={512} height={512} priority className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-navy-900">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.big} className="text-center">
              <dt className="font-serif text-4xl text-gold-light">{s.big}</dt>
              <dd className="mt-1 text-sm text-slate-400">{s.small}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* THE QUESTION */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <Eyebrow>The need has never been greater</Eyebrow>
        <p className="mt-5 text-lg leading-relaxed text-slate-300">
          Crime does not have a zip code and no one is immune. With violent crime on the rise and economic decline nationwide, you can no longer afford to be unprepared.
        </p>
        <h2 className="mt-10 font-serif text-3xl leading-snug text-white sm:text-4xl">
          Would I entrust the safety of my family to my current security provider?
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          If your answer was not instant, it is time to move forward. Make the change to the most technologically advanced agency in the great state of Indiana.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            light
            eyebrow="Our professional security services"
            title="Protection built around your property"
            lead="Uniformed or covert. Armed or unarmed. Residential, commercial or government. Every post is staffed by trained, accountable agents."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm">
                <ServiceIcon name={SERVICE_ICONS[i]} />
                <h3 className="mt-5 font-serif text-xl text-navy-900">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SILENT WITNESS */}
      <section className="relative overflow-hidden bg-navy-800">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <Eyebrow>Exclusive response agent program</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">The &ldquo;Silent Witness Initiative&rdquo;</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              This state-of-the-art program increases the proficiency and accountability of our protection agents, while decreasing the liability for all parties.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Every incident is documented in real time and mapped, with photo, video and audio delivered to you the moment it matters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 mx-auto w-full max-w-md"><IncidentReportArt /></div>
            <Image src="/images/fleet-1.jpg" alt="Marked Superior Tactical Response patrol vehicles" width={d["fleet-1.jpg"][0]} height={d["fleet-1.jpg"][1]} className="h-full w-full rounded-xl object-cover" />
            <Image src="/images/fleet-2.jpg" alt="Patrol vehicle fleet parked outside a property" width={d["fleet-2.jpg"][0]} height={d["fleet-2.jpg"][1]} className="h-full w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Ongoing professional training"
          title="36 training modules, completed before deployment to your property"
          lead="Our agents are trained on use of force, incident mapping, court testimony, de-escalation, active-shooter response and more, all before they ever reach your site."
        />
        <details className="group mt-10 rounded-2xl border border-white/10 bg-navy-900 p-6">
          <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-widest text-gold-light marker:hidden">
            <span className="group-open:hidden">Show all 36 modules +</span>
            <span className="hidden group-open:inline">Hide modules &minus;</span>
          </summary>
          <ol className="mt-6 grid gap-x-10 gap-y-2 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            {TRAINING_MODULES.map((m, i) => (
              <li key={m} className="flex gap-3">
                <span className="w-6 shrink-0 text-right font-semibold text-gold">{i + 1}.</span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </details>
        <div className="mt-8">
          <ButtonLink href="/training" variant="outline">Watch our training videos</ButtonLink>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading light center eyebrow="Client testimonials" title="What our clients say" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Certified &amp; accredited"
          title="Credentials you can verify"
          lead="BBB accreditation, Axon certification, USCCA instructor training and Barrett armorer certification, among others."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {CREDENTIALS.slice(0, 4).map((c) => (
            <Link key={c.file} href="/credentials" className="group block overflow-hidden rounded-xl border border-white/10 bg-navy-900">
              <Image
                src={`/images/${c.file}`}
                alt={c.title}
                width={d[c.file][0]}
                height={d[c.file][1]}
                className="aspect-square w-full bg-black object-contain transition duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/credentials" variant="outline">See all credentials</ButtonLink>
        </div>
      </section>

      {/* CAREERS */}
      <section className="border-y border-white/10 bg-navy-900">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[auto_1.4fr_1fr]">
          <div className="mx-auto hidden h-36 w-36 md:block"><CareerBadgeArt /></div>
          <div>
            <Eyebrow>Now recruiting</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Consultant opportunities for armed &amp; unarmed security officers</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Why work for someone else when you can work for yourself? Ask us how you can start your own company now. A 24-hour dispatcher is available to all contractors. Taser certification and firearms training are provided for non-certified contractors.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-navy-950 p-7 text-center">
            <p className="text-sm uppercase tracking-widest text-slate-400">Text &ldquo;CONTRACTOR&rdquo; to</p>
            <a href={`sms:${SITE.phones.contractorText.tel}`} className="mt-2 block font-serif text-3xl text-gold-light">
              {SITE.phones.contractorText.display}
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Or email your resume to our Operations Manager at{" "}
              <a href={`mailto:${SITE.email}`} className="text-white underline decoration-gold underline-offset-4">{SITE.email}</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">Ask how we can help secure your investment.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contact">Contact us</ButtonLink>
          <ButtonLink href={`tel:${SITE.phones.office.tel}`} variant="outline">{SITE.phones.office.display}</ButtonLink>
        </div>
      </section>
    </>
  );
}
