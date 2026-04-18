import { defineComponent, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCVStore } from '../../store/cv'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const cvStore = useCVStore()
    const isCollapsed = computed(() => cvStore.ui.sidebarCollapsed)

    const navItems = [
      { name: 'Dashboard', icon: 'dashboard', title: 'Dashboard', route: { name: 'app-dashboard' } },
      { name: 'CV Saya', icon: 'description', title: 'CV Saya', route: { name: 'app-analysis' } },
      { name: 'Analisis Lowongan', icon: 'work_outline', title: 'Analisis Lowongan', route: { name: 'app-job-matching' } },
      { name: 'Pengaturan', icon: 'settings', title: 'Pengaturan', route: { name: 'app-settings' } },
    ]

    return () => (
      <nav class={[
        "h-full bg-surface/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-r border-outline-variant/10 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden",
        isCollapsed.value ? "w-20 px-3" : "w-72 px-6"
      ]}>
        {/* Header Section */}
        <div class="h-20 flex items-center justify-between">
          <div class="flex items-center gap-3 overflow-hidden">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 shrink-0 transform hover:rotate-6 transition-transform">
              <span class="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>schema</span>
            </div>
            {!isCollapsed.value && (
              <div class="flex flex-col animate-in fade-in slide-in-from-left-2 duration-500">
                <h1 class="text-lg font-bold text-on-surface tracking-tight leading-none whitespace-nowrap">Cognitive</h1>
                <span class="text-[10px] text-primary font-bold tracking-widest uppercase mt-0.5">Canvas</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => cvStore.toggleSidebar()}
            class={[
              "w-8 h-8 rounded-full hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group ml-auto",
              isCollapsed.value ? "rotate-180 -mr-1" : ""
            ]}
          >
            <span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-xl">chevron_left</span>
          </button>
        </div>

        {/* Primary Action */}
        <div class="mt-4">
          <RouterLink 
            to={{ name: 'app-builder' }}
            title="Buat CV Baru"
            class={[
              "bg-primary text-on-primary rounded-xl font-semibold text-sm flex items-center shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group overflow-hidden",
              isCollapsed.value ? "w-12 h-12 justify-center mx-auto" : "w-full py-3.5 px-4 gap-3"
            ]}
          >
            <span class="material-symbols-outlined text-[22px] shrink-0 group-hover:rotate-90 transition-transform">add_circle</span>
            {!isCollapsed.value && <span class="whitespace-nowrap transition-opacity duration-300">Buat CV Baru</span>}
          </RouterLink>
        </div>

        {/* Navigation Section */}
        <div class="flex-1 mt-10 space-y-1.5">
          {!isCollapsed.value && <p class="px-4 text-[11px] font-bold text-outline-variant uppercase tracking-[0.2em] mb-4">Main Menu</p>}
          {navItems.map((item) => (
            <RouterLink
              key={item.name}
              to={item.route}
              title={isCollapsed.value ? item.title : ''}
              class={[
                "flex items-center rounded-xl text-on-surface-variant hover:text-primary transition-all duration-300 ease-out text-sm font-medium group relative",
                isCollapsed.value ? "px-0 h-12 justify-center w-12 mx-auto" : "px-4 py-3 gap-3"
              ]}
              activeClass="bg-primary/10 text-primary !font-bold"
            >
              <div class="absolute inset-y-2 left-0 w-1 bg-primary rounded-r-full scale-y-0 group-[.router-link-active]:scale-y-100 transition-transform origin-center"></div>
              <span class="material-symbols-outlined shrink-0 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              {!isCollapsed.value && <span class="whitespace-nowrap">{item.name}</span>}
            </RouterLink>
          ))}
        </div>

        {/* Footer / Pro Section */}
        <div class="mt-auto pb-8">
          {isCollapsed.value ? (
            <button class="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform active:scale-95" title="Upgrade ke Pro">
              <span class="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </button>
          ) : (
            <div class="bg-surface-container-highest/50 rounded-2xl p-4 border border-outline-variant/10 group cursor-pointer hover:border-primary/20 transition-all">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-on-surface">AI Career Pro</span>
                  <span class="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Tingkatkan Limit</span>
                </div>
              </div>
              <p class="text-[11px] text-on-surface-variant mb-4 leading-relaxed">Dapatkan analisis tanpa batas & template eksklusif.</p>
              <button class="w-full py-2 px-3 bg-white text-on-surface text-xs font-bold rounded-lg border border-outline-variant/30 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-[0.98]">
                Upgrade Sekarang
              </button>
            </div>
          )}
        </div>
      </nav>
    )
  }
})
