# Typewriter 打字机

## 基础用法

:::demo 使用基础用法

```vue
<template>
  <ui-Typewriter> Welcome to China。 </ui-Typewriter>
</template>
```

:::

## 自定义样式

:::demo 使用自定义样式

```vue
<template>
  <ui-Typewriter class="ui-text-demo">Welcome to China。</ui-Typewriter>
</template>
<style>
.ui-text-demo {
  padding: 20px 0;
  font-size: 30px;
  color: pink;
  text-shadow: 1px 1px 1px pink;
}
</style>
```

:::

## tis

- 目前不支持文字换行，多行文本。

## 插槽

| Name | 描述           | 类型 |
| ---- | -------------- | ---- |
| -    | 自定义默认内容 | 文本 |
