# Ripple 水波纹指令 #
- 水波纹指令，用于点击之后产生水波纹的动效。
## 何时使用
v-ripple指令用于点击之后产生水波纹的动效, 可以应用于任何块级元素。

>注：只能作用于块级元素
## 基本用法
:::demo 使用基础用法
```vue
<template>
  <div style="display: flex">
    <div class="ripple_box" v-ripple="{ color: '#5e7ce0',duration: 300, delay: 300 }"></div>
     <div class="ripple_box" v-ripple="{ duration: 800}"></div>
  </div>
</template>
<style scoped>
.ripple_box {
  width:100px;
  height:100px;
  border:1px solid #ccc;
  margin-left: 20px;
}
</style>

```
:::

## 自定义颜色
:::demo 自定义颜色
```vue
<template>
  <ul class="demo-ripple">
    <li
      v-for="item in [
        { color: '#409EFF', text: '这是一条 Primary 涟漪' },
        { color: '#67C23A', text: '这是一条 Success 涟漪' },
        { color: '#E6A23C', text: '这是一条 Warning 涟漪' },
        { color: '#F56C6C', text: '这是一条 Danger 涟漪' },
        { color: '#909399', text: '这是一条 Info 涟漪' }
      ]"
      :style="{ color: item.color }"
    >
      <div class="ripple-change-text-color" v-ripple="{ duration: 300 }">
        {{ item.text }}
      </div>
    </li>
  </ul>
</template>
<style>
  .demo-ripple {
    list-style: none;
    padding-left: 0;
  }
</style>

```
:::

## 应用于其他组件
Button 组件
:::demo Button 组件
```vue
<template>
  <div class="demo-spacing">
    <ui-button type="1" variant="solid" v-ripple="{ duration: 300 }">Solid button</ui-button>
    <ui-button type="2" v-ripple="{ duration: 600 }">Secondary button</ui-button>
    <ui-button type="4" v-ripple="{ duration: 800 }"></ui-button>
  </div>
</template>
```
:::

Typewriter 组件
:::demo Typewriter 组件
```vue
<template>
  <ui-Typewriter v-ripple="{ duration: 300 }"> Welcome to China。 </ui-Typewriter>
</template>
```
:::
## props

| 参数名          | 类型      | 默认        | 描述                              |
| --------------- | --------- | ----------- | --------------------------------- |
| color           | `string`  | '#00000050' | 可选，默认当前文本颜色            |
| initial-opacity | `number`  | 0.1         | 可选，初始交互效果透明度大小      |
| final-opacity   | `number`  | 0.1         | 可选，结束交互效果长按透明度大小  |
| duration        | `number`  | 400         | 可选，持续时间                    |
| easing          | `string`  | 'ease-out'  | 可选，缓动动画                    |
| delay           | `number`  | 75`         | 可选，延迟 debouceTime 时间后调用 |
| disabled        | `boolean` | false       | 可选，禁止水波效果                |
