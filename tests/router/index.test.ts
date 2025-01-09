import { mount } from "@vue/test-utils";

import App from "@/App.vue";
import router from "@/router";
import type { RouteLocationNormalized } from "vue-router";

describe('Index.test', () => {

  const wrapper = mount(App, {
    global: {
      plugins: [
        router
      ]
    }
  });

  test('render home page when visiting /', async () => {
    await router.replace('/'); // simulate initial navigation
    await router.isReady();
    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web');
  });

  test('render features page when visiting /features', async () => {
    await router.replace('/features');
    await router.isReady();
    expect(wrapper.find('.text-gray-600.body-font').exists()).toBe(true);

    // await router.push({ name: 'features' });
    // await router.isReady();
    // expect(wrapper.find('.text-gray-600.body-font').exists()).toBe(true);
  });

  test('render pricing page when visiting /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();
    expect(wrapper.find('div').exists()).toBe(true);
  });

  test('render contact page when visiting /contact', async () => {
    await router.replace('/contact');
    await router.isReady();
    expect(wrapper.find('iframe').exists()).toBe(true);
  });

  test('render login page when visiting /pokemon/:id with not authenticated', async () => {
    localStorage.clear();
    await router.replace('/pokemon/151');
    await router.isReady();

    const h1 = wrapper.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toContain('Login');
  });

  test('render pokemon page when visiting /pokemon/:id with authenticated', async () => {
    localStorage.setItem('userId', '123456');

    await router.replace('/pokemon/151');
    await router.isReady();

    const h1 = wrapper.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toContain('Pokemon #151');
    expect(wrapper.html()).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg');
  });

  test('should convert the segment into number', async () => {
    const route: RouteLocationNormalized = {
      name: undefined,
      params: {
        id: '151'
      },
      matched: [],
      fullPath: "",
      query: {},
      hash: "",
      redirectedFrom: undefined,
      meta: {},
      path: ""
    };
    const pokemonRoute = router.getRoutes().find(route => route.name === 'pokemon');

    expect(pokemonRoute).toBeTruthy();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id } = (pokemonRoute?.props as any).default(route);

    expect(id).toBe(151);
  });

  test('should return a default value if the segment is not a number', async () => {
    const route: { fullPath: string, params: { id: string } } = {
      params: {
        id: '151AA'
      },
      fullPath: "/pokemon/151"
    };

    const pokemonRoute = router.getRoutes().find(route => route.name === 'pokemon');
    expect(pokemonRoute).toBeTruthy();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id } = (pokemonRoute?.props as any).default(route);

    expect(id).toBe(1);
  });
});