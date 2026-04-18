import { type TemplateProps } from '../TemplateShared'

export default function IndustrialTech({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  const monoFont = "'JetBrains Mono', 'IBM Plex Mono', monospace"
  
  return (
    <div class="p-16 flex flex-col h-full bg-[#0f172a] text-[#f8fafc] transition-all duration-700 min-w-0" style={{ fontFamily: activeFont }}>
      {/* Terminal Header */}
      <header class="border-2 border-[#1e293b] p-10 mb-12 relative overflow-hidden bg-[#1e293b]/30">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` }}></div>
        <div class="flex justify-between items-start">
          <div class="min-w-0">
            <h1 class="text-5xl font-black tracking-tighter mb-2 break-words leading-tight" style={{ color }}>
              {cv.firstName}_{cv.lastName}
            </h1>
            <p class="text-sm font-bold opacity-60 uppercase tracking-[0.4em] font-mono">
              {`> ${cv.professionalTitle}`}
            </p>
          </div>
          <div class="text-right text-[10px] font-mono opacity-40 space-y-1">
            <p>{`LOC: ${cv.location}`}</p>
            <p>{`NET: ${cv.email}`}</p>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-12 gap-12 flex-1 min-w-0">
        {/* Main Console */}
        <main class="col-span-8 flex flex-col gap-10 min-w-0 text-left">
           <section>
              <h3 class="text-xs font-mono font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                 <span style={{ color }}>[01]</span> SUMMARY
                 <div class="h-px flex-1 bg-[#1e293b]"></div>
              </h3>
              <p class="text-sm leading-relaxed text-slate-400 font-medium break-words border-l-2 pl-6" style={{ borderColor: `${color}40` }}>
                {cv.summary}
              </p>
           </section>

           <section>
              <h3 class="text-xs font-mono font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                 <span style={{ color }}>[02]</span> EXPERIENCE_LOG
                 <div class="h-px flex-1 bg-[#1e293b]"></div>
              </h3>
              <div class="space-y-10">
                 {cv.experience.map((exp: any, i: number) => (
                   <div key={exp.id} class="relative pl-8 border-l border-slate-700">
                      <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }}></div>
                      <div class="flex justify-between items-baseline mb-2">
                         <h4 class="text-lg font-black text-slate-200 uppercase tracking-tight">{exp.role}</h4>
                         <span class="text-[10px] font-mono bg-slate-800 px-2 py-1 rounded text-slate-400">{exp.period}</span>
                      </div>
                      <p class="text-xs font-bold mb-4 uppercase tracking-widest" style={{ color }}>{`@${exp.company}`}</p>
                      <ul class="space-y-2 opacity-80">
                         {exp.description.map((d: string, idx: number) => (
                           <li key={idx} class="text-[13px] leading-relaxed flex gap-3">
                              <span class="text-slate-600 font-mono">{idx + 1}.</span>
                              {d}
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
           </section>
        </main>

        {/* Sidebar Console */}
        <aside class="col-span-4 flex flex-col gap-10 min-w-0 text-left">
           <section class="bg-slate-900 border border-[#1e293b] p-6 rounded-lg">
              <h3 class="text-[10px] font-mono font-black uppercase tracking-[0.3em] mb-6 opacity-40">STACK_ANALYSIS</h3>
              <div class="flex flex-wrap gap-2">
                 {cv.skills.map((skill: string) => (
                   <span key={skill} class="px-2 py-1 bg-slate-800 text-[10px] font-mono rounded border border-slate-700 text-slate-300">
                      {`#${skill}`}
                   </span>
                 ))}
              </div>
           </section>

           {cv.certifications.length > 0 && (
             <section class="bg-slate-900 border border-[#1e293b] p-6 rounded-lg">
                <h3 class="text-[10px] font-mono font-black uppercase tracking-[0.3em] mb-6 opacity-40">VERIFIED_CREDS</h3>
                <div class="space-y-6">
                   {cv.certifications.map((cert: any) => (
                     <div key={cert.id} class="min-w-0 group">
                        <h4 class="text-[11px] font-black text-slate-200 uppercase mb-1 group-hover:text-cyan-400 transition-colors" style={{ color }}>{cert.name}</h4>
                        <p class="text-[9px] font-mono opacity-40">{cert.issuer}</p>
                     </div>
                   ))}
                </div>
             </section>
           )}

           <section class="bg-[#0f172a] border border-[#1e293b] p-6 rounded-lg overflow-hidden relative">
              <div class="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                 <span class="material-symbols-outlined text-8xl">terminal</span>
              </div>
              <h3 class="text-[10px] font-mono font-black uppercase tracking-[0.3em] mb-6 opacity-40">COMM_CHANNELS</h3>
              <div class="space-y-3 text-[10px] font-mono text-slate-400">
                 {cv.email && <p class="break-all">{`EMAIL: ${cv.email}`}</p>}
                 {cv.phone && <p>{`TELEP: ${cv.phone}`}</p>}
                 {cv.linkedin && <p class="break-all">{`LINKD: ${cv.linkedin}`}</p>}
              </div>
           </section>
        </aside>
      </div>
    </div>
  )
}
