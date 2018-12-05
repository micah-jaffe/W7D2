import React from 'react';
import TodoForm from './todo_form'

export default class TodoList extends React.Component{
  render() {
    return (
      <>
        <h3>Todo List goes here!</h3>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
        <TodoForm
          receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo}
          receiveErrors={this.props.receiveErrors}
          errors={this.props.errors}
        />
      </>
    )
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
}
