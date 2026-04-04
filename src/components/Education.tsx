import { education } from "@/data/education";

export default function Education() {
  return (
    <div className="space-y-8">
      {education.map((entry) => (
        <div key={entry.institution} className="flex flex-col gap-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
            <h2 className="text-base font-medium tracking-tight">
              {entry.institution}
            </h2>
            <span className="text-xs text-tertiary whitespace-nowrap shrink-0">
              {entry.period}
            </span>
          </div>
          <p className="text-sm text-secondary">{entry.degree}</p>
          <p className="text-xs text-tertiary">{entry.location}</p>
        </div>
      ))}
    </div>
  );
}
