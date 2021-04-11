import models from '../models/index.js';
const { Appointment, User } = models;

const appointmentController = {
    async byEmployee (req, res) {
        try {
            const appointments = await Appointment.find({employeeId: req.params.employeeId});
            for (const appointment in appointments) {
                appointments[appointment].employee = await User.findOne({ _id: appointments[appointment].employeeId });
                if (appointments[appointment].studentId) {
                    appointments[appointment].student = await User.findOne({ _id: appointments[appointment].studentId });
                }
            }
            res.status(201).json({ appointments });
        } catch (err) {
            res.status(400).json({ err: err });
        }
    },
    create (req, res) {
        new Appointment(req.body).save((err, appointment) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(appointment);
        });
    },
    update (req, res) {
        Appointment.findByIdAndUpdate(
            req.params.appointmentId,
            req.body,
            {new: true},
            (err, appointment) => {
                if (err) return res.status(500).send(err);
                return res.send(appointment);
            }
        );
    },
    delete (req, res) {
        Appointment.findByIdAndRemove(
            req.params.appointmentId,
            (err, appointment) => {
                if (err) return res.status(500).send(err);
                const response = {
                    message: "Appointment successfully deleted",
                    id: appointment._id,
                };
                return res.status(200).send(response);
            }
        )
    },
};

export default appointmentController;