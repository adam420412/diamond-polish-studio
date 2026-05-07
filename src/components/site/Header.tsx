import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Strona główna" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/realizacje", label: "Realizacje" },
  { to: "/o-nas", label: "O nas" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[var(--deep)]/85 backdrop-blur-xl border-b border-[var(--gold)]/15"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/"><Logo /></Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[12px] uppercase tracking-[0.22em] text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors"
              activeProps={{ className: "text-[var(--gold)]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/kontakt" className="btn-gold">Umów termin</Link>
        </div>

        <button
          className="lg:hidden text-[var(--gold)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--gold)]/15 bg-[var(--deep)]">
          <div className="container-x py-8 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-display text-3xl text-[var(--cream)] hover:text-[var(--gold)]"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/kontakt" className="btn-gold mt-4 self-start">Umów termin</Link>
          </div>
        </div>
      )}
    </header>
  );
}
