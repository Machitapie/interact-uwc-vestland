import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper mt-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-[1.05]">
              Turning ideas <br />
              <span className="text-uwc-soft">into impact.</span>
            </div>
            <p className="mt-6 text-paper/65 max-w-md leading-relaxed">
              The first UWC Interact Club — students from 30+ countries building projects with Rotary International, in Vestland and beyond.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="link-underline">About</Link></li>
              <li><Link href="/projects" className="link-underline">Projects</Link></li>
              <li><Link href="/get-involved" className="link-underline">Get Involved</Link></li>
              <li><Link href="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-5">Connect</div>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:interact@uwcrcn.no" className="link-underline">interact@uwcrcn.no</a></li>
              <li><a href="INSTAGRAM_URL" className="link-underline">Instagram</a></li>
              <li><a href="https://www.rotary.org/en/get-involved/interact-clubs" target="_blank" rel="noreferrer" className="link-underline">Interact at Rotary.org</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-paper/50">
          <div>© {new Date().getFullYear()} Interact Club of UWC Vestland. Chartered with Førde Rotary Club.</div>
          <div>Flekke, Vestland · Norway</div>
        </div>
      </div>
    </footer>
  );
}
