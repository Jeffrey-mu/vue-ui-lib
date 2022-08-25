<script setup lang="ts">
</script>

<template>
  <header>install</header>
  <pre>
    install
  </pre>
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
    display: flex;
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
</style>
