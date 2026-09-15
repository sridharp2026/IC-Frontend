import { ImageIcon } from "lucide-react";

/**
 * Stand-in for a real photo/logo asset. Renders a soft brand-colored gradient
 * with a label so it's obvious what real file belongs here — drop the real
 * image into public/images/<name> and swap this for a plain <img> when ready.
 */
export default function ImagePlaceholder({
  label,
  className = "",
  variant = "light",
}: {
  label: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden ${
        variant === "dark"
          ? "bg-gradient-to-br from-[#1a1470] to-[var(--color-primary)] text-white/70"
          : "bg-gradient-to-br from-[var(--color-surface)] to-white text-[var(--color-primary)]/50"
      } ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(circle at 80% 80%, rgba(205,2,34,0.15), transparent 55%)",
        }}
      />
      <ImageIcon size={28} className="relative" strokeWidth={1.5} />
      <span className="relative text-xs font-medium text-center px-4 leading-tight">{label}</span>
    </div>
  );
}
