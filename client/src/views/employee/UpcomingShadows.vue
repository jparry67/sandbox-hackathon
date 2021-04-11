<template>
    <div class="upcoming-shadows">
        <Nav type="employee" />
        <div class="page">
            <div class="page-header">
                <div class="title">
                    My Shadows
                </div>
            </div>
            <Calendar v-if="appointments.length" :appointments="appointments" @newAvailibility="newAvailibility($event)"/>
        </div>
        <div class="page">
            <div class="page-header">
                <div class="title">
                    My Upcoming Shadows
                </div>
            </div>
            <div class="card-list">
                <div class="card" v-for="appointment in upcomingAppointments" :key="appointment._id">
                    <div class="header">{{appointment.student.name}}</div>
                    <div class="appointment-info">
                        <div>{{appointment.date}}</div>
                        <div>{{appointment.timeInterval}}</div>
                    </div>
                    <div class="action">Cancel</div>
                </div>
            </div>
        </div>
        <div class="page">
            <div class="page-header">
                <div class="title">
                    Past Shadows
                </div>
            </div>
            <div class="card-list">
                <div class="card" v-for="appointment in pastAppointments" :key="appointment._id">
                    <div class="header">{{appointment.student.name}}</div>
                    <div class="appointment-info">
                        <div>{{appointment.date}}</div>
                        <div>{{appointment.timeInterval}}</div>
                    </div>
                </div>
            </div>
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
import Nav from '@/components/Nav.vue';
import Calendar from '@/components/Calendar.vue';

export default {
    name: 'UpcomingShadows',
    components: {
        Nav,
        Calendar,
    },
    data: () => {
        return {
            userType: '',
            appointments: [],
            upcomingAppointments: [],
            pastAppointments: [],
            availableAppointments: [],
            employeeId: undefined,
        }
    },
    created: async function() {
        this.userType = localStorage.getItem('userType');
        this.employeeId = localStorage.getItem('userId');
        console.log(this.userType, this.employeeId);
        if (!this.userType || this.userType !== 'employee' || !this.employeeId) {
            this.$router.push('/login');
        }
        this.setAppointments();
    },
    methods: {
        async newAvailibility(event) {
            event.employeeId = this.employeeId;
            const response = await AppointmentService.createAppointment(event);
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
    }
}
</script>
