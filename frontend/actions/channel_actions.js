import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const requestChannels = serverId => dispatch => (
  ChannelApiUtil.fetchChannels(serverId).then(channels => (
    dispatch(receiveAllChannels(channels))
  ))
);

export const requestChannel = id => dispatch => (
  ChannelApiUtil.fetchChannel(id).then(channel => (
    dispatch(receiveChannel(channel))
  ))
);

export const createChannel = channel => dispatch => (
  ChannelApiUtil.createChannel(channel).then(channel => (
    dispatch(receiveChannel(channel))
  ))
);
