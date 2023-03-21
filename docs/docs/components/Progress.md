# Progress 撞色进度条
- 数据驱动，根据值改变同步显示动画效果
## 基础用法

:::demo 使用基础用法
```vue
<template>
  <ui-progress :value="50"/>
</template>
```
:::


## 传入参数

:::demo 使用基础用法
```vue
<script setup>
import {ref} from 'vue'
const value = ref(0)
  const timer = setInterval(() => {
      if (value.value > 90) {
        value.value = 100;
        clearInterval(timer);
      } else {
        value.value += Math.floor(Math.random() * 10);
      }
    }, 200);
</script>
<template>
  <ui-progress :value="value" color="#3da985" bgColor="#cdeee3" :width="400" :height="60" :borderRadius="30" :fontSize="20">
  加载中
  </ui-progress>
</template>
```
:::

## props

| 属性名    | 描述                    | 类型   | Accepted Values | 默认值 |
| --------- | ----------------------- | ------ | --------------- | ------ |
| width     | 宽度                | number |                 |    300    |
| height    | 高度                | number |                 |     40   |
| color    | 字体颜色                | string |                 |    "#f89821"    |
| bgColor    | 背景颜色                | number |                 |    "#111111"    |
| value    | 值                | number |                 |    0    |
| borderRadius    | 圆角                | string |                 |    10    |
| show_char    | 显示符号                | boolean |                 |        |
| fontSize    | 字体尺寸                | number |                 |     16   |
## 插槽
| Name    | 描述 |
| ------- | ---- |
| -  | 描述文本 |
