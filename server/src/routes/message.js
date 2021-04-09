import { Router } from 'express';
 
const messageRouter = Router();
 
messageRouter.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});
 
messageRouter.get('/:messageId', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});
 
messageRouter.post('/', (req, res) => {
  const message = {
    text: req.body.text,
    userId: req.context.me.id,
  };
 
  req.context.models.messages[id] = message;
 
  return res.send(message);
});
 
messageRouter.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;
 
  req.context.models.messages = otherMessages;
 
  return res.send(message);
});
 
export default messageRouter;