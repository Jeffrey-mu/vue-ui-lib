<script  lang="ts">
export default {
  name: "ui-card",
};
</script>

<script setup lang="ts" name="ui-card">
import { ref, computed, onMounted } from "vue";
const props =
  defineProps<{ dataImage: string; width: number; height: number }>();
const width = ref(0);
const height = ref(0);
const mouseX = ref(0);
const mouseY = ref(0);
const mouseLeaveDelay = ref(null);
const card = ref();
onMounted(() => {
  width.value = card.value.offsetWidth;
  height.value = card.value.offsetHeight;
});
const mousePX = computed(() => {
  return mouseX.value / width.value;
});
const mousePY = computed(() => {
  return mouseY.value / height.value;
});
const cardStyle = computed(() => {
  const rX = mousePX.value * 15;
  const rY = mousePY.value * -15;
  return {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
  };
});
const cardBgTransform = computed(() => {
  const tX = mousePX.value * -20;
  const tY = mousePY.value * -20;
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
  };
});
const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${props.dataImage})`,
  };
});
function handleMouseMove(e) {
  mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2;
  mouseY.value = e.pageY - card.value.offsetTop - height.value / 2;
}
function handleMouseEnter() {
  clearTimeout(mouseLeaveDelay.value);
}
function handleMouseLeave() {
  mouseLeaveDelay.value = setTimeout(() => {
    mouseX.value = 0;
    mouseY.value = 0;
  }, 1000);
}
const cardWrapWandH = computed(() => {
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
  };
});
</script>

<template>
  <div
    class="ui-card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
    :style="cardWrapWandH"
  >
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <h1 class="card-title">
          <slot name="header"></slot>
        </h1>
        <p class="card-content">
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("./index.css");
</style>

