import { RECEIVE_CHANNEL } from '../../actions/channel_actions';

import { merge } from 'lodash';

const uiChannelReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState = merge({}, oldState, {
        id: action.channel.id,
        discord_id: action.channel.discord_id,
        name: action.channel.name,
      });
      return newState;
    default:
      return oldState;
  }
}

export default uiChannelReducer;