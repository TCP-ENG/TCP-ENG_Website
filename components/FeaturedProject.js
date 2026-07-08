import Link from "next/link";
import { Chip, ArrowRight, GitHub } from "./Icons";
import { site } from "@/lib/site";

// Large highlighted hero card for one standout project.
export default function FeaturedProject({ project }) {
  if (!project) return null;
  const summary = project.overview || project.blurb;

  return (
    <section className="bg-navy-950 pb-4 pt-14 sm:pt-16">
      <div className="container-tcp">
        <p className="eyebrow mb-6">
          <span className="h-px w-8 bg-brand" />
          Featured Project
        </p>

        <article className="grid overflow-hidden rounded-xl border border-white/5 bg-navy-800/60 md:grid-cols-2">
          {/* Visual */}
          <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-700 to-navy-950">
            <div className="bg-circuit absolute inset-0 opacity-60" aria-hidden />
            <Chip width={96} height={96} className="relative text-brand-light/80" />
            {project.status && (
              <span className="absolute left-4 top-4 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-light">
                {project.status}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-400">{summary}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {(project.technologies || project.tags || []).map((t) => (
                <span
                  key={t}
                  className="rounded border border-brand/30 bg-brand/10 px-2 py-0.5 text-[0.7rem] font-medium text-brand-light"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={`/projects/${project.slug}/`} className="btn-primary">
                View Case Study
                <ArrowRight width={18} height={18} />
              </Link>
              <a
                href={project.links?.github || site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
              >
                <GitHub width={18} height={18} />
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
