import Theme from 'vitepress/dist/client/theme-default/index'
import uiLibs from '../../../../src'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './index.css'
import { registerComponents } from './register-components.js'
console.log(uiLibs)
export default {
  ...Theme,
  enhanceApp({ app }) {
    console.log(uiLibs)
    app.use(uiLibs)
    registerComponents(app)
  }
}
