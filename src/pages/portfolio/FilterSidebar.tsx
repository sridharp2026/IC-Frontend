import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export type FilterOption = { label: string; count: number };

export type FilterGroupData = {
  title: string;
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
};

export type RadioListData = {
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
};

/**
 * Faceted filter sidebar for the portfolio grid — an ungrouped radio list
 * up top (pick at most one), then collapsible radio groups with per-option
 * counts. Visual language (counts, collapse chevron, blue bold group titles,
 * divider rules) matches the reference filter panel supplied for this page.
 */
export default function FilterSidebar({
  topOptions,
  groups,
}: {
  topOptions: RadioListData;
  groups: FilterGroupData[];
}) {
  return (
    <aside className="w-full md:w-[379px] shrink-0 md:sticky md:top-28 border border-[#F1F1F1] px-5 py-4">
      <div className="pb-2">
        <RadioOptions {...topOptions} allowDeselect />
      </div>

      {groups.map((group, i) => (
        <FilterGroupSection key={group.title} {...group} isLast={i === groups.length - 1} />
      ))}
    </aside>
  );
}

/** A single-select radio list. With `allowDeselect`, clicking the active
 * option clears the selection instead of leaving it selected. */
function RadioOptions({
  options,
  selected,
  onSelect,
  allowDeselect = false,
}: RadioListData & { allowDeselect?: boolean }) {
  return (
    <ul className="space-y-3">
      {options.map((option) => {
        const active = option.label === selected;
        return (
          <li key={option.label}>
            <button
              type="button"
              onClick={() => onSelect(active && allowDeselect ? "" : option.label)}
              className="flex items-center gap-3 w-full text-left group"
            >
              <span
                className={`h-4 w-4 shrink-0 rounded-full border transition-colors ${
                  active
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                    : "bg-white border-[#3D3D3D] group-hover:border-[var(--color-primary)]"
                }`}
              />
              <span
                className={`font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] text-center ${
                  active ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
                }`}
              >
                {option.label}
              </span>
              <span className="ml-auto text-[13px] text-[var(--color-muted)]">{option.count}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function FilterGroupSection({
  title,
  options,
  selected,
  onSelect,
  isLast,
}: FilterGroupData & { isLast: boolean }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`py-4 ${isLast ? "" : "border-b border-[#F1F1F1]"}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center w-full mb-3"
        aria-expanded={open}
      >
        <span className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] uppercase text-[var(--color-primary)]">
          {title}
        </span>
        <span className="ml-auto h-5 w-5 rounded-full bg-[#F1F1F1] flex items-center justify-center text-[var(--color-muted)]">
          {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </span>
      </button>

      {open && <RadioOptions options={options} selected={selected} onSelect={onSelect} />}
    </div>
  );
}
