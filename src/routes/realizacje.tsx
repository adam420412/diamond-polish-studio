import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { X } from "lucide-react";
import wash from "@/assets/svc-wash.jpg";
import interior from "@/assets/svc-interior.jpg";
import polish from "@/assets/svc-polish.jpg";
import ceramic from "@/assets/svc-ceramic.jpg";
import cta from "@/assets/cta.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/realizacje")({
  head: () => ({
    meta: [
      { title: "Realizacje – Diamond Auto Myjnia Poznań" },
      { name: "description", content: "Portfolio realizacji studia detailingu Diamond w Poznaniu. Korekta lakieru, ceramika, detailing wnętrza." },
      { property: "og:title", content: "Realizacje – Diamond Auto Myjnia" },
      { property: "og:description", content: "Portfolio realizacji studia detailingu Diamond w Poznaniu." },
      { property: "og:image", content: cta },
    ],
  }),
  component: Realizacje,
});

const filters = ["Wszystkie", "Mycie", "Detailing wnętrza", "Korekta lakieru", "Ceramika"] as const;
type Filter = typeof filters[number];

const items = [
  { title: "Audi Q5 — korekta + ceramika", cat: "Korekta lakieru", img: polish, alt: ceramic, segment: "SUV" },
  { title: "Mercedes E — detailing wnętrza", cat: "Detailing wnętrza", img: interior, alt: interior, segment: "Premium" },
  { title: "BMW X5 — mycie i powłoka", cat: "Mycie", img: wash, alt: ceramic, segment: "SUV" },
  { title: "Porsche Macan — ceramika 9H", cat: "Ceramika", img: ceramic, alt: cta, segment: "Premium" },
  { title: "VW Golf — pełen detailing", cat: "Detailing wnętrza", img: interior, alt: wash, segment: "Kompakt" },
  { title: "BMW 5 — korekta dwuetapowa", cat: "Korekta lakieru", img: cta, alt: polish, segment: "Premium" },
  { title: "Audi A6 — mycie detailingowe", cat: "Mycie", img: wash, alt: hero, segment: "Premium" },
  { title: "Range Rover — ceramika + szyby", cat: "Ceramika", img: ceramic, alt: hero, segment: "SUV" },
  { title: "Skoda Octavia — pranie tapicerki", cat: "Detailing wnętrza", img: interior, alt: interior, segment: "Kompakt" },
  { title: "Mercedes GLE — korekta lakieru", cat: "Korekta lakieru", img: polish, alt: ceramic, segment: "SUV" },
  { title: "Audi Q7 — pakiet ochronny", cat: "Ceramika", img: hero, alt: ceramic, segment: "SUV" },
  { title: "BMW M3 — pełen detailing", cat: "Korekta lakieru", img: cta, alt: polish, segment: "Premium" },
];

function Realizacje() {
  const [filter, setFilter] = useState<Filter>("Wszystkie");
  const [active, setActive] = useState<number | null>(null);
  const list = items.filter((it) => filter === "Wszystkie" || it.cat === filter);

  return (
    <SiteLayout>
      <PageHero eyebrow="Portfolio" title="Realizacje" subtitle="Każde auto. Każdy efekt. Zobacz, co robimy." />

      <section className="pb-8">
        <div className="container-x flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition-colors ${
                filter === f
                  ? "border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/5"
                  : "border-[var(--gold)]/20 text-[var(--cream)]/70 hover:text-[var(--gold)] hover:border-[var(--gold)]/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="section-y pt-8">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((it, idx) => (
              <button
                key={`${it.title}-${idx}`}
                onClick={() => setActive(items.indexOf(it))}
                className="group relative overflow-hidden aspect-[4/5] text-left"
              >
                <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)] via-[var(--deep)]/30 to-transparent" />
                <div className="absolute inset-0 bg-[var(--deep)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center">
                  <span className="btn-outline">Zobacz przed/po</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="eyebrow">{it.cat} · {it.segment}</div>
                  <h3 className="font-display text-2xl text-[var(--cream)] mt-2">{it.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-[var(--deep)]/95 backdrop-blur-md p-4 md:p-10 grid place-items-center" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-[var(--gold)]" onClick={() => setActive(null)} aria-label="Zamknij"><X size={28} /></button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <BeforeAfter before={items[active].img} after={items[active].alt} alt={items[active].title} />
            <div className="mt-5 text-center">
              <div className="eyebrow">{items[active].cat}</div>
              <h3 className="font-display text-3xl text-[var(--cream)] mt-2">{items[active].title}</h3>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
