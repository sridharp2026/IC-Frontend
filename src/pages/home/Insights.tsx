import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import InsightCard from "../../components/InsightCard";
import PillBadge from "../../components/PillBadge";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { insights } from "../../data/site";
import CustomButton from "../../components/CustomButton";

export default function Insights() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="flex items-end justify-between gap-4 mb-10 flex-wrap"
      >
        <div>
          <PillBadge text="Insights" />
          <motion.h2
            variants={fadeUp}
            className="font-[Arial] text-[44px] font-bold leading-[100%] tracking-[0px] align-middle text-[var(--color-primary)]"
          >
            Trends, Ideas, and Perspectives
          </motion.h2>
        </div>
        <motion.div variants={fadeUp}>
          <CustomButton href="/insights" label="View Insights" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="grid md:grid-cols-2 gap-8"
      >
        {insights.map((post) => (
          <InsightCard
            key={post.title}
            tag={post.tag}
            date={post.date}
            title={post.title}
            image={post.image}
          />
        ))}
      </motion.div>
    </section>
  );
}
