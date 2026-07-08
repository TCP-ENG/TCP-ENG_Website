"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardLarge from "./ProjectCardLarge";

// Client-side projects explorer: filter by technology tag + toggle between
// the compact card (existing) and the detailed card (redesign).
export default function ProjectsExplorer({ projects }) {
  const [activeTag, setActiveTag] = useState("All");
  const [view, setView] = useState("compact"); // "compact" | "detailed"

  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((p) => p.tags?.includes(activeTag)),
    [projects, activeTag]
  );

  return (
    <section className="bg-navy-950 py-14 sm:py-20">
      <div className="container-tcp">
        {/* Controls */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => {
              const on = t === activeTag;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                    on
                      ? "border-brand bg-brand text-white"
                      : "border-white/10 bg-navy-800/60 text-slate-400 hover:border-brand/40 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          {/* View toggle */}
          <div className="inline-flex shrink-0 rounded-md border border-white/10 bg-navy-800/60 p-1">
            {[
              ["compact", "Compact"],
              ["detailed", "Detailed"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setView(key)}
                className={`rounded px-3 py-1 text-sm font-semibold transition-colors ${
                  view === key ? "bg-brand text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="mt-6 text-sm text-slate-500">
          {filtered.length} project{filtered.length === 1 ? "" : "s"}
          {activeTag !== "All" && (
            <>
              {" "}
              tagged <span className="text-brand-light">{activeTag}</span>
            </>
          )}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) =>
              view === "compact" ? (
                <ProjectCard key={p.slug} project={p} showHighlights />
              ) : (
                <ProjectCardLarge key={p.slug} project={p} />
              )
            )}
          </div>
        ) : (
          <p className="mt-10 text-center text-slate-400">
            No projects match that filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
