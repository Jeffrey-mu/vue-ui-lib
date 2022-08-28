<template>
  <div class="ui-typing" ref="uiTying" :style="{ width }">
    <slot>This is a typing demo.</slot>
  </div>
</template>
<script setup lang="ts" name="ui-typewriter">
import { computed, onMounted, ref } from "vue";
let uiTying = ref();
const size = ref<number>(0);

onMounted(() => {
  size.value = uiTying.value.textContent.length + 2;
});

const width = computed(() => size.value + "ch");
</script>
<style scoped>
.ui-typing {
  animation: typing 3s, blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 1px solid;
  font-family: monospace;
  padding: 5px;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
