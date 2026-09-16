import { motion } from "framer-motion";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import PillBadge from "../../components/PillBadge";
import CustomButton from "../../components/CustomButton";

export default function EcosystemDiagram() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[484px_1fr] gap-9 items-center">
      <motion.div variants={staggerContainer} {...revealProps}>
        <PillBadge text="Innovation Hub" />
        <motion.h2 variants={fadeUp} className="text-h1-tight text-[var(--color-primary)] mb-6">
          Connect with a Powerful Innovation Ecosystem
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-p1 !tracking-normal text-justify text-[var(--color-muted)] mb-6"
        >
          Collaborate seamlessly with incubation centers, innovation hubs, research parks, and
          startup support networks to accelerate business growth and innovation. Explore connected
          platforms designed to support entrepreneurs, innovators, and emerging technologies.
        </motion.p>
        <motion.div variants={fadeUp} className="border-t border-[#E7BDB8] pt-6 mb-6">
          <p className="text-p1 !tracking-normal text-[var(--color-primary)]">
            24+ Strategic Ecosystem
            <br />
            Integrations
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <CustomButton href="/impact/csr" label="Explore Network" />
          <CustomButton icon={false} variant="secondary" href="/portfolio" label="View Partners" />
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} {...revealProps} className="w-full">
        <img
          src="/images/innovation-hub.svg"
          alt="Innovation ecosystem org chart: IITM connects to IITM Bioincubator, IITM Research Park, RTBI, and Healthcare Tech Innovation Centre"
          loading="lazy"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
