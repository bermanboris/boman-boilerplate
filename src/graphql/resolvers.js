import { pubsub } from 'boman';

export default {
  Query: {
    messages(_, args, { ChatController }) {
      return ChatController.getAllMessages();
    },
  },
  Subscription: {
    newMessage: {
      subscribe: () => pubsub.asyncIterator('MESSAGES'),
    },
  },
  Mutation: {
    sendMessage(parent, message, { ChatController }) {
      return ChatController.sendMessage(message);
    },
  },
};
