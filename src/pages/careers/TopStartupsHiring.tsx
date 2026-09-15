import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { fadeUp, revealProps, staggerGrid } from "../../lib/motion";

type Startup = {
  name: string;
  stage: string;
  tagline: string;
  rating: number;
  openPositions: number;
  logo: string;
};

const STARTUPS: Startup[] = [
  {
    name: "EcoDrive Systems",
    stage: "Series A",
    tagline: "Electric Mobility Focus",
    rating: 4,
    openPositions: 4,
    logo: "starting-up-1.jpg",
  },
  {
    name: "MedAI Analytics",
    stage: "Seed",
    tagline: "Predictive Healthcare",
    rating: 5,
    openPositions: 2,
    logo: "starting-up-2.jpg",
  },
  {
    name: "AeroMaterials",
    stage: "Incubated",
    tagline: "Advanced Composites",
    rating: 4,
    openPositions: 5,
    logo: "starting-up-3.jpg",
  },
  {
    name: "Orbital Comm",
    stage: "Series B",
    tagline: "Satellite Tech",
    rating: 5,
    openPositions: 1,
    logo: "starting-up-4.jpg",
  },
];

function StartupCard({ startup }: { startup: Startup }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="relative flex flex-col rounded-[4px] border border-[#C7C5D5] p-6 hover:shadow-[0_12px_24px_rgba(18,10,143,0.1)] transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-1">
        <span className="rounded-[11.53px] border-[0.96px] border-[#C7C5D5] px-4 py-1 font-[Arial] text-[16px] font-normal leading-[25.89px] tracking-[-1%] text-center align-middle text-[#767684]">
          {startup.stage}
        </span>
        <button
          type="button"
          aria-label={`Save ${startup.name}`}
          className="text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition-colors"
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="w-[76px] h-[76px] mx-auto rounded-[11px] border border-[#C7C5D5] bg-[#F6F3F2] overflow-hidden mb-6 flex items-center justify-center">
        <img
          src={`/images/starting-up/${startup.logo}`}
          alt={startup.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-p1 text-center align-middle text-[var(--color-primary)] mb-1">
        {startup.name}
      </h3>
      <p className="text-p1 text-center align-middle text-[var(--color-muted)] mb-4">
        {startup.tagline}
      </p>

      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-[#BB001B]"
            fill={i < startup.rating ? "#BB001B" : "none"}
          />
        ))}
      </div>

      <div className="border-t border-[#C7C5D5] pt-6">
        <p className="text-p1 text-center align-middle text-[#464653]">
          {startup.openPositions} Open Position{startup.openPositions === 1 ? "" : "s"}
        </p>
      </div>
    </motion.div>
  );
}

export default function TopStartupsHiring() {
  return (
    <section className="max-w-7xl mx-auto border-t-[0.96px] border-[#C7C5D5] px-[23.06px] py-[57.66px]">
      <h2 className="text-h1-tight align-middle text-[var(--color-primary)] mb-2">
        Top Startups Hiring
      </h2>
      <p className="text-p1 align-middle text-[var(--color-muted)] mb-10">
        Join high-growth deep-tech ventures born out of IIT Madras.
      </p>

      <motion.div
        variants={staggerGrid}
        {...revealProps}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {STARTUPS.map((startup) => (
          <StartupCard key={startup.name} startup={startup} />
        ))}
      </motion.div>
    </section>
  );
}
