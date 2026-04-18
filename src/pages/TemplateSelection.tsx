import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCVStore } from '../store/cv'
import atsImg from '../assets/ats_clasic/Ats_clasic.png'
import execImg from '../assets/executive_minimal/executive_minimal.png'
import creativeImg from '../assets/academic_grid/creatif_block.png'
import modernImg from '../assets/modern_profesional.png'
import academicImg from '../assets/academic_grid/academic_grid.png'
import onyxImg from '../assets/premium_onyx.png'
import timelineImg from '../assets/timeline_master.png'
import serifImg from '../assets/minimalist_serif.png'
import luxeImg from '../assets/luxe_editorial_thumbnail_1776514507654.png'
import slateImg from '../assets/corporate_slate.png'
import nordicImg from '../assets/nordic_horizon.png'
import swissImg from '../assets/swiss_minimalist.png'

export default defineComponent({
  name: 'TemplateSelection',
  setup() {
    const router = useRouter()
    const cvStore = useCVStore()

    const activeCategory = ref('Semua')
    const categories = ['Semua', 'Profesional', 'Kreatif', 'Minimalis', 'Akademik']

    const templates = [
      {
        id: 'ATS Classic',
        name: 'ATS Classic',
        category: 'Profesional',
        description: 'Standar emas untuk sistem ATS Indonesia. Fokus pada keterbacaan mesin dengan struktur vertikal murni.',
        themeColor: 'from-slate-800 to-black',
        accentColor: '#111827',
        icon: 'verified',
        image: atsImg,
        isPro: true,
        tags: ['Paling Direkomendasi', 'ATS Optimal']
      },
      {
        id: 'Executive Minimal',
        name: 'Executive Minimal',
        category: 'Profesional',
        description: 'Elegan dan berwibawa. Fokus pada hierarki teks yang tajam untuk profesional senior dan manajerial.',
        themeColor: 'from-blue-700 to-indigo-900',
        accentColor: '#1e3a8a',
        icon: 'workspace_premium',
        image: execImg,
        isPro: false,
        tags: ['Populer', 'Formal']
      },
      {
        id: 'Creative Block',
        name: 'Creative Block',
        category: 'Kreatif',
        description: 'Dinamis dengan aksen sidebar warna. Sangat cocok untuk bidang desain, media, dan industri kreatif.',
        themeColor: 'from-fuchsia-600 to-purple-900',
        accentColor: '#701a75',
        icon: 'draw',
        image: creativeImg,
        isPro: false,
        tags: ['Kreatif', 'Modern']
      },
      {
        id: 'Modern Professional',
        name: 'Modern Professional',
        category: 'Minimalis',
        description: 'Keseimbangan antara gaya modern dan korporat. Memberikan kesan segar namun tetap profesional.',
        themeColor: 'from-emerald-600 to-teal-900',
        accentColor: '#065f46',
        icon: 'auto_awesome',
        image: modernImg,
        isPro: false,
        tags: ['Terbaru', 'Bersih']
      },
      {
        id: 'Academic Grid',
        name: 'Academic Grid',
        category: 'Akademik',
        description: 'Struktur yang sangat teratur untuk menampung riwayat riset, publikasi, dan detail teknis yang panjang.',
        themeColor: 'from-amber-500 to-orange-900',
        accentColor: '#92400e',
        icon: 'school',
        image: academicImg,
        isPro: true,
        tags: ['Rinci', 'Edukasi']
      },
      {
        id: 'Premium Onyx',
        name: 'Premium Onyx',
        category: 'Profesional',
        description: 'Desain korporat modern dengan header gelap yang sangat elegan. Memberikan kesan otoritas dan prestise.',
        themeColor: 'from-gray-900 to-black',
        accentColor: '#111827',
        icon: 'diamond',
        image: onyxImg,
        isPro: true,
        tags: ['Terbaru', 'Esklusif']
      },
      {
        id: 'Timeline Master',
        name: 'Timeline Master',
        category: 'Kreatif',
        description: 'Tata letak visual yang menggunakan garis waktu (timeline) untuk menunjukkan perjalanan karir Anda secara dinamis.',
        themeColor: 'from-teal-500 to-cyan-800',
        accentColor: '#0d9488',
        icon: 'route',
        image: timelineImg,
        isPro: false,
        tags: ['Terbaru', 'Visual']
      },
      {
        id: 'Minimalist Serif',
        name: 'Minimalist Serif',
        category: 'Minimalis',
        description: 'Gaya editorial mewah yang menonjolkan tipografi Serif. Sangat cocok untuk level senior dan industri fashion/hukum.',
        themeColor: 'from-stone-500 to-stone-800',
        accentColor: '#44403c',
        icon: 'format_quote',
        image: serifImg,
        isPro: true,
        tags: ['Terbaru', 'Elegan']
      },
      {
        id: 'Luxe Editorial',
        name: 'Luxe Editorial',
        category: 'Minimalis',
        description: 'Desain ala majalah fashion kelas atas. Fokus pada ruang putih luas dan keanggunan tipografi serif.',
        themeColor: 'from-amber-50 to-orange-100',
        accentColor: '#1a1a1a',
        icon: 'auto_stories',
        image: luxeImg,
        isPro: true,
        tags: ['Premium', 'Luxury']
      },
      {
        id: 'Corporate Slate',
        name: 'Corporate Slate',
        category: 'Profesional',
        description: 'Sangat rapi, terstruktur, dan formal. Cocok untuk profesional korporat yang menginginkan kesan kuat namun minimalis.',
        themeColor: 'from-slate-700 to-slate-900',
        accentColor: '#334155',
        icon: 'business_center',
        image: slateImg,
        isPro: true,
        tags: ['Terbaru', 'Bisnis']
      },
      {
        id: 'Nordic Horizon',
        name: 'Nordic Horizon',
        category: 'Minimalis',
        description: 'Mengedepankan whitespace dan tipografi halus untuk kesan yang tenang, bersih, dan sangat modern.',
        themeColor: 'from-blue-50 to-indigo-100',
        accentColor: '#475569',
        icon: 'filter_hdr',
        image: nordicImg,
        isPro: false,
        tags: ['Terbaru', 'Elegan']
      },
      {
        id: 'Swiss Minimalist',
        name: 'Swiss Minimalist',
        category: 'Minimalis',
        description: 'Layout berbasis grid asimetris yang presisi. Fokus pada keterbacaan tinggi dan fungsionalitas desain.',
        themeColor: 'from-zinc-100 to-zinc-300',
        accentColor: '#18181b',
        icon: 'grid_view',
        image: swissImg,
        isPro: true,
        tags: ['Terbaru', 'Grid']
      }
    ]

    const filteredTemplates = computed(() => {
      if (activeCategory.value === 'Semua') return templates
      return templates.filter(t => t.category === activeCategory.value)
    })

    const handleSelect = (templateId: string) => {
      cvStore.ui.activeTemplate = templateId
      router.push({ name: 'app-builder' })
    }

    return () => (
      <div class="p-8 flex-1 animate-in fade-in duration-700">
        <div class="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section class="mb-12">
            <div class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
              Curated Collection
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4 italic">
              Explore the <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary not-italic">Template Gallery</span>
            </h2>
            <p class="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-medium">
              Pilih dari koleksi template CV premium yang dirancang secara profesional dan didukung oleh kecerdasan buatan.
            </p>
          </section>

          {/* Filter & Search Bar Area */}
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div class="flex items-center gap-1 p-1 bg-surface-container-low rounded-xl overflow-x-auto no-scrollbar">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => activeCategory.value = cat}
                  class={[
                    "px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap",
                    activeCategory.value === cat 
                      ? "bg-white text-primary shadow-sm" 
                      : "text-on-surface-variant hover:text-primary"
                  ]}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Urutkan:</span>
              <select class="bg-transparent border-none text-sm font-black text-primary focus:ring-0 cursor-pointer uppercase tracking-wider">
                <option>Terbaru</option>
                <option>Populer</option>
                <option>Premium</option>
              </select>
            </div>
          </div>

          {/* Template Grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.value.map((tpl, _index) => (
              <div 
                key={tpl.id}
                class="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Visual Area with Preview */}
                <div class="relative aspect-[3/4] overflow-hidden bg-surface-container-high">
                  <img 
                    src={tpl.image} 
                    alt={tpl.name} 
                    class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Hover Overlay */}
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] duration-300">
                    <button class="px-6 py-3 bg-white text-primary rounded-full font-black text-[11px] uppercase tracking-wider shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span class="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                      Pratinjau
                    </button>
                  </div>

                  {/* PRO Badge */}
                  {tpl.isPro && (
                    <div class="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest shadow-lg z-20">
                      PRO
                    </div>
                  )}

                  {/* Icon Overlay */}
                  <div class="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-xl">
                    <span class="material-symbols-outlined text-xl">{tpl.icon}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div class="p-6">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-black text-lg text-on-surface tracking-tight uppercase">{tpl.name}</h3>
                    <span class="material-symbols-outlined text-on-surface-variant/30 hover:text-primary cursor-pointer transition-colors text-xl" style={{ fontVariationSettings: tpl.isPro ? "'FILL' 1" : "" }}>{tpl.isPro ? 'stars' : 'bookmark'}</span>
                  </div>
                  <p class="text-xs text-on-surface-variant mb-6 leading-relaxed font-bold opacity-60 line-clamp-2">{tpl.description}</p>
                  
                  <button 
                    onClick={() => handleSelect(tpl.id)}
                    class="w-full py-3 bg-surface-container-low text-on-surface font-black text-[11px] uppercase tracking-[0.2em] rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 active:scale-[0.98]"
                  >
                    Gunakan Template
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Hint Gradient */}
          <div class="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-surface-container-lowest to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div class="mt-12 text-center relative z-10">
          <div class="flex items-center justify-center gap-8 text-on-surface-variant/40">
             <div class="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
               <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               98% ATS Approved
             </div>
             <div class="w-px h-4 bg-outline-variant/20"></div>
             <div class="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
               <span class="material-symbols-outlined text-sm">bolt</span>
               Proses Cepat
             </div>
          </div>
        </div>

        <style>
          {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
      </div>
    )
  }
})
