const sponsors = [
  { name: "Rotary International", src: "/logos/rotary.svg", href: "https://www.rotary.org", note: "Chartering body" },
  { name: "Interact", src: "/logos/interact.svg", href: "https://www.rotary.org/en/get-involved/interact-clubs", note: "Youth program" },
  { name: "UWC Red Cross Nordic", src: "/logos/uwcrcn.png", href: "https://www.uwcrcn.no", note: "Host school" },
  { name: "Vestland fylkeskommune", src: "/logos/vestland.png", href: "https://www.vestlandfylke.no", note: "Local partner" },
];

export default function Sponsors() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="tag"><span className="w-1.5 h-1.5 rounded-full bg-uwc"/>Partners</span>
            <h2 className="mt-5 text-huge font-bold tracking-tight">Backed by a global network.</h2>
          </div>
          <p className="max-w-md text-ink/65 leading-relaxed">
            Chartered through Førde Rotary Club. Hosted at UWC Red Cross Nordic. Built in collaboration with local and international partners.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
              className="reveal group relative bg-white rounded-2xl border border-ink/[.08] p-8 lg:p-10 flex flex-col items-center justify-center min-h-[200px] hover-lift">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rotary/0 to-uwc/0 group-hover:from-rotary/[.04] group-hover:to-uwc/[.04] transition-colors duration-500" />
              <div className="relative h-16 w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100">
                <img src={s.src} alt={s.name} className="max-h-16 max-w-full object-contain" />
              </div>
              <div className="relative mt-6 text-center">
                <div className="text-[13px] font-semibold tracking-tight">{s.name}</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-ink/40 mt-1">{s.note}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
