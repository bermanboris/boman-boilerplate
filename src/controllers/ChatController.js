import { pubsub, RootController } from 'boman';

const messages = [];

@RootController
class ChatController {
  getAllMessages() {
    return messages;
  }

  sendMessage(message) {
    messages.push(message);
    return pubsub.publish('MESSAGES', {
      newMessage: message,
    });
  }
}

export default ChatController;
