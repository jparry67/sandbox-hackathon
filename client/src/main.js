import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import Axios from 'axios'
import { FontAwesomeIcon } from '@/plugins/font-awesome'
// import { MdButton, MdContent, MdCard } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//     Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

createApp(App)
    .use(router)
    // .use(MdButton)
    // .use(MdContent)
    // .use(MdCard)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
