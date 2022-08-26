# Button 按钮
### 常用的操作按钮。

## 基础用法
使用 `type` 来定义按钮的样式。
:::demo 使用基础用法
```vue
<template>
  <ui-button v-for="item in 16" :type="item + ''" >click</ui-button>
</template>
```
:::
## props

```ts
type BtnType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16";
```
| type    | subText |
| ------- | ------- |
| BtnType | string  |

## 事件
| click |
| ----- |
| click |
