import { type TemplateProps } from '../TemplateShared'

export default function PremiumOnyx({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  return (
    <div class="flex flex-col h-full bg-white transition-all duration-700 min-w-0" style={{ fontFamily: activeFont }}>
      <header class="bg-[#111827] text-white p-16 pb-12 relative overflow-hidden shrink-0">
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="relative z-10 flex justify-between items-end gap-12">
          <div class="min-w-0">
            <h1 class="text-6xl font-black tracking-tight mb-2 uppercase border-b-8 border-primary inline-block leading-none" style={{ borderColor: color }}>
              {cv.firstName} <span class="opacity-50 font-light">{cv.lastName}</span>
            </h1>
            <p class="text-2xl font-bold tracking-[0.4em] opacity-40 uppercase mt-4">{cv.professionalTitle}</p>
          </div>
          <div class="text-right text-[10px] font-black uppercase tracking-[0.2em] space-y-2 opacity-60">
            {cv.email && <p>{cv.email}</p>}
            {cv.phone && <p>{cv.phone}</p>}
            {cv.location && <p>{cv.location}</p>}
          </div>
        </div>
      </header>

      <div class="flex flex-1 min-w-0">
        {/* Sidebar with Dark Tint */}
        <aside class="w-[30%] bg-[#f9fafb] p-12 flex flex-col gap-12 border-r border-[#e5e7eb] shrink-0">
          <section>
            <h3 class="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3">
              <span class="w-2 h-6 bg-black" style={{ backgroundColor: color }}></span>
              Keahlian
            </h3>
            <div class="flex flex-col gap-3">
              {cv.skills.map((skill: string) => (
                <div key={skill} class="flex items-center gap-3 text-xs font-bold text-on-surface-variant">
                  <span class="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></span>
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {cv.certifications.length > 0 && (
            <section>
              <h3 class="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                <span class="w-2 h-6 bg-black" style={{ backgroundColor: color }}></span>
                Sertifikasi
              </h3>
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
        </aside>

        {/* Main Content */}
        <main class="flex-1 p-12 flex flex-col gap-12 overflow-hidden text-left">
           <section>
            <h3 class="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3 border-b-2 pb-2" style={{ borderColor: `${color}10` }}>
              Personal Summary
            </h3>
            <p class="text-md leading-relaxed text-on-surface font-medium opacity-80">{cv.summary}</p>
          </section>

          <section>
            <h3 class="text-sm font-black uppercase tracking-widest mb-10 flex items-center gap-3 border-b-2 pb-2" style={{ borderColor: `${color}10` }}>
              Experience
            </h3>
            <div class="space-y-12">
              {cv.experience.map((exp: any) => (
                <div key={exp.id} class="group">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-xl font-black text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors" style={{ color: color }}>{exp.role}</h4>
                    <span class="text-xs font-black opacity-30">{exp.period}</span>
                  </div>
                  <p class="text-sm font-black text-on-surface opacity-60 mb-4">{exp.company}</p>
                  <ul class="space-y-3">
                    {exp.description.map((d: string, i: number) => (
                      <li key={i} class="text-[13px] text-on-surface-variant leading-relaxed flex gap-4">
                        <span class="text-lg leading-none" style={{ color: color }}>•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
