import { Router } from 'express';
import todoRouter from './todo-router.js';
import userRouter from './user-router.js';

const router = Router();

router.use('/todo', todoRouter);
router.use('/user', userRouter);

export default router;