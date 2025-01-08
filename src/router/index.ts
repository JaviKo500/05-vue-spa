import HomePage from '@landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@landing/pages/FeaturesPage.vue')
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@landing/pages/PricingPage.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@landing/pages/ContactPage.vue')
        },
      ]
    },
    // Auth
    {
      path: '/auth',
      component: () => import('@auth/pages/LoginPage.vue')
    }
  ]
});

export default router;