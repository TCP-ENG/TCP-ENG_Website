import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="bg-circuit absolute inset-0 opacity-60" aria-hidden />
      <div className="container-tcp relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-7xl font-extrabold text-brand-light">404</p>
        <h1 className="mt-4 text-2xl font-bold uppercase tracking-wide text-white">Page not found</h1>
        <p className="mt-2 max-w-md text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home <ArrowRight width={18} height={18} />
        </Link>
      </div>
    </section>
  );
}
