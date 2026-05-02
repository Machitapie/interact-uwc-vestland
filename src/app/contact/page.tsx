const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";

export default function Contact() {
  return (
    <>
      <section className="bg-[var(--bg)]">
        <div className="container-x pt-16 lg:pt-24 pb-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-9">
              <div className="kicker text-[var(--rotary)] mb-5">Contact</div>
              <h1 className="h-display text-[clamp(2.6rem,7vw,6.2rem)]">
                Let's talk.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[var(--rule)]">
        <div className="container-x py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="border-t border-[var(--ink)]">
                {[
                  { k: "Email", v: "interact@uwcrcn.no", href: "mailto:interact@uwcrcn.no" },
                  { k: "Instagram", v: "@interact.uwc.vestland", href: INSTAGRAM_URL },
                  { k: "Address", v: "UWC Red Cross Nordic", sub: "Haugland, 6968 Flekke · Vestland · Norway" },
                ].map((row) => (
                  <div key={row.k} className="grid grid-cols-12 gap-4 py-7 border-b border-[var(--rule)]">
                    <div className="col-span-12 sm:col-span-4 kicker text-[var(--ink)]/55">{row.k}</div>
                    <div className="col-span-12 sm:col-span-8">
                      {row.href ? (
                        <a href={row.href} className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold tracking-tight underline-grow">{row.v}</a>
                      ) : (
                        <div className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold tracking-tight">{row.v}</div>
                      )}
                      {row.sub && <div className="mt-1 text-[14px] text-[var(--ink)]/65">{row.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[var(--ink)] text-white p-10 lg:p-12">
                <div className="kicker text-white/55 mb-8">Mentors & advisors</div>
                <div className="space-y-9">
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight">Rolf Thingvold</div>
                    <div className="text-white/65 mt-1.5 text-[14px]">Head of Rotary Youth Exchange · Norway</div>
                  </div>
                  <div className="rule" style={{ background: "rgba(255,255,255,0.18)" }}/>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight">Gro Eliassen</div>
                    <div className="text-white/65 mt-1.5 text-[14px]">President · Førde Rotary Club</div>
                  </div>
                  <div className="rule" style={{ background: "rgba(255,255,255,0.18)" }}/>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight">Edis</div>
                    <div className="text-white/65 mt-1.5 text-[14px]">Faculty advisor · UWC RCN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)]">
        <div className="container-x py-24 lg:py-32 text-center">
          <div className="kicker text-[var(--rotary)] mb-5">Stay in the loop</div>
          <h2 className="h-section text-[clamp(2.2rem,4.4vw,3.8rem)] max-w-[20ch] mx-auto">
            Follow us for project announcements.
          </h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="cta mt-10">Instagram <span className="cta-arrow">→</span></a>
        </div>
      </section>
    </>
  );
}
