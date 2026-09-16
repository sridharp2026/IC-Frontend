import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/** Shared "not found" state for detail pages (job/portfolio/program/blog/newsletter
 * item missing or slug doesn't match). */
export default function NotFoundState({
  heading,
  backTo,
  backLabel,
}: {
  heading: string;
  backTo: string;
  backLabel: string;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-h1 text-[var(--color-primary)] mb-4">{heading}</h1>
          <Link to={backTo} className="btn-primary inline-flex">
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
