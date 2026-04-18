import { type TemplateProps } from '../TemplateShared'

export default function NordicHorizon({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor

  return (
    <div
      class="flex min-h-full bg-white text-[#222] transition-all duration-700"
      style={{ fontFamily: activeFont }}
    >
      {/* ── LEFT SIDEBAR: Contact ── */}
      <aside class="w-[200px] shrink-0 bg-[#f0f4f8] flex flex-col pt-32 px-6 pb-10 gap-6">
        <div class="flex flex-col gap-5 text-[11px] font-medium text-[#4a5568]">
          {cv.phone && (
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[15px] shrink-0 mt-0.5" style={{ color }}>call</span>
              <span class="leading-snug break-all">{cv.phone}</span>
            </div>
          )}
          {cv.email && (
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[15px] shrink-0 mt-0.5" style={{ color }}>mail</span>
              <span class="leading-snug break-all">{cv.email}</span>
            </div>
          )}
          {cv.website && (
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[15px] shrink-0 mt-0.5" style={{ color }}>link</span>
              <span class="leading-snug break-all">{cv.website}</span>
            </div>
          )}
          {cv.location && (
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[15px] shrink-0 mt-0.5" style={{ color }}>location_on</span>
              <span class="leading-snug">{cv.location}</span>
            </div>
          )}
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main class="flex-1 flex flex-col pt-10 px-10 pb-10 bg-white">
        {/* NAME & TITLE */}
        <header class="mb-10">
          <h1
            class="text-5xl font-black tracking-tight leading-none mb-3"
            style={{ color }}
          >
            {cv.firstName} {cv.lastName}
          </h1>
          <p class="text-[10px] font-black uppercase tracking-[0.35em] text-[#888]">
            {cv.professionalTitle}
          </p>
        </header>

        {/* SUMMARY */}
        <section class="mb-8 border-b border-[#d9e2ec] pb-8">
          <h2 class="text-lg font-black uppercase tracking-[0.1em] text-[#222] mb-4">Summary</h2>
          <p class="text-[12.5px] leading-[1.75] text-[#555] font-medium break-words">
            {cv.summary}
          </p>
        </section>

        {/* EXPERIENCE */}
        {cv.experience.length > 0 && (
          <section class="mb-8 border-b border-[#d9e2ec] pb-8">
            <h2 class="text-lg font-black uppercase tracking-[0.1em] text-[#222] mb-6">Experience</h2>
            <div class="space-y-8">
              {cv.experience.map((exp: any) => (
                <div key={exp.id} class="flex gap-6">
                  {/* Period */}
                  <div class="w-[90px] shrink-0 text-[10px] font-bold text-[#888] leading-snug pt-0.5">
                    {exp.period}
                  </div>
                  {/* Content */}
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-black uppercase tracking-tight text-[#222] mb-0.5">{exp.role}</h4>
                    <p class="text-[11px] text-[#888] font-medium mb-3">{exp.company}</p>
                    <ul class="space-y-1.5">
                      {exp.description.map((d: string, i: number) => (
                        <li key={i} class="text-[11.5px] leading-[1.65] text-[#555] flex gap-2 items-start">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#cbd5e0] shrink-0 mt-[0.45em]"></span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BOTTOM GRID: Education + Skills */}
        <div class="grid grid-cols-2 gap-10 mb-8 border-b border-[#d9e2ec] pb-8">
          {/* Education (uses certifications as placeholder) */}
          {cv.certifications.length > 0 && (
            <section>
              <h2 class="text-lg font-black uppercase tracking-[0.1em] text-[#222] mb-4">Education</h2>
              <div class="space-y-4">
                {cv.certifications.map((cert: any) => (
                  <div key={cert.id}>
                    <p class="text-[11px] font-bold text-[#888] mb-0.5">{cert.date}</p>
                    <h4 class="text-[12.5px] font-black text-[#222] mb-0.5">{cert.name}</h4>
                    <p class="text-[11.5px] text-[#666] font-medium">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {cv.skills.length > 0 && (
            <section>
              <h2 class="text-lg font-black uppercase tracking-[0.1em] text-[#222] mb-4">Skills</h2>
              <div class="space-y-1.5">
                {cv.skills.map((skill: string) => (
                  <p key={skill} class="text-[12.5px] text-[#555] font-medium">{skill}</p>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* REFERENCES */}
        <section>
          <h2 class="text-lg font-black uppercase tracking-[0.1em] text-[#222] mb-3">References</h2>
          <p class="text-[12px] text-[#888] font-medium italic">Available upon request.</p>
        </section>
      </main>

      {/* ── RIGHT PANEL: Accent Block + Photo ── */}
      <div class="w-[130px] shrink-0 bg-[#dce8f5] flex flex-col items-center pt-10 gap-4">
        {cv.profileImage ? (
          <img
            src={cv.profileImage}
            alt="Profile"
            class="w-20 h-20 object-cover rounded-lg shadow-md border-2 border-white"
          />
        ) : (
          <div class="w-20 h-20 rounded-lg bg-white/40 border-2 border-white flex items-center justify-center">
            <span class="material-symbols-outlined text-3xl text-white/60">person</span>
          </div>
        )}
      </div>
    </div>
  )
}
