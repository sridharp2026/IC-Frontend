import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import CustomButton from "../../components/CustomButton";
import NumberFlow from "../../components/NumberFlow";
import { fadeUp, revealProps, staggerContainer } from "../../lib/motion";
import { heroStats } from "../../data/site";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-white">
      <div className="relative overflow-hidden rounded-b-[40px] md:rounded-b-[64px]">
        <>
          <div className="absolute inset-0 max-w-[1380px] mx-auto min-[1440px]:my-[30px]">
            <img
              src="/images/home-hero-bg.png"
              alt="IIT Madras Research Park building"
              className="w-full h-full object-cover md:h-auto"
            />
          </div>

          <div className="relative">
            <Navbar transparent />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-7xl mx-auto px-6 md:px-6 pt-40 md:pt-52 pb-16 md:pb-20"
            >
              <motion.h1
                variants={fadeUp}
                className="text-hero text-white max-w-3xl md:max-w-[998px] tracking-[-3px]"
              >
                IITM Incubation Cell.
                <br />
                Where Ideas Become Unicorns.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-p1 text-white max-w-xl md:max-w-[673px] mt-6"
              >
                We empower India's ambitious founders to go from prototype to global markets. Get
                access to the IIT Madras Deep-tech startup ecosystem to move your ideas faster.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 md:max-w-[928px]">
                <CustomButton label="Discover Our Impact" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            {...revealProps}
            className="relative bg-white grid grid-cols-1 md:grid-cols-[235px_repeat(3,1fr)] max-w-7xl md:max-w-[910px] px-6 md:pl-10 md:divide-x divide-gray-200"
          >
            {heroStats.map((s, i) => (
              <motion.div
                variants={fadeUp}
                key={s.label}
                className={`w-auto px-2 md:px-8 first:pl-0 py-3 md:py-0 whitespace-nowrap ${
                  i === 0 ? "min-w-[235px]" : ""
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                  <NumberFlow value={s.value} />
                </div>
                <div className="text-p1 text-[var(--color-muted)] mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </>
      </div>
    </section>
  );
}
