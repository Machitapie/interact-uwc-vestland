import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-[var(--rule)] bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-mark.svg" alt="" width={42} height={42} />
              <div>
                <div className="font-extrabold text-base">Interact Club of UWC Vestland</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-ink/55">Chartered with Førde Rotary Club · April 2026</div>
              </div>
            </div>
            <p className="text-ink/70 max-w-md leading-relaxed serif text-lg">
              The first UWC Interact Club. Members from 19 countries shipping projects in Vestland and beyond.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="eyebrow mb-4">Pages</div>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link href="/about" className="hover:text-rotary transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-rotary transition-colors">Projects</Link></li>
              <li><Link href="/get-involved" className="hover:text-rotary transition-colors">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-rotary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Reach us</div>
            <ul className="space-y-2.5 text-[15px]">
              <li><a href="mailto:interact@uwcrcn.no" className="hover:text-rotary transition-colors">interact@uwcrcn.no</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-rotary transition-colors">@interact.uwc.vestland</a></li>
              <li><a href="https://forde.rotary.no/" target="_blank" rel="noreferrer" className="hover:text-rotary transition-colors">Førde Rotary Club</a></li>
              <li className="text-ink/55 pt-2 text-[13px]">Haugland, 6968 Flekke, Vestland</li>
            </ul>
          </div>
        </div>
        <div className="rule my-10"/>
        <div className="flex flex-col md:flex-row justify-between gap-3 text-[12px] tracking-[0.06em] text-ink/55">
          <div>© {year} Interact Club of UWC Vestland</div>
          <div>Built in Flekke, Norway · A Rotary International program</div>
        </div>
      </div>
    </footer>
  );
}
