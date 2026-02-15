import WhyWe from "../Home/components/WhyWe";
import ContactHero from "./_components/ContactHero";
import ContactSection from "./_components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <ContactHero />
      <ContactSection />
      <WhyWe />
    </main>
  );
}