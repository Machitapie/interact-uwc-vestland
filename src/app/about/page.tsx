import Link from "next/link";

const board = [
  { role: "Co-President", name: "Asa", country: "—", initials: "AS", color: "from-rotary to-uwc" },
  { role: "Co-President", name: "Henri", country: "Belgium", initials: "HE", color: "from-rotary to-rotary-soft" },
  { role: "Secretary", name: "Beka", country: "—", initials: "BK", color: "from-uwc to-uwc-soft" },
  { role: "Treasurer", name: "Frans", country: "Netherlands", initials: "FR", color: "from-rotary-deep to-rotary" },
  { role: "Communications", name: "Nowa", country: "—", initials: "NO", color: "from-uwc-deep to-uwc" },
];

const members = [
  ["Nana Kyriakou","Cyprus"],["Emine Esmerarslan","Cyprus"],["Alice Gaspari","Italy"],
  ["Sabela Traviesas Quintas","Spain"],["Vicky Leon Meza","Venezuela"],["Christopher Lango","Kenya"],
  ["Essotolom Tchoude","Togo"],["Jean Janssen","Belgium"],["Laksh Thapliyal","India"],
  ["Malaya Palanca","Philippines"],["Mika Maigaard","Denmark"],["Shashwat Shrestha","Nepal"],
  ["Gaurav Sheoran","India"],["Elvira Misgana Tollersrud","Norway"],["Haruto Fujishiro","Japan"],
  ["Håvard André Grane","Norway"],["Iris Davari Majd","Iran"],["Jana Shbeir","Palestine"],
  ["Linus Strønen","Norway"],["Maria Rojas Rincon","Colombia"],["Matthis Lamothe","Haiti"],
  ["Tale Myhren","Norway"],["Theo Espinosa","USA"],["Siya Mpofu","Zimbabwe"],
  ["Joonatan Helve","Finland"],["Sizwe Mpanza","Eswatini"],["Carl-Emil","Denmark"],
  ["Zarah Rizvi","USA"],["Georg Barth","Norway"],
];

export default function About() {
  return (
    <>
      <section className="pt-[140px] pb-16 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-rotary"/>About</span>
          <h1 className="mt-6 text-display font-bold tracking-tight max-w-[14ch]">
            Built by students, <span className="gradient-text">for students.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-uwc"/>Our story</span>
          </div>
          <div className="lg:col-span-8 reveal space-y-6 text-lg text-ink/75 leading-relaxed">
            <p>
              The Interact Club of UWC Vestland is the first Interact Club at any UWC, anywhere in the world. We started in early 2026 with a simple conviction: students at UWC Red Cross Nordic don't lack ideas — they lack the structure, partners, and runway to ship them.
            </p>
            <p>
              Through Rotary's network of 1.2 million members across 140 countries, Interact gives student-led projects a credible home: real partnerships, real funding pathways, real mentorship. Chartered with <a href="https://forde.rotary.no/" target="_blank" rel="noreferrer" className="link-underline text-rotary font-semibold">Førde Rotary Club</a>, we're starting locally — in Fjaler and Vestland — and building outward to Bergen, Oslo, and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream/40 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="reveal bg-white rounded-3xl p-10 lg:p-12 border border-ink/[.06] hover-lift">
              <div className="flex items-center gap-4">
                <img src="/logos/rotary.svg" alt="Rotary" className="h-10" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">Connection to Rotary</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Interact is Rotary International's youth program. We're chartered through Førde Rotary Club and mentored directly by their president and project lead. Our work plugs into Rotary's grants, exchanges, and 1.2M-member global network — including the Bergen Rotary Conference, Rotary Geneva, and a planned 2027 youth exchange.
              </p>
            </div>
            <div className="reveal bg-white rounded-3xl p-10 lg:p-12 border border-ink/[.06] hover-lift">
              <div className="flex items-center gap-4">
                <img src="/logos/uwcrcn.png" alt="UWC RCN" className="h-10" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">Rooted at UWC RCN</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                We are housed at UWC Red Cross Nordic in Flekke, Vestland — where students from 90+ countries study together. UWC's mission of using education to unite people, nations, and cultures for peace is the backbone of how we choose projects, partners, and people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-16">
            <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-rotary"/>The board</span>
            <h2 className="mt-5 text-huge font-bold tracking-tight">Five students. One charter.</h2>
            <p className="mt-4 text-ink/65 max-w-xl">The founding board, elected April 2026.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {board.map((b) => (
              <div key={b.role + b.name} className="reveal group relative bg-white rounded-2xl p-6 border border-ink/[.06] hover-lift overflow-hidden">
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${b.color} opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700`} />
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center text-white font-bold text-lg tracking-tight`}>
                  {b.initials}
                </div>
                <div className="relative mt-6">
                  <div className="text-xs uppercase tracking-[0.14em] text-ink/45 font-bold">{b.role}</div>
                  <div className="mt-2 text-xl font-bold tracking-tight">{b.name}</div>
                  <div className="mt-1 text-sm text-ink/55">{b.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-32 -left-20 w-[400px] h-[400px] rounded-full bg-rotary/30 blur-3xl"/>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-16">
            <span className="tag border-paper/20 bg-paper/5 text-paper"><span className="w-1.5 h-1.5 rounded-full bg-uwc"/>Members</span>
            <h2 className="mt-5 text-huge font-bold tracking-tight">From {new Set(members.map(m => m[1])).size} countries.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
            {members.map(([n, c]) => (
              <div key={n} className="bg-ink p-5 hover:bg-rotary/30 transition-colors duration-300">
                <div className="text-[14px] font-semibold leading-tight">{n}</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-paper/45 mt-1">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center reveal">
          <h2 className="text-huge font-bold tracking-tight">Want to be part of it?</h2>
          <p className="mt-5 text-ink/65 max-w-xl mx-auto">First years welcome. Bring an idea — we'll help you build it.</p>
          <Link href="/get-involved" className="btn-primary mt-10"><span>Get involved</span><span>→</span></Link>
        </div>
      </section>
    </>
  );
}
