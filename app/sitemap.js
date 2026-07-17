import { showProjects } from "@/lib/site";

const BASE = "https://tcp-eng.com";

// Generated at build time → /sitemap.xml (referenced by robots.txt).
// Only indexable, linked pages are listed. Projects are excluded while the
// showProjects flag is off; add "/projects" here when it ships.
export default function sitemap() {
  const lastModified = new Date();
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/about/", priority: 0.8 },
    { path: "/services/", priority: 0.8 },
    { path: "/resume/", priority: 0.8 },
    { path: "/contact/", priority: 0.7 },
    ...(showProjects ? [{ path: "/projects/", priority: 0.8 }] : []),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
