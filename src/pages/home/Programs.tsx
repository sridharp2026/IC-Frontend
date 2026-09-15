import { motion } from "framer-motion";
import PillBadge from "../../components/PillBadge";
import ProgramCard from "../../components/ProgramCard";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { programs } from "../../data/site";
import CustomButton from "../../components/CustomButton";

export default function Programs() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="flex items-end justify-between gap-4 mb-10 flex-wrap"
      >
        <div>
          <PillBadge text="Programs" />
          <motion.h2
            variants={fadeUp}
            className="text-h1-tight align-middle text-[var(--color-primary)]"
          >
            Ongoing Programs &amp; Initiatives
          </motion.h2>
        </div>
        <motion.div variants={fadeUp}>
          <CustomButton href="/programs" label="View Events" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="grid md:grid-cols-3 gap-6"
      >
        {programs.map((p) => (
          <ProgramCard
            key={p.title}
            number={p.number}
            title={p.title}
            description={p.description}
            image={p.image}
            href={`/programs/${p.slug}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
