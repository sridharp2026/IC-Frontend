import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import { revealProps, staggerContainer } from "../../../lib/motion";
import { blogFeed, blogTopics } from "../../../data/site";
import Pagination from "../../portfolio/Pagination";
import BlogFeedCard from "./BlogFeedCard";
import TopicFilterSidebar from "../../../components/TopicFilterSidebar";

const PAGE_SIZE = 5;

export default function Blog() {
  const [topic, setTopic] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return blogFeed.filter(
      (item) =>
        (topic === "" || item.topic === topic) &&
        (query === "" ||
          item.title.toLowerCase().includes(query) ||
          item.tag.toLowerCase().includes(query)),
    );
  }, [topic, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleTopicChange(value: string) {
    setTopic(value);
    setPage(1);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          heading={
            <>
              Ideas, Insights & Stories
              <br />
              That Matter
            </>
          }
          description={
            <>
              Explore expert perspectives, industry trends, innovative ideas, and the latest
              <br />
              updates shaping technology and business. Discover thoughtful insights designed
              <br />
              to inform, inspire, and keep you ahead of what’s next.
            </>
          }
        />

        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row gap-10 md:gap-[42px] items-start">
          <TopicFilterSidebar
            search={search}
            onSearchChange={handleSearchChange}
            topics={blogTopics}
            selected={topic}
            onSelect={handleTopicChange}
          />

          <div className="flex-1 w-full min-w-0">
            {paged.length === 0 ? (
              <p className="text-[var(--color-muted)] text-center py-20">
                No blog posts match this filter.
              </p>
            ) : (
              <motion.div
                key={`${topic}-${search}-${page}`}
                variants={staggerContainer}
                {...revealProps}
                className="flex flex-col gap-12 md:gap-16"
              >
                {paged.map((item) => (
                  <BlogFeedCard key={item.slug} {...item} href={`/insights/blog/${item.slug}`} />
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
