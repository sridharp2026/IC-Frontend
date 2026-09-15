// All real copy is transcribed directly from the supplied Home.png mockup.
// Swap `image` placeholders for real files under public/images/ once you have them.

export const navLinks = [
  { label: "About Us", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Programs", to: "/programs" },
  { label: "Impact", to: "/impact" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

// Full nav list for the header's mega menu overlay — adds "Home" and lets a
// row carry a set of sub-links shown in the mega menu's second column.
export const megaNavLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Program", to: "/programs" },
  {
    label: "Impact",
    to: "/impact",
    children: [
      { label: "Media Mention", to: "/impact/media-mention" },
      { label: "CSR", to: "/impact/csr" },
      { label: "Fund Raising", to: "/impact/fund-raising" },
    ],
  },
  {
    label: "Insights",
    to: "/insights",
    children: [
      { label: "Newsletter", to: "/insights/newsletter" },
      { label: "Blog", to: "/insights/blog" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export const megaMenuContact = {
  email: "sales@ic.com",
  phone: "+91 96770 02380",
};

export const heroStats = [
  { value: "600+", label: "Startups Incubated" },
  { value: "80,000 CR", label: "Portfolio Value" },
  { value: "15000+", label: "Job Created" },
  { value: "1000+", label: "Patents Filed" },
];

export const aboutParagraphs = [
  "We are on a mission to make India the epicenter of frontier innovation by empowering young and passionate entrepreneurs across the country.",
  "Registered as a not-for-profit Section 8 Company, IITMIC is recognised as a Technology Business Incubator by Startup India, DIPP, and NSTEDB, Department of Science & Technology, Government of India.",
  "IITMIC supports students, faculty, staff, and alumni of IITM, as well as external entrepreneurs, in creating successful deep-tech startups, disrupting industries, and translating benefits to society at large.",
];

// Timeline for the About page's "Our Journey" section — add more entries
// here and they'll automatically continue the alternating left/right layout.
export const journeyMilestones = [
  {
    year: "2013",
    description: "Incorporation of IITM Incubation Cell as a not-for-profit Section 8 Company.",
  },
  {
    year: "2014",
    description: "IITM Incubation cell launches Bio-Incubator for biotechnology startups.",
  },
  {
    year: "2015",
    description:
      "IITMIC is recognised as a Technology Business Incubator by Startup India, DIPP, and NSTEDB, Department of Science & Technology, Government of India.",
  },
  {
    year: "2016",
    description: "248 patent applications filed, the most among all IITs in India.",
  },
];

// Cards for the About page's "Our Core Values" section — `icon` is a lucide-react
// icon name resolved by the page; add more entries and they'll flow into the grid.
export const coreValues = [
  {
    icon: "Lightbulb",
    title: "Discover",
    description: "Helping identify promising technologies, founders and opportunities.",
  },
  {
    icon: "Rocket",
    title: "Impact",
    description:
      "Supporting ventures as they grow into companies capable of creating lasting change.",
  },
  {
    icon: "Settings",
    title: "Validate",
    description: "Supporting the journey from prototype to product, market and customer.",
  },
  {
    icon: "TrendingUp",
    title: "Connect",
    description: "Bringing founders closer to mentors, industry, investors and strategic partners.",
  },
  {
    icon: "Shield",
    title: "Scale",
    description: "Building capabilities, networks, and momentum for the next stage of growth.",
  },
  {
    icon: "Users",
    title: "Build",
    description:
      "Connecting entrepreneurs with expertise, infrastructure and resources to develop their ideas.",
  },
];

// Tabs + members for the About page's "Meet Our Team" section. Each tab's
// array is empty until real members are added — the page shows a
// placeholder for any tab with no entries yet.
export const teamTabs = ["Board", "Management", "Steering Committee", "Mentors"];

export const teamMembers: Record<string, { name: string; role: string; image: string }[]> = {
  Board: [
    {
      name: "Dr. Bhaskar Ramamurthi",
      role: "Chairman, IITMIC",
      image: "/images/team/Dr Bhaskar Ramamurthi.png",
    },
    {
      name: "Dr. Ashok Jhunjhunwala",
      role: "President, IITMIC and RTBI",
      image: "/images/team/Dr Ashok Jhunjhunwala.png",
    },
    {
      name: "Dr. Sujatha Srinivasan",
      role: "Faculty-in-charge, IITMIC",
      image: "/images/team/Dr Sujatha Srinivasan.png",
    },
    {
      name: "Dr. Tamaswati Ghosh",
      role: "CEO, IIT Madras Incubation Cell",
      image: "/images/team/Dr Tamaswati Ghosh.png",
    },
  ],
  Management: [],
  "Steering Committee": [],
  Mentors: [],
};

// Rows for the About page's "Ecosystem" section — `icon` is a lucide-react
// icon name resolved by the page; add more entries and they'll flow into the list.
export const ecosystemPartners = [
  {
    icon: "Tractor",
    title: "RTBI",
    description:
      "The Rural Technology Business Incubator uses business incubation as a strategy for rural and social development through capacity building and income generation.",
  },
  {
    icon: "Microscope",
    title: "Bio-Incubator (BISS)",
    description:
      "Supported by BIRAC, the Bio-Incubator Support Scheme focuses on nurturing startups in the biosciences and biotechnology sectors.",
  },
  {
    icon: "Users",
    title: "E-Cell",
    description:
      "The student hub for entrepreneurship at IITM, providing pre-incubation support through the NIRMAAN program.",
  },
  {
    icon: "Globe",
    title: "CSIE",
    description:
      "The Centre for Social Innovation and Entrepreneurship focuses on teaching and research related to social enterprise in India.",
  },
  {
    icon: "Cpu",
    title: "CFI",
    description:
      "The Centre for Innovation is a student body providing infrastructure and mentorship to nurture engineering innovation.",
  },
  {
    icon: "Presentation",
    title: "IITMEF",
    description:
      "The Entrepreneurship Forum brings together alumni, resources, and insights to accelerate the startup ecosystem.",
  },
];

export const testimonial = {
  quote:
    "I am delighted to welcome you to India's leading deep-tech startup incubator. It has been privilege and honour to be associated in this incredible ecosystem and overseen emergence into India's leading deep-tech startup hub. Join me in discovery on exploring our work in these pages.",
  name: "Dr. Tamaswati Ghosh",
  role: "CEO, IITMIC",
  image: "/images/Dr-Tamaswati-Ghosh.png",
};

export const corePillars = [
  {
    title: "Access to IIT Madras",
    description:
      "Connect with world-class faculty, researchers, students, laboratories, centres of excellence and institutional expertise",
    icon: "Zap",
    highlighted: true,
  },
  {
    title: "Build with Infrastructure",
    description:
      "Move beyond ideas with access to specialised infrastructure, prototyping capabilities, testing facilities and the IIT Madras",
    icon: "Target",
    highlighted: false,
  },
  {
    title: "Mentors & Industry",
    description:
      "Learn from experienced founders, industry leaders, domain experts and a powerful alumni network.",
    icon: "Maximize2",
    highlighted: false,
  },
  {
    title: "Capital & Connections",
    description:
      "Get connected to investors, strategic partners and the networks needed to unlock the next stage of growth.",
    icon: "Globe2",
    highlighted: false,
  },
];

export const disciplines = [
  { title: "Artificial Intelligence", icon: "Brain" },
  { title: "Space & Defence", icon: "Satellite" },
  { title: "Electric Mobility & EV", icon: "Zap" },
  { title: "Climate & Sustainability", icon: "Leaf" },
  { title: "Healthcare & Medtech", icon: "HeartPulse" },
  { title: "Robotics & Automation", icon: "Bot" },
  { title: "Semiconductors & Electronics", icon: "Cpu" },
  { title: "Agritech", icon: "Sprout" },
];

export const helpAudiences = [
  { number: "01", title: "Founders" },
  { number: "02", title: "Investors" },
  { number: "03", title: "Industry" },
  { number: "04", title: "Government & Agencies" },
];

export const ecosystemNodes = [
  { name: "IITM Bioincubator", note: "Nurturing Life Science Innovations" },
  { name: "IITM Research Park", note: "Bringing unallied minds together" },
  { name: "RTBI", note: "Rural Technology & Business Incubator" },
  { name: "Healthcare Tech Innovation Centre", note: "" },
];

export const partnerTabs = ["Ecosystem", "Government", "Industry", "Key Investors"] as const;

export const keyInvestors = [
  "SRI Capital",
  "Unitus Ventures",
  "Ankur Capital",
  "100X.VC",
  "Blume",
  "pi Ventures",
  "Bharat Innovation Fund",
  "BCG",
  "Invest in Holland",
  "Asiana",
  "NativeLead",
  "EIF Ecosystem Integrity",
  "Oikocredit",
  "IIFL Finance",
  "IFCI Venture",
  "Dexter Capital Advisors",
  "2X Global",
  "Beyond",
  "Abyro Capital",
  "Applied Materials",
  "1Crowd",
  "Aureolis",
  "I amsterdam",
  "Eaglewings",
  "AumVentures",
  "ClimateX Capital",
];

export const portfolioStartups = [
  {
    name: "Ather Energy",
    slug: "ather-energy",
    logo: "logo/ather.png",
    tag: "Publicly Listed",
    sector: "Electric Mobility",
    description:
      "India's largest E2W manufacturer with a market cap of +₹60,000 crore on National Stock Exchange (NSE).",
    media: "portfolio-1.jpg",
  },
  {
    name: "Uniphore",
    slug: "uniphore",
    tag: "Enterprise AI",
    sector: "Deep-tech",
    description:
      "An IIT Madras-born company building enterprise AI for customers across the world.",
    media: "portfolio-2.jpg",
  },
  {
    name: "Stellapps",
    slug: "stellapps",
    tag: "IoT, Agriculture (Dairy)",
    sector: "Agritech",
    description:
      "India's first & largest dairy IoT company - focuses on automation, data acquisition, and ML.",
    media: "portfolio-3.jpg",
  },
];

export const scaleStats = [
  { value: "200", label: "Startups added in FY 25/26" },
  { value: "1,200+", label: "Applications" },
  { value: "2", label: "Unicorns" },
  { value: "1", label: "Publicly Listed" },
];

export const programs = [
  {
    number: "01",
    slug: "boeing-build",
    title: "Boeing\nBuild 5.0",
    description: "Boeing works with the IITMIC to nurture the student-to-start-up community.",
    image: "programs-1.png",
  },
  {
    number: "02",
    slug: "fifth-gear-series",
    title: "The Fifth Gear Series (T5G)",
    description: "Group of mentors to help startups accelerate their growth journey.",
    image: "programs-2.png",
  },
  {
    number: "03",
    slug: "think-like-a-startup",
    title: "Think Like a Startup Series",
    description: "An interactive session hosted by IITMIC and RTBI.",
    image: "programs-3.png",
  },
];

export const insights = [
  {
    tag: "Events",
    date: "JULY 7, 2026",
    title: "IIT Madras-incubated startup Plenome...",
    image: "insights-1.png",
  },
  {
    tag: "Mission Drishti",
    date: "03 MAY 2026",
    title: "GalaxEye, on the successful launch...",
    image: "Insights-2.png",
  },
];

// Topic taxonomy for the newsletter sidebar — matches `Aside - Sidebar.svg`.
export const newsletterTopics = [
  "#Viral",
  "Podcast",
  "People",
  "Money",
  "Development",
  "Startup 101",
  "Marketing",
];

// Newsletter feed — content transcribed directly from `Blog Feed.svg`.
// `topic` maps each entry onto the sidebar's topic taxonomy (`newsletterTopics`,
// from `Aside - Sidebar.svg`) for filtering; it's a separate field from the
// visible `tag` pill since the two reference mockups use unrelated taxonomies.
export const newsFeed = [
  {
    slug: "plenome-ashwin-ai-launch",
    tag: "Events",
    date: "JULY 7, 2026",
    title: "IIT Madras-incubated startup Plenome...",
    description:
      "A curated newsletter featuring fresh insights, breakthrough ideas, and important updates all in one place.",
    image: "news-1.png",
    topic: "#Viral",
  },
  {
    slug: "galaxeye-successful-launch",
    tag: "Mission Drishti",
    date: "MAY 6, 2026",
    title: "GalaxEye, on the successful launch...",
    description:
      "Showcasing promising startups, innovative solutions, and opportunities from the entrepreneurial ecosystem.",
    image: "news-2.png",
    topic: "Development",
  },
  {
    slug: "startup-job-utsav-success",
    tag: "Startup & Careers",
    date: "JUNE 30, 2026",
    title: "Startup Job Utsav Success",
    description:
      "Connecting talented professionals with emerging startups and creating exciting career opportunities.",
    image: "news-3.png",
    topic: "Startup 101",
  },
  {
    slug: "board-of-directors-update",
    tag: "Company Update",
    date: "JULY 24, 2026",
    title: "Board of Directors Update",
    description:
      "A key leadership update highlighting strategic discussions, decisions, and the organisation's future direction.",
    image: "news-4.png",
    topic: "People",
  },
  {
    slug: "pm-modi-visits-iitm-research-park",
    tag: "News & Events",
    date: "JULY 24, 2026",
    title: "PM Modi Visits IITM Research Park",
    description:
      "A landmark visit highlighting innovation, research, entrepreneurship, and the impact of IIT Madras startups.",
    image: "news-5.png",
    topic: "Marketing",
  },
];

// Topic taxonomy for the blog sidebar — transcribed from `Aside - Sidebar.png`.
export const blogTopics = [
  "#Viral",
  "Technology",
  "Industry Insights",
  "Case Studies",
  "Trends & Future Tech",
  "Company Updates",
];

// Blog feed — content transcribed directly from `Blog Feed.svg`.
// `topic` maps each entry onto the sidebar's topic taxonomy (`blogTopics`)
// for filtering; it's a separate field from the visible `tag` pill since the
// card tags (Energy, Healthcare, ...) don't match the sidebar's taxonomy.
export const blogFeed = [
  {
    slug: "ecorise-power-driving-clean-energy-innovation",
    tag: "Energy",
    date: "JULY 7, 2026",
    title: "ECORISE POWER: DRIVING CLEAN ENERGY INNOVATION",
    image: "blog-1.jpg",
    topic: "Trends & Future Tech",
  },
  {
    slug: "neurosense-advancing-neutrotechnology",
    tag: "Healthcare",
    date: "MAY 6, 2026",
    title: "NEUROSENSE: ADVANCING NEUTROTECHNOLOGY",
    image: "blog-2.jpg",
    topic: "Case Studies",
  },
  {
    slug: "uniphore-powering-enterprise-ai",
    tag: "AI & Technology",
    date: "JUNE 30, 2026",
    title: "UNIPHORE: POWERING ENTERPRISE AI",
    image: "blog-3.jpg",
    topic: "Technology",
  },
  {
    slug: "agnikul-cosmos-innovating-space-technology",
    tag: "Space Tech",
    date: "JULY 24, 2026",
    title: "AGNIKUL COSMOS: INNOVATING SPACE TECHNOLOGY",
    image: "blog-4.jpg",
    topic: "Industry Insights",
  },
  {
    slug: "planys-technologies-advancing-marine-robotics",
    tag: "Marine Tech",
    date: "JULY 24, 2026",
    title: "PLANYS TECHNOLOGIES: ADVANCING MARINE ROBOTICS",
    image: "blog-5.jpg",
    topic: "Company Updates",
  },
];

export const socialLinks = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];
