import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Analysis',
  setup() {

    return () => (
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column (Narrower) */}
        <div class="lg:w-1/3 flex flex-col gap-6">
          {/* ATS Score Card */}
          <div class="bg-surface-container-lowest rounded-xl p-8 ai-glow flex flex-col items-center text-center relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary-container"></div>
            <h2 class="text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-6">Kompatibilitas ATS</h2>
            <div class="relative w-48 h-48 mb-6 flex items-center justify-center">
              {/* Circular Gauge SVG */}
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="45" stroke="#e6e8ea" stroke-width="8"></circle>
                <circle 
                  class="transition-all duration-1000 ease-out" 
                  cx="50" cy="50" fill="none" r="45" 
                  stroke="url(#scoreGradient)" 
                  stroke-dasharray="283" 
                  stroke-dashoffset="65" 
                  stroke-width="8"
                ></circle>
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stop-color="#2402c1"></stop>
                    <stop offset="100%" stop-color="#39b8fd"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-4xl font-bold text-on-surface tracking-tight">76</span>
                <span class="text-xs text-on-surface-variant mt-1">/ 100</span>
              </div>
            </div>
            <p class="text-sm text-on-surface-variant mb-8 px-4">CV Anda terstruktur dengan baik namun kurang dalam kata kunci industri yang relevan.</p>
            <button class="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary-container text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 transition-transform active:scale-95 group">
              <span class="material-symbols-outlined group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span>Perbaiki dengan AI</span>
            </button>
          </div>

          {/* Action Card */}
          <div class="bg-surface-container-low rounded-xl p-6 flex flex-col gap-4 border border-outline-variant/10">
            <h3 class="text-sm font-semibold text-on-surface">Analisis Target</h3>
            <button class="w-full py-3 px-4 rounded-lg bg-surface-container-lowest text-primary font-medium flex items-center justify-between border border-primary/10 hover:border-primary/30 transition-colors shadow-sm">
              <div class="flex items-center space-x-2">
                <span class="material-symbols-outlined text-primary/70">radar</span>
                <span>Cek Kecocokan Kerja</span>
              </div>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column (Wider) */}
        <div class="lg:w-2/3 flex flex-col gap-8">
          {/* Top Summary & Strengths/Weaknesses */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
              <div class="flex items-center space-x-2 mb-4 text-emerald-600">
                <span class="material-symbols-outlined">trending_up</span>
                <h3 class="font-semibold text-on-surface">Kelebihan</h3>
              </div>
              <ul class="space-y-3 text-sm text-on-surface-variant">
                <li class="flex items-start space-x-2">
                  <span class="material-symbols-outlined text-[16px] text-emerald-500 mt-0.5">check_circle</span>
                  <span>Metrik kuantitatif yang kuat dalam peran terbaru.</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="material-symbols-outlined text-[16px] text-emerald-500 mt-0.5">check_circle</span>
                  <span>Progres yang jelas dalam tanggung jawab kepemimpinan.</span>
                </li>
              </ul>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
              <div class="flex items-center space-x-2 mb-4 text-amber-600">
                <span class="material-symbols-outlined">warning</span>
                <h3 class="font-semibold text-on-surface">Area Perbaikan</h3>
              </div>
              <ul class="space-y-3 text-sm text-on-surface-variant">
                <li class="flex items-start space-x-2">
                  <span class="material-symbols-outlined text-[16px] text-amber-500 mt-0.5">error_outline</span>
                  <span>Ringkasan profil kurang memiliki daya tarik yang kuat.</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="material-symbols-outlined text-[16px] text-amber-500 mt-0.5">error_outline</span>
                  <span>Kurang kata kunci teknologi modern.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Missing Keywords */}
          <div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-semibold text-on-surface">Kata Kunci Disarankan</h3>
              <span class="text-xs text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">Dampak Tinggi</span>
            </div>
            <div class="flex flex-wrap gap-2">
              {['Agile Methodology', 'Cross-functional Leadership', 'Data-Driven Decisions', 'SaaS Metrics'].map(key => (
                <span key={key} class="px-3 py-1.5 bg-surface-container-lowest text-primary text-xs font-medium rounded-md border border-primary/20 shadow-sm cursor-pointer hover:bg-primary/5 transition-colors">+ {key}</span>
              ))}
              <span class="px-3 py-1.5 bg-surface-container-lowest text-on-surface-variant text-xs font-medium rounded-md border border-outline-variant/30 shadow-sm">+ JIRA</span>
            </div>
          </div>

          {/* Detailed Analysis Accordions */}
          <div class="space-y-3">
            <h2 class="text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-2 mt-4">Analisis Per Bagian</h2>
            
            {/* Professional Summary */}
            <div class="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden">
              <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-low/50 transition-colors text-left">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                    <span class="material-symbols-outlined text-sm">article</span>
                  </div>
                  <span class="font-semibold text-on-surface">Ringkasan Profesional</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">Perlu Perbaikan</span>
                  <span class="material-symbols-outlined text-on-surface-variant transition-transform">expand_more</span>
                </div>
              </button>
            </div>

            {/* Work Experience */}
            <div class="bg-surface-container-lowest rounded-xl border border-primary/20 shadow-sm overflow-hidden relative">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <button class="w-full px-6 py-4 flex items-center justify-between bg-surface-container-low/30 text-left">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <span class="material-symbols-outlined text-sm">work</span>
                  </div>
                  <span class="font-semibold text-on-surface">Pengalaman Kerja</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Kuat</span>
                  <span class="material-symbols-outlined text-on-surface-variant rotate-180">expand_more</span>
                </div>
              </button>
              <div class="px-6 pb-6 pt-2 border-t border-outline-variant/10 ml-11">
                <p class="text-sm text-on-surface-variant mb-4">Bagian pengalaman Anda terformat dengan baik dan mencakup metrik kuantitatif yang bagus. AI menyarankan beberapa perubahan kecil untuk dampak maksimal.</p>
                <div class="bg-surface-container-low rounded-lg p-4 space-y-2">
                  <div class="flex items-start space-x-2 text-sm">
                    <span class="material-symbols-outlined text-[16px] text-primary mt-0.5">lightbulb</span>
                    <span class="text-on-surface">Ubah "Memimpin tim berisi 5 orang" menjadi "Mengarahkan tim lintas fungsi berisi 5 orang untuk meningkatkan output Q3 sebesar 15%"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div class="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden">
              <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-low/50 transition-colors text-left">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-error-container/50 text-error flex items-center justify-center">
                    <span class="material-symbols-outlined text-sm">build</span>
                  </div>
                  <span class="font-semibold text-on-surface">Keahlian</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-xs font-medium text-error bg-error-container/50 px-2 py-1 rounded">Perbaikan Kritikal</span>
                  <span class="material-symbols-outlined text-on-surface-variant transition-transform">expand_more</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
