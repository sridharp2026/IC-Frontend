import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/motion";
import CustomButton from "../../../components/CustomButton";

/**
 * Blog feed row — matches `Blog Feed.svg`: a landscape image tile, a
 * light-tinted category pill, an uppercase date, a bold uppercase title,
 * and a red "Explore Blog" button.
 *
 * Media lives in `public/images/blog/`.
 */
export default function BlogFeedCard({
  tag,
  date,
  title,
  image,
  href,
}: {
  tag: string;
  date: string;
  title: string;
  image: string;
  href?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col sm:flex-row gap-6 md:gap-9">
      <div className="w-full sm:w-[260px] md:w-[334px] shrink-0 aspect-[4/3] rounded-[10px] overflow-hidden border border-[#C7C5D5]">
        <img
          src={`/images/blog/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="inline-block self-start bg-[#02005D26] text-[var(--color-primary)] font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle pt-[3.94px] pr-[13.5px] pb-[4.38px] pl-[13.5px] rounded-[2.25px] mb-4">
          {tag}
        </span>
        <p className="font-[Arial] text-[18px] font-normal leading-[16.88px] tracking-[0px] align-middle uppercase text-[var(--color-primary)] mb-2">
          {date}
        </p>
        <h3 className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle uppercase text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors">
          {title}
        </h3>

        <CustomButton href={href ?? "#"} label="Explore Blog" className="mt-auto self-start" />
      </div>
    </motion.div>
  );
}
