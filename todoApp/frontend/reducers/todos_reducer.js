import {RECEIVE_TODOS, RECEIVE_TODO,
  REMOVE_TODO, UPDATE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';
import values from 'lodash/values';

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

const todosReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      values(action.todos).forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      newState = {[action.todo.id]: action.todo};
      return merge({}, newState, state);
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};



export default todosReducer;
