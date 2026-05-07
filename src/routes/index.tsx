import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Armchair, Disc3, Shield, Star, ChevronDown, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BeforeAfter } from "@/components/site/BeforeAfter";
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

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden grain">
        <img src={hero} alt="Diamond Auto Myjnia detailing studio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,24,17,0.55) 0%, rgba(14,42,31,0.85) 60%, var(--background) 100%)" }} />
        <div className="container-x relative z-10 fade-up">
          <div className="max-w-3xl">
            <div className="eyebrow">Studio Detailingu · Poznań</div>
            <h1 className="h-display h1 mt-6 text-[var(--cream)]">
              Każdy detal.<br /><em className="text-[var(--gold)] not-italic font-normal">Każdy milimetr.</em>
            </h1>
            <p className="lead mt-7 max-w-xl">
              Studio detailingu samochodowego w Poznaniu. Auta osobowe, SUV-y i limuzyny premium – traktujemy każde z nich jak własne.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-gold">Umów termin <ArrowRight size={14} /></Link>
              <Link to="/realizacje" className="btn-outline">Zobacz realizacje</Link>
            </div>
          </div>
        </div>
        <a href="#dalej" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--gold)] float" aria-label="Scroll">
          <ChevronDown size={28} />
        </a>
      </section>

      {/* SOCIAL PROOF */}
      <section id="dalej" className="bg-[var(--deep)] border-y border-[var(--gold)]/15">
        <div className="container-x py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-[var(--cream)]/85">
          {[
            <span className="flex items-center gap-2"><Star size={14} className="text-[var(--gold)] fill-[var(--gold)]" /> 4.3/5 na Google</span>,
            <span>49 opinii klientów</span>,
            <span>Studio od 2023</span>,
            <span>ul. Ostatnia 13, Poznań</span>,
          ].map((el, i) => (
            <span key={i} className="flex items-center gap-x-10">
              {el}
              {i < 3 && <span className="text-[var(--gold)] hidden md:inline">·</span>}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y relative">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Usługi</div>
            <h2 className="h-display h2 mt-4 text-[var(--cream)]">Pełne studio detailingu</h2>
            <p className="lead mt-5">
              Od mycia po ceramiczne zabezpieczenie. Robimy wszystko, co potrzeba, żeby Twoje auto wyglądało lepiej niż z salonu.
            </p>
            <div className="gold-divider mt-8" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-16">
            {services.map((s) => (
              <div key={s.title} className="card-luxe p-8 md:p-10 group">
                <s.icon size={32} className="text-[var(--gold)]" strokeWidth={1.2} />
                <h3 className="h-display h3 mt-6 text-[var(--cream)]">{s.title}</h3>
                <p className="lead mt-3 text-[15px]">{s.body}</p>
                <Link to="/uslugi" className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-[var(--gold)]">
                  Dowiedz się więcej <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-y bg-[var(--onyx)] relative grain">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">Dlaczego my</div>
            <h2 className="h-display h2 mt-4 text-[var(--cream)]">Detailing bez bajek</h2>
            <div className="gold-divider mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              { n: "01", t: "Realne efekty", b: "49 zadowolonych klientów na Google. 4.3/5 średniej oceny. Nie obiecujemy – pokazujemy." },
              { n: "02", t: "Auta każdej klasy", b: "Kompakt, SUV, limuzyna premium. Klient z Pandą i klient z S-klasą wychodzą z tym samym wow." },
              { n: "03", t: "Profesjonalna chemia", b: "Pracujemy na sprzęcie i chemii klasy detailingowej. Nie supermarketowej. Różnicę widać na lakierze i tapicerce." },
            ].map((c) => (
              <div key={c.n}>
                <div className="font-display text-6xl text-[var(--gold)] tabular-nums">{c.n}</div>
                <div className="w-12 h-px bg-[var(--gold)]/40 my-5" />
                <h3 className="h-display h3 text-[var(--cream)]">{c.t}</h3>
                <p className="lead mt-3 text-[15px]">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALIZACJE PREVIEW */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="eyebrow">Realizacje</div>
              <h2 className="h-display h2 mt-4 text-[var(--cream)]">Zobacz różnicę</h2>
            </div>
            <Link to="/realizacje" className="btn-outline">Wszystkie realizacje</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Audi Q5 — korekta + ceramika", before: polish, after: ceramic },
              { title: "Mercedes E — detailing wnętrza", before: interior, after: interior },
              { title: "BMW X5 — mycie i powłoka", before: wash, after: ceramic },
            ].map((r) => (
              <div key={r.title} className="group">
                <BeforeAfter before={r.before} after={r.after} alt={r.title} />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-xl text-[var(--cream)]">{r.title}</h3>
                  <span className="eyebrow">Przeciągnij ⇆</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-y bg-[var(--onyx)] relative grain">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">Opinie klientów</div>
            <h2 className="h-display h2 mt-4 text-[var(--cream)]">Co mówią klienci</h2>
            <div className="gold-divider mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {reviews.map((r, i) => (
              <div key={i} className="card-luxe p-8">
                <div className="flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} className="fill-[var(--gold)]" />)}
                </div>
                <p className="font-display italic text-xl text-[var(--cream)] leading-snug mt-5">„{r.quote}"</p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">— {r.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="btn-outline">Zobacz wszystkie opinie na Google</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 overflow-hidden grain">
        <img src={cta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, rgba(14,42,31,0.85) 50%, var(--deep) 100%)" }} />
        <div className="container-x relative z-10 text-center">
          <h2 className="h-display h2 text-[var(--cream)] max-w-3xl mx-auto">
            Twoje auto zasługuje na <em className="text-[var(--gold)] not-italic">więcej.</em>
          </h2>
          <p className="lead mt-6 max-w-xl mx-auto">
            Umów termin lub zadzwoń. Powiemy uczciwie, co da się zrobić i ile to potrwa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/kontakt" className="btn-gold">Umów termin</Link>
            <a href="tel:+48786665447" className="btn-outline"><Phone size={14} /> +48 786 665 447</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
