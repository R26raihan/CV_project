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
      'Minimalist Serif': MinimalistSerif
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

    return () => (
      <section class="flex-1 bg-surface-container-lowest/50 overflow-y-auto p-12 flex justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] scroll-smooth">
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
