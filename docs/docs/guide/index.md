## vue-ui-libs
- vue-ui-libs 是一个vue3.0 typescript 环境下使用的ui库。
:::tip
- vue-ui-libs 是一个基于vue3.0 + ts 的ui库。
- 仅支持typescript 下使用此组件。
:::

## 命名说明
- 组件命名规范采用大驼峰
- 指令命令采用小驼峰
- 全局方法命名采用小驼峰 + `"Function"`
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
