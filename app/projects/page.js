import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { Chip, Pcb, Wifi } from "@/components/Icons";
import { projects } from "@/lib/site";

export const metadata = {
  title: "Projects",
  description:
    "Featured embedded systems and hardware/firmware projects by TCP ENG — LoRa networks, logic analyzers, industrial controllers, and IoT sensors.",
};

const capabilities = [
  {
    icon: Chip,
    title: "Firmware",
    text: "STM32, ESP32, and RP2350 firmware with FreeRTOS, drivers, and bootloaders.",
  },
  {
    icon: Pcb,
    title: "PCB Design",
    text: "Schematic capture through layout, DFM review, and production-ready Gerbers.",
  },
  {
    icon: Wifi,
    title: "Wireless & IoT",
    text: "LoRa, WiFi, BLE, and MQTT connectivity with cloud dashboards and alerting.",
  },
];

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured) || projects[0];

  // Derive stats from the data so they stay accurate as projects are added.
  const platformCount = new Set(projects.flatMap((p) => p.tags || [])).size;
  const stats = [
    { value: `${projects.length}`, label: "Featured Projects" },
    { value: `${platformCount}+`, label: "Platforms & Protocols" },
    { value: "Concept→Prod", label: "End-to-End Delivery" },
    { value: "100%", label: "Embedded Focus" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="A selection of embedded systems and hardware/firmware work — from wireless sensor networks to high-speed instrumentation."
      />

      {/* Capabilities intro */}
      <section className="bg-navy-950 py-14 sm:py-16">
        <div className="container-tcp">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              From Concept to Production
            </h2>
            <p className="mt-3 text-base text-slate-400 sm:text-lg">
              Each project below spans the full stack of embedded development —
              hardware, firmware, and the wireless connectivity that ties a
              product together.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand-light">
                  <Icon width={26} height={26} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-white/5 bg-navy-900">
        <div className="container-tcp grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className={`font-extrabold leading-tight text-brand-light break-words ${
                  s.value.length > 4
                    ? "text-xl sm:text-2xl"
                    : "text-3xl sm:text-4xl"
                }`}
              >
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured project */}
      <FeaturedProject project={featured} />

      {/* Filterable grid with compact/detailed toggle */}
      <ProjectsExplorer projects={projects} />

      <CTASection />
    </>
  );
}
