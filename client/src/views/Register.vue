<template>
    <div class="register">
        <Nav type="unauthenticated" />
        <form @submit.prevent="registerUser">
            <input type="text" id="name" placeholder="Name" v-model="register.name" />
            <input type="text" id="email" placeholder="Email" v-model="register.email" />
            <input type="password" id="password" placeholder="Password" v-model="register.password" />
            <input type="radio" v-model="register.userType" value="student" checked>student
            <input type="radio" v-model="register.userType" value="employee">employee
            <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
            <button type="submit">Create an account</button>
            <p v-if="failedRegisterMessage">{{ failedRegisterMessage }}</p>
        </form>
    </div>
</template>

<script>
import UserService from '@/services/UserService.js';
import Nav from '@/components/Nav.vue';

export default {
    name: 'Register',
    components: {
        Nav
    },
    data: () => {
        return {
            register: {
                name: '',
                email: '',
                password: '',
                userType: 'student',
            },
            failedRegisterMessage: '',
        };
    },
    methods: {
        async registerUser() {
            try {
                let response = await UserService.register(this.register);
                const userType = response.data.user.userType;
                localStorage.setItem('userType', userType);
                if (userType === 'student') {
                    this.$router.push('/student/shadow-search');
                } else {
                    this.$router.push('/employee/upcoming-shadows');
                }
                this.failedRegisterMessage = '';
            } catch (err) {
                this.failedRegisterMessage = err.response;
            }
        }
    },
};
</script>
