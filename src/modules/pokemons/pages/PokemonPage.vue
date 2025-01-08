<template>
  <section class="flex flex-col items-center justify-center">
    <h1>Pokemon <small class="text-blue-500">#{{id}}</small></h1>
    <img 
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`" 
      class="w-[200px] h-[200px] mt-5"
      width="200" 
      height="200"
      :alt="`Pokemon #${id}`" srcset="">
    <RouterLink
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 mt-5"
      :to="{ name:'pokemon', params: { id: id + 1 } }">
      Next
    </RouterLink>
  </section>
</template>
<script setup lang="ts">
  interface Props {
    id: number;
  }
  defineProps<Props>();
</script>