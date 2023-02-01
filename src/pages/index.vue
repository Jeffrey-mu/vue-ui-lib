<script setup lang="ts">
import { onMounted, ref } from "vue";
import { confettiFunction } from "../index";
onMounted(confettiFunction({ model: "fireworks" }));
</script>
<template>
  <ui-card dataImage="../../docs/docs/public/card.avif" :width="300" :height="590">
    <template #header> Canyons </template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </template>
  </ui-card>
</template>
