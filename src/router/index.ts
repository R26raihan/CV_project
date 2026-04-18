import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../pages/Landing.tsx')
    },
    {
      path: '/app',
      component: () => import('../components/layout/MainLayout.tsx'),
      children: [
        {
          path: '',
          name: 'dashboard',
          redirect: { name: 'app-dashboard' }
        },
        {
          path: 'dashboard',
          name: 'app-dashboard',
          component: () => import('../pages/Dashboard.tsx')
        },
        {
          path: 'analysis',
          name: 'app-analysis',
          component: () => import('../pages/Analysis.tsx')
        },
        {
          path: 'job-matching',
          name: 'app-job-matching',
          component: () => import('../pages/JobMatching.tsx')
        },
        {
          path: 'settings',
          name: 'app-settings',
          component: () => import('../pages/Settings.tsx')
        },
        {
          path: 'select-template',
          name: 'app-select-template',
          component: () => import('../pages/TemplateSelection')
        },
        {
          path: 'builder',
          name: 'app-builder',
          component: () => import('../pages/Builder.tsx')
        },
        {
          path: 'export',
          name: 'app-export',
          component: () => import('../pages/Export.tsx')
        },
        {
          path: 'premium',
          name: 'app-premium',
          component: () => import('../pages/Premium.tsx')
        }
      ]
    }
  ]
})

export default router
