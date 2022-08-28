import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import { nav, sidebar } from './config/index'
export default defineConfig({
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  lang: 'en-US',
  title: 'vue-ui-libs',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'vue-ui-libs',
    logo: '/Vue.png',
    outlineTitle: '在本页面',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jeffrey-mu/vue-ui-lib' },
    ],
    nav,
    sidebar,
    lastUpdatedText: '最后更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/Jeffrey-mu/vue-ui-lib/tree/master/docs/docs/:path',
      text: '在github上编辑此页面'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2020-2021 Jeffrey-mu'
    }
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    },
    theme: 'material-palenight',
    lineNumbers: true
  }
})
