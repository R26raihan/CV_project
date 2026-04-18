<template>
  <div class="min-h-screen">
    <!-- Mobile Warning Overlay (Hidden on Landing Page) -->
    <div 
      v-if="!isLandingPage"
      class="fixed inset-0 z-[9999] lg:hidden bg-slate-950 flex flex-col items-center justify-center p-8 text-center overscroll-none"
    >
      <div class="intelligence-flow w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-primary/40 animate-pulse">
        <span class="material-symbols-outlined text-white text-4xl" style="font-variation-settings: 'FILL' 1">devices</span>
      </div>
      
      <h1 class="text-2xl font-black text-white tracking-tighter mb-4 leading-tight">
        Optimalkan Pengalaman Anda di Desktop
      </h1>
      
      <div class="space-y-4 max-w-sm">
        <p class="text-slate-400 text-sm leading-relaxed">
          Kami mendeteksi Anda menggunakan perangkat seluler. Saat ini, <strong>Cognitive Canvas</strong> dioptimalkan untuk layar besar guna memberikan presisi maksimal dalam membangun CV profesional Anda.
        </p>
        
        <div class="h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
        
        <p class="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
          Silakan buka kembali melalui Laptop atau Desktop untuk masuk ke Dashboard
        </p>
      </div>

      <div class="absolute bottom-10 left-0 right-0 px-8">
        <div class="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
           <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Cognitive Canvas AI</p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div :class="[!isLandingPage ? 'hidden lg:block' : '']">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const isLandingPage = computed(() => route.path === '/' || route.name === 'landing')
</script>

<style>
/* Prevent scrolling when mobile warning is visible and it's not the landing page */
@media (max-width: 1023px) {
  body:has(.fixed.inset-0.z-\[9999\]) {
    overflow: hidden !important;
  }
}
</style>
