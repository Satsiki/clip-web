import { createApp } from 'vue'
import App from './App.vue'

// 全局样式
import 'styles/index.scss'

import element3 from 'plugins/element3'

import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(element3).mount('#app')
