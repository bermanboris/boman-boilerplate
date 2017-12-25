import { RootController, errors, permissions, rules } from 'boman';
import { login } from '../middlewares/auth/local';

@RootController
class AuthController {
  getUsers() {
    return this.models.User.find({});
  }

  async checkPassword({ email, password }) {
    const user = await this.models.User.findOne({
      email: email.toLowerCase()
    });

    const isValid = await user.comparePassword(password);

    if (!isValid) {
      throw new Error('Password is invalid!');
    }

    return true;
  }

  @permissions([rules.isAuthenticated])
  getMyUser() {
    return this.models.User.findOne({ _id: this.user.id });
  }

  register(user) {
    return this.models.User.create(user);
  }

  logout() {
    this.req.logout();
    this.req.session.destroy(err => console.log(err));
    return true;
  }

  async login({ email, password }) {
    const loggedUser = await login({
      email,
      password,
      req: this.req
    });
    if (!loggedUser) throw new errors.InvalidCredentials();
    return loggedUser;
  }

  banUser(id) {
    return this.models.User.update(
      { _id: id },
      { $set: { blocked: 1 } }
    );
  }
}

export default AuthController;
