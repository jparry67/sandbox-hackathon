import { Router } from 'express';
import todoRouter from './todo-router.js';
import userRouter from './user-router.js';
import employeeRouter from './employee-router.js';

const router = Router();

router.use('/todo', todoRouter);
router.use('/user', userRouter);
router.use('/employee', employeeRouter);

export default router;