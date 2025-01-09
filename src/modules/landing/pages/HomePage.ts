import {
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated,
  ref
} from 'vue';

export default defineComponent({
  setup: () => {
    const counter = ref(0);
    console.log('<--------------- JK HomePage --------------->');
    console.log('HomePage setup');
    onMounted(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('HomePage mounted');
    });

    onUpdated(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onUnmounted');
    });
    onBeforeMount(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onBeforeUpdate');
    });
    onBeforeUnmount(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onBeforeUnmount');
    });
    onErrorCaptured(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('<--------------- JK HomePage --------------->');
      console.log('onDeactivated');
    });
    return {
      counter,
    }
  }
});