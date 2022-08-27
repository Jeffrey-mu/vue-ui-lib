
# v-longpress
:::tip
长按才会执行
:::
## 长按指令用法
使用 `v-longpress` 给元素添加长按事件。
:::demo 使用基础用法
```vue
<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0)
const handle = () => {
  count.value++
}
</script>
<template>
  <ui-button v-longpress="handle" style="border: 1px solid #ccc">count自增</ui-button>
  <span>{{count}}</span>
</template>
```
:::

## 参数 `function`
|     | 描述     | 类型     |
| --- | -------- | -------- |
| fn  | 执行函数 | function |
