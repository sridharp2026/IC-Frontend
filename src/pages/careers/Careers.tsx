import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import RecommendedJobs from "./RecommendedJobs";
import TopStartupsHiring from "./TopStartupsHiring";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          heading="Build Your Future With Us."
          description={
            <>
              Join a team of passionate innovators solving real-world challenges and building
              technology <br />
              that makes a difference. Explore opportunities to grow, contribute, and create impact.
            </>
          }
        />
        <RecommendedJobs />
        <TopStartupsHiring />
      </main>
      <Footer />
    </div>
  );
}
