import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Builds ["1", "2", "...", "8"] style page lists, always keeping the first,
 * last, and a window around the current page. */
function buildPageList(page: number, pageCount: number): (number | "ellipsis")[] {
  const pages: (number | "ellipsis")[] = [];
  const window = 1;
  for (let i = 1; i <= pageCount; i++) {
    const isEdge = i === 1 || i === pageCount;
    const isNearCurrent = Math.abs(i - page) <= window;
    if (isEdge || isNearCurrent) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }
  return pages;
}

/**
 * Numbered pagination bar matching `portfolio.svg`'s bottom-of-grid control:
 * prev arrow, page numbers with an ellipsis for long ranges, next arrow.
 */
export default function Pagination({
  page,
  pageCount,
  onChange,
}: {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}) {
  if (pageCount <= 1) return null;

  const pages = buildPageList(page, pageCount);

  return (
    <nav className="flex items-center justify-center gap-2 mt-16" aria-label="Portfolio pages">
      <PageButton
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        ariaLabel="Previous page"
      >
        <ChevronLeft size={16} />
      </PageButton>

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span
            key={`ellipsis-${i}`}
            className="w-8 h-8 flex items-center justify-center text-[var(--color-muted)]"
          >
            …
          </span>
        ) : (
          <PageButton key={p} onClick={() => onChange(p)} active={p === page}>
            {p}
          </PageButton>
        ),
      )}

      <PageButton
        onClick={() => onChange(page + 1)}
        disabled={page === pageCount}
        ariaLabel="Next page"
      >
        <ChevronRight size={16} />
      </PageButton>
    </nav>
  );
}

function PageButton({
  children,
  onClick,
  active = false,
  disabled = false,
  ariaLabel,
}: {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center border transition-colors ${
        active
          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
          : "bg-white text-[var(--color-ink)] border-[#F1F1F1] hover:border-[var(--color-primary)]"
      } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {children}
    </button>
  );
}
