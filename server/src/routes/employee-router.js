import { Router } from 'express';
import controllers from '../controllers/index.js';
const { employeeController } = controllers;

const userRouter = Router();

userRouter.get("/all", employeeController.getEmployees);
userRouter.get("/:employeeId", employeeController.getEmployee);

export default userRouter;