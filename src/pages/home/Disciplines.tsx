import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Satellite,
  Zap,
  Leaf,
  HeartPulse,
  Bot,
  Cpu,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { disciplines } from "../../data/site";
import CustomButton from "../../components/CustomButton";
import PillBadge from "../../components/PillBadge";

const disciplineIcons: Record<string, typeof Brain> = {
  Brain,
  Satellite,
  Zap,
  Leaf,
  HeartPulse,
  Bot,
  Cpu,
  Sprout,
};

export default function Disciplines() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="grid md:grid-cols-2 gap-8 items-start mb-10"
      >
        <div>
          <PillBadge text="Impact" />
          <motion.h2
            variants={fadeUp}
            className="text-h1 text-[var(--color-primary)]"
          >
            Built Across Disciplines Focused on Real-World Impact
          </motion.h2>
        </div>
        <motion.p
          variants={fadeUp}
          className="text-p1 text-[var(--color-muted)] text-justify md:pt-16"
          style={{ letterSpacing: 0 }}
        >
          From mission-critical enterprise systems to AI-powered digital
          transformation, we engineer technologies that simplify complexity,
          accelerate innovation, and deliver real-world impact across
          industries.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="grid sm:grid-cols-2 lg:grid-cols-3 overflow-hidden border-[0.25px] border-[#120A8F4D]"
      >
        {disciplines.map((d) => {
          const Icon = disciplineIcons[d.icon] ?? Brain;
          return (
            <motion.div
              key={d.title}
              variants={fadeUp}
              className="group flex items-center gap-6 p-6 bg-[#E5E8EE] border-b border-r border-white hover:bg-[var(--color-primary)] transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] flex-shrink-0 transition-colors duration-300 group-hover:bg-white/10 group-hover:border group-hover:border-white/20 group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-s1 uppercase text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white">
                {d.title}
              </h3>
            </motion.div>
          );
        })}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center p-6 bg-white"
        >
          <CustomButton href="/impact" label="Explore Impact" />
        </motion.div>
      </motion.div>
    </section>
  );
}
