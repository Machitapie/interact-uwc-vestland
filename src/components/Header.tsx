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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-paper/85 backdrop-blur-md border-b border-ink/[.06]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-full bg-rotary group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-[3px] rounded-full bg-uwc opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm tracking-tight">I</div>
          </div>
          <div className="leading-none">
            <div className="font-bold text-[15px] tracking-tight">Interact Club</div>
            <div className="text-[11px] text-ink/60 tracking-wide uppercase">UWC Vestland</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="px-4 py-2 text-sm font-medium text-ink/75 hover:text-rotary transition-colors duration-300">
              {n.label}
            </Link>
          ))}
          <Link href="/get-involved" className="ml-4 px-5 py-2 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-rotary transition-colors duration-300">
            Join us
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
        <div className="md:hidden bg-paper border-t border-ink/10">
          <div className="px-6 py-4 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium border-b border-ink/5 last:border-0">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
