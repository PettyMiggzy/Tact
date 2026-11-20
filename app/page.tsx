import Image from "next/image";
import Link from "next/link";
import dims from "@/lib/image-dims.json";
import { AFFILIATIONS, CREDENTIALS, LEADER, SERVICES, SITE, TESTIMONIALS, TRAINING_MODULES } from "@/lib/site";
import { ButtonLink, Eyebrow, HudFrame, SectionHeading, Ticker } from "@/components/ui";
import {
  CareerBadgeArt,
  Chevrons,
  HeroArt,
  IncidentReportArt,
  SERVICE_ICONS,
  ServiceIcon,
  Stars,
  TopoBackground,
  VerifiedStamp,
} from "@/components/art";

const d = dims as unknown as Record<string, [number, number]>;

const STATS = [
  { big: "30", unit: "yrs", small: "combined management experience" },
  { big: "24/7", unit: "", small: "patrols & live dispatch" },
  { big: "36", unit: "", small: "training modules before deployment" },
  { big: "A+", unit: "", small: "Better Business Bureau rating" },
];

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/range-team.jpg"
          alt="Superior Tactical Response officers and instructors at the firing range"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[65%_40%] saturate-[0.8]"
        />
        {/* duotone + legibility layers */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-800/60 mix-blend-multiply" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/55 md:bg-transparent md:bg-gradient-to-r md:from-ink md:via-ink/75 md:to-transparent" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div aria-hidden="true" className="scanlines absolute inset-0 -z-10 opacity-40" />
        <div aria-hidden="true" className="grain absolute inset-0 -z-10" />

        <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:pt-24">
          <div className="hud flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-2 text-gold-light">
              <span aria-hidden="true" className="blink h-2 w-2 rounded-full bg-alert" />
              Dispatch online 24/7
            </span>
            <span>Indiana license {SITE.license}</span>
            <span>Indianapolis, IN</span>
          </div>

          <h1 className="display mt-8 max-w-4xl text-[clamp(3.6rem,11vw,9.5rem)] text-white">
            Who&rsquo;s securing
            <span className="block text-gold-light">your assets?</span>
          </h1>

          <div className="mt-8 flex max-w-2xl items-stretch gap-5">
            <span aria-hidden="true" className="w-1 shrink-0 bg-gold" />
            <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
              The most technologically advanced security service in the industry. Armed and unarmed protection agents, 24/7 patrols and real-time incident mapping across Indiana.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Request a consultation</ButtonLink>
            <ButtonLink href={`tel:${SITE.phones.office.tel}`} variant="outline">
              Call {SITE.phones.office.display}
            </ButtonLink>
          </div>

          <dl className="mt-16 grid grid-cols-2 border-t border-white/15 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.small} className={`py-6 pr-4 ${i > 0 ? "md:border-l md:border-white/15 md:pl-6" : ""} ${i % 2 === 1 ? "border-l border-white/15 pl-6 md:pl-6" : ""}`}>
                <dt className="display text-6xl text-white">
                  {s.big}
                  {s.unit && <span className="ml-1 text-3xl text-gold">{s.unit}</span>}
                </dt>
                <dd className="hud mt-2 text-[10px] leading-relaxed text-slate-400">{s.small}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TRAINING TICKER */}
      <div className="border-y border-ink bg-gold py-3 text-ink">
        <Ticker items={TRAINING_MODULES.map((m) => m.replace(/[“”]/g, ""))} />
      </div>

      {/* THE QUESTION */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-32">
        <TopoBackground variant={2} />
        <div className="relative mx-auto max-w-5xl px-5">
          <Chevrons className="h-10 w-12 text-gold" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Crime does not have a zip code and no one is immune. With violent crime on the rise, you can no longer afford to be unprepared. Ask yourself one question:
          </p>
          <blockquote className="display mt-8 text-[clamp(2.6rem,6.5vw,5.5rem)] text-white">
            &ldquo;Would I entrust the safety of my <span className="text-gold-light">family</span> to my current security provider?&rdquo;
          </blockquote>
          <p className="mt-8 max-w-2xl text-lg text-slate-300">
            If your answer was not instant, it is time to move forward to the most technologically advanced agency in the great state of Indiana.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative border-t border-white/10 bg-navy-950 py-24">
        <div aria-hidden="true" className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Professional security services"
            title={<>Protection built <span className="text-gold-light">around your property</span></>}
            lead="Uniformed or covert. Armed or unarmed. Residential, commercial or government. Every post is staffed by trained, accountable agents."
          />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="group relative bg-navy-950 p-8 transition hover:bg-navy-900">
                <span aria-hidden="true" className="absolute left-0 top-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                <div className="flex items-start justify-between">
                  <ServiceIcon name={SERVICE_ICONS[i]} />
                  <span className="display text-5xl text-white/10 transition group-hover:text-gold/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="display mt-8 text-3xl text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SILENT WITNESS */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Exclusive response agent program</Eyebrow>
            <h2 className="display mt-4 text-5xl text-white sm:text-6xl">
              The Silent Witness <span className="text-gold-light">Initiative</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              A state-of-the-art program that increases the proficiency and accountability of our protection agents, while decreasing the liability for all parties.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                ["Mapped", "Every incident is pinned to a live map of your property."],
                ["Recorded", "Photo, video and audio captured on scene."],
                ["Delivered", "Confidential reports sent straight to your hand-held device."],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-5 border-l-2 border-gold/60 pl-5">
                  <div>
                    <p className="display text-2xl text-white">{k}</p>
                    <p className="text-slate-400">{v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              <HeroArt />
              <Image src="/images/logo.png" alt="Superior Tactical Response Agency seal" width={512} height={512} className="absolute left-1/2 top-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl" />
            </div>
            <div className="absolute -bottom-10 -left-4 hidden w-64 shadow-2xl shadow-black/60 sm:block lg:-left-16">
              <IncidentReportArt />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl gap-8 px-5 sm:grid-cols-2">
          {(["fleet-1.jpg", "fleet-2.jpg"] as const).map((f, i) => (
            <HudFrame key={f}>
              <figure className="relative overflow-hidden">
                <Image src={`/images/${f}`} alt={i === 0 ? "Marked Superior Tactical Response patrol vehicle" : "Patrol vehicle fleet parked outside a property"} width={d[f][0]} height={d[f][1]} className="aspect-[16/10] w-full object-cover" />
                <figcaption className="hud absolute bottom-0 left-0 bg-ink/80 px-3 py-2 text-[10px] text-gold-light">
                  Unit 0{i + 1} · Patrol fleet
                </figcaption>
              </figure>
            </HudFrame>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative overflow-hidden border-y border-white/10 bg-navy-950 py-24">
        <TopoBackground variant={3} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_1fr]">
          <HudFrame className="order-2 lg:order-1">
            <Image src="/images/awards-desk.jpg" alt="Superior Tactical Response awards, certificates and accreditations on display" width={d["awards-desk.jpg"][0]} height={d["awards-desk.jpg"][1]} className="w-full object-cover" />
          </HudFrame>
          <div className="order-1 lg:order-2">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="display mt-4 text-5xl text-white sm:text-6xl">
              Certified at <span className="text-gold-light">the top</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              The standards our agents are held to start with {LEADER.name}, whose personal certifications are on file and on display.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {LEADER.certs.map((c) => (
                <li key={c} className="flex items-center gap-3 border border-white/10 bg-ink/60 px-4 py-3">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" className="shrink-0"><path d="M2 8.5l4 4 8-9" fill="none" stroke="#f1cb62" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-sm font-medium text-slate-200">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="Ongoing professional training"
            title={<><span className="text-gold-light">36 modules.</span> Before they ever reach your property.</>}
            lead="Use of force, incident mapping, court testimony, de-escalation, active-shooter response and more."
          />
          <ButtonLink href="/training" variant="outline">Watch training videos</ButtonLink>
        </div>
        <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING_MODULES.map((m, i) => (
            <li key={m} className="flex items-baseline gap-4 bg-ink px-5 py-4 transition hover:bg-navy-900">
              <span className="hud w-7 shrink-0 text-[11px] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[15px] text-slate-200">{m}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-paper py-24 text-navy-950">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading light center eyebrow="Client testimonials" title="What our clients say" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="cut-corner relative flex flex-col bg-white p-8 shadow-[0_20px_40px_-24px_rgba(5,10,26,0.35)]">
                <svg aria-hidden="true" viewBox="0 0 64 48" className="absolute right-6 top-6 h-12 w-16 text-navy-950/[0.06]" fill="currentColor">
                  <path d="M0 48V28C0 12 8 3 24 0l3 7C18 10 14 15 14 22h12v26zm36 0V28C36 12 44 3 60 0l3 7c-9 3-13 8-13 15h12v26z" />
                </svg>
                <Stars label="5 out of 5 stars" />
                <blockquote className="mt-5 flex-1 leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-navy-950/10 pt-4">
                  <p className="display text-2xl text-navy-950">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <SectionHeading
              eyebrow="Certified & accredited"
              title={<>Credentials <span className="text-gold-light">on file</span></>}
              lead="Don't take our word for it. Every certification below is a real document you can inspect."
            />
            <ButtonLink href="/credentials" variant="outline">Open the full file</ButtonLink>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {CREDENTIALS.slice(0, 4).map((c, i) => (
              <Link key={c.file} href="/credentials" className={`group relative block bg-white p-2 shadow-2xl shadow-black/60 transition duration-300 hover:z-10 hover:rotate-0 hover:scale-105 ${TILTS[i]}`}>
                <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-gold/70" />
                <Image src={`/images/${c.file}`} alt={c.title} width={d[c.file][0]} height={d[c.file][1]} className="aspect-[4/5] w-full bg-slate-100 object-cover" />
                <p className="hud px-1 pt-2 text-[9px] text-navy-950">Exhibit {String(i + 1).padStart(2, "0")}</p>
                <VerifiedStamp className="absolute -bottom-5 -right-5 h-16 w-16 rotate-12 drop-shadow md:h-20 md:w-20" />
              </Link>
            ))}
          </div>
          <ul className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {AFFILIATIONS.map((a) => (
              <li key={a} className="hud text-[11px] text-slate-400">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CAREERS */}
      <section className="relative overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="hazard h-3 w-full opacity-90" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[auto_1.3fr_1fr]">
          <div className="mx-auto hidden h-40 w-40 md:block"><CareerBadgeArt /></div>
          <div>
            <Eyebrow>Now recruiting</Eyebrow>
            <h2 className="display mt-4 text-5xl text-white">Work for yourself. <span className="text-gold-light">Backed by us.</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Consultant opportunities for armed and unarmed security officers. Ask how you can start your own company now. A 24-hour dispatcher is available to all contractors, and Taser certification and firearms training are provided for non-certified contractors.
            </p>
          </div>
          <div className="cut-corner bg-gold p-8 text-ink">
            <p className="hud text-[11px]">Text &ldquo;CONTRACTOR&rdquo; to</p>
            <a href={`sms:${SITE.phones.contractorText.tel}`} className="display mt-2 block text-5xl">
              {SITE.phones.contractorText.display}
            </a>
            <p className="mt-4 text-sm">
              Or email your resume to{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold underline underline-offset-4">{SITE.email}</a>
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="hazard h-3 w-full opacity-90" />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-28">
        <div aria-hidden="true" className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <Chevrons className="mx-auto h-10 w-12 text-gold" />
          <h2 className="display mt-8 text-[clamp(3rem,8vw,6.5rem)] text-white">
            Secure your <span className="text-gold-light">investment.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact">Contact us</ButtonLink>
            <ButtonLink href={`tel:${SITE.phones.office.tel}`} variant="outline">{SITE.phones.office.display}</ButtonLink>
          </div>
          <p className="hud mt-10 text-[11px] text-slate-500">
            24-hour courtesy officer dispatch <a href={`tel:${SITE.phones.dispatch.tel}`} className="text-gold-light">{SITE.phones.dispatch.display}</a>
          </p>
        </div>
      </section>
    </>
  );
}
