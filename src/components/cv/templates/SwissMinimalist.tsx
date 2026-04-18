import { type TemplateProps } from '../TemplateShared'

export default function SwissMinimalist({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor

  const SectionRow = ({ label, content }: { label: string; content: any }) => (
    <div class="flex border-b border-black/10 last:border-0">
      {/* Label Column */}
      <div
        class="w-[130px] shrink-0 flex items-start pt-5 pb-5 px-4"
        style={{ backgroundColor: color }}
      >
        <span class="text-[9px] font-black uppercase tracking-[0.18em] text-white leading-tight">
          {label}
        </span>
      </div>

      {/* Content Column */}
      <div class="flex-1 py-5 px-8 text-left">
        {content}
      </div>
    </div>
  )

  const contactParts = [cv.phone, cv.email, cv.website, cv.location].filter(Boolean)

  return (
    <div
      class="flex flex-col min-h-full bg-white text-[#111] transition-all duration-700"
      style={{ fontFamily: activeFont }}
    >
      {/* ── HEADER ── */}
      <header class="px-10 pt-12 pb-6 border-b border-black/10">
        <h1 class="text-5xl font-black tracking-tighter uppercase leading-none mb-2">
          {cv.firstName} {cv.lastName}
        </h1>
        <p class="text-[13px] font-black uppercase tracking-[0.2em] text-black/60 mb-3">
          {cv.professionalTitle}
          {(cv.location || cv.email) && (
            <span class="font-black">
              {cv.professionalTitle && (cv.location || cv.email) ? ' | ' : ''}
              {cv.location}
            </span>
          )}
        </p>
        {contactParts.length > 0 && (
          <p class="text-[10px] font-medium text-black/40 tracking-wide">
            {contactParts.join(' | ')}
          </p>
        )}
      </header>

      {/* ── GRID SECTIONS ── */}
      <div class="flex-1">

        {/* PROFILE */}
        <SectionRow label="Profile" content={
          <p class="text-[12.5px] leading-[1.75] text-black/65 font-medium break-words">
            {cv.summary}
          </p>
        } />

        {/* EXPERIENCE */}
        {cv.experience.length > 0 && (
          <SectionRow label="Experience" content={
            <div class="space-y-6">
              {cv.experience.map((exp: any) => (
                <div key={exp.id}>
                  <p class="text-[10px] text-black/40 font-bold mb-1">{exp.period}</p>
                  <h4 class="text-sm font-black uppercase tracking-tight text-black mb-0.5">
                    {exp.role}
                  </h4>
                  <p class="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3">
                    {exp.company}
                  </p>
                  <ul class="space-y-1">
                    {exp.description.map((d: string, i: number) => (
                      <li key={i} class="text-[11.5px] leading-[1.6] text-black/55 flex gap-2">
                        <span class="shrink-0 mt-[0.4em]">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          } />
        )}

        {/* SKILLS */}
        {cv.skills.length > 0 && (
          <SectionRow label="Skills" content={
            <div class="flex flex-wrap gap-x-8 gap-y-1">
              {cv.skills.map((skill: string) => (
                <span key={skill} class="text-[11.5px] font-bold text-black/65">
                  {skill}
                </span>
              ))}
            </div>
          } />
        )}

        {/* CERTIFICATIONS */}
        {cv.certifications.length > 0 && (
          <SectionRow label="Certifications" content={
            <div class="space-y-4">
              {cv.certifications.map((cert: any) => (
                <div key={cert.id}>
                  <h4 class="text-sm font-black uppercase tracking-tight text-black">{cert.name}</h4>
                  <p class="text-[10px] font-bold text-black/40 uppercase tracking-widest">
                    {cert.issuer}
                    {cert.date ? ` — ${cert.date}` : ''}
                  </p>
                </div>
              ))}
            </div>
          } />
        )}

        {/* REFERENCES PLACEHOLDER */}
        <SectionRow label="References" content={
          <p class="text-[11.5px] text-black/40 font-bold italic">
            Available upon request.
          </p>
        } />

      </div>
    </div>
  )
}
