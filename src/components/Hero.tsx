"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const onMove = (e: MouseEvent) => setT(((e.clientX / window.innerWidth) - 0.5) * 12);
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative pt-[112px] pb-24 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-rotary/[.07] blur-3xl" style={{ transform: `translateX(${t}px)` }} />
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full bg-uwc/[.10] blur-3xl" style={{ transform: `translateX(${-t}px)` }} />
      <div className="noise" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="tag">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uwc opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-uwc" />
            </span>
            Newly chartered · April 2026
          </span>
          <span className="text-xs text-ink/50 hidden sm:inline">First UWC Interact Club, worldwide</span>
        </div>

        <h1 className="text-display font-bold tracking-tight max-w-[16ch]" style={{ animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) both" }}>
          Ideas into <span className="gradient-text">impact.</span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
          <p className="lg:col-span-6 text-lg lg:text-xl text-ink/70 leading-relaxed max-w-2xl reveal">
            We're a student-led branch of <strong className="text-ink">Rotary International</strong> at UWC Red Cross Nordic — helping young changemakers from 30+ countries clarify purpose, build teams, and connect with partners beyond campus.
          </p>
          <div className="lg:col-span-6 lg:col-start-8 flex flex-wrap gap-4 reveal">
            <Link href="/get-involved" className="btn-primary">
              <span>Join the club</span>
              <span aria-hidden>→</span>
            </Link>
            <Link href="/projects" className="btn-ghost">
              <span>See our projects</span>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden reveal">
          {[
            { k: "30+", v: "Nationalities" },
            { k: "5", v: "Board members" },
            { k: "140", v: "Countries in network" },
            { k: "1.2M", v: "Rotary members worldwide" },
          ].map((s) => (
            <div key={s.v} className="bg-paper p-6 lg:p-8 group hover:bg-white transition-colors duration-300">
              <div className="text-4xl lg:text-5xl font-bold tracking-tight text-rotary group-hover:text-uwc transition-colors duration-500">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-ink/50">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
