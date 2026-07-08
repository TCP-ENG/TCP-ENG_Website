import { iconMap } from "./Icons";

export default function ServiceCard({ service, detailed = false }) {
  const Icon = iconMap[service.icon];
  return (
    <div className="card card-hover h-full">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand-light">
        {Icon ? <Icon width={26} height={26} /> : null}
      </span>
      <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-white">
        {service.title}
      </h3>

      {detailed ? (
        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-slate-400 sm:grid-cols-2">
          {service.items.map((i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {i}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.summary}</p>
      )}
    </div>
  );
}
