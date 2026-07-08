import Link from "next/link";
import Logo from "./Logo";
import { Mail, MapPin, LinkedIn, GitHub } from "./Icons";
import { site, showProjects } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  ...(showProjects ? [{ label: "Projects", href: "/projects/" }] : []),
  { label: "Resume", href: "/resume/" },
  { label: "Contact", href: "/contact/" },
];

const serviceLinks = [
  "Firmware Development",
  "PCB Design",
  "Hardware Bring-Up",
  "System Integration",
  "Consulting",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="container-tcp grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-slate-400">
            {site.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-800 text-slate-300 transition-colors hover:bg-brand hover:text-white"
            >
              <LinkedIn />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-800 text-slate-300 transition-colors hover:bg-brand hover:text-white"
            >
              <GitHub />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-800 text-slate-300 transition-colors hover:bg-brand hover:text-white"
            >
              <Mail width={18} height={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 transition-colors hover:text-brand-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((l) => (
              <li key={l}>
                <Link href="/services/" className="text-slate-400 transition-colors hover:text-brand-light">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2.5">
              <Mail width={18} height={18} className="text-brand-light" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-light">{site.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <LinkedIn className="text-brand-light" />
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-light">
                {site.linkedinLabel}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin width={18} height={18} className="text-brand-light" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-tcp flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} TCP ENG. All rights reserved.</p>
          <p>Built with passion. Engineered with precision.</p>
        </div>
      </div>
    </footer>
  );
}
