import {connect} from "react-redux";
import TodoList from "./todo_list_item.jsx";
import {receiveTodo, removeTodo, updateTodo} from "../../actions/todo_actions.js";
import {allTodos} from "../../reducers/selectors";

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
