import { Category, PrismaClient, User } from '@prisma/client';
import { Sms, Notification, Email } from './message'

class MessageSender {
  static async sendSms(users: User[], message: string, category: Category){
    let sms = new Sms(message, category);
    sms.send(users.filter(user => user.types.includes("SMS")).map(user => user.id));
  }

  static async sendEmail(users: User[], message: string, category: Category){
    let email = new Email(message, category);
    email.send(users.filter(user => user.types.includes("EMAIL")).map(user => user.id));
  }

  static async sendNotification(users: User[], message: string, category: Category){
    let notification = new Notification(message, category);
    notification.send(users.filter(user => user.types.includes("NOTIFICATION")).map(user => user.id));
  }
}

export { MessageSender };