"use client";

import { useState } from "react";

const insightCards = [
  {
    title: "ارتباط انسانی با فناوری",
    description:
      "ما تجربه‌ای می‌سازیم که فناوری را به زبان انسان‌ها نزدیک می‌کند و تعامل را ساده و لذت‌بخش نگه می‌دارد."
  },
  {
    title: "آینده‌نگری در طراحی",
    description:
      "طراحی ما بر پایه‌ٔ داده و روندهای آینده شکل می‌گیرد تا راهکارهای شما همیشه یک گام جلوتر باشد."
  },
  {
    title: "همکاری بی‌وقفه",
    description:
      "با تیمی چندرشته‌ای، از ایده تا اجرا کنار شما هستیم و بر نتایج ملموس تمرکز داریم."
  }
];

export function Hero() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-2xl">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-balance">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
            تجربه‌ای تازه برای برندهای فارسی‌زبان
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            سلام! ما اینجاییم تا تجربهٔ دیجیتال شما را به سطحی تازه برسانیم.
          </h1>
          <p className="text-lg text-white/70">
            استودیو «سلام» به شما کمک می‌کند داستان برندتان را با زبان طراحی و فناوری مدرن روایت کنید. از
            راه‌اندازی محصول تا کمپین‌های دیجیتال، ما شریک شما هستیم.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              مشاهده خدمات
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              آشنایی با فرایند
            </a>
          </div>
          <div className="flex items-center gap-6 text-white/60">
            <div>
              <div className="text-3xl font-semibold text-white">+۴۰</div>
              <div className="text-sm">پروژه موفق</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">۹۵٪</div>
              <div className="text-sm">میزان رضایت مشتریان</div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {insightCards.map((card, index) => (
              <button
                key={card.title}
                onClick={() => setActiveCard(index)}
                className={`rounded-2xl border border-white/10 bg-white/5 p-4 text-right transition focus:outline-none focus:ring-2 focus:ring-white/40 ${index === activeCard ? "ring-2 ring-white/60" : "hover:bg-white/10"}`}
              >
                <div className="text-sm font-semibold text-white">{card.title}</div>
              </button>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right text-white/80 backdrop-blur">
            <h3 className="mb-2 text-lg font-semibold text-white">{insightCards[activeCard].title}</h3>
            <p>{insightCards[activeCard].description}</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-10 top-10 h-32 w-32 rounded-full bg-primary-500/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-primary-300/30 blur-3xl" />
    </section>
  );
}
