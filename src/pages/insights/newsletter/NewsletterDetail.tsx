import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { newsFeed } from "../../../data/site";
import { newsletterDetails } from "../../../data/newsletterDetails";
import PillBadge from "../../../components/PillBadge";

export default function NewsletterDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const item = newsFeed.find((n) => n.slug === slug);
  const detail = slug ? newsletterDetails[slug] : undefined;

  function handleBack() {
    if (location.key === "default") {
      navigate("/insights/newsletter");
    } else {
      navigate(-1);
    }
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <h1 className="text-h1 text-[var(--color-primary)] mb-4">Story not found</h1>
            <Link to="/insights/newsletter" className="btn-primary inline-flex">
              <ArrowLeft size={16} /> Back to Newsletter
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const headline = detail?.headline ?? item.title;
  const bodyParagraphs = detail?.bodyParagraphs ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-muted)]"
            >
              <Link to="/insights" className="hover:text-[var(--color-primary)]">
                Insight
              </Link>
              <ChevronRight size={18} />
              <span className="text-[var(--color-primary)]">News Detail</span>
            </nav>

            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-primary)] hover:underline"
            >
              <ArrowLeft size={20} /> Back
            </button>
          </div>

          <span className="inline-block bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-[Arial] text-[16px] font-medium px-4 py-2 rounded-[6px] mb-4">
            Newsletter
          </span>
          <p className="font-[Arial] text-[18px] font-normal leading-[16.88px] tracking-[0px] uppercase text-[var(--color-primary)] mb-3">
            {item.date}
          </p>
          <h1 className="font-[Arial] text-[36px] md:text-[44px] font-bold leading-[110%] tracking-[0px] text-[var(--color-primary)] mb-5">
            {headline}
          </h1>
          <p className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-[var(--color-muted)] mb-10">
            {item.description}
          </p>

          <img
            src={`/images/news/${detail?.bannerImage ?? item.image}`}
            alt={item.title}
            className="w-full mx-auto mb-10"
          />

          {bodyParagraphs.length > 0 && (
            <div className="space-y-5 mb-10">
              {bodyParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-[Arial] text-[24px] font-normal leading-[32.9px] tracking-[0px] align-middle text-justify text-[var(--color-muted)]"
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {detail?.quote && (
            <div className="flex gap-4 max-w-[1228px] w-full mx-auto border-l-4 border-[var(--color-primary)] bg-[#F0F7FF] rounded-r-lg p-5 mb-10">
                <span className="font-[Arial] text-[24px] font-bold leading-[37.8px] tracking-[0px] uppercase text-[var(--color-primary)]">
                  “
                </span>
              <div>
                <p className="font-[Arial] text-[16px] font-normal leading-[25.89px] tracking-[-0.01em] align-middle text-[var(--color-primary)] mb-3">
                  “{detail.quote.text}”
                </p>
                <p className="font-[Arial] text-[18px] font-normal leading-[24px] tracking-[0px] align-middle text-[var(--color-primary)]">
                  — {detail.quote.author}
                </p>
              </div>
            </div>
          )}

          {detail?.galleryImages && detail.galleryImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {detail.galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={`/images/news/${src}`}
                  alt=""
                  className="w-full max-h-[165px] aspect-[16/9] object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
