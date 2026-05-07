import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 lg:hidden">
      <a
        href="https://wa.me/48786665447"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full grid place-items-center bg-[#1F4D3A] text-[var(--cream)] shadow-2xl border border-[var(--gold)]/30"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+48786665447"
        className="w-14 h-14 rounded-full grid place-items-center bg-[var(--gold)] text-[var(--deep)] shadow-2xl"
        aria-label="Zadzwoń"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
