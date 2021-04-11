import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
    {
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        employee: {
            type: mongoose.Schema.Types.Object,
            ref: 'User',
        },
        employeeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        student: {
            type: mongoose.Schema.Types.Object,
            ref: 'User',
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;