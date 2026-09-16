import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

/**
 * Reusable section eyebrow pill — visual style comes entirely from
 * `.pill-badge` in index.css (outlined, uppercase, brand-navy text).
 *
 * - `text` sets the label; it's the only thing that changes per section
 *   (e.g. "Impact", "About Us", "Core Pillars").
 * - `animate` (default true) renders a `motion.span` using the shared
 *   `fadeUp` variant so it participates in a parent `staggerContainer`.
 *   Pass `animate={false}` for static contexts with no motion wrapper,
 *   e.g. the placeholder "Coming soon" pages.
 * - `variant` (default "dark") is the outlined brand-navy style for light
 *   section backgrounds. Pass `variant="light"` for dark/brand-colored
 *   backgrounds (e.g. ScaleStats) to get a white border and text instead.
 */
export default function PillBadge({
  text,
  animate = true,
  variant = "dark",
  className = "",
}: {
  text: string;
  animate?: boolean;
  variant?: "dark" | "light";
  className?: string;
}) {
  const classes = `pill-badge ${
    variant === "light" ? "pill-badge--light" : ""
  } mb-6 inline-block ${className}`
    .replace(/\s+/g, " ")
    .trim();

  if (!animate) {
    return <span className={classes}>{text}</span>;
  }

  return (
    <motion.span variants={fadeUp} className={classes}>
      {text}
    </motion.span>
  );
}
