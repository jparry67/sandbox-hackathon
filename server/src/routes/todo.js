import { Router } from 'express';
import controllers from '../controllers/index.js';
const { todoController } = controllers;

const todoRouter = Router();

todoRouter.get('/all', todoController.all);
// todoRouter.get('/:todoId', todoController.byId);
// todoRouter.get('/user/:userId', todoController.byUser);
todoRouter.post('/', todoController.create);
todoRouter.put('/:todoId', todoController.update);
todoRouter.delete('/:todoId', todoController.delete);
todoRouter.delete('/all', todoController.deleteAll);

export default todoRouter;