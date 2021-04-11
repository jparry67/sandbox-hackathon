<template>
    <div id="nav">
        <router-link v-if="type==='student'" to="/student/shadows">My Shadows</router-link>
        <router-link v-if="type==='student'" to="/student/shadow-search">Find a Shadow</router-link>
        <router-link v-if="type==='employee'" to="/employee/upcoming-shadows">Home</router-link>
        <router-link v-if="type==='unauthenticated'" to="/">Home</router-link>
        <router-link v-if="type==='unauthenticated'" to="/login">Login</router-link>
        <router-link v-if="type==='unauthenticated'" to="/register">Register</router-link>
        <button v-if="type!=='unauthenticated'" @click="logout">Log out</button>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        type: String,
    },
    methods: {
        logout() {
            localStorage.removeItem('userType');
            this.$router.push('/');
        }
    },
}
</script>

<style scoped lang="scss">
#nav {
    background-color: grey;
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;
        margin-right: 20px;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
