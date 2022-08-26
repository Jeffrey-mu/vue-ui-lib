import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  lang: 'en-US',
  title: 'vue-ui-libs',
  description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    siteTitle: 'vue-ui-libs',
    logo: 'Vue.png',
    outlineTitle: '在本页面',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jeffrey-mu/vue-ui-lib' },
    ],
    nav: [
      { text: '指南', link: '/guide/' },
      {
        text: '组件', link: '/components/'
      },

    ],
    sidebar: {
      '/components/': [
        {
          text: 'components',
          items: [
            { text: '按钮', link: 'components/Button' },
          ]
        }
      ],
    },
    editLink: {
      pattern: 'https://github.com/Jeffrey-mu/vue-ui-lib/docs/docs/:path',
      text: 'Edit this page on GitHub'
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
    }
  }
})
