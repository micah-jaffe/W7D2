import * as APIUtil from '../util/todo_api_util';
import { RECEIVE_ERRORS, CLEAR_ERRORS, receiveErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => (dispatch, getState) => {
  return APIUtil.fetchTodos()
    .then( (res) => dispatch(receiveTodos(res)) );
};

export const createTodo = (todo) => (dispatch, getState) => {
  return APIUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};
