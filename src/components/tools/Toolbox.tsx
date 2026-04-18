import { defineComponent, computed, ref, watch } from 'vue'
import { useCVStore } from '../../store/cv'
import atsImg from '../../assets/ats_clasic/Ats_clasic.png'
import execImg from '../../assets/executive_minimal/executive_minimal.png'
import creativeImg from '../../assets/academic_grid/creatif_block.png'
import modernImg from '../../assets/modern_profesional.png'
import academicImg from '../../assets/academic_grid/academic_grid.png'
import onyxImg from '../../assets/premium_onyx.png'
import timelineImg from '../../assets/timeline_master.png'
import serifImg from '../../assets/minimalist_serif.png'
import luxeImg from '../../assets/luxe_editorial_thumbnail_1776514507654.png'
import slateImg from '../../assets/corporate_slate.png'
import nordicImg from '../../assets/nordic_horizon.png'
import swissImg from '../../assets/swiss_minimalist.png'

export default defineComponent({
  name: 'Toolbox',
  setup() {
    const cvStore = useCVStore()
    const cv = computed(() => cvStore.activeCV)
    const ui = computed(() => cvStore.ui)
    
    // UI state for the master toolbox drawer
    const activeTool = ref<'content' | 'progress' | 'style' | 'template' | 'ai'>('content')
    const isToolboxOpen = ref(false)

    // Sub-section state for Content Tab
    type ContentSection = 'menu' | 'biodata' | 'summary' | 'experience' | 'skills' | 'certifications'
    const contentSection = ref<ContentSection>('menu')

    // Typography Search
    const fontSearchQuery = ref('')
    const FONTS_COLLECTION = [
      { id: 'ATS Standard (Serif)', name: 'Times New Roman', category: 'Serif', desc: 'Standar emas ATS & profesional.' },
      { id: 'Geometric Sans', name: 'Outfit', category: 'Sans', desc: 'Modern, berani, & bersih.' },
      { id: 'Modern Sans', name: 'Inter', category: 'Sans', desc: 'Standar industri global.' },
      { id: 'Classic Serif', name: 'Playfair Display', category: 'Serif', desc: 'Elegan & berwibawa.' },
      { id: 'Technical Mono', name: 'IBM Plex Mono', category: 'Mono', desc: 'Struktural & berkarakter.' },
      { id: 'Bold Montserrat', name: 'Montserrat', category: 'Sans', desc: 'Geometris & serbaguna.' },
      { id: 'Clean Lato', name: 'Lato', category: 'Sans', desc: 'Harmonis & humanis.' },
      { id: 'Friendly Poppins', name: 'Poppins', category: 'Sans', desc: 'Populer & ramah.' },
      { id: 'Standard Roboto', name: 'Roboto', category: 'Sans', desc: 'Keseimbangan sempurna.' },
      { id: 'Open Sans', name: 'Open Sans', category: 'Sans', desc: 'Netral & ramah.' },
      { id: 'Luxury Merriweather', name: 'Merriweather', category: 'Serif', desc: 'Dirancang untuk layar.' },
      { id: 'Smart Lora', category: 'Serif', name: 'Lora', desc: 'Kontemporer & tajam.' },
      { id: 'News PT Serif', category: 'Serif', name: 'PT Serif', desc: 'Fungsional & kredibel.' },
      { id: 'Bookman Libre', category: 'Serif', name: 'Libre Baskerville', desc: 'Klasik & mewah.' },
      { id: 'Coder JetBrains', category: 'Mono', name: 'JetBrains Mono', desc: 'Khusus untuk pengembang.' },
      { id: 'Typewriter Roboto', category: 'Mono', name: 'Roboto Mono', desc: 'Mekanis namun rapi.' },
      { id: 'Retro Space', category: 'Mono', name: 'Space Mono', desc: 'Eksentrik & futuristik.' }
    ]

    const filteredFonts = computed(() => {
      if (!fontSearchQuery.value) return FONTS_COLLECTION.slice(0, 3)
      return FONTS_COLLECTION.filter(f => 
        f.name.toLowerCase().includes(fontSearchQuery.value.toLowerCase()) || 
        f.category.toLowerCase().includes(fontSearchQuery.value.toLowerCase())
      )
    })

    // Reset sub-section when switching main tools
    watch(activeTool, (newTool) => {
      if (newTool === 'content') {
        contentSection.value = 'menu'
      }
      if (newTool === 'style') {
        fontSearchQuery.value = ''
      }
    })

    // Hitung lebar drawer berdasarkan tool yang aktif
    const drawerWidth = computed(() => {
      if (!isToolboxOpen.value) return 'w-0'
      switch (activeTool.value) {
        case 'content': return 'w-[450px]'
        case 'style': return 'w-[360px]'
        case 'template': return 'w-[380px]'
        case 'progress': return 'w-[320px]'
        case 'ai': return 'w-[300px]'
        default: return 'w-[400px]'
      }
    })

    const toggleTool = (tool: 'content' | 'progress' | 'style' | 'template' | 'ai') => {
      if (activeTool.value === tool && isToolboxOpen.value) {
        isToolboxOpen.value = false
      } else {
        activeTool.value = tool
        isToolboxOpen.value = true
      }
    }

    const updateField = (field: string, value: any) => {
      cvStore.updateActiveCV({ [field]: value })
    }

    const SectionHeader = ({ title, onBack }: { title: string, onBack: () => void }) => (
      <header class="flex items-center gap-4 border-b border-outline-variant/10 pb-6 mb-8 group/header">
        <button 
          onClick={onBack}
          class="w-8 h-8 rounded-full bg-surface-container-low hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-all group-hover/header:-translate-x-1"
        >
          <span class="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <div class="space-y-0.5">
          <h3 class="text-xs font-black text-on-surface tracking-[0.2em] uppercase">{title}</h3>
          <p class="text-[9px] text-on-surface-variant font-bold uppercase tracking-wider">Perbarui informasi Anda</p>
        </div>
      </header>
    )

    return () => (
      <>
        {/* Master Tool Drawer */}
        <div 
          class={`h-full bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.02)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden relative z-30 ${drawerWidth.value} ${isToolboxOpen.value ? 'border-l border-outline-variant/10' : ''}`}
        >
          <div class={`h-full flex flex-col transition-opacity duration-300 ${isToolboxOpen.value ? 'opacity-100' : 'opacity-0 invisible'} ${drawerWidth.value.replace('w-0', 'w-full')}`}>
            <div class="p-8 flex-1 overflow-y-auto space-y-10 custom-scrollbar pb-32">
              
              {/* TOOL: CONTENT */}
              {activeTool.value === 'content' && (
                <div class="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-500">
                  
                  {/* CONTENT MENU */}
                  {contentSection.value === 'menu' && (
                    <div class="space-y-8">
                       <header class="flex justify-between items-start border-b border-outline-variant/10 pb-6">
                        <div class="space-y-1">
                          <h3 class="text-sm font-black text-on-surface tracking-[0.2em] uppercase">Isi Konten CV</h3>
                          <p class="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Pilih kategori untuk diedit</p>
                        </div>
                        <button 
                          onClick={() => isToolboxOpen.value = false}
                          class="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
                        >
                          <span class="material-symbols-outlined text-xl">close</span>
                        </button>
                      </header>

                      <div class="grid grid-cols-1 gap-4">
                        {[
                          { id: 'biodata', title: 'Biodata Dasar', icon: 'person', desc: 'Nama, jabatan, & info dasar' },
                          { id: 'summary', title: 'Ringkasan Karir', icon: 'history_edu', desc: 'Profil profesional singkat' },
                          { id: 'experience', title: 'Pengalaman Kerja', icon: 'work_history', desc: 'Riwayat karir & pencapaian' },
                          { id: 'certifications', title: 'Sertifikasi', icon: 'workspace_premium', desc: 'Lisensi & sertifikat profesional' },
                          { id: 'skills', title: 'Kompetensi', icon: 'psychology', desc: 'Keahlian teknis & soft skills' }
                        ].map(item => (
                          <button 
                            onClick={() => contentSection.value = item.id as ContentSection}
                            class="group p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl flex items-center gap-5 hover:border-primary/30 hover:bg-primary/5 transition-all active:scale-[0.98] text-left"
                          >
                            <div class="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <span class="material-symbols-outlined">{item.icon}</span>
                            </div>
                            <div class="flex-1">
                              <h4 class="text-xs font-black text-on-surface uppercase tracking-wider mb-1">{item.title}</h4>
                              <p class="text-[10px] text-on-surface-variant font-medium">{item.desc}</p>
                            </div>
                            <span class="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary transition-colors">chevron_right</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SUB: BIODATA */}
                  {contentSection.value === 'biodata' && (
                    <div class="animate-in fade-in slide-in-from-right-4 duration-300">
                      <SectionHeader title="Biodata Dasar" onBack={() => contentSection.value = 'menu'} />
                      <div class="grid grid-cols-2 gap-4">
                        {/* Profile Photo - Only for Creative Block */}
                        {ui.value.activeTemplate === 'Creative Block' && (
                          <div class="col-span-2 flex flex-col items-center gap-4 mb-4 p-6 bg-primary/5 rounded-3xl border border-primary/10 border-dashed">
                            <div class="relative group/photo">
                              <div class="w-24 h-24 rounded-[2rem] bg-white shadow-xl overflow-hidden flex items-center justify-center border-4 border-white transition-transform group-hover/photo:scale-105 duration-500">
                                {cv.value.profileImage ? (
                                  <img src={cv.value.profileImage} class="w-full h-full object-cover" />
                                ) : (
                                  <span class="material-symbols-outlined text-4xl text-primary/30">add_a_photo</span>
                                )}
                              </div>
                              <button 
                                onClick={() => (document.getElementById('photo-upload') as HTMLElement).click()}
                                class="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                              >
                                <span class="material-symbols-outlined text-[18px]">edit</span>
                              </button>
                            </div>
                            <div class="text-center">
                              <p class="text-[10px] font-black uppercase tracking-wider text-primary mb-1">Foto Profil</p>
                              <p class="text-[8px] font-bold text-on-surface-variant opacity-60 uppercase tracking-widest leading-relaxed">
                                Rekomendasi: Rasio 1:1 (Kotak)<br/>Max 2MB
                              </p>
                            </div>
                            <input 
                              id="photo-upload"
                              type="file" 
                              class="hidden" 
                              accept="image/*"
                              onChange={(e: any) => {
                                const file = e.target.files[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onload = (event) => {
                                    updateField('profileImage', event.target?.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </div>
                        )}

                        <div class="space-y-1.5">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Nama Depan</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="text" 
                            value={cv.value.firstName}
                            onInput={(e: any) => updateField('firstName', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Nama Belakang</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="text" 
                            value={cv.value.lastName}
                            onInput={(e: any) => updateField('lastName', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5 col-span-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Jabatan Profesional</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="text" 
                            value={cv.value.professionalTitle}
                            onInput={(e: any) => updateField('professionalTitle', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5 col-span-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Email</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="email" 
                            value={cv.value.email}
                            onInput={(e: any) => updateField('email', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5 col-span-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Nomor Telepon</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="tel" 
                            placeholder="+62..."
                            value={cv.value.phone}
                            onInput={(e: any) => updateField('phone', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5 col-span-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Lokasi</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="text" 
                            value={cv.value.location}
                            onInput={(e: any) => updateField('location', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5 col-span-2 pt-2 border-t border-outline-variant/10">
                          <label class="text-[9px] font-black uppercase tracking-wider text-primary">Tautan Profesional</label>
                        </div>
                        <div class="space-y-1.5 col-span-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">LinkedIn</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="text" 
                            placeholder="linkedin.com/in/..."
                            value={cv.value.linkedin}
                            onInput={(e: any) => updateField('linkedin', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5 col-span-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">GitHub</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="text" 
                            placeholder="github.com/..."
                            value={cv.value.github}
                            onInput={(e: any) => updateField('github', e.target.value)}
                          />
                        </div>
                        <div class="space-y-1.5 col-span-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Website / Portfolio</label>
                          <input 
                            class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none" 
                            type="text" 
                            placeholder="portfolio.com"
                            value={cv.value.website}
                            onInput={(e: any) => updateField('website', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB: SUMMARY */}
                  {contentSection.value === 'summary' && (
                    <div class="animate-in fade-in slide-in-from-right-4 duration-300">
                      <SectionHeader title="Ringkasan Karir" onBack={() => contentSection.value = 'menu'} />
                      <div class="space-y-6">
                        <div class="flex justify-between items-center mb-2">
                          <label class="text-[9px] font-black uppercase tracking-wider text-on-surface-variant">Pernyataan Profesional</label>
                          <button class="text-[9px] font-black text-primary bg-primary/10 px-2 py-1 rounded-md uppercase flex items-center gap-1">
                            <span class="material-symbols-outlined text-xs">auto_awesome</span> Bantu Tulis
                          </button>
                        </div>
                        <textarea 
                          class="w-full bg-surface-container-low border-0 rounded-2xl px-4 py-4 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none h-60 leading-relaxed font-medium" 
                          placeholder="Ceritakan tentang Anda..."
                          value={cv.value.summary}
                          onInput={(e: any) => updateField('summary', e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  )}

                  {/* SUB: EXPERIENCE */}
                  {contentSection.value === 'experience' && (
                    <div class="animate-in fade-in slide-in-from-right-4 duration-300">
                      <SectionHeader title="Pengalaman Kerja" onBack={() => contentSection.value = 'menu'} />
                      <div class="space-y-5">
                        {/* Add Button - matches Sidebar primary action style */}
                        <button 
                          onClick={() => cvStore.addExperience()}
                          class="w-full py-3.5 px-4 bg-primary text-on-primary rounded-xl font-semibold text-sm flex items-center gap-3 shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group"
                        >
                          <span class="material-symbols-outlined text-[22px] shrink-0 group-hover:rotate-90 transition-transform">add_circle</span>
                          Tambah Pengalaman Baru
                        </button>

                        {/* Experience Cards */}
                        <div class="space-y-4">
                          {cv.value.experience.map((exp) => (
                            <div key={exp.id} class="bg-surface-container-highest/50 rounded-2xl border border-outline-variant/10 overflow-hidden group/card hover:border-primary/20 transition-all duration-300">
                              
                              {/* Card Header */}
                              <div class="flex items-center gap-3 px-4 py-3 border-b border-outline-variant/10 bg-white/50">
                                <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                  <span class="material-symbols-outlined text-[18px]">business</span>
                                </div>
                                <p class="flex-1 text-xs font-semibold text-on-surface truncate">
                                  {exp.company || 'Perusahaan Baru'}
                                </p>
                                <button 
                                  onClick={() => cvStore.deleteExperience(exp.id)}
                                  class="w-7 h-7 rounded-lg text-on-surface-variant/40 hover:text-error hover:bg-error/10 transition-all flex items-center justify-center opacity-0 group-hover/card:opacity-100"
                                  title="Hapus Pengalaman"
                                >
                                  <span class="material-symbols-outlined text-[16px]">delete</span>
                                </button>
                              </div>

                              {/* Card Body */}
                              <div class="p-4 space-y-3">
                                {/* Company Input */}
                                <div class="space-y-1">
                                  <label class="text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em]">Perusahaan</label>
                                  <input 
                                    class="w-full bg-white border border-outline-variant/30 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-on-surface-variant/30" 
                                    placeholder="Isi nama perusahaan..."
                                    value={exp.company}
                                    onInput={(e: any) => cvStore.updateExperience(exp.id, { company: e.target.value })}
                                  />
                                </div>

                                {/* Role + Period */}
                                <div class="grid grid-cols-2 gap-3">
                                  <div class="space-y-1">
                                    <label class="text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em]">Jabatan</label>
                                    <input 
                                      class="w-full bg-white border border-outline-variant/30 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-on-surface-variant/30" 
                                      placeholder="Isi jabatan..."
                                      value={exp.role}
                                      onInput={(e: any) => cvStore.updateExperience(exp.id, { role: e.target.value })}
                                    />
                                  </div>
                                  <div class="space-y-1">
                                    <label class="text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em]">Periode</label>
                                    <input 
                                      class="w-full bg-white border border-outline-variant/30 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-on-surface-variant/30" 
                                      placeholder="2024 - Present"
                                      value={exp.period}
                                      onInput={(e: any) => cvStore.updateExperience(exp.id, { period: e.target.value })}
                                    />
                                  </div>
                                </div>

                                {/* Descriptions */}
                                <div class="space-y-2 pt-1">
                                  <div class="flex justify-between items-center">
                                    <label class="text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em]">Tanggung Jawab</label>
                                    <span class="text-[10px] font-semibold text-on-surface-variant/40">{exp.description.length} poin</span>
                                  </div>

                                  <div class="space-y-2">
                                    {exp.description.map((_, idx) => (
                                      <div key={idx} class="group/bullet flex items-start gap-2 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-outline-variant/20 p-2">
                                        <div class="mt-[11px] w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                                        <textarea 
                                          class="flex-1 bg-transparent p-0 text-sm font-medium text-on-surface focus:ring-0 outline-none resize-none leading-relaxed placeholder:text-on-surface-variant/30 min-h-[1.5rem]" 
                                          rows="1"
                                          placeholder="Deskripsikan tanggung jawab Anda..."
                                          value={exp.description[idx]}
                                          onInput={(e: any) => {
                                            cvStore.updateExperienceDescription(exp.id, idx, e.target.value);
                                            e.target.style.height = 'auto';
                                            e.target.style.height = e.target.scrollHeight + 'px';
                                          }}
                                          ref={(el: any) => {
                                            if (el) {
                                              // Gunakan setTimeout sedikit agar rendering selesai sebelum hitung tinggi
                                              setTimeout(() => {
                                                el.style.height = 'auto';
                                                el.style.height = el.scrollHeight + 'px';
                                              }, 0);
                                            }
                                          }}
                                        ></textarea>
                                        <button 
                                          onClick={() => cvStore.deleteExperienceDescription(exp.id, idx)}
                                          class="shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-on-surface-variant/20 hover:text-error hover:bg-error/10 opacity-0 group-hover/bullet:opacity-100 transition-all"
                                        >
                                          <span class="material-symbols-outlined text-base">close</span>
                                        </button>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Add Point Button */}
                                  <button 
                                    onClick={() => cvStore.addExperienceDescription(exp.id)}
                                    class="w-full py-2.5 px-3 border border-dashed border-outline-variant/30 rounded-xl flex items-center gap-2 text-xs font-medium text-on-surface-variant hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all"
                                  >
                                    <span class="material-symbols-outlined text-[18px]">add</span>
                                    Tambah poin tanggung jawab
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB: CERTIFICATIONS */}
                  {contentSection.value === 'certifications' && (
                    <div class="animate-in fade-in slide-in-from-right-4 duration-300">
                      <SectionHeader title="Sertifikasi & Lisensi" onBack={() => contentSection.value = 'menu'} />
                      <div class="space-y-6">
                        <button 
                          onClick={() => cvStore.addCertification()}
                          class="w-full py-4 bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl flex items-center justify-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest hover:bg-primary/10 hover:border-primary/40 transition-all active:scale-95"
                        >
                          <span class="material-symbols-outlined">add_circle</span>
                          Tambah Sertifikasi Baru
                        </button>

                        <div class="space-y-4">
                          {cv.value.certifications.map((cert) => (
                            <div key={cert.id} class="bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden group/card shadow-sm hover:shadow-md transition-all">
                              {/* Card Header */}
                              <div class="px-4 py-3 bg-white/50 border-b border-outline-variant/10 flex justify-between items-center group-hover/card:bg-white transition-colors">
                                <span class="text-[10px] font-black text-primary uppercase tracking-widest">Sertifikat</span>
                                <button 
                                  onClick={() => cvStore.deleteCertification(cert.id)}
                                  class="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant/30 hover:text-error hover:bg-error/10 transition-all"
                                >
                                  <span class="material-symbols-outlined text-base">delete</span>
                                </button>
                              </div>

                              {/* Card Body */}
                              <div class="p-4 space-y-4">
                                <div class="space-y-1">
                                  <label class="text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em]">Nama Sertifikasi</label>
                                  <input 
                                    class="w-full bg-white border border-outline-variant/30 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-on-surface-variant/30" 
                                    placeholder="Contoh: AWS Solutions Architect"
                                    value={cert.name}
                                    onInput={(e: any) => cvStore.updateCertification(cert.id, { name: e.target.value })}
                                  />
                                </div>

                                <div class="grid grid-cols-2 gap-3">
                                  <div class="space-y-1">
                                    <label class="text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em]">Penerbit</label>
                                    <input 
                                      class="w-full bg-white border border-outline-variant/30 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-on-surface-variant/30" 
                                      placeholder="Lembaga..."
                                      value={cert.issuer}
                                      onInput={(e: any) => cvStore.updateCertification(cert.id, { issuer: e.target.value })}
                                    />
                                  </div>
                                  <div class="space-y-1">
                                    <label class="text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em]">Tahun</label>
                                    <input 
                                      class="w-full bg-white border border-outline-variant/30 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-on-surface-variant/30" 
                                      placeholder="2024"
                                      value={cert.date}
                                      onInput={(e: any) => cvStore.updateCertification(cert.id, { date: e.target.value })}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB: SKILLS */}
                  {contentSection.value === 'skills' && (
                    <div class="animate-in fade-in slide-in-from-right-4 duration-300">
                      <SectionHeader title="Daftar Kompetensi" onBack={() => contentSection.value = 'menu'} />
                      <div class="space-y-6">
                         <div class="flex flex-wrap gap-2">
                            {cv.value.skills.map((skill, index) => (
                              <div key={index} class="group bg-surface-container-low border border-outline-variant/10 px-4 py-2 rounded-xl flex items-center gap-2 mb-1">
                                <span class="text-xs font-bold text-on-surface">{skill}</span>
                                <button onClick={() => cvStore.removeSkill(index)} class="text-on-surface-variant hover:text-error opacity-0 group-hover/opacity-100 transition-all flex items-center">
                                  <span class="material-symbols-outlined text-xs">close</span>
                                </button>
                              </div>
                            ))}
                         </div>
                         <div class="relative flex items-center">
                            <input 
                              id="skill-input"
                              class="w-full bg-surface-container-low border-0 rounded-xl px-4 py-4 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none pr-12" 
                              placeholder="Tambah keahlian (tekan Enter)... "
                              onKeyup={(e: any) => {
                                if (e.key === 'Enter' && e.target.value) {
                                  cvStore.addSkill(e.target.value);
                                  e.target.value = '';
                                }
                              }}
                            />
                            <button 
                              onClick={() => {
                                const input = document.getElementById('skill-input') as HTMLInputElement;
                                if (input && input.value) {
                                  cvStore.addSkill(input.value);
                                  input.value = '';
                                }
                              }}
                              class="absolute right-2 w-10 h-10 rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center text-primary"
                            >
                              <span class="material-symbols-outlined">add_circle</span>
                            </button>
                         </div>
                      </div>
                    </div>
                  )}

                </div>
              )}


              {/* TOOL: STYLE */}
              {activeTool.value === 'style' && (
                <div class="space-y-10 text-left animate-in fade-in slide-in-from-right-4 duration-500">
                  <header class="flex justify-between items-start border-b border-outline-variant/10 pb-6">
                    <div class="space-y-1">
                      <h3 class="text-sm font-black text-on-surface tracking-[0.2em] uppercase">Arsitektur Gaya</h3>
                      <p class="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Visual & Identitas CV</p>
                    </div>
                    <button 
                      onClick={() => isToolboxOpen.value = false}
                      class="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
                    >
                      <span class="material-symbols-outlined text-xl">close</span>
                    </button>
                  </header>
                  <div class="space-y-8">
                    <div class="space-y-6">
                       <header class="flex justify-between items-center">
                         <label class="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Karakter Huruf</label>
                         <div class="relative w-40">
                            <input 
                              type="text"
                              placeholder="Cari font..."
                              class="w-full bg-surface-container-low border border-outline-variant/5 rounded-lg px-3 py-1.5 text-[10px] outline-none focus:border-primary/30 transition-all font-bold"
                              onInput={(e: any) => fontSearchQuery.value = e.target.value}
                              value={fontSearchQuery.value}
                            />
                            <span class="absolute right-2 top-1/2 -translate-y-1/2 material-symbols-outlined text-xs opacity-30">search</span>
                         </div>
                       </header>

                       <div class="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                         <div class="flex justify-between items-center mb-1">
                            <span class="text-[8px] font-black text-on-surface-variant uppercase tracking-widest">
                               {fontSearchQuery.value ? `Hasil Pencarian (${filteredFonts.value.length})` : 'Rekomendasi (Top 3)'}
                            </span>
                            {!fontSearchQuery.value && (
                              <button onClick={() => fontSearchQuery.value = ' '} class="text-[8px] font-black text-primary uppercase tracking-widest hover:underline">
                                Lihat Semua
                              </button>
                            )}
                         </div>

                        {filteredFonts.value.map(type => (
                          <button 
                            key={type.id}
                            onClick={() => cvStore.ui.typography = type.id as any} 
                            class={`w-full p-4 rounded-2xl border-2 transition-all text-left flex items-center gap-4 group animate-in fade-in slide-in-from-bottom-2 duration-300 ${ui.value.typography === type.id ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' : 'border-outline-variant/10 hover:border-primary/20 bg-white/50'}`}
                          >
                            <div 
                              class={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${ui.value.typography === type.id ? 'bg-primary text-white scale-110' : 'bg-surface-container-highest text-on-surface-variant'}`} 
                              style={{ fontFamily: type.name }}
                            >
                               Aa
                            </div>
                            <div class="flex-1">
                              <div class="flex items-center gap-2 mb-0.5">
                                <div class="text-[10px] font-black text-on-surface uppercase tracking-wider">{type.id}</div>
                                <span class="px-1.5 py-0.5 bg-surface-container-high text-[7px] font-black text-on-surface-variant rounded uppercase tracking-[0.1em]">{type.category}</span>
                              </div>
                              <div class="text-[9px] text-on-surface-variant font-medium leading-tight opacity-70 italic">{type.name} - {type.desc}</div>
                            </div>
                            {ui.value.typography === type.id && <span class="material-symbols-outlined text-primary">check_circle</span>}
                          </button>
                        ))}

                        {filteredFonts.value.length === 0 && (
                          <div class="py-10 text-center space-y-2 opacity-40">
                             <span class="material-symbols-outlined text-4xl">search_off</span>
                             <p class="text-[10px] font-black uppercase tracking-widest">Font tidak ditemukan</p>
                          </div>
                        )}
                       </div>
                    </div>

                    {/* SEKSI: TEMA & WARNA */}
                    <div class="space-y-6 pt-6 border-t border-outline-variant/10">
                      <div class="flex justify-between items-center">
                        <label class="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Warna Aksen</label>
                        <div class="flex items-center gap-2">
                           <div 
                             class="w-6 h-6 rounded-full border-2 border-white shadow-sm" 
                             style={{ backgroundColor: ui.value.accentColor }}
                           ></div>
                           <input 
                              type="text"
                              value={ui.value.accentColor}
                              onInput={(e: any) => cvStore.ui.accentColor = e.target.value}
                              class="w-20 bg-surface-container-low border border-outline-variant/10 rounded px-2 py-1 text-[10px] uppercase font-bold outline-none focus:border-primary/30"
                           />
                           <div class="relative group/color">
                              <input 
                                type="color"
                                value={ui.value.accentColor}
                                onInput={(e: any) => cvStore.ui.accentColor = e.target.value}
                                class="w-8 h-8 rounded-lg border-0 cursor-pointer opacity-0 absolute inset-0 z-10"
                              />
                              <div class="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover/color:bg-primary/10 group-hover/color:text-primary transition-all">
                                <span class="material-symbols-outlined text-sm">colorize</span>
                              </div>
                           </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-8 gap-3">
                        {[
                          '#111827', '#6366f1', '#3b82f6', '#0ea5e9', 
                          '#10b981', '#f59e0b', '#f43f5e', '#8b5cf6'
                        ].map(color => (
                          <button 
                            key={color}
                            onClick={() => cvStore.ui.accentColor = color}
                            class={`w-full aspect-square rounded-full border-2 transition-all hover:scale-110 active:scale-95 ${ui.value.accentColor.toLowerCase() === color.toLowerCase() ? 'border-primary ring-2 ring-primary/20 scale-110' : 'border-transparent'}`}
                            style={{ backgroundColor: color }}
                          ></button>
                        ))}
                      </div>

                      <div class="space-y-3">
                        <div class="flex justify-between items-center">
                          <label class="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">Opasitas Warna</label>
                          <span class="text-[9px] font-bold text-primary">{ui.value.accentOpacity}%</span>
                        </div>
                        <input 
                          type="range"
                          min="10"
                          max="100"
                          step="5"
                          value={ui.value.accentOpacity}
                          onInput={(e: any) => cvStore.ui.accentOpacity = parseInt(e.target.value)}
                          class="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                      </div>
                    </div>

                    {/* SEKSI: BENTUK & SUDUT */}
                    <div class="space-y-6 pt-6 border-t border-outline-variant/10 pb-4">
                      <label class="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Bentuk & Sudut</label>
                      <div class="grid grid-cols-3 gap-2">
                        {[
                          { label: 'Siku', value: 0, icon: 'square' },
                          { label: 'Soft', value: 16, icon: 'rounded_corner' },
                          { label: 'Bulat', value: 40, icon: 'circle' }
                        ].map(corner => (
                          <button 
                            key={corner.value}
                            onClick={() => cvStore.ui.borderRadius = corner.value}
                            class={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all group ${ui.value.borderRadius === corner.value ? 'bg-primary border-primary text-white' : 'border-outline-variant/10 hover:border-primary/20 bg-white/50 text-on-surface-variant'}`}
                          >
                            <span class="material-symbols-outlined text-lg">{corner.icon}</span>
                            <span class="text-[9px] font-black uppercase tracking-widest">{corner.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div class="space-y-4 pt-6 border-t border-outline-variant/10">
                      <label class="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Struktur Layout</label>
                      <div class="grid grid-cols-2 gap-3">
                        {[
                          { id: 1, name: '1 Kolom', sub: 'Universal / ATS', icon: 'view_agenda' },
                          { id: 2, name: '2 Kolom', sub: 'Modern / Dual', icon: 'view_week' }
                        ].map(layout => (
                          <button 
                            key={layout.id} 
                            onClick={() => cvStore.ui.layoutColumns = layout.id as any} 
                            class={`p-4 rounded-2xl border-2 transition-all text-left flex flex-col gap-3 group ${ui.value.layoutColumns === layout.id ? 'border-primary bg-primary/5' : 'border-outline-variant/10 bg-white/50 hover:border-primary/20'}`}
                          >
                            <div class={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${ui.value.layoutColumns === layout.id ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                              <span class="material-symbols-outlined text-xl">{layout.icon}</span>
                            </div>
                            <div>
                               <div class={`text-[10px] font-black uppercase tracking-wider ${ui.value.layoutColumns === layout.id ? 'text-primary' : 'text-on-surface'}`}>{layout.name}</div>
                               <div class="text-[8px] font-bold text-on-surface-variant/60 uppercase tracking-widest mt-0.5">{layout.sub}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL: TEMPLATE */}
              {activeTool.value === 'template' && (
                <div class="space-y-10 text-left animate-in fade-in slide-in-from-right-4 duration-500">
                  <header class="flex justify-between items-start border-b border-outline-variant/10 pb-6">
                    <div class="space-y-1">
                      <h3 class="text-sm font-black text-on-surface tracking-[0.2em] uppercase">Pustaka Desain</h3>
                      <p class="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Layout terpilih untuk profesi Anda</p>
                    </div>
                    <button 
                      onClick={() => isToolboxOpen.value = false}
                      class="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
                    >
                      <span class="material-symbols-outlined text-xl">close</span>
                    </button>
                  </header>
                  <div class="grid grid-cols-1 gap-4">
                    {[
                      { name: 'ATS Classic', desc: '1 Kolom ATS Friendly', image: atsImg, tags: ['ATS', 'Rekomendasi'] },
                      { name: 'Executive Minimal', desc: '2 Kolom Elegan', image: execImg, tags: ['Modern', 'Kreatif'] },
                      { name: 'Creative Block', desc: 'Sidebar Warna', image: creativeImg, tags: ['Modern', 'Kreatif'] },
                      { name: 'Modern Professional', desc: 'Baris Horizontal', image: modernImg, tags: ['Bersih'] },
                      { name: 'Academic Grid', desc: 'Tersusun Rapi', image: academicImg, tags: ['Akademik', 'Formal'] },
                      { name: 'Premium Onyx', desc: 'Dark Header Premium', image: onyxImg, tags: ['Terbaru', 'Eksklusif'] },
                      { name: 'Timeline Master', desc: 'Visual Garis Waktu', image: timelineImg, tags: ['Terbaru', 'Dinamis'] },
                      { name: 'Minimalist Serif', desc: 'Editorial & Elegan', image: serifImg, tags: ['Terbaru', 'Klasik'] },
                      { name: 'Luxe Editorial', desc: 'Magazine Style', image: luxeImg, tags: ['Premium', 'Fashion'] },
                      { name: 'Corporate Slate', desc: 'Bersih & Profesional', image: slateImg, tags: ['Terbaru', 'Bisnis'] },
                      { name: 'Nordic Horizon', desc: 'Minimalis & Airy', image: nordicImg, tags: ['Terbaru', 'Elegan'] },
                      { name: 'Swiss Minimalist', desc: 'Presisi & Jelas', image: swissImg, tags: ['Terbaru', 'Grid'] },
                    ].map(tmpl => (
                      <div 
                        key={tmpl.name} 
                        onClick={() => cvStore.ui.activeTemplate = tmpl.name} 
                        class={`bg-surface-container-low transition-all cursor-pointer border-2 rounded-2xl overflow-hidden group flex gap-4 items-center ${ui.value.activeTemplate === tmpl.name ? 'border-primary shadow-xl scale-[1.02]' : 'border-transparent hover:border-primary/20'}`}
                      >
                        <div class="w-20 shrink-0 h-24 overflow-hidden relative bg-surface-container-high border-r border-outline-variant/10">
                          <img 
                            src={tmpl.image} 
                            alt={tmpl.name} 
                            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                          />
                          {ui.value.activeTemplate === tmpl.name && (
                            <div class="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-[1px]">
                               <span class="material-symbols-outlined text-white text-3xl drop-shadow-lg">check_circle</span>
                            </div>
                          )}
                        </div>
                        <div class="flex-1 py-3 pr-4">
                          <div class="flex items-center justify-between mb-1">
                            <span class={`text-[13px] font-black uppercase tracking-tight ${ui.value.activeTemplate === tmpl.name ? 'text-primary' : 'text-on-surface'}`}>{tmpl.name}</span>
                          </div>
                          <div class="text-[10px] text-on-surface-variant font-bold opacity-60 mb-2 uppercase tracking-wide">{tmpl.desc}</div>
                          <div class="flex flex-wrap gap-1">
                            {tmpl.tags.map(tag => (
                              <span key={tag} class={`text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-wider ${tag === 'ATS' || tag === 'Rekomendasi' || tag === 'Terbaru' ? 'bg-primary/10 text-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TOOL: AI */}
              {activeTool.value === 'ai' && (
                 <div class="space-y-8 text-left animate-in fade-in slide-in-from-right-4 duration-500">
                  <header class="flex justify-between items-start border-b border-outline-variant/10 pb-6">
                    <div class="space-y-1">
                      <h3 class="text-sm font-black text-on-surface tracking-[0.2em] uppercase">Asisten AI</h3>
                      <p class="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Optimasi narasi karir</p>
                    </div>
                    <button 
                      onClick={() => isToolboxOpen.value = false}
                      class="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
                    >
                      <span class="material-symbols-outlined text-xl">close</span>
                    </button>
                  </header>
                  <div class="bg-gradient-to-br from-primary to-primary-container p-6 rounded-3xl text-on-primary shadow-xl shadow-primary/20">
                    <span class="material-symbols-outlined text-3xl mb-4">auto_awesome</span>
                    <p class="text-xs font-bold leading-relaxed opacity-90">Saran pengoptimalan real-time dari AI akan muncul di sini segera setelah fitur diaktifkan.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM DOCK */}
        <div class="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-3xl rounded-[28px] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50 pointer-events-auto group hover:scale-[1.02] transition-all duration-500">
          {[
            { id: 'content', icon: 'edit_note', title: 'Konten' },
            { id: 'style', icon: 'palette', title: 'Gaya' },
            { id: 'template', icon: 'dashboard_customize', title: 'Desain' },
            { id: 'ai', icon: 'auto_awesome', title: 'AI' }
          ].map(tool => (
            <button 
              key={tool.id}
              onClick={() => toggleTool(tool.id as any)}
              class={`w-12 h-12 rounded-2xl transition-all flex items-center justify-center relative group/btn ${activeTool.value === tool.id && isToolboxOpen.value ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110' : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary hover:scale-110 active:scale-95'}`}
            >
              <span class="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: activeTool.value === tool.id && isToolboxOpen.value ? "'FILL' 1" : "" }}>{tool.icon}</span>
              <span class="absolute bottom-full mb-4 px-3 py-1.5 bg-on-background text-[10px] font-black text-white rounded-xl opacity-0 group-hover/btn:opacity-100 transition-all scale-90 group-hover/btn:scale-100 whitespace-nowrap pointer-events-none uppercase tracking-[0.2em] shadow-2xl">
                {tool.title}
              </span>
            </button>
          ))}
          
          <div class="w-px h-8 bg-outline-variant/20 mx-1"></div>

          <button 
            onClick={() => cvStore.exportTrigger++}
            disabled={cvStore.isExporting}
            class={`px-6 h-12 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 transition-all shadow-lg active:scale-95 disabled:opacity-50
              ${cvStore.isExporting 
                ? 'bg-surface-container text-on-surface-variant' 
                : 'bg-primary text-white hover:bg-primary/90 hover:shadow-primary/20'}`}
          >
            <span class={`material-symbols-outlined text-xl ${cvStore.isExporting ? 'animate-spin' : ''}`}>
              {cvStore.isExporting ? 'progress_activity' : 'download'}
            </span>
            {cvStore.isExporting ? 'Tunggu' : 'Simpan'}
          </button>
          
          <div class="w-px h-8 bg-outline-variant/20 mx-1"></div>

          <button 
            onClick={() => isToolboxOpen.value = !isToolboxOpen.value}
            class={`w-12 h-12 rounded-2xl transition-all flex items-center justify-center ${isToolboxOpen.value ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'}`}
          >
            <span class={`material-symbols-outlined text-[26px] transition-transform duration-500 ${isToolboxOpen.value ? 'rotate-0' : 'rotate-180'}`}>
              side_navigation
            </span>
          </button>
        </div>
      </>
    )
  }
})
