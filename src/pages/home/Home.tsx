import Footer from "../../components/Footer";
import Hero from "./Hero";
import About from "./About";
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
      <main className="w-full overflow-x-clip">
        <Hero />
        <About />
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
