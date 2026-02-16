import HeroSection from "@/components/HeroSection";
import PriceSection from "@/components/PriceSection";
import BookingSection from "@/components/BookingSection";
import ContactsSection from "@/components/ContactsSection";
import FooterSection from "@/components/FooterSection";

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
            { label: "Запись", href: "#booking" },
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
      <BookingSection />
      <ContactsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
