import {
  RECEIVE_ALL_MESSAGES,
  RECEIVE_MESSAGE,
} from '../actions/message_actions';

import { merge } from 'lodash';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      let newState = {};

      action.messages.forEach(message => {
        newState[message.id] = message;
      });

      return newState;

    case RECEIVE_MESSAGE:
      return merge({}, state, {
        [action.message.id]: action.message
      });
    default:
      return state;
  }
}

export default messagesReducer;