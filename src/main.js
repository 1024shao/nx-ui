import { createApp } from 'vue'
import App from './App.vue'
import './packages/fonts/iconfont.css'
import NxButton from './packages/nx-button/index.vue'
import NxDialog from './packages/nx-dialog/index.vue'
import NxInput from './packages/nx-input/index.vue'
import NxSwitch from './packages/nx-switch/index.vue'
import NxRadio from './packages/nx-radio/index.vue'
import NxRadioGroup from './packages/nx-radio-group/index.vue'
import NxCheckBox from './packages/nx-checkbox/index.vue'
import NxCheckBoxGroup from './packages/nx-checkbox-group/index.vue'

const app = createApp(App)
app.component(NxButton.name, NxButton)
app.component(NxDialog.name, NxDialog)
app.component(NxInput.name, NxInput)
app.component(NxSwitch.name, NxSwitch)
app.component(NxRadio.name, NxRadio)
app.component(NxRadioGroup.name, NxRadioGroup)
app.component(NxCheckBox.name, NxCheckBox)
app.component(NxCheckBoxGroup.name, NxCheckBoxGroup)
app.mount('#app')
