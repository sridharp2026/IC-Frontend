import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, revealProps, staggerContainer, staggerGrid } from "../../lib/motion";
import { partnerTabs, keyInvestors } from "../../data/site";
import PillBadge from "../../components/PillBadge";

// Each partner logo's footprint (px), measured from the reference design
// (src/pages/home/PartnersNetwork.svg) — every logo was individually sized
// there, so a single uniform height would flatten the intended proportions.
// Index lines up with `keyInvestors` / partner-N.png (N = index + 1).
// Index 8 (Invest in Holland) wasn't present in the reference mock, so it
// falls back to a size in line with the other circular-badge logos.
const LOGO_SIZES: { w: number; h: number }[] = [
  { w: 57, h: 56 }, // SRI Capital
  { w: 85, h: 31 }, // Unitus Ventures
  { w: 85, h: 26 }, // Ankur Capital
  { w: 67, h: 37 }, // 100X.VC
  { w: 72, h: 39 }, // Blume
  { w: 128, h: 29 }, // pi Ventures
  { w: 94, h: 34 }, // Bharat Innovation Fund
  { w: 132, h: 28 }, // BCG
  { w: 52, h: 52 }, // Invest in Holland (fallback — not in reference mock)
  { w: 128, h: 27 }, // Asiana
  { w: 144, h: 27 }, // NativeLead
  { w: 109, h: 38 }, // EIF Ecosystem Integrity
  { w: 140, h: 28 }, // Oikocredit
  { w: 154, h: 29 }, // IIFL Finance
  { w: 60, h: 61 }, // IFCI Venture
  { w: 130, h: 29 }, // Dexter Capital Advisors
  { w: 51, h: 47 }, // 2X Global
  { w: 99, h: 33 }, // Beyond
  { w: 74, h: 28 }, // Abyro Capital
  { w: 90, h: 28 }, // Applied Materials
  { w: 82, h: 30 }, // 1Crowd
  { w: 113, h: 37 }, // Aureolis
  { w: 134, h: 17 }, // I amsterdam
  { w: 61, h: 47 }, // Eaglewings
  { w: 156, h: 17 }, // AumVentures
  { w: 49, h: 38 }, // ClimateX Capital
];

// The reference design lays the 26 logos out in exactly three rows (8, 9,
// then 9 logos, in `keyInvestors` order) rather than an evenly reflowing
// grid — these are the index boundaries between rows.
const LOGO_ROW_BREAKS = [0, 8, 17, 26];

export default function PartnersNetwork() {
  const [active, setActive] = useState<(typeof partnerTabs)[number]>("Key Investors");
  return (
    <section className="relative overflow-hidden">
      {/* Fixed height (not inset-0) so this doesn't rescale/re-crop when the
          section's content height changes between tabs — Ecosystem/
          Government/Industry render much shorter than the full logo grid,
          and an inset-0 layer would visibly "shrink" the image on click. */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[380px] md:h-[620px] bg-cover bg-top bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/images/partners-network-bg.png')" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 text-center">
        <motion.div variants={staggerContainer} {...revealProps}>
          <PillBadge text="Startup Network" />
          <motion.h2 variants={fadeUp} className="text-h1 text-[var(--color-primary)] mb-4">
            Our Industry Partners and Incubatees
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-p1 text-[var(--color-muted)] max-w-[553px] mx-auto mb-10"
          >
            Discover our growing community of startups and industrial partners.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="inline-flex flex-wrap justify-center gap-2 bg-white rounded-full border border-gray-200 shadow-lg p-1.5 mb-12"
          >
            {partnerTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`px-5 py-2 rounded-full text-center transition-colors ${
                  active === tab
                    ? "font-[Arial] text-[24px] font-bold leading-[32.9px] tracking-[0px] bg-[var(--color-primary)] text-white"
                    : "text-p1 text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {active === "Key Investors" ? (
        // Reference design spans the logo rows across a 1233px-wide
        // container (wider than the max-w-7xl text column above), so this
        // row breaks out into its own container matching that width.
        <div className="relative max-w-[1233px] mx-auto px-4 md:px-6 pb-20 md:pb-28">
          <motion.div
            variants={staggerGrid}
            {...revealProps}
            className="flex flex-col gap-y-[35px]"
          >
            {LOGO_ROW_BREAKS.slice(0, -1).map((start, rowIndex) => {
              const end = LOGO_ROW_BREAKS[rowIndex + 1];
              return (
                <div
                  key={rowIndex}
                  className="w-full grid grid-cols-3 justify-items-center items-center gap-x-3 gap-y-[35px] md:flex md:flex-wrap md:justify-between"
                >
                  {keyInvestors.slice(start, end).map((name, j) => {
                    const i = start + j;
                    const { w, h } = LOGO_SIZES[i];
                    return (
                      <motion.div
                        key={name}
                        variants={fadeUp}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="flex items-center justify-center"
                        title={name}
                      >
                        <img
                          src={`/images/partner/partner-${i + 1}.png`}
                          alt={name}
                          style={{ width: w, height: h }}
                          loading="lazy"
                          className="object-contain"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>
        </div>
      ) : (
        // Ecosystem / Government / Industry don't have real content yet —
        // same "not designed yet" copy used by the ComingSoon route page.
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative max-w-lg mx-auto px-6 pb-20 md:pb-28 text-center"
        >
          <h3 className="text-s1 text-[var(--color-primary)] mb-3">Coming soon</h3>
          <p className="text-p2 text-[var(--color-muted)]">
            This page hasn&rsquo;t been designed yet — it&rsquo;s wired up and ready for its real
            content and layout.
          </p>
        </motion.div>
      )}
    </section>
  );
}
