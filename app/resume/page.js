import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Download, ArrowRight, Mail } from "@/components/Icons";
import { site, showProjects } from "@/lib/site";

export const metadata = {
  title: "Resume",
  description:
    "Resume of Travis Priest — Principal Embedded Systems Engineer with 20+ years across embedded firmware, electrical engineering, and PCB design. Skills, experience, and downloadable PDF.",
};

const skillGroups = [
  {
    group: "Languages & Firmware",
    skills: ["Embedded C", "C++", "Python", "ARM", "Embedded Linux", "FreeRTOS", "ESP32"],
  },
  {
    group: "Hardware / PCB",
    skills: [
      "PCB Design",
      "Board bring-up",
      "Analog / Digital design",
      "Power electronics",
      "EMI / EMC",
      "Validation",
      "Manufacturing support",
      "Product architecture",
    ],
  },
  {
    group: "Protocols & Connectivity",
    skills: ["UART", "SPI", "I²C", "CAN", "Ethernet", "USB", "Modbus"],
  },
  {
    group: "Tools",
    skills: ["Altium Designer", "KiCad", "Git", "VS Code", "JTAG / SWD", "Logic analyzers", "Oscilloscopes"],
  },
];

const experience = [
  {
    title: "Founder / Principal Engineer",
    company: "TCP Engineering",
    dates: "Nov 2019 – Present",
    detail:
      "Embedded firmware consulting, PCB design, and electrical engineering — product architecture, EMI/EMC troubleshooting, hardware bring-up, and manufacturing support across HVAC, industrial, and IoT products.",
  },
  {
    title: "Design Engineer",
    company: "Drako Motors",
    dates: "2024 – 2026",
    detail:
      "Electric-vehicle firmware, vehicle subsystem development, and embedded architecture for high-performance EV platforms.",
  },
  {
    title: "Embedded Design Engineer",
    company: "SailPlan",
    dates: "2022 – 2024",
    detail:
      "PoE systems, marine electronics, and embedded hardware with data acquisition and validation testing.",
  },
  {
    title: "Senior Firmware Engineer",
    company: "Globe Tracker",
    dates: "2020 – 2022",
    detail:
      "Embedded ARM firmware, FreeRTOS, Embedded Linux, USB / RNDIS networking, and power management.",
  },
  {
    title: "Senior IoT Developer",
    company: "mIQroTech",
    dates: "2019",
    detail:
      "Pipeline-monitoring IoT — cellular communications, GPS, sensors, and remote telemetry.",
  },
  {
    title: "Electrical Design Engineer / Test Manager",
    company: "AJ's Power Source",
    dates: "2017 – 2019",
    detail:
      "UPS systems and power supplies with PCB design, SNMP firmware, EMI compliance, and manufacturing test.",
  },
  {
    title: "Senior Design Engineer",
    company: "Ultra-Tech Enterprises",
    dates: "2008 – 2017",
    detail:
      "HVAC controls, industrial and power electronics, IoT systems, battery chargers, and ruggedized embedded products.",
  },
  {
    title: "Hardware Engineering Manager",
    company: "Dawning Technologies",
    dates: "2003 – 2008",
    detail:
      "Embedded hardware, product development, validation, product lifecycle management, and test-system development.",
  },
];

const stats = [
  { value: "20+", label: "Years experience" },
  { value: "8+", label: "Companies" },
  { value: "40+", label: "Products developed" },
  { value: "100+", label: "PCB designs" },
  { value: "50+", label: "Firmware projects" },
];

const education = [
  {
    title: "B.S., Electrical Engineering",
    org: "Alfred University",
    date: "May 2003",
    detail:
      "Coursework: Digital Electronics, Analog Circuit Design, Embedded Systems, Microprocessors, Power Electronics, Control Systems, Signal Processing.",
  },
  {
    title: "Dale Carnegie Leadership Training",
    org: "Professional development",
    date: "2011",
  },
];

const industries = [
  "Automotive",
  "Industrial controls",
  "HVAC",
  "IoT",
  "Power electronics",
  "Marine",
  "Energy",
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Experience & Skills"
        subtitle="Principal Embedded Systems Engineer — 20+ years designing embedded systems from concept through production."
      />

      <section className="bg-slate-50 py-16 text-navy-900 sm:py-20">
        <div className="container-tcp">
          {/* Download bar */}
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-6 sm:flex-row">
            <div>
              <h2 className="text-lg font-bold">Travis C. Priest — Principal Embedded Systems Engineer</h2>
              <p className="text-sm text-slate-500">Founder, {site.name} · 20+ years · {site.location}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={site.resume} download className="btn-primary !px-5 !py-2.5">
                Download Resume <Download width={16} height={16} />
              </a>
              <Link href="/contact/" className="btn-outline !border-slate-300 !text-navy-800 !px-5 !py-2.5">
                Contact Travis <Mail width={16} height={16} />
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand">Professional Summary</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Principal Embedded Systems Engineer with 20+ years across 8+ companies developing
              commercial embedded products in automotive, industrial controls, HVAC, IoT, power
              electronics, marine, and energy. Experienced in firmware architecture, embedded
              software, electrical design, PCB development, EMI/EMC, system integration,
              manufacturing support, and technical leadership — and founder of {site.name}, an
              embedded systems consultancy.
            </p>
          </div>

          {/* Career stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                <div className="text-3xl font-extrabold text-brand">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skills matrix */}
          <h3 className="mt-12 text-2xl font-bold">Skills Matrix</h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.group} className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand">{g.group}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="rounded-md bg-slate-100 px-2.5 py-1 text-sm text-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <h3 className="mt-12 text-2xl font-bold">Experience</h3>
          <div className="mt-5 space-y-5">
            {experience.map((e) => (
              <div key={e.company} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg font-bold">
                    {e.title} <span className="font-semibold text-brand">· {e.company}</span>
                  </h4>
                  <span className="text-sm font-semibold text-slate-500">{e.dates}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.detail}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <h3 className="mt-12 text-2xl font-bold">Education & Training</h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {education.map((ed) => (
              <div key={ed.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="text-base font-bold">{ed.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{ed.org}</p>
                <p className="mt-1 text-sm text-slate-400">{ed.date}</p>
                {ed.detail && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{ed.detail}</p>
                )}
              </div>
            ))}
          </div>

          {/* Industries */}
          <h3 className="mt-12 text-2xl font-bold">Industries Served</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {industries.map((i) => (
              <span key={i} className="rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand-dark">
                {i}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {showProjects && (
              <Link href="/projects/" className="btn-primary">
                View Projects <ArrowRight width={18} height={18} />
              </Link>
            )}
            <a
              href={site.resume}
              download
              className={
                showProjects
                  ? "btn-outline !border-slate-300 !text-navy-800"
                  : "btn-primary"
              }
            >
              Download Resume <Download width={18} height={18} />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
