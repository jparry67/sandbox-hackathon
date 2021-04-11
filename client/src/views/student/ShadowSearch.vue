<template>
    <div class="shadow-search">
        <Nav type="student" />
        <div class="page">
            <div class="page-header">
                <div class="title">
                    Job Shadows
                </div>
            </div>
            <div class="card-list">
                <div class="card" v-for="employee in employees" :key="employee._id" @click="routeToCalendar(employee)">
                    <div class="header">
                        {{ employee.company.name }}
                    </div>
                    <div class="content">
                        {{ employee.company.location }}
                    </div>                
                    <div class="content">
                        {{ employee.job.title }}
                    </div>
                    <div class="content">
                        {{ employee.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmployeeService from '@/services/EmployeeService.js';
import Nav from '@/components/Nav.vue';

export default {
    name: 'ShadowSearch',
    components: {
        Nav
    },
    data: () => {
        return {
            userType: '',
            employees: [],
        }
    },
    created: async function() {
        this.userType = localStorage.getItem('userType');
        if (!this.userType || this.userType !== 'student') {
            this.$router.push('/login');
        }
        const response = await EmployeeService.allEmployees();
        this.employees = response.data.employees;
    },
    methods: {
        routeToCalendar(employee) {
            localStorage.setItem('employeeId', employee._id);
            this.$router.push('/student/shadow-calendar');
        }
    }
}
</script>

<style scoped lang="scss">
</style>