# v-copy

## 复制指令用法
使用 `v-copy` 复制输入框文本。
:::demo 使用基础用法
```vue
<script setup lang="ts">
import {ref} from 'vue'
const value = ref<string>("123")
</script>
<template>
  <ui-button v-copy="value" type="1">复制</ui-button>
  <input v-model="value"/>
</template>
```
:::

