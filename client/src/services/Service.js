const axios = require('axios');

export default {
    getInfo() {
        return axios.get(process.env.VUE_APP_SERVER_BASE_URL);
    }
}