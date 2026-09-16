import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { useMockSubmit } from "@/lib/useMockSubmit";

/**
 * "Apply for <program>" form modal — matches `src/pages/programs/Program
 * detail.svg`: a left-hand preview of the program (photo, number, category,
 * title, description) beside a form collecting the applicant's details.
 *
 * Purely front-end: there's no submission endpoint yet (see useMockSubmit),
 * so Submit shows a local success state rather than actually sending
 * anything (same level of "wiring" as the newsletter signup in Footer.tsx).
 */
export default function ApplyModal({
  open,
  onClose,
  program,
}: {
  open: boolean;
  onClose: () => void;
  program: {
    number: string;
    category: string;
    title: string;
    description: string;
    image: string;
  };
}) {
  const [shortAnswer, setShortAnswer] = useState("");
  const { status, submit, reset } = useMockSubmit();

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("overflow-hidden");
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  // Reopening for a (possibly different) program should start from a clean
  // form. Reset during render (rather than in an effect) to avoid the extra
  // render an effect-based reset would cause — same pattern as Navbar's route
  // change reset.
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setShortAnswer("");
      reset();
    }
  }

  if (!open) return null;

  const titleLine = program.title.replace(/\n/g, " ");

  const inputClass =
    "w-full h-[48px] rounded-lg border border-[#D1D5DB] pt-[10px] pr-[12px] pb-[9px] pl-[12px] text-p2-tight text-[var(--color-ink)] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]";
  const labelClass = "block mb-2 text-p2-tight text-[var(--color-ink)]";

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- backdrop-dismiss pattern; Escape and the visible Close button already cover keyboard/screen-reader users
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events -- stopPropagation only, so a backdrop click doesn't close the dialog it's dismissing */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Apply for ${titleLine}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl"
      >
        <div className="relative border-b border-[#F1F1F1] p-6 md:p-8 pb-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 cursor-pointer text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          >
            <X size={22} />
          </button>
          <h2 className="text-s1 uppercase text-[var(--color-primary)]">Apply for {titleLine}</h2>
          <p className="text-p1 text-[var(--color-muted)]">
            Fill in your details to apply for this program.
          </p>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-8 p-6 md:p-8">
          <div>
            <div className="rounded-lg overflow-hidden bg-[#F3F4F6] aspect-[642/321] mb-3">
              <img
                src={`/images/programs/${program.image}`}
                alt={titleLine}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-eyebrow uppercase text-[var(--color-secondary)] mb-1">
              {program.number} {program.category}
            </p>
            <h3 className="text-s1 uppercase text-[var(--color-primary)] mb-2">{titleLine}</h3>
            <p className="text-p1 text-[var(--color-muted)]">{program.description}</p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#F3F4F6] bg-[#FAFAFB] p-6 text-center">
              <CheckCircle2 size={42} className="text-[var(--color-accent)]" />
              <h3 className="text-s1 uppercase text-[var(--color-primary)]">
                Application received
              </h3>
              <p className="text-p1 text-[var(--color-muted)]">
                Thanks for applying to {titleLine} — we'll be in touch soon.
              </p>
              <button type="button" onClick={onClose} className="btn w-full justify-center">
                <span className="btn__glow btn__glow--left" aria-hidden="true" />
                <span className="btn__glow btn__glow--right" aria-hidden="true" />
                <span className="btn__text">Done</span>
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label htmlFor="apply-full-name" className={labelClass}>
                  Full Name <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <input
                  id="apply-full-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="apply-email" className={labelClass}>
                  Email Address <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <input
                  id="apply-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="apply-phone" className={labelClass}>
                  Phone Number <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <div className="flex gap-3">
                  <select
                    aria-label="Country code"
                    className={`${inputClass} w-[96px]! shrink-0`}
                    defaultValue="+91"
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    id="apply-phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="apply-institution" className={labelClass}>
                  Institution / Organization{" "}
                  <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <input
                  id="apply-institution"
                  type="text"
                  required
                  placeholder="Type your institution"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="apply-status" className={labelClass}>
                  Current Status <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <input
                  id="apply-status"
                  type="text"
                  required
                  placeholder="Enter your status"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="apply-short-answer" className={labelClass}>
                  Short Answer <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <textarea
                  id="apply-short-answer"
                  required
                  rows={3}
                  maxLength={500}
                  value={shortAnswer}
                  onChange={(e) => setShortAnswer(e.target.value)}
                  placeholder={`Tell us why you want to be part of ${titleLine}`}
                  className={`${inputClass} h-auto resize-none`}
                />
                <p className="mt-1 text-right font-['Nimbus_Sans',sans-serif] text-[11px] font-normal leading-[16.5px] tracking-[0px] text-[var(--color-muted)]">
                  {shortAnswer.length}/500
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn w-full justify-center"
              >
                <span className="btn__glow btn__glow--left" aria-hidden="true" />
                <span className="btn__glow btn__glow--right" aria-hidden="true" />
                <span className="btn__text">
                  {status === "submitting" ? "Submitting…" : "Submit"}
                </span>
              </button>
              <p className="text-center font-[Arial] text-[14px] text-[var(--color-muted)]">
                Your information is secure with us.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
