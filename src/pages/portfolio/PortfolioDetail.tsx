import { useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import CustomButton from "../../components/CustomButton";
import { portfolioStartups } from "../../data/site";
import { portfolioDetails, type InfoRow } from "../../data/portfolioDetails";

const FALLBACK_MILESTONE_DOT: Record<string, string> = {
  start: "bg-[var(--color-primary)]",
  past: "bg-[#9CA3AF]",
  current: "bg-[var(--color-secondary)]",
};

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const startup = portfolioStartups.find((s) => s.slug === slug);
  const detail = slug ? portfolioDetails[slug] : undefined;
  const related = detail?.relatedProject;
  const relatedVideoRef = useRef<HTMLVideoElement>(null);

  function playRelatedVideo() {
    relatedVideoRef.current?.play().catch(() => {});
  }

  function pauseRelatedVideo() {
    const v = relatedVideoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  function handleBack() {
    if (location.key === "default") {
      navigate("/portfolio");
    } else {
      navigate(-1);
    }
  }

  if (!startup) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <h1 className="text-h1 text-[var(--color-primary)] mb-4">Company not found</h1>
            <Link to="/portfolio" className="btn-primary inline-flex">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const infoRows: InfoRow[] = detail?.infoRows ?? [
    { label: "SECTOR", value: startup.sector },
    { label: "STATUS", value: startup.tag },
  ];
  const companyParagraphs = detail?.companyParagraphs ?? [startup.description];
  const isVideo = detail && /\.mp4$/i.test(detail.heroMedia);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-p1 align-middle text-[var(--color-muted)]"
            >
              <Link to="/" className="hover:text-[var(--color-primary)]">
                Home
              </Link>
              <ChevronRight size={18} />
              <Link to="/portfolio" className="hover:text-[var(--color-primary)]">
                Portfolio
              </Link>
              <ChevronRight size={18} />
              <span className="text-[var(--color-primary)]">{startup.name}</span>
            </nav>

            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 text-p1 align-middle text-[var(--color-primary)] hover:underline"
            >
              <ArrowLeft size={20} /> Back
            </button>
          </div>

          <div className="border-[1.05px] border-[#E5E7EB] rounded-2xl p-6 md:p-10">
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="w-[166px] h-[85px] rounded-[18px] shrink-0 border border-[#E5E7EB] overflow-hidden">
                {startup.logo ? (
                  <img
                    src={`/images/portfolio/${startup.logo}`}
                    alt={`${startup.name} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <ImagePlaceholder label={startup.name} variant="dark" />
                )}
              </div>
              <div>
                <h1 className="text-h1-tight align-middle text-[var(--color-primary)] mb-1">
                  {startup.name}
                </h1>
                <p className="text-p1 align-middle text-[var(--color-muted)]">
                  {detail?.tagline ?? startup.description}
                </p>
              </div>
            </div>

            <div className="mb-16">
              {infoRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-3 border-b border-[#F1F1F1]"
                >
                  <span className="text-s1 align-middle uppercase text-[var(--color-primary)]">
                    {row.label}:
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-p1 align-middle text-[var(--color-primary)] hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span
                      className={`flex items-center gap-2 text-p1 align-middle ${
                        row.tone === "accent"
                          ? "text-[var(--color-primary)]"
                          : row.tone === "success"
                            ? "text-[var(--color-accent)]"
                            : "text-[var(--color-ink)]"
                      }`}
                    >
                      {row.tone === "success" && (
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                      )}
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <section className="pb-16">
              <h2 className="text-h1-tight text-center align-middle text-[var(--color-primary)] inline-block border-b-[2.25px] border-[#0F0F8C] pb-2 mb-6">
                Company
              </h2>

              <div className="space-y-5 mb-10">
                {companyParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-p1 text-justify align-middle text-[var(--color-muted)]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {detail && (
                <div className="grid md:grid-cols-[1fr_369px] gap-6 mb-10">
                  <div className="border-[1.05px] border-[#E5E7EB] rounded-2xl overflow-hidden">
                    <div className="p-5">
                      <div
                        className="relative mx-auto w-full overflow-hidden rounded-[11.25px]"
                        style={{
                          maxWidth: "864.74px",
                          maxHeight: "540px",
                          aspectRatio: "782 / 488",
                        }}
                      >
                        {isVideo ? (
                          <video
                            src={`/images/portfolio/${detail.heroMedia}`}
                            muted
                            loop
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={`/images/portfolio/${detail.heroMedia}`}
                            alt={startup.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                        <span className="absolute left-3 top-3 rounded-md bg-[var(--color-accent)] px-2 py-2 text-[13px] font-medium text-white">
                          {detail.heroTag}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_277px] items-start gap-x-[56px] p-5">
                      <div>
                        <p className="text-eyebrow align-middle uppercase text-[var(--color-secondary)] mb-1">
                          {detail.productHighlight.eyebrow}
                        </p>
                        <h3 className="text-s1 align-middle uppercase text-[var(--color-ink)] mb-1">
                          {detail.productHighlight.title}
                        </h3>
                        <p className="text-p1 align-middle text-[var(--color-muted)]">
                          {detail.productHighlight.description}
                        </p>
                      </div>
                      <CustomButton
                        href="#"
                        label={detail.productHighlight.ctaLabel}
                        variant="secondary"
                        icon={false}
                        width="277px"
                        className="justify-self-end"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#1a1470] to-[var(--color-primary)] p-6 text-white">
                    <div>
                      <p className="mb-2 text-eyebrow align-middle uppercase text-white/70">
                        {detail.heritage.eyebrow}
                      </p>
                      <h3 className="mb-3 text-s1 align-middle uppercase">
                        {detail.heritage.title}
                      </h3>
                      <p className="text-p1 align-middle text-white/85">
                        {detail.heritage.description}
                      </p>
                    </div>
                    <CustomButton
                      href="#"
                      label={detail.heritage.ctaLabel}
                      icon={false}
                      width="100%"
                      className="mt-6 justify-center"
                    />
                  </div>
                </div>
              )}

              {detail?.operationsParagraph && (
                <p className="max-w-5xl border-t border-[#F1F1F1] pt-8 text-p1 text-justify align-middle text-[var(--color-muted)]">
                  {detail.operationsParagraph}
                </p>
              )}
            </section>

            {detail && detail.flagshipItems.length > 0 && (
              <section className="pb-16">
                <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-6">
                  {detail.flagshipTitle}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {detail.flagshipItems.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border-[1.05px] border-[#E5E7EB] p-[18px]"
                    >
                      <p
                        className="mb-2 text-s1 align-middle uppercase"
                        style={{ color: item.categoryColor }}
                      >
                        {item.category}
                      </p>
                      <h3 className="mb-1 text-eyebrow align-middle uppercase text-[var(--color-ink)]">
                        {item.name}
                      </h3>
                      <p className="mb-4 text-p2-tight align-middle text-[var(--color-muted)]">
                        {item.description}
                      </p>
                      <div className="space-y-2 border-t border-[#F1F1F1] pt-4">
                        {item.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="flex items-center justify-between text-[14px]"
                          >
                            <span className="text-p2-tight align-middle text-[var(--color-muted)]">
                              {stat.label}:
                            </span>
                            <span className="text-p2-tight align-middle text-[var(--color-ink)]">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {detail && detail.milestones.length > 0 && (
              <section>
                <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-8">
                  {detail.milestonesTitle}
                </h2>
                <ol className="relative max-w-3xl space-y-8 border-l-2 border-[#E5E7EB] pl-8">
                  {detail.milestones.map((m) => (
                    <li key={m.year} className="relative">
                      <span
                        className={`absolute -left-[calc(2rem+10px)] top-1 h-[18px] w-[18px] rounded-full border-[2.25px] border-white ${FALLBACK_MILESTONE_DOT[m.state]}`}
                      />
                      <p
                        className={`mb-1 text-p1 align-middle ${
                          m.state === "current"
                            ? "text-[var(--color-secondary)]"
                            : "text-[var(--color-muted)]"
                        }`}
                      >
                        {m.year}
                      </p>
                      <h3 className="mb-1 text-p1 align-middle text-[var(--color-ink)]">
                        {m.title}
                      </h3>
                      <p className="text-p1 align-middle text-[var(--color-muted)]">
                        {m.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {related && (
            <section className="pt-16">
              <h2 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-8">
                Relevant Projects
              </h2>
              <div className="grid md:grid-cols-[1fr_386px] gap-[24px] items-start">
                <div>
                  <p className="text-eyebrow align-middle uppercase text-[var(--color-secondary)] mb-2">
                    {related.location} · {related.year}
                  </p>
                  <h3 className="text-s1 align-middle uppercase text-[var(--color-primary)] mb-3">
                    {related.name}
                  </h3>
                  <p className="whitespace-pre-line text-p1 align-middle text-[var(--color-muted)] mb-6">
                    {related.description}
                  </p>
                  <CustomButton href="#" label="View Project" />
                </div>

                <div className="rounded-[26px] border border-[#7F7F7F]/50 bg-white p-2">
                  <div
                    className="h-[268px] max-h-[268px] overflow-hidden rounded-[19px]"
                    onMouseEnter={playRelatedVideo}
                    onMouseLeave={pauseRelatedVideo}
                    onClick={playRelatedVideo}
                  >
                    {/\.mp4$/i.test(related.media) ? (
                      <video
                        ref={relatedVideoRef}
                        src={`/images/portfolio/${related.media}`}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={`/images/portfolio/${related.media}`}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <p className="py-4 text-center text-s1 align-middle uppercase text-[var(--color-primary)]">
                    {related.name}
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
