// Rich per-job profiles for `/careers/:slug`. Keyed by the `slug` on each
// entry in `JOBS` (RecommendedJobs.tsx). Every job listed there should have
// a matching entry here so its card links to a working detail page.

export type JobDetail = {
  slug: string;
  aboutParagraphs: string[];
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
};

export const jobDetails: Record<string, JobDetail> = {
  "senior-rd-engineer": {
    slug: "senior-rd-engineer",
    aboutParagraphs: [
      "We are looking for a passionate Senior R&D Engineer to join our deep-tech team. You will work on cutting-edge technologies, develop innovative solutions, and contribute to real-world products that create impact.",
    ],
    responsibilities: [
      "Design and develop research prototypes and scalable solutions.",
      "Collaborate with cross-functional teams to bring products from research to market.",
      "Work on innovation projects in deep manufacturing technologies.",
      "Publish research findings and contribute to patents.",
    ],
    qualifications: [
      "B.Tech / M.Tech / PhD in Mechanical, Electrical, or related fields.",
      "4+ years of experience in R&D (preferred).",
      "Strong problem-solving and analytical skills.",
      "Experience in prototyping, testing, and product development.",
    ],
    skills: ["R&D", "Prototyping", "Product Development", "CAD Design", "Data Analysis", "Team Collaboration"],
  },
  "product-manager-healthtech": {
    slug: "product-manager-healthtech",
    aboutParagraphs: [
      "We are looking for a passionate Product Manager to drive our HealthTech roadmap. You will work at the intersection of clinical needs, regulation, and user experience to ship products that improve patient outcomes.",
    ],
    responsibilities: [
      "Own the product roadmap and translate clinical needs into requirements.",
      "Work with design and engineering to ship features end to end.",
      "Coordinate with regulatory and compliance stakeholders.",
      "Analyze user and clinical feedback to prioritize the backlog.",
    ],
    qualifications: [
      "Bachelor's degree in a relevant field; MBA is a plus.",
      "3+ years of product management experience, ideally in healthcare.",
      "Strong analytical and communication skills.",
      "Comfortable operating with ambiguity in an early-stage environment.",
    ],
    skills: ["Product Strategy", "Roadmapping", "User Research", "Regulatory Compliance", "Data Analysis", "Stakeholder Management"],
  },
  "ev-battery-systems-engineer": {
    slug: "ev-battery-systems-engineer",
    aboutParagraphs: [
      "We are looking for a passionate EV Battery Systems Engineer to support the design and validation of battery pack systems. You will be involved in everything from cell selection to thermal management and safety testing.",
    ],
    responsibilities: [
      "Design and validate battery pack architecture and BMS integration.",
      "Run thermal, electrical, and safety testing on battery systems.",
      "Work with suppliers on cell sourcing and qualification.",
      "Document test results and support certification processes.",
    ],
    qualifications: [
      "B.Tech / M.Tech in Electrical, Mechanical, or a related field.",
      "3+ years of experience with battery pack design or EV powertrain systems.",
      "Familiarity with BMS, thermal management, and safety standards.",
      "Strong hands-on testing and debugging skills.",
    ],
    skills: ["Battery Systems", "BMS Integration", "Thermal Management", "CAD Design", "Testing & Validation", "Safety Standards"],
  },
  "agritech-field-operations-lead": {
    slug: "agritech-field-operations-lead",
    aboutParagraphs: [
      "We are looking for a passionate Field Operations Lead to run on-ground pilots and build relationships with farmers and field partners. You will bridge product and the field, ensuring solutions actually work where they're deployed.",
    ],
    responsibilities: [
      "Plan and run field pilots across multiple locations.",
      "Build and manage relationships with farmers, cooperatives, and partners.",
      "Collect field feedback and relay it to product and engineering teams.",
      "Track and report on field operation metrics.",
    ],
    qualifications: [
      "Bachelor's degree in agriculture, business, or a related field.",
      "2+ years of experience in agriculture, rural operations, or field sales.",
      "Comfortable with frequent travel to field sites.",
      "Strong communication skills across diverse stakeholders.",
    ],
    skills: ["Field Operations", "Farmer Relations", "Stakeholder Management", "Data Collection", "Team Collaboration"],
  },
};
