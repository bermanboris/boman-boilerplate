export default {
  Query: {
    getUsers(_, args, { AuthController }) {
      return AuthController.getUsers();
    },
    getMyUser(_, args, { AuthController }) {
      return AuthController.getMyUser();
    },
    checkPassword(_, credentials, { AuthController }) {
      return AuthController.checkPassword(credentials);
    }
  },
  Mutation: {
    register(_, user, { AuthController }) {
      return AuthController.register(user);
    },
    login(_, credentials, { AuthController }) {
      return AuthController.login(credentials);
    },
    banUser(_, { id }, { AuthController }) {
      return AuthController.banUser(id);
    },
    logout(_, args, { AuthController }) {
      return AuthController.logout();
    }
  }
};
