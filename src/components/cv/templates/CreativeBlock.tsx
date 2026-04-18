import { type TemplateProps, ExperienceItem, SkillsGrid, CertificationItem } from '../TemplateShared'

export default function CreativeBlock({ cv, ui, activeFont }: TemplateProps) {
  // Helper to apply opacity to hex
  const hexToRGBA = (hex: string, opacity: number) => {
    // Basic hex to rgba conversion
    const normalizedHex = hex.startsWith('#') ? hex : '#111827'
    const r = parseInt(normalizedHex.slice(1, 3), 16) || 0
    const g = parseInt(normalizedHex.slice(3, 5), 16) || 0
    const b = parseInt(normalizedHex.slice(5, 7), 16) || 0
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
  }

  const borderRadiusStyle = `${ui.borderRadius}px`

  return (
    <div class={`${ui.layoutColumns === 1 ? 'flex flex-col' : 'flex'} h-full bg-white transition-all duration-700 min-w-0`} style={{ fontFamily: activeFont }}>
      {/* Sidebar / Top Head */}
      <aside 
        class={`${ui.layoutColumns === 1 ? 'w-full p-16' : 'w-[32%] p-12'} text-white flex flex-col gap-12 relative overflow-hidden transition-all duration-500 shrink-0`} 
        style={{ 
          backgroundColor: ui.accentColor, // Base color for the block
          // We can use a pseudo-element or just the background color. 
          // If we want the text to stay white but the block to be translucent:
          // background: hexToRGBA(ui.accentColor, ui.accentOpacity)
        }}
      >
        {/* Background Overlay for Opacity (safest way to keep text opaque) */}
        <div 
          class="absolute inset-0 transition-all duration-500" 
          style={{ 
            backgroundColor: ui.accentColor, 
            opacity: ui.accentOpacity / 100 
          }}
        ></div>

        {/* Background Accent Mesh */}
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <div class="absolute -top-[20%] -right-[20%] w-[150%] h-[150%] rounded-full border-[60px] border-white/20 animate-spin-slow"></div>
        </div>
        
        <div class="relative z-10 flex flex-col gap-8 text-left">
           <div 
             class="w-32 h-32 overflow-hidden border-4 border-white/20 shadow-2xl shrink-0 group-hover:scale-105 transition-all duration-500"
             style={{ borderRadius: borderRadiusStyle }}
           >
             {cv.profileImage ? (
               <img src={cv.profileImage} crossorigin="anonymous" class="w-full h-full object-cover" />
             ) : (
               <div class="w-full h-full flex items-center justify-center text-5xl font-black bg-white/10">{cv.firstName[0]}</div>
             )}
           </div>
           
           <div class="space-y-2">
             <h1 class="text-4xl font-black tracking-tighter uppercase leading-none break-words">
                {cv.firstName}<br/><span class="opacity-50">{cv.lastName}</span>
             </h1>
             <p class="text-sm font-bold tracking-[0.2em] opacity-60 uppercase break-words">{cv.professionalTitle}</p>
           </div>
        </div>

        <div class="relative z-10 space-y-10 text-left">
          <section class="min-w-0">
            <h3 class="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-40">Kontak</h3>
            <div class="space-y-5 text-[11px] font-bold break-words">
               {cv.email && <div class="flex items-center gap-4"><span class="material-symbols-outlined text-md opacity-40">mail</span> {cv.email}</div>}
               {cv.phone && <div class="flex items-center gap-4"><span class="material-symbols-outlined text-md opacity-40">call</span> {cv.phone}</div>}
               {cv.location && <div class="flex items-center gap-4"><span class="material-symbols-outlined text-md opacity-40">location_on</span> {cv.location}</div>}
               {cv.linkedin && <div class="flex items-center gap-4"><span class="material-symbols-outlined text-md opacity-40">link</span> {cv.linkedin}</div>}
            </div>
          </section>

          <section class="min-w-0">
             <h3 class="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-40">Keahlian</h3>
             <div class="flex flex-wrap gap-2">
                {cv.skills.map((skill: string) => (
                  <span 
                    key={skill} 
                    class="px-3 py-1.5 bg-white/10 text-[10px] font-black uppercase tracking-wider backdrop-blur-sm border border-white/10 transition-all"
                    style={{ borderRadius: `${ui.borderRadius / 2}px` }}
                  >
                    {skill}
                  </span>
                ))}
             </div>
          </section>
        </div>
      </aside>

      {/* Main Content */}
      <main class="flex-1 p-16 flex flex-col gap-12 text-left min-w-0">
        <section class="min-w-0">
          <h3 class="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-on-surface opacity-30">Career Summary</h3>
          <p class="text-md leading-relaxed text-on-surface-variant font-medium break-words whitespace-pre-wrap italic border-l-4 pl-8" style={{ borderColor: `${ui.accentColor}20` }}>
            {cv.summary}
          </p>
        </section>

        <section class="min-w-0">
          <h3 class="text-[11px] font-black uppercase tracking-[0.4em] mb-12 text-on-surface opacity-30">Experience</h3>
          {cv.experience.map((exp: any) => <ExperienceItem exp={exp} color={ui.accentColor} />)}
        </section>

        {cv.certifications.length > 0 && (
          <section class="min-w-0">
             <h3 class="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-on-surface opacity-30">Certifications</h3>
             <div class="grid grid-cols-2 gap-8">
                {cv.certifications.map((cert: any) => <CertificationItem cert={cert} color={ui.accentColor} />)}
             </div>
          </section>
        )}
      </main>
    </div>
  )
}
