import { type TemplateProps } from '../TemplateShared'

export default function TimelineMaster({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  return (
    <div class="p-16 flex flex-col h-full bg-white transition-all duration-700 min-w-0" style={{ fontFamily: activeFont }}>
       <header class="flex items-center gap-12 mb-16 shrink-0 text-left">
         <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-[#f3f4f6] shrink-0 shadow-xl" style={{ borderColor: `${color}20` }}>
           {cv.profileImage ? (
             <img src={cv.profileImage} crossorigin="anonymous" class="w-full h-full object-cover" />
           ) : (
             <div class="w-full h-full flex items-center justify-center text-4xl font-black bg-[#f3f4f6]" style={{ color }}>{cv.firstName[0]}</div>
           )}
         </div>
         <div class="min-w-0">
           <h1 class="text-5xl font-black text-on-surface uppercase tracking-tighter leading-tight shrink-0">
             {cv.firstName} <span style={{ color }}>{cv.lastName}</span>
           </h1>
           <div class="flex items-center gap-4 mt-4 shrink-0">
             <p class="text-sm font-black uppercase tracking-[0.3em] opacity-40 shrink-0">{cv.professionalTitle}</p>
             <div class="h-px flex-1 bg-[#f3f4f6]" style={{ backgroundColor: `${color}15` }}></div>
           </div>
           <div class="flex gap-6 mt-6 text-[10px] font-black uppercase tracking-widest opacity-60">
             {cv.email && <span>{cv.email}</span>}
             {cv.location && <span>{cv.location}</span>}
           </div>
         </div>
       </header>

       <div class="grid grid-cols-12 gap-16 flex-1 min-w-0 text-left">
          <div class="col-span-8 space-y-16 min-w-0">
             <section>
                <div class="flex items-center gap-4 mb-10 shrink-0">
                   <span class="material-symbols-outlined text-xl" style={{ color }}>history</span>
                   <h3 class="text-xs font-black uppercase tracking-[0.4em]">Career Path</h3>
                </div>
                <div class="relative space-y-12 pl-12 border-l-4" style={{ borderColor: `${color}10` }}>
                   {cv.experience.map((exp: any) => (
                     <div key={exp.id} class="relative">
                        <div class="absolute -left-[54px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: color }}></div>
                        <div class="mb-2">
                           <h4 class="text-lg font-black text-on-surface uppercase shrink-0">{exp.role}</h4>
                           <p class="text-sm font-bold opacity-50 uppercase tracking-wider">{exp.company} • {exp.period}</p>
                        </div>
                        <ul class="space-y-3 mt-4">
                           {exp.description.map((d: string, i: number) => (
                             <li key={i} class="text-[13px] text-on-surface-variant font-medium leading-relaxed">
                               {d}
                             </li>
                           ))}
                        </ul>
                     </div>
                   ))}
                </div>
             </section>
          </div>

          <div class="col-span-4 space-y-12 min-w-0">
             <section>
                <h3 class="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40 border-b pb-2">Profile Info</h3>
                <p class="text-[13px] leading-relaxed font-medium text-on-surface-variant">{cv.summary}</p>
             </section>

             <section>
                <h3 class="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40 border-b pb-2">Core Skills</h3>
                <div class="space-y-4">
                   {cv.skills.map((skill: string) => (
                     <div key={skill} class="space-y-1.5">
                        <div class="flex justify-between text-[10px] font-black uppercase opacity-60">
                           <span>{skill}</span>
                        </div>
                        <div class="w-full h-1.5 bg-[#f3f4f6] rounded-full overflow-hidden">
                           <div class="h-full rounded-full transition-all duration-1000" style={{ width: '85%', backgroundColor: color }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </section>
          </div>
       </div>
    </div>
  )
}
