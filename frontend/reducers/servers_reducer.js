import { 
  RECEIVE_ALL_SERVERS,
  RECEIVE_SERVER 
} from '../actions/server_actions';
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
      })
      return merge({}, state, newState);
    case RECEIVE_SERVER:
      return merge({}, state, {
        [action.server.id]: action.server
      });
    default:
      return state;
  }
}

export default serversReducer;