import mongoose from 'mongoose';
 
import User from './user.js';
import Message from './message.js';
import Todo from './todo.js';
 
const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

export { connectDb };
export default {
    User,
    Message,
    Todo
};