import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

/**
 * Program / initiative card — matches the design in
 * `src/pages/home/Programs-normal.svg` and `Programs-hover.svg`: a numbered
 * title + description block over a photo, with a bottom action bar that
 * flips from a muted "More info" label to a red "Apply now" label on hover,
 * while the photo itself desaturates back to full colour.
 *
 * Media lives in `public/images/programs/`. Shared between the home page's
 * "Programs" section and the full `/programs` listing page — keep it
 * presentation-only so both call sites can supply their own data and grid.
 */
export default function ProgramCard({
  number,
  title,
  description,
  image,
  href,
  ctaLabel = "More info",
  ctaHoverLabel = "Apply now",
  className = "",
}: {
  number: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  ctaLabel?: string;
  ctaHoverLabel?: string;
  className?: string;
}) {
  const content = (
    <div className="rounded-t-2xl border border-[#E0E0E0] bg-white overflow-hidden flex flex-col h-full">
      <div className="p-7 flex-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-20 flex-shrink-0 font-[Arial] text-[48px] font-black leading-[48px] tracking-[0px] align-middle text-[var(--color-primary)]">
            {number}
          </span>
          <h3 className="text-s1 align-middle text-[var(--color-primary)]">
            {title.split("\n").map((line, i, lines) => (
              <span key={i}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h3>
        </div>
        <p className="text-p1 align-middle text-[var(--color-muted)]">{description}</p>
      </div>

      <div className="relative aspect-[397/181] overflow-hidden">
        <img
          src={`/images/programs/${image}`}
          alt={`${title.replace(/\n/g, " ")} photo`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 h-[57px] flex items-center justify-center bg-[var(--color-muted)] group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
          <span className="text-white text-[24px] font-medium group-hover:hidden">{ctaLabel}</span>
          <span className="text-white text-[24px] font-medium hidden group-hover:block">
            {ctaHoverLabel}
          </span>
        </div>
      </div>
    </div>
  );

  const wrapperProps = {
    variants: fadeUp,
    whileHover: { y: -6 },
    transition: { duration: 0.25 },
    className: `group ${className}`.trim(),
  };

  if (href) {
    return (
      <motion.div {...wrapperProps}>
        <Link to={href} className="block h-full">
          {content}
        </Link>
      </motion.div>
    );
  }

  return <motion.div {...wrapperProps}>{content}</motion.div>;
}
