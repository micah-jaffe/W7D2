import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: (todo) => dispatch(fetchTodos(todo)),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
