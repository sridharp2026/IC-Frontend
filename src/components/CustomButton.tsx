import { ArrowRight, type LucideIcon } from "lucide-react";

/**
 * Reusable pill CTA button — visual style pixel-matched to Default.svg /
 * Hover.svg (public/). Label, icon, and label typography are all
 * configurable per use:
 *   - `label` sets the button text.
 *   - `icon` picks which lucide-react icon renders after the label; pass
 *     `icon={false}` to render text-only, with no icon at all.
 *   - `variant` picks the background color: "primary" (brand red, default)
 *     or "secondary" (grey, #7f7f7f / --color-muted).
 *   - `fontSize` / `fontWeight` override the label's type size/weight
 *     (defaults come from .btn__text in index.css).
 *   - `width` sets a fixed button width (e.g. "200px"); button hugs its
 *     content by default.
 *
 * Hover choreography lives in .btn* in index.css: the label eases
 * left, the icon eases right, and the two blurred corner glows grow and
 * pull further inside the button. When there's no icon (`icon={false}`),
 * the label stays put on hover — only the corner glows animate.
 */
export default function CustomButton({
  href = "/apply",
  label = "Apply Now",
  icon: Icon = ArrowRight,
  variant = "primary",
  fontSize,
  fontWeight,
  width,
  className = "",
  onClick,
}: {
  href?: string;
  label?: string;
  /** A lucide-react icon component, or `false` to render no icon. */
  icon?: LucideIcon | false;
  /** "primary" (brand red, default) or "secondary" (grey, #7f7f7f). */
  variant?: "primary" | "secondary";
  /** e.g. "16px" or "1rem". Falls back to .btn__text's font-size. */
  fontSize?: string | number;
  /** e.g. 600 or "600". Falls back to .btn__text's font-weight. */
  fontWeight?: string | number;
  /** e.g. "200px" or "100%". Falls back to hugging its content. */
  width?: string | number;
  className?: string;
  /** Optional click handler — e.g. `e.preventDefault()` to open a modal instead of navigating. */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`btn ${variant === "secondary" ? "btn--secondary" : ""} ${!Icon ? "btn--no-icon" : ""} ${className}`}
      style={{ width }}
    >
      <span className="btn__glow btn__glow--left" aria-hidden="true" />
      <span className="btn__glow btn__glow--right" aria-hidden="true" />
      <span className="btn__text" style={{ fontSize, fontWeight }}>
        {label}
      </span>
      {Icon && <Icon size={18} strokeWidth={1.8} className="btn__icon" />}
    </a>
  );
}
