import Link from "next/link";
import { Chip, GitHub, ArrowRight } from "./Icons";
import { site } from "@/lib/site";

// Redesigned "detailed" project card: taller thumbnail, blurb, tags,
// highlights, and a clear footer action row. Alternative to ProjectCard.
function Thumb({ title }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-700 to-navy-950">
      <div className="bg-circuit absolute inset-0 opacity-50" aria-hidden />
      <Chip width={64} height={64} className="relative text-brand-light/80" />
      <span className="absolute bottom-3 left-4 max-w-[80%] truncate text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400">
        {title}
      </span>
    </div>
  );
}

export default function ProjectCardLarge({ project }) {
  return (
    <article className="card-hover flex h-full flex-col overflow-hidden rounded-lg border border-white/5 bg-navy-800/60">
      <Thumb title={project.title} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
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

        {project.highlights?.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
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
      </div>
    </article>
  );
}
