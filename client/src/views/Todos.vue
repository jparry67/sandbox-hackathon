<template>
    <div class="todos">
        <h1>Todos</h1>
        <div class="new">
            <span>Create New Todo:</span>
            <input placeholder="Title" v-model="newTitle" />
            <input placeholder="Description" v-model="newDescription" />
            <fa class="icon" icon="plus-circle" @click="createTodo()" />
        </div>
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo" @updateTodo="updateTodo(todo, $event)" @deleteTodo="deleteTodo" />
    </div>
</template>

<script>
import TodoService from '@/services/TodoService.js';
import Todo from '@/components/Todo.vue';
import { pull } from 'lodash';

export default {
    name: 'Todos',
    components: {
        Todo
    },
    data: () => {
        return {
            todos: [],
            newTitle: '',
            newDescription: '',
        }
    },
    created: function() {
        this.getAllTodos();
    },
    methods: {
        async getAllTodos() {
            TodoService.getAllTodos().then((res) => {
                this.todos = res.data;
            });
        },
        async createTodo() {
            TodoService.createTodo({title: this.newTitle, description: this.newDescription}).then((res) => {
                this.todos.unshift(res.data);
                this.newTitle = '';
                this.newDescription = '';
            });
        },
        async updateTodo(todo, newTodo) {
            todo.title = newTodo.title;
            todo.description = newTodo.description;
            TodoService.updateTodo(todo).then();
        },
        async deleteTodo(todo) {
            TodoService.deleteTodo(todo._id).then(() => {
                pull(this.todos, todo);
            });
        }
    }
}
</script>

<style scoped lang="scss">
.new {
    margin: auto;
    width: 700px;
    display: flex;
    justify-content: space-around;
    line-height: 30px;
    .icon {
        font-size: 30px;
        cursor: pointer;
    }
}
</style>
