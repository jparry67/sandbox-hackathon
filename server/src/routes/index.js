import { Router } from 'express';
import sessionRouter from './session.js';
import userRouter from './user.js';
import messageRouter from './message.js';
import todoRouter from './todo.js';

const router = Router();

router.use('/session', sessionRouter);
router.use('/user', userRouter);
router.use('/message', messageRouter);
router.use('/todo', todoRouter);

export default router;