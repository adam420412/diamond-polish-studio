import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-44 pb-24 md:pt-52 md:pb-32 overflow-hidden grain">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(229,168,35,0.08), transparent 50%), linear-gradient(180deg, var(--deep), var(--background))",
        }}
      />
      <div className="container-x text-center fade-up">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="h-display h1 mt-5 text-[var(--cream)]">{title}</h1>
        {subtitle && <p className="lead mt-6 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="gold-divider mt-10" />
      </div>
    </section>
  );
}
