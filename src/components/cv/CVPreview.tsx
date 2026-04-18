import { defineComponent, computed, ref, watch } from 'vue'
import { useCVStore } from '../../store/cv'
import { toPng } from 'html-to-image'

// Import Modular Templates
import ATSClassic from './templates/ATSClassic'
import ExecutiveMinimal from './templates/ExecutiveMinimal'
import CreativeBlock from './templates/CreativeBlock'
import ModernProfessional from './templates/ModernProfessional'
import AcademicGrid from './templates/AcademicGrid'
import PremiumOnyx from './templates/PremiumOnyx'
import TimelineMaster from './templates/TimelineMaster'
import MinimalistSerif from './templates/MinimalistSerif'
import LuxeEditorial from './templates/LuxeEditorial'
import CorporateSlate from './templates/CorporateSlate'
import NordicHorizon from './templates/NordicHorizon'
import SwissMinimalist from './templates/SwissMinimalist'

export default defineComponent({
  name: 'CVPreview',
  setup() {
    const cvStore = useCVStore()
    const cv = computed(() => cvStore.activeCV)
    const ui = computed(() => cvStore.ui)
    const cvRef = ref<HTMLElement | null>(null)

    // Template Mapping
    const templates: Record<string, any> = {
      'ATS Classic': ATSClassic,
      'Executive Minimal': ExecutiveMinimal,
      'Creative Block': CreativeBlock,
      'Modern Professional': ModernProfessional,
      'Academic Grid': AcademicGrid,
      'Premium Onyx': PremiumOnyx,
      'Timeline Master': TimelineMaster,
      'Minimalist Serif': MinimalistSerif,
      'Luxe Editorial': LuxeEditorial,
      'Corporate Slate': CorporateSlate,
      'Nordic Horizon': NordicHorizon,
      'Swiss Minimalist': SwissMinimalist
    }

    const fontMap: Record<string, string> = {
      'ATS Standard (Serif)': "'Times New Roman', Times, serif",
      'Geometric Sans': "'Outfit', sans-serif",
      'Modern Sans': "'Inter', sans-serif",
      'Classic Serif': "'Playfair Display', serif",
      'Technical Mono': "'IBM Plex Mono', monospace",
      'Bold Montserrat': "'Montserrat', sans-serif",
      'Clean Lato': "'Lato', sans-serif",
      'Friendly Poppins': "'Poppins', sans-serif",
      'Standard Roboto': "'Roboto', sans-serif",
      'Open Sans': "'Open Sans', sans-serif",
      'Luxury Merriweather': "'Merriweather', serif",
      'Smart Lora': "'Lora', serif",
      'News PT Serif': "'PT Serif', serif",
      'Bookman Libre': "'Libre Baskerville', serif",
      'Coder JetBrains': "'JetBrains Mono', monospace",
      'Typewriter Roboto': "'Roboto Mono', monospace",
      'Retro Space': "'Space Mono', monospace"
    }

    const activeFont = computed(() => fontMap[ui.value.typography] || ui.value.typography || "'Inter', sans-serif")

    const handleExport = async () => {
      const node = cvRef.value || document.getElementById('cv-export-canvas')
      if (!node) return
      
      cvStore.isExporting = true
      try {
        const dataUrl = await toPng(node, {
          quality: 0.95,
          pixelRatio: 2,
          backgroundColor: '#ffffff',
          cacheBust: true,
          style: { transform: 'none' }
        })

        const link = document.createElement('a')
        const fileName = `CV_${cv.value.firstName || 'User'}_${cv.value.lastName || ''}`.replace(/\s+/g, '_')
        link.download = `${fileName}.png`
        link.href = dataUrl
        link.click()
      } catch (error) {
        console.error('Export failed:', error)
      } finally {
        cvStore.isExporting = false
      }
    }

    watch(() => cvStore.exportTrigger, async () => {
      if (cvStore.exportTrigger > 0) {
        await new Promise(r => setTimeout(r, 100))
        handleExport()
      }
    })

    const readinessSteps = computed(() => {
      const activeCV = cvStore.activeCV
      return [
        { 
          id: 1, 
          name: 'Identitas', 
          isComplete: !!(activeCV.firstName && activeCV.email && activeCV.phone && activeCV.professionalTitle),
          icon: 'person'
        },
        { 
          id: 2, 
          name: 'Ringkasan', 
          isComplete: (activeCV.summary?.length || 0) > 20,
          icon: 'history_edu'
        },
        { 
          id: 3, 
          name: 'Pengalaman', 
          isComplete: activeCV.experience.length > 0,
          icon: 'work'
        },
        { 
          id: 4, 
          name: 'Keahlian', 
          isComplete: activeCV.skills.length >= 3,
          icon: 'verified'
        }
      ]
    })

    const totalScore = computed(() => {
      const completed = readinessSteps.value.filter(s => s.isComplete).length
      return Math.round((completed / readinessSteps.value.length) * 100)
    })

    const showStepper = ref(true)

    return () => (
      <section class="flex-1 bg-surface-container-lowest/50 overflow-y-auto p-12 flex flex-col items-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] scroll-smooth">
        
        {/* MONITOR KESIAPAN STEPPER (WITH SHOW/HIDE) */}
        <div class="w-full max-w-[850px] mb-8 animate-in fade-in slide-in-from-top-4 duration-700 relative z-30">
           {showStepper.value ? (
             <div class="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-full px-4 py-2 flex items-center justify-between gap-6 group/stepper hover:bg-white/60 transition-all duration-500">
                
                {/* Score Display (Small) */}
                <div class="flex items-center gap-3 pl-2 border-r border-black/5 pr-6 shrink-0">
                   <div class="relative w-10 h-10 flex items-center justify-center">
                      <svg class="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                        <circle class="text-black/5" stroke-width="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"/>
                        <circle 
                          class="text-primary transition-all duration-1000 ease-out" 
                          stroke-width="10" 
                          stroke-dasharray={251.2} 
                          stroke-dashoffset={251.2 - (251.2 * totalScore.value) / 100} 
                          stroke-linecap="round" 
                          stroke="currentColor" 
                          fill="transparent" 
                          r="40" cx="50" cy="50"
                        />
                      </svg>
                      <span class="absolute text-[10px] font-black text-primary">{totalScore.value}%</span>
                   </div>
                   <div class="hidden sm:block">
                      <div class="text-[9px] font-black text-on-surface uppercase tracking-[0.1em]">Kesiapan</div>
                      <div class="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest opacity-50 leading-none">
                         {totalScore.value === 100 ? 'Siap!' : 'Draft'}
                      </div>
                   </div>
                </div>

                {/* Steps Layout (Compact) */}
                <div class="flex-1 flex justify-between items-center relative gap-4 pr-2">
                   <div class="absolute left-4 right-4 h-0.5 bg-black/5 top-1/2 -translate-y-1/2 -z-10">
                      <div 
                        class="h-full bg-primary/20 transition-all duration-1000 ease-out" 
                        style={{ width: `${Math.max(0, (readinessSteps.value.filter(s => s.isComplete).length - 1) / (readinessSteps.value.length - 1) * 100)}%` }}
                      ></div>
                   </div>

                   {readinessSteps.value.map((step) => (
                     <div key={step.id} class="flex items-center gap-2 group/step">
                        <div 
                          class={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm border
                            ${step.isComplete 
                              ? 'bg-primary text-white border-primary shadow-primary/20 scale-105' 
                              : 'bg-white border-black/5 text-on-surface-variant opacity-60 group-hover/step:opacity-100 group-hover/step:border-primary/30'}`}
                        >
                           <span class="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: step.isComplete ? "'FILL' 1" : "" }}>
                             {step.isComplete ? 'check_circle' : step.icon}
                           </span>
                        </div>
                        <span class={`text-[8px] font-black uppercase tracking-widest transition-colors duration-500 whitespace-nowrap hidden lg:block ${step.isComplete ? 'text-primary' : 'text-on-surface-variant'}`}>
                           {step.name}
                        </span>
                     </div>
                   ))}
                </div>

                {/* Close Button */}
                <button 
                  onClick={() => showStepper.value = false}
                  class="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-on-surface-variant/40 hover:text-on-surface transition-all"
                >
                  <span class="material-symbols-outlined text-lg">expand_less</span>
                </button>
             </div>
           ) : (
             <button 
               onClick={() => showStepper.value = true}
               class="mx-auto flex items-center gap-3 px-6 py-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-sm hover:bg-white/60 transition-all duration-500 animate-in fade-in slide-in-from-top-2"
             >
               <div class="flex items-center gap-2">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                 <span class="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Lihat Kesiapan CV</span>
               </div>
               <span class="material-symbols-outlined text-sm opacity-30">expand_more</span>
             </button>
           )}
        </div>

        {/* Dynamic A4 Canvas Container */}
        <div 
          ref={cvRef}
          id="cv-export-canvas"
          class="bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] rounded-sm relative transition-all duration-700 ease-out origin-top overflow-hidden"
          style={{ 
            width: '850px',
            minHeight: '1100px',
            height: 'fit-content',
            overflowWrap: 'anywhere'
          }}
        >
          {/* Render Modular Template */}
          {templates[ui.value.activeTemplate] ? (
            templates[ui.value.activeTemplate]({ 
              cv: cv.value, 
              ui: ui.value, 
              activeFont: activeFont.value 
            })
          ) : (
            <div class="p-20 text-center opacity-20 italic">Template "{ui.value.activeTemplate}" tidak ditemukan</div>
          )}
        </div>
      </section>
    )
  }
})
