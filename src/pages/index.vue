<script setup lang="ts">
import { ref } from "vue";
const value = ref(0);
</script>
<template>
  <ui-progress :value="value"> 已加载</ui-progress>
  <input type="number" v-model="value" />
</template>
