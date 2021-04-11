<template>
    <div id="calendar">
        <div class="view-buttons">
            <div @click="view = 'day'" class="view-button" :class="{selected: view === 'day'}">Day</div>
            <div @click="view = 'week'"  class="view-button" :class="{selected: view === 'week'}">Week</div>
            <div @click="view = 'month'"  class="view-button" :class="{selected: view === 'month'}">Month</div>
        </div>
        <div class="calendar">
            <fa class="icon" icon="caret-left" @click="left" />
            <div v-if="view==='day' && !adding">
                <div>{{currentDateString}}</div>
                <div class="day-time" v-for="time in times" :key="time">
                    <span class="time">{{time}}</span>
                    <span class="slot"></span>
                </div>
            </div>
            <div v-if="(view==='week' || view==='month') && !adding" class="calendar-view">
                <div class="current-date">{{currentDateString}}</div>
                <div class="week-grid">
                    <div class="dayOfWeek" v-for="day in daysOfWeek" :key="day">{{day}}</div>
                    <div class="week-day" v-for="day in days" :key="day">
                        <div @click="setDate(day.date)">{{day.monthDate}}</div>
                        <div v-if="day.booked" @click="setDate(day.date)">Booked: {{day.booked}}</div>
                        <div v-if="day.available" @click="setDate(day.date)">Available: {{day.available}}</div>
                        <div class="add-button" @click="add(day.date, $event)">Add Availability</div>
                    </div>
                </div>
            </div>
            <div v-if="adding" class="add-dialog">
                <div class="header">New Availability</div>
                <div class="date">{{newAvailability.displayDate}}</div>
                <div class="time">Start time: <input v-model="newAvailability.startTime" /></div>
                <div class="time">End time: <input v-model="newAvailability.endTime" /></div>
                <div class="buttons">
                    <div class="button" @click="close">Close</div>
                    <div class="button create" @click="save">Create Availability</div>
                </div>
            </div>
            <fa class="icon" icon="caret-right" @click="right" />
        </div>
    </div>
</template>

<script>
import { 
    format, 
    addMonths, 
    addWeeks, 
    addDays, 
    subMonths, 
    subWeeks, 
    subDays, 
    startOfWeek, 
    endOfWeek, 
    startOfMonth, 
    endOfMonth, 
    isBefore,
    isSameDay,
    parseISO,
    setHours,
    setMinutes,
} from 'date-fns';

export default {
    name: 'Calendar',
    props: {
        appointments: [],
    },
    data() {
        return {
            view: 'week',
            currentDate: new Date(),
            times: ['7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
            newAvailability: {},
            adding: false,
        }
    },
    computed: {
        currentDateString() {
            return this.view === 'month'? format(this.currentDate, 'MMMM yyyy') :
                this.view === 'week'? format(startOfWeek(this.currentDate), 'MMMM d') + ' - ' + format(endOfWeek(this.currentDate), 'MMMM d, yyyy') : 
                format(this.currentDate, 'EEEE MMMM d, yyyy');
        },
        daysOfWeek() {
            return this.view === 'month' ? ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'] : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        },
        days() {
            let days = [];
            const startingDate = this.view === 'month' ? startOfWeek(startOfMonth(this.currentDate)) : startOfWeek(this.currentDate);
            const endingDate = this.view === 'month' ? endOfWeek(endOfMonth(this.currentDate)) : endOfWeek(this.currentDate);
            let curr = startingDate;
            while (isBefore(curr, endingDate)) {
                days.push({
                    date: curr,
                    monthDate: format(curr, 'd'), 
                    dayOfWeek: format(curr, 'EEEE'), 
                    available: this.appointments.filter((appointment) => isSameDay(parseISO(appointment.startTime), curr) && !appointment.studentId).length,
                    booked: this.appointments.filter((appointment) => isSameDay(parseISO(appointment.startTime), curr) && !!appointment.studentId).length,
                });
                curr = addDays(curr, 1);
            }
            return days
        },
    },
    created: function() {
        console.log(this.appointments);
    },
    methods: {
        left() {
            this.currentDate = 
                this.view === 'month'? subMonths(this.currentDate, 1) :
                this.view === 'week'? subWeeks(this.currentDate, 1) : subDays(this.currentDate, 1);
        },
        right() {
            this.currentDate = 
                this.view === 'month'? addMonths(this.currentDate, 1) :
                this.view === 'week'? addWeeks(this.currentDate, 1) : addDays(this.currentDate, 1);
        },
        add(date) {
            this.newAvailability.displayDate = format(date, 'EEEE MMMM d, yyyy');
            this.newAvailability.date = date;
            this.adding = true;
        },
        save() {
            let nums = this.newAvailability.startTime.split(':');
            let startHour = nums[0];
            let vals = nums[1].split(' ');
            if (startHour == 12) {
                startHour -= 12;
            }
            if (vals[1] == 'PM') {
                startHour += 12;
            }
            const startMinutes = vals[0];
            let startDate = setHours(this.newAvailability.date, startHour);
            startDate = setMinutes(startDate, startMinutes);

            nums = this.newAvailability.endTime.split(':');
            let endHour = nums[0];
            vals = nums[1].split(' ');
            if (endHour == 12) {
                endHour -= 12;
            }
            if (vals[1] == 'PM') {
                endHour += 12;
            }
            const endMinutes = vals[0];
            let endDate = setHours(this.newAvailability.date, endHour);
            endDate = setMinutes(endDate, endMinutes);

            this.$emit('newAvailibility', {startTime: startDate, endTime: endDate});
            this.adding = false;
        },
        close() {
            this.newAvailability.startTime = '';
            this.newAvailability.endTime = '';
            this.adding = false;
        },
        setDate(date) {
            this.currentDate = date;
            this.view = 'day';
        },
    },
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
#calendar {
    display: grid;
    place-content: center;
    .view-buttons {
        width: 500px;
        display: flex;
        justify-content: space-between;
        margin: auto;

        .view-button {
            padding: 5px 40px;
            border-radius: 15px;
            font-weight: 600;
            cursor: pointer;
            margin: 20px;
            &.selected {
                background-color: $grey1;
            }
        }
    }
    .calendar {
        display: flex;
        justify-content: space-between;
        place-items: center;

        .icon {
            font-size: 40px;
            cursor: pointer;
        }

        .day-time {
            display: flex;
            .time {
                width: 50px;
            }
            .slot {
                width: 200px;
                background-color: $grey2;
            }
        }

        .calendar-view {
            margin: 30px;
            border: 1px solid black;
            padding: 0;

            .current-date {
                margin: 0;
                border: 1px solid black;
            }
            
            .week-grid {
                display: grid;
                width: 700px;
                grid-template-columns: repeat(7, 1fr);
                > div {
                    border: 1px solid black;
                }
                .week-day {
                    height: calc(100vh - 500px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    cursor: pointer;
                    .add-button{
                        margin-top: auto;
                        text-decoration: underline;
                        font-size: 12px;
                        cursor: pointer;
                    }
                }
            }   
        }
        .add-dialog {
            display: grid;
            grid-gap: 10px;
            .header {
                font-size: 20px;
                font-weight: 600;
            }
            .date {

            }
            .time {

            }
            .buttons {
                display: flex;
                justify-content: space-around;

                .button {
                    margin: 10px;
                    padding: 5px 20px;
                    background-color: $grey1;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
