import { createApp } from 'vue'
import Toast from 'vue-toastification'
import router from './router'

import './style.css'
import 'virtual:windi.css'
import 'vue-toastification/dist/index.css'

import App from './App.vue'

createApp(App)
  .use(Toast)
  .use(router)
  .mount('#app')
