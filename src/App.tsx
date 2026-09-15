import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import ComingSoon from "./pages/coming-soon/ComingSoon";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioDetail from "./pages/portfolio/PortfolioDetail";
import Programs from "./pages/programs/Programs";
import ProgramDetail from "./pages/programs/ProgramDetail";
import MediaMention from "./pages/impact/media-mention/MediaMention";
import Csr from "./pages/impact/csr/Csr";
import FundRaising from "./pages/impact/fund-raising/FundRaising";
import Newsletter from "./pages/insights/newsletter/Newsletter";
import NewsletterDetail from "./pages/insights/newsletter/NewsletterDetail";
import Blog from "./pages/insights/blog/Blog";
import BlogDetail from "./pages/insights/blog/BlogDetail";
import Careers from "./pages/careers/Careers";
import JobDetail from "./pages/careers/JobDetail";
import Contact from "./pages/contact/Contact";

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
        <Route path="/apply" element={<ComingSoon title="Apply Now" />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy" />} />
        <Route path="/terms" element={<ComingSoon title="Terms" />} />
        <Route path="/accessibility" element={<ComingSoon title="Accessibility" />} />
        <Route path="*" element={<ComingSoon title="Not found" />} />
      </Routes>
    </>
  );
}
