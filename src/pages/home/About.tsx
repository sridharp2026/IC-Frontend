import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { aboutParagraphs } from "../../data/site";
import CustomButton from "../../components/CustomButton";
import PillBadge from "../../components/PillBadge";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[30%_70%] gap-12 items-start overflow-hidden md:bg-[url('/images/aboutus-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="hidden md:block" aria-hidden="true" />
      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="relative max-w-[810px]"
      >
        <PillBadge text="About Us" />
        <motion.h2
          variants={fadeUp}
          className="text-h1 text-[var(--color-primary)] mb-6"
        >
          Making India the Epicenter of Frontier Innovation
        </motion.h2>
        <motion.div variants={fadeUp} className="space-y-4">
          {aboutParagraphs.map((p) => (
            <p
              key={p}
              className="text-[24px] font-normal leading-[32.9px] tracking-[0.02em] pb-4 text-justify text-[var(--color-muted)]"
            >
              {p}
            </p>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} className="mt-8">
          <CustomButton href="/about" label="Read Our Story" />
        </motion.div>
      </motion.div>
    </section>
  );
}
