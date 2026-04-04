import { skillCategories } from "@/data/skills";

export default function TechnicalSkills() {
  return (
    <div className="space-y-12">
      {skillCategories.map(({ category, skills }) => (
        <div key={category}>
          <p className="uppercase text-secondary tracking-widest mb-3 select-none">
            {category}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-sm text-secondary border border-neutral-500/30 dark:border-neutral-400/30 rounded-md px-2.5 py-1 font-light cursor-default"
              >
                {Icon && <Icon size={13} className="shrink-0 opacity-80" />}
                {label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
