import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { allTodos, allErrors } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: (todo) => dispatch(fetchTodos(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveErrors: (error) => dispatch(receiveErrors(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
