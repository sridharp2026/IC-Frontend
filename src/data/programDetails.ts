// Rich per-program profiles for `/programs/:slug`, matching the layout in
// `src/pages/programs/program-details.svg`: a hero card (number, title,
// tagline, photo), an "About" + "Who can participate?" column, a "Program
// Details" sidebar with an Apply Now CTA, and a photo gallery.
//
// Keyed by the `slug` on each entry in `programs` (site.ts). Every program
// listed there should have a matching entry here so its card links to a
// working detail page.

export type ProgramDetailRow = {
  icon: "date" | "location" | "mode" | "deadline" | "type" | "organizer";
  label: string;
  value: string;
};

export type ProgramDetail = {
  slug: string;
  category: string;
  heroImage: string;
  aboutParagraphs: string[];
  whoCanParticipate: string[];
  details: ProgramDetailRow[];
  gallery: string[];
};

export const programDetails: Record<string, ProgramDetail> = {
  "boeing-build": {
    slug: "boeing-build",
    category: "Incubation Cell Program",
    heroImage: "programs-1.png",
    aboutParagraphs: [
      "Boeing Build 5.0 is a collaborative initiative between Boeing and the IITM Incubation Cell (IITMIC) to nurture the next generation of innovators. The program empowers students and early-stage founders to transform ideas into impactful startups through mentorship, workshops, resources, and real-world industry exposure.",
      "It aims to bridge the gap between academia and industry, enabling participants to solve meaningful challenges and create solutions for a better tomorrow.",
    ],
    whoCanParticipate: [
      "Students from IITM and other institutions",
      "Early-stage founders and startup teams",
      "Innovators with a passion for solving real-world problems",
    ],
    details: [
      { icon: "date", label: "Program Date", value: "Oct 12, 2026 – Dec 18, 2026" },
      { icon: "location", label: "Location", value: "IIT Madras, Chennai" },
      { icon: "mode", label: "Mode", value: "Hybrid (In-person & Online)" },
      { icon: "deadline", label: "Application Deadline", value: "Sep 30, 2026" },
      { icon: "type", label: "Program Type", value: "Incubation Program" },
      { icon: "organizer", label: "Organized By", value: "Boeing & IITM Incubation Cell" },
    ],
    gallery: [
      "boeing-build-gallery-1.jpg",
      "boeing-build-gallery-2.jpg",
      "boeing-build-gallery-3.jpg",
      "boeing-build-gallery-4.jpg",
      "boeing-build-gallery-5.jpg",
    ],
  },
  "fifth-gear-series": {
    slug: "fifth-gear-series",
    category: "Mentorship Program",
    heroImage: "programs-2.png",
    aboutParagraphs: [
      "The Fifth Gear Series (T5G) brings together a curated group of seasoned mentors, operators, and investors to help IITMIC-incubated startups accelerate their growth journey. Each cohort works through focused sessions on fundraising, go-to-market strategy, hiring, and scaling operations.",
      "The program pairs founders with mentors whose experience closely matches their stage and sector, turning one-off advice into an ongoing growth partnership over the course of the program.",
    ],
    whoCanParticipate: [
      "Founders of IITMIC-incubated and affiliated startups",
      "Early-to-growth stage teams preparing to raise their next round",
      "Startups looking for structured, sector-matched mentorship",
    ],
    details: [
      { icon: "date", label: "Program Date", value: "Nov 3, 2026 – Jan 23, 2027" },
      { icon: "location", label: "Location", value: "IIT Madras Research Park, Chennai" },
      { icon: "mode", label: "Mode", value: "In-person" },
      { icon: "deadline", label: "Application Deadline", value: "Oct 20, 2026" },
      { icon: "type", label: "Program Type", value: "Mentorship Program" },
      { icon: "organizer", label: "Organized By", value: "IITM Incubation Cell" },
    ],
    gallery: [
      "programs-3.png",
      "programs-4.png",
      "programs-5.png",
      "programs-6.png",
      "programs-1.png",
    ],
  },
  "think-like-a-startup": {
    slug: "think-like-a-startup",
    category: "Community Series",
    heroImage: "programs-3.png",
    aboutParagraphs: [
      "Think Like a Startup Series is an interactive session hosted by IITMIC and RTBI that introduces students and early-stage founders to the fundamentals of startup thinking — problem discovery, rapid prototyping, and validating ideas with real users.",
      "Delivered as a series of hands-on workshops and panel discussions with founders and mentors from the IITMIC ecosystem, the series is designed to turn curiosity about entrepreneurship into a concrete first step.",
    ],
    whoCanParticipate: [
      "Students curious about entrepreneurship, from any discipline",
      "Aspiring founders exploring their first startup idea",
      "Anyone wanting a practical introduction to startup thinking",
    ],
    details: [
      { icon: "date", label: "Program Date", value: "Oct 5, 2026 – Oct 26, 2026" },
      { icon: "location", label: "Location", value: "IIT Madras, Chennai" },
      { icon: "mode", label: "Mode", value: "Hybrid (In-person & Online)" },
      { icon: "deadline", label: "Application Deadline", value: "Sep 25, 2026" },
      { icon: "type", label: "Program Type", value: "Community Series" },
      { icon: "organizer", label: "Organized By", value: "IITM Incubation Cell & RTBI" },
    ],
    gallery: [
      "programs-4.png",
      "programs-5.png",
      "programs-6.png",
      "programs-1.png",
      "programs-2.png",
    ],
  },
};
