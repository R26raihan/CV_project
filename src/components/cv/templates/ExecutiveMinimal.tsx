import { type TemplateProps, ExperienceItem, SkillsGrid, CertificationItem } from '../TemplateShared'

export default function ExecutiveMinimal({ cv, ui, activeFont }: TemplateProps) {
  return (
    <div class="p-16 flex flex-col h-full bg-white transition-all duration-700 min-w-0" style={{ fontFamily: activeFont }}>
      <header class="border-b-4 border-primary/5 mb-10 pb-10 text-center break-words" style={{ color: ui.accentColor }}>
        <h1 class="text-5xl font-black tracking-tighter mb-4 break-words leading-tight">
           {cv.firstName} {cv.lastName}
        </h1>
        <p class="text-xl font-bold opacity-70 uppercase tracking-[0.3em] break-words">{cv.professionalTitle}</p>
      </header>
      
      <div class={`${ui.layoutColumns === 1 ? 'flex flex-col gap-12' : 'grid grid-cols-12 gap-12'} flex-1 text-left transition-all duration-500 min-w-0`}>
        {/* Main Content Area */}
        <div class={ui.layoutColumns === 1 ? 'space-y-12 min-w-0' : 'col-span-8 flex flex-col gap-12 min-w-0'}>
          <section class="min-w-0">
            <h3 class="text-xs font-black uppercase tracking-[0.3em] mb-6 border-b-2 pb-2 inline-block" style={{ color: ui.accentColor, borderColor: `${ui.accentColor}15` }}>Profil</h3>
            <p class="text-sm leading-relaxed text-on-surface-variant font-medium break-words whitespace-pre-wrap">{cv.summary}</p>
          </section>
          <section class="min-w-0">
            <h3 class="text-xs font-black uppercase tracking-[0.3em] mb-8 border-b-2 pb-2 inline-block" style={{ color: ui.accentColor, borderColor: `${ui.accentColor}15` }}>Pengalaman Kerja</h3>
            {cv.experience.map((exp: any) => <ExperienceItem exp={exp} color={ui.accentColor} />)}
          </section>

          {cv.certifications.length > 0 && (
            <section class="min-w-0">
              <h3 class="text-xs font-black uppercase tracking-[0.3em] mb-6 border-b-2 pb-2 inline-block" style={{ color: ui.accentColor, borderColor: `${ui.accentColor}15` }}>Sertifikasi</h3>
              <div class="space-y-1">
                {cv.certifications.map((cert: any) => <CertificationItem cert={cert} color={ui.accentColor} />)}
              </div>
            </section>
          )}
          
          {ui.layoutColumns === 1 && (
            <>
              <section class="min-w-0">
                <h3 class="text-xs font-black uppercase tracking-[0.3em] mb-6 border-b-2 pb-2 inline-block" style={{ color: ui.accentColor, borderColor: `${ui.accentColor}15` }}>Keahlian</h3>
                <SkillsGrid skills={cv.skills} color={ui.accentColor} />
              </section>
              <section class="min-w-0">
                <h3 class="text-xs font-black uppercase tracking-[0.3em] mb-6 border-b-2 pb-2 inline-block" style={{ color: ui.accentColor, borderColor: `${ui.accentColor}15` }}>Kontak</h3>
                <div class="flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-bold text-on-surface-variant break-words">
                  {cv.email && <div class="flex items-center gap-2"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>mail</span> {cv.email}</div>}
                  {cv.phone && <div class="flex items-center gap-2"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>call</span> {cv.phone}</div>}
                  {cv.location && <div class="flex items-center gap-2"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>location_on</span> {cv.location}</div>}
                  {cv.linkedin && <div class="flex items-center gap-2"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>link</span> {cv.linkedin}</div>}
                  {cv.github && <div class="flex items-center gap-2"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>public</span> {cv.github}</div>}
                  {cv.website && <div class="flex items-center gap-2"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>language</span> {cv.website}</div>}
                </div>
              </section>
            </>
          )}
        </div>

        {/* Sidebar Area (Only for 2 columns) */}
        {ui.layoutColumns === 2 && (
          <div class="col-span-4 flex flex-col gap-12 pl-10 border-l min-w-0" style={{ borderColor: `${ui.accentColor}10` }}>
             <section class="min-w-0">
                <h3 class="text-[10px] font-black uppercase tracking-[0.3em] mb-6" style={{ color: ui.accentColor }}>Kontak</h3>
                <div class="space-y-4 text-[11px] font-bold text-on-surface-variant break-words">
                   {cv.email && <div class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>mail</span> {cv.email}</div>}
                   {cv.phone && <div class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>call</span> {cv.phone}</div>}
                   {cv.location && <div class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>location_on</span> {cv.location}</div>}
                   {cv.linkedin && <div class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>link</span> {cv.linkedin}</div>}
                   {cv.github && <div class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>public</span> {cv.github}</div>}
                   {cv.website && <div class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" style={{ color: ui.accentColor }}>language</span> {cv.website}</div>}
                </div>
             </section>
            <section class="min-w-0">
              <h3 class="text-[10px] font-black uppercase tracking-[0.3em] mb-6" style={{ color: ui.accentColor }}>Keahlian</h3>
              <SkillsGrid skills={cv.skills} color={ui.accentColor} />
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
