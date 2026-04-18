import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JobMatching',
  setup() {
    return () => (
      <div class="max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div class="mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-2">Analisis Deskripsi Pekerjaan</h2>
          <p class="text-on-surface-variant text-base md:text-lg max-w-2xl">
            Tempelkan deskripsi pekerjaan untuk melihat sejauh mana profil Anda sesuai. AI kami akan menyoroti gap dan membantu menyesuaikan CV Anda berikutnya.
          </p>
        </div>

        {/* Split Layout */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Input */}
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-outline-variant/20 flex flex-col h-full min-h-[500px]">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-on-surface flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">content_paste</span>
                  Deskripsi Pekerjaan
                </h3>
                <button class="text-xs font-medium text-primary hover:text-primary-container transition-colors">Bersihkan</button>
              </div>
              <textarea 
                class="flex-1 w-full bg-surface-container-low border-0 rounded-lg p-4 text-sm text-on-surface-variant focus:ring-2 focus:ring-primary/20 resize-none placeholder:text-outline/50" 
                placeholder="Tempelkan deskripsi pekerjaan lengkap di sini... (Persyaratan, tanggung jawab, tech stack, dll.)"
              ></textarea>
              <div class="mt-6">
                <button class="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary-container text-white font-semibold text-sm tracking-wide shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  Analisis Kecocokan
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Analysis Results */}
          <div class="lg:col-span-7">
            <div class="bg-surface-container-low rounded-xl p-8 relative overflow-hidden ai-glow border border-white/50 h-full">
              {/* Decorative background element */}
              <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              
              {/* Results Header / Match Score */}
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 relative z-10 gap-6">
                <div>
                  <h3 class="text-xl font-bold text-on-surface mb-1">Senior Product Designer</h3>
                  <p class="text-sm text-on-surface-variant">Acme Corp • San Francisco, CA (Remote)</p>
                </div>
                {/* Score Radial/Card */}
                <div class="flex items-center gap-4 bg-surface-container-lowest py-3 px-5 rounded-xl shadow-sm border border-outline-variant/10">
                  <div class="text-center">
                    <span class="text-3xl font-black text-primary leading-none block">78%</span>
                    <span class="text-[10px] uppercase tracking-wider text-outline font-semibold">Skor Kecocokan</span>
                  </div>
                  <div class="h-10 w-10 rounded-full border-4 border-surface-container border-t-secondary-container border-r-secondary-container transform rotate-45"></div>
                </div>
              </div>

              {/* Skill Gap Analysis Bento */}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-8">
                {/* Matched Skills */}
                <div class="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10">
                  <h4 class="text-sm font-semibold text-on-surface mb-4 flex items-center gap-2">
                    <span class="material-symbols-outlined text-green-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Kompetensi yang Sesuai
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    {['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Agile'].map(skill => (
                      <span key={skill} class="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">{skill}</span>
                    ))}
                  </div>
                </div>
                {/* Missing Skills */}
                <div class="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10">
                  <h4 class="text-sm font-semibold text-on-surface mb-4 flex items-center gap-2">
                    <span class="material-symbols-outlined text-red-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                    Gap yang Terindentifikasi
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    {['Framer', 'HTML/CSS', 'Webflow'].map(skill => (
                      <span key={skill} class="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-200">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Insight Summary */}
              <div class="bg-surface-container-lowest p-6 rounded-lg border-l-4 border-l-secondary-container relative z-10 mb-8">
                <h4 class="text-xs uppercase tracking-widest text-secondary-container font-bold mb-2">Penilaian AI</h4>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  Anda memiliki dasar yang kuat untuk peran ini, terutama dalam metodologi UX inti dan sistem desain. Untuk meningkatkan peluang, kita harus menekankan keterampilan kolaborasi lintas fungsi Anda untuk mengompensasi persyaratan teknis front-end yang kurang (HTML/CSS).
                </p>
              </div>

              {/* Final Action */}
              <div class="relative z-10 flex justify-end">
                <button class="py-3 px-6 rounded-lg bg-surface-container-lowest border border-outline-variant text-primary font-semibold text-sm hover:bg-primary/5 transition-colors flex items-center gap-2">
                  <span class="material-symbols-outlined">edit_document</span>
                  Optimalkan CV untuk Peran Ini
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
