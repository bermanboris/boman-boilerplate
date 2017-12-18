export default {
  Query: {
    getTodos(parent, args, { TodoController }) {
      return TodoController.getTodos();
    }
  }
};
