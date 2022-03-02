import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Maska from 'maska'
import moment from 'moment'

const app = createApp(App)
app.config.globalProperties.$moment = moment
app.config.globalProperties.$moment.locale('pt-br')
app.use(Maska)
app.mount('#app')
