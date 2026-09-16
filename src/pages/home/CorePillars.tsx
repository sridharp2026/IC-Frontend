import { motion } from "framer-motion";
import { Zap, Target, Maximize2, Globe2 } from "lucide-react";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { corePillars } from "../../data/site";
import PillBadge from "../../components/PillBadge";

const pillarIcons: Record<string, typeof Zap> = {
  Zap,
  Target,
  Maximize2,
  Globe2,
};

function PillarCard({ pillar, index }: { pillar: (typeof corePillars)[number]; index: number }) {
  const Icon = pillarIcons[pillar.icon] ?? Zap;
  const tinted = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group rounded-2xl p-8 shadow-xl transition-colors duration-300 hover:shadow-2xl ${
        pillar.highlighted
          ? "bg-[var(--color-primary)] text-white hover:bg-white"
          : "bg-white border border-gray-100 hover:bg-[var(--color-primary)] hover:border-transparent"
      }`}
    >
      <div className="flex items-center gap-5 mb-2">
        <div
          className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            pillar.highlighted
              ? "bg-white/10 border border-white/20 text-white group-hover:bg-[var(--color-primary)]/10 group-hover:border-transparent group-hover:text-[var(--color-primary)]"
              : `text-[var(--color-primary)] group-hover:bg-white/10 group-hover:border group-hover:border-white/20 group-hover:text-white ${
                  tinted ? "bg-[var(--color-primary)]/10" : "bg-[#E5E8EE]"
                }`
          }`}
        >
          <Icon size={22} />
        </div>
        <h3
          className={`text-s1 transition-colors duration-300 ${
            pillar.highlighted
              ? "text-white group-hover:text-[var(--color-primary)]"
              : "text-[var(--color-primary)] group-hover:text-white"
          }`}
        >
          {pillar.title}
        </h3>
      </div>
      <p
        className={`text-p1 pl-[76px] transition-colors duration-300 ${
          pillar.highlighted
            ? "text-white group-hover:text-[var(--color-muted)]"
            : "text-[var(--color-muted)] group-hover:text-white"
        }`}
      >
        {pillar.description}
      </p>
    </motion.div>
  );
}

export default function CorePillars() {
  const [first, second, third, fourth] = corePillars;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <motion.div variants={staggerContainer} {...revealProps}>
        <PillBadge text="Core Pillars" />
        <motion.h2 variants={fadeUp} className="text-h1 text-[var(--color-primary)] mb-10">
          Why IIT Madras Incubation Cell?
        </motion.h2>
        <motion.div variants={staggerContainer} className="flex flex-col gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <PillarCard pillar={first} index={0} />
            <PillarCard pillar={second} index={1} />
          </div>
          <div className="grid md:grid-cols-[4fr_5fr] gap-5">
            <PillarCard pillar={third} index={2} />
            <PillarCard pillar={fourth} index={3} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
