export default function Contact() {
  return (
    <>
      <section className="pt-[140px] pb-16 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-uwc/[.10] blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-uwc"/>Contact</span>
          <h1 className="mt-6 text-display font-bold tracking-tight max-w-[16ch]">
            Let's <span className="gradient-text">talk.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 reveal">
            <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-5 text-ink/70 leading-relaxed">
              Whether you're a student curious about Interact, a Rotary club interested in partnering, or an NGO with a project in mind — we'd love to hear from you.
            </p>
            <dl className="mt-12 space-y-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink/45 font-bold">Email</dt>
                <dd className="mt-2"><a href="mailto:interact@uwcrcn.no" className="text-2xl font-semibold tracking-tight link-underline">interact@uwcrcn.no</a></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink/45 font-bold">Instagram</dt>
                <dd className="mt-2"><a href="INSTAGRAM_URL" className="text-2xl font-semibold tracking-tight link-underline">@interact.uwcvestland</a></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink/45 font-bold">Where we meet</dt>
                <dd className="mt-2 text-lg">Lower kantina · UWC RCN<br /><span className="text-ink/55 text-base">Wednesdays · 17:30 – 18:30</span></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink/45 font-bold">Address</dt>
                <dd className="mt-2 text-lg">UWC Red Cross Nordic<br /><span className="text-ink/55 text-base">Haugland, 6968 Flekke · Vestland · Norway</span></dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="relative bg-ink text-paper rounded-3xl p-10 lg:p-14 overflow-hidden h-full">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute -top-20 -right-24 w-80 h-80 rounded-full bg-rotary/40 blur-3xl" />
              <div className="absolute -bottom-32 -left-12 w-64 h-64 rounded-full bg-uwc/40 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.18em] text-paper/50">Mentors & advisors</div>
                <div className="mt-12 space-y-10">
                  <div>
                    <div className="text-2xl font-bold tracking-tight">Rolf Thingvold</div>
                    <div className="text-paper/60 mt-1">Head of Rotary Youth Exchange · Norway</div>
                  </div>
                  <div className="h-px bg-paper/15" />
                  <div>
                    <div className="text-2xl font-bold tracking-tight">Gro Eliassen</div>
                    <div className="text-paper/60 mt-1">President · Førde Rotary Club</div>
                  </div>
                  <div className="h-px bg-paper/15" />
                  <div>
                    <div className="text-2xl font-bold tracking-tight">Edis</div>
                    <div className="text-paper/60 mt-1">Faculty advisor · UWC RCN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream/40 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center reveal">
          <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-rotary"/>Stay in the loop</span>
          <h2 className="mt-5 text-huge font-bold tracking-tight max-w-[18ch] mx-auto">A new project drops every term.</h2>
          <p className="mt-5 text-ink/65 max-w-xl mx-auto">Follow us on Instagram for project announcements, member spotlights, and event invites.</p>
          <a href="INSTAGRAM_URL" className="btn-primary mt-10"><span>Follow on Instagram</span><span>→</span></a>
        </div>
      </section>
    </>
  );
}
