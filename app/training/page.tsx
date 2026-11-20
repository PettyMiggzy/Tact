import type { Metadata } from "next";
import { SectionHeading, ButtonLink } from "@/components/ui";
import { SITE } from "@/lib/site";
import { PageBanner } from "@/components/art";

export const metadata: Metadata = {
  title: "Training",
  description:
    "See how Superior Tactical Response trains: multiple-target drills, pro-active patrols, Axon body-camera scenarios, Taser certification and active-shooter response.",
};

type Video = { provider: "vimeo" | "youtube"; id: string; title: string; note?: string };

const VIDEOS: Video[] = [
  { provider: "vimeo", id: "776455516", title: "Multiple targets while on the move" },
  { provider: "vimeo", id: "776454744", title: "Transitioning between targets & weapons" },
  { provider: "vimeo", id: "776459382", title: "Pro-active foot patrols" },
  {
    provider: "vimeo",
    id: "1049066583",
    title: "Axon body cam: proactive patrol",
    note: "While conducting a vehicle patrol, a courtesy officer observed an autistic child unattended near a body of water and had STR dispatch contact IMPD to assist with recovery of the lost child.",
  },
  { provider: "vimeo", id: "776466717", title: "Axon Taser certification" },
  { provider: "vimeo", id: "776461543", title: "Axon Taser certification" },
  { provider: "vimeo", id: "776466889", title: "Axon Taser certification" },
  { provider: "vimeo", id: "776478129", title: "Axon body camera interaction training", note: "Person asked to vacate private property." },
  { provider: "vimeo", id: "776492706", title: "Axon body camera interaction training", note: "Priority dispatch: person struck by vehicle." },
  { provider: "youtube", id: "pY-CSX4NPtg", title: "Options for consideration: active shooter training" },
  { provider: "youtube", id: "BrfasXp3BHg", title: "Run – Hide – Fight" },
  { provider: "youtube", id: "VM4whT4KoAg", title: "Fleet cam: threat to life" },
];

function src(v: Video) {
  return v.provider === "vimeo"
    ? `https://player.vimeo.com/video/${v.id}?dnt=1`
    : `https://www.youtube-nocookie.com/embed/${v.id}`;
}

export default function TrainingPage() {
  return (
    <>
      <PageBanner motif="target" variant={0} code="Training">
        <SectionHeading
          eyebrow="Courtesy officer training"
          title={<>We train to win. <span className="text-gold-light">Every time.</span></>}
          lead="Real scenarios, real equipment, real documentation. Watch our officers train and respond."
        />
      </PageBanner>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {VIDEOS.map((v, i) => (
            <article key={v.id} className="group border border-white/10 bg-navy-950 transition hover:border-gold/50">
              <div className="relative aspect-video bg-black">
                <iframe
                  src={src(v)}
                  title={v.title}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="border-t border-white/10 p-6">
                <p className="hud flex items-center gap-2 text-[10px] text-slate-500">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-alert" />
                  File {String(i + 1).padStart(2, "0")} · {v.provider === "vimeo" ? "Field footage" : "Briefing"}
                </p>
                <h2 className="display mt-2 text-3xl text-white">{v.title}</h2>
                {v.note && <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.note}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="cut-corner mt-20 bg-gold p-10 text-center text-ink">
          <h2 className="display text-4xl sm:text-5xl">Want officers trained like this on your property?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="dark">Request a consultation</ButtonLink>
            <ButtonLink href={`tel:${SITE.phones.office.tel}`} variant="dark">{SITE.phones.office.display}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
