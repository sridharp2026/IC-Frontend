import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { fadeUp, revealProps, staggerContainer } from "../../../lib/motion";

type FundingStatus = "ongoing" | "closed";

const STATUS_STYLES: Record<
  FundingStatus,
  {
    label: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
  }
> = {
  ongoing: {
    label: "Ongoing Funding",
    border: "border-[var(--color-accent)]",
    text: "text-[var(--color-accent)]",
    badgeBg: "bg-[#D8FFE7]",
    badgeText: "text-[var(--color-accent)]",
    badgeBorder: "border-[var(--color-accent)]",
  },
  closed: {
    label: "Funding Closed",
    border: "border-[var(--color-secondary)]",
    text: "text-[var(--color-secondary)]",
    badgeBg: "bg-[#FFDAD6]",
    badgeText: "text-[var(--color-secondary)]",
    badgeBorder: "border-[var(--color-secondary)]",
  },
};

interface TickerEntry {
  status: FundingStatus;
  date: string;
  amount: string;
  caption: string;
  title: string;
  description: string;
}

const tickerEntries: TickerEntry[] = [
  {
    status: "ongoing",
    date: "02 June 2026",
    amount: "12.97L",
    caption: "As of now collected",
    title: "ATHER",
    description:
      "Building next-generation AI computing systems for faster and more efficient intelligent applications.",
  },
  {
    status: "closed",
    date: "30 April 2024",
    amount: "$5.5M",
    caption: "Closed",
    title: "SOLINAS INTEGRITY SERIES A1 FUNDING",
    description:
      "Solinas Integrity, an AI and robotics startup from IIT Madras, has raised $5.5 million in funding, led by Hero Enterprise and co-led by Mela Ventures.",
  },
];

interface FundingSpotlight {
  status: FundingStatus;
  image: string;
  title: string;
  description: string;
}

const featuredSpotlight: FundingSpotlight = {
  status: "closed",
  image: "/images/funding/funding-3.jpg",
  title: "INTEGRITY SERIES A1",
  description:
    "An AI and robotics startup from IIT Madras, has raised $5.5 million in funding, led by Hero Enterprise and co-led by Mela Ventures.",
};

const spotlights: FundingSpotlight[] = [
  {
    status: "ongoing",
    image: "/images/funding/funding-2.jpg",
    title: "NEURALCORE SYSTEMS SEEDS",
    description:
      "AI-powered semiconductor technology focused on building high-performance, energy efficient computing systems for next-generation applications",
  },
  {
    status: "ongoing",
    image: "/images/funding/funding-1.jpg",
    title: "VOLTMATRIX LABS SERIES A",
    description:
      "Advancing energy-storage technology for safer, smarter, and more sustainable power solutions.",
  },
  {
    status: "closed",
    image: "/images/funding/funding-4.jpg",
    title: "AEROCROP ANALYTICS",
    description:
      "Transforming agriculture with AI-powered aerial insights for smarter crop monitoring and better yields.",
  },
];

function TickerCard({ entry }: { entry: TickerEntry }) {
  const style = STATUS_STYLES[entry.status];
  return (
    <motion.div
      variants={fadeUp}
      className={`flex h-[342px] flex-col gap-[22px] rounded-[1.92px] border-[1.5px] ${style.border} px-[20px] py-[20px]`}
    >
      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
        <h3 className="text-p1 align-middle text-[var(--color-primary)]">{style.label}</h3>
        <span className="flex items-center gap-1 text-eyebrow align-middle uppercase text-[var(--color-muted)]">
          NEXT <ArrowRight size={14} />
        </span>
      </div>
      <div className="flex items-start justify-between">
        <span className="text-p1 align-middle text-[var(--color-muted)]">{entry.date}</span>
        <div className="text-right">
          <div className={`text-h1-tight text-right align-middle ${style.text}`}>
            {entry.amount}
          </div>
          <div className="text-p2-tight text-right align-middle text-[var(--color-muted)]">
            {entry.caption}
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-2">
          {entry.title}
        </h4>
        <p className="text-p1 align-middle text-[var(--color-muted)]">{entry.description}</p>
      </div>
    </motion.div>
  );
}

function SpotlightCard({
  spotlight,
  className = "",
}: {
  spotlight: FundingSpotlight;
  className?: string;
}) {
  const style = STATUS_STYLES[spotlight.status];
  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-1 flex-col overflow-hidden border border-[#E5E7EB] ${className}`}
    >
      <div className="relative w-full aspect-[418/288]">
        <img
          src={spotlight.image}
          alt={spotlight.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span
          className={`absolute top-4 right-4 rounded-full border ${style.badgeBorder} ${style.badgeBg} ${style.badgeText} px-4 py-1.5 text-p1 align-middle`}
        >
          {style.label}
        </span>
      </div>
      <div className="flex-1 flex flex-col bg-[var(--color-primary)] p-6">
        <h4 className="text-s1 align-middle uppercase text-white mb-2">{spotlight.title}</h4>
        <p className="text-p1 align-middle text-white/80">{spotlight.description}</p>
      </div>
    </motion.div>
  );
}

export default function FundRaising() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <motion.div
          variants={staggerContainer}
          {...revealProps}
          className="text-center max-w-7xl mx-auto px-6 pt-12"
        >
          <motion.h1
            variants={fadeUp}
            className="text-hero-tight text-center align-middle text-[var(--color-primary)] mb-4"
          >
            Fueling Deep-Tech <br />
            Innovation
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-p1 text-center align-middle text-[var(--color-muted)] mb-8 max-w-[1121px] mx-auto"
          >
            Partner with India's leading deep-tech incubator to scale transformative <br />
            technologies. Your investment directly accelerates breakthrough research from lab to
            market.
          </motion.p>
        </motion.div>

        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <motion.div
            variants={staggerContainer}
            {...revealProps}
            className="grid md:grid-cols-[1fr_418px] gap-6 mb-6"
          >
            <div className="flex flex-col gap-6">
              {tickerEntries.map((entry) => (
                <TickerCard key={entry.title} entry={entry} />
              ))}
            </div>
            <SpotlightCard spotlight={featuredSpotlight} className="h-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            {...revealProps}
            className="grid md:grid-cols-3 gap-6"
          >
            {spotlights.map((spotlight) => (
              <SpotlightCard key={spotlight.title} spotlight={spotlight} />
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
