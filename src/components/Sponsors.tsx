const sponsors = [
  { name: "Rotary International", src: "/logos/rotary.svg", href: "https://www.rotary.org", note: "Chartering body" },
  { name: "Interact", src: "/logos/interact.svg", href: "https://www.rotary.org/en/get-involved/interact-clubs", note: "Youth program" },
  { name: "UWC Red Cross Nordic", src: "/logos/uwcrcn.png", href: "https://www.uwcrcn.no", note: "Host school" },
  { name: "Vestland fylkeskommune", src: "/logos/vestland.png", href: "https://www.vestlandfylke.no", note: "Local partner" },
];

export default function Sponsors() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-[var(--rule)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="reveal grid lg:grid-cols-12 gap-8 items-baseline mb-14">
          <div className="lg:col-span-5">
            <div className="eyebrow eyebrow-num" data-num="§04">Partners & affiliations</div>
            <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[1.04] tracking-tight serif">Backed by a global network.</h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-ink/70 leading-relaxed text-[17px]">
            Chartered through Førde Rotary Club. Hosted at UWC Red Cross Nordic. Supported locally by Vestland fylkeskommune. Plugged into Rotary International's network of 1.2&nbsp;million members across 140 countries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {sponsors.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
              className="reveal group relative bg-paper p-8 lg:p-10 flex flex-col items-center justify-center min-h-[210px] hover:bg-cream/50 transition-colors">
              <div className="h-16 w-full flex items-center justify-center">
                <img src={s.src} alt={s.name} className="max-h-16 max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]" />
              </div>
              <div className="mt-5 text-center">
                <div className="text-[14px] font-bold tracking-tight">{s.name}</div>
                <div className="text-[10.5px] uppercase tracking-[0.18em] text-ink/45 mt-1">{s.note}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
