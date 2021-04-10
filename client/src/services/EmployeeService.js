const axios = require('axios');
const baseUrl = `${process.env.VUE_APP_SERVER_BASE_URL}/employee`;

export default {
    allEmployees() {
        return axios.get(`${baseUrl}/all`);
    },
    getEmployee(employeeId) {
        return axios.get(`${baseUrl}/${employeeId}`);
    },
}