import { type TemplateProps } from '../TemplateShared'

export default function GeometricBold({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  const boldFont = "'Montserrat', 'Inter', sans-serif"
  
  return (
    <div class="p-16 flex flex-col h-full bg-white text-[#1a1a1a] transition-all duration-700 min-w-0" style={{ fontFamily: activeFont }}>
      {/* Heavy Header */}
      <header class="flex flex-col md:flex-row gap-12 mb-16 shrink-0 transition-all duration-500">
        <div class="w-48 h-48 rounded-[3rem] overflow-hidden bg-slate-100 shrink-0 border-8 border-slate-50 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
           {cv.profileImage ? (
             <img src={cv.profileImage} crossorigin="anonymous" class="w-full h-full object-cover" />
           ) : (
             <div class="w-full h-full flex items-center justify-center text-7xl font-black text-white" style={{ backgroundColor: color }}>{cv.firstName[0]}</div>
           )}
        </div>
        <div class="flex-1 flex flex-col justify-center min-w-0 text-left">
           <h1 class="text-7xl font-black tracking-tighter leading-none mb-4 uppercase" style={{ color: '#000' }}>
             {cv.firstName} <br/>
             <span style={{ color }}>{cv.lastName}</span>
           </h1>
           <div class="flex items-center gap-4">
              <span class="px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-white" style={{ backgroundColor: color }}>
                {cv.professionalTitle}
              </span>
           </div>
        </div>
        <div class="md:w-64 flex flex-col justify-center gap-4 text-[11px] font-black uppercase tracking-widest opacity-40 text-left border-l-4 pl-8" style={{ borderColor: `${color}20` }}>
           {cv.location && <p class="flex items-center gap-2 italic">{cv.location}</p>}
           {cv.email && <p class="break-all italic">{cv.email}</p>}
           {cv.phone && <p class="italic">{cv.phone}</p>}
        </div>
      </header>

      <div class="grid grid-cols-12 gap-16 flex-1 min-w-0">
        {/* Main Content */}
        <div class="col-span-8 space-y-16 min-w-0 text-left">
           <section>
              <div class="flex items-center gap-6 mb-10">
                 <h2 class="text-3xl font-black uppercase tracking-tighter" style={{ color: '#000' }}>Experience</h2>
                 <div class="h-1.5 flex-1 rounded-full bg-slate-100">
                    <div class="h-full rounded-full" style={{ width: '40%', backgroundColor: color }}></div>
                 </div>
              </div>
              <div class="space-y-12">
                 {cv.experience.map((exp: any) => (
                   <div key={exp.id} class="bg-slate-50/50 p-8 rounded-[2rem] border-2 border-transparent hover:border-slate-100 transition-all">
                      <div class="flex justify-between items-start mb-4">
                         <div class="min-w-0">
                            <h4 class="text-xl font-black uppercase tracking-tight text-slate-800">{exp.role}</h4>
                            <p class="text-sm font-black uppercase tracking-widest opacity-40 mt-1">{exp.company}</p>
                         </div>
                         <span class="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-white rounded-full shadow-sm text-slate-400 whitespace-nowrap ml-6 shrink-0">{exp.period}</span>
                      </div>
                      <ul class="space-y-3">
                         {exp.description.map((d: string, i: number) => (
                           <li key={i} class="text-[13px] leading-relaxed text-slate-600 font-bold flex gap-4">
                              <span class="text-lg leading-none" style={{ color }}>•</span>
                              {d}
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
           </section>
        </div>

        {/* Sidebar */}
        <aside class="col-span-4 space-y-12 min-w-0 text-left">
           <section class="bg-black p-10 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
              <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: color }}></div>
              <h3 class="text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-40">Core Skills</h3>
              <div class="flex flex-wrap gap-3">
                 {cv.skills.map((skill: string) => (
                   <span key={skill} class="px-4 py-2 bg-white/10 text-[10px] font-black rounded-2xl uppercase tracking-widest border border-white/5 hover:bg-white/20 transition-colors">
                      {skill}
                   </span>
                 ))}
              </div>
           </section>

           <section class="p-10 rounded-[3.5rem] border-4 border-slate-50 space-y-8">
              <h3 class="text-xs font-black uppercase tracking-[0.3em] opacity-30">Summary</h3>
              <p class="text-[13px] leading-relaxed font-bold text-slate-500 italic">
                {cv.summary}
              </p>
           </section>

           {cv.certifications.length > 0 && (
             <section class="p-10 rounded-[3.5rem] border-4 border-slate-50 space-y-8">
                <h3 class="text-xs font-black uppercase tracking-[0.3em] opacity-30">Honors</h3>
                <div class="space-y-6">
                   {cv.certifications.map((cert: any) => (
                     <div key={cert.id} class="min-w-0">
                        <h4 class="text-sm font-black text-slate-800 uppercase leading-tight mb-2">{cert.name}</h4>
                        <div class="flex items-center gap-3">
                           <div class="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-[10px] font-black" style={{ color }}>✓</div>
                           <p class="text-[10px] font-black uppercase opacity-30 tracking-widest">{cert.issuer}</p>
                        </div>
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
