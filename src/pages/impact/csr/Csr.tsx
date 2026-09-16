import { motion } from "framer-motion";
import {
  ArrowDown,
  Landmark,
  TrendingUp,
  Gavel,
  Handshake,
  Star,
  Building2,
  PiggyBank,
  FileText,
  ExternalLink,
  History,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomButton from "@/components/CustomButton";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { fadeUp, revealProps, staggerContainer } from "@/lib/motion";

export default function Csr() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Corporate Social Responsibility"
        description="Empowering innovation, nurturing startups, and creating impact for society through the IITM Incubation Cell's CSR initiatives."
      />
      <Navbar />
      <main className="flex-1">
        <PageHero
          heading={
            <>
              Corporate Social Responsibility <br />& Technology Incubators
            </>
          }
          description={
            <>
              Empowering innovation. Nurturing startups. Creating impact for society and driving{" "}
              <br />
              economic growth through dedicated research and academic excellence.
            </>
          }
        >
          <motion.div variants={fadeUp} className="inline-block">
            <CustomButton href="/e-prospectus.pdf" label="Download E-Prospectus" icon={ArrowDown} />
          </motion.div>
        </PageHero>

        <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:pb-28">
          <motion.div variants={staggerContainer} {...revealProps}>
            <motion.h2
              variants={fadeUp}
              className="text-h1-tight text-center align-middle text-[var(--color-primary)] mb-8"
            >
              The Role of Start-ups Today
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                variants={fadeUp}
                className="rounded-[10px] border-solid border-t-[3.85px] border-r-[0.96px] border-b-[0.96px] border-l-[0.96px] border-[#BB001B] pt-[37.27px] pr-[38.53px] pb-[38.53px] pl-[38.53px]"
              >
                <p className="text-p1 align-middle text-[var(--color-muted)]">
                  Start-ups bring cutting-edge innovation from academia, helping transfer technology
                  to industry and address society&rsquo;s growing needs.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-[10px] border-solid border-t-[3.85px] border-r-[0.96px] border-b-[0.96px] border-l-[0.96px] border-[#BB001B] pt-[37.27px] pr-[38.53px] pb-[38.53px] pl-[38.53px]"
              >
                <p className="text-p1 align-middle text-[var(--color-muted)]">
                  Start-ups bridge the technology-transfer gap, driving innovation, creating jobs,
                  and supporting economic growth.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <motion.div
            variants={staggerContainer}
            {...revealProps}
            className="grid md:grid-cols-2 gap-5"
          >
            <motion.div variants={fadeUp} className="flex flex-col">
              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-6">
                Challenges &amp; the need for a support ecosystem
              </h2>
              <p className="text-p1 text-justify align-middle text-[var(--color-muted)] mb-4">
                Funding Gap: Early-stage startups struggle to access resources and funding.
              </p>
              <p className="text-p1 text-justify align-middle text-[var(--color-muted)]">
                Need for Support: Technology and knowledge-based startups need structured support to
                grow.
              </p>
              <div className="mt-[40px] rounded-[10px] bg-[var(--color-primary)] p-8 flex gap-4 items-start">
                <Landmark className="text-white shrink-0" size={28} strokeWidth={1.75} />
                <p className="text-p1 align-middle text-white">
                  IIT Madras provides social, academic, and industrial support to build a strong
                  entrepreneurship ecosystem.
                </p>
              </div>
            </motion.div>
            <motion.img
              variants={fadeUp}
              src="/images/csr.png"
              alt="Team members collaborating at IIT Madras Incubation Cell"
              className="w-full h-full min-h-[320px] rounded-[8px] border border-[#E5E2E1] shadow-lg object-cover"
            />
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <motion.div variants={staggerContainer} {...revealProps}>
            <motion.h2
              variants={fadeUp}
              className="text-h1-tight text-center align-middle text-[var(--color-primary)] mb-12"
            >
              The CSR Route for Supporting Incubation
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-[62px] h-[62px] rounded-[11.5px] bg-[#EAE7E7] flex items-center justify-center mb-6">
                  <TrendingUp size={28} className="text-[#02005D]" />
                </div>
                <p className="text-p1 text-center align-middle text-[var(--color-muted)]">
                  CSR funding supports incubators in creating a strong, sustainable ecosystem.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-[62px] h-[62px] rounded-[11.5px] bg-[#EAE7E7] flex items-center justify-center mb-6">
                  <Gavel size={28} className="text-[#02005D]" />
                </div>
                <p className="text-p1 text-center align-middle text-[var(--color-muted)]">
                  Companies can support incubators through CSR contributions under the Companies
                  Act, 2013.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-[62px] h-[62px] rounded-[11.5px] bg-[#EAE7E7] flex items-center justify-center mb-6">
                  <Handshake size={28} className="text-[#02005D]" />
                </div>
                <p className="text-p1 text-center align-middle text-[var(--color-muted)]">
                  Direct Contributions CSR funds can directly support eligible incubators or
                  approved
                </p>
              </motion.div>
            </div>
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-[14.32px] rounded-tr-[7.69px] rounded-br-[7.69px] bg-[#FAFAFD] border-l-[3.84px] border-[#CD0222] p-[30.75px]"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-[27px] h-[27px] rounded-full bg-[#CD0222] shrink-0">
                  <Star size={14} className="text-white fill-white" />
                </span>
                <h3 className="text-s1 align-middle uppercase text-[var(--color-primary)]">
                  Recognised Incubators
                </h3>
              </div>
              <p className="text-p1 text-justify align-middle text-[var(--color-muted)]">
                IIT Madras has established two incubators recognised by Ministry of Science and
                Technology, Govt. of India, which hence qualify to receive funds from Indian and
                foreign companies operating in India as part of fulfilling their CSR obligations
                under the Companies Act 2013.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-[var(--color-primary)] py-20 md:py-28">
          <motion.div
            variants={staggerContainer}
            {...revealProps}
            className="max-w-7xl mx-auto px-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-h1-tight text-center align-middle text-white mb-6"
            >
              Funds for Technology Incubators Get CSR Status
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-p1 text-center align-middle text-[#F3F0EF] mb-16 max-w-[1121px] mx-auto"
            >
              A vibrant entrepreneurial ecosystem needs strong capital inflows to fuel startups to
              become enterprises. In collaboration with corporates, IITM incubators aim to promote
              Incubators as Entrepreneurial hubs with intimate industry involvement.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-9">
              <motion.div variants={fadeUp} className="rounded-[8px] bg-white p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 size={28} className="text-[#CD0222] shrink-0" />
                  <h3 className="text-s1 align-middle text-[var(--color-primary)]">
                    Setting up the Interiors
                  </h3>
                </div>
                <ul className="flex flex-col gap-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="mt-[3px] flex items-center justify-center w-5 h-5 rounded-full bg-[#CD0222] shrink-0">
                      <Check size={12} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="text-p1 align-middle text-[var(--color-muted)]">
                      Total built-up area: 74012 sq ft covering Blocks A, B & D
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[3px] flex items-center justify-center w-5 h-5 rounded-full bg-[#CD0222] shrink-0">
                      <Check size={12} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="text-p1 align-middle text-[var(--color-muted)]">
                      Cost: ~ Rs 20 crore
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[3px] flex items-center justify-center w-5 h-5 rounded-full bg-[#CD0222] shrink-0">
                      <Check size={12} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="text-p1 align-middle text-[var(--color-muted)]">
                      Corporates can provide partial funding (individual blocks) and there&rsquo;s
                      possibility of naming rights.
                    </p>
                  </li>
                </ul>
                <a
                  href="/e-prospectus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-p1 align-middle text-[#CD0222] hover:underline w-fit"
                >
                  <FileText size={20} />
                  E-prospectus link
                  <ExternalLink size={16} />
                </a>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-[8px] bg-white border border-[#FFDAD7] p-10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <PiggyBank size={28} className="text-[#CD0222] shrink-0" />
                  <h3 className="text-s1 align-middle text-[var(--color-primary)]">
                    IITM Startup Fund
                  </h3>
                </div>
                <ul className="flex flex-col gap-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="mt-[3px] flex items-center justify-center w-5 h-5 rounded-full bg-[#CD0222] shrink-0">
                      <Check size={12} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="text-p1 align-middle text-[var(--color-muted)]">
                      The Fund is governed by a Fund Advisory Body (IITM Director is the
                      Chairperson), and fund disbursal to incubatees overseen by an Investment
                      Committee.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[3px] flex items-center justify-center w-5 h-5 rounded-full bg-[#CD0222] shrink-0">
                      <Check size={12} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="text-p1 align-middle text-[var(--color-muted)]">
                      Donor companies can nominate members to participate as Invitees and make
                      recommendations to the fund committee.
                    </p>
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href="/e-prospectus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-p1 align-middle text-[#CD0222] hover:underline w-fit"
                  >
                    <FileText size={20} />
                    E-prospectus: PDF Link
                    <ExternalLink size={16} />
                  </a>
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 text-p1 align-middle text-[#CD0222] w-fit disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <History size={18} />
                    Latest update on IITM Incubators: link
                    <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div variants={staggerContainer} {...revealProps}>
            <motion.h2
              variants={fadeUp}
              className="text-h1-tight text-center align-middle text-[var(--color-primary)] mb-4"
            >
              Together, let&rsquo;s empower innovation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-p1 text-center align-middle text-[var(--color-muted)] mb-8 max-w-[820px] mx-auto"
            >
              Support entrepreneurship and create lasting impact for society by partnering with IIT
              Madras Technology Incubators through your CSR initiatives.
            </motion.p>
            <motion.div variants={fadeUp} className="inline-block">
              <CustomButton href="/contact" label="Contact the Partnership Team" />
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
