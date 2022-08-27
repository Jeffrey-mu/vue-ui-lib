# vue-ui-libs

::: tip 全局使用
- vue-ui-libs 组件库提供了一些常用指令函数
- 当全局使用`app.use(vue-ui-libs)` 会将指令and组件注册为全局
- 如下内部install函数逻辑
```ts
export function install(app: App<Element>) {
  Object.keys(components).forEach(key => {
    //@ts-ignore
    app.component('Ui' + key, components[key])
  })
  Object.keys(directivesList).forEach(key => {
    // 注册所有自定义指令
    app.directive(key, directivesList[key]);
  });
};
```
:::

::: tip 局部使用

```vue
<script setup>
import { copy } from 'vue-ui-libs';
</script>
<template>
<button v-copy></button>
</template>
```
:::
