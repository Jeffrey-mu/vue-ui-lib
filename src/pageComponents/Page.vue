<script setup>
import Header from "~/pageComponents/Header.vue";
</script>

<template>
  <Header />
  <div bg="red">
    <slot></slot>
  </div>
</template>
