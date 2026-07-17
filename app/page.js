import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import Avatar from "@/components/Avatar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { ArrowRight, Download, Mail, MapPin, LinkedIn, GitHub, iconMap } from "@/components/Icons";
import { site, services, projects, showProjects } from "@/lib/site";

export const metadata = {
  // Absolute title keeps the full brand headline on the home page (bypasses the
  // "%s | TCP ENG" template used by inner pages).
  title: { absolute: "TCP ENG — Engineering Reliable Embedded Solutions" },
  description:
    "Custom embedded systems, firmware, and PCB design from concept to production. 20+ years across automotive, industrial, HVAC, marine, IoT, and power electronics.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "TCP ENG — Engineering Reliable Embedded Solutions",
    description:
      "Custom embedded systems, firmware development, and PCB design from concept to production. 20+ years of embedded engineering.",
    type: "website",
    locale: "en_US",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="bg-circuit absolute inset-0 opacity-70" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-transparent" aria-hidden />
        <div className="container-tcp relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <p className="eyebrow">
              <span className="h-px w-10 bg-brand" />
              {site.name}
              <span className="h-px w-10 bg-brand/40" />
            </p>
            <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering
              <br />
              Reliable
              <br />
              <span className="text-brand-light">Embedded Solutions</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-300">{site.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {showProjects && (
                <Link href="/projects/" className="btn-primary">
                  View Projects <ArrowRight width={18} height={18} />
                </Link>
              )}
              <Link href="/services/" className={showProjects ? "btn-outline" : "btn-primary"}>
                Services
              </Link>
              <a href={site.resume} download className="btn-outline">
                Download Resume <Download width={18} height={18} />
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <HeroVisual className="w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ---------- About + Services preview ---------- */}
      <section className="bg-slate-50 py-16 text-navy-900 sm:py-20">
        <div className="container-tcp grid gap-12 lg:grid-cols-[320px_1fr]">
          {/* About card */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Avatar size={210} />
            <h2 className="mt-6 text-2xl font-bold">
              Hi, I&apos;m <span className="text-brand">Travis Priest</span>
            </h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand">
              Founder | {site.name}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              I&apos;m an embedded systems engineer with a passion for solving complex problems and
              building reliable, innovative products. I specialize in firmware development, PCB
              design, hardware bring-up, and system integration.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <Mail width={18} height={18} className="text-brand" />
                <a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <LinkedIn className="text-brand" />
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                  {site.linkedinLabel}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <GitHub className="text-brand" />
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                  {site.githubLabel}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin width={18} height={18} className="text-brand" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>

          {/* Services grid */}
          <div className="grid gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              return <HomeServiceTile key={s.slug} service={s} />;
            })}
          </div>
        </div>
      </section>

      {/* ---------- Featured projects (disabled while showProjects is false) ---------- */}
      {showProjects && (
        <section className="bg-navy-950 py-16 sm:py-20">
          <div className="container-tcp">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-accent" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/projects/" className="btn-outline">
                View All Projects <ArrowRight width={18} height={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ---------- CTA ---------- */}
      <CTASection />
    </>
  );
}

// Light-themed service tile used in the home About/Services band
function HomeServiceTile({ service }) {
  const Icon = iconMap[service.icon];
  return (
    <div className="group bg-slate-50 p-6 transition-colors hover:bg-white">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
        {Icon ? <Icon width={24} height={24} /> : null}
      </span>
      <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-navy-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
    </div>
  );
}
