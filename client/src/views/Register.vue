<template>
    <div class="register">
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
export default {
    name: 'Register',
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
                console.log(this.register);
                let response = await this.UserService.register(this.register);
                console.log(response);
                localStorage.setItem('userType', response.data.user.userType);
                this.$router.push('/');
                this.failedRegisterMessage = '';
            } catch (err) {
                this.failedRegisterMessage = err.response;
            }
        }
    },
};
</script>
