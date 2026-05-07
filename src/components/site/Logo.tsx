export function Logo({ size = 22, withTagline = false }: { size?: number; withTagline?: boolean }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg width={size} height={size} viewBox="0 0 32 32" className="text-[var(--gold)]" aria-hidden>
        <path
          d="M16 2 L30 12 L16 30 L2 12 Z M16 2 L10 12 L22 12 Z M2 12 L10 12 L16 30 Z M30 12 L22 12 L16 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <div className="leading-none">
        <div
          className="font-display text-[var(--gold)]"
          style={{ fontSize: size * 1.1, letterSpacing: "0.18em", fontWeight: 400 }}
        >
          DIAMOND
        </div>
        {withTagline && (
          <div className="eyebrow mt-1.5" style={{ fontSize: 9 }}>
            Auto Myjnia · Detailing
          </div>
        )}
      </div>
    </div>
  );
}
