import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
// import { nav, sidebar } from './config/index'
export default defineConfig({
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ],
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
    nav: [
      { text: '指南', link: '/guide/' },
      {
        text: '组件', link: '/components/Button'
      },
      {
        text: '指令', link: '/directives/'
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '按钮', link: '/components/Button' },
            { text: '卡片', link: '/components/Card' },
            { text: '星辰', link: '/components/Stars' },
            { text: '打字机', link: '/components/Typewriter' },
            { text: '五彩纸屑', link: '/components/Confetti' },
            { text: '名片', link: '/components/Business' },
            { text: '撞色进度条', link: '/components/Progress' },
          ]
        }
      ],
      '/directives/': [
        {
          text: '指令',
          items: [
            { text: '复制', link: '/directives/copy' },
            { text: '水印', link: '/directives/waterMarker' },
            { text: '拖拽', link: '/directives/draggable' },
            { text: '防抖', link: '/directives/debounce' },
            { text: '节流', link: '/directives/throttle' },
            { text: '长按', link: '/directives/longpress' },
            { text: '水波纹', link: '/directives/Ripple' },
            { text: '滤镜', link: '/directives/filter' },
          ]
        }
      ],
    },
    lastUpdatedText: '最后更新时间',
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
  }
})
