import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SearchInput from "./SearchInput";

/**
 * Left filter panel shared by the blog and newsletter feeds — matches
 * `Aside - Sidebar.png`/`.svg`: a search box, then a bordered, collapsible
 * "Topics" panel with a flat single-select list (label left, radio dot
 * right, no per-option counts).
 */
export default function TopicFilterSidebar({
  search,
  onSearchChange,
  topics,
  selected,
  onSelect,
  stickyTopClassName = "md:top-10",
}: {
  search: string;
  onSearchChange: (value: string) => void;
  topics: string[];
  selected: string;
  onSelect: (value: string) => void;
  /** Tailwind sticky-offset class, since the blog and newsletter pages use different values. */
  stickyTopClassName?: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`w-full md:w-[347px] shrink-0 md:sticky ${stickyTopClassName}`}>
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search here..."
        variant="boxed"
        className="mb-9"
      />

      <div className="border border-[#C7C5D5] rounded-[4px] px-5 py-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-between w-full mb-6"
          aria-expanded={open}
        >
          <span className="font-[Arial] text-[24px] font-bold leading-[32px] tracking-[0px] uppercase text-[var(--color-primary)]">
            Topics
          </span>
          {open ? (
            <ChevronUp size={20} className="text-[var(--color-muted)]" />
          ) : (
            <ChevronDown size={20} className="text-[var(--color-muted)]" />
          )}
        </button>

        {open && (
          <ul className="space-y-6">
            {topics.map((topic) => {
              const active = topic === selected;
              return (
                <li key={topic}>
                  <button
                    type="button"
                    onClick={() => onSelect(active ? "" : topic)}
                    className="flex items-center justify-between w-full text-left group"
                  >
                    <span
                      className={`text-p1 ${
                        active ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                      }`}
                    >
                      {topic}
                    </span>
                    <span
                      className={`h-6 w-6 shrink-0 rounded-full border transition-colors ${
                        active
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                          : "bg-white border-[#C7C5D5] group-hover:border-[var(--color-primary)]"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}
