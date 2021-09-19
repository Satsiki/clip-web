import { createApp } from 'vue'
import './tailwind.css'
import i18n from './language/i18n'
import App from './App.vue'
import moment from 'moment'

// 全局样式
import 'styles/index.scss'
// 全局变量
import variables from "styles/variables.module.scss";

import element3 from 'plugins/element3'

import router from './router'
import store from './store'

const app = createApp(App).use(router).use(i18n).use(store).use(element3)

//新增一个全局$filter对象，里面添加一个方法
app.config.globalProperties.$filter = {
  timeCom(e){
    let time = moment.duration(e, 'seconds')  //得到一个对象，里面有对应的时分秒等时间对象值
    let minutes = time.minutes()
    let seconds = time.seconds()
    return  moment({ m:minutes, s:seconds}).format('mm:ss')
  }
}


//绑定全局css变量
app.config.globalProperties.$variables = variables

app.mount('#app') 
