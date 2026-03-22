import MainSection from "@/components/about-components/mainsection";
import AboutTeamSection from "@/components/about-components/AboutTeamSection";
import MissionSection from "@/components/about-components/MissionSection";
import QualitySection from "@/components/about-components/QualitySection";

export default function About() {
  return (
    <div className="pt-24">
      <MainSection />
      <AboutTeamSection />
      <MissionSection />
      <QualitySection />
    </div>
  );
}