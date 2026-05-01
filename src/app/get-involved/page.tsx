import Link from "next/link";

export default function GetInvolved() {
  return (
    <>
      <section className="pt-[140px] pb-16 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-rotary/[.08] blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-rotary"/>Join us</span>
          <h1 className="mt-6 text-display font-bold tracking-tight max-w-[14ch]">
            Show up. <span className="gradient-text">Build something.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/65 leading-relaxed">
            Three ways to be part of Interact at UWC Vestland — whether you have an idea, want to support one, or just want to follow what we're doing.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Become a member", b: "Open to any UWC RCN student. Weekly meetings Wednesdays 17:30, lower kantina. Bring an idea or just curiosity.", cta: "Email us", href: "mailto:interact@uwcrcn.no" },
            { n: "02", t: "Partner with us", b: "NGO, Rotary club, alum, or local business — if you want to mentor a project, host an event, or sponsor an initiative, we want to hear from you.", cta: "Reach out", href: "/contact" },
            { n: "03", t: "Follow + share", b: "We post project updates, calls for ideas, and member features on Instagram. Sharing is the easiest way to support the club.", cta: "Instagram", href: "INSTAGRAM_URL" },
          ].map(c => (
            <div key={c.n} className="reveal group bg-white rounded-3xl p-10 border border-ink/[.06] hover-lift">
              <div className="text-xs font-bold tracking-[0.2em] text-rotary">{c.n}</div>
              <div className="mt-4 text-2xl font-bold tracking-tight">{c.t}</div>
              <p className="mt-4 text-ink/70 leading-relaxed">{c.b}</p>
              <Link href={c.href} className="mt-8 inline-flex items-center gap-2 font-semibold text-rotary link-underline">{c.cta} <span aria-hidden>→</span></Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream/40 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 reveal">
              <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-uwc"/>Donate</span>
              <h2 className="mt-5 text-huge font-bold tracking-tight">Fund a project.</h2>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                We keep member dues low so finances aren't a barrier to joining. Donations go directly to project costs — campaign materials, travel to Bergen, the Copenhagen exchange, and seed funding for the next student-led initiative.
              </p>
              <p className="mt-4 text-sm text-ink/55">
                Donations are channelled through Førde Rotary Club. Receipts available on request.
              </p>
            </div>
            <div className="lg:col-span-6 reveal">
              <div className="relative bg-ink text-paper rounded-3xl p-10 lg:p-12 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-rotary/40 blur-3xl" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.18em] text-paper/50">Support our work</div>
                  <div className="mt-4 text-5xl font-bold tracking-tight">Donate</div>
                  <p className="mt-6 text-paper/70 leading-relaxed">Coming soon — we're finalising our partnership-backed donation flow with the Førde Rotary Club.</p>
                  <a href="DONATE_URL" className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-paper text-ink rounded-full font-semibold hover:bg-uwc hover:text-paper transition-all duration-500">
                    <span>Donate now</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-12">
            <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-rotary"/>FAQ</span>
            <h2 className="mt-5 text-huge font-bold tracking-tight">Common questions.</h2>
          </div>
          <div className="space-y-3 max-w-3xl">
            {[
              { q: "Do I need an idea to join?", a: "No. About half of our members joined to support someone else's project. The other half came in with an idea. Both are equally welcome." },
              { q: "How much time does it take?", a: "Roughly an hour weekly for general members, more if you lead a project. We respect that EACs and academics come first." },
              { q: "Are first years welcome?", a: "Yes — strongly encouraged. The club exists for first years just as much as second years, and we plan succession from day one." },
              { q: "Is there a cost?", a: "We charge minimal dues to cover Rotary registration. We're also planning a fundraising event to keep dues as low as possible." },
            ].map((f) => (
              <details key={f.q} className="reveal group bg-white rounded-2xl border border-ink/[.06] overflow-hidden">
                <summary className="cursor-pointer list-none flex items-center justify-between p-6 lg:p-7 font-semibold text-lg tracking-tight">
                  {f.q}
                  <span className="ml-4 w-8 h-8 rounded-full bg-ink/[.04] flex items-center justify-center text-ink/60 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 lg:px-7 pb-7 text-ink/70 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
