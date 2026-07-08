import Link from "next/link";
import { Chip, GitHub, ArrowRight } from "./Icons";
import { site } from "@/lib/site";

// Decorative thumbnail used in place of project photography.
// Drop a real image into /public and swap this for <img> when available.
function Thumb({ title }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-navy-700 to-navy-900">
      <div className="bg-circuit absolute inset-0 opacity-50" aria-hidden />
      <Chip width={56} height={56} className="relative text-brand-light/80" />
      <span className="absolute bottom-2 left-3 max-w-[80%] truncate text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400">
        {title}
      </span>
    </div>
  );
}

export default function ProjectCard({ project, showHighlights = false }) {
  return (
    <article className="card card-hover flex h-full flex-col">
      <Thumb title={project.title} />

      <h3 className="mt-5 text-lg font-bold text-white">{project.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.blurb}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded border border-brand/30 bg-brand/10 px-2 py-0.5 text-[0.7rem] font-medium text-brand-light"
          >
            {t}
          </span>
        ))}
      </div>

      {showHighlights && (
        <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
        <Link
          href={`/projects/${project.slug}/`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white"
        >
          View Project
          <ArrowRight width={16} height={16} />
        </Link>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
          className="text-slate-400 transition-colors hover:text-white"
        >
          <GitHub />
        </a>
      </div>
    </article>
  );
}
