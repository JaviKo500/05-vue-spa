import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
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
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [
            isAuthenticatedGuard
          ],
          props: (route) => {
            const id = Number(route.params.id);
            return {
              id: isNaN(id) ? 1 : id
            };
          },
          component: () => import('@pokemons/pages/PokemonPage.vue')
        }
      ]
    },
    // Auth
    {
      path: '/auth',
      name: 'auth',
      // redirect: '/login',
      redirect: { name: 'login' },
      component: () => import('@auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@auth/pages/LoginPage.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@auth/pages/RegisterPage.vue')
        }
      ]
    },
    // Not Found
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@common/pages/NotFound404.vue'),
    }
  ]
});

export default router;