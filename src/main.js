import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from '@/config/vuetify'

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
