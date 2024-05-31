<template>
  <li>
    <div
      class="accardionTree__container"
      :style="cssStyle"
      @click.self="onActive"
    >
      <Icon name="angle_right" v-if="!active" />
      <Icon name="angle_down" v-else-if="!active || node.children.length" />
      <Icon name="minus" v-else />

      {{ node.title }}
    </div>
    <div v-if="active">
      <ul v-if="node.children.length">
        <AccordionTree
          v-for="(child, index) in node.children"
          :key="child.id"
          :node="child"
        />
      </ul>
    </div>
  </li>
</template>

<script setup>
import Icon from "./Icon.vue";
import { computed, ref } from "vue";
const props = defineProps({
  node: { title: String, id: Number, children: Array, parent_id: Number },
});

const cssStyle = computed(() => ({
  cursor: !props.node.children.length && "default",
}));

const active = ref(false);

const onActive = () => {
  active.value = !active.value;
};
</script>

<style scoped>
.accardionTree__container {
  display: flex;
  align-self: center;
  cursor: pointer;
}
ul {
  list-style: none;
  text-align: start;
}
</style>
