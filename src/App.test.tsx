import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "@/App";

function renderAt(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

// Lazy-loaded route chunks + framer-motion's mount effects can take a beat
// under load (e.g. the full suite running in parallel), so give these more
// than RTL's 1s default rather than risk flaking out.
const ASYNC_TIMEOUT = 10_000;

describe("App routing", () => {
  it(
    "renders the homepage hero",
    async () => {
      renderAt("/");
      expect(
        await screen.findByText(/where ideas become unicorns/i, {}, { timeout: ASYNC_TIMEOUT }),
      ).toBeInTheDocument();
    },
    ASYNC_TIMEOUT,
  );

  it(
    "renders the coming-soon fallback for unknown routes instead of crashing",
    async () => {
      renderAt("/this-route-does-not-exist");
      expect(
        await screen.findByText(/coming soon/i, {}, { timeout: ASYNC_TIMEOUT }),
      ).toBeInTheDocument();
    },
    ASYNC_TIMEOUT,
  );

  it(
    "renders the newly-added /login route instead of a dead link",
    async () => {
      renderAt("/login");
      expect(
        await screen.findByText(/coming soon/i, {}, { timeout: ASYNC_TIMEOUT }),
      ).toBeInTheDocument();
    },
    ASYNC_TIMEOUT,
  );
});
