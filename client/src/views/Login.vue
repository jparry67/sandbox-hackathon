<template>
    <div class="login">
        <Nav type="unauthenticated" />
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
import Nav from '@/components/Nav.vue';

export default {
    name: 'Login',
    components: {
        Nav
    },
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
                const userType = response.data.user.userType;
                localStorage.setItem('userType', userType);
                if (userType === 'student') {
                    this.$router.push('/student/shadow-search');
                } else {
                    this.$router.push('/employee/upcoming-shadows');
                }
                this.failedLoginMessage = '';
            } catch (err) {
                this.failedLoginMessage = 'Login failed!';
            }
        }
    },
};
</script>
