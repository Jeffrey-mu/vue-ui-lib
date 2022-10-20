# business 名片
### 常用的操作名片。

## 基础用法
默认名片。
:::demo 使用基础用法
```vue
<template>
  <ui-business></ui-business>
</template>
```

:::
## 使用size
:::demo 使用size
```vue
<template>
  <ui-business size="mini"></ui-business>
  <hr>
  <ui-business size="small"></ui-business>
  <hr>
  <ui-business size="large"></ui-business>
</template>
```
:::

## 配置参数
用参数来定义名片。
:::demo 使用参数来定义名片。
```vue
<template>
  <ui-business title="git" subTitle="hub" :fontSize="70" :width="600" :height="200"></ui-business>
</template>
```
:::
## props

| 属性名  | 描述         | 类型    | Accepted Values | 默认值 |
| ------- | ------------ | ------- | --------------- | ------ |
| title    | 按钮样式     | string |                 | git      |
| subtitle | 按钮二级文字 | string  |                 | hub    |
| size | 尺寸 | mini/ small/ large  |                 |     |
| fontSize | 字体大小 | number  |                 | 40    |
| width | 容器宽度 | number  |                 | 400    |
| height | 容器高度 | number  |                 | 120     |

