import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Я свяжусь с вами в ближайшее время для подтверждения записи",
    });
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="booking" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-body font-light">
            Онлайн
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light mt-4 gold-text-gradient">
            Запись
          </h2>
          <div className="w-16 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-[0.2em] text-foreground/50">
                Ваше имя
              </label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Анна"
                className="bg-transparent border-gold/20 rounded-none h-12 font-body text-sm focus:border-gold placeholder:text-foreground/20"
              />
            </div>
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-[0.2em] text-foreground/50">
                Телефон
              </label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                type="tel"
                placeholder="+7 (999) 000-00-00"
                className="bg-transparent border-gold/20 rounded-none h-12 font-body text-sm focus:border-gold placeholder:text-foreground/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-[0.2em] text-foreground/50">
              Интересующая услуга
            </label>
            <Input
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              placeholder="Например, свадебный макияж"
              className="bg-transparent border-gold/20 rounded-none h-12 font-body text-sm focus:border-gold placeholder:text-foreground/20"
            />
          </div>

          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-[0.2em] text-foreground/50">
              Пожелания
            </label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Дата, время, особые пожелания..."
              rows={4}
              className="bg-transparent border-gold/20 rounded-none font-body text-sm focus:border-gold resize-none placeholder:text-foreground/20"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gold text-black hover:bg-gold-light font-body text-xs tracking-[0.2em] uppercase py-6 rounded-none"
          >
            Отправить заявку
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
