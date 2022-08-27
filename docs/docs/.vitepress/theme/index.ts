import Theme from 'vitepress/dist/client/theme-default/index'
import uiLibs from '../../../../src'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './index.css'
import { registerComponents } from './register-components.js'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(uiLibs)
    registerComponents(app)
  }
}
