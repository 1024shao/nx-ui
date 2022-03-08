import { createApp } from 'vue'
import App from './App.vue'
import NxUI from '../dist/netx-ui.es'
import '../dist/style.css'
const app = createApp(App)
app.use(NxUI)
app.mount('#app')
