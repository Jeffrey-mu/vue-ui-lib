import components from './components/index'
import directivesList from './directives/index'
import type { App } from "vue";

export function install(app: App<Element>) {
  Object.keys(components).forEach(key => {
    //@ts-ignore
    app.component('Ui' + key, components[key])
  })
  Object.keys(directivesList).forEach(key => {
    // 注册所有自定义指令
    app.directive(key, directivesList[key]);
  });
};

const VUE_UI_LIBS = {
  name: "vue-ui-libs",
  version: "0.0.3",
  description: "一个vue3版本ui库。",
  ...components,
  ...directivesList,
  install,
}

export default VUE_UI_LIBS;
