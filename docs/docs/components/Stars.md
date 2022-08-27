# Stars 星辰卡片

- 内部实现使用three绘图, 插入组件根节点，可对跟节点设置样式，如圆角阴影等...
- tips `好看的屏保`
## 基础用法
:::demo 使用基础用法
```vue
<template>
  <ui-stars />
</template>
```
:::

## 使用属性
:::demo 增加属性 `color` `size` `width` `height`
```vue
<template>
  <ui-stars color="yellow" size="10" width="200" height="200"/>
</template>
```
:::

## 添加自定义样式
:::demo 增加属性 `color` `size` `width` `height`
```vue
<script setup>
const array = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "white",
  "green",
  "gray",
]
</script>
<template>
  <div style="display: flex; flex-wrap: wrap">
  <ui-stars class="stars" v-for="item in array" style="border-radius: 50%;" :color="item" size="10" width="200" height="200"/>
  </div>
</template>

<style>
.stars {
  margin:10px;
  transition: all 1s;
  z-index: 10;
}
.stars:hover {
  transform: scale(3);
  transition: all .5s;
  }
</style>
```
:::
## props


| 属性名 | 描述       | 类型   | Accepted Values | 默认值 |
| ------ | ---------- | ------ | --------------- | ------ |
| width  | 星辰宽度   | number |                 | 500    |
| height | 星辰高度   | number |                 | 500    |
| color  | 漂浮物颜色 | string |                 |        |
| size   | 漂浮物size | number |                 |        |
