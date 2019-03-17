import {
  RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER
} from "../actions/session_actions";
import {
  RECEIVE_USER, RECEIVE_ALL_USERS
} from '../actions/user_actions';

import {
  merge 
} from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, {
        [action.user.id]: action.user
      })
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        [action.user.id]: action.user
      });
    case RECEIVE_ALL_USERS:
      let newState = {};
      action.users.forEach(user => {
        newState[user.id] = user;
      });
      debugger
      return merge({}, state, newState);
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default usersReducer;