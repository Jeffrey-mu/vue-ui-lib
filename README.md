## vue-ui-libs


- vue-ui-libs 是一个基于vue3.0 + ts 的ui库
- 仅支持typescript 下使用此组件

## 安装

```bash
npm install vue-ui-libs
```
## 全局使用
```js
import { createApp } from 'vue'
import App from './App.vue'
import vuelibs from "vue-ui-libs"
import './assets/main.css'
const app = createApp(App)
app.use(vuelibs)
app.mount('#app')

```

## 局部使用
```html
<script>
import {Button} from "vue-ui-libs"
</script>
<template>
<Button type="1"/>
</template>
```

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
- 支持点击事件 click



## 组件
- 目前只有button组件


