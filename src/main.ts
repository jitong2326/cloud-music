import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import * as vant from 'vant'
import 'vant/lib/index.css';
import svgIcon from './components/SvgIcon/index.vue'
import { createPinia } from 'pinia'
import './style/index.less'

const app = createApp(App)
const pinia = createPinia()
app.component('SvgIcon', svgIcon)

app.use(router)
app.use(pinia)
app.use(vant)
app.mount('#app')
