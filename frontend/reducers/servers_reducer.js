import { 
  RECEIVE_ALL_SERVERS,
  RECEIVE_SERVER 
} from '../actions/server_actions';

import { 
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import { 
  merge 
} from 'lodash';

const serversReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_SERVERS:
      let newState = {};
      action.servers.forEach(server => {
        newState[server.id] = server;
      });
      debugger;
      return merge({}, state, newState);
    case RECEIVE_SERVER:
      return merge({}, state, {
        [action.server.id]: action.server
      });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default serversReducer;