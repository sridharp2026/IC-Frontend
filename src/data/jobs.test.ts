import { describe, it, expect } from "vitest";
import { JOBS } from "@/data/jobs";
import { jobDetails } from "@/data/jobDetails";

describe("JOBS / jobDetails linkage", () => {
  it("has a jobDetails entry for every job, so every card links to a working detail page", () => {
    const missing = JOBS.filter((job) => !jobDetails[job.slug]).map((job) => job.slug);
    expect(missing).toEqual([]);
  });

  it("has no duplicate job slugs", () => {
    const slugs = JOBS.map((job) => job.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
