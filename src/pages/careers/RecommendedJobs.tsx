import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  CarFront,
  ChevronDown,
  Heart,
  MapPin,
  Network,
  Rocket,
  Sprout,
  ActivitySquare,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, revealProps, staggerGrid } from "../../lib/motion";
import { ACCENT_CLASSES, JOBS, type Job } from "../../data/jobs";
import SearchInput from "../../components/SearchInput";

const CATEGORIES: { label: string; icon: LucideIcon }[] = [
  { label: "Electric Mobility", icon: CarFront },
  { label: "Health Tech", icon: ActivitySquare },
  { label: "Deep Manufacturing", icon: Bot },
  { label: "Agri Tech", icon: Sprout },
  { label: "Space Tech", icon: Rocket },
];

const JOB_TITLES = Array.from(new Set(JOBS.map((job) => job.title)));
const JOB_LOCATIONS = Array.from(new Set(JOBS.map((job) => job.location)));

function JobCard({ job }: { job: Job }) {
  const accent = ACCENT_CLASSES[job.accent];
  const Icon = job.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`relative flex flex-col gap-[16.1px] rounded-[4.1px] border border-[#C7C5D5] border-l-4 ${accent.border} p-[24.6px] shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_12px_24px_rgba(18,10,143,0.1)] transition-shadow duration-300`}
    >
      <button
        type="button"
        aria-label="Save job"
        className="absolute top-[24.6px] right-[24.6px] text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition-colors"
      >
        <Heart size={20} />
      </button>

      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${accent.badgeBg} ${accent.icon}`}
        >
          <Icon size={22} />
        </div>
        <p className="text-p1 align-middle text-[var(--color-muted)]">
          Type: {job.type}&nbsp;&nbsp;Time: {job.postedAgo}
        </p>
      </div>

      <h3 className="text-s1 align-middle uppercase text-[var(--color-primary)]">{job.title}</h3>
      <p className="text-p1 align-middle text-[var(--color-ink)]">{job.salary} / Yearly</p>

      <div className="border-t border-[#C7C5D5] pt-[16.1px] flex items-center flex-wrap gap-x-6 gap-y-3">
        <span className="inline-flex items-center gap-1.5 text-p1 align-middle text-[var(--color-ink)]">
          <MapPin size={16} className={accent.icon} />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5 text-p1 align-middle text-[var(--color-ink)]">
          <Network size={16} className={accent.icon} />
          {job.category}
        </span>
        <Link
          to={`/careers/${job.slug}`}
          aria-label={`View details for ${job.title}`}
          className="ml-auto w-11 h-[26px] rounded-full border border-[var(--color-secondary)] flex items-center justify-center text-[var(--color-secondary)] cursor-pointer transition-colors duration-200 hover:bg-[var(--color-secondary)] hover:text-white"
        >
          <ArrowUpRight width={17} height={15} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function RecommendedJobs() {
  const [activeTab, setActiveTab] = useState<"latest" | "premium">("latest");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [titleFilter, setTitleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();
  const visibleJobs = JOBS.filter(
    (job) =>
      (!activeCategory || job.category === activeCategory) &&
      (!titleFilter || job.title === titleFilter) &&
      (!locationFilter || job.location === locationFilter) &&
      (!query ||
        job.title.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query)),
  );
  const hasActiveFilters = Boolean(activeCategory || titleFilter || locationFilter || query);

  function clearFilters() {
    setActiveCategory(null);
    setTitleFilter("");
    setLocationFilter("");
    setSearch("");
  }

  function selectTitle(value: string) {
    setTitleFilter(value);
    setActiveCategory(null);
    setLocationFilter("");
    setSearch("");
  }

  function selectLocation(value: string) {
    setLocationFilter(value);
    setActiveCategory(null);
    setTitleFilter("");
    setSearch("");
  }

  function updateSearch(value: string) {
    setSearch(value);
    setActiveCategory(null);
    setTitleFilter("");
    setLocationFilter("");
  }

  function selectCategory(label: string) {
    setActiveCategory((current) => (current === label ? null : label));
    setTitleFilter("");
    setLocationFilter("");
    setSearch("");
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-20 md:pb-28">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-[776px] mx-auto mb-10">
        <div className="relative flex items-center gap-2 w-[226px]">
          <Briefcase
            size={18}
            className={
              titleFilter ? "text-[var(--color-primary)] shrink-0" : "text-[#767684] shrink-0"
            }
          />
          <select
            value={titleFilter}
            onChange={(e) => selectTitle(e.target.value)}
            className={`w-full appearance-none bg-transparent font-[Arial] text-[20px] leading-[28px] tracking-[0px] pr-6 cursor-pointer focus:outline-none truncate ${
              titleFilter ? "font-bold text-[var(--color-primary)]" : "font-normal text-[#767684]"
            }`}
          >
            <option value="">Job title or keyword</option>
            {JOB_TITLES.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="text-[#7F7F7F] absolute right-0 pointer-events-none" />
        </div>

        <div className="relative flex items-center gap-2 w-[164px]">
          <MapPin
            size={18}
            className={
              locationFilter ? "text-[var(--color-primary)] shrink-0" : "text-[#767684] shrink-0"
            }
          />
          <select
            value={locationFilter}
            onChange={(e) => selectLocation(e.target.value)}
            className={`w-full appearance-none bg-transparent font-[Arial] text-[20px] leading-[28px] tracking-[0px] pr-6 cursor-pointer focus:outline-none truncate ${
              locationFilter
                ? "font-bold text-[var(--color-primary)]"
                : "font-normal text-[#767684]"
            }`}
          >
            <option value="">Any location</option>
            {JOB_LOCATIONS.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="text-[#7F7F7F] absolute right-0 pointer-events-none" />
        </div>

        <SearchInput
          value={search}
          onChange={updateSearch}
          placeholder="Search jobs"
          className="flex-1 min-w-[240px] max-w-[320px]"
        />

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="font-[Arial] text-[16px] font-normal text-[var(--color-secondary)] hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="flex items-start justify-between flex-wrap gap-6 mb-10">
        <div>
          <h2 className="text-h1-tight align-middle text-[var(--color-primary)] mb-2">
            Recommended Jobs
          </h2>
          <p className="text-p1 align-middle text-[var(--color-muted)]">
            Explore suggested job searches across our portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("latest")}
            className={`rounded-xl px-6 py-3 text-p1 text-center align-middle transition-colors cursor-pointer ${
              activeTab === "latest"
                ? "bg-[var(--color-primary)] text-white"
                : "bg-[#FCF9F8] border border-[#C7C5D5] text-[var(--color-ink)]"
            }`}
          >
            Latest Job
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("premium")}
            className={`rounded-xl px-6 py-3 text-p1 text-center align-middle transition-colors cursor-pointer ${
              activeTab === "premium"
                ? "bg-[var(--color-primary)] text-white"
                : "bg-[#FCF9F8] border border-[#C7C5D5] text-[var(--color-ink)]"
            }`}
          >
            Premium Jobs
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-[278.25px_1fr] gap-[32px] items-start">
        <aside className="w-full md:w-[278.25px] shrink-0 md:sticky md:top-0 border-[1.02px] border-[#C7C5D5] rounded-[4.1px]">
          <div className="px-6 py-6 border-b border-[#C7C5D5]">
            <h3 className="text-s1 uppercase text-[var(--color-primary)]">Jobs Categories</h3>
          </div>
          <ul>
            {CATEGORIES.map((category, i) => {
              const Icon = category.icon;
              const active = category.label === activeCategory;
              return (
                <li
                  key={category.label}
                  className={i === CATEGORIES.length - 1 ? "" : "border-b border-[#C7C5D5]"}
                >
                  <button
                    type="button"
                    onClick={() => selectCategory(category.label)}
                    aria-pressed={active}
                    className={`flex items-center gap-3 w-full text-left px-6 py-5 border-l-4 transition-colors ${
                      active
                        ? "border-l-[var(--color-primary)] bg-[var(--color-primary)]/5"
                        : "border-l-transparent hover:bg-[#F8F8FA]"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`shrink-0 ${active ? "text-[var(--color-primary)]" : "text-[var(--color-secondary)]"}`}
                    />
                    <span
                      className={`font-[Arial] text-[24px] leading-[32.9px] tracking-[0px] align-middle ${
                        active
                          ? "font-bold text-[var(--color-primary)]"
                          : "font-normal text-[var(--color-ink)]"
                      }`}
                    >
                      {category.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {visibleJobs.length === 0 ? (
          <div className="py-10 text-center">
            <p className="font-[Arial] text-[18px] text-[var(--color-muted)] mb-3">
              No jobs match your filters yet.
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="font-[Arial] text-[16px] text-[var(--color-secondary)] hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <motion.div
            key={`${activeCategory ?? ""}-${titleFilter}-${locationFilter}-${query}`}
            variants={staggerGrid}
            {...revealProps}
            className="flex flex-col gap-5"
          >
            {visibleJobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
