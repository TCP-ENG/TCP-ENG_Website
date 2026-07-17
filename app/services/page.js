import ServiceCard from "@/components/ServiceCard";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Embedded firmware, PCB design & prototyping, 3D printing, wireless & IoT, hardware bring-up, and engineering consulting from TCP ENG.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What I Do"
        subtitle="End-to-end embedded engineering — firmware, hardware, wireless, and the consulting to tie it together."
      />

      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="container-tcp grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} detailed />
          ))}
        </div>
      </section>

      <CTASection
        headline="Need help reviewing a PCB or firmware architecture?"
        text="Get a focused, expert design review."
        buttonLabel="Schedule a Consultation"
        buttonHref="/contact/"
      />
    </>
  );
}
