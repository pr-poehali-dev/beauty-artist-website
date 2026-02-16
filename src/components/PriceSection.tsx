const services = [
  {
    category: "Дневной макияж",
    items: [
      { name: "Нюдовый макияж", duration: "60 мин", price: "4 000 ₽" },
      { name: "Деловой макияж", duration: "60 мин", price: "4 500 ₽" },
      { name: "Лёгкий дневной", duration: "45 мин", price: "3 500 ₽" },
    ],
  },
  {
    category: "Вечерний макияж",
    items: [
      { name: "Классический вечерний", duration: "90 мин", price: "6 000 ₽" },
      { name: "Smoky eyes", duration: "90 мин", price: "6 500 ₽" },
      { name: "Голливудский макияж", duration: "120 мин", price: "8 000 ₽" },
    ],
  },
  {
    category: "Свадебный макияж",
    items: [
      { name: "Образ невесты", duration: "120 мин", price: "10 000 ₽" },
      { name: "Пробный макияж + образ", duration: "180 мин", price: "14 000 ₽" },
      { name: "Макияж подружки невесты", duration: "60 мин", price: "5 000 ₽" },
    ],
  },
];

const PriceSection = () => {
  return (
    <section id="price" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-body font-light">
            Услуги
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light mt-4 gold-text-gradient">
            Прайс-лист
          </h2>
          <div className="w-16 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((group) => (
            <div
              key={group.category}
              className="border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500 group"
            >
              <h3 className="font-display text-2xl text-gold mb-8 text-center group-hover:gold-text-gradient transition-all">
                {group.category}
              </h3>

              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-body text-sm text-foreground/80">
                        {item.name}
                      </span>
                      <span className="font-display text-lg text-gold">
                        {item.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-[1px] bg-gold/10" />
                      <span className="font-body text-[10px] text-foreground/40 uppercase tracking-wider">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/40 text-xs font-body mt-12 tracking-wider">
          Возможен выезд к клиенту — стоимость обсуждается индивидуально
        </p>
      </div>
    </section>
  );
};

export default PriceSection;
