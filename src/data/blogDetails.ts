export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogDetail = {
  /** Full headline, cased as in the design — the feed's `title` is all-caps for the card. */
  headline: string;
  duration: string;
  author: string;
  postedOn: string;
  views: string;
  /** Hero banner shown at the top of the detail page — falls back to the feed's `image` when absent. */
  bannerImage?: string;
  intro: string;
  /** Right-rail "Introduction" TOC + the numbered body sections, in order. */
  sections: BlogSection[];
  conclusion: string[];
  tags: string[];
};

// Extended per-article detail content, keyed by `blogFeed`'s `slug`.
// Only `ecorise-power-driving-clean-energy-innovation` has full long-form
// copy (transcribed from `detail-1.svg` / `detail-2.svg`); the rest fall
// back to just their feed card info on the detail page — see BlogDetail.tsx.
export const blogDetails: Record<string, BlogDetail> = {
  "ecorise-power-driving-clean-energy-innovation": {
    headline: "Ecorise Power: Driving Clean Energy Innovation",
    duration: "3 min read",
    author: "Alec Whitten",
    postedOn: "Jan 18, 2026",
    views: "1638",
    intro:
      "EcoRise Power is driving the transition toward a cleaner and more sustainable energy future through innovative renewable energy technologies. From solar power and energy-efficient systems to smart energy management, clean energy solutions are helping businesses and communities reduce their environmental impact while improving long-term energy efficiency and resilience.",
    sections: [
      {
        heading: "1. What is Clean Energy Innovation?",
        paragraphs: [
          "Clean energy innovation refers to the development and adoption of technologies that generate, store, manage, and consume energy with reduced environmental impact. Renewable sources such as solar, wind, and other sustainable technologies are transforming how energy is produced and used.",
        ],
      },
      {
        heading: "2. Why Businesses Are Adopting Clean Energy",
        paragraphs: [
          "Businesses are increasingly investing in clean energy to reduce operational costs and improve energy efficiency. Rising energy demand and growing sustainability requirements are encouraging organizations to explore renewable and smart energy solutions.",
        ],
      },
      {
        heading: "3. Key Benefits of Clean Energy",
        paragraphs: [
          "Discover how clean energy solutions can help organizations improve efficiency, reduce costs, and accelerate sustainable transformation.",
        ],
        list: [
          "Reduced Environmental Impact – Renewable energy solutions help reduce greenhouse gas emissions and dependence on fossil fuels.",
          "Lower Energy Costs – Efficient energy systems can optimize consumption and reduce long-term operational expenses.",
          "Energy Independence – Organizations can reduce their dependence on traditional power sources through renewable energy generation and storage.",
          "Improved Energy Efficiency – Smart monitoring and energy management systems help identify consumption patterns and minimize energy waste.",
        ],
      },
      {
        heading: "4. Common Clean Energy Applications",
        paragraphs: [
          "Clean energy solutions can be applied across residential, commercial, and industrial environments. Solar power systems, energy storage, smart grids, electric mobility, energy monitoring, and efficient power management are transforming how organizations generate and consume energy.",
        ],
      },
      {
        heading: "5. Industries Using Clean Energy",
        paragraphs: [
          "Many industries benefit from clean energy solutions, including manufacturing, healthcare, education, infrastructure, logistics, retail, agriculture, and technology.",
        ],
      },
      {
        heading: "6. Challenges of Clean Energy Implementation",
        paragraphs: [
          "Although clean energy provides significant benefits, successful implementation requires careful planning. Organizations must evaluate infrastructure requirements, energy demand, technology compatibility, installation costs, and long-term maintenance.",
        ],
      },
      {
        heading: "7. Best Practices for Sustainable Energy Deployment",
        paragraphs: [
          "Businesses should begin with an assessment of their current energy consumption before adopting clean energy solutions. Defining clear sustainability goals, identifying high-consumption areas, selecting suitable technologies, and continuously monitoring performance are essential for successful deployment.",
        ],
      },
      {
        heading: "8. Future of Clean Energy Innovation",
        paragraphs: [
          "The future of clean energy is closely connected with advancements in artificial intelligence, energy storage, smart grids, IoT, and automation.",
        ],
      },
      {
        heading: "9. Choosing the Right Clean Energy Solution",
        paragraphs: [
          "Selecting the right clean energy solution depends on factors such as energy requirements, scalability, efficiency, reliability, integration capabilities, and cost.",
        ],
      },
      {
        heading: "10. Real-World Impact of Clean Energy",
        paragraphs: [
          "Organizations implementing renewable and smart energy solutions can achieve improvements in energy efficiency, operational resilience, and environmental performance.",
          "By reducing energy waste and optimizing consumption, businesses can lower operational costs while contributing to a cleaner and more sustainable future.",
        ],
      },
    ],
    conclusion: [
      "Clean energy has become a key driver of sustainable transformation, helping organizations reduce emissions, improve energy efficiency, and build resilient operations. EcoRise Power represents the growing movement toward innovative energy solutions that combine technology, sustainability, and long-term value.",
      "As organizations continue to embrace renewable energy and smarter power management, clean energy innovation will play an increasingly important role in creating a more efficient and sustainable future.",
    ],
    tags: ["Clean Energy", "Renewable Energy", "Sustainability"],
  },
};
