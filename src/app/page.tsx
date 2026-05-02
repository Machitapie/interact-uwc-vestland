import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import Sponsors from "@/components/Sponsors";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-x pt-10 lg:pt-16 pb-16 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="tag-soft text-[var(--rotary)] mb-7">Chartered with Førde Rotary Club</div>
              <h1 className="h-display text-[clamp(3rem,8.4vw,7.6rem)]">
                Where students at UWC <span className="text-[var(--rotary)]">take action.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[18px] leading-[1.55] text-[var(--ink)]/75">
                We're the <strong>Interact Club of UWC Vestland</strong> — the first Interact Club at any United World College, chartered through Førde Rotary Club. We turn student ideas into projects with real partners, real timelines, and real outcomes.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/get-involved" className="cta">
                  Join the club <span className="cta-arrow">→</span>
                </Link>
                <Link href="/about" className="cta-ghost">
                  About Interact <span className="cta-arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Stats strip — replaces "Vol I" masthead with concrete proof */}
        <div className="border-y border-[var(--rule)] bg-white">
          <div className="container-x py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { k: "14,911", v: "Interact clubs worldwide" },
              { k: "145", v: "Countries with Interact" },
              { k: "342,953", v: "Members globally" },
              { k: "1st", v: "Interact Club at any UWC" },
            ].map((s) => (
              <div key={s.v} className="reveal">
                <div className="text-4xl lg:text-5xl font-extrabold tabular tracking-tight text-[var(--ink)]">{s.k}</div>
                <div className="mt-2 text-[12.5px] uppercase tracking-[0.14em] font-semibold text-[var(--ink)]/55">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE — Service Above Self */}
      <section className="bg-[var(--bg)]">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="kicker text-[var(--rotary)]">Motto</div>
            </div>
            <div className="lg:col-span-10">
              <p className="serif-q text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[1.05] tracking-[-0.018em] text-[var(--ink)]">
                "Service Above Self."
              </p>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.55] text-[var(--ink)]/70">
                It's been Rotary's guiding principle for over a century. For us at UWC Vestland, it shapes how we choose projects, partners, and people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION — clean two-column block */}
      <section className="bg-[var(--ink)] text-white">
        <div className="container-x py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="kicker text-white/60 mb-7">Our mission</div>
              <h2 className="h-section text-[clamp(2.4rem,5vw,4.4rem)]">
                Turn ideas into things <span className="text-[var(--uwc)]">that ship.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[19px] leading-[1.6] text-white/85">
                We support fellow students who want to turn ideas into meaningful, visible, and lasting initiatives — by helping them clarify purpose, build teams, and connect with the right partners, mentors, and organizations beyond campus.
              </p>
              <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10 border border-white/10">
                {[
                  { y: "Short term", b: "Build a strong link with the Førde municipality through a flagship project with our chartering Rotary club." },
                  { y: "Mid term", b: "Expand outreach to Bergen and Oslo over the next two years; deepen the Norwegian Rotary network." },
                  { y: "Long term", b: "Establish a lasting, student-run institution that grows with each new generation of UWC students." },
                ].map((c, i) => (
                  <div key={c.y} className="bg-[var(--ink)] p-6 lg:p-7">
                    <div className="text-[11px] font-bold tracking-[0.18em] tabular text-[var(--uwc)]">0{i+1}</div>
                    <div className="mt-3 text-[14px] uppercase tracking-[0.14em] font-bold text-white">{c.y}</div>
                    <p className="mt-3 text-[14.5px] text-white/75 leading-relaxed">{c.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — three principles, large color-blocked layout */}
      <section className="bg-white">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="kicker text-[var(--rotary)] mb-5">How we work</div>
              <h2 className="h-section text-[clamp(2.2rem,4.4vw,3.8rem)]">Three things we hold to.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {[
              { n: "01", t: "Student-led", b: "The board is students. Project leads are students. We don't ask permission to start — we ask for help to ship." },
              { n: "02", t: "Project-based, not advocacy", b: "Every project answers to a real partner with a real timeline. If we can't point at an outcome, we shouldn't have started." },
              { n: "03", t: "Locally rooted, globally connected", b: "Førde first, then Bergen, Oslo, Copenhagen, Geneva. Real relationships compound over time." },
            ].map((p) => (
              <div key={p.n} className="reveal bg-white p-9 lg:p-12 group">
                <div className="text-7xl lg:text-8xl font-extrabold tabular leading-none text-[var(--rotary)] transition-transform duration-500 group-hover:translate-x-1">{p.n}</div>
                <h3 className="mt-7 text-2xl lg:text-3xl font-extrabold tracking-tight">{p.t}</h3>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--ink)]/75">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FØRDE ROTARY — primary partner spotlight */}
      <section className="bg-[var(--rotary)] text-white">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="kicker text-white/55 mb-7">Our chartering partner</div>
              <h2 className="h-section text-[clamp(2.4rem,5.6vw,5rem)]">
                Førde Rotary Club.
              </h2>
              <p className="mt-7 max-w-xl text-[17.5px] leading-[1.6] text-white/85">
                We were chartered through <strong className="text-white">Førde Rotary Club</strong> in spring 2026. Their president, <strong className="text-white">Gro Eliassen</strong>, and Rotary Norway's Head of Youth Exchange, <strong className="text-white">Rolf Thingvold</strong>, mentor us directly.
              </p>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-white/75">
                Beyond the charter, they connect us to NGOs, fund early projects, and give RCN students the stage at Førde meetings — a real, working bridge between an international school and the local community.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="https://forde.rotary.no/" target="_blank" rel="noreferrer" className="cta-on-color">
                  Visit Førde Rotary <span className="cta-arrow">→</span>
                </a>
                <a href="https://forde.rotary.no/" target="_blank" rel="noreferrer" className="text-white/85 underline underline-offset-4 hover:text-white transition-colors text-[14.5px]">
                  forde.rotary.no
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white text-[var(--ink)] p-8 lg:p-10">
                <div className="flex items-center justify-center h-32">
                  <img src="/logos/forde-rotary.png" alt="Førde Rotary Club" className="max-h-28 object-contain"/>
                </div>
                <div className="rule my-7"/>
                <dl className="space-y-5 text-[14px]">
                  <div>
                    <dt className="kicker text-[var(--ink)]/45">President</dt>
                    <dd className="mt-1 font-bold">Gro Eliassen</dd>
                  </div>
                  <div>
                    <dt className="kicker text-[var(--ink)]/45">Mentor (Norway)</dt>
                    <dd className="mt-1 font-bold">Rolf Thingvold <span className="font-normal text-[var(--ink)]/65">— Head of Rotary Youth Exchange</span></dd>
                  </div>
                  <div>
                    <dt className="kicker text-[var(--ink)]/45">District</dt>
                    <dd className="mt-1 font-bold tabular">D2250 · Norway</dd>
                  </div>
                  <div>
                    <dt className="kicker text-[var(--ink)]/45">Region</dt>
                    <dd className="mt-1 font-bold">Førde · Sogn og Fjordane</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <Sponsors />
    </>
  );
}
