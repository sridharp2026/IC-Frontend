import { describe, it, expect } from "vitest";
import { programs, portfolioStartups, blogFeed, newsFeed } from "@/data/site";
import { programDetails } from "@/data/programDetails";

describe("programs / programDetails linkage", () => {
  it("has a programDetails entry for every program, so every card links to a working detail page", () => {
    const missing = programs.filter((p) => !programDetails[p.slug]).map((p) => p.slug);
    expect(missing).toEqual([]);
  });
});

describe("slug uniqueness", () => {
  it.each([
    ["portfolioStartups", portfolioStartups],
    ["programs", programs],
    ["blogFeed", blogFeed],
    ["newsFeed", newsFeed],
  ])("%s has no duplicate slugs", (_name, list) => {
    const slugs = list.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
