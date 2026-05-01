const NATIONALITIES = [
  "Belgium", "Cyprus", "Italy", "Spain", "Venezuela", "Kenya", "Togo",
  "India", "Philippines", "Denmark", "Nepal", "Norway", "Japan", "Iran",
  "Palestine", "Colombia", "Haiti", "USA", "Zimbabwe", "Finland", "Eswatini",
];

export default function Marquee() {
  const items = [...NATIONALITIES, ...NATIONALITIES];
  return (
    <div className="border-y border-[var(--rule)] py-6 bg-cream/50">
      <div className="marquee">
        <div className="marquee__track">
          {items.map((n, i) => (
            <span key={i} className="flex items-center gap-3 text-[14px] tracking-[0.1em] uppercase font-semibold text-ink/75">
              <span className="w-1.5 h-1.5 rounded-full bg-rotary"></span>
              {n}
            </span>
          ))}
        </div>
        <div className="marquee__track" aria-hidden="true">
          {items.map((n, i) => (
            <span key={`b-${i}`} className="flex items-center gap-3 text-[14px] tracking-[0.1em] uppercase font-semibold text-ink/75">
              <span className="w-1.5 h-1.5 rounded-full bg-rotary"></span>
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
