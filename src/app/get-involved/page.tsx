import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";
const DONATE_URL = "DONATE_URL";

export default function GetInvolved() {
  return (
    <>
      <section className="paper-tex">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[var(--rule)]">
            <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-ink/65">Get involved · Section §04</div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink/50">Three ways in</div>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 mt-12">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">Join us</div>
              <h1 className="serif font-medium leading-[0.96] tracking-[-0.02em]" style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}>
                Show up. <span className="italic font-light text-rotary">Build something.</span>
              </h1>
            </div>
            <p className="lg:col-span-4 lg:pl-10 lg:border-l border-[var(--rule)] serif text-[19px] leading-relaxed text-ink/85">
              Three lanes — whether you have an idea, want to support one, or just want to follow what we're doing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 border-t border-[var(--rule)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {[
            { n: "01", t: "Become a member", b: "Open to any UWC RCN student. Weekly meetings Wednesdays 17:30, lower kantina. Bring an idea or just curiosity.", cta: "Email us", href: "mailto:interact@uwcrcn.no" },
            { n: "02", t: "Partner with us", b: "NGO, Rotary club, alum, or local business — if you want to mentor a project, host an event, or sponsor an initiative, we want to hear from you.", cta: "Reach out", href: "/contact" },
            { n: "03", t: "Follow + share", b: "We post project updates, calls for ideas, and member features on Instagram. Sharing is the easiest way to support the club.", cta: "@interact.uwc.vestland", href: INSTAGRAM_URL },
          ].map(c => (
            <div key={c.n} className="reveal bg-paper p-9 lg:p-10 hover:bg-cream/40 transition-colors group">
              <div className="text-[12px] font-bold tracking-[0.2em] text-rotary tabular">{c.n}</div>
              <div className="mt-4 serif text-[clamp(1.6rem,2.4vw,2.1rem)] font-medium tracking-tight">{c.t}</div>
              <p className="mt-4 text-[15.5px] text-ink/80 leading-relaxed">{c.b}</p>
              <Link href={c.href} className="mt-8 link-arrow">{c.cta} <span aria-hidden>→</span></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section className="py-20 lg:py-28 bg-rotary text-paper">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-paper/60 mb-6">§05 · Support our work</div>
            <h2 className="serif font-medium leading-[1.02] tracking-[-0.018em]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.6rem)" }}>
              Fund a project.
            </h2>
            <p className="mt-7 serif text-[19px] leading-[1.55] text-paper/85 max-w-xl">
              We keep dues low so finances aren't a barrier to joining. Donations cover campaign materials, travel to Bergen, the Copenhagen exchange, and seed funding for the next student-led initiative.
            </p>
            <p className="mt-3 text-[13.5px] text-paper/65">
              Donations are channelled through Førde Rotary Club. Receipts on request.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-paper text-ink p-10 lg:p-12">
              <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/55">Donate</div>
              <div className="mt-3 serif text-5xl font-medium">Coming soon</div>
              <p className="mt-5 text-[15.5px] text-ink/75 leading-relaxed">
                We're finalising the partnership-backed donation flow with Førde Rotary Club. We'll publish the link on this page and on Instagram.
              </p>
              <a href={DONATE_URL} className="btn mt-8">Donate now <span aria-hidden>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="eyebrow eyebrow-num mb-6" data-num="§06">Common questions</div>
          <h2 className="serif font-medium leading-[1.02] tracking-tight mb-12" style={{ fontSize: "clamp(2.1rem, 3.6vw, 3.4rem)" }}>
            Asked & answered.
          </h2>

          <div className="border-t border-ink">
            {[
              { q: "Do I need an idea to join?", a: "No. About half of our members joined to support someone else's project. The other half came in with an idea. Both are equally welcome." },
              { q: "How much time does it take?", a: "About an hour weekly for general members, more if you lead a project. We respect that EACs and academics come first." },
              { q: "Are first years welcome?", a: "Yes — strongly encouraged. The club exists for first years just as much as second years, and we plan succession from day one." },
              { q: "Is there a cost?", a: "Minimal dues to cover Rotary registration. We're also planning a fundraising event to keep dues as low as possible." },
            ].map((f) => (
              <details key={f.q} className="reveal group border-b border-[var(--rule)] py-6">
                <summary className="cursor-pointer list-none flex items-baseline justify-between gap-6">
                  <span className="serif text-[clamp(1.3rem,2vw,1.7rem)] font-medium tracking-tight">{f.q}</span>
                  <span className="shrink-0 text-2xl font-light text-ink/55 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 serif text-[18px] leading-[1.55] text-ink/80 pr-12">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
