<template>
    <div class="shadow-search">
        <Nav type="student" />
        <div class="page">
            <div class="page-header">
                <div class="title">
                    <span class="company-name" v-if="employee.company">{{ employee.company.name }}</span>
                    <span v-if="employee.job">{{ employee.job.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmployeeService from '@/services/EmployeeService.js';
import Nav from '@/components/Nav.vue';

export default {
    name: 'ShadowCalendar',
    components: {
        Nav
    },
    data: () => {
        return {
            employee: {},
        }
    },
    created: async function() {
        if (localStorage.getItem('employeeId')) {
            const response = await EmployeeService.getEmployee(localStorage.getItem('employeeId'));
            this.employee = response.data.employee;
            console.log(this.employee);
        } else {
            this.$router.push('/student/shadow-search');
        }
    },
}
</script>

<style scoped lang="scss">
.company-name {
    font-weight: 600;
    margin-right: 20px;
}
</style>