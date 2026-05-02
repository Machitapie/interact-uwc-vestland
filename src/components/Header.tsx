"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/interact.uwc.vestland/";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white/95 backdrop-blur border-b border-[var(--rule)]" : "bg-[var(--bg)] border-b border-transparent"}`}>
      <div className="container-x flex items-center justify-between h-[76px]">
        <Link href="/" className="group flex items-center" aria-label="Interact Club of UWC Vestland — home">
          <img src="/logos/header-brand.png" alt="Interact · UWC" className="h-9 sm:h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="px-3.5 py-2 text-[14px] font-semibold text-[var(--ink)]/75 hover:text-[var(--ink)] transition-colors">
              {n.label}
            </Link>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"
            className="ml-2 w-9 h-9 flex items-center justify-center border border-[var(--rule)] text-[var(--ink)]/70 hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
            <InstagramIcon className="w-[17px] h-[17px]" />
          </a>
          <Link href="/get-involved" className="ml-3 px-4 py-2 bg-[var(--ink)] text-white text-[13.5px] font-bold border border-[var(--ink)] hover:bg-[var(--rotary)] hover:border-[var(--rotary)] transition-colors">
            Join the club
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-[2px] bg-[var(--ink)] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] bg-[var(--ink)] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[var(--rule)]">
          <div className="container-x py-3 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-semibold border-b border-[var(--rule)] last:border-0">
                {n.label}
              </Link>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="py-3 text-base font-semibold flex items-center gap-2">
              <InstagramIcon className="w-5 h-5"/> Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
