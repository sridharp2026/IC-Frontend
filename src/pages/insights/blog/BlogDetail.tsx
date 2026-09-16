import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NumberFlow from "../../../components/NumberFlow";
import NotFoundState from "../../../components/NotFoundState";
import Breadcrumb from "../../../components/Breadcrumb";
import RecentBlogCard from "./RecentBlogCard";
import { blogFeed } from "../../../data/site";
import { blogDetails } from "../../../data/blogDetails";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  const item = slug ? blogFeed.find((b) => b.slug === slug) : undefined;
  const detail = slug ? blogDetails[slug] : undefined;

  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    if (!detail) return;

    const ids = detail.sections.map((_, i) => `section-${i + 1}`);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        const index = ids.indexOf(topMost.target.id);
        if (index !== -1) setActiveSection(index + 1);
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [detail, slug]);

  if (!item) {
    return (
      <NotFoundState heading="Post not found" backTo="/insights/blog" backLabel="Back to Blog" />
    );
  }

  const recentBlogs = blogFeed.filter((b) => b.slug !== item.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20">
          <Breadcrumb
            trail={[{ label: "Blog", to: "/insights/blog" }]}
            current="Blog Detail"
            backTo="/insights/blog"
            className="mb-4"
          />

          <h1 className="text-hero-tight align-middle text-[var(--color-primary)] mb-6">
            {detail?.headline ?? item.title}
          </h1>

          <hr className="border-[#E5E5EA] mb-6" />

          {detail && (
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div>
                <p className="text-p1 text-[var(--color-ink)]">Duration</p>
                <p className="text-p1 text-[var(--color-muted)]">{detail.duration}</p>
              </div>
              <div className="w-px h-9 bg-[#E5E5EA]" />
              <div>
                <p className="text-p1 text-[var(--color-ink)]">Author</p>
                <p className="text-p1 text-[var(--color-muted)]">{detail.author}</p>
              </div>
              <div className="w-px h-9 bg-[#E5E5EA]" />
              <div>
                <p className="text-p1 text-[var(--color-ink)]">Posted On</p>
                <p className="text-p1 text-[var(--color-muted)]">{detail.postedOn}</p>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary)]">
                  <Eye size={14} className="text-white" />
                </span>
                <NumberFlow
                  value={`${detail.views} VIEWS`}
                  className="text-s1 uppercase text-[var(--color-primary)]"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 w-full min-w-0">
              <img
                src={`/images/blog/${detail?.bannerImage ?? item.image}`}
                alt={item.title}
                loading="lazy"
                className="w-full rounded-[6px] mb-8"
              />

              {detail ? (
                <>
                  <p className="text-p1 align-middle text-justify text-[var(--color-muted)] mb-8">
                    {detail.intro}
                  </p>

                  {detail.sections.map((section, i) => (
                    <div
                      key={section.heading}
                      id={`section-${i + 1}`}
                      className="mb-8 scroll-mt-28"
                    >
                      <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-3">
                        {section.heading}
                      </h2>
                      {section.paragraphs?.map((p, pi) => (
                        <p
                          key={pi}
                          className="text-p1 align-middle text-justify text-[var(--color-muted)] mb-3"
                        >
                          {p}
                        </p>
                      ))}
                      {section.list && (
                        <ol className="list-decimal pl-5 space-y-2">
                          {section.list.map((li, li_i) => (
                            <li
                              key={li_i}
                              className="text-p1 align-middle text-justify text-[var(--color-muted)]"
                            >
                              {li}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}

                  <div className="mb-8">
                    <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-3">
                      Conclusion:
                    </h2>
                    {detail.conclusion.map((p, i) => (
                      <p
                        key={i}
                        className="text-p1 align-middle text-justify text-[var(--color-muted)] mb-3"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {detail.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-[var(--color-secondary)] text-white text-p2-tight align-middle text-justify px-4 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <span className="inline-block bg-[#02005D26] text-[var(--color-primary)] font-[Arial] text-[16px] px-3 py-1 rounded-[4px]">
                  {item.tag}
                </span>
              )}
            </div>

            {detail && (
              <aside className="w-full lg:w-[397px] shrink-0 lg:sticky lg:top-0 bg-[#E5E8EE33] border border-[#7F7F7F80] rounded-[10px] p-6">
                <h2 className="text-h1-tight align-middle text-[var(--color-primary)] mb-4">
                  Introduction
                </h2>
                <ol className="space-y-3">
                  {detail.sections.map((section, i) => {
                    const active = activeSection === i + 1;
                    return (
                      <li key={section.heading}>
                        <a
                          href={`#section-${i + 1}`}
                          onClick={() => setActiveSection(i + 1)}
                          className={`text-p1 transition-colors ${
                            active
                              ? "text-[var(--color-primary)] font-bold"
                              : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                          }`}
                        >
                          {section.heading}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </aside>
            )}
          </div>
        </div>

        {recentBlogs.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
            <h2 className="text-h1-tight text-center text-[var(--color-primary)] mb-10">
              Recent Blogs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentBlogs.map((post) => (
                <RecentBlogCard
                  key={post.slug}
                  slug={post.slug}
                  image={post.image}
                  title={post.title}
                  date={post.date}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
