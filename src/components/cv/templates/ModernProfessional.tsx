import { type TemplateProps, ExperienceItem, SkillsGrid } from '../TemplateShared'

export default function ModernProfessional({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  return (
    <div class="p-16 flex flex-col h-full bg-white transition-all duration-700 min-w-0" style={{ fontFamily: activeFont }}>
      <header class="flex justify-between items-start mb-16 shrink-0 gap-12">
        <div class="min-w-0">
           <h1 class="text-6xl font-black tracking-tight mb-4 text-on-surface leading-none break-words uppercase">
             {cv.firstName} <span style={{ color }}>{cv.lastName}</span>
           </h1>
           <p class="text-xl font-bold tracking-[0.2em] opacity-40 uppercase break-words">{cv.professionalTitle}</p>
        </div>
        <div class="flex flex-col items-end text-right gap-3 text-[11px] font-black uppercase tracking-widest text-on-surface-variant min-w-0">
           {cv.email && <div class="flex items-center gap-3">{cv.email} <span class="material-symbols-outlined text-sm" style={{ color }}>mail</span></div>}
           {cv.phone && <div class="flex items-center gap-3">{cv.phone} <span class="material-symbols-outlined text-sm" style={{ color }}>call</span></div>}
           {cv.location && <div class="flex items-center gap-3">{cv.location} <span class="material-symbols-outlined text-sm" style={{ color }}>location_on</span></div>}
        </div>
      </header>

      <div class="grid grid-cols-12 gap-16 flex-1 min-w-0">
        <div class="col-span-12 border-y-4 py-8 flex items-center gap-12 border-primary/5 min-w-0" style={{ borderColor: `${color}10` }}>
           <h3 class="text-xs font-black uppercase tracking-[0.4em] opacity-30 shrink-0">Summary</h3>
           <p class="text-md leading-relaxed text-on-surface font-medium break-words whitespace-pre-wrap">{cv.summary}</p>
        </div>

        <div class="col-span-8 space-y-16 mt-8 min-w-0">
           <section class="min-w-0">
             <div class="flex items-center gap-6 mb-12">
                <span class="w-12 h-px bg-primary opacity-20" style={{ backgroundColor: color }}></span>
                <h3 class="text-sm font-black uppercase tracking-[0.4em] text-on-surface">Experience</h3>
             </div>
             {cv.experience.map((exp: any) => <ExperienceItem exp={exp} color={color} />)}
           </section>
        </div>

        <aside class="col-span-4 space-y-12 mt-8 min-w-0">
           {cv.skills.length > 0 && (
             <section class="min-w-0">
                <h3 class="text-[11px] font-black uppercase tracking-[0.4em] mb-8 border-b-2 pb-2 inline-block" style={{ color: color, borderColor: `${color}15` }}>Keahlian</h3>
                <div class="space-y-4">
                   {cv.skills.map((skill: string) => (
                     <div key={skill} class="space-y-1">
                        <div class="flex justify-between text-[10px] font-black uppercase opacity-60">
                           <span>{skill}</span>
                        </div>
                        <div class="w-full h-1 bg-primary/5 rounded-full overflow-hidden">
                           <div class="h-full bg-primary rounded-full" style={{ width: '85%', backgroundColor: color }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </section>
           )}

           {cv.certifications.length > 0 && (
             <section class="min-w-0">
                <h3 class="text-[11px] font-black uppercase tracking-[0.4em] mb-8 border-b-2 pb-2 inline-block" style={{ color: color, borderColor: `${color}15` }}>Sertifikasi</h3>
                <div class="space-y-6">
                   {cv.certifications.map((cert: any) => (
                     <div key={cert.id} class="min-w-0">
                        <h4 class="text-xs font-black text-on-surface uppercase mb-1">{cert.name}</h4>
                        <p class="text-[10px] font-bold opacity-50">{cert.issuer}</p>
                     </div>
                   ))}
                </div>
             </section>
           )}
        </aside>
      </div>
    </div>
  )
}
