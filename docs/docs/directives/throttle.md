
# v-throttle

:::tip
函数节流`throttle`的目的，是为了限制函数一段时间内只能执行一次。 因此，通过使用定时任务，延时方法执行。 在延时的时间内，方法若被触发，则直接退出方法。 从而实现一段时间内只执行一次。
:::
## 节流指令用法
使用 `v-throttle` 给元素添加节流事件。
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
  <ui-button v-throttle="handle" style="border: 1px solid #ccc">count自增</ui-button>
  <span>{{count}}</span>
</template>
```
:::

## 参数 `function`
|     | 描述     | 类型     |
| --- | -------- | -------- |
| fn  | 执行函数 | function |
