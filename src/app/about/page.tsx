const board = [
  { role: "Co-President", name: "Asa", country: "—" },
  { role: "Co-President", name: "Henri", country: "Belgium" },
  { role: "Secretary", name: "Beka", country: "—" },
  { role: "Treasurer", name: "Frans", country: "Netherlands" },
  { role: "Communications", name: "Nowa", country: "—" },
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
      <section className="paper-tex">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[var(--rule)]">
            <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-ink/65">About · Section §02</div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-ink/50">A founding statement</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 mt-12">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">Who we are</div>
              <h1 className="serif font-medium leading-[0.96] tracking-[-0.02em]" style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}>
                The first Interact Club at <span className="italic font-light text-rotary">any UWC.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pl-10 lg:border-l border-[var(--rule)]">
              <p className="serif text-[19px] leading-[1.55] text-ink/85 dropcap">
                Started in spring 2026 by five students at UWC Red Cross Nordic, chartered through Førde Rotary Club. We exist because students at this school don't lack ideas — they lack the structure, partners, and runway to ship them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's letter */}
      <section className="py-20 lg:py-28 bg-cream/40 border-y border-[var(--rule)]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="reveal">
            <div className="eyebrow mb-8">A short letter</div>
            <div className="serif text-[clamp(1.45rem,2.2vw,2.05rem)] leading-[1.32] tracking-[-0.008em] text-ink/95 space-y-7">
              <p>
                Imagine you're new to a country. You don't know anyone. You want to do something meaningful — not just talk about change, but actually create it.
              </p>
              <p>
                Now imagine there's already a network of young people in 140 countries who are doing exactly that, and all you have to do is show up.
              </p>
              <p>
                That network exists. It's called <strong className="text-rotary">Interact</strong>. And UWC Red Cross Nordic — a school literally built on the idea that students can change the world — didn't have one.
              </p>
              <p className="italic">
                We're here to change that.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-5">
              <div className="serif italic text-3xl">— Asa &amp; Henri</div>
              <div className="rule flex-1"/>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Co-Presidents · 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Rotary + UWC */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          <div className="reveal bg-paper p-10 lg:p-14">
            <img src="/logos/rotary.svg" alt="Rotary" className="h-10 mb-8"/>
            <h3 className="serif text-3xl font-medium tracking-tight">Connection to Rotary</h3>
            <p className="mt-5 text-[16px] text-ink/80 leading-relaxed">
              Interact is Rotary International's program for students under 18. We're chartered through <strong>Førde Rotary Club</strong>, mentored by their president and project lead. Our work plugs into Rotary's grants, exchanges, and a 1.2-million-member global network — including the Bergen Conference and a planned 2027 Youth Exchange.
            </p>
          </div>
          <div className="reveal bg-paper p-10 lg:p-14">
            <img src="/logos/uwcrcn.png" alt="UWC RCN" className="h-10 mb-8"/>
            <h3 className="serif text-3xl font-medium tracking-tight">Rooted at UWC RCN</h3>
            <p className="mt-5 text-[16px] text-ink/80 leading-relaxed">
              Hosted at UWC Red Cross Nordic in Flekke, Vestland — students from 90+ countries study together here. UWC's mission of using education to unite people, nations, and cultures for peace is the backbone of how we choose projects, partners, and people.
            </p>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-20 lg:py-28 bg-cream/40 border-y border-[var(--rule)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-4">
              <div className="eyebrow eyebrow-num" data-num="§03">The board</div>
              <h2 className="mt-4 serif font-medium leading-[1.02] tracking-tight" style={{ fontSize: "clamp(2.1rem, 3.6vw, 3.4rem)" }}>
                Five names. One charter.
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 serif text-[18px] leading-relaxed text-ink/80 self-end">
              The founding board, elected April 2026. We sign every charter document with these five names — and trust each other to do the work behind them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {board.map((b, i) => (
              <div key={b.role + b.name} className="reveal bg-paper p-7 lg:p-8 hover:bg-paper/80 transition-colors">
                <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink/45 tabular">No. 0{i+1}</div>
                <div className="mt-6 serif text-4xl font-medium tracking-tight">{b.name}</div>
                <div className="mt-1 text-[14px] text-ink/65">{b.country}</div>
                <div className="rule my-5"/>
                <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-rotary">{b.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members ledger */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-4">
              <div className="eyebrow eyebrow-num" data-num="§04">The roll</div>
              <h2 className="mt-4 serif font-medium leading-[1.02] tracking-tight" style={{ fontSize: "clamp(2.1rem, 3.6vw, 3.4rem)" }}>
                {members.length} members. <span className="text-rotary italic font-light">{new Set(members.map(m => m[1])).size}</span> nationalities.
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 serif text-[18px] leading-relaxed text-ink/80 self-end">
              The current roster. The whole point of Interact is the people — and our people come from across the school.
            </p>
          </div>

          <div className="border-t border-ink">
            {members.map(([n, c], i) => (
              <div key={n} className="grid grid-cols-12 gap-4 py-3 border-b border-[var(--rule)] hover:bg-cream/40 transition-colors">
                <div className="col-span-1 text-[12px] tabular text-ink/45 font-semibold pt-1">{String(i+1).padStart(3, '0')}</div>
                <div className="col-span-7 sm:col-span-7 text-[16px] font-medium">{n}</div>
                <div className="col-span-4 text-[12px] uppercase tracking-[0.16em] text-ink/55 text-right pt-1">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
