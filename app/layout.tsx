import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "سلام | پلتفرم تجربه دیجیتال",
  description:
    "یک تجربه دیجیتال پویا و مدرن با تمرکز بر مخاطبان فارسی‌زبان، طراحی شده برای ارائه خدمات و محتوای تاثیرگذار."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
