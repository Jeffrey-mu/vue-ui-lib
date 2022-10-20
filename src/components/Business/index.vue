<script lang="ts">
export default {
  name: "ui-business",
};
</script>

<script setup lang="ts" name="ui-business">
import { computed } from "vue";
type businessSize = "mini" | "small" | "large";
const props = defineProps<{
  title: string;
  subTitle: string;
  width: number;
  height: number;
  fontSize: number;
  size: businessSize;
}>();
const sizeMap = {
  mini: {
    width: "300px",
    height: "100px",
    "font-size": "35px",
  },
  small: {
    width: "600px",
    height: "200px",
    "font-size": "70px",
  },
  large: {
    width: "1200px",
    height: "600px",
    "font-size": "150px",
  },
};
console.log(props);

const style = computed(() => {
  if (props.size) {
    return sizeMap[props.size];
  }
  return {
    width: (props.width || 400) + "px",
    height: (props.height || 120) + "px",
    "font-size": (props.fontSize || 40) + "px",
  };
});
</script>

<template>
  <div class="ui-business" :style="style">
    <div>{{ title || "git" }}</div>
    <div :style="{
      lineHeight: size ? sizeMap[size]['font-size'] : fontSize - 10 + 'px',
    }">
      {{ subTitle || "hub" }}
    </div>
  </div>
</template>

<style scoped>
@import url("./index.css");
</style>
