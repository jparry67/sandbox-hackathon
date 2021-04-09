const axios = require('axios');
const baseUrl = `${process.env.VUE_APP_SERVER_BASE_URL}/todo`;

export default {
    getAllTodos() {
        return axios.get(`${baseUrl}/all`);
    },
    createTodo(todo) {
        return axios.post(`${baseUrl}`, todo);
    },
    updateTodo(todo) {
        return axios.put(`${baseUrl}/${todo._id}`, todo);
    },
    deleteTodo(todoId) {
        return axios.delete(`${baseUrl}/${todoId}`);
    }
}