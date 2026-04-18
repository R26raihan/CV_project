import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Settings',
  setup() {
    return () => (
      <div class="max-w-4xl mx-auto space-y-12 text-left">
        {/* Header */}
        <div>
          <h1 class="font-headline text-3xl font-black text-on-surface tracking-tight">Preferensi Akun</h1>
          <p class="text-on-surface-variant mt-2 text-sm">Kelola profil, tagihan, dan pengaturan karier berbasis AI Anda.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Settings Navigation (In-page) */}
          <div class="lg:col-span-1 space-y-2">
            <nav class="flex flex-col space-y-1">
              <a class="px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-between group shadow-sm border border-primary/10" href="#">
                <span>Profil</span>
                <span class="material-symbols-outlined text-[18px] transition-opacity">chevron_right</span>
              </a>
              <a class="px-4 py-2.5 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-low hover:text-on-surface flex items-center justify-between group transition-colors" href="#">
                <span>Langganan & Tagihan</span>
              </a>
              <a class="px-4 py-2.5 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-low hover:text-on-surface flex items-center justify-between group transition-colors" href="#">
                <span>Preferensi CV</span>
              </a>
              <a class="px-4 py-2.5 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-low hover:text-on-surface flex items-center justify-between group transition-colors" href="#">
                <span>Keamanan</span>
              </a>
            </nav>
          </div>

          {/* Right Column: Form Area */}
          <div class="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <section class="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm ai-glow">
              <h3 class="font-headline text-xl font-bold mb-6 text-on-surface">Profil Pengguna</h3>
              
              <div class="flex items-center space-x-6 mb-8">
                <div class="relative w-20 h-20 rounded-full overflow-hidden group">
                  <img 
                    alt="Profile photo" 
                    class="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/a" 
                  />
                  <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span class="material-symbols-outlined text-white">photo_camera</span>
                  </div>
                </div>
                <div>
                  <button class="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface font-medium text-sm hover:bg-surface-container transition-colors border border-outline-variant/30">
                    Ganti Foto
                  </button>
                  <p class="text-[10px] text-on-surface-variant mt-2 uppercase tracking-wider font-semibold">JPG, GIF atau PNG. Maks 1MB.</p>
                </div>
              </div>

              <form class="space-y-6">
                <div class="grid grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="block text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nama Depan</label>
                    <input 
                      class="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" 
                      type="text" 
                      value="Alexander"
                    />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nama Belakang</label>
                    <input 
                      class="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" 
                      type="text" 
                      value="Farnsworth"
                    />
                  </div>
                </div>
                <div class="space-y-2">
                  <label class="block text-xs font-bold text-on-surface-variant uppercase tracking-widest">Alamat Email</label>
                  <input 
                    class="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" 
                    type="email" 
                    value="alexander.f@example.com"
                  />
                </div>
                <div class="pt-4 flex justify-end">
                  <button class="px-8 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 shadow-md" type="button">
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    )
  }
})
