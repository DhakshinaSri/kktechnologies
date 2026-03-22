import Hero from "@/components/home-components/herosection";
import AboutSection from "@/components/home-components/AboutSection";
import ServiceSection from "@/components/home-components/ServicesSection";
import WhyChooseUs from "@/components/home-components/WhyChooseUs";
import QualitySection from "@/components/home-components/QualitySection";
import MoreAboutSection from "@/components/home-components/MoreAboutSection";

export default function Home() {
  return (
    <div className="pt-24">
      <Hero />
      <AboutSection />
      <MoreAboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <QualitySection />
    </div>
  );
}