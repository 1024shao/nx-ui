import { createApp } from 'vue'
import App from './App.vue'
import NxButton from './packages/nx-button/index.vue'
import './packages/fonts/iconfont.css'

const app = createApp(App)
app.component(NxButton.name, NxButton)

app.mount('#app')
