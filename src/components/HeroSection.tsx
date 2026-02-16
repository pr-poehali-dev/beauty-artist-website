import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.poehali.dev/projects/3acea3bb-da1d-4463-ab74-113944f14182/files/47554309-0f90-44c6-ab7d-c53f8d6c8b79.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-body font-light">
            Профессиональный визаж
          </span>
        </div>

        <h1
          className="font-display text-6xl md:text-8xl font-light mb-6 opacity-0 animate-fade-in leading-tight"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="gold-text-gradient">VISAGE</span>
        </h1>

        <p
          className="font-body text-sm md:text-base text-foreground/60 font-light tracking-wider mb-12 max-w-lg mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Раскрываю вашу природную красоту с помощью профессиональной косметики
          и индивидуального подхода
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            asChild
            className="bg-gold text-black hover:bg-gold-light font-body text-xs tracking-[0.2em] uppercase px-10 py-6 rounded-none"
          >
            <a href="#price">Прайс-лист</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10 font-body text-xs tracking-[0.2em] uppercase px-10 py-6 rounded-none"
          >
            <a href="#contacts">Контакты</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0" />
      </div>
    </section>
  );
};

export default HeroSection;