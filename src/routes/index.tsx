import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Armchair, Disc3, Shield, Star, ChevronDown, Phone, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Reveal, ScrollProgress, Stat, SpotlightCard } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import cta from "@/assets/cta.jpg";
import wash from "@/assets/svc-wash.jpg";
import interior from "@/assets/svc-interior.jpg";
import polish from "@/assets/svc-polish.jpg";
import ceramic from "@/assets/svc-ceramic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diamond Auto Myjnia – Studio Detailingu Samochodowego Poznań" },
      { name: "description", content: "Profesjonalne studio detailingu w Poznaniu. Mycie, pranie tapicerki, korekta lakieru, powłoki ceramiczne. ★ 4.3/5 na Google. Umów termin: 786 665 447" },
      { property: "og:title", content: "Diamond Auto Myjnia – Studio Detailingu Poznań" },
      { property: "og:description", content: "Studio detailingu premium w Poznaniu. Każdy detal. Każdy milimetr." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Droplets, title: "Mycie i pielęgnacja", body: "Dwa wiadra, foam wash, dekontaminacja chemiczna i mechaniczna. Nie rysujemy lakieru – mycie tak, jak powinno wyglądać." },
  { icon: Armchair, title: "Detailing wnętrza", body: "Pranie tapicerki, czyszczenie i pielęgnacja skór, neutralizacja zapachów ozonem. Wnętrze odświeżone do stanu showroom." },
  { icon: Disc3, title: "Korekta lakieru", body: "Polerowanie maszynowe jedno- i dwuetapowe, usuwanie hologramów i swirli, renowacja reflektorów. Lakier wraca do głębi." },
  { icon: Shield, title: "Powłoki ceramiczne", body: "Ceramika 9H na lakier, szyby i felgi. Długoterminowa ochrona przed UV, brudem i drobnymi rysami. Mniej mycia, więcej błysku." },
];

const reviews = [
  { quote: "Mojemu 15-letniemu autu nie ma równego, wygląda jak prosto z salonu! Polecam!", name: "Klient Google" },
  { quote: "5 gwiazdek to zdecydowanie za mało, te chłopaki powinny dostać dużo więcej. Moje auto nigdy tak dobrze nie wyglądało.", name: "Klient Google" },
  { quote: "Bardzo polecam. Mega miła obsługa. Auto bardzo dobrze wyczyszczone i umyte z zewnątrz i w środku. Jesteśmy bardzo zadowoleni.", name: "Klient Google" },
];

const marqueeWords = ["Porsche", "Audi", "BMW", "Mercedes-Benz", "Range Rover", "Lexus", "Volvo", "Tesla", "Bentley", "Maserati"];

function Home() {
  return (
    <SiteLayout>
      <ScrollProgress />

      {/* HERO */}
      <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden grain vignette">
        <div className="absolute inset-0 overflow-hidden">
          <img src={hero} alt="Diamond Auto Myjnia detailing studio" className="absolute inset-0 w-full h-full object-cover kenburns" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,24,17,0.55) 0%, rgba(14,42,31,0.85) 60%, var(--background) 100%)" }} />

        {/* gold horizontal lines */}
        <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow fade-up flex items-center gap-3">
              <Sparkles size={14} className="text-[var(--gold)]" />
              Studio Detailingu · Poznań · Est. 2023
            </div>
            <h1 className="h-display h1 mt-7 text-[var(--cream)]">
              <span className="reveal-line reveal-1"><span>Każdy detal.</span></span>
              <span className="reveal-line reveal-2"><span><em className="shimmer-gold not-italic font-normal">Każdy milimetr.</em></span></span>
            </h1>
            <p className="lead mt-7 max-w-xl fade-up" style={{ animationDelay: ".7s" }}>
              Studio detailingu samochodowego w Poznaniu. Auta osobowe, SUV-y i limuzyny premium – traktujemy każde z nich jak własne.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 fade-up" style={{ animationDelay: ".9s" }}>
              <Link to="/kontakt" className="btn-gold">Umów termin <ArrowRight size={14} /></Link>
              <Link to="/realizacje" className="btn-outline">Zobacz realizacje</Link>
            </div>
          </div>
        </div>

        {/* corner stat */}
        <div className="absolute bottom-12 right-8 hidden md:block text-right fade-up" style={{ animationDelay: "1.1s" }}>
          <div className="font-display text-5xl text-[var(--gold)] leading-none">4.3<span className="text-2xl text-[var(--cream)]/50">/5</span></div>
          <div className="eyebrow mt-2">49 opinii Google</div>
        </div>

        <a href="#dalej" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--gold)] float" aria-label="Scroll">
          <ChevronDown size={28} />
        </a>
      </section>

      {/* MARQUEE */}
      <section className="bg-[var(--deep)] border-y border-[var(--gold)]/15 py-8 overflow-hidden">
        <div className="marquee">
          {[0, 1].map((k) => (
            <div className="marquee-track" key={k} aria-hidden={k === 1}>
              {marqueeWords.map((w) => (
                <span key={`${k}-${w}`} className="font-display text-3xl md:text-4xl text-[var(--cream)]/40 italic whitespace-nowrap">
                  {w} <span className="text-[var(--gold)] not-italic mx-2">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section id="dalej" className="section-y">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-12">
          <Reveal delay={0}><Stat value={4} suffix=".3" label="Ocena Google" /></Reveal>
          <Reveal delay={100}><Stat value={49} label="Opinii klientów" /></Reveal>
          <Reveal delay={200}><Stat value={500} suffix="+" label="Aut rocznie" /></Reveal>
          <Reveal delay={300}><Stat value={9} suffix="H" label="Twardość ceramiki" /></Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y relative bg-[var(--onyx)] grain">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow">Usługi</div>
              <h2 className="h-display h2 mt-4 text-[var(--cream)]">Pełne studio detailingu</h2>
              <p className="lead mt-5">
                Od mycia po ceramiczne zabezpieczenie. Robimy wszystko, co potrzeba, żeby Twoje auto wyglądało lepiej niż z salonu.
              </p>
              <div className="gold-divider mt-8" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 mt-16">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <SpotlightCard className="card-luxe p-8 md:p-10 group h-full">
                  <s.icon size={32} className="text-[var(--gold)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" strokeWidth={1.2} />
                  <h3 className="h-display h3 mt-6 text-[var(--cream)]">{s.title}</h3>
                  <p className="lead mt-3 text-[15px]">{s.body}</p>
                  <Link to="/uslugi" className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-[var(--gold)]">
                    Dowiedz się więcej <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-y relative grain">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow">Dlaczego my</div>
              <h2 className="h-display h2 mt-4 text-[var(--cream)]">Detailing <em className="shimmer-gold not-italic">bez bajek.</em></h2>
              <div className="gold-divider mt-8" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              { n: "01", t: "Realne efekty", b: "49 zadowolonych klientów na Google. 4.3/5 średniej oceny. Nie obiecujemy – pokazujemy." },
              { n: "02", t: "Auta każdej klasy", b: "Kompakt, SUV, limuzyna premium. Klient z Pandą i klient z S-klasą wychodzą z tym samym wow." },
              { n: "03", t: "Profesjonalna chemia", b: "Pracujemy na sprzęcie i chemii klasy detailingowej. Nie supermarketowej. Różnicę widać na lakierze i tapicerce." },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 150}>
                <div className="font-display text-7xl text-[var(--gold)]/90 tabular-nums">{c.n}</div>
                <div className="w-12 h-px bg-[var(--gold)]/40 my-5" />
                <h3 className="h-display h3 text-[var(--cream)]">{c.t}</h3>
                <p className="lead mt-3 text-[15px]">{c.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REALIZACJE PREVIEW */}
      <section className="section-y bg-[var(--onyx)] relative grain">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
              <div>
                <div className="eyebrow">Realizacje</div>
                <h2 className="h-display h2 mt-4 text-[var(--cream)]">Zobacz różnicę</h2>
              </div>
              <Link to="/realizacje" className="btn-outline">Wszystkie realizacje</Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Audi Q5 — korekta + ceramika", before: polish, after: ceramic },
              { title: "Mercedes E — detailing wnętrza", before: interior, after: interior },
              { title: "BMW X5 — mycie i powłoka", before: wash, after: ceramic },
            ].map((r, i) => (
              <Reveal key={r.title} delay={i * 120}>
                <div className="group">
                  <BeforeAfter before={r.before} after={r.after} alt={r.title} />
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-xl text-[var(--cream)]">{r.title}</h3>
                    <span className="eyebrow">Przeciągnij ⇆</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-y relative grain">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow">Opinie klientów</div>
              <h2 className="h-display h2 mt-4 text-[var(--cream)]">Co mówią klienci</h2>
              <div className="gold-divider mt-8" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 130}>
                <SpotlightCard className="card-luxe p-8 h-full">
                  <div className="flex gap-1 text-[var(--gold)]">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} className="fill-[var(--gold)]" />)}
                  </div>
                  <p className="font-display italic text-xl text-[var(--cream)] leading-snug mt-5">„{r.quote}"</p>
                  <div className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">— {r.name}</div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="btn-outline">Zobacz wszystkie opinie na Google</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 overflow-hidden grain vignette">
        <img src={cta} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, rgba(14,42,31,0.85) 50%, var(--deep) 100%)" }} />
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <h2 className="h-display h2 text-[var(--cream)] max-w-3xl mx-auto">
              Twoje auto zasługuje na <em className="shimmer-gold not-italic">więcej.</em>
            </h2>
            <p className="lead mt-6 max-w-xl mx-auto">
              Umów termin lub zadzwoń. Powiemy uczciwie, co da się zrobić i ile to potrwa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/kontakt" className="btn-gold">Umów termin</Link>
              <a href="tel:+48786665447" className="btn-outline"><Phone size={14} /> +48 786 665 447</a>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
