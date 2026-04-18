import { type TemplateProps } from '../TemplateShared'

export default function MinimalistSerif({ cv, ui, activeFont }: TemplateProps) {
  const color = ui.accentColor
  const font = activeFont.includes('Serif') ? activeFont : "'Merriweather', serif"

  return (
    <div
      class="bg-[#faf9f6] min-h-full"
      style={{ fontFamily: font }}
    >
      {/* ── HEADER ── */}
      <header class="text-center px-24 pt-24 pb-10 border-b border-black/8">
        <h1
          class="text-6xl font-light italic leading-none mb-5 break-words"
          style={{ color, letterSpacing: '-0.01em' }}
        >
          {cv.firstName} {cv.lastName}
        </h1>

        <p class="text-[10px] font-black uppercase tracking-[0.45em] text-black/40 mb-8">
          {cv.professionalTitle}
        </p>

        {/* Contact row */}
        <div class="flex items-center justify-center flex-wrap gap-x-6 gap-y-1 text-[10.5px] font-semibold text-black/50 tracking-wide">
          {cv.email    && <span>{cv.email}</span>}
          {cv.email    && cv.phone && <span class="text-black/20">·</span>}
          {cv.phone    && <span>{cv.phone}</span>}
          {cv.phone    && cv.location && <span class="text-black/20">·</span>}
          {cv.location && <span>{cv.location}</span>}
        </div>
      </header>

      {/* ── BODY: 2-column layout ── */}
      <div class="flex gap-0">

        {/* ── LEFT SIDEBAR ── */}
        <aside class="w-[230px] shrink-0 border-r border-black/8 px-8 py-12 flex flex-col gap-14">

          {/* Biography */}
          <section>
            <h2 class="text-[9px] font-black uppercase tracking-[0.45em] text-black/30 mb-5">
              Biography
            </h2>
            <p class="text-[12px] leading-[1.75] text-black/65 font-normal break-words">
              {cv.summary}
            </p>
          </section>

          {/* Expertise */}
          {cv.skills.length > 0 && (
            <section>
              <h2 class="text-[9px] font-black uppercase tracking-[0.45em] text-black/30 mb-5">
                Expertise
              </h2>
              <ul class="flex flex-col gap-2.5">
                {cv.skills.map((skill: string) => (
                  <li
                    key={skill}
                    class="text-[12px] text-black/55 font-normal leading-snug italic break-words"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Distinctions (certs) */}
          {cv.certifications.length > 0 && (
            <section>
              <h2 class="text-[9px] font-black uppercase tracking-[0.45em] text-black/30 mb-5">
                Distinctions
              </h2>
              <ul class="flex flex-col gap-6">
                {cv.certifications.map((cert: any) => (
                  <li key={cert.id} class="border-l pl-4" style={{ borderColor: `${color}30` }}>
                    <p class="text-[11.5px] font-semibold italic text-black/75 leading-snug mb-1 break-words">
                      {cert.name}
                    </p>
                    <p class="text-[9.5px] uppercase tracking-wider font-bold text-black/35">
                      {cert.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main class="flex-1 min-w-0 px-12 py-12">
          <h2 class="text-[9px] font-black uppercase tracking-[0.45em] text-black/30 mb-10">
            Professional Narrative
          </h2>

          <div class="flex flex-col gap-12">
            {cv.experience.map((exp: any) => (
              <article key={exp.id} class="min-w-0">
                {/* Title row */}
                <div class="flex items-start justify-between gap-6 mb-1">
                  <h3
                    class="text-[18px] font-semibold italic leading-snug break-words flex-1 min-w-0"
                    style={{ color }}
                  >
                    {exp.role}
                  </h3>
                  <span class="text-[10px] font-semibold text-black/35 whitespace-nowrap shrink-0 pt-1">
                    {exp.period}
                  </span>
                </div>

                {/* Company */}
                <p class="text-[10px] uppercase tracking-[0.25em] font-black text-black/35 mb-5 break-words">
                  {exp.company}
                </p>

                {/* Divider */}
                <div class="border-t mb-5" style={{ borderColor: `${color}15` }} />

                {/* Description */}
                <ul class="flex flex-col gap-3">
                  {exp.description.map((d: string, i: number) => (
                    <li key={i} class="flex items-start gap-4">
                      <span
                        class="mt-[7px] w-[4px] h-[4px] rounded-full shrink-0"
                        style={{ backgroundColor: `${color}50` }}
                      />
                      <p class="text-[12.5px] leading-[1.7] text-black/65 font-normal break-words text-justify">
                        {d}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
