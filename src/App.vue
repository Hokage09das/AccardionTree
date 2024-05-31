<template>
  <ul class="tree">
    <AccordionTree v-for="node in accardionData" :key="node.id" :node="node" />
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AccordionTree from "./components/AccordionTree.vue";

import { getAccardionItems } from "./api/api";
import { buildTree } from "./utils/buildTree";
const accardionData = ref();

const getAccardionData = async () => {
  const { data } = await getAccardionItems();
  return data;
};

onMounted(() => {
  getAccardionData().then((value) => {
    accardionData.value = buildTree(value);
  });
});
</script>

<style scoped></style>
