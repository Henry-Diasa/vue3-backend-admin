import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installIcons from '@/icons'
import i18n from '@/i18n'
import './styles/index.scss'
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(router).use(store).use(i18n).mount('#app')
