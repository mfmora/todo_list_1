import {connect} from "react-redux";
import TodoList from "./todo_list_item.jsx";
import {createTodo, updateTodo, fetchTodos, deleteTodo} from "../../actions/todo_actions.js";
import {allTodos} from "../../reducers/selectors";
// import { receiveErrors, clearErrors } from './error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(deleteTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
