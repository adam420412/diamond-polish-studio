import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import wash from "@/assets/svc-wash.jpg";
import interior from "@/assets/svc-interior.jpg";
import polish from "@/assets/svc-polish.jpg";
import ceramic from "@/assets/svc-ceramic.jpg";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Usługi – Diamond Auto Myjnia Poznań" },
      { name: "description", content: "Mycie detailingowe, pranie tapicerki, korekta lakieru, powłoki ceramiczne 9H. Pełna oferta studia detailingu w Poznaniu." },
      { property: "og:title", content: "Usługi – Diamond Auto Myjnia" },
      { property: "og:description", content: "Pełna oferta studia detailingu w Poznaniu." },
      { property: "og:image", content: polish },
    ],
  }),
  component: Uslugi,
});

const sections = [
  {
    title: "Mycie i pielęgnacja",
    img: wash,
    body: "Mycie to fundament. Robimy je tak, żeby lakier wyszedł z myjki czystszy niż wszedł – bez nowych rys.",
    items: [
      "Mycie ręczne metodą dwóch wiader",
      "Mycie detailingowe – foam wash + dekontaminacja",
      "Mycie podwozia",
      "Czyszczenie komory silnika",
      "Pakiet abonamentowy dla klientów cyklicznych",
    ],
  },
  {
    title: "Detailing wnętrza",
    img: interior,
    body: "Wnętrze ma żyć. Przywracamy fabryczny zapach, kolor i fakturę – bez chemii, którą czuć trzy dni.",
    items: [
      "Pranie tapicerki materiałowej (fotele, kanapa)",
      "Czyszczenie i pielęgnacja skór",
      "Czyszczenie podsufitki, plastików, dywaników",
      "Ozonowanie i neutralizacja zapachów",
      "Renowacja przeszyć i kierownicy",
    ],
  },
  {
    title: "Korekta lakieru",
    img: polish,
    body: "Hologramy, swirle, mikrorysy. Polerką maszynową przywracamy lakierowi głębię, której nie da żaden wosk z półki.",
    items: [
      "Polerowanie jednoetapowe",
      "Polerowanie dwuetapowe (głęboka korekta)",
      "Usuwanie hologramów i swirli",
      "Maszynowa renowacja reflektorów",
      "Polerowanie szyb",
    ],
  },
  {
    title: "Powłoki ceramiczne",
    img: ceramic,
    body: "Ceramika to nie cudowny środek. To uczciwa ochrona na lata – mniej mycia, więcej błysku, mniej rys.",
    items: [
      "Powłoka ceramiczna 9H (lakier)",
      "Powłoka na szyby",
      "Powłoka na felgi",
      "Woski premium i sealanty",
      "Pakiety zabezpieczeń sezonowych",
    ],
  },
];

function Uslugi() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Oferta"
        title="Usługi"
        subtitle="Pełna oferta studia detailingu Diamond w Poznaniu. Ceny na zapytanie – każde auto wycenia się indywidualnie po oględzinach."
      />

      {sections.map((s, i) => (
        <section
          key={s.title}
          className={`section-y relative grain ${i % 2 === 1 ? "bg-[var(--onyx)]" : ""}`}
        >
          <div className={`container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 eyebrow">{`0${i + 1}`}</div>
            </div>
            <div>
              <div className="eyebrow">{`Kategoria 0${i + 1}`}</div>
              <h2 className="h-display h2 mt-4 text-[var(--cream)]">{s.title}</h2>
              <p className="lead mt-5">{s.body}</p>
              <ul className="mt-8 space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[var(--cream)]/90">
                    <Check size={16} className="text-[var(--gold)] mt-1 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <Link to="/kontakt" className="btn-gold mt-10">Zapytaj o wycenę</Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section-y bg-[var(--deep)] text-center grain">
        <div className="container-x">
          <h2 className="h-display h2 text-[var(--cream)]">Nie wiesz, co wybrać?</h2>
          <p className="lead mt-4">Zadzwoń – doradzimy uczciwie, co warto zrobić, a co sobie odpuścić.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="tel:+48786665447" className="btn-gold">+48 786 665 447</a>
            <Link to="/kontakt" className="btn-outline">Formularz kontaktowy</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
