import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--deep)] border-t border-[var(--gold)]/15 mt-0">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Logo withTagline size={26} />
          <p className="lead mt-6 text-sm">
            Studio detailingu w Poznaniu. Każdy detal. Każdy milimetr. Każde auto traktujemy jak własne.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Kontakt</div>
          <ul className="space-y-3 text-sm text-[var(--cream)]/85">
            <li className="flex items-start gap-3"><Phone size={14} className="text-[var(--gold)] mt-1" /><a href="tel:+48786665447" className="hover:text-[var(--gold)]">+48 786 665 447</a></li>
            <li className="flex items-start gap-3"><Mail size={14} className="text-[var(--gold)] mt-1" /><a href="mailto:automyjnia.diamond@gmail.com" className="hover:text-[var(--gold)] break-all">automyjnia.diamond@gmail.com</a></li>
            <li className="flex items-start gap-3"><MapPin size={14} className="text-[var(--gold)] mt-1" />ul. Ostatnia 13<br />60-102 Poznań</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Godziny</div>
          <ul className="space-y-2 text-sm text-[var(--cream)]/85 tabular-nums">
            <li className="flex justify-between"><span>Pon – Pt</span><span>8:00 – 18:00</span></li>
            <li className="flex justify-between"><span>Sobota</span><span>8:00 – 16:00</span></li>
            <li className="flex justify-between"><span>Niedziela</span><span className="text-[var(--muted-foreground)]">Zamknięte</span></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Nawigacja</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/uslugi" className="text-[var(--cream)]/85 hover:text-[var(--gold)]">Usługi</Link></li>
            <li><Link to="/realizacje" className="text-[var(--cream)]/85 hover:text-[var(--gold)]">Realizacje</Link></li>
            <li><Link to="/o-nas" className="text-[var(--cream)]/85 hover:text-[var(--gold)]">O nas</Link></li>
            <li><Link to="/kontakt" className="text-[var(--cream)]/85 hover:text-[var(--gold)]">Kontakt</Link></li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com/diamondautomyjniadetailing" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--burgundy)] hover:border-[var(--burgundy)] hover:text-[var(--cream)] transition-colors"><Facebook size={16} /></a>
            <a href="https://instagram.com/automyjniadiamond" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--burgundy)] hover:border-[var(--burgundy)] hover:text-[var(--cream)] transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--gold)]/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--muted-foreground)]">
          <div>© {new Date().getFullYear()} Diamond Auto Myjnia. Wszelkie prawa zastrzeżone.</div>
          <div className="uppercase tracking-[0.2em]">Poznań · Junikowo</div>
        </div>
      </div>
    </footer>
  );
}
