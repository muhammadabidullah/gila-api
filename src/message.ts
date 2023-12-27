import { Category, PrismaClient, Type } from '@prisma/client';

const prisma = new PrismaClient();

class Message {
  text: string;
  type: Type;
  category: Category;
  constructor(theText: string, theCategory: Category) {
    this.text = theText;
    this.category = theCategory;
  }
  log(ids: number[]) {
    ids.forEach(async (id) => {
      await prisma.logHistory.create({
        data: {
          userId: id,
          message: this.text,
          type: this.type,
          category: this.category
        },
      })
    });
  }
}
 
class Sms extends Message {
  constructor(text: string, category: Category) {
    super(text, category);
    this.type = 'SMS';
  }
  send(ids: number[]) {
    // External API code here for sending SMS
    super.log(ids);
  }
}
 
class Email extends Message {
  constructor(text: string, category: Category) {
    super(text, category);
    this.type = 'EMAIL'
  }
  send(ids: number[]) {
    // External API code here for sending EMAIL
    super.log(ids);
  }
}

class Notification extends Message {
  constructor(text: string, category: Category) {
    super(text, category);
    this.type = 'NOTIFICATION';
  }
  send(ids: number[]) {
    // External API code here for sending Push Notification
    super.log(ids);
  }
}

export { Notification, Email, Sms }
