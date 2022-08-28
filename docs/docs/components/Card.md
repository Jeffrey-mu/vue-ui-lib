# Card 按钮

## 基础用法
使用 `type` 来定义按钮的样式。
:::demo 使用基础用法
```vue
<template>
  <ui-card dataImage="/card.avif" :width="300" :height="590">
  <template #header>
  Canyons
  </template>
  <template #content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </template>

  </ui-card>
  <ui-card dataImage="/card2.avif">
  <template #header>
  Canyons
  </template>
  <template #content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </template>

  </ui-card>
</template>
```
:::
## props


| 属性名    | 描述                    | 类型   | Accepted Values | 默认值 |
| --------- | ----------------------- | ------ | --------------- | ------ |
| dataImage | 图片地址，相对路径或url | string |                 | 1      |
| width     | 卡片宽度                | number |                 |        |
| height    | 卡片高度                | number |                 |        |
## 插槽
| Name    | 描述 |
| ------- | ---- |
| header  | 标题 |
| content | 内容 |

## 事件
| 事件名 | 描述         |
| ------ | ------------ |
| click  | 透传点击事件 |
