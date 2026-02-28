import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-296 mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}