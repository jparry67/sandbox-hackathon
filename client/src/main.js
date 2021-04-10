import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import Axios from 'axios'
import { FontAwesomeIcon } from '@/plugins/font-awesome'

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//     Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')
