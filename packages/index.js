import NxButton from './nx-button/index.vue'
import NxDialog from './nx-dialog/index.vue'
import NxInput from './nx-input/index.vue'
import NxSwitch from './nx-switch/index.vue'
import NxRadio from './nx-radio/index.vue'
import NxRadioGroup from './nx-radio-group/index.vue'
import NxCheckBox from './nx-checkbox/index.vue'
import NxCheckBoxGroup from './nx-checkbox-group/index.vue'
import NxForm from './nx-form/index.vue'
import NxFormItem from './nx-form-item/index.vue'
import NxCarousel from './nx-carousel/index.vue'
import NxCarouselItem from './nx-carousel-item/index.vue'
import './fonts/iconfont.css'
const components = [
  NxButton,
  NxDialog,
  NxInput,
  NxSwitch,
  NxRadio,
  NxRadioGroup,
  NxCheckBox,
  NxCheckBoxGroup,
  NxForm,
  NxFormItem,
  NxCarousel,
  NxCarouselItem,
]
const install = Vue => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
// script 标签引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
}
