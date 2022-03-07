import { createApp } from 'vue'
import App from './App.vue'
import './packages/fonts/iconfont.css'
import NxButton from './packages/nx-button/index.vue'
import NxDialog from './packages/nx-dialog/index.vue'
import NxInput from './packages/nx-input/index.vue'
import NxSwitch from './packages/nx-switch/index.vue'
const app = createApp(App)
app.component(NxButton.name, NxButton)
app.component(NxDialog.name, NxDialog)
app.component(NxInput.name, NxInput)
app.component(NxSwitch.name, NxSwitch)
app.mount('#app')
