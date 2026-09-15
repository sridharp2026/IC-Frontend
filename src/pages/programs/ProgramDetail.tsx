import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Briefcase, MapPin, Users, Clock, Tag, Landmark, Check } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import ApplyModal from "../../components/ApplyModal";
import { programs } from "../../data/site";
import { programDetails, type ProgramDetailRow } from "../../data/programDetails";

const DETAIL_ICON: Record<ProgramDetailRow["icon"], typeof Briefcase> = {
  date: Briefcase,
  location: MapPin,
  mode: Users,
  deadline: Clock,
  type: Tag,
  organizer: Landmark,
};

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();

  const program = programs.find((p) => p.slug === slug);
  const detail = slug ? programDetails[slug] : undefined;
  const [applyOpen, setApplyOpen] = useState(false);

  if (!program || !detail) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <h1 className="text-h1 text-[var(--color-primary)] mb-4">Program not found</h1>
            <Link to="/programs" className="btn-primary inline-flex">
              Back to Programs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20 md:pb-28">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-p1 align-middle text-[var(--color-muted)] mb-8"
          >
            <Link to="/programs" className="hover:text-[var(--color-primary)]">
              Program
            </Link>
            <ChevronRight size={18} />
            <span className="text-[var(--color-primary)]">Program Detail</span>
          </nav>

          <div className="rounded-2xl border border-[#F3F4F6] p-6 md:p-10 mb-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-h1-tight align-middle text-[var(--color-primary)]">
                    {program.number}
                  </span>
                  <span className="text-p2-tight align-middle text-[var(--color-muted)]">
                    {detail.category}
                  </span>
                </div>
                <h1 className="font-[Arial] text-[64px] font-bold leading-[130%] tracking-[0px] align-middle text-[var(--color-primary)] mb-4">
                  {program.title.split("\n").map((line, i, lines) => (
                    <span key={i}>
                      {line}
                      {i < lines.length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="text-p1 text-[var(--color-muted)]">{program.description}</p>
              </div>

              <div className="rounded-xl overflow-hidden bg-[#F3F4F6] aspect-[642/321] max-w-[641px]">
                <img
                  src={`/images/programs/${detail.heroImage}`}
                  alt={`${program.title.replace(/\n/g, " ")} photo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_424px] gap-8 lg:gap-10">
            <div>
              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
                About the Program
              </h2>
              <div className="space-y-5 mb-10">
                {detail.aboutParagraphs.map((p, i) => (
                  <p key={i} className="text-p1 text-[var(--color-muted)]">
                    {p}
                  </p>
                ))}
              </div>

              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-4">
                Who Can Participate?
              </h2>
              <ul className="space-y-3">
                {detail.whoCanParticipate.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="shrink-0 h-5 w-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <span className="text-p1 align-middle text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] p-6 md:p-8 h-fit">
              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-6">
                Program Details
              </h2>
              <div className="space-y-5 mb-8">
                {detail.details.map((row) => {
                  const Icon = DETAIL_ICON[row.icon];
                  return (
                    <div key={row.label}>
                      <div className="flex items-center gap-2 text-[var(--color-primary)] mb-1">
                        <Icon size={18} strokeWidth={2} className="shrink-0" />
                        <span className="text-p1 align-middle">{row.label}</span>
                      </div>
                      <p className="pl-[21px] text-p1 align-middle text-[var(--color-muted)]">
                        {row.value}
                      </p>
                    </div>
                  );
                })}
              </div>
              <CustomButton
                href="#"
                label="Apply Now"
                width="100%"
                className="justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  setApplyOpen(true);
                }}
              />
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {detail.gallery.map((image, i) => (
                <div key={i} className="group aspect-[4/3] rounded-lg overflow-hidden bg-[#F3F4F6]">
                  <img
                    src={`/images/programs/${image}`}
                    alt={`${program.title.replace(/\n/g, " ")} gallery photo ${i + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />

      <ApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        program={{
          number: program.number,
          category: detail.category,
          title: program.title,
          description: program.description,
          image: detail.heroImage,
        }}
      />
    </div>
  );
}
