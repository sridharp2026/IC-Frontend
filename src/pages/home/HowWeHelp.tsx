import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { helpAudiences } from "../../data/site";
import PillBadge from "../../components/PillBadge";

const helpDescriptions: Record<string, string> = {
  Founders:
    "Access mentorship, technical expertise, infrastructure, networks, and capital connections to turn ambitious ideas into scalable companies.",
  Investors:
    "Connect with a pipeline of ambitious founders and breakthrough technologies emerging from the IIT Madras innovation ecosystem.",
  Industry:
    "Collaborate with startups, researchers and technology experts to explore new solutions, validate emerging technologies and create meaningful impact.",
  "Government & Agencies":
    "Partner with us to support entrepreneurship, enable emerging technologies and create solutions for challenges at scale.",
};

export default function HowWeHelp() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[332px_1fr] gap-[83px] overflow-hidden">
      <img
        src="/images/how-we-can-help-bg.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-x-0 top-0 w-full h-auto opacity-80 pointer-events-none select-none"
      />
      <motion.div variants={staggerContainer} {...revealProps} className="relative max-w-[332px]">
        <PillBadge text="How We Can Help" />
        <motion.h2 variants={fadeUp} className="text-h1 text-[var(--color-primary)] mb-6">
          Build What&rsquo;s Next, Together
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-[24px] font-normal leading-[32.9px] tracking-[0] text-justify text-[var(--color-muted)]"
        >
          Whether you&rsquo;re building a breakthrough, backing the next generation of technology
          companies, or looking to collaborate with innovation at its source, there&rsquo;s a place
          for you in our ecosystem.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        {...revealProps}
        className="relative border-b-[1.13px] border-[#E2E8F0]"
      >
        {helpAudiences.map((a, i) => {
          const isOpen = openIdx === i;
          return (
            <motion.div
              key={a.title}
              variants={fadeUp}
              onMouseEnter={() => canHover && setOpenIdx(i)}
              onMouseLeave={() => canHover && setOpenIdx((cur) => (cur === i ? null : cur))}
              className="bg-white border-t-[1.13px] border-l-[4.5px] border-[#E2E8F0]"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className={`w-full flex items-center gap-[30px] pt-9 pr-[18px] pl-[18px] text-left group transition-[padding-bottom] duration-300 ease-in-out ${
                  isOpen ? "pb-4" : "pb-9"
                }`}
              >
                <span className="text-[32px] font-bold leading-[37.8px] tracking-[0] text-[var(--color-secondary)] w-10 flex-shrink-0">
                  {a.number}
                </span>
                <span className="text-s1 uppercase text-[var(--color-primary)] flex-1">
                  {a.title}
                </span>
                <span className="text-[var(--color-secondary)] flex-shrink-0">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div
                aria-hidden={!isOpen}
                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[24px] font-normal leading-[32.9px] tracking-[-0.01em] text-[var(--color-muted)] pb-6 pl-[92.5px] pr-4">
                    {helpDescriptions[a.title]}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
