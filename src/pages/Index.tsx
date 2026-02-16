import HeroSection from "@/components/HeroSection";
import PriceSection from "@/components/PriceSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-gold/5">
        <a href="#" className="font-display text-2xl gold-text-gradient">
          VISAGE
        </a>
        <div className="hidden md:flex gap-8">
          {[
            { label: "Прайс", href: "#price" },
            { label: "Контакты", href: "#contacts" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <HeroSection />
      <PriceSection />
      <ContactsSection />

      <footer className="border-t border-gold/10 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-2xl gold-text-gradient">VISAGE</span>
          <span className="font-body text-xs text-foreground/20">© 2026 VISAGE</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
