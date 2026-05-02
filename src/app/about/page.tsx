const board = [
  { role: "President", name: "Henri", country: "Belgium" },
  { role: "Vice President", name: "Asa", country: "USA" },
  { role: "Secretary", name: "Beka", country: "Kyrgyz Republic" },
  { role: "Treasurer", name: "Frans", country: "Norway" },
  { role: "Communications", name: "Nowa", country: "Portugal" },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--bg)]">
        <div className="container-x pt-16 lg:pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="kicker text-[var(--rotary)] mb-5">About</div>
              <h1 className="h-display text-[clamp(2.6rem,7vw,6.2rem)]">
                The first Interact Club at any UWC.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS INTERACT — official Rotary description */}
      <section className="bg-white border-y border-[var(--rule)]">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <img src="/logos/interact.svg" alt="Interact" className="h-12 mb-7"/>
              <div className="kicker text-[var(--rotary)] mb-5">What is Interact?</div>
              <h2 className="h-section text-[clamp(2rem,3.6vw,3.2rem)]">A Rotary program for young leaders.</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-[17.5px] leading-[1.7] text-[var(--ink)]/85 space-y-6">
              <p>
                <strong>Interact clubs bring together young people ages 12–18 to develop leadership skills while discovering the power of Service Above Self.</strong> Members take action, build international understanding, and make new friends around the world.
              </p>
              <p>
                Each Interact club completes at least two annual projects: one that benefits the school or local community, and another that promotes international understanding. Through these projects, members develop leadership skills, connect with community leaders, learn about new cultures, and build friendships across borders.
              </p>
              <p>
                Today, around <strong className="tabular">14,911</strong> Interact clubs operate in <strong className="tabular">145</strong> countries, with roughly <strong className="tabular">342,953</strong> members worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CHAPTER */}
      <section className="bg-[var(--ink)] text-white">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="kicker text-white/55 mb-5">Our chapter</div>
              <h2 className="h-section text-[clamp(2rem,3.6vw,3.2rem)]">A chapter of that, in Flekke.</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-[17.5px] leading-[1.7] text-white/85 space-y-6">
              <p>
                The <strong className="text-white">Interact Club of UWC Vestland</strong> was chartered in spring 2026 through Førde Rotary Club. We're the first Interact Club at any United World College — a school built on the conviction that students can change the world through education that unites people, nations, and cultures.
              </p>
              <p>
                Our remit is simple: give student initiative a structured channel into our region, and a real connection to Rotary's global network of <strong className="text-white tabular">1.2 million</strong> members.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-px mt-16 bg-white/10 border border-white/10">
            <div className="bg-[var(--ink)] p-8 lg:p-10">
              <img src="/logos/rotary.svg" alt="Rotary" className="h-9 mb-6 brightness-0 invert"/>
              <h3 className="text-2xl font-extrabold tracking-tight">Connection to Rotary</h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-white/80">
                Interact is Rotary International's program for students under 18. We're chartered through Førde Rotary Club, plugged into Rotary's grants, exchanges, and global network.
              </p>
            </div>
            <div className="bg-[var(--ink)] p-8 lg:p-10">
              <img src="/logos/uwcrcn.png" alt="UWC RCN" className="h-9 mb-6 brightness-0 invert"/>
              <h3 className="text-2xl font-extrabold tracking-tight">Rooted at UWC RCN</h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-white/80">
                Hosted at UWC Red Cross Nordic in Flekke, Vestland, where students from 90+ countries study together. UWC's mission of using education for peace shapes how we choose projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD */}
      <section className="bg-white">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-6">
              <div className="kicker text-[var(--rotary)] mb-5">The board</div>
              <h2 className="h-section text-[clamp(2.2rem,4.4vw,3.8rem)]">Who runs the club.</h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-[17px] leading-[1.6] text-[var(--ink)]/75 self-end">
              The founding board, elected April 2026.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {board.map((b, i) => (
              <div key={b.role + b.name} className="reveal tilt bg-white p-7 lg:p-8 group">
                <div className="kicker text-[var(--ink)]/40 tabular">No. 0{i+1}</div>
                <div className="mt-7 h-14 w-14 bg-[var(--ink)] text-white flex items-center justify-center text-xl font-extrabold group-hover:bg-[var(--rotary)] transition-colors">
                  {b.name[0]}
                </div>
                <div className="mt-6 text-2xl lg:text-3xl font-extrabold tracking-tight">{b.name}</div>
                <div className="mt-1 text-[13.5px] text-[var(--ink)]/60">{b.country}</div>
                <div className="rule my-5"/>
                <div className="kicker text-[var(--rotary)]">{b.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
