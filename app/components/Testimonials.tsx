const testimonials = [
  {
    quote:
      "همکاری با تیم سلام موجب شد محصول ما ظرف سه ماه به بازار برسد و در همان هفتهٔ اول ۱۵٪ رشد کاربران جدید را تجربه کنیم.",
    name: "مهسا رفیعی",
    role: "مدیر محصول، فین‌تک نوین"
  },
  {
    quote:
      "آن‌ها فراتر از یک تیم طراحی هستند؛ شریک راهبردی ما شدند و در تصمیم‌های کلیدی رشد کنارمان بودند.",
    name: "علی مرادی",
    role: "هم‌بنیان‌گذار، پلتفرم یادگیری آوید"
  }
];

export function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="text-right">
        <span className="text-sm font-semibold text-primary-200">اعتماد مشتریان</span>
        <h2 className="mt-2 text-3xl font-semibold text-white">صدای برندهایی که با ما رشد کردند</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right text-white/80"
          >
            <blockquote className="leading-7">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-primary-100">
              <div className="text-white">{testimonial.name}</div>
              <div>{testimonial.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
