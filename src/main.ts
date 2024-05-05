import './assets/main.css'
import { store } from './store'

import { createApp } from 'vue'
import App from './App.vue'


// createApp(App).mount('#app')

const app = createApp(App)

app.use(store)

app.mount('#app')