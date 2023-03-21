<script setup lang="ts" name="ui-progress">
import { ref, computed, onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    width: number;
    height: number;
    color: string;
    bgColor: string;
    value: number;
    borderRadius: number;
    fontSize: number;
    show_char: boolean;
  }>(),
  {
    width: 300,
    height: 40,
    value: 0,
    color: "#f89821",
    bgColor: "#111111",
    borderRadius: 10,
    show_char: true,
    fontSize: 16,
  }
);
const progress_wrapper_style = computed(() => {
  return {
    width: props.width + "px",
    height: props.height + "px",
    background: props.color,
    borderRadius: props.borderRadius + "px",
  };
});

const progress_style = computed(() => {
  return {
    width: props.value + "%",
    background: props.bgColor,
  };
});

const p_style = computed(() => {
  return {
    "background-image": `linear-gradient(
      to right,
      ${props.color} 0,
      ${props.color} ${props.value}%,
    ${props.bgColor} ${props.value}%
  )`,
    lineHeight: props.height + "px",
    fontSize: props.fontSize + "px",
  };
});
</script>

<template>
  <div class="progress-wrapper" :style="progress_wrapper_style">
    <div class="progress" :style="progress_style"></div>
    <p :style="p_style">
      <slot> 正在安装 </slot>
      {{ value }}
      <template v-if="show_char"> % </template>
    </p>
  </div>
</template>
<style scoped>
.progress-wrapper {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 40px;
  margin-bottom: 40px;
  text-align: center;
  border-radius: 10px;
}

.progress {
  width: 0%;
  height: 100%;
  transition: all 200ms;
}

p {
  font-size: 16px;
  font-weight: bolder;
  line-height: 40px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  transition: all 200ms;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
