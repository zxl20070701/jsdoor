import { createApp } from 'vue'

import './styles/normalize.css'
import './styles/doc.scss'

import App from './App.vue'

// 路由
import router from './router'

// 指令
import vQuickMenu from './directives/v-quick-menu'

const app = createApp(App)

app
    .use(router)
    .directive('quickMenu', vQuickMenu)
    .mount('#app')
