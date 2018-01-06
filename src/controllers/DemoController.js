import { RootController } from 'boman';

const users = [];

@RootController
class DemoController {
  addUser(user) {
    users.push(user);
    return users;
  }
  getUsers() {
    return users;
  }
}

export default DemoController;
