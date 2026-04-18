import { type TemplateProps, ExperienceItem } from '../TemplateShared'

export default function CorporateSlate({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  
  return (
    <div 
      class="p-16 flex flex-col min-h-full bg-white text-on-surface transition-all duration-700" 
      style={{ fontFamily: activeFont }}
    >
      {/* ── CLEAN CORPORATE HEADER ── */}
      <header class="flex flex-col gap-6 mb-12 border-b-2 border-black/5 pb-12 shrink-0">
        <div class="flex justify-between items-start gap-12">
          <div class="flex-1">
            <h1 class="text-5xl font-black tracking-tight text-on-surface uppercase mb-2 leading-none">
              {cv.firstName} <span style={{ color }}>{cv.lastName}</span>
            </h1>
            <p class="text-lg font-bold uppercase tracking-[0.3em] opacity-40">
              {cv.professionalTitle}
            </p>
          </div>
          
          <div class="flex flex-col items-end gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">
             {cv.email && <div class="flex items-center gap-3">{cv.email} <span class="material-symbols-outlined text-sm" style={{ color }}>mail</span></div>}
             {cv.phone && <div class="flex items-center gap-3">{cv.phone} <span class="material-symbols-outlined text-sm" style={{ color }}>call</span></div>}
             {cv.location && <div class="flex items-center gap-3">{cv.location} <span class="material-symbols-outlined text-sm" style={{ color }}>location_on</span></div>}
             {cv.website && <div class="flex items-center gap-3">{cv.website} <span class="material-symbols-outlined text-sm" style={{ color }}>language</span></div>}
          </div>
        </div>

        {/* SUMMARY SECTION */}
        <div class="bg-surface-container-low/30 p-8 rounded-2xl border border-black/5">
           <p class="text-sm leading-relaxed font-medium text-on-surface-variant italic">
             "{cv.summary}"
           </p>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <div class="space-y-12">
        {/* EXPERIENCE */}
        <section>
          <div class="flex items-center gap-4 mb-8">
             <h3 class="text-xs font-black uppercase tracking-[0.4em] text-on-surface shrink-0">Pengalaman Profesional</h3>
             <div class="h-px flex-1 bg-black/5"></div>
          </div>
          <div class="space-y-2">
             {cv.experience.map((exp: any) => (
                <ExperienceItem key={exp.id} exp={exp} color={color} />
             ))}
          </div>
        </section>

        {/* SKILLS & CERTS GRID */}
        <div class="grid grid-cols-2 gap-16 pt-8 border-t border-black/5">
           {/* SKILLS */}
           <section>
              <h3 class="text-[11px] font-black uppercase tracking-[0.4em] mb-8 border-b-2 pb-2 inline-block" style={{ borderColor: `${color}20` }}>
                Kompetensi Utama
              </h3>
              <div class="grid grid-cols-1 gap-2">
                 {cv.skills.map((skill: string) => (
                   <div key={skill} class="flex items-center gap-4 text-[11px] font-bold text-on-surface-variant group">
                      <div class="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:scale-125 transition-transform" style={{ backgroundColor: color }}></div>
                      <span class="uppercase tracking-widest">{skill}</span>
                   </div>
                 ))}
              </div>
           </section>

           {/* CERTIFICATIONS */}
           {cv.certifications.length > 0 && (
             <section>
                <h3 class="text-[11px] font-black uppercase tracking-[0.4em] mb-8 border-b-2 pb-2 inline-block" style={{ borderColor: `${color}20` }}>
                  Sertifikasi & Lisensi
                </h3>
                <div class="space-y-6">
                   {cv.certifications.map((cert: any) => (
                      <div key={cert.id} class="min-w-0">
                         <h4 class="text-xs font-black text-on-surface uppercase mb-1">{cert.name}</h4>
                         <p class="text-[9px] font-bold text-on-surface-variant opacity-60 uppercase tracking-widest">{cert.issuer} • {cert.date}</p>
                      </div>
                   ))}
                </div>
             </section>
           )}
        </div>
      </div>
    </div>
  )
}
