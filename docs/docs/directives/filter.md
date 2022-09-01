# v-filter

## 滤镜指令用法
使用 `v-filter`
:::demo 使用基础用法
```vue
<script setup>
import {ref} from 'vue'
const show = ref(true)
function handle() {
  show.value = false;
  setTimeout(() => {show.value = true;})
}
</script>
<template>
<img v-filter v-if="show" src="/card.avif" >
<ui-button @click="handle">重置</ui-button>
</template>
```
:::

## 文字滤镜
使用 `v-filter`
:::demo
```vue
<script setup>
import {ref} from 'vue'
const show = ref(true)
function handle() {
  show.value = false;
  setTimeout(() => {show.value = true;})
}
</script>
<template>
<h2 v-filter  v-if="show" >
  hello v-filter
</h2>
<ui-button @click="handle">重置</ui-button>
</template>
```
:::
