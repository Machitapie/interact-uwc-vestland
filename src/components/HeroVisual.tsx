// Abstract Vestland fjord/mountain scene as a clean geometric SVG, layered with the cyan Interact gear.
export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
      <svg viewBox="0 0 600 800" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#eaf3ef"/>
            <stop offset="1" stopColor="#cfe2dc"/>
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#46988B"/>
            <stop offset="1" stopColor="#2f6e64"/>
          </linearGradient>
          <linearGradient id="mountain1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#17458f"/>
            <stop offset="1" stopColor="#0e2a5c"/>
          </linearGradient>
          <linearGradient id="mountain2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a6abf"/>
            <stop offset="1" stopColor="#17458f"/>
          </linearGradient>
        </defs>
        {/* Sky */}
        <rect width="600" height="800" fill="url(#sky)"/>
        {/* Sun mark */}
        <circle cx="430" cy="180" r="56" fill="#f5e6c5" opacity="0.85"/>
        {/* Far mountains */}
        <path d="M0,420 L80,330 L160,400 L240,300 L320,380 L400,290 L480,370 L600,310 L600,500 L0,500 Z" fill="url(#mountain2)" opacity="0.85"/>
        {/* Front mountains */}
        <path d="M0,500 L60,420 L150,490 L240,360 L340,470 L440,400 L600,460 L600,620 L0,620 Z" fill="url(#mountain1)"/>
        {/* Snow caps */}
        <g fill="#f7f5ef" opacity="0.85">
          <path d="M236,365 L260,420 L220,420 Z"/>
          <path d="M340,470 L368,495 L312,495 Z"/>
          <path d="M150,490 L172,510 L128,510 Z"/>
        </g>
        {/* Water */}
        <rect y="620" width="600" height="180" fill="url(#water)"/>
        {/* Water shimmer lines */}
        <g stroke="#fafaf7" strokeWidth="1" opacity="0.35">
          <line x1="60" y1="660" x2="180" y2="660"/>
          <line x1="220" y1="700" x2="380" y2="700"/>
          <line x1="40" y1="740" x2="220" y2="740"/>
          <line x1="280" y1="730" x2="420" y2="730"/>
          <line x1="100" y1="780" x2="260" y2="780"/>
        </g>
      </svg>
      {/* Floating Interact gear, animating gently */}
      <svg viewBox="0 0 200 200" className="absolute -top-8 -right-6 w-44 lg:w-56 animate-[spin_42s_linear_infinite]" aria-hidden>
        <g fill="#0FA3DB">
          <circle cx="100" cy="100" r="100" opacity="0.92"/>
        </g>
        <g fill="#fafaf7">
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 15} 100 100)`}>
              <rect x="96" y="0" width="8" height="14" rx="1"/>
            </g>
          ))}
        </g>
        <circle cx="100" cy="100" r="78" fill="#0FA3DB"/>
        <circle cx="100" cy="100" r="68" fill="none" stroke="#fafaf7" strokeWidth="3"/>
        <g fill="#fafaf7">
          <rect x="97" y="40" width="6" height="120"/>
          <g transform="rotate(60 100 100)"><rect x="97" y="40" width="6" height="120"/></g>
          <g transform="rotate(120 100 100)"><rect x="97" y="40" width="6" height="120"/></g>
        </g>
        <circle cx="100" cy="100" r="14" fill="#fafaf7"/>
        <circle cx="100" cy="100" r="9" fill="#0FA3DB"/>
      </svg>
    </div>
  );
}
