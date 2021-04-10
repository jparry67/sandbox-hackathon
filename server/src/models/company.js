import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
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
        location: {
            type: String,
            required: true,
        },
        logoUrl: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

companySchema.methods.getEmployees = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, "secret");
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

const Company = mongoose.model('Company', companySchema);

export default Company;