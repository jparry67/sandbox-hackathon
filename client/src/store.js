// import Vuex from 'vuex'
// import axios from 'axios'

// export default new Vuex.Store({
//     state: {
//         status: '',
//         token: localStorage.getItem('token') || '',
//         user: {}
//     },
//     mutations: {
//         auth_success(state, token, user) {
//           state.status = 'success'
//           state.token = token
//           state.user = user
//         },
//         logout(state) {
//           state.status = ''
//           state.token = ''
//         },
//     },
//     actions: {
//         authSuccess({user, token, commit}) {
//             return new Promise((resolve) => {
//                 localStorage.setItem('token', token);
//                 axios.defaults.headers.common['Authorization'] = token;
//                 commit('auth_success', token, user);
//                 resolve();
//             });
//         },
//         logout({commit}) {
//             return new Promise((resolve) => {
//                 commit('logout');
//                 localStorage.removeItem('token');
//                 delete axios.defaults.headers.common['Authorization'];
//                 resolve();
//             })
//         }
//     },
//     getters: {
//         isLoggedIn: (state) => {
//             return !!state.token;
//         },
//         authStatus: (state) => {
//             return state.status;
//         },
//     }
// });