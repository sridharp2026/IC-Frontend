import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/PortfolioCard";
import PageHero from "../../components/PageHero";
import { portfolioStartups } from "../../data/site";
import { revealProps, staggerContainer } from "../../lib/motion";
import FilterSidebar, { type FilterOption } from "./FilterSidebar";

const TOP_COMPANIES = "Top Companies";
const IS_HIRING = "Is Hiring";
const HAS_INDUSTRY_SECTOR = "Industry/Sector";
import Pagination from "./Pagination";

const ALL = "All";
const PAGE_SIZE = 6;

const INDUSTRY_SECTORS = [
  "Deep-tech",
  "Climate Tech",
  "SaaS / Software",
  "IoT & Hardware",
  "Biotechnology",
  "Agritech",
  "Electric Mobility",
];
const STAGES = ["Pre-Incubation", "Incubation", "Acceleration", "Graduated"];
const FUNDING_STATUSES = [
  "Pre-Seed",
  "Seed Funded",
  "Bootstrapped",
  "Grant Funded",
  "Venture Funded",
  "Fundraising",
];
const BATCH_YEARS = ["2024", "2025", "2026"];

// `portfolioStartups` only has 3 real entries so far — the reference design
// shows a 2-column x 3-row grid (6 per page) across multiple pages, with a
// faceted sidebar (sector, stage, batch year, funding status). Until more
// real portfolio companies exist, cycle the 3 real entries across the rest
// of the media in `public/images/portfolio/` and rotate them through the
// facet values below so every filter has something to demo. Stage/funding
// status/batch year here are placeholder demo attributes, not asserted
// facts about these specific companies — swap this out once real data for
// a full roster of portfolio companies (with their real facets) exists.
const MEDIA_CYCLES = [
  ["portfolio-1.jpg", "portfolio-2.jpg", "portfolio-3.jpg"],
  ["portfolio-5.jpg", "portfolio-6.jpg", "portfolio-7.jpg"],
  ["portfolio-4.mp4", "portfolio-8.mp4", "portfolio-9.mp4"],
  ["portfolio-10.mp4", "portfolio-11.mp4", "portfolio-12.mp4"],
];

const displayStartups = MEDIA_CYCLES.flatMap((mediaSet, cycleIndex) =>
  portfolioStartups.map((startup, i) => ({
    ...startup,
    media: mediaSet[i],
    key: `${startup.name}-${cycleIndex}`,
    stage: STAGES[cycleIndex % STAGES.length],
    fundingStatus: FUNDING_STATUSES[cycleIndex % FUNDING_STATUSES.length],
    batchYear: BATCH_YEARS[cycleIndex % BATCH_YEARS.length],
    isUnicorn: startup.name === "Uniphore",
    isTopCompany: startup.name === "Uniphore" || startup.tag === "Publicly Listed",
    isHiring: cycleIndex % 2 === 0,
  })),
);

/** Builds an ["All", ...options] list with a count of matching items per option. */
function withCounts(
  options: string[],
  matches: (item: (typeof displayStartups)[number], option: string) => boolean,
): FilterOption[] {
  return [
    { label: ALL, count: displayStartups.length },
    ...options.map((label) => ({
      label,
      count: displayStartups.filter((item) => matches(item, label)).length,
    })),
  ];
}

export default function Portfolio() {
  const [sector, setSector] = useState(ALL);
  const [stage, setStage] = useState(ALL);
  const [batchYear, setBatchYear] = useState(ALL);
  const [fundingStatus, setFundingStatus] = useState(ALL);
  const [topFilter, setTopFilter] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      displayStartups.filter(
        (s) =>
          (sector === ALL || s.sector === sector) &&
          (stage === ALL || s.stage === stage) &&
          (batchYear === ALL || s.batchYear === batchYear) &&
          (fundingStatus === ALL || s.fundingStatus === fundingStatus) &&
          (topFilter !== TOP_COMPANIES || s.isTopCompany) &&
          (topFilter !== IS_HIRING || s.isHiring) &&
          (topFilter !== HAS_INDUSTRY_SECTOR || Boolean(s.sector)),
      ),
    [sector, stage, batchYear, fundingStatus, topFilter],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function withReset<T>(setter: (value: T) => void) {
    return (value: T) => {
      setter(value);
      setPage(1);
    };
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          heading={
            <>
              A Portfolio Built Around <br />
              Innovation
            </>
          }
          description="Explore the ventures and technologies emerging from our ecosystem, built by ambitious founders tackling complex challenges across deep-tech and high-impact sectors."
        />

        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <FilterSidebar
            topOptions={{
              options: [
                {
                  label: TOP_COMPANIES,
                  count: displayStartups.filter((s) => s.isTopCompany).length,
                },
                {
                  label: IS_HIRING,
                  count: displayStartups.filter((s) => s.isHiring).length,
                },
                {
                  label: HAS_INDUSTRY_SECTOR,
                  count: displayStartups.filter((s) => Boolean(s.sector)).length,
                },
              ],
              selected: topFilter,
              onSelect: withReset(setTopFilter),
            }}
            groups={[
              {
                title: "Industry/Sector",
                options: withCounts(INDUSTRY_SECTORS, (item, option) => item.sector === option),
                selected: sector,
                onSelect: withReset(setSector),
              },
              {
                title: "Stage of Incubation",
                options: withCounts(STAGES, (item, option) => item.stage === option),
                selected: stage,
                onSelect: withReset(setStage),
              },
              {
                title: "Batch/Incubation Year",
                options: withCounts(BATCH_YEARS, (item, option) => item.batchYear === option),
                selected: batchYear,
                onSelect: withReset(setBatchYear),
              },
              {
                title: "Funding Status",
                options: withCounts(
                  FUNDING_STATUSES,
                  (item, option) => item.fundingStatus === option,
                ),
                selected: fundingStatus,
                onSelect: withReset(setFundingStatus),
              },
            ]}
          />

          <div className="flex-1 w-full min-w-0">
            {paged.length === 0 ? (
              <p className="text-[var(--color-muted)] text-center py-20">
                No startups match these filters.
              </p>
            ) : (
              <motion.div
                key={`${sector}-${stage}-${batchYear}-${fundingStatus}-${topFilter}-${page}`}
                variants={staggerContainer}
                {...revealProps}
                className="grid sm:grid-cols-2 gap-x-6 gap-y-16"
              >
                {paged.map((s) => (
                  <PortfolioCard
                    key={s.key}
                    name={s.name}
                    tag={s.tag}
                    description={s.description}
                    media={s.media}
                    href={`/portfolio/${s.slug}`}
                  />
                ))}
              </motion.div>
            )}

            <Pagination page={page} pageCount={pageCount} onChange={setPage} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
