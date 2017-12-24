export default {
  Query: {
    getUsers(parent, args, { AuthController }) {
      return AuthController.getUsers();
    },
    getMyUser(parent, args, { AuthController }) {
      return AuthController.getMyUser();
    },
    checkPassword(
      parent,
      { email, password },
      { AuthController }
    ) {
      return AuthController.checkPassword({
        email,
        password
      });
    }
  },
  Mutation: {
    register(parent, user, { AuthController }) {
      return AuthController.register(user);
    },
    login(parent, credentials, { AuthController }) {
      return AuthController.login(credentials);
    },
    banUser(parent, { id }, { AuthController }) {
      return AuthController.banUser(id);
    },
    logout(parent, args, { AuthController }) {
      return AuthController.logout();
    }
  }
};
