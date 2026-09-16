import { motion } from "framer-motion";
import NumberFlow from "@/components/NumberFlow";
import PillBadge from "@/components/PillBadge";
import { fadeUp, revealProps, staggerContainer } from "@/lib/motion";
import { scaleStats } from "@/data/site";

export default function ScaleStats() {
  return (
    <motion.section
      variants={staggerContainer}
      {...revealProps}
      className="relative bg-[var(--color-secondary)] overflow-hidden py-16 md:py-20 before:content-[''] before:pointer-events-none before:absolute before:-top-[200px] before:right-0 before:h-[641px] before:aspect-[242/650] before:[background-image:url('/images/left-half-circle.png')] before:bg-no-repeat before:bg-cover before:rotate-90"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <PillBadge text="Scale with IITMIC" variant="light" />
        <motion.h2 variants={fadeUp} className="text-hero text-white mb-10 max-w-[841px]">
          Transforming Ideas Into Global Opportunities
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-[350px_repeat(3,1fr)] gap-6 md:divide-x divide-white/[0.36]"
        >
          {scaleStats.map((s) => (
            <motion.div variants={fadeUp} key={s.label} className="md:pl-6 first:md:pl-0">
              <div className="text-[46.29px] leading-[51.43px] font-bold text-white">
                <NumberFlow value={s.value} />
              </div>
              <div className="text-p1 tracking-[0px] text-white/70 uppercase mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
