import React from 'react';
import APIUtil from '../../util/api_util.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: APIUtil.uniqueId(), title: '', body: '', done: false};
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({ id: APIUtil.uniqueId(), title: '', body: '', done: false});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Title:
            <input
              type='text'
              onChange={this.updateTitle}
              value={this.state.title}
              />
          </label>
          <br />
          <label> Body:
            <input
              type='text'
              onChange={this.updateBody}
              value={this.state.body}
              />
          </label>
          <br />
        <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
