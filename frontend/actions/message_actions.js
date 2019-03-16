import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const requestMessages = channelId => dispatch => (
  MessageAPIUtil.fetchMessages(channelId).then(messages => (
    dispatch(receiveAllMessages(messages))
  ))
);

export const requestMessage = id => dispatch => (
  MessageAPIUtil.fetchMessage(id).then(message => (
    dispatch(receiveMessage(message))
  ))
);

export const createMessage = message => dispatch => (
  MessageAPIUtil.createMessage(message).then(message => (
    dispatch(receiveMessage(message))
  ))
);