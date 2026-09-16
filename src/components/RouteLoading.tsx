/** Suspense fallback shown while a lazy route chunk loads, instead of a blank flash. */
export default function RouteLoading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="h-10 w-10 rounded-full border-4 border-[var(--color-surface)] border-t-[var(--color-primary)] animate-spin" />
    </div>
  );
}
