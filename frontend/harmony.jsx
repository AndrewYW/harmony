import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import * as ServerAPIUtil from './util/server_api_util';
import * as ChannelAPIUtil from './util/channel_api_util';
import * as MessageAPIUtil from './util/message_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { fetchServer, fetchServers } from './actions/server_actions';
import { requestChannels, requestChannel } from './actions/channel_actions';
import { requestMessages, requestMessage } from './actions/message_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  //testing

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestChannels = requestChannels;
  window.requestChannel = requestChannel;
  window.requestMessages = requestMessages;
  window.requestMessage = requestMessage;
  window.fetchMessages = MessageAPIUtil.fetchMessages;
  window.fetchMessage = MessageAPIUtil.fetchMessage;
  
  ReactDOM.render(<Root store={ store } />, root);
});


