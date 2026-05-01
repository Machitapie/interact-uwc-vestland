const projects = [
  {
    status: "Active",
    statusColor: "bg-uwc text-white",
    title: "NGO Awareness Campaign",
    sub: "PBL · Spring 2026",
    body: "Our flagship project — partnering with one of Caritas Norway, Naturvernforbundet, or Lions Club to run an awareness campaign that pulls students directly into the work. Currently shaping the PBL proposal.",
    tags: ["Caritas Norway", "Naturvernforbundet", "Lions Club"],
  },
  {
    status: "Planning",
    statusColor: "bg-rotary text-white",
    title: "Førde Stage Takeover",
    sub: "Annually · Førde",
    body: "Once a year, Interact takes the stage at a Førde Rotary meeting to present what UWC students are building locally. A direct line between international students and the host community.",
    tags: ["Førde Rotary", "Community"],
  },
  {
    status: "Upcoming",
    statusColor: "bg-ink text-paper",
    title: "Bergen Conference Delegation",
    sub: "September / October 2026",
    body: "Sending at least two RCN delegates to the Bergen Rotary Conference. A space to learn from established clubs, meet district leadership, and bring back a sharper roadmap.",
    tags: ["Bergen", "Rotary District"],
  },
  {
    status: "Upcoming",
    statusColor: "bg-ink text-paper",
    title: "Interact Week",
    sub: "November 2026",
    body: "A week of programming on campus around Interact's mission — talks, workshops, and a kickoff for the year's project pipeline. Coordinated with Rotary's global Interact Week.",
    tags: ["Campus", "Awareness"],
  },
  {
    status: "Exploring",
    statusColor: "bg-cream text-ink border border-ink/15",
    title: "Copenhagen Rotaract Exchange",
    sub: "2026 / 2027",
    body: "Early conversations with the Copenhagen Rotary Club about cross-club project exchanges and shared international initiatives — small projects locally, larger ones globally.",
    tags: ["International", "Rotaract"],
  },
  {
    status: "Future",
    statusColor: "bg-cream text-ink border border-ink/15",
    title: "Bergen Youth Exchange 2027",
    sub: "September 2027",
    body: "RCN delegation to the 2027 Youth Exchange Program in Bergen — building leadership pipeline for the next generation of Interactors at UWC Vestland.",
    tags: ["Youth Exchange", "Leadership"],
  },
];

export default function Projects() {
  return (
    <>
      <section className="pt-[140px] pb-16 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-uwc/[.10] blur-3xl"/>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-uwc"/>Projects</span>
          <h1 className="mt-6 text-display font-bold tracking-tight max-w-[14ch]">
            What we're <span className="gradient-text">shipping.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/65 leading-relaxed">
            Impact over advocacy. Every project on this page has a real partner, a real timeline, and a student who's accountable for it.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article key={p.title} className="reveal group relative bg-white rounded-3xl p-8 lg:p-10 border border-ink/[.06] hover-lift overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-rotary/0 to-uwc/0 group-hover:from-rotary/[.05] group-hover:to-uwc/[.08] blur-2xl transition-all duration-700" />
                <div className="relative flex items-center justify-between">
                  <span className={`text-[11px] uppercase tracking-[0.14em] font-bold px-3 py-1.5 rounded-full ${p.statusColor}`}>{p.status}</span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-ink/40 font-bold">{String(i+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span>
                </div>
                <h3 className="relative mt-6 text-2xl lg:text-3xl font-bold tracking-tight leading-tight">{p.title}</h3>
                <div className="relative mt-2 text-sm text-ink/50 font-medium">{p.sub}</div>
                <p className="relative mt-5 text-ink/70 leading-relaxed">{p.body}</p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-ink/[.04] text-ink/65 font-medium">{t}</span>
                  ))}
                </div>
                <div className="relative mt-8 h-px w-12 bg-ink/15 group-hover:w-full group-hover:bg-rotary transition-all duration-700" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream/40 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-16">
            <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-rotary"/>How we ship</span>
            <h2 className="mt-5 text-huge font-bold tracking-tight">Our process.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
            {[
              { n: "01", t: "Idea", b: "Any student can propose a project. Bring a problem, not a solution." },
              { n: "02", t: "Match", b: "We connect the idea to Rotary's network, NGOs, or local government." },
              { n: "03", t: "Build", b: "A small team owns it. We help with structure, partnerships, funding." },
              { n: "04", t: "Ship", b: "Concrete outputs. Not a slide deck — a campaign, an event, a deliverable." },
            ].map(s => (
              <div key={s.n} className="bg-paper p-7 lg:p-8 hover:bg-white transition-colors duration-300">
                <div className="text-xs font-bold tracking-[0.2em] text-rotary">{s.n}</div>
                <div className="mt-3 text-xl font-bold tracking-tight">{s.t}</div>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
