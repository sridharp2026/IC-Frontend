import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProgramCard from "../../components/ProgramCard";
import Pagination from "../portfolio/Pagination";
import SearchInput from "../../components/SearchInput";
import { programs } from "../../data/site";
import { revealProps, staggerGrid } from "../../lib/motion";

const ALL = "All Projects";
const ONGOING = "Ongoing";
const UPCOMING = "Upcoming";
const ON_REGISTRATION = "On Registration";
const TABS = [ALL, ONGOING, UPCOMING, ON_REGISTRATION];
const STATUSES = [ONGOING, UPCOMING, ON_REGISTRATION];

const PAGE_SIZE = 9;
const IMAGES = [
  "programs-1.png",
  "programs-2.png",
  "programs-3.png",
  "programs-4.png",
  "programs-5.png",
  "programs-6.png",
];
// `programs` only has 3 real entries so far — the reference design shows a
// 3x3 grid across multiple pages. Until more real programs exist, cycle the
// 3 real entries across the available images/status tags so pagination and
// filtering have something to demo. Swap this out once a full roster of
// real programs exists.
const CYCLES = 5;
const displayPrograms = Array.from({ length: CYCLES }, (_, cycleIndex) =>
  programs.map((p, i) => ({
    ...p,
    key: `${p.title}-${cycleIndex}`,
    number: String(cycleIndex * programs.length + i + 1).padStart(2, "0"),
    image: IMAGES[(cycleIndex * programs.length + i) % IMAGES.length],
    status: STATUSES[cycleIndex % STATUSES.length],
  })),
).flat();

export default function Programs() {
  const [tab, setTab] = useState(ALL);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      displayPrograms.filter(
        (p) =>
          (tab === ALL || p.status === tab) &&
          p.title.toLowerCase().replace(/\n/g, " ").includes(query.trim().toLowerCase()),
      ),
    [tab, query],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function selectTab(value: string) {
    setTab(value);
    setPage(1);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="text-center max-w-7xl mx-auto px-6 pt-12">
          <h1 className="text-hero-tight text-center align-middle text-[var(--color-primary)] mb-4">
            Turning Potential Into
            <br />
            Possibility
          </h1>
          <p className="text-p1 text-center align-middle text-[var(--color-muted)] mb-8 max-w-[1121px] mx-auto">
            Our programs bring together knowledge, technology, and hands-on experiences to empower
            people to create, innovate, and grow.
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div className="flex items-center gap-2 rounded-full border border-[#E0E0E0] bg-white py-2 px-[28px] mb-10 shadow-[0px_12px_10px_0px_#6666661A,0px_0px_10px_0px_#6666661A]">
            {TABS.map((label) => {
              const active = label === tab;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => selectTab(label)}
                  className={`rounded-full font-[Arial] text-[24px] tracking-[0px] whitespace-nowrap transition-colors cursor-pointer ${
                    active
                      ? "px-4 py-2.5 bg-[var(--color-primary)] text-white font-bold leading-[37.8px]"
                      : "px-5 py-2 text-[var(--color-ink)] font-normal leading-[32.9px] hover:bg-[#F1F1F1]"
                  }`}
                >
                  {label}
                </button>
              );
            })}

            <SearchInput
              value={query}
              onChange={(value) => {
                setQuery(value);
                setPage(1);
              }}
              placeholder="Search programs"
              variant="compact"
              className="ml-auto w-[396px]"
            />
          </div>

          {paged.length === 0 ? (
            <p className="text-[var(--color-muted)] text-center py-20">
              No programs match your search.
            </p>
          ) : (
            <motion.div
              key={`${tab}-${query}-${page}`}
              variants={staggerGrid}
              {...revealProps}
              className="grid md:grid-cols-3 gap-6"
            >
              {paged.map((p) => (
                <ProgramCard
                  key={p.key}
                  number={p.number}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  href={`/programs/${p.slug}`}
                />
              ))}
            </motion.div>
          )}

          <Pagination page={page} pageCount={pageCount} onChange={setPage} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
