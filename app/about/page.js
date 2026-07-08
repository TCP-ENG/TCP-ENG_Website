import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Avatar from "@/components/Avatar";
import CTASection from "@/components/CTASection";
import { Mail, MapPin, LinkedIn, GitHub, ArrowRight, Download, Check } from "@/components/Icons";
import { site, showProjects } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Travis Priest is an embedded systems engineer and founder of TCP ENG, specializing in firmware development, PCB design, hardware bring-up, and system integration.",
};

const strengths = [
  "Firmware development from bare-metal to RTOS",
  "Schematic capture and multi-layer PCB layout",
  "Hardware bring-up and debugging",
  "Wireless & IoT system integration",
  "Design for manufacturing (DFM) and production support",
  "Clear documentation and design reviews",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Travis Priest"
        subtitle="Embedded systems engineer and founder of TCP ENG."
      />

      <section className="bg-slate-50 py-16 text-navy-900 sm:py-20">
        <div className="container-tcp grid gap-12 lg:grid-cols-[300px_1fr]">
          {/* Contact block */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Avatar size={210} />
            <h2 className="mt-6 text-xl font-bold">{site.owner}</h2>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Founder | {site.name}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
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
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary !px-5 !py-2.5">Hire Me</Link>
              <a href={site.resume} download className="btn-outline !border-slate-300 !text-navy-800 !px-5 !py-2.5">
                Resume <Download width={16} height={16} />
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold">From concept to production</h3>
            <div className="mt-4 space-y-4 text-slate-600">
              <p>
                Travis Priest is an embedded systems engineer and the founder of {site.name},
                specializing in firmware development, PCB design, hardware bring-up, and system
                integration. He helps companies and product teams take embedded ideas from
                first sketch to reliable, manufacturable hardware.
              </p>
              <p>
                His work spans low-power wireless sensor networks, industrial controllers, and
                precision measurement systems — built on platforms like STM32, ESP32, and the
                RP2350. Whether the need is a complete product, a focused firmware module, or a
                second set of expert eyes on a design, the goal is the same: dependable engineering
                that ships.
              </p>
              <p>
                {site.name} is based in Florida, USA and works with clients remotely worldwide on
                contract, freelance, and consulting engagements.
              </p>
            </div>

            <h3 className="mt-10 text-2xl font-bold">What I bring</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
                  <Check width={18} height={18} className="mt-0.5 shrink-0 text-brand" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {showProjects && (
                <Link href="/projects/" className="btn-primary">
                  View Projects <ArrowRight width={18} height={18} />
                </Link>
              )}
              <Link
                href="/services/"
                className={
                  showProjects
                    ? "btn-outline !border-slate-300 !text-navy-800"
                    : "btn-primary"
                }
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
