import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

/**
 * Insight / article card — matches the design in
 * `src/pages/home/Insights.svg`: a bordered, rounded photo tile alongside a
 * tag pill, date, and title.
 *
 * Media lives in `public/images/insights/`. Shared between the home page's
 * "Insights" section and (later) the full `/insights` listing page — keep it
 * presentation-only so both call sites can supply their own data and grid.
 */
export default function InsightCard({
  tag,
  date,
  title,
  image,
  href,
  className = "",
}: {
  tag: string;
  date: string;
  title: string;
  image: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <div className="grid grid-cols-[160px_1fr] sm:grid-cols-[220px_1fr] md:grid-cols-[335px_1fr] gap-5 md:gap-6 items-start">
      <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#C7C5D5]">
        <img
          src={`/images/insights/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <span className="inline-block bg-[var(--color-surface)] text-[var(--color-primary)] font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle pt-[3.94px] pr-[13.5px] pb-[4.38px] pl-[13.5px] rounded-[2.25px] mb-3">
          {tag}
        </span>
        <p className="font-[Arial] text-[18px] font-normal leading-[16.88px] tracking-[0px] align-middle uppercase text-[var(--color-muted)] mb-1">
          {date}
        </p>
        <h3 className="font-[Arial] text-[24px] mt-2 font-bold leading-[37.8px] tracking-[0px] align-middle text-[var(--color-primary)] uppercase group-hover:text-[var(--color-secondary)] transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );

  const wrapperProps = {
    variants: fadeUp,
    className: `group ${className}`.trim(),
  };

  if (href) {
    return (
      <motion.div {...wrapperProps}>
        <Link to={href} className="block">
          {content}
        </Link>
      </motion.div>
    );
  }

  return <motion.div {...wrapperProps}>{content}</motion.div>;
}
