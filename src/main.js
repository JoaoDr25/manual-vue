import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'
import router from './router'

const myApp = createApp(App)
const pinia = createPinia()

myApp.use(Quasar, {
  components: ['QLayout', 'QHeader', 'QToolbar', 'QToolbarTitle', 'QAvatar', 'QBtn', 'QBtnDropdown', 'QList', 'QItem', 'QItemSection', 'QItemLabel', 'QPageContainer', 'QPage'],
  plugins: {},
})
myApp.use(pinia)
myApp.use(router)

myApp.mount('#app')
