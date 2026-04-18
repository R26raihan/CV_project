import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Landing',
  setup() {
    return () => (
      <div class="bg-white font-inter text-slate-800 antialiased selection:bg-indigo-500/20 selection:text-indigo-900">
        {/* Top Navigation (Marketing Version) */}
        <nav class="absolute top-0 z-50 w-full px-6 py-6 flex justify-between items-center bg-transparent">
          <div class="text-xl font-headline font-black text-slate-900 tracking-tighter flex items-center gap-2">
            <span class="material-symbols-outlined text-indigo-600">draw</span>
            Cognitive Canvas
          </div>
          <div class="flex items-center gap-6">
            <RouterLink to="/app" class="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Masuk
            </RouterLink>
            <RouterLink to="/app" class="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-700 transition-all hover:shadow-md">
              Daftar Gratis
            </RouterLink>
          </div>
        </nav>

        {/* Hero Section */}
        <section class="relative pt-40 pb-32 px-6 flex flex-col items-center text-center overflow-hidden min-h-[90vh] justify-center bg-gradient-to-b from-slate-50 to-white">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-sm font-medium mb-10">
            ✨ Optimasi CV Berbasis AI
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl z-10 leading-[1.1]">
            CV Berkualitas Adalah Tiket Anda Menuju Pekerjaan Impian
          </h1>
          <p class="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl z-10 leading-relaxed">
            Tahukah Anda? 80% CV gagal di tahap awal karena tidak ramah ATS. Kami membantu Anda membangun narasi karier yang tak tertandingi dengan bantuan AI.
          </p>
          
          {/* Credibility Stats */}
          <div class="flex items-center gap-8 mt-10 text-sm font-medium text-slate-500">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-emerald-500 text-xl">bolt</span>
              <span>3x Lebih Cepat Lolos Screening</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-indigo-500 text-xl">verified</span>
              <span>Ribuan Resume Teroptimasi</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div class="mt-12 flex flex-col sm:flex-row items-center gap-4 z-10">
            <RouterLink to="/app/select-template" class="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
              Optimalkan CV Sekarang
              <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
            </RouterLink>
            <RouterLink to="/app/select-template" class="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
              Buat Baru dengan AI
            </RouterLink>
          </div>
          
          <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
        </section>

        {/* Features Section (Bento Grid) */}
        <section class="py-32 px-6 max-w-7xl mx-auto">
          <div class="text-center mb-20 max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Dirancang untuk Menang</h2>
            <p class="mt-6 text-slate-500 text-xl leading-relaxed">Alat presisi untuk memastikan profil Anda selalu berada di urutan teratas tumpukan pelamar.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-slate-50 rounded-3xl p-10 hover:bg-slate-100/80 transition-colors duration-300">
              <div class="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 text-indigo-600">
                <span class="material-symbols-outlined text-[24px]">troubleshoot</span>
              </div>
              <h3 class="font-bold text-xl text-slate-900 mb-3 tracking-tight">Skor ATS Akurat</h3>
              <p class="text-slate-600 leading-relaxed">Pastikan CV Anda lolos sistem robotik HR dengan analisis kata kunci yang relevan secara real-time.</p>
            </div>
            <div class="bg-indigo-50/50 rounded-3xl p-10 relative overflow-hidden group hover:bg-indigo-50 transition-colors duration-300">
              <div class="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-indigo-100 text-indigo-600 relative z-10">
                <span class="material-symbols-outlined text-[24px]">magic_button</span>
              </div>
              <h3 class="font-bold text-xl text-slate-900 mb-3 tracking-tight relative z-10">Optimasi Konten AI</h3>
              <p class="text-slate-600 leading-relaxed relative z-10">Ubah deskripsi tugas Anda menjadi pencapaian yang berdampak menggunakan metode STAR secara otomatis.</p>
            </div>
            <div class="bg-slate-50 rounded-3xl p-10 hover:bg-slate-100/80 transition-colors duration-300">
              <div class="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 text-indigo-600">
                <span class="material-symbols-outlined text-[24px]">target</span>
              </div>
              <h3 class="font-bold text-xl text-slate-900 mb-3 tracking-tight">Penyelarasan Lowongan</h3>
              <p class="text-slate-600 leading-relaxed">Sesuaikan CV Anda secara otomatis untuk setiap lamaran kerja agar 100% relevan dengan kebutuhan perusahaan.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section class="py-32 px-6 bg-slate-900 text-white rounded-t-[3rem]">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-24">Proses Sederhana, Hasil Maksimal</h2>
            <div class="flex flex-col md:flex-row gap-12 relative">
              <div class="hidden md:block absolute top-8 left-[15%] w-[70%] h-px bg-slate-800 z-0"></div>
              {[
                { step: 1, title: 'Unggah Dokumen', desc: 'Ekstrak data dari CV lama dalam hitungan detik tanpa merusak struktur asal.' },
                { step: 2, title: 'Keajaiban AI', desc: 'AI merestrukturisasi kalimat dan menyisipkan kata kunci industri secara instan.', active: true },
                { step: 3, title: 'Siap Melamar', desc: 'Unduh PDF bermutu tinggi dengan tipografi sempurna, siap dikirim ke perekrut.' }
              ].map((item) => (
                <div key={item.step} class="flex-1 relative z-10 flex flex-col items-center text-center">
                  <div class={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-xl font-bold ${item.active ? 'bg-indigo-600 shadow-lg shadow-indigo-500/25 text-white' : 'bg-slate-800 text-indigo-400'}`}>
                    {item.step}
                  </div>
                  <h4 class="font-bold text-xl mb-4">{item.title}</h4>
                  <p class="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer class="bg-slate-900 pt-16 pb-8 px-6 border-t border-slate-800">
          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-white">
            <div class="col-span-1 md:col-span-2">
              <div class="text-xl font-black tracking-tighter flex items-center gap-2 mb-6">
                <span class="material-symbols-outlined text-indigo-400">draw</span>
                Cognitive Canvas
              </div>
              <p class="text-slate-400 max-sm leading-relaxed">Membangun ruang kerja cerdas untuk masa depan karier Anda. Dirancang untuk efisiensi, dibangun untuk dampak.</p>
            </div>
            <div>
              <h5 class="font-semibold text-white mb-6">Produk</h5>
              <ul class="space-y-4">
                <li><a class="text-slate-400 hover:text-white transition-colors" href="#">CV Builder</a></li>
                <li><a class="text-slate-400 hover:text-white transition-colors" href="#">AI Rewrite</a></li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold text-white mb-6">Perusahaan</h5>
              <ul class="space-y-4">
                <li><a class="text-slate-400 hover:text-white transition-colors" href="#">Tentang Kami</a></li>
                <li><a class="text-slate-400 hover:text-white transition-colors" href="#">Kontak</a></li>
              </ul>
            </div>
          </div>
          <div class="max-w-6xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-slate-500">© 2026 Cognitive Canvas. Hak Cipta Dilindungi.</p>
            <div class="flex gap-6">
              <a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">language</span></a>
              <a class="text-slate-500 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
})
