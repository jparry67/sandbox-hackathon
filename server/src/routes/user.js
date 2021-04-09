import { Router } from 'express';
 
const userRouter = Router();
 
userRouter.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});
 
userRouter.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});
 
export default userRouter;