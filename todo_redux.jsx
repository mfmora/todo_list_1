import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store.js';
import { allTodos } from "./frontend/reducers/selectors.js";
import {receiveTodo, receiveTodos} from './frontend/actions/todo_actions';
import Root from './frontend/components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
  window.store = store;
  // const selectors = allTodos(window.store.getState());
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

});
