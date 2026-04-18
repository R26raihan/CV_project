import { type TemplateProps } from '../TemplateShared'

export default function LuxeEditorial({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  const serifFont = "'Playfair Display', serif"
  const bodyFont = "'Inter', sans-serif"
  
  return (
    <div class="p-24 flex flex-col h-full bg-[#fdfdfb] text-[#111] transition-all duration-700 min-w-0" style={{ fontFamily: bodyFont }}>
      {/* Editorial Header */}
      <header class="text-center mb-24 max-w-4xl mx-auto shrink-0 transition-all duration-500">
        <h1 class="text-7xl font-black italic tracking-tighter mb-6 leading-[0.9] break-words" style={{ fontFamily: serifFont, color }}>
          {cv.firstName} <br/><span class="font-light">{cv.lastName}</span>
        </h1>
        <div class="h-0.5 w-16 bg-black/10 mx-auto mb-8"></div>
        <p class="text-xs font-bold uppercase tracking-[0.5em] opacity-40 mb-10">{cv.professionalTitle}</p>
        
        <div class="flex justify-center flex-wrap gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 border-t border-b border-black/5 py-8">
           {cv.email && <span class="flex items-center gap-3">{cv.email}</span>}
           {cv.phone && <span class="flex items-center gap-3">{cv.phone}</span>}
           {cv.location && <span class="flex items-center gap-3">{cv.location}</span>}
        </div>
      </header>

      <div class="grid grid-cols-12 gap-24 flex-1 min-w-0 text-left">
        {/* Left Column: Profile & Info */}
        <aside class="col-span-4 flex flex-col gap-20 min-w-0">
           <section>
              <h3 class="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-30 flex items-center gap-4 italic" style={{ fontFamily: serifFont }}>
                 The Profile
                 <div class="h-px flex-1 bg-black/5"></div>
              </h3>
              <p class="text-[13px] leading-[1.8] font-medium text-black/70 italic break-words">
                {cv.summary}
              </p>
           </section>

           <section>
              <h3 class="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-30 flex items-center gap-4 italic" style={{ fontFamily: serifFont }}>
                 Expertise
                 <div class="h-px flex-1 bg-black/5"></div>
              </h3>
              <div class="flex flex-col gap-5">
                 {cv.skills.map((skill: string) => (
                   <div key={skill} class="flex items-center justify-between text-[11px] font-bold opacity-60">
                      <span class="lowercase tracking-widest">{skill}</span>
                      <div class="w-1.5 h-1.5 rounded-full bg-black/10" style={{ backgroundColor: `${color}30` }}></div>
                   </div>
                 ))}
              </div>
           </section>

           {cv.certifications.length > 0 && (
             <section>
                <h3 class="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-30 flex items-center gap-4 italic" style={{ fontFamily: serifFont }}>
                   Honors
                   <div class="h-px flex-1 bg-black/5"></div>
                </h3>
                <div class="space-y-8">
                   {cv.certifications.map((cert: any) => (
                     <div key={cert.id} class="min-w-0 border-l border-black/10 pl-6">
                        <h4 class="text-xs font-bold leading-tight mb-2 italic" style={{ fontFamily: serifFont }}>{cert.name}</h4>
                        <p class="text-[9px] uppercase tracking-widest font-black opacity-30">{cert.issuer}</p>
                     </div>
                   ))}
                </div>
             </section>
           )}
        </aside>

        {/* Right Column: Experience */}
        <main class="col-span-8 flex flex-col gap-20 min-w-0">
           <section>
              <h3 class="text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-6 italic opacity-30" style={{ fontFamily: serifFont }}>
                 Professional Narrative
                 <div class="h-px flex-1 bg-black/5"></div>
              </h3>
              
              <div class="space-y-20">
                 {cv.experience.map((exp: any) => (
                   <div key={exp.id} class="group relative">
                      <div class="flex justify-between items-baseline mb-4 border-b border-black/5 pb-4">
                         <h4 class="text-3xl font-bold tracking-tighter leading-none italic group-hover:text-primary transition-colors" style={{ fontFamily: serifFont, color }}>
                            {exp.role}
                         </h4>
                         <span class="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 whitespace-nowrap ml-8 shrink-0">{exp.period}</span>
                      </div>
                      <p class="text-[11px] font-black uppercase tracking-[0.3em] opacity-40 mb-8">{exp.company}</p>
                      
                      <div class="space-y-4">
                         {exp.description.map((d: string, i: number) => (
                           <div key={i} class="flex gap-8 items-start">
                              <div class="w-px h-12 bg-black/10 shrink-0 mt-1"></div>
                              <p class="text-[13.5px] leading-[1.8] text-black/70 pr-12 text-justify">
                                {d}
                              </p>
                           </div>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
           </section>
        </main>
      </div>
    </div>
  )
}
