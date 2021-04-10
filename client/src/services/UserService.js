const axios = require('axios');
const baseUrl = `${process.env.VUE_APP_SERVER_BASE_URL}/user`;

export default {
    me() {
        return axios.get(`${baseUrl}/me`);
    },
    register(register) {
        return axios.post(`${baseUrl}/register`, register);
    },
    login(login) {
        return axios.post(`${baseUrl}/login`, login);
    },
}