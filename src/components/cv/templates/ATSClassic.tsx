import { type TemplateProps } from '../TemplateShared'

export default function ATSClassic({ cv, ui, activeFont }: TemplateProps) {
  return (
    <div class="p-12 text-left bg-white text-black min-h-full" style={{ fontFamily: activeFont, color: ui.accentColor === '#111827' ? 'black' : ui.accentColor }}>
      {/* Header */}
      <header class="text-center mb-6 space-y-1">
        <h1 class="text-2xl font-black uppercase tracking-tight">{cv.firstName} {cv.lastName}</h1>
        <div class="text-[11.5px] font-medium flex justify-center gap-3 divide-x divide-gray-300">
          <span class="px-3">{cv.email}</span>
          <span class="px-3">{cv.phone}</span>
          <span class="px-3">{cv.location}</span>
        </div>
        <div class="text-[11.5px] font-medium flex justify-center gap-3 divide-x divide-gray-300">
           {cv.linkedin && <span class="px-3">{cv.linkedin}</span>}
           {cv.github && <span class="px-3">{cv.github}</span>}
           {cv.website && <span class="px-3">{cv.website}</span>}
        </div>
      </header>

      {/* Profile Summary */}
      <section class="mb-6">
        <h2 class="text-[12.5px] font-black uppercase tracking-wider border-b-2 pb-0.5 mb-2.5" style={{ borderColor: ui.accentColor === '#111827' ? 'black' : ui.accentColor }}>Ringkasan Profesional</h2>
        <p class="text-[11.5px] leading-relaxed text-justify">{cv.summary}</p>
      </section>

      {/* Work Experience */}
      {cv.experience.length > 0 && (
        <section class="mb-6">
          <h2 class="text-[12.5px] font-black uppercase tracking-wider border-b-2 pb-0.5 mb-3" style={{ borderColor: ui.accentColor === '#111827' ? 'black' : ui.accentColor }}>Pengalaman Kerja</h2>
          <div class="space-y-4">
            {cv.experience.map((exp: any) => (
              <div key={exp.id}>
                <div class="flex justify-between items-baseline font-black uppercase text-[12px]">
                   <span>{exp.company}</span>
                   <span class="italic text-gray-700 normal-case">{exp.period}</span>
                </div>
                <div class="flex justify-between items-baseline mb-1 text-[11.5px] italic font-bold">
                   <span>{exp.role}</span>
                </div>
                <ul class="space-y-1 mt-1">
                   {exp.description.map((d: string, i: number) => (
                     <li key={i} class="flex items-start gap-2 text-[11.5px]">
                       <span class="mt-[3px] shrink-0">•</span>
                       <span class="text-justify">{d}</span>
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {cv.certifications.length > 0 && (
        <section class="mb-6">
          <h2 class="text-[12.5px] font-black uppercase tracking-wider border-b-2 pb-0.5 mb-2.5" style={{ borderColor: ui.accentColor === '#111827' ? 'black' : ui.accentColor }}>Sertifikasi & Lisensi</h2>
          <div class="space-y-1.5">
            {cv.certifications.map((cert: any) => (
              <div key={cert.id} class="flex justify-between items-baseline">
                <div class="flex items-start gap-2">
                   <span class="text-[10px] mt-0.5">•</span>
                   <span class="text-[11.5px] font-black uppercase">{cert.name}</span>
                   <span class="text-[11.5px] italic text-gray-700"> - {cert.issuer}</span>
                </div>
                <span class="text-[11px] italic text-gray-600 shrink-0 ml-4">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {cv.skills.length > 0 && (
        <section class="mb-6">
          <h2 class="text-[12.5px] font-black uppercase tracking-wider border-b-2 pb-0.5 mb-2.5" style={{ borderColor: ui.accentColor === '#111827' ? 'black' : ui.accentColor }}>Keahlian & Kompetensi</h2>
          <div class="grid grid-cols-2 gap-x-8 gap-y-1">
            {cv.skills.map((skill: string, i: number) => (
              <div key={i} class="flex items-center gap-2 text-[11.5px]">
                <span class="text-[10px] shrink-0">▪</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
