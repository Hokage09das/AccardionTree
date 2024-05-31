<template>
  <component :is="dynamicComponent" />
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";

const { name, path } = defineProps({
  name: String,
  path: String,
});

const dynamicComponent = computed(() => {
  return defineAsyncComponent(() => import(`../assets/icons/${name}.svg`));
});
</script>
