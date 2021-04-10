import mongoose from 'mongoose';
 
import User from './user.js';
import Todo from './todo.js';
import Company from './company.js';
import Employee from './employee.js';
import Job from './job.js';
 
const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

export { connectDb };
export default {
    User,
    Todo,
    Company,
    Employee,
    Job,
};