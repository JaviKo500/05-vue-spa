import { shallowMount } from "@vue/test-utils";
import { RouterView } from "vue-router";

import router from "@/router";
import LandingLayout from "@/modules/landing/layouts/LandingLayout.vue";

describe('LandingLayout.test', () => {
  test('should render correctly', () => {
    const wrapper = shallowMount(LandingLayout, {
      global: {
        plugins: [
          router
        ]
      }
    });

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('footer').html()).toContain(
      `© ${new Date().getFullYear()} Azu Corporation. All rights reserved.`
    );
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
    expect(wrapper.findComponent(RouterView).exists()).toBe(true);
  });
});