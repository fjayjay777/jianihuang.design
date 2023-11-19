import Navbar from "../../shared/components/navbar";
import ProjectBrief from "../components/project_brief";
import Header from "../components/header";
import SelfIntro from "../components/self_intro";
import Features from "../components/features";
import Summary from "../components/summary";
import PainPoints from "../components/pain_points";
import Persona from "../components/persona";
import UserJourneyMap from "../components/user_journey_map";
import UserFlow from "../components/user_flow";
import SiteMap from "../components/site_map";
import Wireframes from "../components/wireframes";
import LowFiPrototypes from "../components/low_fi_prototypes";
import UseabilityTestingFindings from "../components/useability_testings";
import Mockups from "../components/mockups";
import HiFiPrototypes from "../components/hi_fi_prototypes";
import Accessability from "../components/accessability";
import Outro from "../components/outro";
import Navigation from "../components/navigation";
import CompetitorAnalysis from "../components/competitor_analysis";

function SizzlePage() {
  return (
    <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center">
      <Navbar darkMode={true} id={"top_section"} />
      <Header id={"header_section"} />
      <SelfIntro id={"self_intro_section"} />
      <ProjectBrief id={"project_brief_section"} />
      <Summary id={"summary_section"} />
      <PainPoints id={"pain_points"} />
      <CompetitorAnalysis id={"competitor_analysis"} />
      <Persona id={"persona"} />
      <UserJourneyMap id={"user_journey_map_section"} />
      <Features id={"features_sections"} />
      <UserFlow id={"user_flow_section"} />
      <SiteMap id={"site_map_section"} />
      <Wireframes id={"wireframe_section"} />
      <LowFiPrototypes id={"low_fi_prototypes_section"} />
      <UseabilityTestingFindings id={"useability_testing_findings_section"} />
      <Mockups id={"mockups_section"} />
      <HiFiPrototypes id={"hi_fi_prototypes_section"} />
      <Accessability id={"accessability_section"} />
      <Outro id={"outro_section"} />
      <Navigation />
    </div>
  );
}

export default SizzlePage;
