import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PillBadge from "../../components/PillBadge";
import PortfolioCard from "../../components/PortfolioCard";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { portfolioStartups } from "../../data/site";
import CustomButton from "../../components/CustomButton";

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="flex items-end justify-between gap-4 mb-10 flex-wrap"
      >
        <div>
          <PillBadge text="Portfolio" />
          <motion.h2
            variants={fadeUp}
            className="text-h1 !leading-[100%] text-[var(--color-primary)]"
          >
            Leading Startups We Incubated
          </motion.h2>
        </div>
        <motion.div variants={fadeUp}>
          <CustomButton href="/portfolio" label="View Others" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="grid md:grid-cols-3 gap-6"
      >
        {portfolioStartups.map((s) => (
          <PortfolioCard
            key={s.name}
            name={s.name}
            tag={s.tag}
            description={s.description}
            media={s.media}
            href={`/portfolio/${s.slug}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
