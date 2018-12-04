import { RECEIVE_TODOS, RECEIVE_TODO, receiveTodo, receiveTodos, fetchTodos } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      const newObj = {[action.todo.id]: action.todo};
      return Object.assign(newObj, state);
    default:
      return state;
  }
};

export default todosReducer;
