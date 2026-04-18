import { defineComponent, computed } from 'vue'
import { RouterView } from 'vue-router'
import { useCVStore } from '../../store/cv'
import Sidebar from './Sidebar.tsx'
import Topbar from './Topbar.tsx'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const cvStore = useCVStore()
    const isCollapsed = computed(() => cvStore.ui.sidebarCollapsed)

    return () => (
      <div class="h-screen flex overflow-hidden bg-surface">
        <Sidebar class="h-full flex-shrink-0" />
        <div class="flex-1 min-w-0 flex flex-col h-full overflow-hidden">
          <Topbar />
          <main class="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth overflow-x-hidden">
            <div class="max-w-[1600px] mx-auto w-full">
              <RouterView />
            </div>
          </main>
        </div>
      </div>
    )
  }
})
