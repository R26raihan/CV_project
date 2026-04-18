import { defineComponent } from 'vue'
import CVPreview from '../components/cv/CVPreview'
import Toolbox from '../components/tools/Toolbox'

export default defineComponent({
  name: 'Builder',
  setup() {
    return () => (
      <div class="flex-1 flex overflow-hidden h-full relative">
        {/* AREA UTAMA: Pratinjau Terpusat (Modular) */}
        <CVPreview />

        {/* MASTER TOOLBOX (Modular) */}
        <Toolbox />
      </div>
    )
  }
})
