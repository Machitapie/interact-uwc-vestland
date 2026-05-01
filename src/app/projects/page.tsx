import { getProjects, ProjectDoc } from "@/sanity/client";

export const revalidate = 60;

const FALLBACK: ProjectDoc[] = [
  { _id: "f1", title: "NGO Awareness Campaign", subtitle: "PBL · Spring 2026", status: "active",
    summary: "Our flagship project — partnering with one of Caritas Norway, Naturvernforbundet, or Lions Club to run an awareness campaign that pulls students directly into the work.",
    partners: ["Caritas Norway", "Naturvernforbundet", "Lions Club"], order: 10 },
  { _id: "f2", title: "Førde Stage Takeover", subtitle: "Annually · Førde", status: "planning",
    summary: "Once a year, Interact takes the stage at a Førde Rotary meeting to present what UWC students are building locally.",
    partners: ["Førde Rotary", "Community"], order: 20 },
];

const STATUS_COPY: Record<string, string> = {
  active: "Active",
  planning: "Planning",
  upcoming: "Upcoming",
  exploring: "Exploring",
  future: "Future",
  completed: "Completed",
};

export default async function Projects() {
  let projects = await getProjects();
  if (!projects || projects.length === 0) projects = FALLBACK;

  return (
    <>
      <section className="paper-tex">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[var(--rule)]">
            <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-ink/65">Projects · Section §03</div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink/50 tabular">{projects.length} on file</div>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 mt-12">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">Case files</div>
              <h1 className="serif font-medium leading-[0.96] tracking-[-0.02em]" style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}>
                What we're <span className="italic font-light text-rotary">shipping.</span>
              </h1>
            </div>
            <p className="lg:col-span-4 lg:pl-10 lg:border-l border-[var(--rule)] serif text-[18px] leading-relaxed text-ink/85">
              Impact over advocacy. Every project on this page has a real partner, a real timeline, and a name behind it. Edited live from Sanity Studio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="border-t border-ink">
            {projects.map((p, i) => (
              <article key={p._id} className="reveal group grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-[var(--rule)]">
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <div className="serif text-6xl lg:text-7xl font-light text-rotary tabular leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="pill self-start" data-status={p.status}>{STATUS_COPY[p.status] || p.status}</span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="serif font-medium leading-[1.04] tracking-tight" style={{ fontSize: "clamp(1.7rem,2.5vw,2.4rem)" }}>{p.title}</h3>
                  {p.subtitle && <div className="mt-2 text-[13px] uppercase tracking-[0.16em] text-ink/55 font-semibold">{p.subtitle}</div>}
                </div>
                <div className="lg:col-span-5">
                  {p.summary && <p className="serif text-[18px] leading-[1.55] text-ink/85">{p.summary}</p>}
                  {p.partners && p.partners.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[12.5px] text-ink/65">
                      {p.partners.map((t, idx) => (
                        <span key={t} className="flex items-center gap-2">
                          {idx > 0 && <span className="w-1 h-1 rounded-full bg-ink/30"/>}
                          <span className="font-semibold uppercase tracking-[0.1em]">{t}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-cream/40 border-y border-[var(--rule)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-4">
              <div className="eyebrow eyebrow-num" data-num="§02">How we ship</div>
              <h2 className="mt-4 serif font-medium leading-[1.02] tracking-tight" style={{ fontSize: "clamp(2.1rem, 3.6vw, 3.4rem)" }}>Our process.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {[
              { n: "01", t: "Idea", b: "Bring a problem, not a solution. We help shape it." },
              { n: "02", t: "Match", b: "Connect to Rotary's network, NGOs, or local government." },
              { n: "03", t: "Build", b: "A small team owns it. We help with structure, partners, funding." },
              { n: "04", t: "Ship", b: "Concrete outputs. Not a slide deck — a campaign, an event, an outcome." },
            ].map(s => (
              <div key={s.n} className="bg-paper p-7 lg:p-8">
                <div className="text-[12px] font-bold tracking-[0.2em] text-rotary tabular">{s.n}</div>
                <div className="mt-3 text-2xl font-bold tracking-tight">{s.t}</div>
                <p className="mt-2 text-[14.5px] text-ink/75 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
