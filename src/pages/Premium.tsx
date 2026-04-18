import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Premium',
  setup() {
    const faqs = ref([
      { 
        question: 'Bisakah saya membatalkan langganan Pro kapan saja?', 
        answer: 'Ya, Anda dapat membatalkan langganan Anda secara instan dari pengaturan akun. Anda akan tetap memiliki akses Pro hingga akhir periode penagihan saat ini.',
        isOpen: true 
      },
      { 
        question: 'Apakah AI menjamin saya akan lolos ATS?', 
        answer: 'Meskipun tidak ada jaminan 100% untuk setiap sistem HR, AI kami dioptimalkan dengan algoritma ATS terbaru untuk memaksimalkan peluang keterbacaan dan skor kecocokan Anda.',
        isOpen: false 
      },
      { 
        question: 'Format ekspor apa saja yang tersedia untuk CV?', 
        answer: 'Untuk pengguna Pro, Anda dapat mengekspor dalam format PDF (High Resolution), DocX (Microsoft Word), dan JSON (format data standar).',
        isOpen: false 
      },
      { 
        question: 'Seberapa aman data karir pribadi saya?', 
        answer: 'Keamanan data Anda adalah prioritas utama kami. Semua data dienkripsi dan kami tidak pernah menjual data Anda ke pihak ketiga.',
        isOpen: false 
      }
    ])

    const toggleFaq = (index: number) => {
      faqs.value[index].isOpen = !faqs.value[index].isOpen
    }

    return () => (
      <div class="min-h-screen bg-surface font-inter animate-in fade-in duration-700">
        <section class="max-w-6xl mx-auto px-8 py-16">
          {/* Header Section */}
          <div class="text-center mb-20 space-y-4">
            <span class="inline-block px-4 py-1.5 rounded-full bg-primary-fixed-dim text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase">
              Pricing Plans
            </span>
            <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">
              Akselerasi karir Anda dengan AI.
            </h2>
            <p class="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
              Pilih paket yang sesuai dengan perjalanan profesional Anda. Dari draf pertama hingga portofolio eksekutif.
            </p>
          </div>

          {/* Pricing Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Free Plan */}
            <div class="bg-surface-container-lowest p-10 rounded-[32px] flex flex-col items-start transition-all hover:translate-y-[-4px] border border-outline-variant/10 shadow-sm">
              <div class="p-3 rounded-2xl bg-surface-container-low mb-6">
                <span class="material-symbols-outlined text-primary text-3xl">lightbulb</span>
              </div>
              <h3 class="text-2xl font-bold mb-2">Starter</h3>
              <div class="flex items-baseline mb-6">
                <span class="text-4xl font-black">Gratis</span>
                <span class="text-on-surface-variant ml-2 text-sm font-medium">/ selamanya</span>
              </div>
              <p class="text-on-surface-variant mb-8 text-sm leading-relaxed">
                Cocok untuk memulai dan mencoba penulisan resume dibantu AI untuk profil profesional pertama Anda.
              </p>
              <ul class="space-y-4 mb-10 flex-1">
                <li class="flex items-center text-sm font-medium text-on-surface-variant">
                  <span class="material-symbols-outlined text-primary-container mr-3 text-lg">check_circle</span>
                  1 Slot CV Aktif
                </li>
                <li class="flex items-center text-sm font-medium text-on-surface-variant">
                  <span class="material-symbols-outlined text-primary-container mr-3 text-lg">check_circle</span>
                  Scan ATS Standar
                </li>
                <li class="flex items-center text-sm font-medium text-on-surface-variant">
                  <span class="material-symbols-outlined text-primary-container mr-3 text-lg">check_circle</span>
                  Ekspor PDF saja
                </li>
              </ul>
              <button class="w-full py-4 rounded-2xl border border-outline-variant font-bold text-on-surface hover:bg-surface-container-low transition-colors cursor-default">
                Paket Saat Ini
              </button>
            </div>

            {/* Pro Plan */}
            <div class="bg-surface-container-lowest p-10 rounded-[32px] flex flex-col items-start relative ai-glow ring-4 ring-primary/5 transition-all hover:shadow-2xl hover:translate-y-[-4px] border border-primary/10">
              <div class="absolute -top-4 right-10 intelligence-flow px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                Paling Populer
              </div>
              <div class="p-3 rounded-2xl bg-primary-fixed-dim mb-6">
                <span class="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <h3 class="text-2xl font-bold mb-2">Professional</h3>
              <div class="flex items-baseline mb-6">
                <span class="text-4xl font-black">Rp 149rb</span>
                <span class="text-on-surface-variant ml-2 text-sm font-medium">/ bulan</span>
              </div>
              <p class="text-on-surface-variant mb-8 text-sm leading-relaxed">
                Toolkit terbaik untuk pencari kerja yang menargetkan posisi manajerial dan eksekutif dengan wawasan AI mendalam.
              </p>
              <ul class="space-y-4 mb-10 flex-1">
                <li class="flex items-center text-sm font-bold text-on-surface">
                  <span class="material-symbols-outlined text-primary mr-3 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  CV AI Tanpa Batas
                </li>
                <li class="flex items-center text-sm font-bold text-on-surface">
                  <span class="material-symbols-outlined text-primary mr-3 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Analisis Skor ATS Mendalam
                </li>
                <li class="flex items-center text-sm font-bold text-on-surface">
                  <span class="material-symbols-outlined text-primary mr-3 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Saran Penulisan AI Tanpa Batas
                </li>
                <li class="flex items-center text-sm font-bold text-on-surface">
                  <span class="material-symbols-outlined text-primary mr-3 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Ekspor PDF, DocX
                </li>
              </ul>
              <button class="w-full py-4 rounded-2xl intelligence-flow font-extrabold text-white shadow-xl shadow-primary/20 active:scale-[0.98] transition-all transform hover:brightness-110">
                Upgrade Sekarang
              </button>
            </div>
          </div>

          {/* Comparison Table Section */}
          <div class="mb-32">
            <div class="text-center mb-12">
              <h3 class="text-3xl font-black tracking-tight mb-2 uppercase">Perbandingan Fitur</h3>
              <p class="text-on-surface-variant font-medium">Setiap fitur yang Anda butuhkan untuk mendapatkan pekerjaan impian.</p>
            </div>
            <div class="bg-surface-container-low rounded-[32px] overflow-hidden p-1 shadow-inner">
              <div class="bg-surface-container-lowest rounded-[30px] overflow-hidden">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-surface-container-low/50">
                      <th class="py-8 px-8 text-[11px] font-black uppercase tracking-widest text-on-surface-variant">Fitur Utama</th>
                      <th class="py-8 px-8 text-center text-[11px] font-black uppercase tracking-widest text-on-surface-variant">Free</th>
                      <th class="py-8 px-8 text-center text-[11px] font-black uppercase tracking-widest text-primary">Pro</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-surface-container-low">
                    {[
                      { name: 'Slot CV Aktif', free: '1 CV', pro: 'Tanpa Batas' },
                      { name: 'Kedalaman Analisis ATS', free: 'Scan Dasar', pro: 'Analisis Penuh + Kata Kunci' },
                      { name: 'Limit Penulisan AI', free: '3 Per Bulan', pro: 'Tanpa Batas' },
                      { name: 'Format Ekspor', free: 'Hanya PDF', pro: 'PDF, DocX, Web Portfolio' },
                      { name: 'Template Premium', free: '3 Gaya Dasar', pro: '50+ Layout Editorial' },
                      { name: 'Generator Surat Lamaran', free: '—', pro: 'Termasuk' }
                    ].map(row => (
                      <tr key={row.name} class="hover:bg-surface-container-low/20 transition-colors">
                        <td class="py-6 px-8 text-sm font-bold text-on-surface">{row.name}</td>
                        <td class="py-6 px-8 text-center text-sm text-on-surface-variant">{row.free}</td>
                        <td class="py-6 px-8 text-center text-sm font-black text-primary">{row.pro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div class="max-w-3xl mx-auto mb-20 px-4">
            <div class="text-center mb-12">
              <h3 class="text-3xl font-black tracking-tight mb-2 uppercase">FAQ</h3>
              <p class="text-on-surface-variant font-medium">Segala hal yang perlu Anda ketahui tentang layanan kami.</p>
            </div>
            <div class="space-y-4">
              {faqs.value.map((faq, index) => (
                <div 
                  key={index} 
                  class="bg-surface-container-lowest p-6 rounded-2xl transition-all hover:bg-surface-container-low cursor-pointer group border border-outline-variant/10"
                  onClick={() => toggleFaq(index)}
                >
                  <div class="flex justify-between items-center">
                    <h4 class="font-bold text-on-surface transition-colors group-hover:text-primary">{faq.question}</h4>
                    <span class={["material-symbols-outlined text-outline transition-all duration-300", faq.isOpen ? "rotate-180 text-primary" : ""]}>expand_more</span>
                  </div>
                  {faq.isOpen && (
                    <p class="mt-4 text-sm text-on-surface-variant leading-relaxed animate-in fade-in slide-in-from-top-2">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
})
