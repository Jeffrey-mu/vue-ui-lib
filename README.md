[English](https://github.com/Jeffrey-mu/vue-ui-lib/blob/master/README.en.md) | [中文](https://github.com/Jeffrey-mu/vue-ui-lib#readme)
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


## 链接

- [button 参考](https://codepen.io/yuhomyan/pen/OJMejWJ)
