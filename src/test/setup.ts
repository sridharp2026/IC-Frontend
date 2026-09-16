import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Without `test.globals` in vitest.config.ts, Testing Library can't
// auto-detect the test runner to register its own cleanup — do it explicitly
// so each test starts from an empty document instead of piling up renders.
afterEach(cleanup);

// jsdom logs "not implemented" for scrollTo; App's ScrollToTop calls it on every route change.
window.scrollTo = () => {};

// jsdom implements neither of these, but framer-motion (viewport reveals,
// hover animations) and a few components (prefers-reduced-motion checks)
// call them unconditionally on mount.
window.matchMedia ??= (query: string) =>
  ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }) as unknown as MediaQueryList;

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
window.IntersectionObserver ??= MockIntersectionObserver;
