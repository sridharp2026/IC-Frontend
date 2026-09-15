import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Rocket,
  Lightbulb,
  Settings,
  TrendingUp,
  Shield,
  Users,
  Tractor,
  Microscope,
  Globe,
  Cpu,
  Presentation,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NumberFlow from "../../components/NumberFlow";
import PillBadge from "../../components/PillBadge";
import {
  journeyMilestones,
  coreValues,
  teamTabs,
  teamMembers,
  ecosystemPartners,
} from "../../data/site";

const valueIcons: Record<string, typeof Lightbulb> = {
  Lightbulb,
  Rocket,
  Settings,
  TrendingUp,
  Shield,
  Users,
};

const ecosystemIcons: Record<string, typeof Lightbulb> = {
  Tractor,
  Microscope,
  Users,
  Globe,
  Cpu,
  Presentation,
};

export default function About() {
  const [activeTeamTab, setActiveTeamTab] = useState(teamTabs[0]);
  const activeMembers = teamMembers[activeTeamTab] ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6">
        <div className="text-center max-w-7xl mx-auto pt-12">
          <h1 className="font-[Arial] text-[64px] font-bold leading-[100%] tracking-[0px] text-center align-middle text-[var(--color-primary)] mb-4">
            Driven by Innovation, <br />Built for Impact
          </h1>
          <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] text-center align-middle text-[var(--color-muted)] mb-8 max-w-[1121px] mx-auto">
            IITM Incubation Cell gives ambitious founders access to the talent, sophisticated technologies, and investment needed at every stage of the journey.
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-18">
          <div className="grid grid-cols-1 md:grid-cols-[708fr_501fr] gap-x-[21px] gap-y-[25px]">
            <div className="group rounded-[33px] overflow-hidden aspect-[708/471] md:aspect-auto md:row-span-2 shadow-[0px_26.12px_52.25px_-12.54px_#00000040]">
              <img
                src="/images/about-us-banner.jpg"
                alt="IITM Incubation Cell team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group rounded-[33px] overflow-hidden aspect-[501/250.781] shadow-[0px_8.36px_10.45px_-6.27px_#0000001A,0px_20.9px_26.12px_-5.22px_#0000001A]">
              <img
                src="/images/IC-Office.png"
                alt="IITM Incubation Cell office"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-[17px]">
              <div className="rounded-[33px] bg-[#120A8F] text-white p-6 md:p-8 flex flex-col justify-center shadow-[0px_4.18px_6.27px_-4.18px_#0000001A,0px_10.45px_15.67px_-3.13px_#0000001A]">
                <p className="font-[Arial] text-[18px] font-normal leading-[25px] tracking-[0px] align-middle mb-4 max-w-[158px] text-white/80">
                  A growing portfolio of ambitious ventures.
                </p>
                <NumberFlow
                  value="500+"
                  className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle uppercase"
                />
                <p className="font-[Arial] text-[18px] font-normal leading-[16.88px] tracking-[0px] align-middle capitalize text-white/70">
                  Startups Incubated
                </p>
              </div>
              <div className="rounded-[33px] bg-white border border-[#F3F4F6] p-6 md:p-8 flex flex-col justify-center text-[var(--color-muted)] shadow-[0px_1.04px_2.09px_0px_#0000000D]">
                <p className="font-[Arial] text-[18px] font-normal leading-[25px] tracking-[0px] align-middle mb-4">
                  Where founders, industry and capital come together.
                </p>
                <NumberFlow
                  value="13+ YEARS"
                  className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle uppercase text-[var(--color-primary)]"
                />
                <p className="font-[Arial] text-[18px] font-normal leading-[16.88px] tracking-[0px] align-middle">
                  Of Enabling Innovation
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="relative py-20 md:py-28 overflow-hidden">
          <img
            src="/images/our-journey-bg.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-70"
          />

          <div className="relative text-center mb-16 md:mb-20">
            <PillBadge text="Our Journey" animate={false} />
            <h2 className="font-[Arial] text-[44px] font-bold leading-[100%] tracking-[0px] text-center align-middle text-[var(--color-primary)]">
              Milestones That Moved Us Forward
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-primary)]/15 -translate-x-1/2"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-16 md:gap-20">
              {journeyMilestones.map((milestone, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={milestone.year}
                    className="relative grid grid-cols-2 gap-x-10 md:gap-x-16"
                  >
                    <span
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-[#02005D] border-[4.5px] border-[#F6F3F2]"
                      aria-hidden="true"
                    />
                    <div
                      className={
                        isLeft
                          ? "col-start-1 text-right pr-2"
                          : "col-start-2 text-left pl-2"
                      }
                    >
                      <div className="font-[Arial] text-[44px] font-bold leading-[54px] tracking-[0px] align-middle text-[var(--color-secondary)] mb-1">
                        {milestone.year}
                      </div>
                      <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-muted)]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            <div className="rounded-[30px] overflow-hidden">
              <img
                src="/images/about-us.jpg"
                alt="IITM Incubation Cell space"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <PillBadge text="About Us" animate={false} />
              <h2 className="font-[Arial] text-[44px] font-bold leading-[100%] tracking-[0px] align-middle text-[var(--color-primary)] mb-6">
                Where Ambition Finds Momentum
              </h2>
              <div className="space-y-4">
                <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-justify text-[var(--color-muted)]">
                  Founded in 2013 within the IIT Madras Research Park in
                  Chennai, the IIT Madras Incubation Cell (IITMIC) has been
                  set up with an aim of converting innovative and disruptive
                  technology ideas into successful startups. An initiative
                  from IIT Madras&rsquo; research and entrepreneurial
                  community, the IITMIC comprises students, faculty members,
                  researchers, alumni as well as independent entrepreneurs.
                </p>
                <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-justify text-[var(--color-muted)]">
                  Being a technology business incubator, the IITMIC offers
                  mentorship, infrastructure, industrial connections and
                  investment opportunities to the startups. With time, the
                  IITMIC has grown into one of the crucial elements of one of
                  India&rsquo;s most active deep-tech startup communities.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-16 md:mt-20">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[30px] border border-[#F3F4F6] bg-[#FAFAFB] p-8"
            >
              <div className="w-[54px] h-[54px] rounded-2xl bg-[#FCE4EC] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[var(--color-secondary)]">
                <Eye
                  size={22}
                  className="text-[var(--color-secondary)] transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle text-[var(--color-primary)] uppercase mb-3">
                Our Vision
              </h3>
              <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-muted)]">
                To advance technology-led entrepreneurship and build ventures
                that contribute to economic, societal and global progress.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[30px] border border-[#F3F4F6] bg-[#FAFAFB] p-8"
            >
              <div className="w-[54px] h-[54px] rounded-2xl bg-[#FCE4EC] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[var(--color-secondary)]">
                <Rocket
                  size={22}
                  className="text-[var(--color-secondary)] transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle text-[var(--color-primary)] uppercase mb-3">
                Our Mission
              </h3>
              <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-muted)]">
                To translate innovation and research into impactful
                enterprises by connecting talent, technology, industry,
                infrastructure and investment.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto pb-20 md:pb-28 overflow-hidden">
          <img
            src="/images/values-bg.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-70"
          />

          <div className="relative text-center mb-16">
            <PillBadge text="Values" animate={false} />
            <h2 className="font-[Arial] text-[44px] font-bold leading-[100%] tracking-[0px] text-center align-middle text-[var(--color-primary)] mb-4">
              Our Core Values
            </h2>
            <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] text-center align-middle text-[var(--color-muted)]">
              The advantage of partnering with IITM Incubation Cell.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-5">
            {coreValues.map((value) => {
              const Icon = valueIcons[value.icon] ?? Lightbulb;
              return (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl border border-[#F3F4F6] shadow-[0px_1.03px_2.07px_0px_#0000000D] bg-white p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
                    <Icon
                      size={22}
                      className="text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <h3 className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle text-[var(--color-primary)] uppercase mb-3">
                    {value.title}
                  </h3>
                  <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-muted)]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto pb-20 md:pb-28">
          <div className="text-center mb-10">
            <PillBadge text="Our Team" animate={false} />
            <h2 className="font-[Arial] text-[44px] font-bold leading-[100%] tracking-[0px] text-center align-middle text-[var(--color-primary)] mb-4">
              Meet Our Team
            </h2>
            <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] text-center align-middle text-[var(--color-muted)]">
              The artistry and intelligence behind every project.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center items-center gap-[19px] bg-white border border-gray-100 rounded-full px-[41px] py-2 shadow-[0px_12px_10px_0px_#6666661A,0px_0px_10px_0px_#6666661A]">
              {teamTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTeamTab(tab)}
                  className={`px-6 py-2.5 rounded-full font-[Arial] text-[24px] leading-[32.9px] tracking-[0px] transition-colors cursor-pointer ${
                    activeTeamTab === tab
                      ? "font-bold bg-[var(--color-primary)] text-white"
                      : "font-normal text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeMembers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {activeMembers.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group w-[290px] h-full rounded-[29px] border border-[#F3F4F6] shadow-[0px_1.03px_2.07px_0px_#0000000D] overflow-hidden flex flex-col mx-auto"
                >
                  <div className="h-[295px] bg-[#7F7F7F] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-[Arial] text-[24px] font-bold leading-[32.9px] tracking-[0px] text-center align-middle text-[var(--color-primary)] uppercase mb-1">
                      {member.name}
                    </h3>
                    <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] text-center align-middle text-[var(--color-muted)]">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-p1 text-[var(--color-muted)] py-12">
              More {activeTeamTab} members coming soon.
            </p>
          )}
        </section>

        <section className="max-w-7xl mx-auto pb-20 md:pb-28">
          <div className="text-center mb-14">
            <PillBadge text="Ecosystem" animate={false} />
            <h2 className="font-[Arial] text-[44px] font-bold leading-[100%] tracking-[0px] text-center align-middle text-[var(--color-primary)] mb-4">
              A Multi-Sector Innovation Hub
            </h2>
            <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] text-center align-middle text-[var(--color-muted)] max-w-[820px] mx-auto">
              IITM has nurtured several specialized incubators and student
              bodies dedicated to specific sectors and stages of the
              entrepreneurial journey.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {ecosystemPartners.map((partner) => {
              const Icon = ecosystemIcons[partner.icon] ?? Globe;
              return (
                <motion.div
                  key={partner.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-start gap-6 rounded-2xl border border-[#F3F4F6] bg-[#FAFAFB] p-6 md:p-8"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FCE4EC] flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-secondary)]">
                    <Icon
                      size={22}
                      className="text-[var(--color-secondary)] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] align-middle text-[var(--color-primary)] mb-1">
                      {partner.title}
                    </h3>
                    <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] text-justify align-middle text-[var(--color-muted)]">
                      {partner.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
