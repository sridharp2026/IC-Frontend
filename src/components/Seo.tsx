import { Helmet } from "react-helmet-async";

const SITE_NAME = "IITM Incubation Cell";
const DEFAULT_IMAGE = "/images/IITM-Incubation-Cell.png";

/**
 * Per-route title/description/Open Graph tags. Drop one of these at the top
 * of every page component — index.html only carries the site-wide fallback.
 */
export default function Seo({
  title,
  description,
  image = DEFAULT_IMAGE,
  noIndex = false,
}: {
  title: string;
  description: string;
  image?: string;
  /** Set for thin/placeholder pages (coming-soon, 404) that shouldn't be indexed. */
  noIndex?: boolean;
}) {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const canonical =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
