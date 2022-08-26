<script  lang="ts">
export default {
  name: "ui-button",
};
</script>

<script setup lang="ts" name="ui-button">
type BtnType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16";
defineProps<{
  type: BtnType;
  subText: string;
}>();
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="custom-btn ui-button"
    :class="['btn-' + (type || '1')]"
    @click="emit('click')"
  >
    <span v-if="type === '12'">{{ subText || "Click!" }}</span
    ><span><slot>Read More</slot></span>
  </button>
</template>

<style scoped>
@import url("./index.css");
</style>

