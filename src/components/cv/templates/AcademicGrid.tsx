import { type TemplateProps, ExperienceItem } from '../TemplateShared'

export default function AcademicGrid({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  return (
    <div class="p-16 flex flex-col h-full bg-white transition-all duration-700 min-w-0" style={{ fontFamily: activeFont }}>
      <header class="grid grid-cols-12 gap-12 border-b-8 border-primary mb-16 pb-12 shrink-0 items-end" style={{ borderColor: color }}>
        <div class="col-span-8 min-w-0">
           <h1 class="text-6xl font-black tracking-tighter mb-2 break-words leading-none" style={{ color }}>
             {cv.firstName} {cv.lastName}
           </h1>
           <p class="text-xl font-bold opacity-40 uppercase tracking-[0.4em] break-words">{cv.professionalTitle}</p>
        </div>
        <div class="col-span-4 flex flex-col items-end text-right gap-2 text-[11px] font-black uppercase tracking-widest text-on-surface-variant min-w-0">
           {cv.email && <p>{cv.email}</p>}
           {cv.phone && <p>{cv.phone}</p>}
           {cv.location && <p>{cv.location}</p>}
        </div>
      </header>

      <div class="grid grid-cols-12 gap-16 flex-1 min-w-0">
        <div class="col-span-4 space-y-12 shrink-0 min-w-0">
           <section class="min-w-0">
              <h3 class="text-xs font-black uppercase tracking-[0.4em] mb-8 pb-2 border-b-2" style={{ color: color, borderColor: `${color}15` }}>Profile</h3>
              <p class="text-sm leading-relaxed text-on-surface-variant font-medium break-words italic">{cv.summary}</p>
           </section>

           <section class="min-w-0">
              <h3 class="text-xs font-black uppercase tracking-[0.4em] mb-8 pb-2 border-b-2" style={{ color: color, borderColor: `${color}15` }}>Top Skills</h3>
              <div class="flex flex-col gap-3">
                 {cv.skills.map((skill: string) => (
                   <div key={skill} class="flex items-center gap-4 text-xs font-bold text-on-surface-variant">
                      <span class="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
                      {skill}
                   </div>
                 ))}
              </div>
           </section>

           {cv.certifications.length > 0 && (
             <section class="min-w-0">
                <h3 class="text-xs font-black uppercase tracking-[0.4em] mb-8 pb-2 border-b-2" style={{ color: color, borderColor: `${color}15` }}>Distinctions</h3>
                <div class="space-y-6">
                   {cv.certifications.map((cert: any) => (
                     <div key={cert.id} class="min-w-0">
                        <h4 class="text-xs font-black text-on-surface uppercase mb-1">{cert.name}</h4>
                        <p class="text-[10px] font-bold opacity-50 uppercase tracking-tighter">{cert.issuer} • {cert.date}</p>
                     </div>
                   ))}
                </div>
             </section>
           )}
        </div>

        <main class="col-span-8 space-y-16 min-w-0">
           <section class="min-w-0">
              <h3 class="text-xs font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-6">
                 Research & Experience
                 <div class="h-px flex-1 bg-primary/20" style={{ backgroundColor: `${color}20` }}></div>
              </h3>
              <div class="space-y-12">
                 {cv.experience.map((exp: any) => <ExperienceItem exp={exp} color={color} />)}
              </div>
           </section>
        </main>
      </div>
    </div>
  )
}
