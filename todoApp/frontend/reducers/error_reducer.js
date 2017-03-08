import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';
import merge from 'lodash/merge';


const errorReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge({}, action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};



export default errorReducer;
