<script setup>
import Page from "~/pageComponents/Page.vue";
</script>

  <!-- <HomePage /> -->
  <template>
  <Page>
    <header>
      <div>
        <a href="https://github.com/Jeffrey-mu/vue-ui-lib">vue-ui-libs</a>
        <li>是一个基于vue3.0 + ts 的ui库 - 仅支持typescript 下使用此组件</li>
        <a href="https://github.com/Jeffrey-mu/vue-ui-lib#readme"
          >点击了解更多</a
        >
      </div>
    </header>
    <main>
      <div class="wrapper">
        <ui-button v-for="item in 16" :key="item" :type="item + ''">
          {{ item % 2 == 0 ? "hello" : "components" }}
        </ui-button>
      </div>
    </main>
  </Page>
</template>
