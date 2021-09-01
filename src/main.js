import { createApp } from 'vue'
import './tailwind.css'
import i18n from './language/i18n'
import App from './App.vue'

// 全局样式
import 'styles/index.scss'
// 全局变量
import variables from "styles/variables.module.scss";

import element3 from 'plugins/element3'

import router from './router'
import store from './store'

const app = createApp(App).use(router).use(i18n).use(store).use(element3)

//绑定全局css变量
app.config.globalProperties.$variables = variables

app.mount('#app') 
