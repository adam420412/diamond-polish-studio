import { createFileRoute, Link } from "@tanstack/react-router";
import { Disc3, FlaskConical, Shield, Wind } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import founder from "@/assets/founder.jpg";
import polish from "@/assets/svc-polish.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas – Diamond Auto Myjnia Poznań" },
      { name: "description", content: "Studio detailingu Diamond w Poznaniu. Założone w 2023 roku przez Dawida Ratajczaka. Ludzie, którzy kochają to, co robią." },
      { property: "og:title", content: "O nas – Diamond Auto Myjnia" },
      { property: "og:description", content: "Studio detailingu w Poznaniu założone w 2023 roku." },
      { property: "og:image", content: founder },
    ],
  }),
  component: ONas,
});

function ONas() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="O studio"
        title="Diamond Auto Myjnia"
        subtitle="Studio detailingu w Poznaniu. Założone w 2023 roku. Prowadzone przez ludzi, którzy kochają to, co robią."
      />

      {/* History */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={polish} alt="Studio Diamond" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow">Historia</div>
            <h2 className="h-display h2 mt-4 text-[var(--cream)]">Dlaczego Diamond</h2>
            <div className="space-y-5 mt-7 lead">
              <p>Diamond Auto Myjnia powstała w 2023 roku w Poznaniu, na Junikowie. Otworzyliśmy studio z prostego powodu: chcieliśmy robić detailing tak, jak powinien wyglądać. Bez kompromisów, bez pójścia na skróty, bez chemii ze stacji benzynowej.</p>
              <p>Każde auto, które wjeżdża do nas na halę, traktujemy jak własne. Nie ma znaczenia, czy to dziesięcioletni Golf, czy nowa S-klasa. Czas pracy ten sam. Uważność ta sama. Efekt – ten sam standard.</p>
              <p>Celujemy w segment premium, ale każdy klient jest u nas tak samo ważny. Mówimy szczerze, co da się zrobić, ile to potrwa i ile będzie kosztować. Bez bajek.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-y bg-[var(--onyx)] grain relative">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={founder} alt="Dawid Ratajczak — założyciel Diamond Auto Myjnia" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--onyx)]/40 to-transparent" />
          </div>
          <div>
            <div className="eyebrow">Założyciel</div>
            <h2 className="h-display h2 mt-4 text-[var(--cream)]">Dawid Ratajczak</h2>
            <p className="lead mt-6">
              Założyciel i twarz studia. Detailing to dla niego nie zawód – to obsesja. Każdy etap polerki, każdy ruch ścierką, każdy gram chemii ma znaczenie. Od pierwszego dnia w Diamond pracuje z tą samą filozofią: jeżeli można zrobić lepiej, to robimy lepiej.
            </p>
            <blockquote className="mt-10 relative pl-8 border-l-2 border-[var(--gold)]">
              <span className="absolute -left-1 -top-4 text-6xl text-[var(--gold)] font-display leading-none">"</span>
              <p className="font-display italic text-2xl text-[var(--cream)] leading-snug">
                Detailing to nie sztuczki. To godziny pracy nad każdym milimetrem lakieru.
              </p>
              <footer className="mt-4 eyebrow">Dawid Ratajczak</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Jak pracujemy</div>
            <h2 className="h-display h2 mt-4 text-[var(--cream)]">Profesjonalny sprzęt. Profesjonalna chemia.</h2>
            <div className="gold-divider mt-8" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { i: Disc3, t: "Polerki maszynowe", b: "Rotacyjne i DA. Pełna kontrola nad lakierem na każdym etapie korekty." },
              { i: FlaskConical, t: "Chemia detailingowa", b: "Renomowane marki – nie supermarketowa półka. Bezpieczna dla lakieru i wnętrza." },
              { i: Shield, t: "Powłoki 9H", b: "Ceramika klasy profesjonalnej – długoletnia ochrona, certyfikowana aplikacja." },
              { i: Wind, t: "Ozonatory medyczne", b: "Skuteczna neutralizacja zapachów – również po dymie i zwierzętach." },
            ].map((c) => (
              <div key={c.t} className="card-luxe p-7 text-center">
                <c.i size={28} className="text-[var(--gold)] mx-auto" strokeWidth={1.2} />
                <h3 className="font-display text-xl text-[var(--cream)] mt-5">{c.t}</h3>
                <p className="lead mt-3 text-sm">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--deep)] text-center grain">
        <div className="container-x">
          <h2 className="h-display h2 text-[var(--cream)]">Sprawdź, co możemy zrobić z Twoim autem</h2>
          <Link to="/kontakt" className="btn-gold mt-8">Umów termin</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
