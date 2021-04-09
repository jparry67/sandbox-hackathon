import { Router } from 'express';
import authHandler from './auth.js';
import controllers from '../controllers/index.js';
const { userController } = controllers;

const userRouter = Router();

userRouter.post("/register", userController.registerNewUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/me", authHandler, userController.getUserDetails);

export default userRouter;