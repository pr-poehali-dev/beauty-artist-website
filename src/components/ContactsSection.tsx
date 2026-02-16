import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 md:py-32 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-xs font-body font-light text-foreground/40">
            На связи
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light mt-4 text-foreground">
            Контакты
          </h2>
          <div className="w-16 h-[1px] bg-foreground/15 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="w-12 h-12 border border-border flex items-center justify-center mx-auto">
              <Icon name="Phone" size={18} className="text-foreground/60" />
            </div>
            <h3 className="font-display text-xl text-foreground">Телефон</h3>
            <a
              href="tel:+79991234567"
              className="font-body text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              +7 (999) 123-45-67
            </a>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 border border-border flex items-center justify-center mx-auto">
              <Icon name="MapPin" size={18} className="text-foreground/60" />
            </div>
            <h3 className="font-display text-xl text-foreground">Адрес</h3>
            <p className="font-body text-sm text-foreground/50">
              г. Москва, ул. Тверская, 15
              <br />
              Студия красоты, 2 этаж
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 border border-border flex items-center justify-center mx-auto">
              <Icon name="Clock" size={18} className="text-foreground/60" />
            </div>
            <h3 className="font-display text-xl text-foreground">Режим работы</h3>
            <p className="font-body text-sm text-foreground/50">
              Пн — Сб: 10:00 — 21:00
              <br />
              Вс: по записи
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-16">
          {[
            { name: "Instagram", icon: "Instagram", href: "#" },
            { name: "Telegram", icon: "Send", href: "#" },
            { name: "WhatsApp", icon: "MessageCircle", href: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
              title={social.name}
            >
              <Icon name={social.icon} size={18} className="text-foreground/50" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
