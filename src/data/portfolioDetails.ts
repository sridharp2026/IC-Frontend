// Rich per-company profiles for `/portfolio/:slug`. Only entries with a full
// profile here (see `portfolio.svg` / `detail-page.svg` reference designs)
// get the full "Company" / flagship-products / milestones layout — a
// startup with no entry still gets a detail page, just a lighter one built
// from its `portfolioStartups` summary (see PortfolioDetail.tsx's fallback).
// Add a new key here as more full company briefs become available.

export type InfoRow = {
  label: string;
  value: string;
  href?: string;
  tone?: "default" | "accent" | "success";
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
  state: "start" | "past" | "current";
};

export type FlagshipItem = {
  category: string;
  categoryColor: string;
  name: string;
  description: string;
  stats: { label: string; value: string }[];
};

export type PortfolioDetail = {
  slug: string;
  logoText: string;
  tagline: string;
  infoRows: InfoRow[];
  companyParagraphs: string[];
  heroMedia: string;
  heroTag: string;
  productHighlight: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  heritage: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  operationsParagraph: string;
  flagshipTitle: string;
  flagshipItems: FlagshipItem[];
  milestonesTitle: string;
  milestones: Milestone[];
  relatedProject: {
    location: string;
    year: string;
    name: string;
    description: string;
    media: string;
  };
};

export const portfolioDetails: Record<string, PortfolioDetail> = {
  "ather-energy": {
    slug: "ather-energy",
    logoText: "ATHER",
    tagline: "Intelligent, connected electric scooters engineered from the ground up in India.",
    infoRows: [
      { label: "FOUNDED", value: "2013" },
      { label: "FOUNDERS", value: "Tarun Mehta, Swapnil Jain" },
      { label: "COLLECTED FUND", value: "₹12.97L", tone: "accent" },
      { label: "INCUBATOR BATCH", value: "IITMIC Cohort 2013", tone: "accent" },
      { label: "TEAM SIZE", value: "4,500+" },
      { label: "STATUS", value: "Publicly Listed / Active", tone: "success" },
      { label: "HEADQUARTERS", value: "Bengaluru & Chennai, India" },
      { label: "PRIMARY PARTNER", value: "IIT Madras Incubation Cell", tone: "accent" },
      { label: "KEY BACKERS", value: "Hero MotoCorp, GIC, Tiger Global" },
      { label: "CHARGING GRID", value: "2,500+ Fast Stations" },
      {
        label: "WEBSITE",
        value: "https://atherenergy.com",
        href: "https://atherenergy.com",
        tone: "accent",
      },
    ],
    companyParagraphs: [
      "Founded in 2013 by Indian Institute of Technology Madras (IITM) alumni Tarun Mehta and Swapnil Jain, Ather Energy was incubated directly at the IIT Madras Incubation Cell (IITMIC). Armed with a visionary grant and seed support from the incubator's engineering laboratories at IIT Madras Research Park, the duo set out to solve clean urban mobility not through cheap imported conversion kits, but by inventing an indigenous, software-defined, high-performance two-wheeler platform from the ground up.",
      "Over a decade of continuous deep-tech engineering has established Ather as India's premier EV innovator. Unlike traditional manufacturers, Ather builds its own proprietary aluminum die-cast chassis, custom Battery Management Systems (BMS), high-density battery packs engineered for extreme tropical climates, and the comprehensive Ather Connect telemetry stack that powers over-the-air software updates across the fleet.",
    ],
    heroMedia: "portfolio-1.jpg",
    heroTag: "Electric Mobility",
    productHighlight: {
      eyebrow: "Publicly Listed Pioneer",
      title: "Ather 450 Series & Rizta Generation Platform",
      description:
        "From an IIT Madras idea to one of India's defining electric mobility companies.",
      ctaLabel: "Explore Vehicle Tech",
    },
    heritage: {
      eyebrow: "Incubator Heritage",
      title: "IITM Research Park Deep-Tech Success Story",
      description:
        "Ather Energy began in 2013 inside the laboratories of IIT Madras, founded with a vision to build intelligent, high-performance electric vehicles designed specifically for modern urban mobility. What started as a deep-tech experiment has evolved into one of India's most recognized electric two-wheeler companies.",
      ctaLabel: "Read IITMIC Incubation",
    },
    operationsParagraph:
      "Ather operates a world-class manufacturing mega-factory in Hosur, Tamil Nadu, with an installed capacity exceeding 420,000 units annually. Backed by institutional giants including Hero MotoCorp, Singapore's GIC, NIIF, and early incubator seed funding, the company also commands Ather Grid—one of India's largest fast-charging networks with over 2,500 charging stations active nationwide.",
    flagshipTitle: "Flagship Vehicle Lineup",
    flagshipItems: [
      {
        category: "Performance Flagship",
        categoryColor: "var(--color-secondary)",
        name: "Ather 450X",
        description: 'Warp Mode, 0-40 km/h in 3.3s, 7" DeepView Touchscreen.',
        stats: [
          { label: "TrueRange™", value: "110 km" },
          { label: "Top Speed", value: "90 km/h" },
        ],
      },
      {
        category: "Every Day Commuter",
        categoryColor: "var(--color-primary)",
        name: "Ather 450S",
        description: "Optimized urban commuter with segment-first DeepView display.",
        stats: [
          { label: "Certified Range", value: "115 km" },
          { label: "Top Speed", value: "90 km/h" },
        ],
      },
      {
        category: "Family Comfort",
        categoryColor: "var(--color-accent)",
        name: "Ather Rizta",
        description: "Spacious ergonomics, massive 56L storage & SkidControl™ safety.",
        stats: [
          { label: "TrueRange™", value: "123 - 159 km" },
          { label: "Top Speed", value: "80 km/h" },
        ],
      },
    ],
    milestonesTitle: "Milestones & Deep-Tech Evolution",
    milestones: [
      {
        year: "2013",
        title: "Incubated at IIT Madras",
        description:
          "Founders Tarun Mehta & Swapnil Jain receive initial seed support and prototyping facilities at the IITM Incubation Cell.",
        state: "start",
      },
      {
        year: "2018",
        title: "Ather 450 Launch & Ather Grid",
        description:
          "Commercial rollout of India's first smart electric scooter with touchscreen telemetry and proprietary charging network.",
        state: "past",
      },
      {
        year: "2021",
        title: "Hosur Mega-Factory Inauguration",
        description:
          "Scale-up to a high-automation vehicle assembly and battery manufacturing plant in Hosur, Tamil Nadu.",
        state: "past",
      },
      {
        year: "Present Day",
        title: "Family Lineup Launch & Public Market Readiness",
        description:
          "Launch of the Ather Rizta family scooter series, expanding beyond 200+ cities with national retail and infrastructure footprints.",
        state: "current",
      },
    ],
    relatedProject: {
      location: "Chennai",
      year: "2025",
      name: "Agnikul Cosmos",
      description: "Building fully 3D printed, customisable launch vehicles for small\nsatellites.",
      media: "portfolio-4.mp4",
    },
  },
};
