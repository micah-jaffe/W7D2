import React from 'react';
import IDUtil from '../../util/unique_id_util';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: IDUtil(),
      body: '',
      title: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({todo: this.state})
      .then( () => this.setState({title: '', body: ''}));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChange('title')}></input>
        </label>
        <label>
          Body:
          <input type="text" value={this.state.body} onChange={this.handleChange('body')}></input>
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
