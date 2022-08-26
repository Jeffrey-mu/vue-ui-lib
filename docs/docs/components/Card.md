# Card 按钮

## 基础用法
使用 `type` 来定义按钮的样式。
:::demo 使用基础用法
```vue
<template>
  <ui-card dataImage="https://images.unsplash.com/photo-1614071071386-b765b023f79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" :width="300" :height="590">
  <template #header>
  Canyons
  </template>
  <template #content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </template>

  </ui-card>
  <ui-card dataImage="https://images.unsplash.com/photo-1660826568922-b50692ab3d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60">
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
