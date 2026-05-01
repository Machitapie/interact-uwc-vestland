import Link from "next/link";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Mission */}
      <section className="relative py-24 lg:py-36 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 reveal">
              <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-rotary" />Our mission</span>
            </div>
            <div className="lg:col-span-8 reveal">
              <p className="text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.25] tracking-tight">
                Support fellow students who want to turn ideas into{" "}
                <span className="text-rotary">meaningful, visible, and lasting initiatives</span>{" "}
                — by helping young changemakers clarify their purpose, build teams, and connect with the right partners, mentors, and organizations beyond campus.
              </p>
              <div className="mt-12 grid sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
                {[
                  { t: "Short term", b: "Build a strong link with the Førde municipality through a flagship project with the local Rotary club." },
                  { t: "Mid term", b: "Expand outreach to Bergen and Oslo, develop deeper projects, and connect to Rotary clubs across Norway." },
                  { t: "Long term", b: "Establish UWC Vestland's Interact Club as a lasting, student-run institution that grows year after year." },
                ].map((c) => (
                  <div key={c.t} className="bg-paper p-7 lg:p-8 hover:bg-white transition-colors duration-300">
                    <div className="text-xs uppercase tracking-[0.14em] text-uwc-deep font-bold">{c.t}</div>
                    <p className="mt-3 text-[15px] text-ink/75 leading-relaxed">{c.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next event CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-ink text-paper p-10 lg:p-16 reveal">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full bg-rotary/40 blur-3xl" />
            <div className="absolute -left-20 top-0 w-[300px] h-[300px] rounded-full bg-uwc/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <div className="text-xs uppercase tracking-[0.18em] text-paper/50">Next up</div>
                <h2 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-bold tracking-tight leading-[1.05]">
                  Project pitch · PBL proposal week
                </h2>
                <p className="mt-5 text-paper/70 max-w-xl leading-relaxed">
                  We're shaping our first NGO-partnered awareness campaign with Caritas Norway, Naturvernforbundet, and Lions Club. First years welcome — bring an idea.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <div className="inline-flex flex-col items-start lg:items-end gap-1">
                  <div className="text-paper/50 text-xs uppercase tracking-[0.18em]">Mon · 16:00</div>
                  <div className="text-2xl font-semibold">Auditorium · UWC RCN</div>
                </div>
                <div className="mt-8">
                  <Link href="/get-involved" className="inline-flex items-center gap-3 px-7 py-4 bg-paper text-ink rounded-full font-semibold hover:bg-uwc hover:text-paper transition-all duration-500">
                    <span>RSVP</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief intro / Three pillars */}
      <section className="relative py-24 lg:py-32 bg-cream/40 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-uwc" />Who we are</span>
              <h2 className="mt-5 text-huge font-bold tracking-tight">A first, in a school built on firsts.</h2>
            </div>
            <div className="reveal">
              <p className="text-lg text-ink/75 leading-relaxed">
                The Interact Club of UWC Vestland is the very first Interact Club at any UWC. We're chartered through Førde Rotary Club, and we exist to give student initiative a real, structured channel — into our region, and into a global movement of 1.2 million Rotarians.
              </p>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-rotary link-underline">
                Read our story <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Student-led", b: "Driven by students, governed by students. Real responsibility, real ownership." },
              { n: "02", t: "Project-based", b: "Impact over advocacy. We ship projects with real partners and measurable outcomes." },
              { n: "03", t: "Globally connected", b: "Backed by Rotary's network of clubs in 140 countries — from Førde to Geneva to Oslo." },
            ].map((p) => (
              <div key={p.n} className="reveal bg-white rounded-2xl p-8 border border-ink/[.06] hover-lift group">
                <div className="text-xs font-bold tracking-[0.2em] text-rotary">{p.n}</div>
                <div className="mt-4 text-2xl font-bold tracking-tight">{p.t}</div>
                <p className="mt-3 text-ink/65 leading-relaxed">{p.b}</p>
                <div className="mt-6 h-px w-12 bg-ink/15 group-hover:w-full group-hover:bg-uwc transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Sponsors />
    </>
  );
}
