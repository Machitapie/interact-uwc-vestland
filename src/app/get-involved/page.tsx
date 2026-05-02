import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";
const DONATE_URL = "DONATE_URL";

export default function GetInvolved() {
  return (
    <>
      <section className="bg-[var(--bg)]">
        <div className="container-x pt-16 lg:pt-24 pb-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-9">
              <div className="kicker text-[var(--rotary)] mb-5">Get involved</div>
              <h1 className="h-display text-[clamp(2.6rem,7vw,6.2rem)]">
                Show up. Build something.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[var(--rule)]">
        <div className="container-x py-16 lg:py-20">
          <div className="grid md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {[
              { n: "01", t: "Become a member", b: "Open to any UWC RCN student. Bring an idea or just curiosity — we'll meet you where you are.", cta: "Email us", href: "mailto:interact@uwcrcn.no" },
              { n: "02", t: "Partner with us", b: "NGO, Rotary club, alum, or local business — if you want to mentor a project, host an event, or sponsor an initiative, we'd like to hear from you.", cta: "Reach out", href: "/contact" },
              { n: "03", t: "Follow + share", b: "Project updates, calls for ideas, and member features. Sharing is the easiest way to support the club.", cta: "@interact.uwc.vestland", href: INSTAGRAM_URL },
            ].map(c => (
              <div key={c.n} className="reveal bg-white p-9 lg:p-10 hover:bg-[var(--bg)] transition-colors group">
                <div className="text-[12px] font-bold tracking-[0.18em] tabular text-[var(--rotary)]">{c.n}</div>
                <div className="mt-4 text-2xl lg:text-3xl font-extrabold tracking-tight">{c.t}</div>
                <p className="mt-4 text-[15.5px] text-[var(--ink)]/75 leading-[1.6]">{c.b}</p>
                <Link href={c.href} className="mt-7 inline-flex items-center gap-2 font-bold text-[var(--rotary)]">
                  <span className="underline-grow">{c.cta}</span>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="bg-[var(--rotary)] text-white">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="kicker text-white/55 mb-7">Support our work</div>
              <h2 className="h-section text-[clamp(2.4rem,5vw,4.4rem)]">Fund a project.</h2>
              <p className="mt-7 text-[18px] leading-[1.6] text-white/85 max-w-xl">
                We keep dues low so finances aren't a barrier to joining. Donations cover campaign materials, travel to Bergen, and seed funding for the next student-led initiative.
              </p>
              <p className="mt-3 text-[13.5px] text-white/65">
                Donations are channelled through Førde Rotary Club. Receipts on request.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white text-[var(--ink)] p-10 lg:p-12">
                <div className="kicker text-[var(--ink)]/55">Donate</div>
                <div className="mt-3 text-5xl font-extrabold tracking-tight">Coming soon</div>
                <p className="mt-5 text-[15.5px] text-[var(--ink)]/75 leading-relaxed">
                  We're finalising the partnership-backed donation flow with Førde Rotary Club. We'll publish the link here and on Instagram.
                </p>
                <a href={DONATE_URL} className="cta mt-7">Donate now <span className="cta-arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <div className="kicker text-[var(--rotary)] mb-5">Common questions</div>
              <h2 className="h-section text-[clamp(2.2rem,4.4vw,3.8rem)]">Asked & answered.</h2>
            </div>
          </div>
          <div className="border-t border-[var(--ink)]">
            {[
              { q: "Do I need an idea to join?", a: "No. About half of our members joined to support someone else's project. The other half came in with an idea. Both are equally welcome." },
              { q: "How much time does it take?", a: "About an hour weekly for general members, more if you lead a project. We respect that EACs and academics come first." },
              { q: "Are first years welcome?", a: "Yes — strongly encouraged. The club exists for first years just as much as second years, and we plan succession from day one." },
              { q: "Is there a cost?", a: "Minimal dues to cover Rotary registration. We're also planning a fundraising event to keep dues as low as possible." },
            ].map((f) => (
              <details key={f.q} className="reveal group border-b border-[var(--rule)] py-6">
                <summary className="cursor-pointer list-none flex items-baseline justify-between gap-6">
                  <span className="text-[clamp(1.3rem,2vw,1.7rem)] font-extrabold tracking-tight">{f.q}</span>
                  <span className="shrink-0 text-2xl font-light text-[var(--ink)]/55 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 text-[17px] leading-[1.6] text-[var(--ink)]/75 pr-12">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
