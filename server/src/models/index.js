import mongoose from 'mongoose';
 
import User from './user.js';
import Company from './company.js';
import Employee from './employee.js';
import Job from './job.js';
import Appointment from './appointment.js';
 
const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

export { connectDb };
export default {
    User,
    Company,
    Employee,
    Job,
    Appointment,
};