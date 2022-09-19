import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from 'notiwind'

createApp(App).use(router,Notifications).mount('#app')
