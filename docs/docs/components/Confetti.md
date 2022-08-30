# Confetti 五彩纸屑

## 基础用法
使用 `model` 来定义纸屑的样式。
:::demo 使用基础用法
```vue

<script setup lang="ts">
import {  getCurrentInstance } from 'vue'
 const { proxy } = getCurrentInstance()
function click(model) {
 proxy.confettiFunction({model})()
}
const array = [
    "basic"
    ,"random"
    ,"realistic"
    ,"fireworks"
    ,"snow"
    ,"spray"
  ]
</script>
<template>
<ui-button @click="click(item)" v-for="item, index in array" :type="index + 1">
{{item}}</ui-button>
</template>
```
:::

## custom用法
使用 `options` 来自定义纸屑的样式。
:::demo 使用custom用法
```vue

<script setup lang="ts">
import {  getCurrentInstance } from 'vue'
 const { proxy } = getCurrentInstance()
function click() {
 proxy.confettiFunction({model: "custom",options: {
  particleCount: 100,
  spread: 160
  // 自定义配置项
}})()
}
</script>
<template>
<ui-button @click="click">custom</ui-button>
</template>
```
:::

```ts
type ConfettiModel =
  | "basic"
  | "random"
  | "realistic"
  | "fireworks"
  | "snow"
  | "spray"
  | "custom";
```
```ts
interface Origin {
  x: number; //(default : 0.5): 页面上的x位置，0为左边缘，1为右边缘。
  y: number; //(default: 0.5): 页面上的y位置，0为上边缘，1为下边缘。
}
interface Options {
  particleCount: number; //default: 50 要发射的五彩纸屑的数量。更多总是有趣的…但要冷静，这涉及到很多数学问题。
  angle: number //(default : 90): 发射五彩纸屑的角度，以度为单位。90是直线上升的。
  spread: number//(default : 45): 五彩纸屑可以偏离中心多远，以度为单位。45表示五彩纸屑将以规定的角度正负22.5度发射。
  startVelocity: number//(default: 45): 五彩纸屑开始移动的速度，以像素为单位。
  decay: number//(default: 0.9): 五彩纸屑会多快失去速度。将此数字保持在0和1之间，否则五彩纸屑将获得速度。更好的是，永远不要改变它。
  gravity: number//(default: 1): 粒子被拉下的速度。1表示全重力，0.5表示半重力，等等，但没有限制。如果你愿意，你甚至可以让粒子上升。
  drift: number//(default: 0): 五彩纸屑会漂到哪一边。默认值为0，意味着它们将直线下降。左侧使用负数，右侧使用正数。
  ticks: number//(default: 200): 五彩纸屑会移动多少次。这是抽象的…但如果五彩纸屑对你来说消失得太快，就玩玩吧。
  origin: object//: 五彩纸屑会移动多少次。这是抽象的…但如果五彩纸屑对你来说消失得太快，就玩玩吧。
  colors: string[] //颜色字符串数组，十六进制格式…你知道，像#bada55。
  shapes: number//五彩纸屑的形状数组。可能的值是正方形和圆形。默认情况下，在均匀混合中使用两种形状。您甚至可以通过提供一个值来更改混合，例如[‘圆’、‘圆’，‘正方形’]，以使用三分之二的圆和三分之一的正方形。
  scalar: number//(default: 1): 每个五彩纸屑粒子的比例因子。使用小数使五彩纸屑变小。继续，试试小小的五彩纸屑，它们很可爱！
  zIndex: number//(default: 100): 毕竟，五彩纸屑应该在上面。但如果你有一个疯狂的高页面，你可以设置得更高。
  disableForReducedMotion: boolean//(default: false): 对于喜欢减少运动的用户，完全禁用五彩纸屑。在这种情况下，五彩纸屑（）承诺将立即解决。
}
```
## props
| 属性名  | 描述               | 类型          | Accepted Values | 默认值                 |
| ------- | ------------------ | ------------- | --------------- | ---------------------- |
| model   | 纸屑模式           | ConfettiModel |                 | basic                  |
| colors  | 16禁止颜色         | string[]      |                 | ["#bb0000", "#ffffff"] |
| options | 自定义模式所需参数 | Options       |                 | ["#bb0000", "#ffffff"] |

- `custom` model 为自定义纸屑

## 提示
:::tip
- `Confetti`为一个方法，当使用 `app.use(vue-ui-libs)` 会注册到全局中 使用 `getCurrentInstance` 获取方法。
```ts
import {  getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
```
- 局部引用
```ts
import {  confettiFunction } from 'vue-ui-libs'
```

:::
## 链接
- 二次封装 [canvas-confetti](https://github.com/catdad/canvas-confetti)。
- 内部定义了`options` 接口。
- 使用Typescript开发，快捷、方便、灵活。
