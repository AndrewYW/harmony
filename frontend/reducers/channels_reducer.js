import { 
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNEL,
} from '../actions/channel_actions';

import { merge } from 'lodash';

const channelsReducer = (state= {}, action) => {
  Object.freeze(state);

  switch (action.type){
    case RECEIVE_ALL_CHANNELS:
      let newState = {};

      action.channels.forEach(channel => {
        newState[channel.id] = channel;
      });

      return merge({}, state, newState);
      
    case RECEIVE_CHANNEL:
      return merge({}, state, {
        [action.channel.id]: action.channel
      });
    default: 
      return state;
  }
}

export default channelsReducer;