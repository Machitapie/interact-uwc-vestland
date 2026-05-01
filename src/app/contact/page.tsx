const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";

export default function Contact() {
  return (
    <>
      <section className="paper-tex">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[var(--rule)]">
            <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-ink/65">Contact · Section §05</div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink/50">Masthead</div>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 mt-12">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">Get in touch</div>
              <h1 className="serif font-medium leading-[0.96] tracking-[-0.02em]" style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}>
                Let's <span className="italic font-light text-rotary">talk.</span>
              </h1>
            </div>
            <p className="lg:col-span-4 lg:pl-10 lg:border-l border-[var(--rule)] serif text-[19px] leading-relaxed text-ink/85">
              Whether you're curious about Interact, a Rotary club interested in partnering, or an NGO with a project in mind — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-[var(--rule)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="border-t border-ink">
              {[
                { k: "Email", v: "interact@uwcrcn.no", href: "mailto:interact@uwcrcn.no" },
                { k: "Instagram", v: "@interact.uwc.vestland", href: INSTAGRAM_URL },
                { k: "Where we meet", v: "Lower kantina · UWC RCN", sub: "Wednesdays · 17:30 – 18:30" },
                { k: "Address", v: "UWC Red Cross Nordic", sub: "Haugland, 6968 Flekke · Vestland · Norway" },
              ].map((row) => (
                <div key={row.k} className="grid grid-cols-12 gap-4 py-7 border-b border-[var(--rule)]">
                  <div className="col-span-12 sm:col-span-4 text-[11px] uppercase tracking-[0.18em] font-bold text-ink/55">{row.k}</div>
                  <div className="col-span-12 sm:col-span-8">
                    {row.href ? (
                      <a href={row.href} className="serif text-[clamp(1.5rem,2.4vw,2rem)] font-medium tracking-tight link-arrow border-0">{row.v}</a>
                    ) : (
                      <div className="serif text-[clamp(1.5rem,2.4vw,2rem)] font-medium tracking-tight">{row.v}</div>
                    )}
                    {row.sub && <div className="mt-1 text-[14px] text-ink/65">{row.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-ink text-paper p-10 lg:p-12">
              <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-paper/60 mb-8">Mentors & advisors</div>
              <div className="space-y-9">
                <div>
                  <div className="serif text-3xl font-medium tracking-tight">Rolf Thingvold</div>
                  <div className="text-paper/65 mt-1.5 text-[14px]">Head of Rotary Youth Exchange · Norway</div>
                </div>
                <div className="rule" style={{ background: "rgba(247, 241, 232, 0.18)" }}/>
                <div>
                  <div className="serif text-3xl font-medium tracking-tight">Gro Eliassen</div>
                  <div className="text-paper/65 mt-1.5 text-[14px]">President · Førde Rotary Club</div>
                </div>
                <div className="rule" style={{ background: "rgba(247, 241, 232, 0.18)" }}/>
                <div>
                  <div className="serif text-3xl font-medium tracking-tight">Edis</div>
                  <div className="text-paper/65 mt-1.5 text-[14px]">Faculty advisor · UWC RCN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream/40 border-y border-[var(--rule)]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <div className="eyebrow mb-5">Stay in the loop</div>
          <h2 className="serif font-medium leading-[1.02] tracking-tight max-w-[18ch] mx-auto" style={{ fontSize: "clamp(2.1rem, 4vw, 3.6rem)" }}>
            A new project drops <span className="italic font-light text-rotary">every term.</span>
          </h2>
          <p className="mt-5 serif text-[18px] text-ink/80 max-w-xl mx-auto">
            Follow us on Instagram for project announcements, member spotlights, and event invites.
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn mt-10">Follow on Instagram <span aria-hidden>→</span></a>
        </div>
      </section>
    </>
  );
}
