import React from 'react';

class TodoDetailView extends React.Component {
  constructor(prop = {}) {
    super(prop);
    this.prop = prop;
    this.state = {title: "", todo_id: prop.id, done: false};
  }

  handleRemove(prop, e) {
    e.preventDefault();
    this.props.removeTodo(prop);
  }

  render() {

    return (
      <div>I'm doing something!!</div>
    );
    // return (
    //   <div key={this.prop.id}>
    //     <span>{this.prop.body}</span>
    //     <button onClick={this.handleRemove.bind(this, this.prop)}>Remove</button>
    //   </div>
    // );

  }
}
export default TodoDetailView;
