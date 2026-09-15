import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/motion";
import CustomButton from "../../../components/CustomButton";

/**
 * News/newsletter feed row — matches `Blog Feed.svg`: a square image tile,
 * a tinted category pill, date, title, description, and a red "Explore More"
 * button.
 *
 * Media lives in `public/images/news/`.
 */
export default function NewsFeedCard({
  tag,
  date,
  title,
  description,
  image,
  href,
}: {
  tag: string;
  date: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col sm:flex-row gap-6 md:gap-9">
      <div className="w-full sm:w-[260px] md:w-[334px] shrink-0 aspect-square rounded-[10px] overflow-hidden border border-[#C7C5D5]">
        <img
          src={`/images/news/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="inline-block self-start bg-[var(--color-primary)]/15 text-[var(--color-primary)] font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle pt-[3.94px] pr-[13.5px] pb-[4.38px] pl-[13.5px] rounded-[2.25px] mb-4">
          {tag}
        </span>
        <p className="font-[Arial] text-[18px] font-normal leading-[16.88px] tracking-[0px] uppercase text-[var(--color-primary)] mb-2">
          {date}
        </p>
        <h3 className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
          {title}
        </h3>
        <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-muted)] mb-6">
          {description}
        </p>

        <CustomButton href={href ?? "#"} label="Explore More" className="mt-auto self-start" />
      </div>
    </motion.div>
  );
}
