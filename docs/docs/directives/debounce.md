
# v-debounce
:::tip
防抖`debounce`函数，就是指触发事件后，在n 秒后只能执行一次，如果在n 秒内又触发了事件，则会重新计算函数的执行时间。
:::
## 防抖指令用法
使用 `v-debounce` 给元素添加防抖事件。
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
  <ui-button v-debounce="handle" style="border: 1px solid #ccc">count自增</ui-button>
  <span>{{count}}</span>
</template>
```
:::

## 参数 `function`
|     | 描述     | 类型     |
| --- | -------- | -------- |
| fn  | 执行函数 | function |
