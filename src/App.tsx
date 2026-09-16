import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import RouteLoading from "./components/RouteLoading";

const Home = lazy(() => import("./pages/home/Home"));
const ComingSoon = lazy(() => import("./pages/coming-soon/ComingSoon"));
const About = lazy(() => import("./pages/about/About"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const PortfolioDetail = lazy(() => import("./pages/portfolio/PortfolioDetail"));
const Programs = lazy(() => import("./pages/programs/Programs"));
const ProgramDetail = lazy(() => import("./pages/programs/ProgramDetail"));
const MediaMention = lazy(() => import("./pages/impact/media-mention/MediaMention"));
const Csr = lazy(() => import("./pages/impact/csr/Csr"));
const FundRaising = lazy(() => import("./pages/impact/fund-raising/FundRaising"));
const Newsletter = lazy(() => import("./pages/insights/newsletter/Newsletter"));
const NewsletterDetail = lazy(() => import("./pages/insights/newsletter/NewsletterDetail"));
const Blog = lazy(() => import("./pages/insights/blog/Blog"));
const BlogDetail = lazy(() => import("./pages/insights/blog/BlogDetail"));
const Careers = lazy(() => import("./pages/careers/Careers"));
const JobDetail = lazy(() => import("./pages/careers/JobDetail"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/impact" element={<ComingSoon title="Impact" />} />
            <Route path="/impact/media-mention" element={<MediaMention />} />
            <Route path="/impact/csr" element={<Csr />} />
            <Route path="/impact/fund-raising" element={<FundRaising />} />
            <Route path="/insights" element={<ComingSoon title="Insights" />} />
            <Route path="/insights/newsletter" element={<Newsletter />} />
            <Route path="/insights/newsletter/:slug" element={<NewsletterDetail />} />
            <Route path="/insights/blog" element={<Blog />} />
            <Route path="/insights/blog/:slug" element={<BlogDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<JobDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<ComingSoon title="Login" />} />
            <Route path="/apply" element={<ComingSoon title="Apply Now" />} />
            <Route path="/privacy" element={<ComingSoon title="Privacy" />} />
            <Route path="/terms" element={<ComingSoon title="Terms" />} />
            <Route path="/accessibility" element={<ComingSoon title="Accessibility" />} />
            <Route path="*" element={<ComingSoon title="Not found" />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
