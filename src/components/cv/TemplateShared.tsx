import { defineComponent, type PropType } from 'vue'

// Shared Props Interfaces
export interface TemplateProps {
  cv: any;
  ui: any;
  activeFont: string;
}

// 1. Experience Item
export const ExperienceItem = ({ exp, color }: { exp: any, color: string }) => (
  <div key={exp.id} class="mb-8 last:mb-0 relative pl-8 border-l-2 min-w-0 break-words" style={{ borderColor: `${color}20` }}>
    <div class="absolute w-4 h-4 bg-white border-2 rounded-full -left-[9px] top-1" style={{ borderColor: color }}></div>
    <div class="flex justify-between items-baseline mb-b gap-4">
      <h4 class="text-md font-black text-on-surface uppercase tracking-tight break-words">{exp.role}</h4>
      <span class="text-[10px] font-black px-2 py-1 rounded uppercase shrink-0" style={{ color: color, backgroundColor: `${color}10` }}>{exp.period}</span>
    </div>
    <p class="text-sm font-bold text-on-surface/60 mb-3 break-words">{exp.company}</p>
    <ul class="space-y-2">
      {exp.description.map((d: string, i: number) => (
        <li key={i} class="text-sm text-on-surface-variant flex gap-3 break-words whitespace-pre-wrap">
          <span class="mt-1 font-bold shrink-0" style={{ color: color }}>›</span> {d}
        </li>
      ))}
    </ul>
  </div>
)

// 2. Skills Grid
export const SkillsGrid = ({ skills, color }: { skills: string[], color: string }) => (
  <div class="flex flex-wrap gap-2.5">
    {skills.map(skill => (
      <span key={skill} class="px-3 py-1.5 bg-primary/5 text-primary text-[10px] font-black rounded-lg uppercase tracking-widest border border-primary/10" style={{ color, borderColor: `${color}20`, backgroundColor: `${color}08` }}>
        {skill}
      </span>
    ))}
  </div>
)

// 3. Certification Item
export const CertificationItem = ({ cert, color }: { cert: any, color: string }) => (
  <div key={cert.id} class="flex justify-between items-baseline mb-4 last:mb-0 gap-4 break-words">
    <div class="min-w-0">
      <h4 class="text-sm font-black text-on-surface uppercase tracking-tight break-words">{cert.name}</h4>
      <p class="text-[11px] font-bold text-on-surface/60 break-words">{cert.issuer}</p>
    </div>
    <span class="text-[10px] font-black opacity-40 uppercase shrink-0">{cert.date}</span>
  </div>
)
