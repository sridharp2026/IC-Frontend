import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RecommendedJobs from "./RecommendedJobs";
import TopStartupsHiring from "./TopStartupsHiring";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <motion.div
          variants={staggerContainer}
          {...revealProps}
          className="text-center max-w-7xl mx-auto px-6 pt-12"
        >
          <motion.h1
            variants={fadeUp}
            className="text-hero-tight text-center align-middle text-[var(--color-primary)] mb-4"
          >
            Build Your Future With Us.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-p1 text-center align-middle text-[var(--color-muted)] mb-8 max-w-[1121px] mx-auto"
          >
            Join a team of passionate innovators solving real-world challenges and building
            technology <br />
            that makes a difference. Explore opportunities to grow, contribute, and create impact.
          </motion.p>
        </motion.div>
        <RecommendedJobs />
        <TopStartupsHiring />
      </main>
      <Footer />
    </div>
  );
}
