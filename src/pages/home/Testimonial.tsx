import { motion } from "framer-motion";
import { fadeUp, revealProps, staggerContainer } from "@/lib/motion";
import { testimonial } from "@/data/site";

export default function Testimonial() {
  return (
    <motion.section
      variants={staggerContainer}
      {...revealProps}
      className="relative bg-[var(--color-primary)] overflow-hidden py-16 md:py-20"
      style={{
        // Decorative dot-circle backdrop, anchored to the section's top-left corner
        backgroundImage: "url('/images/left-half-circle.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left -80px",
        backgroundSize: "auto 100%",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_auto] gap-[70px] items-center">
        <motion.div variants={fadeUp} className="max-w-[656px] ml-auto">
          <blockquote className="text-p1 text-white/90 text-justify">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <footer className="mt-6">
            <cite className="text-p1 text-white not-italic">— {testimonial.name}</cite>
            <p className="text-p3 mt-2 text-white/90">{testimonial.role}</p>
          </footer>
        </motion.div>

        <motion.div variants={fadeUp}>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="w-[370px] h-[350px] rounded-[32px] object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
