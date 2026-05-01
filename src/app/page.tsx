import Link from "next/link";
import Marquee from "@/components/Marquee";
import Sponsors from "@/components/Sponsors";

export const revalidate = 60;

const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

export default function Home() {
  return (
    <>
      {/* HERO — editorial masthead */}
      <section className="relative paper-tex">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-16 lg:pb-24">
          {/* Top meta strip */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-12 pb-4 border-b border-[var(--rule)]">
            <div className="flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-ink/65 tabular">
              <span>Vol. I · No. 1</span>
              <span className="text-ink/30">·</span>
              <span>Flekke, Vestland</span>
              <span className="text-ink/30 hidden sm:inline">·</span>
              <span className="hidden sm:inline">Chartered April 2026</span>
            </div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink/50 tabular">{today}</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">A Rotary International program · Hosted at UWC RCN</div>
              <h1 className="serif font-medium leading-[0.94] tracking-[-0.022em]" style={{ fontSize: "clamp(3rem, 8.6vw, 8.4rem)" }}>
                <span className="block">A small club</span>
                <span className="block">in a small town,</span>
                <span className="block italic font-light text-rotary">building things <span className="not-italic font-medium text-ink">that matter.</span></span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pl-10 lg:border-l border-[var(--rule)]">
              <p className="serif text-[20px] leading-[1.55] text-ink/85">
                We're the first Interact Club at any United World College — students from 19 countries, working with Rotary's local and global network to take ideas from a campus in Flekke into the world.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/get-involved" className="btn">Join the club <span aria-hidden>→</span></Link>
                <Link href="/projects" className="btn-outline">See our projects</Link>
              </div>
            </div>
          </div>

          {/* Numbers strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--rule)] border-y border-[var(--rule)]">
            {[
              { k: "19", v: "Nationalities" },
              { k: "5", v: "Founding board" },
              { k: "30+", v: "Active members" },
              { k: "140", v: "Countries in network" },
            ].map((s) => (
              <div key={s.v} className="bg-paper p-7 lg:p-8">
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/50 font-semibold">{s.v}</div>
                <div className="mt-3 text-5xl lg:text-6xl font-bold tracking-tight tabular text-rotary">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee of nationalities */}
      <Marquee />

      {/* MISSION — manifesto block */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <div className="eyebrow eyebrow-num sticky top-32" data-num="§01">Our mission</div>
            </div>
            <div className="lg:col-span-9">
              <p className="serif text-[clamp(1.65rem,2.6vw,2.55rem)] leading-[1.22] tracking-[-0.012em] text-ink dropcap">
                We support fellow students who want to turn ideas into <span className="scribble">meaningful, visible, and lasting initiatives</span> — by helping young changemakers clarify their purpose, build teams, and connect with the right partners, mentors, and organizations beyond campus.
              </p>

              {/* Three horizons */}
              <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--rule)] border-y border-[var(--rule)]">
                {[
                  { t: "Short term", b: "A flagship project with Førde Rotary Club, putting international students directly into the Vestland community." },
                  { t: "Mid term", b: "Outreach to Bergen and Oslo over the next two years — deeper projects, broader Norwegian Rotary network." },
                  { t: "Long term", b: "A lasting, student-run institution at UWC Vestland that grows with each generation of members." },
                ].map((c, i) => (
                  <div key={c.t} className="bg-paper p-7 lg:p-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-rotary tabular">0{i+1}</span>
                      <span className="eyebrow">{c.t}</span>
                    </div>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-ink/80">{c.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FØRDE ROTARY — primary partner spotlight */}
      <section className="bg-rotary text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #fff 0, transparent 40%), radial-gradient(circle at 80% 70%, #fff 0, transparent 40%)" }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-paper/60 mb-6">§02 · Our chartering partner</div>
              <h2 className="serif font-medium leading-[1.02] tracking-[-0.018em]" style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}>
                Førde Rotary Club <span className="italic font-light text-paper/70">— the people who made this possible.</span>
              </h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-6 text-[15.5px] leading-relaxed text-paper/85">
                <p>
                  We were chartered through <strong className="text-paper">Førde Rotary Club</strong> in spring 2026. Their president, <strong className="text-paper">Gro Eliassen</strong>, and Rotary Norway's Head of Youth Exchange, <strong className="text-paper">Rolf Thingvold</strong>, are our direct mentors.
                </p>
                <p>
                  Beyond the charter, they connect us to NGOs, fund our early projects, and give RCN students the stage at Førde meetings — a real, working bridge between an international school and the local community.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="https://forde.rotary.no/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-paper text-ink font-semibold border border-paper hover:bg-uwc hover:border-uwc hover:text-paper transition-colors">
                  Visit Førde Rotary <span aria-hidden>→</span>
                </a>
                <a href="https://my.rotary.org/en/club/7c4a5953-aebd-44b1-8464-f19166a479f4/details" target="_blank" rel="noreferrer" className="text-paper/80 underline underline-offset-4 hover:text-paper transition-colors text-[14px]">
                  Club on Rotary.org
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-paper text-ink p-8 lg:p-10 reveal">
                <div className="flex items-center justify-center h-32">
                  <img src="/logos/forde-rotary.png" alt="Førde Rotary Club" className="max-h-28 object-contain"/>
                </div>
                <div className="rule my-7"/>
                <dl className="space-y-5 text-[14px]">
                  <div>
                    <dt className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-ink/50">President</dt>
                    <dd className="mt-1 font-semibold">Gro Eliassen</dd>
                  </div>
                  <div>
                    <dt className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-ink/50">Mentor (Norway)</dt>
                    <dd className="mt-1 font-semibold">Rolf Thingvold <span className="font-normal text-ink/65">· Head of Rotary Youth Exchange</span></dd>
                  </div>
                  <div>
                    <dt className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-ink/50">District</dt>
                    <dd className="mt-1 font-semibold tabular">D2250 · Norway</dd>
                  </div>
                  <div>
                    <dt className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-ink/50">Founded</dt>
                    <dd className="mt-1 font-semibold tabular">Førde · Sogn og Fjordane</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — three principles, charter style */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-3">
              <div className="eyebrow eyebrow-num" data-num="§03">How we work</div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="serif font-medium leading-[1.04] tracking-tight" style={{ fontSize: "clamp(2.1rem, 4vw, 3.6rem)" }}>
                Three things we hold to.
              </h2>
            </div>
          </div>

          <div className="border-t border-ink">
            {[
              { n: "I", t: "Student-led", b: "The board are students. Project leads are students. We don't ask permission to start — we ask for help to ship." },
              { n: "II", t: "Project-based, not advocacy", b: "Every project answers to a real partner with a real timeline. If we can't point at an outcome, we shouldn't have started." },
              { n: "III", t: "Locally rooted, globally connected", b: "Førde first. Then Bergen, Oslo, Copenhagen, Geneva. Real relationships compound over time." },
            ].map((p) => (
              <div key={p.n} className="reveal grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-[var(--rule)] group">
                <div className="lg:col-span-2">
                  <div className="serif text-7xl lg:text-8xl font-light text-rotary tabular leading-none transition-transform duration-500 group-hover:translate-x-2">{p.n}</div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">{p.t}</h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="serif text-[19px] leading-[1.55] text-ink/85">{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors / Partners */}
      <Sponsors />
    </>
  );
}
