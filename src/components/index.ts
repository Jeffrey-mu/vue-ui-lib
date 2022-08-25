import Button from "./Button/index.vue";
const exclude = ['description', 'version', 'name', 'install']

const VUE_UI_LIBS = {
  name: "vue-ui-libs",
  version: "0.0.3",
  description: "一个vue3版本ui库。",
  Button,
  install
}
export function install(app: any) {
  Object.keys(VUE_UI_LIBS).filter(key => !exclude.includes(key)).forEach(key => {
    //@ts-ignore
    app.component(VUE_UI_LIBS[key].name, VUE_UI_LIBS[key])
  })

};

export { Button }
export default VUE_UI_LIBS

