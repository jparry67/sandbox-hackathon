import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        profileUrl: {
            type: String,
            required: true,
        },
        linkedinUrl: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.Object,
            ref: 'User',
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        company: {
            type: mongoose.Schema.Types.Object,
            ref: 'Company',
        },
        companyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
        },
        job: {
            type: mongoose.Schema.Types.Object,
            ref: 'Job',
        },
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
        },
    },
    {
        timestamps: true,
    }
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;