"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-paper/95 backdrop-blur border-b border-[var(--rule)]" : "bg-paper border-b border-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <Link href="/" className="group flex items-center gap-3" aria-label="Interact Club of UWC Vestland">
          <img src="/logo-mark.svg" alt="" width={36} height={36} className="transition-transform duration-500 group-hover:rotate-[18deg]" />
          <div className="leading-tight">
            <div className="font-extrabold text-[15.5px] tracking-tight">Interact Club</div>
            <div className="text-[10.5px] tracking-[0.18em] uppercase text-ink/55">UWC · Vestland</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.slice(1).map((n) => (
            <Link key={n.href} href={n.href} className="relative px-4 py-2 text-[14px] font-medium text-ink/80 hover:text-rotary transition-colors">
              {n.label}
            </Link>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
            aria-label="Instagram"
            className="ml-2 w-9 h-9 flex items-center justify-center rounded-full border border-[var(--rule)] text-ink/70 hover:text-rotary hover:border-rotary transition-colors">
            <InstagramIcon className="w-[18px] h-[18px]" />
          </a>
          <Link href="/get-involved" className="ml-3 px-4 py-2 bg-ink text-paper text-[13.5px] font-semibold tracking-tight border border-ink hover:bg-rotary hover:border-rotary transition-colors">
            Join the club
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-[2px] bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-paper border-t border-[var(--rule)]">
          <div className="px-6 py-3 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium border-b border-[var(--rule)] last:border-0">
                {n.label}
              </Link>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="py-3 text-base font-medium flex items-center gap-2">
              <InstagramIcon className="w-5 h-5"/> Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
