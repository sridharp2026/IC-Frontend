import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CustomButton from "../../../components/CustomButton";
import { fadeUp, revealProps, staggerContainer } from "../../../lib/motion";

interface MediaMentionImage {
  src: string;
  alt?: string;
  /** Overlays a play icon for images that are video thumbnails without one baked in. */
  video?: boolean;
}

interface MediaMentionEntry {
  category: string;
  date: string;
  title: string;
  description: string;
  href: string;
  images: MediaMentionImage[];
}

const MEDIA_MENTIONS: MediaMentionEntry[] = [
  {
    category: "Event",
    date: "30 Sept 2019",
    title:
      "Hon. Prime Minister Narendra Modi visits IITM Research Park & interacts with 22 incubated startups",
    description:
      "30th Sept: Hon'ble Prime Minister Shri Narendra Modi visited IITMRP and interacted with startups incubated at IITMIC and innovators from IITM's Centres of excellence. He was accompanied by Prof. Ashok Jhunjhunwala, Faculty In-Charge, IITMRP & Co-Chairman, IITMIC and Dr. Pawan Goenka, Chairman, Board of Governors, IITM.",
    href: "#",
    images: [
      { src: "/images/media/Event-1.png" },
      { src: "/images/media/Event-2.png" },
      { src: "/images/media/Event-3.png" },
      { src: "/images/media/Event-4.png", video: true },
    ],
  },
  {
    category: "Visitors Corner",
    date: "28 Sept 2019",
    title: "Hon. Minister of State for HRD Shri.Sanjay Dhotre",
    description:
      "Spends time at IITM Research Park & IIT Madras Incubation Cell with Prof. Ashok Jhunjhunwala and incubated startups at IITMIC on 28, Sept. 2019.",
    href: "#",
    images: [
      { src: "/images/media/Visitors-Corner-1.png" },
      { src: "/images/media/Visitors-Corner-2.png" },
      { src: "/images/media/Visitors-Corner-3.png" },
      { src: "/images/media/Visitors-Corner-4.png" },
    ],
  },
];

/** One photo cell in the bento grid — width ratio comes from the parent row's
 * grid-template-columns, height ratio from its own aspect-ratio; together
 * they reproduce the reference's exact 605-wide grid (399/195 then 195/400). */
function ImageCell({
  image,
  title,
  aspect,
}: {
  image: MediaMentionImage;
  title: string;
  aspect: string;
}) {
  return (
    <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: aspect }}>
      <img src={image.src} alt={image.alt ?? title} className="w-full h-full object-cover" />
      {image.video && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-9 h-9 rounded-full bg-[var(--color-secondary)] flex items-center justify-center shadow-md">
            <Play size={16} fill="white" strokeWidth={0} className="text-white translate-x-[1px]" />
          </span>
        </span>
      )}
    </div>
  );
}

/**
 * Media mention / press coverage row — matches the reference design: a
 * category + date pill, headline, summary, and "Read More" CTA on the left,
 * paired with a 605px-wide bento photo grid on the right (row 1: 399/195,
 * row 2: 195/400). Expects exactly 4 images.
 */
function MediaMentionCard({ category, date, title, description, images, href }: MediaMentionEntry) {
  return (
    <motion.article
      variants={fadeUp}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-10 border-b border-[#E0E0E0] last:border-b-0"
    >
      <div>
        <div className="flex items-center gap-3 mb-5 text-[14px] text-[var(--color-muted)]">
          <span className="text-p1 align-middle rounded-[11.53px] border-[0.96px] border-[#C7C5D5] pt-[3.36px] pr-[11.53px] pb-[3.74px] pl-[11.53px]">
            {category}
          </span>
          <span className="flex items-center gap-1.5 text-p1 align-middle">
            <Calendar size={14} />
            {date}
          </span>
        </div>

        <h3 className="text-s1 align-middle text-[var(--color-primary)] uppercase mb-4">{title}</h3>

        <p className="font-[Arial] text-[24px] font-normal leading-[42.9px] tracking-[0px] text-justify align-middle text-[var(--color-muted)] mb-6">
          {description}
        </p>

        <CustomButton href={href} label="Read More" />
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[605px]">
        <div className="grid grid-cols-[399fr_195fr] gap-2">
          <ImageCell image={images[0]} title={title} aspect="399/228" />
          <ImageCell image={images[1]} title={title} aspect="195/228" />
        </div>
        <div className="grid grid-cols-[195fr_400fr] gap-2">
          <ImageCell image={images[2]} title={title} aspect="195/228" />
          <ImageCell image={images[3]} title={title} aspect="400/228" />
        </div>
      </div>
    </motion.article>
  );
}

export default function MediaMention() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="text-center max-w-7xl mx-auto px-6 pt-12">
          <h1 className="text-hero-tight text-center align-middle text-[var(--color-primary)] mb-4">
            Our Journey in the <br />
            Spotlight
          </h1>
          <p className="text-p1 text-center align-middle text-[var(--color-muted)] mb-8 max-w-[1121px] mx-auto">
            Explore the latest news, stories, and media highlights showcasing <br />
            the people, innovations, and impact shaping our ecosystem.
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <motion.div variants={staggerContainer} {...revealProps}>
            {MEDIA_MENTIONS.map((entry) => (
              <MediaMentionCard key={entry.title} {...entry} />
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
