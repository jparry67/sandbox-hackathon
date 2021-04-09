import { Router } from 'express';
 
const sessionRouter = Router();
 
sessionRouter.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});
 
export default sessionRouter;