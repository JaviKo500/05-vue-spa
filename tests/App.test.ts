
import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';
import router from '@/router';

describe('App.test', () => {
  test('should render whit router-view', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [
          router
        ]
      }
    });
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });
});