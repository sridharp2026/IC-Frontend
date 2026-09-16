import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, revealProps, staggerContainer } from "../lib/motion";

/** Shared centered hero intro (heading + subtitle) used at the top of every
 * list page (Careers, Programs, Portfolio, Blog, Newsletter, Impact pages). */
export default function PageHero({
  heading,
  description,
  children,
}: {
  heading: ReactNode;
  description: ReactNode;
  /** Extra content (e.g. a CTA button) that should share the same staggered reveal. */
  children?: ReactNode;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      {...revealProps}
      className="text-center max-w-7xl mx-auto px-6 pt-12"
    >
      <motion.h1
        variants={fadeUp}
        className="text-hero-tight text-center align-middle text-[var(--color-primary)] mb-4"
      >
        {heading}
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="text-p1 text-center align-middle text-[var(--color-muted)] mb-8 max-w-[1121px] mx-auto"
      >
        {description}
      </motion.p>
      {children}
    </motion.div>
  );
}
