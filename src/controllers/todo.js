import { RootController } from 'boman';

@RootController
class TodoController {
  getTodos() {
    return [{ id: '1', text: 'Hello' }];
  }
}

export default TodoController;
