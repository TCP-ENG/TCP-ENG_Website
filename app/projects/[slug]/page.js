import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { ArrowRight, GitHub, Check } from "@/components/Icons";
import { projects, exampleProjects, site } from "@/lib/site";

// Live portfolio + isolated example/test projects (reachable by slug only).
const allProjects = [...projects, ...exampleProjects];

/*
  Individual project (case-study) page — TEMPLATE
  ------------------------------------------------------------------
  Reachable at /projects/<slug>/ for every entry in `projects` (lib/site.js).
  Renders from the project data: required fields (title, blurb, tags,
  highlights) always show; the OPTIONAL detail fields below render only
  when present, so existing projects keep working untouched.

  To turn a project into a full case study, add any of these optional
  fields to its object in lib/site.js (see the example on
  "wireless-livestock-scale"):

    role, client, duration, status   -> summary bar
    overview                         -> Overview paragraph
    challenge                        -> Challenge paragraph
    solution                         -> Solution paragraph
    results: [ "...", "..." ]        -> Results bullet list
    technologies: [ "STM32", ... ]   -> Tech tags (falls back to `tags`)
    specs: [ { label, value } ]      -> Specifications table
    architecture: "ascii diagram"    -> Architecture diagram block
    gallery: [ { title, caption, src } ] -> Image gallery
    downloads: [ { name, href } ]    -> Downloads list
    links: { github, demo }          -> External links in the hero
  ------------------------------------------------------------------
*/

// Required for `output: "export"` — pre-render one page per project.
export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.blurb,
  };
}

function SummaryBar({ project }) {
  const cells = [
    ["Role", project.role],
    ["Client", project.client],
    ["Duration", project.duration],
    ["Status", project.status],
  ].filter(([, v]) => v);
  if (cells.length === 0) return null;
  return (
    <div className="grid grid-cols-2 divide-x divide-y divide-white/5 overflow-hidden rounded-lg border border-white/5 bg-navy-800/60 sm:grid-cols-4 sm:divide-y-0">
      {cells.map(([label, value]) => (
        <div key={label} className="p-5">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {label}
          </div>
          <div className="mt-1 font-semibold text-white">{value}</div>
        </div>
      ))}
    </div>
  );
}

function Prose({ eyebrow, title, children }) {
  return (
    <section className="border-t border-white/5 bg-navy-950 py-14 sm:py-16">
      <div className="container-tcp max-w-3xl">
        <p className="eyebrow">
          <span className="h-px w-8 bg-brand" />
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 text-base leading-relaxed text-slate-400">{children}</div>
      </div>
    </section>
  );
}

export default function ProjectPage({ params }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // Keep prev/next within the same set (live vs. examples).
  const siblings = project.example ? exampleProjects : projects;
  const idx = siblings.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const techs = project.technologies || project.tags || [];

  return (
    <>
      <PageHeader eyebrow="Projects" title={project.title} subtitle={project.blurb} />

      {/* Hero meta: external links + summary bar */}
      <section className="bg-navy-950 pt-10 sm:pt-12">
        <div className="container-tcp">
          <p className="text-sm text-slate-500">
            <Link href="/projects/" className="hover:text-brand-light">
              Projects
            </Link>{" "}
            / <span className="text-slate-400">{project.title}</span>
          </p>

          {(project.links?.github || project.links?.demo) && (
            <div className="mt-5 flex flex-wrap gap-3">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <GitHub width={18} height={18} />
                  View on GitHub
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                  <ArrowRight width={18} height={18} />
                </a>
              )}
            </div>
          )}

          <div className="mt-8">
            <SummaryBar project={project} />
          </div>
        </div>
      </section>

      {project.overview && (
        <Prose eyebrow="Overview" title="Project Summary">
          <p>{project.overview}</p>
        </Prose>
      )}

      {project.challenge && (
        <Prose eyebrow="The Challenge" title="Problem Statement">
          <p>{project.challenge}</p>
        </Prose>
      )}

      {project.solution && (
        <Prose eyebrow="The Solution" title="Technical Approach">
          <p>{project.solution}</p>
        </Prose>
      )}

      {project.architecture && (
        <Prose eyebrow="Architecture" title="How It Fits Together">
          <pre className="overflow-x-auto rounded-lg border border-white/5 bg-navy-900 p-6 font-mono text-sm leading-7 text-slate-300">
            {project.architecture}
          </pre>
        </Prose>
      )}

      {/* Results — falls back to `highlights` when no explicit results */}
      {(project.results || project.highlights) && (
        <Prose eyebrow="Results" title={project.results ? "Outcome" : "Highlights"}>
          <ul className="space-y-2">
            {(project.results || project.highlights).map((r) => (
              <li key={r} className="flex items-start gap-3">
                <span className="mt-1 text-brand">
                  <Check width={18} height={18} />
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Prose>
      )}

      {techs.length > 0 && (
        <Prose eyebrow="Stack" title="Technologies Used">
          <div className="flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="rounded border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-medium text-brand-light"
              >
                {t}
              </span>
            ))}
          </div>
        </Prose>
      )}

      {project.specs?.length > 0 && (
        <Prose eyebrow="Details" title="Specifications">
          <table className="w-full overflow-hidden rounded-lg border border-white/5 text-left text-sm">
            <tbody>
              {project.specs.map((s) => (
                <tr key={s.label} className="border-b border-white/5 last:border-0">
                  <th className="w-2/5 bg-navy-800/60 px-4 py-3 font-semibold text-slate-400">
                    {s.label}
                  </th>
                  <td className="px-4 py-3 text-slate-300">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Prose>
      )}

      {project.gallery?.length > 0 && (
        <Prose eyebrow="Gallery" title="Project Gallery">
          <div className="grid gap-6 sm:grid-cols-2">
            {project.gallery.map((img) => (
              <figure
                key={img.src || img.title}
                className="overflow-hidden rounded-lg border border-white/5 bg-navy-800/60"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="aspect-[3/2] w-full object-cover"
                />
                <figcaption className="p-4">
                  <div className="font-semibold text-white">{img.title}</div>
                  {img.caption && (
                    <div className="mt-1 text-sm text-slate-400">{img.caption}</div>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </Prose>
      )}

      {project.downloads?.length > 0 && (
        <Prose eyebrow="Documents" title="Downloads">
          <ul className="space-y-2">
            {project.downloads.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-navy-800/60 px-4 py-3 font-semibold text-slate-200 hover:border-brand/40 hover:text-white"
                >
                  <span className="text-brand">↓</span>
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </Prose>
      )}

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="border-t border-white/5 bg-navy-950 py-12">
          <div className="container-tcp flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}/`}
                className="card card-hover flex-1"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  ← Previous
                </div>
                <div className="mt-1 font-semibold text-white">{prev.title}</div>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}/`}
                className="card card-hover flex-1 sm:text-right"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Next →
                </div>
                <div className="mt-1 font-semibold text-white">{next.title}</div>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
          </div>
        </section>
      )}

      <CTASection
        headline="Interested in a similar project?"
        text={`${site.name} provides embedded hardware, firmware, PCB design, and system integration services.`}
        buttonLabel="Request Consultation"
        buttonHref="/contact/"
      />
    </>
  );
}
