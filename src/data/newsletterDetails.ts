export type NewsletterQuote = {
  text: string;
  author: string;
};

export type NewsletterDetail = {
  /** Full headline — the feed's `title` is a truncated teaser of this. */
  headline: string;
  bodyParagraphs: string[];
  quote?: NewsletterQuote;
  /** Hero banner shown at the top of the detail page — falls back to the feed's `image` when absent. */
  bannerImage?: string;
  /** Photo strip rendered below the quote block. */
  galleryImages?: string[];
};

// Extended per-article detail content, keyed by `newsFeed`'s `slug`.
// Only `plenome-ashwin-ai-launch` has full long-form copy (transcribed from
// `ArticleContentArea.svg`); the rest fall back to their feed `description`
// as a single paragraph on the detail page — see NewsletterDetail.tsx.
export const newsletterDetails: Record<string, NewsletterDetail> = {
  "plenome-ashwin-ai-launch": {
    headline: "IIT Madras-incubated startup Plenome launches 'Ashwin AI' to empower doctors",
    bodyParagraphs: [
      "Chennai, July 7, 2026 – Plenome, a healthcare AI startup incubated at IIT Madras, has launched Ashwin AI, an advanced clinical assistant designed to support doctors in making faster and more informed decisions.",
      "Ashwin AI leverages large language models and domain-specific medical knowledge to assist clinicians with patient summarization, evidence-based suggestions, and workflow automation. The platform aims to reduce administrative burden, improve diagnostic accuracy, and enhance patient outcomes.",
      "The launch event, held at IIT Madras, brought together healthcare professionals, researchers, investors, and the startup ecosystem to witness a live product demonstration and panel discussion on the future of AI in healthcare.",
      "Speaking at the event, the Plenome team highlighted their mission to “put reliable AI in every clinician’s hands” and reaffirmed their commitment to building responsible, secure, and inclusive healthcare solutions.",
    ],
    quote: {
      text: "Ashwin AI is not here to replace doctors, but to empower them with the right information, at the right time.",
      author: "Plenome Team",
    },
    bannerImage: "news-detail-banner.png",
    galleryImages: [
      "news-detail-1.jpg",
      "news-detail-2.jpg",
      "news-detail-3.jpg",
      "news-detail-4.jpg",
    ],
  },
};
