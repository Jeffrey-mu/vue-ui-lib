<script setup lang="ts">
</script>

<template>
  <h1>vue-ui-libs</h1>
  <header>
    <div>
      <a href="https://github.com/Jeffrey-mu/vue-ui-lib">vue-ui-libs</a>
      <li>是一个基于vue3.0 + ts 的ui库 - 仅支持typescript 下使用此组件</li>
      <a href="https://github.com/Jeffrey-mu/vue-ui-lib#readme">点击了解更多</a>
    </div>
  </header>
  <main>
    <div class="wrapper">
      <ui-button v-for="item in 16" :key="item" :type="item + ''">
        {{ item % 2 == 0 ? "hello" : "components" }}
      </ui-button>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
h1 {
  width: 200px;
  line-height: 2;
  text-align: center;
  border-radius: 20px;
  font-weight: 700;
  color: #fff;
  background-image: linear-gradient(0deg, #4f39fa, #da62c4);
}
</style>
