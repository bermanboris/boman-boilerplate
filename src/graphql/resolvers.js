export default {
  Query: {
    getUsers(parent, args, { DemoController }) {
      return DemoController.getUsers();
    },
  },
  Mutation: {
    addUser(parent, user, { DemoController }) {
      return DemoController.addUser(user);
    },
  },
};
