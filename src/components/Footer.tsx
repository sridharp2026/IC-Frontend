import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { fadeUp, revealProps } from "../lib/motion";
import { navLinks } from "../data/site";

const socialIcons = { LinkedIn: Linkedin, Twitter, Instagram, Facebook };

/**
 * Site footer — matches `src/pages/home/footer.svg`: the newsletter signup
 * (heading + white card with email input and submit button) sits inside the
 * same navy panel as the footer content below it, rather than as a separate
 * section, so the two never show a visual seam.
 *
 * The navy panel is a `-mt-[65px]` inner div (not the `<footer>` itself) so
 * it pulls up over the section above by exactly the offset in the design.
 */
export default function Footer() {
  return (
    <footer className="relative">
      <div className="mt-[65px] bg-[var(--color-primary)] text-white pt-20 pb-6 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} {...revealProps} className="relative pb-[55px]">
            <div className="max-w-[716px]">
              <h2 className="font-[Arial] text-[44px] font-bold leading-[1.3] tracking-[0px] text-white">
                Sign up to follow.
                <br />
                Discover new projects, funding, and career opportunities.
              </h2>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 md:-mt-[145px] md:absolute md:top-0 md:right-0 bg-white rounded-[20px] border-[8px] border-[var(--color-primary)] p-9 flex flex-col gap-6 w-full max-w-[398px]"
            >
              <input
                type="email"
                required
                placeholder="Your Email"
                className="h-16 bg-[#212121]/[0.08] rounded-lg px-4 text-p1 text-[var(--color-ink)] outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
              />
              <button type="submit" className="btn h-[65px] justify-center">
                <span className="btn__glow btn__glow--left" aria-hidden="true" />
                <span className="btn__glow btn__glow--right" aria-hidden="true" />
                <span className="btn__text">Sign Up</span>
                <ArrowUpRight size={18} strokeWidth={1.8} className="btn__icon" />
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8">
            <div className="flex items-center gap-3">
              <Link to="/" className="block w-[126px] h-[126px] overflow-hidden">
                <img
                  src="/images/IITM-Incubation-Cell.png"
                  alt="IITM Incubation Cell"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <nav className="flex flex-wrap gap-x-10 gap-y-3">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-eyebrow align-middle capitalize text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="w-full h-7 rounded-[24px] p-px -mb-[30px]"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 55%)",
            }}
          >
            <div className="w-full h-full rounded-[24px] bg-[var(--color-primary)]" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 px-4 text-sm text-white">
            <p className="font-[Arial] text-[18px] font-normal leading-[32.9px] tracking-[0px] text-center align-middle">
              &copy; {new Date().getFullYear()} IITM Incubation Cell. Deep-Tech Forward.
            </p>
            <div className="flex items-center gap-6 font-[Arial] text-[18px] font-normal text-white/80 leading-[32.9px] tracking-[0px] text-center align-middle">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {(["LinkedIn", "Twitter", "Instagram", "Facebook"] as const).map((label) => {
                const Icon = socialIcons[label];
                return (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
