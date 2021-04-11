const axios = require('axios');
const baseUrl = `${process.env.VUE_APP_SERVER_BASE_URL}/appointment`;

export default {
    getEmployeeAppointments(employeeId) {
        return axios.get(`${baseUrl}/${employeeId}`);
    },
    createAppointment(appointment) {
        return axios.post(`${baseUrl}`, appointment);
    },
    updateAppointment(appointment) {
        return axios.put(`${baseUrl}/${appointment._id}`, appointment);
    },
    deleteAppointment(appointmentId) {
        return axios.delete(`${baseUrl}/${appointmentId}`);
    }
}