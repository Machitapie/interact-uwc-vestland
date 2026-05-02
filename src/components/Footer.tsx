import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 bg-[var(--ink)] text-white">
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="kicker text-white/55 mb-5">Interact Club of</div>
            <div className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[0.95]">
              UWC Vestland
            </div>
            <p className="mt-6 max-w-md text-white/70 leading-relaxed text-[15px]">
              A student-led Rotary Interact Club, chartered with Førde Rotary Club. Hosted at UWC Red Cross Nordic in Flekke, Norway.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <img src="/logos/interact.svg" alt="" className="h-8 brightness-0 invert opacity-90" />
              <span className="w-px h-7 bg-white/25"/>
              <img src="/logos/uwcrcn.png" alt="" className="h-7 brightness-0 invert opacity-90" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="kicker text-white/55 mb-5">Pages</div>
            <ul className="space-y-3 text-[15px]">
              <li><Link href="/about" className="hover:text-white text-white/85 transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-white text-white/85 transition-colors">Projects</Link></li>
              <li><Link href="/get-involved" className="hover:text-white text-white/85 transition-colors">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-white text-white/85 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="kicker text-white/55 mb-5">Reach us</div>
            <ul className="space-y-3 text-[15px]">
              <li><a href="mailto:interact@uwcrcn.no" className="hover:text-white text-white/85 transition-colors">interact@uwcrcn.no</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-white text-white/85 transition-colors">@interact.uwc.vestland</a></li>
              <li><a href="https://forde.rotary.no/" target="_blank" rel="noreferrer" className="hover:text-white text-white/85 transition-colors">Førde Rotary Club</a></li>
            </ul>
          </div>
        </div>
        <div className="rule my-10 bg-white/15"/>
        <div className="flex flex-col md:flex-row justify-between gap-3 text-[12px] tracking-[0.06em] text-white/55">
          <div>© {year} Interact Club of UWC Vestland</div>
          <div>A Rotary International program · Service Above Self</div>
        </div>
      </div>
    </footer>
  );
}
