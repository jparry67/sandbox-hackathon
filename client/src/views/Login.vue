<template>
    <div class="login">
        <form @submit.prevent="loginUser">
            <input type="text" id="email" placeholder="Email" v-model="login.email" />
            <input type="password" id="password" placeholder="Password" v-model="login.password" />
            <p>New here? <router-link to="/register">Create an account</router-link></p>
            <button type="submit">Sign in</button>
            <p v-if="failedLoginMessage">{{ failedLoginMessage }}</p>
        </form>
    </div>
</template>

<script>
import UserService from '@/services/UserService.js';

export default {
    name: 'Login',
    data: () => {
        return {
            login: {
                email: '',
                password: ''
            },
            failedLoginMessage: '',
        };
    },
    methods: {
        async loginUser() {
            try {
                let response = await UserService.login(this.login);
                console.log(response.data);
                localStorage.setItem('userType', response.data.user.userType);
                this.$router.push('/shadow');
                this.failedLoginMessage = '';
            } catch (err) {
                this.failedLoginMessage = 'Login failed!';
            }
        }
    },
};
</script>
