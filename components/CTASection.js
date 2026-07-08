import Link from "next/link";
import { Rocket, ArrowRight } from "./Icons";

export default function CTASection({
  headline = "Have a project in mind?",
  text = "Let's build something great together.",
  buttonLabel = "Get in Touch",
  buttonHref = "/contact/",
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="bg-circuit absolute inset-0 opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-transparent to-navy-900/70" aria-hidden />
      <div className="container-tcp relative flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-5">
          <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/40 text-white sm:flex">
            <Rocket width={30} height={30} />
          </span>
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
              {headline}
            </h2>
            <p className="mt-1 text-lg text-blue-100">{text}</p>
          </div>
        </div>
        <Link href={buttonHref} className="btn-white shrink-0">
          {buttonLabel}
          <ArrowRight width={18} height={18} />
        </Link>
      </div>
    </section>
  );
}
