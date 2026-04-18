import { type TemplateProps } from '../TemplateShared'

export default function LuxeEditorial({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  const serifFont = "'Playfair Display', serif"
  const bodyFont = activeFont // Use the selected modern font for body
  
  return (
    <div 
      class="flex flex-col min-h-full bg-[#fdfdfb] text-[#111] transition-all duration-700" 
      style={{ fontFamily: bodyFont }}
    >
      {/* ── DRAMATIC EDITORIAL HEADER ── */}
      <header class="text-center px-24 pt-24 pb-16 shrink-0 bg-white border-b border-black/5">
        <div class="relative inline-block mb-10">
          <h1 
            class="text-7xl md:text-8xl font-black italic tracking-tighter leading-[0.85] break-words uppercase" 
            style={{ fontFamily: serifFont, color }}
          >
            {cv.firstName} <br/>
            <span class="font-extralight not-italic tracking-normal opacity-20 text-black">
              {cv.lastName}
            </span>
          </h1>
          <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-black/10"></div>
        </div>
        
        <p class="text-[10px] font-black uppercase tracking-[0.6em] opacity-40 mb-10">
          {cv.professionalTitle}
        </p>
        
        <div class="flex justify-center flex-wrap gap-x-10 gap-y-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 border-t border-black/5 pt-10 mt-2">
           {cv.email && <span class="flex items-center gap-2">{cv.email}</span>}
           {cv.phone && <span class="flex items-center gap-2">{cv.phone}</span>}
           {cv.location && <span class="flex items-center gap-2">{cv.location}</span>}
        </div>
      </header>

      {/* ── MAIN CONTENT AREA (Flex Layout) ── */}
      <div class="flex flex-1">
        
        {/* ── SIDEBAR (Fixed Width) ── */}
        <aside class="w-[260px] shrink-0 border-r border-black/5 px-10 py-16 flex flex-col gap-16 text-left">
           <section>
              <h3 class="text-[9px] font-black uppercase tracking-[0.4em] mb-8 opacity-20 italic" style={{ fontFamily: serifFont }}>
                 The Profile
              </h3>
              <p class="text-[13px] leading-[1.8] font-medium text-black/60 italic break-words">
                {cv.summary}
              </p>
           </section>

           <section>
              <h3 class="text-[9px] font-black uppercase tracking-[0.4em] mb-8 opacity-20 italic" style={{ fontFamily: serifFont }}>
                 Expertise
              </h3>
              <div class="flex flex-col gap-5">
                 {cv.skills.map((skill: string) => (
                   <div key={skill} class="flex items-center justify-between text-[11px] font-bold opacity-50 group hover:opacity-100 transition-opacity">
                      <span class="lowercase tracking-widest">{skill}</span>
                      <div class="w-1.5 h-1.5 bg-black/5 transition-all" style={{ backgroundColor: `${color}20`, borderRadius: `${ui.borderRadius}px` }}></div>
                   </div>
                 ))}
              </div>
           </section>

           {cv.certifications.length > 0 && (
             <section>
                <h3 class="text-[9px] font-black uppercase tracking-[0.4em] mb-8 opacity-20 italic" style={{ fontFamily: serifFont }}>
                   Distinctions
                </h3>
                <div class="space-y-8">
                   {cv.certifications.map((cert: any) => (
                     <div key={cert.id} class="min-w-0 border-l-2 border-black/5 pl-5">
                        <h4 class="text-[11px] font-bold leading-tight mb-1.5 italic text-black/80" style={{ fontFamily: serifFont }}>
                          {cert.name}
                        </h4>
                        <p class="text-[8px] uppercase tracking-widest font-black opacity-30">
                          {cert.issuer}
                        </p>
                     </div>
                   ))}
                </div>
             </section>
           )}
        </aside>

        {/* ── MAIN CONTENT (Professional Narrative) ── */}
        <main class="flex-1 px-14 py-16 text-left">
           <section>
              <h3 class="text-[9px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-6 italic opacity-20" style={{ fontFamily: serifFont }}>
                 Professional Narrative
                 <div class="h-px flex-1 bg-black/5"></div>
              </h3>
              
              <div class="space-y-16">
                 {cv.experience.map((exp: any) => (
                   <div key={exp.id} class="group relative">
                      <div class="flex justify-between items-baseline mb-3 gap-8">
                         <h4 class="text-[22px] font-bold tracking-tight leading-tight italic group-hover:text-primary transition-colors flex-1" style={{ fontFamily: serifFont, color }}>
                            {exp.role}
                         </h4>
                         <span class="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 whitespace-nowrap shrink-0">
                           {exp.period}
                         </span>
                      </div>
                      
                      <p class="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-black/30">
                        {exp.company}
                      </p>
                      
                      <div class="space-y-5">
                         {exp.description.map((d: string, i: number) => (
                           <div key={i} class="flex gap-8 items-start">
                              <div class="w-[1.5px] h-10 bg-black/5 shrink-0 mt-1.5"></div>
                              <p class="text-[13.5px] leading-[1.8] text-black/60 pr-10 text-justify break-words">
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
