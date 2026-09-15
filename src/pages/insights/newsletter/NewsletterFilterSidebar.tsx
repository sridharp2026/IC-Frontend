import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * Left filter panel for the newsletter feed — matches `Aside - Sidebar.svg`:
 * a search box, then a bordered, collapsible "Topics" panel with a flat
 * single-select list (label left, radio dot right, no per-option counts).
 */
export default function NewsletterFilterSidebar({
  search,
  onSearchChange,
  topics,
  selected,
  onSelect,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  topics: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <aside className="w-full md:w-[347px] shrink-0 md:sticky md:top-28">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search here..."
        className="w-full h-16 mb-9 rounded-[6px] border border-[#7F7F7F]/20 bg-[#FAFAFD] px-4 font-[Arial] text-[18px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-primary)]/40"
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
                      className={`font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] ${
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
