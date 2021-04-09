import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
        // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // connect todo to a specific user
    },
    {
        timestamps: true,
    }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;