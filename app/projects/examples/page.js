import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "@/components/Icons";
import { exampleProjects } from "@/lib/site";

// Internal test index for the project-page template, one entry per project type.
// Not linked in the nav and excluded from search engines.
export const metadata = {
  title: "Project Template — Examples",
  description: "Internal test: example project pages, one per project type.",
  robots: { index: false, follow: false },
};

export default function ExampleProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Test"
        title="Project Template Examples"
        subtitle="One worked example per project type — used to exercise the /projects/<slug>/ template. Not part of the live portfolio."
      />

      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="container-tcp grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exampleProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}/`}
              className="card card-hover flex flex-col"
            >
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-light">
                {p.type}
              </div>
              <h2 className="mt-2 text-lg font-bold text-white">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-brand/30 bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-light">
                View example page <ArrowRight width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
