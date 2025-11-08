const steps = [
  {
    title: "۱. کشف و همسو شدن",
    description:
      "جلسه‌های عمیق برای شناخت هدف‌های شما، مخاطبان و چالش‌های موجود برگزار می‌کنیم و چشم‌انداز مشترک می‌سازیم.",
    detail: "تحلیل داده‌های موجود و ترسیم نقشهٔ سفر کاربر و تعریف OKR"
  },
  {
    title: "۲. طراحی و نمونه‌سازی",
    description:
      "با بهره‌گیری از طراحی تعاملی و تست سریع، راهکارهای مختلف را می‌سنجیم تا به تجربه‌ای بدون اصطکاک برسیم.",
    detail: "طراحی سیستم‌محور، تست با کاربران و بازبینی مستمر"
  },
  {
    title: "۳. پیاده‌سازی و رشد",
    description:
      "محصول با معماری ماژولار توسعه می‌یابد و با راهکارهای رشد همراه می‌شود تا کسب‌وکار شما آمادهٔ مقیاس باشد.",
    detail: "دیپلوی ابری، استقرار خودکار و داشبوردهای ردیابی KPI"
  }
];

export function Process() {
  return (
    <section id="process" className="space-y-10">
      <div className="text-right">
        <span className="text-sm font-semibold text-primary-200">چگونه کار می‌کنیم؟</span>
        <h2 className="mt-2 text-3xl font-semibold text-white">فرایندی که بر نتایج تاکید دارد</h2>
        <p className="mt-3 max-w-3xl text-white/60">
          در هر مرحله به بازخورد واقعی تکیه می‌کنیم و با ابزارهای تحلیلی تصمیم می‌گیریم تا مطمئن شویم محصول نهایی دقیقاً با اهداف کسب‌وکار شما همراستا است.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right text-white/80">
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 leading-7">{step.description}</p>
            <div className="mt-6 rounded-2xl border border-primary-500/30 bg-primary-500/10 px-4 py-3 text-sm text-primary-50">
              {step.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
