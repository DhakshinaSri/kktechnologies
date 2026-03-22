import  ServicesHero from "@/components/services-components/ServiceHero";
import ServiceDivider from "@/components/services-components/ServiceDivider";
import WebDevelopmentSection from "@/components/services-components/WebDevelopment";
import ERPSolution from "@/components/services-components/ERPSolution";
import CustomSoftwareDevelopment from "@/components/services-components/CustomSoftwareDevelopment";
import MaintenanceSupport from "@/components/services-components/MaintenanceSupport";
import WhyChooseUs from "@/components/home-components/WhyChooseUs";

export default function Services() {
  return (
    <div className="pt-24">
      <ServicesHero />
      <ServiceDivider />
      <WebDevelopmentSection />
      <ERPSolution />
      <CustomSoftwareDevelopment />
      <MaintenanceSupport />
      <WhyChooseUs />
    </div>
  );
}