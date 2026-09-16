import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PillBadge from "@/components/PillBadge";
import Seo from "@/components/Seo";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={title} description={`The ${title} page is coming soon.`} noIndex />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <PillBadge text={title} animate={false} />
          <h1 className="text-h1 text-[var(--color-primary)] mb-4">Coming soon</h1>
          <p className="text-p2 text-[var(--color-muted)] mb-8">
            This page hasn&rsquo;t been designed yet — it&rsquo;s wired up and ready for its real
            content and layout.
          </p>
          <Link to="/" className="btn-primary inline-flex">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
