import {RECEIVE_TODOS, RECEIVE_TODO,
  REMOVE_TODO, UPDATE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash vinson",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash fernanda",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return merge({}, action.todos);
    case RECEIVE_TODO:
      let newState = {[action.todo.id]: action.todo};
      return merge({}, newState, state);
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    case UPDATE_TODO:
      newState = merge({}, state);
      newState[action.todo.id].done = !newState[action.todo.id].done;
      return newState;
    default:
      return state;
  }
};



export default todosReducer;
