import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Testimonial from "./Testimonial";
import CorePillars from "./CorePillars";
import Disciplines from "./Disciplines";
import HowWeHelp from "./HowWeHelp";
import EcosystemDiagram from "./EcosystemDiagram";
import PartnersNetwork from "./PartnersNetwork";
import Portfolio from "./Portfolio";
import ScaleStats from "./ScaleStats";
import Programs from "./Programs";
import Insights from "./Insights";

export default function Home() {
  return (
    <>
      <Seo
        title="Where Ideas Become Unicorns"
        description="IITM Incubation Cell empowers India's ambitious founders to go from prototype to global markets, with access to the IIT Madras deep-tech startup ecosystem."
      />
      <main className="w-full overflow-x-clip">
        <Hero />
        <AboutSection />
        <Testimonial />
        <CorePillars />
        <Disciplines />
        <HowWeHelp />
        <EcosystemDiagram />
        <PartnersNetwork />
        <Portfolio />
        <ScaleStats />
        <Programs />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
