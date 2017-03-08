import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = todo => {
  return {
    type: REMOVE_TODO,
    todo
  };
};
// export const updateTodo = todo => {
//   return {
//     type: UPDATE_TODO,
//     todo
//   };
// };

export const fetchTodos = () => dispatch => (
  APIUtil.fetchTodos().then( todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => {
  return APIUtil.createTodo(todo)
    .then( newTodo => dispatch(receiveTodo(newTodo)),
      err => dispatch(receiveErrors(err.responseJSON)))
    .then( () => dispatch(clearErrors()));
};

export const updateTodo = todo => dispatch => {
  return APIUtil.updateTodo(todo)
    .then( newTodo => dispatch(receiveTodo(newTodo)),
      err => dispatch(receiveErrors(err.responseJSON)))
    .then( () => dispatch(clearErrors()));
};

export const deleteTodo = todo => dispatch => {
  return APIUtil.deleteTodo(todo)
    .then( newTodo => dispatch(removeTodo(newTodo)),
      err => dispatch(receiveErrors(err.responseJSON)))
    .then( () => dispatch(clearErrors()));
};
