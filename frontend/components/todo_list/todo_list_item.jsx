import React from 'react';
import TodoForm from './todo_form';

class TodoListItem extends React.Component {
  constructor(props = {}){
    super(props);
    // this.props = props;
  }

  handleRemove(prop, e) {
    e.preventDefault();
    this.props.removeTodo(prop);
  }

  updateTodo(prop,e) {
    e.preventDefault();
    this.props.updateTodo(prop);
  }

  status(prop) {
    if(prop.done){
      return "UNDO";
    }
    else{
      return "DONE";
    }
  }

  render() {
    const titles = this.props.todos.map(prop => (
      <li key={prop.id}>
        {prop.title}
        <button onClick={this.updateTodo.bind(this, prop)}>{this.status(prop)}</button>
      </li>
    ));
    return (
      <div>
        <ul>
          {titles}
        </ul>
        <TodoForm
          receiveTodo={this.props.receiveTodo}
        />
      </div>
    );
  }
}

export default TodoListItem;
