import Link from "next/link";
import { getProjects } from "@/sanity/client";

export const revalidate = 60;

const STATUS_COPY: Record<string, string> = {
  active: "Active",
  planning: "Planning",
  upcoming: "Upcoming",
  exploring: "Exploring",
  future: "Future",
  completed: "Completed",
};

export default async function Projects() {
  const projects = (await getProjects()) || [];

  return (
    <>
      <section className="bg-[var(--bg)]">
        <div className="container-x pt-16 lg:pt-24 pb-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="kicker text-[var(--rotary)] mb-5">Projects</div>
              <h1 className="h-display text-[clamp(2.6rem,7vw,6.2rem)]">
                What we're building
              </h1>
            </div>
          </div>
        </div>
      </section>

      {projects.length === 0 ? (
        <section className="bg-white border-y border-[var(--rule)]">
          <div className="container-x py-32 lg:py-40">
            <div className="max-w-3xl">
              <div className="text-7xl lg:text-8xl font-extrabold tabular leading-none text-[var(--rotary)]">01</div>
              <h2 className="mt-8 h-section text-[clamp(2.2rem,4vw,3.4rem)]">
                More projects to come
              </h2>
              <p className="mt-7 text-[18px] leading-[1.6] text-[var(--ink)]/75 max-w-2xl">
                We were chartered in spring 2026 and we're shaping our first wave of projects right now — together with Førde Rotary Club, NGOs in Norway, and partners across the Rotary network. Watch this space.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/get-involved" className="cta">Pitch a project <span className="cta-arrow">→</span></Link>
                <a href="https://www.instagram.com/interact.uwc.vestland/" target="_blank" rel="noreferrer" className="cta-ghost">Follow us <span className="cta-arrow">→</span></a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white border-y border-[var(--rule)]">
          <div className="container-x">
            <div className="border-t border-[var(--ink)]">
              {projects.map((p, i) => (
                <article key={p._id} className="reveal grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-[var(--rule)]">
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="text-6xl lg:text-7xl font-extrabold tabular leading-none text-[var(--rotary)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="tag self-start">{STATUS_COPY[p.status] || p.status}</span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.05]">{p.title}</h3>
                    {p.subtitle && <div className="mt-2 kicker text-[var(--ink)]/55">{p.subtitle}</div>}
                  </div>
                  <div className="lg:col-span-5">
                    {p.summary && <p className="text-[17px] leading-[1.6] text-[var(--ink)]/80">{p.summary}</p>}
                    {p.partners && p.partners.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] text-[var(--ink)]/70">
                        {p.partners.map((t, idx) => (
                          <span key={t} className="flex items-center gap-2">
                            {idx > 0 && <span className="w-1 h-1 rounded-full bg-[var(--ink)]/30"/>}
                            <span className="font-bold uppercase tracking-[0.12em]">{t}</span>
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
      )}

      {/* Process */}
      <section className="bg-[var(--bg)]">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <div className="kicker text-[var(--rotary)] mb-5">How we ship</div>
              <h2 className="h-section text-[clamp(2.2rem,4.4vw,3.8rem)]">How we work</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {[
              { n: "01", t: "Idea", b: "Bring a problem, not a solution — we'll shape it together." },
              { n: "02", t: "Match", b: "Connect to Rotary's network, NGOs, or local government." },
              { n: "03", t: "Build", b: "A small team owns it — supported on structure, partners, and funding." },
              { n: "04", t: "Ship", b: "Concrete outputs. Not a slide deck — a campaign, an event, an outcome." },
            ].map(s => (
              <div key={s.n} className="bg-white p-7 lg:p-9">
                <div className="text-[12px] font-bold tracking-[0.18em] tabular text-[var(--rotary)]">{s.n}</div>
                <div className="mt-3 text-2xl font-extrabold tracking-tight">{s.t}</div>
                <p className="mt-3 text-[14.5px] text-[var(--ink)]/75 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
