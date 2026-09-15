import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MapPin,
  Network,
  Briefcase,
  IndianRupee,
  Clock,
  Users,
  Tag,
  Check,
  Upload,
  ShieldCheck,
  Box,
  FlaskConical,
  Settings,
  ArrowUpRight,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NumberFlow from "../../components/NumberFlow";
import { JOBS, ACCENT_CLASSES } from "../../data/jobs";
import { jobDetails } from "../../data/jobDetails";

const inputClass =
  "w-full h-[48px] rounded-lg border border-[#D1D5DB] pt-[10px] pr-[12px] pb-[9px] pl-[12px] text-p2-tight text-[var(--color-ink)] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]";
const labelClass = "block mb-2 text-p2-tight text-[var(--color-ink)]";

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>();

  const job = JOBS.find((j) => j.slug === slug);
  const detail = slug ? jobDetails[slug] : undefined;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!job || !detail) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <h1 className="text-h1 text-[var(--color-primary)] mb-4">Job not found</h1>
            <Link to="/careers" className="btn-primary inline-flex">
              Back to Careers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const accent = ACCENT_CLASSES[job.accent];

  const stats = [
    { icon: IndianRupee, value: job.salary, label: "Per Year" },
    { icon: Clock, value: job.experience, label: "Experience" },
    { icon: Users, value: job.employees, label: "Employees" },
    { icon: Tag, value: job.category, label: "Domain" },
  ];

  const similarJobs: {
    icon: LucideIcon;
    title: string;
    company: string;
    location: string;
    type: string;
  }[] = [
    {
      icon: Box,
      title: "Product Manager - HealthTech",
      company: "MedAI Analytics",
      location: "Bangalore, KA",
      type: "Full-Time",
    },
    {
      icon: FlaskConical,
      title: "AI Research Scientist",
      company: "AgriTech",
      location: "Chennai, TN",
      type: "Contract",
    },
    {
      icon: Briefcase,
      title: "Embedded Systems Engineer",
      company: "Space Tech",
      location: "Hyderabad, TS",
      type: "Full-Time",
    },
    {
      icon: Settings,
      title: "Manufacturing Process Specialist",
      company: "Deep Manufacturing",
      location: "Chennai, TN",
      type: "Contract",
    },
  ];

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResumeFile(e.target.files?.[0] ?? null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20 md:pb-28">
          <div className="flex items-center justify-between mb-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-p1 align-middle text-[var(--color-muted)]"
            >
              <Link to="/careers" className="hover:text-[var(--color-primary)]">
                Careers
              </Link>
              <ChevronRight size={18} />
              <span className="text-[var(--color-primary)]">Job details</span>
            </nav>

            <Link
              to="/careers"
              className="w-[85px] shrink-0 inline-flex items-center gap-2 font-[Arial] text-[24px] font-normal leading-[22px] tracking-[0px] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            >
              <ArrowLeft size={18} />
              Back
            </Link>
          </div>

          <h1 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-8">
            <span className="inline-flex items-center gap-1.5 text-p1 align-middle text-[var(--color-muted)]">
              <Network size={16} className={accent.icon} />
              {job.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-p1 align-middle text-[var(--color-muted)]">
              <MapPin size={16} className={accent.icon} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-p1 align-middle text-[var(--color-muted)]">
              <Briefcase size={16} className={accent.icon} />
              {job.type}
            </span>
          </div>

          <div className="flex flex-wrap items-start gap-x-10 gap-y-6 rounded-2xl border border-[#E5E7EB] shadow-[0_2px_4px_rgba(0,0,0,0.03)] px-6 py-5 sm:px-8 mb-10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-start gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center bg-[#FFECEF] text-[var(--color-secondary)]">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-p1 align-middle text-[var(--color-secondary)] truncate">
                      {/\d/.test(stat.value) ? <NumberFlow value={stat.value} /> : stat.value}
                    </p>
                    <p className="text-p2-tight align-middle text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_470px] gap-8 lg:gap-10">
            <div>
              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
                About the Role
              </h2>
              <div className="space-y-5 mb-10">
                {detail.aboutParagraphs.map((p, i) => (
                  <p key={i} className="text-p1 text-[var(--color-muted)]">
                    {p}
                  </p>
                ))}
              </div>

              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-3 mb-10">
                {detail.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 mt-1 h-5 w-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <span className="text-p1 align-middle text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
                Qualifications
              </h2>
              <ul className="space-y-3">
                {detail.qualifications.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 mt-1 h-5 w-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <span className="text-p1 align-middle text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] p-6 md:p-8 h-fit">
              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-1">
                Apply Now
              </h2>
              <p className="font-[Arial] text-[16px] font-normal leading-[22px] tracking-[0px] text-[var(--color-muted)] mb-6">
                Fill in your details to apply for this position.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClass}>
                    Full Name <span className="text-[var(--color-secondary)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Email Address <span className="text-[var(--color-secondary)]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-[var(--color-secondary)]">*</span>
                  </label>
                  <div className="flex gap-3">
                    <select className={`${inputClass} w-[96px]! shrink-0`} defaultValue="+91">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Resume <span className="text-[var(--color-secondary)]">*</span>
                  </label>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click();
                    }}
                    className="cursor-pointer rounded-lg border-2 border-dashed border-[#D1D5DB] p-6 text-center hover:border-[var(--color-primary)] transition-colors"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload size={22} className="mx-auto mb-2 text-[var(--color-muted)]" />
                    {resumeFile ? (
                      <p className="font-[Arial] text-[16px] font-normal leading-[22px] tracking-[0px] text-[var(--color-ink)] truncate">
                        {resumeFile.name}
                      </p>
                    ) : (
                      <>
                        <p className="font-[Arial] text-[16px] font-bold leading-[22px] tracking-[0px] text-[var(--color-ink)]">
                          Upload Resume
                        </p>
                        <p className="font-[Arial] text-[14px] font-normal leading-[20px] tracking-[0px] text-[var(--color-muted)]">
                          PDF, DOC or DOCX (Max 5MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Cover Letter (Optional)</label>
                  <textarea
                    rows={3}
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Tell us why you're a great fit..."
                    className={`${inputClass} h-auto resize-none`}
                  />
                </div>

                <button type="submit" className="btn w-full justify-center">
                  <span className="btn__glow btn__glow--left" aria-hidden="true" />
                  <span className="btn__glow btn__glow--right" aria-hidden="true" />
                  <span className="btn__text">Submit Application</span>
                </button>
                <p className="flex items-center justify-center gap-1.5 text-center font-[Arial] text-[14px] text-[var(--color-muted)]">
                  <ShieldCheck size={14} />
                  Your information is secure with us.
                </p>
              </form>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
              Skills (Preferred)
            </h2>
            <div className="flex flex-wrap gap-3">
              {detail.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-lg bg-[var(--color-secondary)] px-4 py-1.5 text-p2-tight align-middle text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-6">
              Similar Jobs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {similarJobs.map((similarJob) => {
                const Icon = similarJob.icon;
                return (
                  <motion.div
                    key={similarJob.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-[#E5E7EB] p-5 flex flex-col shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_12px_24px_rgba(18,10,143,0.1)] transition-shadow duration-300"
                  >
                    <span className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-[#EFF6FF] text-[var(--color-primary)] mb-4">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-1">
                      {similarJob.title}
                    </h3>
                    <p className="text-p1 align-middle text-[var(--color-muted)] mb-4">
                      {similarJob.company}
                    </p>
                    <div className="border-t border-[#F3F4F6] pt-4 mt-auto flex items-center justify-between gap-3">
                      <div className="space-y-2 min-w-0">
                        <span className="flex items-center gap-1.5 text-p1 align-middle text-[var(--color-muted)] truncate">
                          <MapPin size={16} className="shrink-0 text-[var(--color-muted)]" />
                          {similarJob.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-p2-tight align-middle text-[var(--color-muted)] truncate">
                          <IndianRupee size={16} className="shrink-0 text-[var(--color-muted)]" />
                          {similarJob.type}
                        </span>
                      </div>
                      <a
                        href="#"
                        aria-label={`View details for ${similarJob.title}`}
                        className="shrink-0 w-11 h-[26px] rounded-full border border-[var(--color-secondary)] flex items-center justify-center text-[var(--color-secondary)] cursor-pointer transition-colors duration-200 hover:bg-[var(--color-secondary)] hover:text-white"
                      >
                        <ArrowUpRight width={17} height={15} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
