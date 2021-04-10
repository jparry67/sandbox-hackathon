import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
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
        companyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
        },
        company: {
            type: Object,
        },
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
        },
        job: {
            type: Object,
        },
    },
    {
        timestamps: true,
    }
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;