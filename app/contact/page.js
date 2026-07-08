import PageHeader from "@/components/PageHeader";
import { Mail, MapPin, LinkedIn, GitHub } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with TCP ENG for embedded systems, firmware, and PCB design work. Contract, freelance, and consulting inquiries welcome.",
};

const projectTypes = [
  "Embedded Firmware",
  "PCB Design",
  "Wireless / IoT",
  "Hardware Bring-Up",
  "Full Product Development",
  "Design Review / Consulting",
  "Other",
];

const budgetRanges = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-navy-800";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Something"
        subtitle="Tell me about your project. I respond to all serious inquiries within a couple of business days."
      />

      <section className="bg-slate-50 py-16 text-navy-900 sm:py-20">
        <div className="container-tcp grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            {/*
              Form delivery: replace YOUR_FORM_ID with a Formspree form ID
              (https://formspree.io) — or swap the action for Netlify Forms / Web3Forms.
              The static export works with any of these providers.
            */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name *</label>
                  <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Company</label>
                  <input id="company" name="company" type="text" className={inputClass} placeholder="Company (optional)" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone</label>
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Phone (optional)" />
                </div>
                <div>
                  <label htmlFor="projectType" className={labelClass}>Project Type</label>
                  <select id="projectType" name="projectType" className={inputClass} defaultValue="">
                    <option value="" disabled>Select a type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget Range</label>
                  <select id="budget" name="budget" className={inputClass} defaultValue="">
                    <option value="" disabled>Select a range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="description" className={labelClass}>Project Description *</label>
                <textarea id="description" name="description" rows={6} required className={inputClass} placeholder="Describe your project, timeline, and what you need help with." />
              </div>
              <button type="submit" className="btn-primary justify-self-start">
                Send Message
              </button>
            </form>
          </div>

          {/* Direct contact */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold">Direct Contact</h2>
              <ul className="mt-4 space-y-3.5 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand/10 text-brand"><Mail width={18} height={18} /></span>
                  <a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand/10 text-brand"><LinkedIn /></span>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand">LinkedIn</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand/10 text-brand"><GitHub /></span>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand">GitHub</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand/10 text-brand"><MapPin width={18} height={18} /></span>
                  <span>{site.location}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand/20 bg-brand/5 p-6">
              <h3 className="font-bold text-navy-900">Prefer email?</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Send a note directly to{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">{site.email}</a>{" "}
                and I&apos;ll get back to you.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
