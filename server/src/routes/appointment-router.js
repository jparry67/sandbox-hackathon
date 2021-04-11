import { Router } from 'express';
import controllers from '../controllers/index.js';
const { appointmentController } = controllers;

const appointmentRouter = Router();

appointmentRouter.get("/:employeeId", appointmentController.byEmployee);
appointmentRouter.post("/", appointmentController.create);
appointmentRouter.put("/:appointmentId", appointmentController.update);
appointmentRouter.delete('/:appointmentId', appointmentController.delete);

export default appointmentRouter;