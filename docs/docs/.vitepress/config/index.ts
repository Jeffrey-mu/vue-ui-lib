export const nav = [
  { text: '指南', link: '/guide/' },
  {
    text: '组件', link: '/components/Button'
  },
  {
    text: '指令', link: '/directives/'
  },
]

export const sidebar = {
  '/components/': [
    {
      text: 'components',
      items: [
        { text: '按钮', link: 'components/Button' },
        { text: '卡片', link: 'components/Card' },
        { text: '星辰', link: 'components/Stars' },
        { text: '打字机', link: 'components/Typewriter' },
        { text: '五彩纸屑', link: 'components/Confetti' },
      ]
    }
  ],
  '/directives/': [
    {
      text: 'directives',
      items: [
        { text: '复制', link: 'directives/copy' },
        { text: '水印', link: 'directives/waterMarker' },
        { text: '拖拽', link: 'directives/draggable' },
        { text: '防抖', link: 'directives/debounce' },
        { text: '节流', link: 'directives/throttle' },
        { text: '长按', link: 'directives/longpress' },
        { text: '水波纹', link: 'directives/Ripple' },
        { text: '滤镜', link: 'directives/filter' },
      ]
    }
  ],
}

