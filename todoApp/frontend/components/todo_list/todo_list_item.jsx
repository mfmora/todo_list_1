import React from 'react';
import TodoForm from './todo_form';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props = {}){
    super(props);
    this.props = props;
    this.state = { detail: false };
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleUpdateTodo(prop,e) {
    e.preventDefault();
    prop.done = !prop.done;
    this.props.updateTodo(prop);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
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


    // let detail = () => {
    //   debugger;
    //   if(this.state.detail) {
    //     debugger;
    //     return (
    //       <div>
    //         <TodoDetailView />
    //       </div>
    //     );
    //   }
    // };
    let detail;
    if(this.state.detail){
      detail = <TodoDetailView />;
    }

    const titles = this.props.todos.map(prop => (
      <li key={prop.id}>
        <span onClick={this.toggleDetail.bind(this)}>{prop.title}</span>
        <button onClick={this.handleUpdateTodo.bind(this, prop)}>{this.status(prop)}</button>
        {detail}
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
