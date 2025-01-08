import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  localStorage.setItem('lastPath', to.path);
  const userId = localStorage.getItem('userId');
  if (!userId) {
    return next({
      name: 'login'
    });
  }
  return next();
}

export default isAuthenticatedGuard;