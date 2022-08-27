
# v-waterMarker

## 水印指令用法
使用 `v-waterMarker` 给元素添加水印。
:::demo 使用基础用法
```vue
<template>
  <div v-waterMarker="{text:'测试水印',textColor:'rgba(180, 180, 180, 0.4)'}" style="height:200px; width:500px"></div>
</template>
```
:::

## 参数 `object`
| key       | 描述     | 类型   |
| --------- | -------- | ------ |
| text      | 水印文字 | string |
| textColor | 字体颜色 | 颜色   |
