export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 text-right text-white/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-white">سلام استودیو</span> — طراحی و توسعهٔ تجربه‌های دیجیتال فارسی‌زبان.
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#services" className="transition hover:text-white">
            خدمات
          </a>
          <a href="#process" className="transition hover:text-white">
            فرایند
          </a>
          <a href="mailto:hello@salaam.studio" className="transition hover:text-white">
            ارتباط با ما
          </a>
        </div>
      </div>
      <div className="mt-4 text-xs">© {new Date().getFullYear()} Salaam Studio. همهٔ حقوق محفوظ است.</div>
    </footer>
  );
}
