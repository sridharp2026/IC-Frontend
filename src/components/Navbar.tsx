import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { megaNavLinks, megaMenuContact } from "@/data/site";
import ImagePlaceholder from "./ImagePlaceholder";
import CustomButton from "./CustomButton";

const socialIcons = [
  { label: "Twitter", Icon: Twitter },
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "LinkedIn", Icon: Linkedin },
];

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Only "Impact" and "Insights" carry a submenu — everything else is a direct link.
  // The right panel shows that submenu once clicked; for every other item it just
  // names the current page instead, defaulting to whichever page you're already on
  // (including when you're sitting on one of Impact/Insights' own submenu pages).
  const activeFromRoute = megaNavLinks.find(
    (item) =>
      item.to === location.pathname ||
      ("children" in item && item.children?.some((child) => child.to === location.pathname)),
  );
  const [selected, setSelected] = useState<(typeof megaNavLinks)[number] | null>(null);
  const active = selected ?? activeFromRoute ?? null;

  // Reset the open/selected menu state when the route changes, without the
  // extra render an effect-based reset would cause.
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setOpen(false);
    setSelected(null);
  }

  // Closing without picking a submenu link just cancels the preview — it must not
  // linger, or reopening the menu would show that stale pick instead of whatever
  // page you're actually on.
  const closeMenu = () => {
    setOpen(false);
    setSelected(null);
  };

  // Lock page scroll while the mega menu is open, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const toggleBtnClass = `p-2.5 rounded-full transition-colors cursor-pointer ${
    transparent ? "text-white hover:bg-white/15" : "text-[var(--color-ink)] hover:bg-gray-100"
  }`;

  return (
    <header
      className={`z-50 w-full ${transparent ? "absolute top-0 left-0 right-0" : "relative"} ${
        transparent && !open ? "" : "bg-white"
      }`}
    >
      <nav className="w-full max-w-[1240px] mx-auto flex items-center justify-between min-h-[120px] py-[50px]">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/images/IITM-Incubation-Cell.png"
            alt="IITM Incubation Cell"
            className="w-full h-full object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <CustomButton
            href="/login"
            label="Login"
            variant="secondary"
            width="137px"
            icon={false}
          />
          <CustomButton href="/apply" label="Apply Now" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={toggleBtnClass}
          >
            <Menu size={46} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className={`md:hidden ${toggleBtnClass}`}
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mega-menu"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                {/* Column 1 — primary nav */}
                <nav className="flex flex-col gap-4 md:gap-5">
                  {megaNavLinks.map((item) => {
                    const hasChildren = "children" in item && !!item.children;
                    const isCurrentPage =
                      item.to === location.pathname ||
                      (hasChildren &&
                        item.children?.some((child) => child.to === location.pathname));
                    const isPreviewed = hasChildren && active?.label === item.label;
                    return (
                      <div key={item.label} className="flex items-center gap-3">
                        <span
                          className={`h-px transition-all duration-200 ${
                            isPreviewed || isCurrentPage
                              ? "w-6 bg-[var(--color-secondary)]"
                              : "w-0 bg-transparent"
                          }`}
                        />
                        {hasChildren ? (
                          <button
                            type="button"
                            onClick={() => setSelected(item)}
                            aria-current={isCurrentPage ? "page" : undefined}
                            className={`text-left text-2xl md:text-3xl font-bold transition-colors cursor-pointer ${
                              isPreviewed || isCurrentPage
                                ? "text-[var(--color-secondary)]"
                                : "text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
                            }`}
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            to={item.to}
                            aria-current={isCurrentPage ? "page" : undefined}
                            className={`text-2xl md:text-3xl font-bold transition-colors ${
                              isCurrentPage
                                ? "text-[var(--color-secondary)]"
                                : "text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>

                {/* Column 2 — sub-links for the clicked row (empty until Impact/Insights is clicked) */}
                <div className="flex flex-col gap-3 md:border-l md:border-gray-100 md:pl-10">
                  {active && (
                    <>
                      <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                        {active.label}
                      </span>
                      {active.children?.map((child) => {
                        const isChildCurrent = child.to === location.pathname;
                        return (
                          <Link
                            key={child.label}
                            to={child.to}
                            aria-current={isChildCurrent ? "page" : undefined}
                            className={`text-base transition-colors ${
                              isChildCurrent
                                ? "text-[var(--color-secondary)] font-semibold"
                                : "text-gray-500 hover:text-[var(--color-secondary)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </>
                  )}
                  <ImagePlaceholder
                    label="PM visit — startup showcase"
                    className="mt-4 rounded-xl h-40 md:h-44"
                  />
                </div>

                {/* Column 3 — contact + socials */}
                <div className="flex flex-col gap-3 md:border-l md:border-gray-100 md:pl-10">
                  <a
                    href={`mailto:${megaMenuContact.email}`}
                    className="text-base text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                  >
                    {megaMenuContact.email}
                  </a>
                  <a
                    href={`tel:${megaMenuContact.phone.replace(/\s+/g, "")}`}
                    className="text-base text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                  >
                    {megaMenuContact.phone}
                  </a>
                  <div className="flex items-center gap-3 pt-1">
                    {socialIcons.map(({ label, Icon }) => (
                      <button
                        key={label}
                        type="button"
                        disabled
                        aria-label={label}
                        className="w-8 h-8 rounded-md bg-gray-100 text-gray-500 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <Icon size={15} />
                      </button>
                    ))}
                  </div>
                  <ImagePlaceholder
                    label="Give wings to your ideas — BUILD"
                    className="mt-4 rounded-xl h-40 md:h-44"
                  />
                </div>

                <div className="md:hidden flex flex-col gap-2 pt-2 border-t border-gray-100">
                  <CustomButton
                    href="/login"
                    label="Login"
                    variant="secondary"
                    icon={false}
                    className="justify-center"
                  />
                  <CustomButton href="/apply" className="justify-center" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
