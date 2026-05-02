const sponsors = [
  { name: "Rotary International", src: "/logos/rotary.svg", href: "https://www.rotary.org", note: "Parent organisation" },
  { name: "Interact", src: "/logos/interact.svg", href: "https://www.rotary.org/en/get-involved/interact-clubs", note: "Youth program" },
  { name: "UWC Red Cross Nordic", src: "/logos/uwcrcn.png", href: "https://www.uwcrcn.no", note: "Host school" },
  { name: "Vestland fylkeskommune", src: "/logos/vestland.png", href: "https://www.vestlandfylke.no", note: "Local partner" },
];

export default function Sponsors() {
  return (
    <section className="bg-white">
      <div className="container-x py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="kicker text-[var(--rotary)] mb-5">Partners</div>
            <h2 className="h-section text-[clamp(2.2rem,4.4vw,3.8rem)]">Backed by a global network.</h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[17px] leading-[1.6] text-[var(--ink)]/75 self-end">
            Chartered through Førde Rotary Club. Hosted at UWC Red Cross Nordic. Supported locally by Vestland fylkeskommune. Plugged into Rotary International's network of 1.2&nbsp;million members across 140 countries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {sponsors.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
              className="reveal group relative bg-white p-8 lg:p-12 flex flex-col items-center justify-center min-h-[220px] hover:bg-[var(--bg)] transition-colors">
              <div className="h-16 w-full flex items-center justify-center">
                <img src={s.src} alt={s.name} className="max-h-16 max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]" />
              </div>
              <div className="mt-6 text-center">
                <div className="text-[14px] font-bold tracking-tight">{s.name}</div>
                <div className="kicker text-[var(--ink)]/45 mt-1.5">{s.note}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
