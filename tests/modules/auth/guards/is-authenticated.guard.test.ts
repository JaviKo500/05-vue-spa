import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import type { RouteLocationNormalized } from "vue-router";
describe('Is-authenticated.guard.test', () => {
  const to: RouteLocationNormalized = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: "",
    query: {},
    hash: "",
    redirectedFrom: undefined,
    path: '/home-screen',
    meta: {}
  };

  const from: RouteLocationNormalized = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: "",
    query: {},
    hash: "",
    redirectedFrom: undefined,
    path: "",
    meta: {}
  };

  const next = vi.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  test('should block if not authenticated', async () => {
    await isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith({
      name: 'login'
    });
  });

  test('should call local storage set item last path', async () => {
    await isAuthenticatedGuard(to, from, next);
    const lastPhat = localStorage.getItem('lastPath');
    expect(lastPhat).toBe(to.path);
  });

  test('should block if not authenticated with spies', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    await isAuthenticatedGuard(to, from, next);

    expect(setItemSpy).toHaveBeenCalledWith(
      'lastPath',
      to.path
    );

  });

  test('should pass id authenticated', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('123456');
    await isAuthenticatedGuard(to, from, next);
    expect(next).toHaveBeenCalledWith();
  });
});