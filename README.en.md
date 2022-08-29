[English](https://github.com/Jeffrey-mu/vue-ui-lib/blob/master/README.en.md) | [中文](https://github.com/Jeffrey-mu/vue-ui-lib#readme)
## vue-ui-libs


- vue-ui-libs Is a UI Library Based on vue3.0 + ts
- This component is only supported under typescript

## install

```bash
npm install vue-ui-libs
```
## Global use
```js
import { createApp } from 'vue'
import App from './App.vue'
import vuelibs from "vue-ui-libs"
import './assets/main.css'
const app = createApp(App)
app.use(vuelibs)
app.mount('#app')

```

## Local use
```html
<script>
import {Button} from "vue-ui-libs"
</script>
<template>
<Button type="1"/>
</template>
```



## components
- Currently, there are only button components


## link

- [button reference](https://codepen.io/yuhomyan/pen/OJMejWJ)
