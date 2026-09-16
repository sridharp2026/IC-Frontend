import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * Catches render-time errors anywhere below it so one broken page can't take
 * down the whole app to a blank white screen. React only supports error
 * boundaries as class components (no hook equivalent exists).
 */
export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled error in page:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="text-h1 text-[var(--color-primary)]">Something went wrong</h1>
          <p className="text-p1 text-[var(--color-muted)] max-w-md">
            This page ran into an unexpected error. Try reloading, or head back to the homepage.
          </p>
          <a href="/" className="btn-primary inline-flex mt-2">
            Back to home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
