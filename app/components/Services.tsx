const services = [
  {
    title: "طراحی محصول دیجیتال",
    description:
      "از کشف نیاز کاربران تا طراحی رابط و تجربهٔ کاربری، محصولی می‌سازیم که مخاطب عاشق استفاده از آن باشد.",
    tags: ["UX Research", "UI Design", "Design Systems"]
  },
  {
    title: "توسعهٔ سریع وب‌اپ",
    description:
      "با استفاده از جدیدترین فناوری‌های تحت وب، ایدهٔ شما را در کوتاه‌ترین زمان به یک محصول مقیاس‌پذیر تبدیل می‌کنیم.",
    tags: ["Next.js", "Serverless", "API Design"]
  },
  {
    title: "رشد و مارکتینگ",
    description:
      "کمپین‌های داده‌محور و محتواهای تاثیرگذار تولید می‌کنیم تا داستان برند شما شنیده شود و مخاطبان وفادار بسازد.",
    tags: ["Content Strategy", "Performance Marketing", "Analytics"]
  }
];

export function Services() {
  return (
    <section id="services" className="space-y-8">
      <div className="flex flex-col gap-2 text-right">
        <span className="text-sm font-semibold text-primary-200">چه کار می‌کنیم؟</span>
        <h2 className="text-3xl font-semibold text-white">خدماتی که برند شما را متمایز می‌کند</h2>
        <p className="text-white/60">
          بستهٔ خدمات ما ترکیبی از طراحی، فناوری و رشد است تا سفر مشتری شما را در تمام نقاط تماس بهبود دهد.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-right text-white/80 transition hover:border-primary-300/60 hover:bg-white/10"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {service.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-primary-500/20 px-3 py-1 text-primary-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
