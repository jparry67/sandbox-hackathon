import { Router } from 'express';
import userRouter from './user-router.js';
import employeeRouter from './employee-router.js';
import appointmentRouter from './appointment-router.js';

const router = Router();

router.use('/user', userRouter);
router.use('/employee', employeeRouter);
router.use('/appointment', appointmentRouter);

export default router;