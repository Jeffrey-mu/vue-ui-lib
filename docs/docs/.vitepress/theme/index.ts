import DefaultTheme from 'vitepress/theme'
import uiLibs from '../../../../src'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import './index.css'
import { registerComponents } from './register-components.js'
console.log(uiLibs)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(uiLibs)
    registerComponents(app)
  }
}
