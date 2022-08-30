import components from './components/index'
import {
  Button,
  Card,
  Stars,
  Typewriter,
  Confetti
} from './components/index'
import directivesList from './directives/index'
import {
  copy,
  waterMarker,
  draggable,
  debounce,
  throttle,
  longpress,
  ripple
} from './directives/index'
import globalFunction from './globalFunction';
import { confettiFunction } from './globalFunction';
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
  Object.keys(globalFunction).forEach(key => {
    // 注册全局方法
    app.config.globalProperties[key] = globalFunction[key]
  });
};

const VUE_UI_LIBS = {
  name: "vue-ui-libs",
  version: "0.0.3",
  description: "一个vue3版本ui库。",
  ...components,
  ...directivesList,
  ...globalFunction,
  install,
}
// 全局函数
export {
  confettiFunction
}
// 指令
export {
  copy,
  waterMarker,
  draggable,
  debounce,
  throttle,
  longpress,
  ripple
}
// 组件
export {
  Button,
  Card,
  Stars,
  Typewriter,
  Confetti
}
export default VUE_UI_LIBS;
