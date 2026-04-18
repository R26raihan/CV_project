import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    return () => (
      <div class="max-w-7xl mx-auto space-y-8 text-left">
        {/* Welcome & Primary Action */}
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-surface-container-lowest rounded-xl p-8 border-2 border-dashed border-outline-variant/50 hover:border-primary/50 transition-colors flex flex-col items-center justify-center min-h-[300px] text-center ai-glow cursor-pointer relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
            </div>
            <h3 class="text-xl font-bold tracking-tight text-on-surface mb-2">Unggah CV Anda saat ini</h3>
            <p class="text-sm text-on-surface-variant max-w-md mb-6">Drop file PDF atau Word Anda di sini. AI kami akan mengekstrak pengalaman Anda dan menghasilkan profil terstruktur dalam hitungan detik.</p>
            <button class="bg-surface-container-low text-primary px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-surface-container transition-colors z-10 border border-outline-variant/20">
              Pilih File
            </button>
          </div>

          <div class="flex flex-col gap-4">
            <RouterLink 
              to={{ name: 'app-select-template' }}
              class="flex-1 bg-gradient-to-br from-primary to-primary-container p-6 rounded-xl text-left relative overflow-hidden group ambient-shadow hover:-translate-y-1 transition-all duration-300 text-on-primary"
            >
              <div class="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors duration-500"></div>
              <span class="material-symbols-outlined mb-3 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h4 class="text-lg font-bold tracking-tight">Buat Baru dengan AI</h4>
              <p class="text-xs text-primary-fixed-dim mt-1">Mulai dari nol dengan panduan AI</p>
            </RouterLink>

            <RouterLink 
              to={{ name: 'app-analysis' }}
              class="flex-1 bg-surface-container-lowest p-6 rounded-xl text-left border border-outline-variant/15 hover:border-primary/30 transition-colors group"
            >
              <span class="material-symbols-outlined text-primary mb-3 text-2xl group-hover:scale-110 transition-transform">troubleshoot</span>
              <h4 class="text-base font-semibold text-on-surface">Analisis CV</h4>
              <p class="text-xs text-on-surface-variant mt-1">Dapatkan skor kompatibilitas ATS instan</p>
            </RouterLink>

            <RouterLink 
              to={{ name: 'app-job-matching' }}
              class="flex-1 bg-surface-container-lowest p-6 rounded-xl text-left border border-outline-variant/15 hover:border-primary/30 transition-colors group"
            >
              <span class="material-symbols-outlined text-secondary-container mb-3 text-2xl group-hover:scale-110 transition-transform">target</span>
              <h4 class="text-base font-semibold text-on-surface">Pencocokan Kerja</h4>
              <p class="text-xs text-on-surface-variant mt-1">Bandingkan CV dengan lowongan khusus</p>
            </RouterLink>
          </div>
        </section>

        {/* Stats Bento Grid */}
        <section>
          <h3 class="text-sm font-semibold tracking-wider uppercase text-on-surface-variant mb-4 ml-1">Ikhtisar Kecerdasan AI</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex flex-col relative overflow-hidden ai-glow">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none"></div>
              <div class="flex items-center justify-between mb-2 z-10">
                <span class="text-sm font-medium text-on-surface-variant">Rata-rata Skor ATS</span>
                <span class="material-symbols-outlined text-primary text-xl">speed</span>
              </div>
              <div class="mt-auto z-10">
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-bold tracking-tight text-on-surface">84</span>
                  <span class="text-sm text-primary font-medium">/ 100</span>
                </div>
                <div class="w-full bg-surface-container mt-3 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-primary to-secondary-container h-full rounded-full" style={{ width: '84%' }}></div>
                </div>
                <p class="text-xs text-on-surface-variant mt-2">Masuk 15% teratas di industri Anda</p>
              </div>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex flex-col">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-medium text-on-surface-variant">CV Dianalisis</span>
                <div class="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center">
                  <span class="material-symbols-outlined text-on-surface text-sm">document_scanner</span>
                </div>
              </div>
              <div class="mt-auto">
                <span class="text-3xl font-bold tracking-tight text-on-surface">12</span>
                <p class="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-secondary-container">trending_up</span>
                  +3 minggu ini
                </p>
              </div>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 flex flex-col">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-medium text-on-surface-variant">Rata-rata Kecocokan Kerja</span>
                <div class="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center">
                  <span class="material-symbols-outlined text-on-surface text-sm">fact_check</span>
                </div>
              </div>
              <div class="mt-auto">
                <span class="text-3xl font-bold tracking-tight text-on-surface">76%</span>
                <p class="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-error">trending_down</span>
                  -2% vs bulan lalu
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity List */}
        <section>
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold tracking-wider uppercase text-on-surface-variant ml-1">Dokumen Terbaru</h3>
            <a class="text-sm text-primary font-medium hover:underline" href="#">Lihat Semua</a>
          </div>
          <div class="bg-surface-container-lowest rounded-xl border border-outline-variant/15 overflow-hidden">
            <div class="flex items-center justify-between p-4 hover:bg-surface-container-low/50 transition-colors border-b border-outline-variant/10 group cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary">description</span>
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Senior Product Designer CV - Tech</h4>
                  <p class="text-xs text-on-surface-variant mt-0.5">Diperbarui 2 jam yang lalu • AI Generated</p>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <div class="text-right hidden sm:block">
                  <div class="text-xs font-medium text-on-surface-variant mb-1 uppercase tracking-wider">Skor ATS</div>
                  <div class="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-secondary-container/10 text-secondary-container">92/100</div>
                </div>
                <button class="text-on-surface-variant hover:text-primary transition-colors">
                  <span class="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
})
