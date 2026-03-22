import ContactSection from "@/components/contact-components/ContactIntro";
import ContactImgIntro from "@/components/contact-components/ContactImgIntro";

export default function Home() {
  return (
    <div className="pt-24">
      <ContactImgIntro />
      <ContactSection />
    </div>
  );
}