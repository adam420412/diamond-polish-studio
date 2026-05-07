import { useRef, useState, MouseEvent, TouchEvent } from "react";

export function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);

  const set = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
      onMouseMove={(e: MouseEvent) => drag && set(e.clientX)}
      onMouseDown={(e: MouseEvent) => { setDrag(true); set(e.clientX); }}
      onMouseUp={() => setDrag(false)}
      onMouseLeave={() => setDrag(false)}
      onTouchStart={(e: TouchEvent) => { setDrag(true); set(e.touches[0].clientX); }}
      onTouchMove={(e: TouchEvent) => drag && set(e.touches[0].clientX)}
      onTouchEnd={() => setDrag(false)}
    >
      <img src={after} alt={`${alt} – po`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${alt} – przed`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
        <div className="absolute top-3 left-3 eyebrow bg-[var(--deep)]/80 px-2 py-1">Przed</div>
      </div>
      <div className="absolute top-3 right-3 eyebrow bg-[var(--deep)]/80 px-2 py-1">Po</div>
      <div
        className="absolute top-0 bottom-0 w-px bg-[var(--gold)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[var(--gold)] bg-[var(--deep)]/90 grid place-items-center text-[var(--gold)]">
          <span className="text-xs">⇆</span>
        </div>
      </div>
    </div>
  );
}
