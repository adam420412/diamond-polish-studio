import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Diamond Auto Myjnia Poznań" },
      { name: "description", content: "Umów termin w studio detailingu Diamond. ul. Ostatnia 13, Poznań. Tel. +48 786 665 447" },
      { property: "og:title", content: "Kontakt – Diamond Auto Myjnia" },
      { property: "og:description", content: "Studio detailingu Poznań. ul. Ostatnia 13. +48 786 665 447" },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Umów termin"
        subtitle="Zadzwoń, napisz lub zostaw wiadomość. Odzywamy się tego samego dnia."
      />

      <section className="section-y pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="space-y-4">
            {[
              { i: Phone, label: "Telefon", value: "+48 786 665 447", href: "tel:+48786665447" },
              { i: Mail, label: "E-mail", value: "automyjnia.diamond@gmail.com", href: "mailto:automyjnia.diamond@gmail.com" },
              { i: MapPin, label: "Adres", value: "ul. Ostatnia 13, 60-102 Poznań" },
            ].map((c) => {
              const inner = (
                <>
                  <c.i size={20} className="text-[var(--gold)] mt-1 shrink-0" strokeWidth={1.3} />
                  <div>
                    <div className="eyebrow">{c.label}</div>
                    <div className="text-[var(--cream)] mt-1.5 text-lg">{c.value}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="card-luxe p-6 flex items-start gap-4 hover:border-[var(--gold)]/55 block">{inner}</a>
              ) : (
                <div key={c.label} className="card-luxe p-6 flex items-start gap-4">{inner}</div>
              );
            })}

            <div className="card-luxe p-6">
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-[var(--gold)] mt-1 shrink-0" strokeWidth={1.3} />
                <div className="flex-1">
                  <div className="eyebrow">Godziny otwarcia</div>
                  <ul className="mt-3 space-y-1.5 text-[var(--cream)] tabular-nums text-sm">
                    <li className="flex justify-between"><span>Pon – Pt</span><span>8:00 – 18:00</span></li>
                    <li className="flex justify-between"><span>Sobota</span><span>8:00 – 16:00</span></li>
                    <li className="flex justify-between"><span>Niedziela</span><span className="text-[var(--muted-foreground)]">Zamknięte</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="https://facebook.com/diamondautomyjniadetailing" target="_blank" rel="noreferrer" className="w-12 h-12 grid place-items-center border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--burgundy)] hover:border-[var(--burgundy)] hover:text-[var(--cream)] transition-colors"><Facebook size={18} /></a>
              <a href="https://instagram.com/automyjniadiamond" target="_blank" rel="noreferrer" className="w-12 h-12 grid place-items-center border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--burgundy)] hover:border-[var(--burgundy)] hover:text-[var(--cream)] transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="eyebrow">Wiadomość</div>
            <h2 className="h-display text-3xl md:text-4xl mt-3 text-[var(--cream)]">Zostaw zapytanie</h2>

            {sent ? (
              <div className="mt-10 card-luxe p-10 text-center">
                <div className="font-display text-3xl text-[var(--gold)]">Dzięki!</div>
                <p className="lead mt-3">Odezwiemy się tego samego dnia. Sprawdź telefon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <input required placeholder="Imię i nazwisko *" className="input-luxe" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <input required type="tel" placeholder="Telefon *" className="input-luxe" />
                  <input type="email" placeholder="E-mail" className="input-luxe" />
                </div>
                <input placeholder="Marka i model auta" className="input-luxe" />
                <select className="input-luxe text-[var(--cream)] bg-[var(--background)]">
                  <option>Wybierz usługę</option>
                  <option>Mycie i pielęgnacja</option>
                  <option>Detailing wnętrza</option>
                  <option>Korekta lakieru</option>
                  <option>Ceramika</option>
                  <option>Inne</option>
                  <option>Nie wiem – doradźcie</option>
                </select>
                <textarea rows={4} placeholder="Wiadomość" className="input-luxe resize-none" />
                <label className="flex items-start gap-3 text-xs text-[var(--muted-foreground)] cursor-pointer">
                  <input type="checkbox" required className="mt-1 accent-[var(--gold)]" />
                  <span>Zgadzam się na kontakt w sprawie zapytania.</span>
                </label>
                <button type="submit" className="btn-gold w-full sm:w-auto">Wyślij zapytanie</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="aspect-[21/9] w-full bg-[var(--onyx)] overflow-hidden">
          <iframe
            title="Diamond Auto Myjnia – mapa"
            src="https://www.google.com/maps?q=ul.+Ostatnia+13,+Pozna%C5%84&output=embed"
            className="w-full h-full"
            style={{ border: 0, filter: "invert(0.92) hue-rotate(120deg) saturate(0.5) brightness(0.85)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
