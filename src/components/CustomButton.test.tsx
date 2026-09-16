import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomButton from "@/components/CustomButton";

describe("CustomButton", () => {
  it("renders an internal route as a react-router link, not a plain anchor reload", () => {
    render(
      <MemoryRouter>
        <CustomButton href="/programs" label="See Programs" />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link", { name: /see programs/i });
    expect(link).toHaveAttribute("href", "/programs");
  });

  it("renders a placeholder href as a plain anchor", () => {
    render(
      <MemoryRouter>
        <CustomButton href="#" label="Coming soon" />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /coming soon/i })).toHaveAttribute("href", "#");
  });
});
