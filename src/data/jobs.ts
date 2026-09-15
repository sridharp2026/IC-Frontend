import { Briefcase, FlaskConical, type LucideIcon } from "lucide-react";

export type Accent = "primary" | "secondary";

export const ACCENT_CLASSES: Record<Accent, { border: string; badgeBg: string; icon: string }> = {
  primary: {
    border: "border-l-[var(--color-primary)]",
    badgeBg: "bg-[var(--color-primary)]/10",
    icon: "text-[var(--color-primary)]",
  },
  secondary: {
    border: "border-l-[var(--color-secondary)]",
    badgeBg: "bg-[var(--color-secondary)]/10",
    icon: "text-[var(--color-secondary)]",
  },
};

export type Job = {
  slug: string;
  type: string;
  postedAgo: string;
  title: string;
  salary: string;
  location: string;
  category: string;
  experience: string;
  employees: string;
  accent: Accent;
  icon: LucideIcon;
};

const SENIOR_RND_ENGINEER: Job = {
  slug: "senior-rd-engineer",
  type: "Contract",
  postedAgo: "4 years ago",
  title: "Senior R&D Engineer",
  salary: "₹ 15,00,000 - 25,00,000",
  location: "Chennai, TN",
  category: "Deep Manufacturing",
  experience: "4+ Years",
  employees: "51 - 200",
  accent: "primary",
  icon: Briefcase,
};

const PRODUCT_MANAGER_HEALTHTECH: Job = {
  slug: "product-manager-healthtech",
  type: "Full-Time",
  postedAgo: "2 weeks ago",
  title: "Product Manager - HealthTech",
  salary: "₹ 18,00,000 - 30,00,000",
  location: "Bangalore, KA",
  category: "Health Tech",
  experience: "3+ Years",
  employees: "11 - 50",
  accent: "secondary",
  icon: FlaskConical,
};

const EV_BATTERY_SYSTEMS_ENGINEER: Job = {
  slug: "ev-battery-systems-engineer",
  type: "Contract",
  postedAgo: "1 month ago",
  title: "EV Battery Systems Engineer",
  salary: "₹ 12,00,000 - 20,00,000",
  location: "Pune, MH",
  category: "Electric Mobility",
  experience: "3+ Years",
  employees: "51 - 200",
  accent: "primary",
  icon: Briefcase,
};

const AGRITECH_FIELD_OPERATIONS_LEAD: Job = {
  slug: "agritech-field-operations-lead",
  type: "Full-Time",
  postedAgo: "3 days ago",
  title: "AgriTech Field Operations Lead",
  salary: "₹ 10,00,000 - 16,00,000",
  location: "Nagpur, MH",
  category: "Agri Tech",
  experience: "2+ Years",
  employees: "11 - 50",
  accent: "secondary",
  icon: FlaskConical,
};

export const JOBS: Job[] = [
  SENIOR_RND_ENGINEER,
  PRODUCT_MANAGER_HEALTHTECH,
  EV_BATTERY_SYSTEMS_ENGINEER,
  AGRITECH_FIELD_OPERATIONS_LEAD,
];
