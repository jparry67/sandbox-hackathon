<template>
    <div class="todo">
        <div class="text">
            <h3 v-if="!isEditing">{{ todo.title }}</h3>
            <input v-if="isEditing" v-model="newTitle" />
            <p v-if="!isEditing">{{ todo.description }}</p>
            <input v-if="isEditing" v-model="newDescription" />
        </div>
        <div class="icons">
            <fa v-if="isEditing" icon="save" @click="save()" />
            <fa v-if="!isEditing" icon="edit" @click="isEditing = true" />
            <fa icon="trash-alt" @click="$emit('deleteTodo', todo)" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: {
        todo: Object
    },
    data: () => {
        return {
            isEditing: false,
            newTitle: '',
            newDescription: '',
        }
    },
    created: function() {
        this.newTitle = this.todo.title;
        this.newDescription = this.todo.description;
    },
    methods: {
        save() {
            this.$emit('updateTodo', {title: this.newTitle, description: this.newDescription});
            this.isEditing = false;
        }
    }
}
</script>

<style scoped lang="scss">
.todo {
    width: 700px;
    height: 100px;
    border: blue 1px solid;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 4fr 1fr;

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 30px;
    }

    .icons {
        width: 100px;
        display: flex;
        justify-content: space-around;
        font-size: 30px;
        margin: auto 0;
        cursor: pointer;
    }
}
</style>
