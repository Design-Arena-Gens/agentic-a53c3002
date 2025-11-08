export function CallToAction() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 p-10 text-right text-white shadow-2xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">آماده‌اید تجربه‌ای تازه بسازیم؟</h2>
          <p className="text-white/80">
            فرم همکاری را پر کنید تا ظرف ۲۴ ساعت با شما تماس بگیریم و جلسهٔ آشنایی را برگزار کنیم.
          </p>
        </div>
        <a
          href="mailto:hello@salaam.studio"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition hover:bg-slate-100"
        >
          شروع همکاری
        </a>
      </div>
    </section>
  );
}
