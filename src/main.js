import { createApp } from 'vue'
import App from './App.vue'
import NxButton from './packages/nx-button/index.vue'

const app = createApp(App)
app.component(NxButton.name, NxButton)

app.mount('#app')
