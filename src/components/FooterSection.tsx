import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FooterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Вы подписались!",
      description: "Вы будете получать новости и специальные предложения",
    });
    setEmail("");
  };

  return (
    <footer className="border-t border-gold/10 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-display text-3xl gold-text-gradient mb-3">
              Будьте в курсе
            </h3>
            <p className="font-body text-sm text-foreground/40 font-light">
              Подпишитесь на рассылку — получайте советы по уходу и специальные
              предложения
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ваш email"
              className="bg-transparent border-gold/20 rounded-none h-12 font-body text-sm focus:border-gold flex-1 placeholder:text-foreground/20"
            />
            <Button
              type="submit"
              className="bg-gold text-black hover:bg-gold-light font-body text-xs tracking-[0.2em] uppercase px-8 h-12 rounded-none"
            >
              OK
            </Button>
          </form>
        </div>

        <div className="h-[1px] bg-gold/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-2xl gold-text-gradient">
            VISAGE
          </span>
          <nav className="flex gap-8">
            {[
              { label: "Прайс", href: "#price" },
              { label: "Запись", href: "#booking" },
              { label: "Контакты", href: "#contacts" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs uppercase tracking-[0.2em] text-foreground/40 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span className="font-body text-xs text-foreground/20">
            © 2026 VISAGE
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
