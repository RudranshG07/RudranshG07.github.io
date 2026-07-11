import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl md:text-9xl font-display italic text-text-primary mb-4">
        404
      </h1>
      <p className="text-muted mb-8">This page drifted off-chain.</p>
      <Link
        to="/"
        className="group relative rounded-full text-sm"
      >
        <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 border border-stroke bg-bg text-text-primary transition-colors duration-300 group-hover:border-transparent">
          Back home <span aria-hidden>→</span>
        </span>
      </Link>
    </main>
  );
}
