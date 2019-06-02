import { RECEIVE_SERVER } from '../../actions/server_actions';
import { merge } from 'lodash';

const uiServerReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SERVER:
      newState = merge({}, oldState, {
        id: action.server.id,
        discord_id: action.server.discord_id,
        name: action.server.name,
      });
      return newState;
    default:
      return oldState;
  }
}

export default uiServerReducer;