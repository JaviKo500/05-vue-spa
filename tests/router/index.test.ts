import { mount } from "@vue/test-utils";

import App from "@/App.vue";
import router from "@/router";

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
});