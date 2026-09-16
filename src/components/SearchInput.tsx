import { Search } from "lucide-react";

export type SearchInputVariant = "pill" | "compact" | "boxed";

/** Wrapper: layout/shape. Only "boxed" omits the search icon. */
const WRAPPER_CLASSES: Record<SearchInputVariant, string> = {
  pill: "flex items-center gap-3 h-[45px] rounded-full border border-[#7F7F7F52] px-5",
  compact:
    "flex items-center gap-[10px] rounded-[24px] border border-[#7F7F7F52] pt-[10px] pr-5 pb-[10px] pl-5",
  boxed:
    "flex items-center h-16 rounded-[6px] border border-[#7F7F7F]/20 bg-[#FAFAFD] px-4 focus-within:border-[var(--color-primary)]/40",
};

const ICON_CLASSES: Partial<Record<SearchInputVariant, string>> = {
  pill: "text-[var(--color-ink)] shrink-0",
  compact: "text-[var(--color-muted)] shrink-0",
};

const INPUT_CLASSES: Record<SearchInputVariant, string> = {
  pill: "w-full bg-transparent font-[Arial] text-[18px] outline-none placeholder:text-[var(--color-muted)]",
  compact: "w-full bg-transparent text-sm outline-none placeholder:text-[var(--color-muted)]",
  boxed:
    "w-full h-full bg-transparent font-[Arial] text-[18px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none",
};

/** Shared search box used across Careers, Programs, Blog, and Newsletter —
 * same value/onChange contract everywhere, with a `variant` matching each
 * page's existing visual treatment (no shared design here yet, just shared code). */
export default function SearchInput({
  value,
  onChange,
  placeholder = "Search",
  variant = "pill",
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: SearchInputVariant;
  className?: string;
}) {
  return (
    <div className={`${WRAPPER_CLASSES[variant]} ${className}`}>
      {variant !== "boxed" && <Search size={18} className={ICON_CLASSES[variant]} />}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={INPUT_CLASSES[variant]}
      />
    </div>
  );
}
