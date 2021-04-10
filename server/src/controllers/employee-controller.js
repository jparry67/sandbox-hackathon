import models from '../models/index.js';
const { Employee, Company, Job } = models;

const employeeController = {
    async getEmployees (req, res) {
        try {
            const employees = await Employee.find({});
            for (const employee in employees) {
                employees[employee].company = await Company.findOne({ _id: employees[employee].companyId });
                employees[employee].job = await Job.findOne({ _id: employees[employee].jobId });
            }
            res.status(201).json({ employees });
        } catch (err) {
            console.log(err);
            res.status(400).json({ err: err });
        }
    },
    async getEmployee (req, res) {
        try {
            const employee = await Employee.findById(req.params.employeeId);
            employee.company = await Company.findOne({ _id: employee.companyId });
            employee.job = await Job.findOne({ _id: employee.jobId });
            res.status(201).json({ employee });
        } catch (err) {
            res.status(400).json({ err: err });
        }
    }
};

export default employeeController;