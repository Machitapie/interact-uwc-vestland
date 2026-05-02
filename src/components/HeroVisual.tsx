// Real photo of Norway — the place this club calls home — with a slow-spinning Rotary wheel accent.
export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
      {/* Photo */}
      <img
        src="/images/hero-norway.jpg"
        alt="Sunset over Vestland, Norway"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Slight bottom gradient for caption legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[var(--ink)]/55 via-[var(--ink)]/15 to-transparent" />

      {/* Rotating Interact wheel — small, top-left accent */}
      <img
        src="/logos/rotary-wheel-cyan.png"
        alt=""
        aria-hidden
        className="absolute top-4 left-4 lg:top-5 lg:left-5 w-20 lg:w-28 animate-[spin_42s_linear_infinite] drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
      />

      {/* Caption */}
      <div className="absolute bottom-5 left-5 right-5 lg:bottom-7 lg:left-7 lg:right-7 text-white">
        <div className="text-[10.5px] tracking-[0.2em] uppercase font-bold text-white/85">Vestland · Norway</div>
        <div className="mt-1.5 text-[15px] lg:text-[16px] font-semibold leading-snug">
          Where students from 90+ countries call home for two years.
        </div>
      </div>
    </div>
  );
}
