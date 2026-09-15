import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Linkedin, X, Youtube } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { fadeUp, staggerContainer, revealProps } from "../../lib/motion";
import { megaMenuContact } from "../../data/site";

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin },
  { label: "X", icon: X },
  { label: "Facebook", icon: Facebook },
  { label: "YouTube", icon: Youtube },
];

const inputClass =
  "w-full h-[58.84px] rounded-[7.57px] border-[0.95px] border-[#7F7F7F] bg-white pt-[14.19px] pr-[15.13px] pb-[14.19px] pl-[15.13px] font-[Arial] text-[16px] font-normal text-[var(--color-ink)] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]";
const labelClass =
  "block mb-2 font-[Arial] text-[20.17px] font-normal leading-[27.66px] tracking-[0px] align-middle uppercase text-gray-700";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6">
        <motion.section
          variants={staggerContainer}
          {...revealProps}
          className="relative max-w-7xl mx-auto py-16 md:py-24 overflow-hidden"
        >
          <img
            src="/images/contact-bg.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
          />

          <motion.h1
            variants={fadeUp}
            className="font-[Arial] text-[44px] md:text-[64px] font-bold leading-[100%] tracking-[0px] text-[var(--color-primary)] mb-4"
          >
            Get in touch with Us.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-p1 align-middle text-[var(--color-muted)] max-w-2xl mb-12"
          >
            Let's work together to build smarter, cleaner, and more sustainable energy solutions for
            your business.
          </motion.p>

          <div className="grid gap-[73px] md:grid-cols-[1fr_435px] items-start">
            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    Your Name <span className="text-[var(--color-secondary)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
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
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Subject <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Your Message <span className="text-[var(--color-secondary)]">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={`${inputClass} h-auto py-3 resize-none`}
                />
              </div>

              <button type="submit" className="btn">
                <span className="btn__glow btn__glow--left" aria-hidden="true" />
                <span className="btn__glow btn__glow--right" aria-hidden="true" />
                <span className="btn__text">Send Now</span>
                <ArrowRight size={18} strokeWidth={1.8} className="btn__icon" />
              </button>
            </motion.form>

            <motion.aside
              variants={fadeUp}
              className="flex flex-col gap-[30px] bg-[#120A8F] text-white rounded-tl-[19.54px] rounded-tr-[70.36px] rounded-br-[19.54px] rounded-bl-[19.54px] border-t-[3.91px] border-t-[#C8102E] p-[39.09px]"
            >
              <div>
                <h3 className="text-s1 align-middle uppercase mb-4">Address</h3>
                <p className="text-p1 align-middle text-white/90">
                  IIT Madras Research Park, Kanagam Road, Taramani, Chennai 600 113, Tamil Nadu,
                  India.
                </p>
              </div>

              <div className="h-px bg-white/20" />

              <div>
                <h3 className="text-s1 align-middle uppercase mb-4">Office Hours</h3>
                <div className="space-y-2 text-p1 align-middle text-white/90">
                  <div className="flex gap-2">
                    <span className="w-[188px] shrink-0">Monday – Friday</span>
                    <span>: 09:00 – 18:00</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-[218px] shrink-0">Saturday – Sunday</span>
                    <span>: Closed</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/20" />

              <div>
                <h3 className="text-s1 align-middle uppercase mb-4">Stay Connected</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ label, icon: Icon }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] flex items-center justify-center transition-colors"
                    >
                      <Icon size={18} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.section>

        <section className="relative -mx-6 -mb-[63px] pb-[63px]">
          <div
            className="absolute inset-0 bg-[url(/images/contact-info-bg.png)] bg-cover bg-center"
            aria-hidden="true"
          />
          <motion.div
            variants={staggerContainer}
            {...revealProps}
            className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 border-t border-[#F3F4F6]"
          >
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
              <motion.div variants={fadeUp}>
                <p className="text-s1 uppercase text-[var(--color-secondary)] mb-3">Contact Info</p>
                <h2 className="text-h1-tight text-[var(--color-primary)]">
                  We are always happy to assist you
                </h2>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-s1 uppercase text-[var(--color-primary)] mb-3">
                  Email Address
                </h3>
                <div className="w-[20.25px] h-[2.25px] bg-[var(--color-muted)] mb-3" />
                <p className="text-p1 text-[var(--color-muted)]">{megaMenuContact.email}</p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-s1 uppercase text-[var(--color-primary)] mb-3">
                  Mobile Number
                </h3>
                <div className="w-[20.25px] h-[2.25px] bg-[var(--color-muted)] mb-3" />
                <p className="text-p1 text-[var(--color-muted)]">{megaMenuContact.phone}</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
