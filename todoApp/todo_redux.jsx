import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store.js';
import { allTodos } from "./frontend/reducers/selectors.js";
import {receiveTodo, receiveTodos, fetchTodos, createTodo} from './frontend/actions/todo_actions';
// import {createTodo} from './frontend/util/todo_api_util';
import Root from './frontend/components/root';
import thunk from './frontend/middleware/thunk';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.createTodo = createTodo;
  window.thunk = thunk;
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
