import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16">
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
