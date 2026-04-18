import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Export',
  setup() {
    return () => (
      <div class="max-w-6xl mx-auto">
        {/* Header */}
        <div class="mb-10 text-center">
          <h2 class="text-4xl font-bold text-on-surface tracking-tight mb-3">Ekspor Mahakarya Anda</h2>
          <p class="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Tinjau CV terakhir Anda dan pilih format ekspor. Pengguna Pro mendapatkan akses ke format premium yang dioptimalkan untuk ATS.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: CV Preview */}
          <div class="lg:col-span-7 xl:col-span-8 flex justify-center">
            <div class="bg-surface-container-lowest p-8 rounded-xl shadow-ambient ring-1 ring-outline-variant/20 w-full max-w-2xl aspect-[1/1.414] relative overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
              {/* Placeholder CV Content */}
              <div class="space-y-6 opacity-80 select-none">
                <div class="border-b border-surface-container-high pb-4">
                  <div class="h-6 w-1/3 bg-surface-container-highest rounded mb-2"></div>
                  <div class="h-3 w-1/4 bg-surface-container-high rounded mb-1"></div>
                  <div class="h-3 w-1/5 bg-surface-container-high rounded"></div>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} class="space-y-3">
                    <div class="h-4 w-1/4 bg-surface-container-highest rounded"></div>
                    <div class="h-2 w-full bg-surface-container-high rounded"></div>
                    <div class="h-2 w-full bg-surface-container-high rounded"></div>
                    <div class="h-2 w-5/6 bg-surface-container-high rounded"></div>
                  </div>
                ))}
              </div>
              
              {/* Floating Zoom Controls */}
              <div class="absolute bottom-6 right-6 bg-surface-container-highest/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-4 text-on-surface-variant shadow-sm border border-outline-variant/30">
                <button class="hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-sm">zoom_out</span>
                </button>
                <span class="text-xs font-medium tracking-wide uppercase">100%</span>
                <button class="hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-sm">zoom_in</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Export Options & Monetization */}
          <div class="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* Export Formats */}
            <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 class="text-lg font-semibold text-on-surface mb-4">Opsi Ekspor</h3>
              <div class="space-y-3">
                {/* Free Option */}
                <button class="w-full flex items-center justify-between p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30 text-left group">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                      <span class="material-symbols-outlined">picture_as_pdf</span>
                    </div>
                    <div>
                      <div class="font-medium text-on-surface">PDF Standar</div>
                      <div class="text-xs text-on-surface-variant">Layout dasar, sudah termasuk watermark</div>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100">download</span>
                </button>

                {/* Pro Option (Locked) */}
                <button class="w-full flex items-center justify-between p-4 rounded-lg bg-surface/50 border border-surface-variant opacity-75 hover:opacity-100 transition-opacity text-left relative overflow-hidden group">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-surface-container-low to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                      <span class="material-symbols-outlined">description</span>
                    </div>
                    <div>
                      <div class="font-medium text-on-surface flex items-center gap-2">DOCX Dapat Diedit</div>
                      <div class="text-xs text-on-surface-variant">Teks mentah ramah ATS</div>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-surface-tint" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                </button>
              </div>
            </div>

            {/* Monetization Banner */}
            <div class="bg-surface-container-lowest rounded-xl p-[2px] shadow-lg relative overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary-container to-tertiary opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div class="bg-surface-container-lowest rounded-[10px] p-6 relative z-10 h-full flex flex-col">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center ai-glow shrink-0">
                    <span class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  </div>
                  <span class="bg-surface-tint text-white text-[10px] uppercase font-bold tracking-wider py-1 px-2 rounded-full">Pro Tier</span>
                </div>
                <h3 class="text-xl font-bold text-on-surface mb-2">Buka Potensi Anda</h3>
                <p class="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Tingkatkan peluang lamaran Anda dengan fitur premium yang dirancang untuk melewati filter ATS dan memukau rekruter.
                </p>
                <ul class="space-y-3 mb-8 flex-1">
                  {[
                    'Tulis ulang & kustomisasi AI tanpa batas',
                    'Akses ke 50+ Template Premium',
                    'Analisis semantik ATS tingkat lanjut'
                  ].map((feature) => (
                    <li key={feature} class="flex items-start gap-2 text-sm text-on-surface">
                      <span class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button class="w-full bg-gradient-to-r from-primary to-secondary-container text-white rounded-xl py-3.5 px-4 font-semibold shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 flex justify-center items-center gap-2">
                  Upgrade ke Pro
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
