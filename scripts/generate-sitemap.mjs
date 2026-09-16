// Generates public/sitemap.xml from the app's static routes plus the dynamic
// slugs in src/data. Run automatically before `vite build` (see package.json).
//
// Set SITE_URL to the real production origin before building for deploy —
// this falls back to a clearly-fake placeholder so a forgotten env var is
// obvious in the generated file rather than silently wrong.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const SITE_URL = (process.env.SITE_URL ?? "https://REPLACE-WITH-PRODUCTION-DOMAIN.example").replace(
  /\/$/,
  "",
);

const { portfolioStartups, programs, blogFeed, newsFeed } = await import(
  new URL("../src/data/site.ts", import.meta.url)
);
const { JOBS: jobs } = await import(new URL("../src/data/jobs.ts", import.meta.url));

const staticRoutes = [
  "/",
  "/about",
  "/portfolio",
  "/programs",
  "/impact/media-mention",
  "/impact/csr",
  "/impact/fund-raising",
  "/insights/newsletter",
  "/insights/blog",
  "/careers",
  "/contact",
];

const dynamicRoutes = [
  ...portfolioStartups.map((p) => `/portfolio/${p.slug}`),
  ...programs.map((p) => `/programs/${p.slug}`),
  ...blogFeed.map((p) => `/insights/blog/${p.slug}`),
  ...newsFeed.map((p) => `/insights/newsletter/${p.slug}`),
  ...jobs.map((j) => `/careers/${j.slug}`),
];

const routes = [...new Set([...staticRoutes, ...dynamicRoutes])];

const body = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

await writeFile(fileURLToPath(new URL("../public/sitemap.xml", import.meta.url)), xml);
console.log(`Generated public/sitemap.xml with ${routes.length} routes (SITE_URL=${SITE_URL})`);
