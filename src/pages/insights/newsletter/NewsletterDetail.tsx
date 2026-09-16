import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFoundState from "@/components/NotFoundState";
import Breadcrumb from "@/components/Breadcrumb";
import Seo from "@/components/Seo";
import { newsFeed } from "@/data/site";
import { newsletterDetails } from "@/data/newsletterDetails";

export default function NewsletterDetail() {
  const { slug } = useParams<{ slug: string }>();

  const item = newsFeed.find((n) => n.slug === slug);
  const detail = slug ? newsletterDetails[slug] : undefined;

  if (!item) {
    return (
      <>
        <Seo
          title="Story not found"
          description="This newsletter story could not be found."
          noIndex
        />
        <NotFoundState
          heading="Story not found"
          backTo="/insights/newsletter"
          backLabel="Back to Newsletter"
        />
      </>
    );
  }

  const headline = detail?.headline ?? item.title;
  const bodyParagraphs = detail?.bodyParagraphs ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={headline} description={item.description} />
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20">
          <Breadcrumb
            trail={[
              { label: "Home", to: "/" },
              { label: "Insight" },
              { label: "Newsletter", to: "/insights/newsletter" },
            ]}
            current="News Detail"
            backTo="/insights/newsletter"
          />

          <span className="inline-block bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-[Arial] text-[16px] font-medium px-4 py-2 rounded-[6px] mb-4">
            Newsletter
          </span>
          <p className="text-eyebrow uppercase text-[var(--color-primary)] mb-3">{item.date}</p>
          <h1 className="font-[Arial] text-[36px] md:text-[44px] font-bold leading-[110%] tracking-[0px] text-[var(--color-primary)] mb-5">
            {headline}
          </h1>
          <p className="text-p1 align-middle text-[var(--color-muted)] mb-10">{item.description}</p>

          <img
            src={`/images/news/${detail?.bannerImage ?? item.image}`}
            alt={item.title}
            loading="lazy"
            className="w-full mx-auto mb-10"
          />

          {bodyParagraphs.length > 0 && (
            <div className="space-y-5 mb-10">
              {bodyParagraphs.map((p, i) => (
                <p key={i} className="text-p1 align-middle text-justify text-[var(--color-muted)]">
                  {p}
                </p>
              ))}
            </div>
          )}

          {detail?.quote && (
            <div className="flex gap-4 max-w-[1228px] w-full mx-auto border-l-4 border-[var(--color-primary)] bg-[#F0F7FF] rounded-r-lg p-5 mb-10">
              <span className="text-s1 uppercase text-[var(--color-primary)]">“</span>
              <div>
                <p className="font-[Arial] text-[16px] font-normal leading-[25.89px] tracking-[-0.01em] align-middle text-[var(--color-primary)] mb-3">
                  “{detail.quote.text}”
                </p>
                <p className="text-p2-tight align-middle text-[var(--color-primary)]">
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
                  loading="lazy"
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
