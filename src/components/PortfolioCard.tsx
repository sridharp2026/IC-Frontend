import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

/**
 * Portfolio startup card — matches the design in
 * `src/pages/home/portfolio-card.svg`: a media tile (photo or video) with a
 * soft double drop-shadow, a tag/name/description block, and a small
 * outlined arrow pill in the bottom-right corner.
 *
 * Media lives in `public/images/portfolio/`. Pass just the filename — `.mp4`
 * files render as a muted, looping video that plays on hover (pauses and
 * rewinds on mouse-leave); anything else renders as a plain `<img>`.
 *
 * Shared between the home page's "Portfolio" section and (later) the full
 * `/portfolio` listing page — keep it presentation-only so both call sites
 * can supply their own data and grid layout.
 */
export default function PortfolioCard({
  name,
  tag,
  description,
  media,
  href,
  className = "",
}: {
  name: string;
  tag: string;
  description: string;
  media: string;
  href?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = /\.mp4$/i.test(media);
  const src = `/images/portfolio/${media}`;

  const handleEnter = () => {
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const content = (
    <div className="relative h-full flex flex-col">
      <div className="aspect-[399/288] rounded-2xl overflow-hidden mb-6 shadow-[0_4px_7px_rgba(0,0,0,0.1),0_11px_17px_rgba(0,0,0,0.1)]">
        {isVideo ? (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={src}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <p className="text-[18px] font-normal leading-[16.88px] tracking-normal text-[var(--color-secondary)] mb-1">
        {tag}
      </p>
      <h3 className="text-s1 uppercase text-[var(--color-primary)] mb-2">{name}</h3>
      <p className="pr-[62px] text-[24px] font-normal leading-[32.9px] tracking-[0] text-[var(--color-muted)]">
        {description}
      </p>

      <span className="absolute right-0 bottom-0 w-11 h-[26px] rounded-[34px] border border-[var(--color-secondary)] flex items-center justify-center text-[var(--color-secondary)] transition-colors duration-200 group-hover:bg-[var(--color-secondary)] group-hover:text-white">
        <ArrowUpRight width={17} height={15} />
      </span>
    </div>
  );

  const wrapperProps = {
    variants: fadeUp,
    whileHover: { y: -6 },
    transition: { duration: 0.25 },
    className: `group h-full ${className}`.trim(),
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
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
