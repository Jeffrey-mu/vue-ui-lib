/**
 * v-filter
 */
import type { Directive, DirectiveBinding } from "vue";
const className = "ui-v-filter"
const style = `.${className}{animation:fadeIn 3s linear}@keyframes fadeIn{0%{opacity:0;filter:brightness(1) blur(20px)}10%{opacity:1;filter:brightness(2) blur(10px)}100%{opacity:1;filter:brightness(1) blur(0)}}`;
const directive: Directive = {
  mounted(el: HTMLElement) {
    addClass(el, className)
    const styleTagName = `.${className}-style-tag`
    if (document.querySelector(styleTagName)) {
      return
    }
    const styleTag = document.createElement("style");
    addClass(styleTag, styleTagName)
    styleTag.innerHTML = style
    document.head.appendChild(styleTag)
  },

};
function addClass(el: HTMLElement, className: string) {
  if (el?.classList)
    el.classList.add(className);
}
export default directive;
