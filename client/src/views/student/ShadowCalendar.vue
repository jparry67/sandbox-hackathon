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
            <Calendar v-if="appointments.length" :appointments="appointments" :studentView="true" @book="book($event)"/>
        </div>
    </div>
</template>

<script>
import { 
    format, 
    // addMonths, 
    // addWeeks, 
    // addDays, 
    // subMonths, 
    // subWeeks, 
    // subDays, 
    // startOfWeek, 
    // endOfWeek, 
    // startOfMonth, 
    // endOfMonth, 
    isBefore,
    parseISO,
} from 'date-fns';
import AppointmentService from '@/services/AppointmentService.js';
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
            employeeId: undefined,
            studentId: undefined,
            appointments: [],
            upcomingAppointments: [],
            pastAppointments: [],
            availableAppointments: [],
        }
    },
    created: async function() {
        if (localStorage.getItem('employeeId')) {
            this.studentId = localStorage.getItem('userId');
            this.employeeId = localStorage.getItem('employeeId');
            const response = await EmployeeService.getEmployee(localStorage.getItem('employeeId'));
            this.employee = response.data.employee;
        } else {
            this.$router.push('/student/shadow-search');
        }
    },
    methods: {
        async book(event) {
            event.studentId = this.studentId;
            const response = await AppointmentService.updateAppointment(event);
            const newAppointment = response.data.appointment;
            this.appointments.push(newAppointment);
            this.setAppointments();
        },
        async setAppointments() {
            const response = await AppointmentService.getEmployeeAppointments(this.employeeId);
            this.appointments = response.data.appointments;
            this.appointments.forEach((appointment) => {
                appointment.date = format(parseISO(appointment.startTime), 'MMMM d, yyyy');
                appointment.timeInterval = format(parseISO(appointment.startTime), 'haa') + ' - ' + format(parseISO(appointment.endTime), 'haa');
            });
            this.availableAppointments = this.appointments.filter((appointment) => isBefore(new Date(), parseISO(appointment.endTime)) && !appointment.studentId);
            this.upcomingAppointments = this.appointments.filter((appointment) => isBefore(new Date(), parseISO(appointment.endTime)) && appointment.studentId);
            this.pastAppointments = this.appointments.filter((appointment) => isBefore(parseISO(appointment.endTime), new Date()) && appointment.studentId);
        },
    },
}
</script>

<style scoped lang="scss">
.company-name {
    font-weight: 600;
    margin-right: 20px;
}
</style>