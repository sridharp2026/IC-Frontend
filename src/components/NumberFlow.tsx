import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

/**
 * Animates a stat counting up from 0 to its final value once it scrolls
 * into view — a lightweight stand-in for the NumberFlow library.
 *
 * Pass the finished display string exactly as it should read (e.g.
 * "600+", "80,000 CR", "15000+"); only the digits are counted up, and the
 * original prefix, suffix, and comma grouping are replayed around them on
 * every frame so the in-progress number matches the target's formatting.
 */
export default function NumberFlow({
  value,
  duration = 1.5,
  className = "",
}: {
  /** Final display string, e.g. "600+", "80,000 CR", "15000+". */
  value: string;
  /** Count-up duration in seconds. */
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Split "80,000 CR" into prefix "", digits "80,000", suffix " CR".
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const digits = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = Number(digits.replace(/,/g, "")) || 0;
  const useCommas = digits.includes(",");

  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    return `${prefix}${useCommas ? rounded.toLocaleString("en-US") : rounded}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration, ease: "easeOut" });
    return controls.stop;
  }, [isInView, target, duration, count]);

  // No digits to count (unexpected input) — just render the value as-is.
  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
