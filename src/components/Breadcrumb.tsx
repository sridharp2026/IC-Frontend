import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; to: string };

/** Shared breadcrumb + back-button header for detail pages. The back button
 * uses history when there is any (so it returns to whatever filtered/paged
 * state the user came from) and otherwise falls back to `backTo`. */
export default function Breadcrumb({
  trail,
  current,
  backTo,
  className = "mb-8",
}: {
  trail: BreadcrumbItem[];
  current: string;
  backTo: string;
  className?: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleBack() {
    if (location.key === "default") {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  }

  return (
    <div className={`flex items-center justify-between gap-4 flex-wrap ${className}`}>
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-p1 align-middle text-[var(--color-muted)]"
      >
        {trail.map((item) => (
          <span key={item.to} className="flex items-center gap-2">
            <Link to={item.to} className="hover:text-[var(--color-primary)]">
              {item.label}
            </Link>
            <ChevronRight size={18} />
          </span>
        ))}
        <span className="text-[var(--color-primary)]">{current}</span>
      </nav>

      <button
        type="button"
        onClick={handleBack}
        className="flex items-center gap-2 text-p1 align-middle text-[var(--color-primary)] hover:underline"
      >
        <ArrowLeft size={20} /> Back
      </button>
    </div>
  );
}
