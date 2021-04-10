<template>
    <div class="upcoming-shadows">
        <Nav type="employee" />
        <div class="page">
            <h1>This is the upcoming shadows page</h1>
            <p>Logged in as {{ userType }}</p>
        </div>
    </div>
</template>

<script>
// import EmployeeService from '@/services/EmployeeService.js';
import Nav from '@/components/Nav.vue';

export default {
    name: 'UpcomingShadows',
    components: {
        Nav
    },
    data: () => {
        return {
            userType: '',
        }
    },
    created: function() {
        this.userType = localStorage.getItem('userType');
        if (!this.userType || this.userType !== 'employee') {
            this.$router.push('/login');
        }
    },
}
</script>
