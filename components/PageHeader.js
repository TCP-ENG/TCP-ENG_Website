export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-navy-900">
      <div className="bg-circuit bg-grid-fade absolute inset-0" aria-hidden />
      <div className="container-tcp relative py-16 text-center sm:py-20">
        {eyebrow && (
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
