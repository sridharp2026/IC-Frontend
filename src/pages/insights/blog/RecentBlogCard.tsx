import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Recent blog card — matches `blog-recent.svg`: a landscape photo tile, a
 * red "Author • Date" byline, and a bold two-line uppercase title with a
 * small outlined arrow pill beside it.
 *
 * Media lives in `public/images/blog/`.
 */
export default function RecentBlogCard({
  slug,
  image,
  title,
  date,
  author = "Alec Whitten",
}: {
  slug: string;
  image: string;
  title: string;
  date: string;
  author?: string;
}) {
  const shortTitle = title.includes(": ") ? title.split(": ").slice(1).join(": ") : title;

  return (
    <div className="group">
      <Link to={`/insights/blog/${slug}`} className="block">
        <div className="aspect-[394/242] rounded-[10px] overflow-hidden mb-4">
          <img
            src={`/images/blog/${image}`}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p className="text-p2-tight text-[var(--color-secondary)] mb-2">
          {author} • {date}
        </p>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-s1 uppercase text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
            {shortTitle}
          </h3>
          <span className="shrink-0 inline-flex items-center justify-center w-11 h-[26px] rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] transition-colors duration-200 group-hover:bg-[var(--color-secondary)] group-hover:text-white">
            <ArrowUpRight width={16} height={14} />
          </span>
        </div>
      </Link>
    </div>
  );
}
