import { Router } from 'express';
import  { UserOperations } from '../userOperations';
import { MessageSender } from '../messageSender';

const messagesRouter = Router();

messagesRouter.post('/send_message', async (req, res) => {
  try {
    let category = req.body.category;
    let message = req.body.message;
    const users = await UserOperations.getUsersBySubscription(category);
    MessageSender.sendSms(users, message, category);
    MessageSender.sendEmail(users, message, category);
    MessageSender.sendNotification(users, message, category);
    res.status(200).json('Message Sent and Logs History Created');
  } catch (error) {
    console.error(error.message);
    res.status(500).json('Server Error: ' + error.message);
  }
});

export default messagesRouter;
