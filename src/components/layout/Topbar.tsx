import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Topbar',
  setup() {
    return () => (
      <header class="sticky top-0 w-full h-16 z-30 bg-surface/90 backdrop-blur-md px-8 flex justify-between items-center border-b border-outline-variant/15">
        <div class="flex-1">
          <h2 class="text-xl font-bold text-on-surface tracking-tight hidden md:block">Gallery</h2>
        </div>
        <div class="flex items-center gap-4">
          <button class="hidden md:block text-sm font-semibold text-primary hover:bg-surface-tint/10 px-4 py-2 rounded-full transition-colors active:scale-95 duration-150">
            Upgrade ke Pro
          </button>
          <div class="flex items-center gap-2">
            <button class="p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-full transition-colors active:scale-95 duration-150 relative">
              <span class="material-symbols-outlined">notifications</span>
              <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button class="p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-full transition-colors active:scale-95 duration-150">
              <span class="material-symbols-outlined">help_outline</span>
            </button>
          </div>
          <div class="w-9 h-9 rounded-full overflow-hidden border border-outline-variant/30 ml-2">
            <img 
              alt="User" 
              class="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHNzGJrSmFC7gSuMVFFMGV0J9hVwitZugsaXPNju24NGOstDQhE4Fg1dfVSXvSu00TpzVSnKw6IbhVy2CydwVWi2DAM8yOkirTQQflcgaCCvxnUJu3LaHehTNA2XO_Ssj6GML9_qatKDrl674sf3_25tF0ktyIUAY1eXP1lIt4HviIqaTgUkwU7GXh4ht6vvgmQ0FoMoRDFOAQ7bgwEpCFpKCGjo4Ub9vAHeWJzM6OL26oUyIHHdWNnRuFkPl6YeVrG0yRTu9kLRQ"
            />
          </div>
        </div>
      </header>
    )
  }
})
